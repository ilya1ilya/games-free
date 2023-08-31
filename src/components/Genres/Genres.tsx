import { useAppDispatch } from "../../hooks/redux";
import { updateSettings } from "../../store/gamesSlice";

import { Select } from "antd";
import { genresOptions } from "../../utils";
import styles from "./Genres.module.scss";

const Genres = () => {
  const dispatch = useAppDispatch();

  const handleChange = (newValue: string) => {
    dispatch(updateSettings({ settingName: "currentGenre", value: newValue }));
  };

  return (
    <div className={styles["genres-container"]}>
      <span className={styles["genres-container__title"]}>Genres: </span>

      <Select
        className={styles["genres-container__select"]}
        defaultValue="all"
        onChange={handleChange}
        options={genresOptions}
      />
    </div>
  );
};

export default Genres;
