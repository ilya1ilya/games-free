import ScreenshotCarousel from "../ScreenshotCarousel";
import GameDescription from "../GameDescription";

import styles from "./GameInfo.module.scss";

const GameInfo = () => {
  return (
    <div className={styles["game-info-container"]}>
      <ScreenshotCarousel />
      <GameDescription />
    </div>
  );
};

export default GameInfo;
