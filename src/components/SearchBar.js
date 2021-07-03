const SearchBar = (props) => {
  return (
    <input
      placeholder="Search movie here"
      onChange={(event) => {
        props.setQuery(event.target.value) !==
        props.setQuery(event.target.value) ? (
          <div>no results found</div>
        ) : (
          props.setQuery(event.target.value)
        );
      }}
    />
  );
};

export default SearchBar;
