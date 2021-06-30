import styles from './InfoBox.module.css';

const InfoBox = ({ data, isLoaded, isMetric }) => {
  return !isLoaded ? (
    <div className={styles.loading}>Loading...</div>
  ) : (
    <main className={styles.infoContainer}>
      <span>
        <h2 className={styles.placeName}>{data.name}</h2>
        <p className={styles.description}>{data.weather[0].description}</p>
      </span>
      <h1 className={styles.temp}>
        {Math.trunc(data.main.temp)}°{isMetric ? 'C' : 'F'}
      </h1>
    </main>
  );
};

export default InfoBox;
