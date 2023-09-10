"use client";
import React, { useState } from "react";
import ActionButton from "./ActionButton";

type FormProps = {
  post: any;
  setPost: any;
  handleSubmit: any;
  isLoading: any;
  type: any;
};
const Form = ({ post, setPost, handleSubmit, isLoading, type }: FormProps) => {
  return (
    <>
      <section>
        <h1 className="px-3 py-3 ml-16 mr-16 font-semibold uppercase">
          {type} Data Blog
        </h1>
        <div className="bg-white shadow-lg rounded-lg px-3 py-3 mt-2 ml-16 mr-16">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3 gap-2">
              <label className="text-slate-700">Title</label>
              <input
                type="text"
                defaultValue={post.title}
                className="border rounded-lg border-slate-300 font-normal px-2 py-1 text-sm shadow"
                placeholder="Input judul blog"
                required={true}
                onChange={(e) => {
                  setPost({ ...post, title: e.target.value });
                }}
              />
            </div>

            <div className="flex-col flex gap-2 mb-3">
              <label className="text-slate-700">Content</label>
              <textarea
                className="border rounded-lg border-slate-300 px-2 py-1 text-sm shadow"
                rows={5}
                placeholder="Masukkan content blog"
                defaultValue={post.content}
                required={true}
                onChange={(e) => {
                  setPost({ ...post, content: e.target.value });
                }}
              ></textarea>
            </div>

            <div className="flex flex-row justify-end gap-1">
              <ActionButton
                label={"Cancel"}
                color={"bg-red-500"}
                colorHover={"hover:bg-red-600"}
                type={"cancel"}
                isLoading={isLoading}
              />

              <ActionButton
                label={
                  isLoading
                    ? "Loading..."
                    : type === "Create"
                    ? "Save"
                    : "Update"
                }
                color={"bg-indigo-500"}
                colorHover={"hover:bg-indigo-600"}
                type={"submit"}
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
