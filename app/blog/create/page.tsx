"use client";
import Form from "@/components/Form";
import React, { useState } from "react";

const page = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("click handle submit");
    console.log(post);
  };

  return (
    <div>
      <Form post={post} setPost={setPost} handleSubmit={handleSubmit} />
    </div>
  );
};

export default page;
