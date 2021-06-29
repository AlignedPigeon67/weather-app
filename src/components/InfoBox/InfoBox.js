import styles from './InfoBox.module.css';

const InfoBox = props => {
  return (
    <main>
      <h2 className={styles.placeName}>Manchester</h2>
      <h1 className={styles.temp}>16°</h1>
    </main>
  );
};

export default InfoBox;
