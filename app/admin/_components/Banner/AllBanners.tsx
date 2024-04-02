"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import TableSearch from "../TableSearch";
import { Button } from "@/components/ui/button";
import TablePagination from "../TablePagination";
import useAddBannerStore from "@/store/add-banner-store";

const AllBanners = () => {
  const [search, setSearch] = useState("");
  const addBanner = useAddBannerStore()
  return (
    <div className="bg-white shadow rounded-lg my-8">
      <div className="flex items-center justify-between p-4 border-b">
        <TableSearch value={search} setValue={setSearch} />
        <Button onClick={addBanner.onOpen} variant="primary">
          <Plus size={18} className="mr-1" /> Add New
        </Button>
      </div>
      <div className="relative overflow-x-auto scroll">
        <Table className="lg:w-full w-[900px]">
          <TableHeader className="uppercase  text-sm">
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Redirect</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <Image
                  width={120}
                  height={120}
                  className="h-[60px] w-[60px] object-contain rounded"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt="banner"
                />
              </TableCell>
              <TableCell>Banner 1</TableCell>
              <TableCell>
                <span className="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla velit nihil aliquam, voluptatibus delectus officiis
                  possimus praesentium nam totam sunt?
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap">Explore</TableCell>
              <TableCell className="whitespace-nowrap">Path</TableCell>
              <TableCell className="whitespace-nowrap">2021-01-01</TableCell>
              <TableCell>
                <div className="flex items-end justify-center gap-2">
                  <button>
                    <SquarePen size={20} className="text-blue-400" />
                  </button>
                  <button>
                    <Trash2 size={20} className="text-red-400" />
                  </button>
                </div>
              </TableCell>
            </TableRow>

            <TableRow className="bg-slate-50">
              <TableCell>
                <Image
                  width={120}
                  height={120}
                  className="h-[60px] w-[60px] object-contain rounded"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt="banner"
                />
              </TableCell>
              <TableCell>Banner 1</TableCell>
              <TableCell>
                <span className="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla velit nihil aliquam, voluptatibus delectus officiis
                  possimus praesentium nam totam sunt?
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap">Explore</TableCell>
              <TableCell className="whitespace-nowrap">Path</TableCell>
              <TableCell className="whitespace-nowrap">2021-01-01</TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Image
                  width={120}
                  height={120}
                  className="h-[60px] w-[60px] object-contain rounded"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt="banner"
                />
              </TableCell>
              <TableCell>Banner 1</TableCell>
              <TableCell>
                <span className="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla velit nihil aliquam, voluptatibus delectus officiis
                  possimus praesentium nam totam sunt?
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap">Explore</TableCell>
              <TableCell className="whitespace-nowrap">Path</TableCell>
              <TableCell className="whitespace-nowrap">2021-01-01</TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="bg-slate-50">
              <TableCell>
                <Image
                  width={120}
                  height={120}
                  className="h-[60px] w-[60px] object-contain rounded"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt="banner"
                />
              </TableCell>
              <TableCell>Banner 1</TableCell>
              <TableCell>
                <span className="line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla velit nihil aliquam, voluptatibus delectus officiis
                  possimus praesentium nam totam sunt?
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap">Explore</TableCell>
              <TableCell className="whitespace-nowrap">Path</TableCell>
              <TableCell className="whitespace-nowrap">2021-01-01</TableCell>
              <TableCell>
                <div className="flex items-end justify-center gap-2">
                  <button>
                    <SquarePen size={20} className="text-blue-400" />
                  </button>
                  <button>
                    <Trash2 size={20} className="text-red-400" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
<div className="flex items-center justify-between flex-wrap gap-4 w-full p-4">
    <p>Showing <strong>1-10</strong> of <strong>100</strong></p>
<TablePagination />
</div>
    </div>
  );
};

export default AllBanners;
