import styles from "./GameItem.module.scss";

interface Props {
  id: string;
  src: string;
  alt?: string;
  title: string;
  releaseDate: string;
  genre: string;
  publisher: string;
}

const GameItem = ({
  src,
  alt,
  title,
  releaseDate,
  genre,
  publisher,
}: Props) => {
  return (
    <div className={styles["game-item-container"]}>
      <img src={src} alt={alt} />
      <div className={styles["game-item-container__title-and-genre"]}>
        <span>{title}</span>
        <span>{genre}</span>
      </div>
      <span className={styles["game-item-container__release"]}>
        {releaseDate}
      </span>
      <span className={styles["game-item-container__publisher"]}>
        {publisher}
      </span>
    </div>
  );
};

export default GameItem;
