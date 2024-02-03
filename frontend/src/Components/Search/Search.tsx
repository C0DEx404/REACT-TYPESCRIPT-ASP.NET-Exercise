import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  //onClick: (e: SyntheticEvent) => void;
  //handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}

const Search: React.FC<Props> = ({
  //onClick,
  //handleChange,
  search,
  onSearchSubmit,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <>
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-1 space-y-4 bg-lightGreen rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>

      {/** THIS IS FOR SEARCH WITH CLICK BUTTON 
        <input value={search} onChange={(e) => handleChange(e)} type="text" />
        <button onClick={(e) => onClick(e)}>Search</button>
      */}
    </>
  );
};

export default Search;
