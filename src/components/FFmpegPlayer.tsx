"use client";

import React, { useEffect, useRef, useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const FFmpegPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Pronto para iniciar!");
  const [outputUrl, setOutputUrl] = useState<string | null>(null);

  const processAudio = async () => {
    try {
      const ffmpeg = createFFmpeg({ log: true });
      setLoading(true);
      setMessage("Carregando FFmpeg...");
      await ffmpeg.load();

      setMessage("Processando áudio...");
      const audioUrl = "https://stream.radioparadise.com/aac-320";

      const response = await fetch(audioUrl);
      const audioFile = new Uint8Array(await response.arrayBuffer());

      ffmpeg.FS("writeFile", "input.aac", audioFile);
      await ffmpeg.run("-i", "input.aac", "-c:a", "aac", "-f", "mp4", "output.mp4");

      const data = ffmpeg.FS("readFile", "output.mp4");
      const blob = new Blob([data.buffer], { type: "video/mp4" });
      const url = URL.createObjectURL(blob);

      setOutputUrl(url);
      setMessage("Processamento concluído!");
    } catch (error) {
      console.error("Erro ao processar o áudio:", error);
      setMessage("Erro ao processar o áudio.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    processAudio();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>FFmpeg no Frontend</h1>
      <p>{message}</p>
      {loading ? (
        <p>Processando...</p>
      ) : (
        <video ref={videoRef} controls style={{ width: "100%", maxWidth: "600px" }}>
          {outputUrl && <source src={outputUrl} type="video/mp4" />}
          Seu navegador não suporta vídeos HTML5.
        </video>
      )}
    </div>
  );
};

export default FFmpegPlayer;
