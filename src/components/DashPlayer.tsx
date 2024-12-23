"use client";

import React, { useEffect, useRef } from "react";
import dashjs from "dashjs";

const VideoDASHPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const streamUrl = "/path/to/output/manifest.mpd";

    const player = dashjs.MediaPlayer().create();
    player.initialize(video, streamUrl, true);

    return () => {
      player.reset();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Player DASH com FFmpeg</h1>
      <video ref={videoRef} controls style={{ width: "100%", maxWidth: "600px" }}>
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};

export default VideoDASHPlayer;
