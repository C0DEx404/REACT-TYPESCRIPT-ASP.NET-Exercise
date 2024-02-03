import React from "react";
import { CompanyTenK } from "../../../company.d";
import { Link } from "react-router-dom";

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingData = new Date(tenK.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      className="inline-flex items-center px-1 text-md text-white bg-lightGreen rounded-md mx-1"
    >
      10K - {tenK.symbol} - {fillingData}
    </Link>
  );
};

export default TenKFinderItem;
