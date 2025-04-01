"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const WelcomePage = () => {
  const [loading, setLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const router = useRouter();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio playback failed", error));
    }
  }, []);

  const handleDoorClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/cafe");
    }, 1500);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
          <DropdownMenuTrigger>
            <Image className="cursor-pointer" src="/assets/login.png" height={80} width={80} alt="Login" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-white cursor-pointer border border-dotted"> Get Your Coffee </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Music Mute/Unmute Button */}
      <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 p-4 rounded-lg flex items-center space-x-4">
        <button
          onClick={toggleMute}
          className="text-white bg-gray-800 px-4 py-2 rounded-md"
        >
          {isMuted ? "Unmute 🔊" : "Mute 🔇"}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/assets/musicIntro.mp3" loop autoPlay />
    </div>
  );
};

export default WelcomePage;
