"use client";
import React, { useState } from "react";
import ActionButton from "./ActionButton";

type FormProps = {
  post: any;
  setPost: any;
  handleSubmit: any;
};
const Form = ({ post, setPost, handleSubmit }: FormProps) => {
  return (
    <>
      <section className="bg-white shadow rounded-lg px-3 py-3 mt-2 ml-2 mr-2">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3 gap-2">
            <label className="text-slate-700">Title</label>
            <input
              type="text"
              value={post.title}
              className="border rounded-lg border-slate-300 font-normal px-2 py-1 text-sm"
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
              className="border rounded-lg border-slate-300 px-2 py-1 text-sm"
              rows={5}
              placeholder="Masukkan content blog"
              value={post.content}
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
            />

            <ActionButton
              label={"Simpan"}
              color={"bg-indigo-500"}
              colorHover={"hover:bg-indigo-600"}
              type={"submit"}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
