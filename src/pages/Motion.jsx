// import React, { useState } from "react";

// const videos = [
//   {
//     title: "Icre8 Highlight",
//     thumbnail: "/images/v1.png",
//     src: "/video/IcreateHighlight.mp4",
//   },
//   {
//     title: "Icre8 Highlight-2",
//     thumbnail: "/images/v2.png",
//     src: "/video/IcreateHighlight2.mp4",
//   },
//   {
//     title: "JBS Field Trip Highlight",
//     thumbnail: "/images/v3.png",
//     src: "/video/jbsfieldtriphighlight.mp4",
//   },
// ];

// const VideoGallery = () => {
//   const [currentVideo, setCurrentVideo] = useState(videos[0]);

//   return (
//     <div className="flex h-screen bg-black text-white">
//       {/* Sidebar Thumbnails */}
//       <div className="w-1/4 p-4 space-y-4 overflow-y-auto bg-gray-900 border-r border-gray-700">
//         <h2 className="text-xl font-semibold mb-4">Video List</h2>
//         {videos.map((video, i) => (
//           <div
//             key={i}
//             className="cursor-pointer hover:opacity-80 transition"
//             onClick={() => setCurrentVideo(video)}
//           >
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               className="rounded mb-1"
//             />
//             <p className="text-sm text-gray-300">{video.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Main Video Player */}
//       <div className="flex-1 flex items-center justify-center bg-white p-6">
//         <video
//           key={currentVideo.src}
//           src={currentVideo.src}
//           controls
//           autoPlay
//           className="w-full max-w-4xl rounded shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
      {/* Sidebar Thumbnails */}
      <div className="w-full lg:w-80 p-6 space-y-4 bg-gray-800 lg:h-screen lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 tracking-tight">
          Video Gallery
        </h2>
        {videos.map((video, i) => (
          <div
            key={i}
            className={`group relative cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
              currentVideo.src === video.src ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-32 object-cover rounded-lg group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="mt-2 text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
              {video.title}
            </p>
          </div>
        ))}
      </div>

      {/* Main Video Player */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 bg-gray-900">
        <div className="w-full max-w-5xl">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video
              key={currentVideo.src}
              src={currentVideo.src}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full">
              <span className="text-sm font-semibold">
                {currentVideo.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
