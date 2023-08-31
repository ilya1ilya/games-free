import { useAppSelector } from "../../hooks/redux";
import { Carousel } from "antd";
import styles from "./ScreenshotCarousel.module.scss";

const ScreenshotCarousel = () => {
  const screenshots = useAppSelector(
    (state) => state.specificGame.data.screenshots
  );
  const isLoading = useAppSelector((state) => state.specificGame.loading);

  const renderScreenshots = () => {
    if (!screenshots) {
      return;
    }

    return screenshots.map(({ id, image }) => (
      <img key={id} src={image} alt="alt" />
    ));
  };

  return (
    <div className={styles["carousel-container"]}>
      {!isLoading && (
        <Carousel
          className={styles["carousel-container__pictures-zone"]}
          autoplay
        >
          {renderScreenshots()}
        </Carousel>
      )}
    </div>
  );
};

export default ScreenshotCarousel;
