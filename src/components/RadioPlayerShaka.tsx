"use client";

import React, { useEffect, useRef, useState } from "react";
import shaka from "shaka-player";

const RadioPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Verificar se o tipo de mídia é suportado
    const mimeType = "application/x-mpegURL"; // MIME Type para HLS
    if (!MediaSource.isTypeSupported(mimeType)) {
      setError("Este navegador não suporta o formato HLS.");
      return;
    }

    // Inicializar o Shaka Player
    const player = new shaka.Player(video);

    // URL do stream de rádio
    // const radioUrl = "http://42747t.lp.azioncdn.net/2747t/a/mp4:access_options/rtmp-live/atl_poa.sdp/playlist.m3u8";
    const radioUrl = "http://playerservices.streamtheworld.com/pls/CBN_RJAAC.pls";


    player
      .load(radioUrl)
      .then(() => {
        console.log("Stream de rádio carregado com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao carregar o stream:", err);
        setError("Erro ao carregar o stream. Verifique a URL.");
      });

    return () => {
      // Limpeza do player ao desmontar o componente
      player.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Player de Rádio</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <video ref={videoRef} controls autoPlay style={{ width: "100%" }} />
      )}
    </div>
  );
};

export default RadioPlayer;
