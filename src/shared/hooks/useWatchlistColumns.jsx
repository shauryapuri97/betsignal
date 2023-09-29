import { useMemo } from "react";
import { IoStarOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { CustomIconButton } from "../components/CustomIconButton";
import { setSelectedEvent } from "../../store/slices/configSlice";

export const useWatchlistColumns = (columns) => {
  const dispatch = useDispatch();

  return useMemo(
    () => [
      ...columns,
      {
        field: "action",
        headerName: "Actions",
        sortable: false,
        minWidth: 110,
        headerClassName: "header-theme",
        renderCell: (params) => (
          <>
            <CustomIconButton
              tooltip={"Add to watchlist"}
              onClick={() =>
                console.log(
                  "Ideally we dispatch an action here to the backend which updates user data"
                )
              }
              Icon={IoStarOutline}
            />
            <CustomIconButton
              tooltip={"View more info"}
              onClick={() => dispatch(setSelectedEvent(params.row))}
              Icon={FaInfoCircle}
            />
          </>
        ),
      },
    ],
    [columns]
  );
};
