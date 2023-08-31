import { useAppSelector } from "../../hooks/redux";

import styles from "./GameTitle.module.scss";

const GameTitle = () => {
  const gameTitle = useAppSelector((state) => state.specificGame.data.title);
  const isLoading = useAppSelector((state) => state.specificGame.loading);

  return (
    <div className={styles["game-title-container"]}>
      {!isLoading && gameTitle}
    </div>
  );
};

export default GameTitle;
