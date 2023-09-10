"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [label, setLabel] = useState("Loading...");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setLabel("Posting Blog");
    setUrl("/blog/create");
  }, [label, url]);

  // return <h1 className=" bg-yellow-100 text-red-600">Hello Next JS</h1>;

  return (
    <>
      <section className="px-3 py-3 flex flex-col items-center ml-8 mr-8 mt-4 rounded-lg">
        <h1 className="font-semibold text-2xl">List Blog</h1>

        <div className="flex flex-row justify-end w-full">
          <Button label={label} url={url} />
        </div>

        <div className="flex justify-center">Datatable</div>
      </section>
    </>
  );
}
