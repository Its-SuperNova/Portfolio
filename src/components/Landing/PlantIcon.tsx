"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

const REVEAL: [number, number] = [0, 70];
const IDLE: [number, number] = [70, 160];

const PlantIcon: React.FC<{ play: boolean; delayMs?: number; className?: string }> = ({
  play,
  delayMs = 0,
  className,
}) => {
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!play) return;
    const timer = window.setTimeout(() => setStarted(true), delayMs);
    return () => window.clearTimeout(timer);
  }, [play, delayMs]);

  return (
    <span className={className} aria-hidden="true">
      <Player
        path="/icons/plant.json"
        play={started}
        loop={revealed}
        segments={revealed ? IDLE : REVEAL}
        onComplete={() => setRevealed(true)}
        style={{ width: "100%", height: "100%" }}
      />
    </span>
  );
};

export default PlantIcon;
