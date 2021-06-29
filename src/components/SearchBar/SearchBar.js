import styles from './SearchBar.module.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = props => {
  return (
    <form className={styles.searchContainer}>
      <button type="submit">
        <SearchIcon className={styles.searchIcon} />
      </button>
      <input type="text" />
    </form>
  );
};

export default SearchBar;
