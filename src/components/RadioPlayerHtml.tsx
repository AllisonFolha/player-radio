"use client"; // Necessário para habilitar hooks no lado do cliente

import React, { useEffect, useRef } from "react";

const RadioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Configurar a URL do stream da rádio
    const radioUrl = "https://stream.radioparadise.com/aac-320"; // URL fornecida
    // const radioUrl = "http://playerservices.streamtheworld.com/pls/CBN_SPAAC.pls"; // URL fornecida


    // Atribui a URL do stream ao áudio
    audio.src = radioUrl;

    // Inicia o stream automaticamente
    audio.play()
      .then(() => console.log("Rádio carregada e tocando!"))
      .catch((error) => console.error("Erro ao carregar a rádio:", error));

  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Player de Rádio</h1>
      <audio ref={audioRef} controls style={{ width: "100%", maxWidth: "600px" }}>
        Seu navegador não suporta áudio HTML5.
      </audio>
    </div>
  );
};

export default RadioPlayer;
