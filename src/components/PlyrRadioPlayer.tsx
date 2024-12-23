"use client";

import React, { useEffect, useRef } from "react";
import Plyr from "plyr";

const PlyrRadioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const player = new Plyr(audio, {
      controls: ['play', 'progress', 'volume'],
    });

    audio.src = "https://stream.radioparadise.com/aac-320"; // URL do rádio

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Plyr - Rádio</h1>
      <audio ref={audioRef} controls style={{ width: "100%", maxWidth: "600px" }}>
        Seu navegador não suporta áudio HTML5.
      </audio>
    </div>
  );
};

export default PlyrRadioPlayer;
