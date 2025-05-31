"use client";

import { Pause, Play } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

type AudioPlayerProps = {
  src: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const container = waveformRef.current;
    if (!container) return;

    const ws = WaveSurfer.create({
      container,
      height: 30,
      barWidth: 3,
      barGap: 5,
      barRadius: 2,
      normalize: true,
      cursorWidth: 3,
      waveColor: "#ccc",
      progressColor: "#7c3aed",
    });

    wavesurferRef.current = ws;

    ws.load(src);

    ws.on("play", () => {
      setIsPlaying(true);
      window.dispatchEvent(
        new CustomEvent("pauseOtherWaveSurfers", { detail: ws })
      );
    });

    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => setIsPlaying(false));

    return () => {
      ws.destroy();
    };
  }, [src]);

  // Listen for event to pause other players
  useEffect(() => {
    const handlePauseOthers = (e: Event) => {
      const current = wavesurferRef.current;
      const playingOne = (e as CustomEvent).detail as WaveSurfer;

      if (current && current !== playingOne && current.isPlaying()) {
        current.pause();
      }
    };

    window.addEventListener("pauseOtherWaveSurfers", handlePauseOthers);
    return () => {
      window.removeEventListener("pauseOtherWaveSurfers", handlePauseOthers);
    };
  }, []);

  const togglePlay = () => {
    wavesurferRef.current?.playPause();
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        className="text-purple-main bg-white w-8 h-8 rounded-full flex justify-center items-center border border-purple-main p-1 cursor-pointer"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Pause className="fill-purple-main" />
        ) : (
          <Play className="fill-purple-main" />
        )}
      </button>
      <div className="w-full">
        <div ref={waveformRef} />
      </div>
    </div>
  );
};

export default AudioPlayer;
