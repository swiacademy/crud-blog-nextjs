"use client";
import Form from "@/components/Form";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // console.log("click handle submit");
    // console.log(post);

    setIsLoading(true);

    const data = {
      title: post.title,
      content: post.content,
    };

    await axios
      .post("/api/blog", data)
      .then((res) => {
        if (res.status == 201) {
          setIsLoading(false);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <div>
      <Form
        post={post}
        setPost={setPost}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        type={"Create"}
      />
    </div>
  );
};

export default page;
