import React from "react";
import marriage_video from "../images/video.MP4";

const Video = () => {
  return (
    <div className="video__parent" style={{ padding: "2rem" }}>
      <div>
        <video
          className="video__child"
          width="50%"
          height="auto"
          loop
          autoPlay={true}
          muted
        >
          <source src={marriage_video} type="video/mp4" />
          {/* <source src={marriage_video} type="video/MP4" /> */}
          <source src={marriage_video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
