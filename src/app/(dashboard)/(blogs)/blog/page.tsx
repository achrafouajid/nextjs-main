import React from "react";
import BlogCard from "@/components/BlogCard";

export default function page() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <BlogCard />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <BlogCard />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <BlogCard />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
