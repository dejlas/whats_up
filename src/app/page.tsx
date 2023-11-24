"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="bg-gray-600 text-white text-xxxl p-2">
          <div className="flex items-center justify-between mx-3">
            <div className="text-xl">WhatsApp</div>
            <div className="inline-flex ml-auto">
              <div>
                <Image
                  src={"/loupe.svg"}
                  alt="loupe"
                  height={25}
                  width={25}
                ></Image>
              </div>
              <div className="">
                <Image
                  src={"/menu.svg"}
                  alt="menu"
                  height={25}
                  width={25}
                ></Image>
              </div>
            </div>
          </div>
          <div>
            <div className="flex my-5 items-center">
              <div>
                <Image
                  src={"/camera.svg"}
                  alt="camera"
                  height={20}
                  width={20}
                ></Image>
              </div>
              <div className="inline-flex justify-between w-full mx-3 my-1">
                <div className="inline-flex text-teal-400 text-s">
                  CHATS
                  <div className="mx-1 bg-teal-400 text-gray-800 rounded-full h-5 w-5 flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="">STATUS</div>
                <div className="">CALLS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Link href={"/messages"}>
            <button className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
              <div className="inline-flex items-center">
                <div className="mx-3">
                  <Image
                    src={"/pictures/woman1.png"}
                    alt="woman1"
                    height={50}
                    width={50}
                  ></Image>
                </div>
                <div className="flex">
                  <div className="text-xl mx-2">Jane Doe</div>
                </div>
              </div>
              <div className="mx-3">3:14 pm</div>
            </button>
          </Link>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/man1.png"}
                  alt="man1"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">John Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/woman2.png"}
                  alt="woman2"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">Jane Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/man2.png"}
                  alt="man2"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">John Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/woman3.png"}
                  alt="woman3"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">Jane Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/man3.png"}
                  alt="man3"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">John Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/man4.png"}
                  alt="man4"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">John Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/woman4.png"}
                  alt="woman4"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">Jane Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2 bg-gray-900">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/woman5.png"}
                  alt="woman5"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">Jane Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 text-white border-b-white border-b-2 bg-gray-900">
            <div className="inline-flex items-center">
              <div className="mx-3">
                <Image
                  src={"/pictures/man5.png"}
                  alt="man5"
                  height={50}
                  width={50}
                ></Image>
              </div>
              <div className="flex">
                <div className="text-xl mx-2">John Doe</div>
              </div>
            </div>
            <div className="mx-3">3:14 pm</div>
          </div>
          <div className="flex justify-between items-center w-full p-2 h-10 bg-gray-900"></div>
        </div>
        <div className="fixed bottom-0 right-0 p-3 flex-shrink-0">
          <div className="relative text-center">
            <Image src={"/chat.svg"} alt="chat" height={51} width={52}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
