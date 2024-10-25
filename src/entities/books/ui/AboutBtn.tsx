import { FC } from "react";
import { FcAbout } from "react-icons/fc";

export const AboutBtn: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className} title="about">
      <FcAbout />
    </div>
  );
};
