import Image from "next/image";
import { useRef, useState } from "react";
import audiobtn from "@/assets/audiobtn.svg";

const AudioPlay = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }
  };

  const playAudio = () => {
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div>
      <Image
        src={audiobtn}
        width={32}
        height={32}
        alt="Audio Button"
        onClick={toggleAudio}
        style={{ cursor: "pointer" }}
      />
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export default AudioPlay;
