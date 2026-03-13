import { useEffect } from "react";

export default function VSLBlackNew() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="69ad86e001dc41aee190f3c1"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/439e7094-84a1-43b7-b765-90a1c5aac888/players/69ad86e001dc41aee190f3c1/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="69ad86e001dc41aee190f3c1"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-69ad86e001dc41aee190f3c1" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "12px",
      }} 
    />
  );

};