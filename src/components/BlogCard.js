import React from "react";

const BlogCard = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="overflow-hidden rounded-t-lg">
        <img src="blog1.jpg" className="w-full object-cover" alt="blog" />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide font-normal text-gray-600">
          26 Sep, 2023
        </p>
        <h5 className="text-lg text-gray-900 mt-2">
          The Impact of Virtual Reality (VR)
        </h5>
        <p className="text-xs leading-6 text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aspernatur architecto temporibus dignissimos, quaerat, atque
          exercitationem nihil molestiae labore fuga, autem explicabo? Facere
          officiis perferendis ipsam? Illum vel ducimus aliquid?
        </p>
        <a className="text-lg text-gray-600 my-5 block" href="/blog/:id">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
