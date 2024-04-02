"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAddBannerStore from "@/store/add-banner-store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AddCategorySchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const AddBannerModal = () => {
  const addBannerStore = useAddBannerStore();
  const form = useForm<z.infer<typeof AddCategorySchema>>({
    resolver: zodResolver(AddCategorySchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file.type.startsWith("image/")) {
      console.error("Please upload an image file");
      return;
    }

    // const loading = toast.loading("Uploading...");
    try {
      const formData = new FormData();
      formData.append("file", file);
      // const data = await uploadMedia(formData);
      // if (data) {
      //   setBanner(data.url);
      // }
    } catch (error) {
      console.error("Something went wrong uploading file");
    } finally {
      // toast.dismiss(loading);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const onSubmit = (values: z.infer<typeof AddCategorySchema>) => {
    console.log(values);
  };

  return (
    <Dialog open={addBannerStore.open} onOpenChange={addBannerStore.onClose}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle className="font-bold text-slate-900">
            Add Category
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-center w-full">
              <label
                {...getRootProps()}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                htmlFor="file"
                className="flex flex-col items-center justify-center w-full h-40 border border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or JPEG
                  </p>
                </div>
                <Input
                  {...getInputProps()}
                  id="file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBannerModal;
