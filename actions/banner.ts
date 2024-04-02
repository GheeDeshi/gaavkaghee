"use server"
import { redirect } from "next/navigation";

export const addBanner = async (formdata: FormData) => {
    const title = formdata.get("title");
    const description = formdata.get("description");
    const image = formdata.get("image");
    const backgroundImage = formdata.get("backgroundImage");
    
};

export const updateBanner = async () => {};

export const deleteBanner = async () => {};

export const getBanners = async () => {
    return []
};

export const getBanner = async () => {};