import { useAppDispatch } from "../../hooks/redux";
import { updateSettings } from "../../store/gamesSlice";

import { Select } from "antd";
import { sortByOptions } from "../../utils";
import styles from "./SortBy.module.scss";

const SortBy = () => {
  const dispatch = useAppDispatch();

  const handleChange = (newValue: string) => {
    dispatch(updateSettings({ settingName: "sortByOption", value: newValue }));
  };

  return (
    <div className={styles["sort-container"]}>
      <span className={styles["sort-container__title"]}>Sort by: </span>

      <Select
        className={styles["genres-container__select"]}
        defaultValue="relevance"
        onChange={handleChange}
        options={sortByOptions}
      />
    </div>
  );
};

export default SortBy;
