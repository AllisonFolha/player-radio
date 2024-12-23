"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";

const VideoJSRadioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const player = videojs(audio, {
      controls: true,
      autoplay: true,
    });

    audio.src = "https://stream.radioparadise.com/aac-320"; // URL do rádio

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Video.js - Rádio</h1>
      <audio ref={audioRef} className="video-js" style={{ width: "100%", maxWidth: "600px" }} />
    </div>
  );
};

export default VideoJSRadioPlayer;
