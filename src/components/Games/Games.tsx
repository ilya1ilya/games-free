import { useAppSelector } from "../../hooks/redux";
import { Link } from "react-router-dom";

import GameItem from "../GameItem";

import { Spin } from "antd";
import styles from "./Games.module.scss";

const Games = () => {
  const games = useAppSelector((state) => state.games.list);
  const isLoading = useAppSelector((state) => state.games.loading);

  const renderLoadingSpinner = () => {
    return (
      <Spin tip="Games are loading.." size="large">
        <div></div>
      </Spin>
    );
  };

  const renderGames = () => {
    return games.map((game) => {
      const { id, title, release_date, thumbnail, genre, publisher } = game;

      return (
        <Link key={id} to={`/${id}`}>
          <GameItem
            id={id}
            title={title}
            releaseDate={release_date}
            src={thumbnail}
            alt={title}
            genre={genre}
            publisher={publisher}
          />
        </Link>
      );
    });
  };

  return (
    <div className={styles["games-container"]}>
      {isLoading ? renderLoadingSpinner() : renderGames()}
    </div>
  );
};

export default Games;
