import { FC } from "react";
import { Skeleton } from "antd"; // Используем Skeleton из Ant Design

export const SharedCartSkeleton: FC = () => {
  return (
    <div className="flex items-center overflow-auto    gap-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-[100%]  flex flex-col gap-3 bg-whiteGray rounded-[10px] p-[10px]"
        >
          <Skeleton.Image
            active={true}
            style={{ width: "100%", height: "300px" }}
          />
          <Skeleton active={true} title={false} paragraph={{ rows: 2 }} />
          <Skeleton.Button active={true} style={{ width: "50px" }} />
        </div>
      ))}
    </div>
  );
};
