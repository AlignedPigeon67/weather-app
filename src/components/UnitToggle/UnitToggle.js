import styles from './UnitToggle.module.css';
import ToggleButton from '../UI/ToggleButton';

const UnitToggle = ({ isMetric, handleUnitToggle }) => {
  return (
    <div className={styles.toggleContainer}>
      <ToggleButton isMetric={isMetric} onClick={handleUnitToggle} />
    </div>
  );
};

export default UnitToggle;
