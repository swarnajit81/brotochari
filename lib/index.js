"use client"

import clsx from "clsx"
import {twMerge} from 'tailwind-merge'

export const cn = (...args) => {
    return twMerge(clsx(args))
}

export const dummyImages = [
    {
        img: "/images/1.jpg"
    },
    {
        img: "/images/2.jpg"
    },
    {
        img: "/images/3.jpg"
    },
    {
        img: "/images/4.jpg"
    },
    {
        img: "/images/5.jpg"
    },
    {
        img: "/images/6.jpg"
    },
    {
        img: "/images/7.jpg"
    },
    {
        img: "/images/8.jpg"
    },
]