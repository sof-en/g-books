import { FC, useState } from "react";
import { FcAbout } from "react-icons/fc";
import { ResultData, useAction } from "../../../shared/model";
import { SharedDrawer, SoundBookCart } from "../../../shared/ui";
import { Link } from "react-router-dom";

export const AboutBtn: FC<{ className?: string; data: ResultData }> = ({
  className,
  data,
}) => {
 const {setActiveAudio} = useAction()
  const [activeAudioId, setActiveAudioId] = useState<string | number | null>(
    null
  );

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    setActiveAudioId(null)
    setActiveAudio(null)
  };
  const onClose = () => {
    setOpen(false);
    setActiveAudioId(null);
    setActiveAudio(null)
  };

  return (
    <>
      <button onClick={showDrawer} className={className} title="about">
        <FcAbout />
      </button>
      <SharedDrawer
        open={open}
        onClose={onClose}
        title={"Подробнее о книге"}
        width={500}
      >
        <div className=" w-[100%] flex items-center flex-col gap-[15px]  ">
          {data.formats["image/jpeg"] && (
            <img src={data.formats["image/jpeg"]} alt="book cover" />
          )}
          <Link
            to={data.formats["text/html"]}
            className="text-[24px] mt-[15px] "
          >
            {data.title}
          </Link>
          <span className="text-[#6b7280] ">{data.authors[0]?.name}</span>
          <div className=" w-[80%] mx-auto p-[10px] flex flex-col items-center gap-[15px] ">
            <div className="flex items-center justify-between w-[100%] ">
              <span>Годы жизни:</span>
              <div>
                <span>{data.authors[0]?.birth_year}.г</span>
                <span>-</span>
                <span>{data.authors[0]?.death_year}.г</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%] ">
              <span>Языки:</span>
              <div>
                {data.languages.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col justify-start gap-[15px]  w-[100%] ">
              <span>Subject</span>
              <div className="flex gap-[10px] flex-col items-start">
                {data.subjects?.map((item) => (
                  <span key={item} className=" text-[#6b7280] ">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col gap-[15px] justify-between w-[100%]">
              <span>Озвучка:</span>
              {data.formats["audio/mp4"] ? (
                <SoundBookCart
                  item={data}
                  isPlaying={activeAudioId === data.id}
                  setActiveAudio={setActiveAudioId}
                  isTitle={false}                 />
              ) : (
                <span> озвучки отсутствуют </span>
              )}
            </div>
          </div>
        </div>
      </SharedDrawer>
    </>
  );
};
