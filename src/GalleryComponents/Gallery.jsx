import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);

      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`,
      );

      setImages(res.data);
      setTimeout(() => {
         setLoading(false);
      },100);
      
    }

    fetchImages();
  }, [page]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-5">Page {page}</h1>

      {/* Loading */}
      <div className="">
      {loading ? (
        <h1 className="text-2xl font-bold text-center mt-70">Loading...</h1>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {images.map((el, idx) => (
            <div key={idx}>
              <img
                src={el.download_url}
                alt="image"
                
                className="h-64 w-56 object-cover rounded-lg"
              />

              <h1>{el.author}</h1>
            </div>
          ))}
          </div>
      )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-10 mt-10">
        <button 
          className={` ${loading ? "hidden" : "block"} bg-green-600 text-white px-5 py-2 rounded-xl`}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
         
        >
          Prev
        </button>

        <button
          className={` ${loading ? "hidden" : "block"} bg-green-600 text-white px-5 py-2 rounded-xl`}
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
