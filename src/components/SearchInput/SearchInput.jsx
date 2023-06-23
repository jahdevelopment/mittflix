import { useNavigate } from "react-router";

const SearchInput = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.firstChild.value)
    navigate(`/search?query=${e.target.firstChild.value}`);
  }

  return ( 
    <>
      <form id="search" className="search" onSubmit={handleSubmit} >
          <input type="search" placeholder="Search for a title..."  />
          <div className="searchResults"></div>
        </form>
    </>
   );
};
 
export default SearchInput;