import React from "react";
import { ViewRenderer } from "../../shared/components/ViewRenderer";
import Blotter from "../../shared/components/Blotter";
import { BASEBALL_COLUMNS } from "./BaseballConstants";
import { getEvents } from "../../store/slices/configThunk";

const Baseball = () => {
  return (
    <ViewRenderer>
      <h2>Baseball</h2>
      <Blotter
        fetchRequest={getEvents("baseball")}
        columns={BASEBALL_COLUMNS}
      />
    </ViewRenderer>
  );
};

export default Baseball;
