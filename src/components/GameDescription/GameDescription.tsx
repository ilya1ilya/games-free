import { useAppSelector } from "../../hooks/redux";

import styles from "./GameDescription.module.scss";

const GameDescription = () => {
  const data = useAppSelector((state) => state.specificGame.data);
  const isLoading = useAppSelector((state) => state.specificGame.loading);

  const renderGameImage = () => {
    const { thumbnail, title } = data;

    return (
      <img
        className={styles["game-description-container-image"]}
        src={thumbnail}
        alt={`title of ${title}`}
      />
    );
  };

  const renderBasicInfo = () => {
    const { genre, release_date, developer, publisher } = data;

    return (
      <div className={styles["game-description-container__basic-info"]}>
        <h4>Basic info: </h4>
        <span>Genre: {genre}</span>
        <span>Release date: {release_date}</span>
        <span>Developer: {developer}</span>
        <span>Publisher: {publisher}</span>
      </div>
    );
  };

  const renderSystemRequirements = () => {
    if (!data.minimum_system_requirements) {
      return;
    }

    const { os, processor, memory, graphics, storage } =
      data.minimum_system_requirements!;

    return (
      <div
        className={styles["game-description-container__system-requirements"]}
      >
        <h4>System requirements: </h4>
        <span>OS: {os}</span>
        <span>Processor: {processor}</span>
        <span>Memory: {memory}</span>
        <span>Graphics: {graphics}</span>
        <span>Storage: {storage}</span>
      </div>
    );
  };

  return (
    <div className={styles["game-description-container"]}>
      {!isLoading && renderGameImage()}
      {!isLoading && renderBasicInfo()}
      {!isLoading && renderSystemRequirements()}
    </div>
  );
};

export default GameDescription;
