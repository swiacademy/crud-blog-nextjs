"use client";

import { useRouter } from "next/navigation";
import { type } from "os";
import { useCallback } from "react";

type ActionButtonProps = {
  label: string;
  color: string;
  colorHover: string;
  type: string;
};

const ActionButton = ({
  label,
  color,
  colorHover,
  type,
}: ActionButtonProps) => {
  const router = useRouter();

  const handleActionButton = useCallback(
    (event: any) => {
      if (type === "cancel") {
        event.preventDefault();
        router.push("/");
      }
    },
    [type]
  );
  return (
    <button
      className={`${color} text-white px-2 py-1 rounded-lg cursor-pointer ${colorHover}`}
      onClick={(e) => {
        handleActionButton(e);
      }}
    >
      {label}
    </button>
  );
};

export default ActionButton;
