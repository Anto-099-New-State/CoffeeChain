"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ConnectButton } from "@rainbow-me/rainbowkit";
  

const WelcomePage = () => {
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const router = useRouter();
  const audioRef = useRef(null);

  const handleDoorClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/cafe");
    }, 1500);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="">
      {/* Loading Screen */}
      {loading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <p className="text-white text-xl">Loading...</p>
        </div>
      )}

      

      {/* Clickable Door */}
      <button
        onClick={handleDoorClick}
        className="absolute top-[150px] left-[650px] w-100 h-100 bg-transparent hover:transition ease-in-out"
      >
        <Image className="cursor-pointer hover:transition ease-out" src="/assets/entershop.png" height={220} width={220}/>
      </button>
      <div className="absolute top-5 left-10">
<DropdownMenu>
    <DropdownMenuTrigger><Image 
      className="cursor-pointer" 
      src="/assets/login.png" 
      height={80} 
      width={80} 
      alt="Login"
    /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-black cursor-pointer"> <ConnectButton /></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
</div>

      {/* Music Player Controls */}
      <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 p-4 rounded-lg flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="text-white bg-gray-800 px-4 py-2 rounded-md"
        >
          {isPlaying ? "Pause 🎵" : "Play ▶"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="cursor-pointer"
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/assets/musicIntro.mp3" loop />
    </div>
  );
};

export default WelcomePage;
