import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent, useState } from "react";

interface Props {
  onSearch: (newSearch:string) => void;
}
const SearchBar: React.FC<Props> = ({ onSearch }) => {
  
  const [search, setSearch] = useState<string>("");
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form:HTMLFormElement = e.currentTarget;
   
      if (search.trim() === "") {
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
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => { setSearch(e.target.value) } }
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;