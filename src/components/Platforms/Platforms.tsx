import { useAppDispatch } from "../../hooks/redux";
import { updateSettings } from "../../store/gamesSlice";

import { Select } from "antd";
import { platformsOptions } from "../../utils";
import styles from "./Platforms.module.scss";

const Platforms = () => {
  const dispatch = useAppDispatch();

  const handleChange = (newValue: string) => {
    dispatch(
      updateSettings({ settingName: "currentPlatform", value: newValue })
    );
  };

  return (
    <div className={styles["platforms-container"]}>
      <span className={styles["platforms-container__title"]}>Platforms: </span>

      <Select
        className={styles["genres-container__select"]}
        defaultValue="all"
        onChange={handleChange}
        options={platformsOptions}
      />
    </div>
  );
};

export default Platforms;
