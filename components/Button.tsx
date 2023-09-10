import React, { useCallback } from "react";
import Link from "next/link";
import Router from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  label: string;
  url: string;
};

const Button = ({ label, url }: Props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(url);
  }, [url]);

  return (
    <div
      className="bg-blue-600 px-3 py-2 text-white rounded-lg hover:bg-blue-800 cursor-pointer"
      onClick={() => {
        handleClick();
      }}
    >
      {label}
    </div>
  );
};

export default Button;
