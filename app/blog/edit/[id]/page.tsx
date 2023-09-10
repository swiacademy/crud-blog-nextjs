"use client";
import Form from "@/components/Form";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const getData = async () => {
    await axios
      .get(`/api/blog/${params.id}/edit`)
      .then((res) => {
        if (res.status == 200) {
          setPost({
            ...post,
            title: res.data.title,
            content: res.data.content,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = useCallback(
    async (e: any) => {
      e.preventDefault();

      const data = {
        title: post.title,
        content: post.content,
      };

      setIsLoading(true);

      await axios
        .patch(`/api/blog/${params.id}/update`, data)
        .then((res) => {
          if (res.status == 200) {
            router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [post]
  );
  return (
    <>
      <Form
        post={post}
        setPost={setPost}
        handleSubmit={handleUpdate}
        isLoading={isLoading}
        type={"Update"}
      />
    </>
  );
};

export default page;
