import contractsCellRenderer from "../cellRenderers/contractsCellRenderer";

export const EventNameColumn = {
  field: "eventName",
  headerName: "Event name",
  flex: 1,
  headerClassName: "header-theme",
};

export const ContractsColumn = {
  field: "contracts",
  sortable: false,
  headerName: "",
  flex: 1,
  renderCell: contractsCellRenderer,
  headerClassName: "header-theme",
};
