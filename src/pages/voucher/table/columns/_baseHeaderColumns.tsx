import { Column } from 'react-table';
import { SelectionHeader } from './SelectionHeader';
import { SelectionCell } from './SelectionCell';
import { CustomHeaderFieldTranslation } from './CustomHeaderFieldTranslation';
import { ColumnString } from '../../../../components/table/column/ColumnString';
import { Collection } from '../../core/_models';

const baseHeaderColumns: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => (
      <SelectionCell id={props.data[props.row.index].id} />
    ),
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name='voucher_code'
        className='min-w-125px'
      />
    ),
    id: 'voucher_code',
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      return <ColumnString value={entry['voucher_code']} />;
    },
  },
];

export { baseHeaderColumns };
