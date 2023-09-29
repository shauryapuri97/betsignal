import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { selectRowData, selectIsLoading } from "../../store/slices/configSlice";
import { Skeleton } from "@mui/material";

const Blotter = ({ fetchRequest, columns, pageSize = 10 }) => {
  const dispatch = useDispatch();

  const rows = useSelector(selectRowData) ?? [];
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchRequest);
  }, []);

  return !isLoading ? (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize,
          },
        },
      }}
      getRowHeight={() => "auto"}
      pageSizeOptions={[pageSize]}
      disableRowSelectionOnClick
      autoHeight
      getRowId={(row) => row.id}
      sx={{
        "& .header-theme": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          fontWeight: "bold",
        },
      }}
    />
  ) : (
    <Skeleton variant="rectangular" height={700} />
  );
};

export default Blotter;
