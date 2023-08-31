import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchGames } from "../../store/gamesSlice";

import { Button } from "antd";

import Genres from "../Genres";
import Platforms from "../Platforms";
import SortBy from "../SortBy";

import styles from "./Settings.module.scss";

const Settings = () => {
  const isLoading = useAppSelector((state) => state.games.loading);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchGames());
  };

  return (
    <div className={styles["settings-container"]}>
      <Genres />
      <Platforms />
      <SortBy />
      <Button
        type="primary"
        size="large"
        onClick={handleClick}
        loading={isLoading}
      >
        Update
      </Button>
    </div>
  );
};

export default Settings;
