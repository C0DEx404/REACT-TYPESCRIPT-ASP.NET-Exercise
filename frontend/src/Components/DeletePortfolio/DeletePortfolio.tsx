import React, { SyntheticEvent } from "react";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <>
      <form action="" onSubmit={onPortfolioDelete}>
        <input readOnly={true} hidden={true} value={portfolioValue} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </>
  );
};

export default DeletePortfolio;
