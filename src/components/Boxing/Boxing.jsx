import React from "react";
import { ViewRenderer } from "../../shared/components/ViewRenderer";
import { BOXING_COLUMNS } from "./BoxingConstants";
import Blotter from "../../shared/components/Blotter";
import { getEvents } from "../../store/slices/configThunk";

const Boxing = () => {
  return (
    <ViewRenderer>
      <h2>Boxing</h2>
      <Blotter fetchRequest={getEvents("boxing")} columns={BOXING_COLUMNS} />
    </ViewRenderer>
  );
};

export default Boxing;
