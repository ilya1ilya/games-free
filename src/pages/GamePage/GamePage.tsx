import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchSpecificGameInfo } from "../../store/gameSlice";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import GameTitle from "../../components/GameTitle";
import GameInfo from "../../components/GameInfo";
import ButtonBack from "../../components/ButtonBack";

import { Spin, notification } from "antd";
import styles from "./GamePage.module.scss";

const GamePage = () => {
  const { id } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const error = useAppSelector((state) => state.specificGame.error);
  const isLoading = useAppSelector((state) => state.specificGame.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchSpecificGameInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!error) {
      return;
    }

    api["error"]({
      message: "Failed to fetch game info",
      description: "Please, try to refresh this page.",
    });
  }, [error, api]);

  const renderLoadingSpinner = () => {
    return (
      <Spin tip="Game is loading.." size="large">
        <div></div>
      </Spin>
    );
  };

  const renderGame = () => {
    return (
      <div className={styles["game-page-container"]}>
        <div className={styles["game-page-container__title-and-back-button"]}>
          <GameTitle />
          <ButtonBack />
        </div>
        <GameInfo />
      </div>
    );
  };

  return (
    <>
      {contextHolder}
      <Header />
      {isLoading ? renderLoadingSpinner() : renderGame()}
    </>
  );
};

export default GamePage;
