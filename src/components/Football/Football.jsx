import React, { useEffect } from "react";
import { ViewRenderer } from "../../shared/components/ViewRenderer";
import { getEvents } from "../../store/slices/configThunk";
import Blotter from "../../shared/components/Blotter";
import { FOOTBALL_COLUMNS } from "./FootballConstants";

const Football = () => {
  const columns = [{ field: "id", headerName: "ID", width: 90 }];

  return (
    <ViewRenderer>
      <h2>Football</h2>
      <Blotter fetchRequest={getEvents("football")} columns={FOOTBALL_COLUMNS} />
    </ViewRenderer>
  );
};

export default Football;
