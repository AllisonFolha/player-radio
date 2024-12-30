"use client";

import React, { useEffect, useRef, useState } from "react";
import shaka from "shaka-player/dist/shaka-player.compiled.js";

const ShakaAudioPlayer: React.FC<{ src: string }> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isCasting, setIsCasting] = useState(false);

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

  const handleCastToTv = () => {
    if (
      !window.chrome ||
      !window.chrome.cast ||
      !window.chrome.cast.media ||
      !window.cast ||
      !window.cast.framework
    ) {
      console.error("Casting não é suportado ou o script do Chromecast não foi carregado.");
      return;
    }
  
    const castContext = window.cast.framework.CastContext.getInstance();
    castContext.setOptions({
      receiverApplicationId: window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    });
  
    const castSession = castContext.getCurrentSession();
    if (!castSession) {
      console.error("Nenhuma sessão de cast encontrada.");
      return;
    }
  
    const mediaInfo = new window.chrome.cast.media.MediaInfo(src, "audio/mp3");
    const request = new window.chrome.cast.media.LoadRequest(mediaInfo);
  
    castSession
      .loadMedia(request)
      .then(() => {
        console.log("Mídia carregada na TV.");
        setIsCasting(true);
      })
      .catch((error) => {
        console.error("Erro ao carregar mídia na TV:", error);
        setIsCasting(false);
      });
  };
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Shaka Player - Rádio Online</h1>
      <audio
        ref={audioRef}
        controls
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleCastToTv}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: isCasting ? "green" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isCasting ? "Tocando na TV" : "Tocar na TV"}
        </button>
      </div>
    </div>
  );
};

export default ShakaAudioPlayer;
