import React from "react";
import { ViewRenderer } from "../../shared/components/ViewRenderer";
import { BASKETBALL_COLUMNS } from "./BasketballConstants";
import Blotter from "../../shared/components/Blotter";
import { getEvents } from "../../store/slices/configThunk";
import { useWatchlistColumns } from "../../shared/hooks/useWatchlistColumns";

const Basketball = () => {
  const columns = useWatchlistColumns(BASKETBALL_COLUMNS);

  return (
    <ViewRenderer>
      <h2>Basketball</h2>
      <Blotter fetchRequest={getEvents("basketball")} columns={columns} />
    </ViewRenderer>
  );
};

export default Basketball;
