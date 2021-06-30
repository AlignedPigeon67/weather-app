import styles from './SearchBar.module.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ change, input }) => {
  return (
    <form className={styles.searchContainer} onSubmit={input}>
      <button type="submit">
        <SearchIcon style={{ fontSize: 40 }} className={styles.searchIcon} />
      </button>
      <input type="text" onChange={change} />
    </form>
  );
};

export default SearchBar;
