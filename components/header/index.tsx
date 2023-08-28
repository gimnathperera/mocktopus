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
  selectedKeys: any;
};

const Header: FC<Props> = ({ onGenerate, onRowCountChange, selectedKeys }) => {
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  return (
    <div className='pb-6 text-center flex items-center justify-between'>
      <h1 className='tracking-tight inline font-semibold text-[2.3rem] lg:text-3xl'>
        Generate Fake Data
      </h1>
      <div className='flex items-center gap-4'>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered' className='capitalize'>
              {`#️⃣ Scale [${selectedValue} of rows]`}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label='Single selection example'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={selectedKeys}
            onSelectionChange={onRowCountChange}
          >
            <DropdownItem key='10'>10</DropdownItem>
            <DropdownItem key='50'>50</DropdownItem>
            <DropdownItem key='100'>100</DropdownItem>
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
