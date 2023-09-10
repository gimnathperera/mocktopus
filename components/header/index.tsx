import React, { FC } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,
} from '@nextui-org/react';

type Props = {
  onGenerate: () => void;
  onRowCountChange: (rowCount: Selection) => void;
  numberOfRows: any;
};

const Header: FC<Props> = ({ onGenerate, onRowCountChange, numberOfRows }) => {
  const selectedValue = React.useMemo(
    () => Array.from(numberOfRows).join(', ').replaceAll('_', ' '),
    [numberOfRows],
  );

  return (
    <div className='pb-6 text-center flex items-center justify-between'>
      <h1 className='tracking-tight inline font-semibold text-[2.3rem] lg:text-3xl'>
        Generate 𝔽𝕒𝕜𝕖 Data
      </h1>
      <div className='flex items-center gap-4'>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered' className='capitalize'>
              {`#️⃣ Scale [${selectedValue} of row${Number(selectedValue) > 1 ? 's' : ''}]`}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='row-count-select'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={numberOfRows}
            onSelectionChange={onRowCountChange}
          >
            <DropdownItem key='1'>1</DropdownItem>
            <DropdownItem key='10'>10</DropdownItem>
            <DropdownItem key='50'>50</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button color='primary' variant='shadow' onClick={onGenerate}>
          🪄 Generate
        </Button>
      </div>
    </div>
  );
};
export default Header;
