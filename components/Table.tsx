import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import DeletePopup from "./DeletePopup";

const Table = () => {
  const fetcher = async (url: any) => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data: posts, error } = useSWR("/api/blog", fetcher);

  if (error) return <div>Failed to fetch data</div>;

  return (
    <div>
      {posts ? (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-2 py-1">No</th>
              <th className="px-2 py-1">Title</th>
              <th className="px-2 py-1">Content</th>
              <th className="px-2 py-1">Updated At</th>
              <th className="px-2 py-1">Created At</th>
              <th className="px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any, index: any) => (
              <tr key={post.id} className="bg-white border-b ">
                <td className="px-2 py-1">{index + 1}</td>
                <td className="px-2 py-1">{post.title}</td>
                <td className="px-2 p   y-1">{post.content}</td>
                <td className="px-2 py-1">{post.updatedAt}</td>
                <td className="px-2 py-1">{post.createdAt}</td>
                <td className="px-2 py-1">
                  <div className="flex flex-row gap-2">
                    <Link
                      href={`/blog/edit/${post.id}`}
                      className="bg-orange-500 text-white px-2 py-1 rounded-lg hover:bg-orange-700 cursor-pointer"
                    >
                      Edit
                    </Link>
                    <DeletePopup open={false} uri={"blog"} id={post.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Table;
