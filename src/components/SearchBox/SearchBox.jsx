import boxCss from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

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
        value={filterValue}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
      <label htmlFor="find_contacts" className={boxCss.text}>
        Find contacts by name
      </label>
    </>
  );
};

export default SearchBox;
