import Image from "next/image";
import Link from "next/link";
import React from "react";
const Page: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-900 h-screen">
        <div className="bg-gray-600 text-white text-xxxl p-2">
          <div className="flex items-center justify-between mx-3">
            <div className="text-xl inline-flex">
              <Link href={"http://localhost:3000"}>
                <button className="my-5">
                  <Image
                    src={"/back.svg"}
                    alt="back"
                    height={16}
                    width={19}
                  ></Image>
                </button>
              </Link>
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
            </div>
            <div className="inline-flex ml-auto">
              <div className="mx-3 my-1">
                <Image
                  src={"/video_call.svg"}
                  alt="video_call"
                  height={16}
                  width={19}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/call.svg"}
                  alt="call"
                  height={16}
                  width={19}
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
        </div>
        <div className="inline-flex p-3 w-full">
          <button className=" inline-flex bg-white h-9 w-80 my-3 mx-3 rounded-xl fixed bottom-0">
            <div className="mx-2 my-1">
              <div className="fixed bottom-0  my-5">
                <Image
                  src={"/smile.svg"}
                  alt="smile"
                  height={20}
                  width={21}
                ></Image>
              </div>
              <div className="mx-7">Type a message</div>
              <div className="fixed bottom-0 right-1/3 my-5">
                <Image
                  src={"/paperclip.svg"}
                  alt="paperclip"
                  height={20}
                  width={21}
                ></Image>
              </div>
              <div className="fixed bottom-0 right-1/4 my-5">
                <Image
                  src={"/camera.svg"}
                  alt="camera"
                  height={20}
                  width={21}
                ></Image>
              </div>
            </div>
          </button>

          <div className="inline-flex fixed bottom-0 right-0 p-3 flex-shrink-0">
            <div className="inline-flex relative text-center">
              <Image
                src={"/voice_message.svg"}
                alt="voice_message"
                height={43}
                width={43}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
