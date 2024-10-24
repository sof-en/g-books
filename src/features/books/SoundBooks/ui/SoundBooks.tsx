import { FC, useEffect, useState } from "react";
import { useAction, useTypedSelector } from "../../../../shared/model";
import { useGetSoundBooksQuery } from "../../../../entities";
import { SharedSlider, SoundBookCart, SoundBookSkeleton } from "../../../../shared/ui";
import { SwiperSlide } from "swiper/react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const SoundBooks: FC = () => {
  const soundbooks = useTypedSelector((state) => state.books.soundbooks);
  const { data, isLoading } = useGetSoundBooksQuery();
  const { getSoundBooks } = useAction();
  // Сохранение аудиокниг
  useEffect(() => {
    if (data?.results) {
      getSoundBooks(data.results);
    }
  }, [data?.results, getSoundBooks]);

  const [activeAudioId, setActiveAudioId] = useState<string | number | null>(null);

  // Функция для остановки всех аудиокниг
  const stopAllAudio = () => {
    setActiveAudioId(null);
  };
 
  return (
    <>
      <SharedSlider>
        {!isLoading ?( soundbooks.map((item) => (
          <SwiperSlide key={item.id}>
            <SoundBookCart
              isPlaying={activeAudioId === item.id}
              setActiveAudio={setActiveAudioId}
              item={item}
            />
          </SwiperSlide>
        ))) :<SoundBookSkeleton/>}
      </SharedSlider>

      {/* Float Button для остановки воспроизведения */}
       
        <Button
          type="primary"
          shape="circle"
          icon={<CloseOutlined />}
          onClick={stopAllAudio}
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            zIndex: 1000,
            display: activeAudioId ? "flex" : "none",
          }}
        />
    </>
  );
};
