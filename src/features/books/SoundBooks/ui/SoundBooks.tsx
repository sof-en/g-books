import { FC, useEffect } from "react";
import { AboutBtn, SaveBtn, useAction, useGetSoundBooksQuery, useTypedSelector } from "../../../../entities";
import { SharedSlider, SoundBookCart, SoundBookSkeleton } from "../../../../shared/ui";
import { SwiperSlide } from "swiper/react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const SoundBooks: FC = () => {
  const {soundbooks, active_audio: activeAudioId} = useTypedSelector((state) => state.books);
  const { data, isLoading } = useGetSoundBooksQuery();
  const { getSoundBooks, setActiveAudio } = useAction();
  // Сохранение аудиокниг
  useEffect(() => {
    if (data?.results) {
      getSoundBooks(data.results);
    }
  }, [data?.results, getSoundBooks]);

  // const [activeAudioId, setActiveAudioId] = useState<string | number | null>(null);
  // Функция для остановки всех аудиокниг
  const stopAllAudio = () => {
    setActiveAudio(null);
  };
 
  return (
    <>
      <SharedSlider>
        {!isLoading ?( soundbooks.map((item) => (
          <SwiperSlide key={item.id}>
            <SoundBookCart
              isPlaying={activeAudioId === item.id}
              setActiveAudio={setActiveAudio}
              item={item}
              saveBtn={<SaveBtn  book={item}/>}
              aboutBtn={<AboutBtn data={item} />}
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
