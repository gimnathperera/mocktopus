import React, { FC } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className='pb-6 text-center flex items-center justify-between'>
      <h1 className='tracking-tight inline font-semibold text-[2.3rem] lg:text-3xl'>
        Generate Fake Data
      </h1>
      <div className='flex items-center gap-4'>
        <Dropdown backdrop='blur'>
          <DropdownTrigger>
            <Button variant='bordered'>#️⃣ Scale [Number of rows]</Button>
          </DropdownTrigger>
          <DropdownMenu variant='faded' aria-label='Static Actions'>
            <DropdownItem key='new'>10</DropdownItem>
            <DropdownItem key='copy'>50</DropdownItem>
            <DropdownItem key='edit'>100</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button color='primary' variant='shadow'>
          🪄 Generate
        </Button>
      </div>
    </div>
  );
};
export default Header;
