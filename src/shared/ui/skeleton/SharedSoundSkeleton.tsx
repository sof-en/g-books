import { FC } from "react";
import { Skeleton, Slider } from "antd";
import styles from "./style.module.scss"

export const SoundBookSkeleton: FC = () => {
  return (
    <div className="flex items-center  gap-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={styles.audioPlayerContainer}>
          <div className={styles.info}>
            <Skeleton title={false} paragraph={{ rows: 1 }} active={true} />
            <div className={styles.authors}>
              <Skeleton.Input
                style={{ width: 100 }}
                active={true}
                size="small"
              />
            </div>
          </div>

          <div className={styles.player}>
            <Skeleton.Button
              active={true}
              shape="circle"
              className={styles.playButton}
            />
            <Slider disabled={true} value={0} />
          </div>
          <Skeleton.Input style={{ width: 50 }} active={true} />
        </div>
      ))}
    </div>
  );
};
