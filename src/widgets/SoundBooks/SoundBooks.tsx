import { FC } from "react";
import { LayoutBooksContent } from "../../shared/ui";
import { SoundBooks } from "../../features";

export const SoundBooksLayout: FC = () => {
  return (
    <LayoutBooksContent text="Sound Books">
      <SoundBooks />
    </LayoutBooksContent>
  );
};
