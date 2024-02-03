import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company.d";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return (
            <Card
              id={result.symbol}
              onPortfolioCreate={onPortfolioCreate}
              key={uuidv4()}
              searchResult={result}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
        <Spinner/>
      </p>
      )}
    </>
  );
};

export default CardList;
