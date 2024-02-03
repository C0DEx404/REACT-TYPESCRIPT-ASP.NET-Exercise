import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "../../company.d";
import { searchCompanies } from "../../api";

import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  /** 
    //FOR HANDLE CHANGE EVENT SEARCH
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
    };
  
    //ONCLICK EVENT FOR SEARCH
    const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(searchResult);
    };
  */

  //ONCHANGE EVENT FOR SEARCH WITHOUT BUTTON
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  //ONSUBMIT EVENT FOR SEARCH WITHOUT BUTTON
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  //FOR ADD PORTFOLIO
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e);

    const existsValue = portfolioValues.find(
      (value) => value === e.target[0].value
    );

    if (existsValue) {
      return;
    }
    const updatePortfolio = [...portfolioValues, e.target[0].value];

    setPortfolioValues(updatePortfolio);

    console.log(portfolioValues);
  };

  //DELETE PORFOLIO
  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((values) => {
      return values !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };
  return (
    <>
      <Search
        //onClick={onClick}
        search={search}
        //handleChange={handleChange}
        handleSearchChange={handleSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList
        onPortfolioCreate={onPortfolioCreate}
        searchResult={searchResult}
      />
    </>
  );
};

export default SearchPage;
