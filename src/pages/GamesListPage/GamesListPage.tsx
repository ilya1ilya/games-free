import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { fetchGames } from "../../store/gamesSlice";

import Header from "../../components/Header";
import Games from "../../components/Games";
import Settings from "../../components/Settings";

import { notification } from "antd";
import styles from "./GamesListPage.module.scss";

const GamesListPage = () => {
  const [api, contextHolder] = notification.useNotification();
  const error = useAppSelector((state) => state.games.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  useEffect(() => {
    if (!error) {
      return;
    }

    api["error"]({
      message: "Failed to fetch list of games",
      description: "Please, try to refresh this page.",
    });
  }, [error, api]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {contextHolder}
        <Games />
        <Settings />
      </div>
    </>
  );
};

export default GamesListPage;
