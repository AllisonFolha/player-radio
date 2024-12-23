"use client";

import React, { useEffect, useRef } from "react";
import audiojs from "audio.js";

const AudioJSPlayer: React.FC = () => {
  console.log(audiojs);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current; // Use o áudio referenciado aqui

    if (!audioElement) return;

    // Inicializando o Audio.js no elemento de áudio
    const player = audiojs.create(audioElement);

    return () => {
      // Cleanup para destruir o player quando o componente desmontar
      player.destroy();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>AudioJS - Rádio Online</h1>
      <audio
        ref={audioRef}
        preload="auto"
        controls
        style={{ width: "100%", maxWidth: "600px" }}
        src="https://stream.radioparadise.com/aac-320"
      >
        Seu navegador não suporta áudio HTML5.
      </audio>
    </div>
  );
};

export default AudioJSPlayer;
