"use client";

import React, { useEffect, useRef } from "react";
import MediaElementPlayer from "mediaelement";

const MediaElementRadioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const player = new MediaElementPlayer(audio, {
      features: ['playpause', 'volume'],
    });

    audio.src = "https://stream.radioparadise.com/aac-320"; // URL do rádio

    return () => {
      player.remove();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MediaElement.js - Rádio</h1>
      <audio ref={audioRef} controls style={{ width: "100%", maxWidth: "600px" }}>
        Seu navegador não suporta áudio HTML5.
      </audio>
    </div>
  );
};

export default MediaElementRadioPlayer;
