"use client";

import React, { useEffect, useRef } from "react";

const SimpleRadioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.src = "https://stream.radioparadise.com/aac-320";
    audio.play()
      .then(() => console.log("Tocando rádio..."))
      .catch((error) => console.error("Erro ao carregar o rádio:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>HTML5 Puro - Rádio</h1>
      <audio ref={audioRef} controls style={{ width: "100%", maxWidth: "600px" }}>
        Seu navegador não suporta áudio HTML5.
      </audio>
    </div>
  );
};

export default SimpleRadioPlayer;
