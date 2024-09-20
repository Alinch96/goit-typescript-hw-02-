import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.searchInput.value.trim();
      if (search === "") {
          toast.error("Please enter your query!");
          return;
      }
      
    onSearch(search);
    form.reset();
  };
  return (
    <header className={css.header}>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;