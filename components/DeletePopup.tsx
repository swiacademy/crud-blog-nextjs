import { Dialog, Transition } from "@headlessui/react";
import { useSWRConfig } from "swr";
import { Fragment, useCallback, useState } from "react";
import axios from "axios";

type DeletePopupProps = {
  open: boolean;
  uri: string;
  id: string;
};
const DeletePopup = ({ open, uri, id }: DeletePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useSWRConfig();
  function closeModal() {
    setIsOpen(open);
  }

  function openModal() {
    setIsOpen(!open);
  }

  const handleDelete = useCallback(async () => {
    await axios
      .delete(`/api/${uri}/${id}/delete`)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setIsOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        mutate(`/api/${uri}`);
      });
  }, [uri, id]);

  return (
    <>
      <div
        className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 cursor-pointer"
        onClick={openModal}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
          Delete
        </svg>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-red-500 font-bold"
                  >
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                      Hapus Data
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Apakah Anda benar-benar ingin menghapus? Proses ini tidak
                      dapat dibatalkan.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end items-end">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 mr-2"
                      onClick={handleDelete}
                    >
                      Ya
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeletePopup;
