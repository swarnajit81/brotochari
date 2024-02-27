"use server";
import { revalidatePath } from "next/cache";
import cloudinary from "cloudinary";

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
