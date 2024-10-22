import { Button, Slider } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import { ResultData } from "../../model";
import styles from "./soundBooks.module.scss";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

interface Props {
  isPlaying: boolean;
  setActiveAudio: (id: number | string) => void;
  item: ResultData;
}

export const SoundBookCart: FC<Props> = ({ isPlaying, setActiveAudio, item }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Воспроизведение/пауза
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setActiveAudio(""); // Остановить воспроизведение
      } else {
        audioRef.current.play();
        setActiveAudio(item.id); // Начать воспроизведение
      }
    }
  };

  // Обновление времени воспроизведения
  const onTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      setCurrentTime(currentTime);
      setProgress((currentTime / duration) * 100);
    }
  };

  // Изменение времени вручную через ползунок
  const onSliderChange = (value: number) => {
    if (audioRef.current) {
      const newTime = (audioRef.current.duration / 100) * value;
      audioRef.current.currentTime = newTime;
      setProgress(value);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.audioPlayerContainer}>
      <div className={styles.info}>
        <p>{item.title}</p>
        <div className={styles.authors}>
          {item.authors.map((author, index) => (
            <span key={index}>{author.name}</span>
          ))}
        </div>
      </div>

      <div className={styles.player}>
        <audio
          ref={audioRef}
          src={item.formats["audio/mp4"]}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setActiveAudio("")} // Остановить воспроизведение, когда закончится
        ></audio>

        <Button
          type="primary"
          shape="circle"
          icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
          onClick={togglePlay}
          className={styles.playButton}
        />

        <Slider value={progress} onChange={onSliderChange} />
      </div>
      <span>{parseInt(currentTime.toFixed(0))}c</span>
    </div>
  );
};
