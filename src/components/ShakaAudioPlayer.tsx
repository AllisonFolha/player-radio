"use client";

import React, { useEffect, useRef } from "react";
import shaka from "shaka-player/dist/shaka-player.compiled.js";

const ShakaAudioPlayer: React.FC<{ src: string }> = ({ src }) => {
  const audioRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const audioElement = audioRef.current;

    if (!audioElement) return;

    // Inicializando o Shaka Player
    const player = new shaka.Player(audioElement);

    // Adicionando um listener para erros
    player.addEventListener("error", (event) => {
      console.error("Erro no Shaka Player:", event);
    });

    // Carregar o arquivo de áudio
    player
      .load(src)
      .then(() => {
        // Reproduzir automaticamente após o carregamento
        audioElement.play().catch((error) => {
          console.warn("Autoplay foi bloqueado pelo navegador:", error);
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar o áudio:", error);
      });

    return () => {
      // Cleanup: destruindo o player quando o componente desmontar
      player.destroy();
    };
  }, [src]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shaka Player - Rádio Online</h1>
      <audio
        ref={audioRef}
        controls
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </div>
  );
};

export default ShakaAudioPlayer;
