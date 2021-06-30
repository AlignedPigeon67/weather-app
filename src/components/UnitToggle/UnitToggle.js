import styles from './UnitToggle.module.css';
import ToggleButton from '../UI/ToggleButton';

const UnitToggle = ({ isMetric, handleUnitToggle }) => {
  return (
    <div className={styles.outerContainer}>
      <h3>°C</h3>
      <div className={styles.toggleContainer}>
        <ToggleButton isMetric={isMetric} onClick={handleUnitToggle} />
      </div>
      <h3>°F</h3>
    </div>
  );
};

export default UnitToggle;
