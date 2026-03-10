import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss";

const Gallery = () => {
  const [title, setTitle] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fun() {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`,
      );
      console.log(res.data);
      setTitle(res.data);
    }
    fun();
  }, [page]);

 
  return (
    <div className="min-h-screen p-6 pb-24">
      <h1 className=" ml-5  rounded-lg bg-black h-10 w-10 text-white font-bold flex justify-center items-center">
        {page}
      </h1>
      <div className="  m-5  flex justify-between overflow-x-auto flex-wrap">
        {title.map(function (el, idx) {
          return (
            <h1 key={idx}>
              <img
                src={el.download_url}
                alt="image"
                className=" h-65 w-55 object-cover rounded flex"
              />
              Hello {el.author}
            </h1>
          );
        })}
      </div>
      <div className="flex gap-12 top-175 justify-center w-full fixed ">
        <button
          className="  border-3 p-1 h-13 w-20 rounded-xl bg-green-600 active:scale-95  "
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
             
            }
             
          }}
        >
          Prev
        </button>
        <button
          className="border-3 p-1 h-13 w-20 rounded-xl bg-green-600 active:scale-95"
          onClick={() => {
            setPage(page + 1);
             
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
