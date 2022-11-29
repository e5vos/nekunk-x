import React, { useState, useCallback } from "react";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

export default function Pics({ data, key, element }) {
  const [ViewerImage, setViewerImage] = useState(0);
  const [ViewerOpen, setViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setViewerImage(index);
    setViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setViewerImage(0);
    setViewerOpen(false);
  };

  return (
    <div className="lg:w-2/5 w-full border-2 rounded-md h-auto text-center overflow-hidden cursor-pointer">
      {element ? (
        <div
          className="w-full h-80 bg-cover"
          style={{ backgroundImage: `url(${element.pictures[0]})` }}
          onClick={() => openImageViewer(0)}
        ></div>
      ) : (
        <></>
      )}
      <h1 className="font-poppins text-black text-lg p-2 font-semibold mb-2 mt-2">
        {element && element.title}
      </h1>
      {ViewerOpen && (
        <ImageViewer
          src={element.pictures}
          currentIndex={ViewerImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          className="z-50"
        />
      )}
    </div>
  );
}
