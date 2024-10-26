import boxCss from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <>
      <input
        className={boxCss.searchBox}
        type="text"
        id="find_contacts"
        name="search"
        minLength="2"
        maxLength="50"
        placeholder=" "
        required
        value={value}
        onChange={event => onSearch(event.target.value)}
      />
      <label htmlFor="find_contacts" className={boxCss.text}>
        Find contacts by name
      </label>
    </>
  );
};

export default SearchBox;
