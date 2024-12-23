"use client";

import React, { useEffect } from "react";
import Clappr from "clappr";

const ClapprPlayer: React.FC = () => {
  const playerId = "clappr-player";

  useEffect(() => {
    const streamUrl = "http://playerservices.streamtheworld.com/pls/RADIOBANDEIRANTESAAC.pls";

    const player = new Clappr.Player({
      source: streamUrl,
      parentId: `#${playerId}`,
      autoPlay: true,
      width: "100%",
      height: "50px",
      mute: false,
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Player Clappr (AAC)</h1>
      <div id={playerId}></div>
    </div>
  );
};

export default ClapprPlayer;
