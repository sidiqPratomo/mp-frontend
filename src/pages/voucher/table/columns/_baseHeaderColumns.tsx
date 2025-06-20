import { Column } from "react-table";
import { SelectionHeader } from "./SelectionHeader";
import { SelectionCell } from "./SelectionCell";
import { CustomHeaderFieldTranslation } from "./CustomHeaderFieldTranslation";
import { ColumnString } from "../../../../components/table/column/ColumnString";
import { Collection } from "../../core/_models";

const baseHeaderColumns: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: "selection",
    Cell: ({ ...props }) => (
      <SelectionCell id={props.data[props.row.index].id} />
    ),
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name="voucher_code"
        className="min-w-125px"
      />
    ),
    id: "voucher_code",
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      return <ColumnString value={entry["voucher_code"]} />;
    },
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name="expiry_date"
        className="min-w-125px"
      />
    ),
    id: "expiry_date",
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      const rawDate = entry["expiry_date"];

      // Format ke YYYY-MM-DD
      const formattedDate = rawDate
        ? new Date(rawDate).toISOString().split("T")[0]
        : "-";

      return <ColumnString value={formattedDate} />;
    },
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name="discount_percent"
        className="min-w-125px"
      />
    ),
    id: "discount_percent",
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      return <ColumnString value={entry["discount_percent"]} />;
    },
  },
];

export { baseHeaderColumns };
