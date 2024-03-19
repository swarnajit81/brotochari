"use server";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import cloudinary from "cloudinary";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const defaultSessionOptions = {
  username: "",
  isLoggedIn: false,
};

const SessionOptions = {
  password: "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8",

  cookieName: "brotochari-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

export const deleteImage = async (publicId) => {
  try {
    await cloudinary.v2.uploader.destroy(publicId, {
      invalidate: true,
      resource_type: "image",
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin");
};

export const getImages = async () => {
  const { resources } = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "asc")
    .max_results(30)
    .execute();

  return resources;
};

export const getSession = async () => {
  const session = await getIronSession(cookies(), SessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSessionOptions.isLoggedIn;
  }

  return session;
};

export const login = async (prevState, formData) => {
  const session = await getSession();
  const username = formData.get("username");
  const password = formData.get("password");
  // session.username = formData.get("username");
  if (username == "admin" && password == "admin") {
    session.username = username;
    session.isLoggedIn = true;

    await session.save();
    redirect("/admin");
  } else {
    return {
      error: "Invalid username or password",
    };
  }
};

export const handleRedirect = async () => {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/admin");
  } else {
    redirect("/login");
  }
};
