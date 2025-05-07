import React, { useState } from "react";

const videos = [
  {
    title: "Icre8 Highlight",
    thumbnail: "/images/v1.png",
    src: "/video/IcreateHighlight.mp4",
  },
  {
    title: "Icre8 Highlight-2",
    thumbnail: "/images/v2.png",
    src: "/video/IcreateHighlight2.mp4",
  },
  {
    title: "JBS Field Trip Highlight",
    thumbnail: "/images/v3.png",
    src: "/video/jbsfieldtriphighlight.mp4",
  },
];

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar Thumbnails */}
      <div className="w-1/4 p-4 space-y-4 overflow-y-auto bg-gray-900 border-r border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Video List</h2>
        {videos.map((video, i) => (
          <div
            key={i}
            className="cursor-pointer hover:opacity-80 transition"
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded mb-1"
            />
            <p className="text-sm text-gray-300">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Main Video Player */}
      <div className="flex-1 flex items-center justify-center bg-white p-6">
        <video
          key={currentVideo.src}
          src={currentVideo.src}
          controls
          autoPlay
          className="w-full max-w-4xl rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default VideoGallery;
