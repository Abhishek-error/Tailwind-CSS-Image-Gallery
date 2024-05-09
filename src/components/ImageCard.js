import React from "react";
import { saveAs } from "file-saver";
const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  const urlimg = image.largeImageURL;

  const download = () => {
    saveAs(urlimg, "image");
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Anchor element to open the image in a new tab */}
      <a href={urlimg} target="_blank" rel="noopener noreferrer">
        <img src={image.webformatURL} alt="" className="w-full" />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      {/* Download button */}
      <button
        onClick={download}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          className="fill-current w-4 h-4 mr-2 download-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
};

export default ImageCard;
