"use client";

import { useEffect, useRef, useState } from "react";

type AudioState = "off" | "on" | "blocked";

export function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("off");

  const startSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    try {
      await audio.play();
      window.localStorage.setItem("portfolio-sound", "on");
      setAudioState("on");
    } catch {
      setAudioState("blocked");
    }
  };

  const stopSound = () => {
    audioRef.current?.pause();
    window.localStorage.setItem("portfolio-sound", "off");
    setAudioState("off");
  };

  useEffect(() => {
    const preference = window.localStorage.getItem("portfolio-sound");

    if (preference === "off") return;

    const attempt = window.setTimeout(() => {
      void startSound();
    }, 350);

    return () => {
      window.clearTimeout(attempt);
      audioRef.current?.pause();
    };
  }, []);

  const isOn = audioState === "on";

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/portfolio-song.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        className={`sound-control ${isOn ? "is-playing" : ""} ${
          audioState === "blocked" ? "needs-action" : ""
        }`}
        onClick={() => (isOn ? stopSound() : void startSound())}
        aria-pressed={isOn}
        aria-label={isOn ? "Pause music" : "Play music"}
        title={isOn ? "Pause music" : "Play music"}
      >
        <span className="sound-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>

        <span>{isOn ? "Music on" : "Music off"}</span>
      </button>
    </>
  );
}