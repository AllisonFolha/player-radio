"use client";

import React, { useEffect, useRef } from "react";

const VideoHLSPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const streamUrl = "/path/to/output/playlist.m3u8";

    video.src = streamUrl;
    video.play()
      .then(() => console.log("HLS stream carregado e reproduzido."))
      .catch((error) => console.error("Erro ao carregar o stream HLS:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Player HLS com FFmpeg</h1>
      <video ref={videoRef} controls style={{ width: "100%", maxWidth: "600px" }}>
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};

export default VideoHLSPlayer;
