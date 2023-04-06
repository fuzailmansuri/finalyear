import React from "react";

export default function NewsCard() {
  return (
    <div className=" mx-auto  flex-col flex hover:scale-[101%] duration-150 p-2 ">
      <div>
        <img className=" aspect-video w-full rounded-3xl" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F02%2F15%2F09%2F33%2Fnews-636978_640.jpg&f=1&nofb=1&ipt=4f4a712d741391fb2ed7c74cb4ef20ff827b5a3166a3fb5de98a8f799ac2beff&ipo=images'} />
      </div>
      <div className=" gap-2 flex  flex-col border-b-[1px] border-[#DDDBCB]/60 pb-6 rounded-xl ">
        <div className=" text-xs text-[#050401] rounded-full  lg:text-sm bg-[#1B9AAA] px-5 py-2   w-fit my-3 ">
          Category
        </div>
        <div className=" text-md font-semibold lg:text-md">title</div>
        <div className=" text-xs break-all max-w-full  lg:text-sm font-merri font-light text-[#DDDBCB]/40">
          description
        </div>


      </div>
    </div>
  );
}
