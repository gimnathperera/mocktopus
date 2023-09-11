import React, { FC, useState } from 'react';
import { Chip } from '@nextui-org/react';
import { Colors } from '@/config/constants';
import { Listbox, ListboxItem, Radio, RadioGroup } from '@nextui-org/react';

interface Props {
  detectedInterfaces: string[];
}

const InterfaceSelectContent: FC<Props> = ({ detectedInterfaces }) => {
  const [interfaces, setInterfaces] = useState<Set<string> | any>(new Set(detectedInterfaces));

  const handleChipClose = (closedInterface: string): void => {
    if (interfaces.size === 1) return;
    const newSelectedKeys = new Set(Array.from(interfaces).filter(key => key !== closedInterface));
    setInterfaces(newSelectedKeys);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Listbox
        aria-label='Multiple selection example'
        variant='flat'
        disallowEmptySelection
        selectionMode='multiple'
        selectedKeys={interfaces}
        onSelectionChange={setInterfaces}
      >
        {detectedInterfaces?.map((interfaceName: any) => (
          <ListboxItem key={interfaceName}>{`⚡ ${interfaceName}`}</ListboxItem>
        )) || null}
      </Listbox>

      <div className='mb-4'>
        <p className='mb-3'>Selected interfaces </p>
        <div className='flex flex-wrap gap-2 items-center'>
          {Array.from(interfaces).map((interfaceName: any, index: number) => (
            <Chip
              size='sm'
              radius='full'
              variant='flat'
              key={interfaceName}
              onClose={(): void => handleChipClose(interfaceName)}
              classNames={{
                base: Colors.ChipClors[index % Colors.ChipClors.length],
                content: 'text-white',
              }}
            >
              {interfaceName}
            </Chip>
          ))}
        </div>
      </div>
      {interfaces.size === 1 ? (
        <RadioGroup
          label={<p className='text-white'>Scale number of rows</p>}
          orientation='horizontal'
        >
          <Radio value='1'>1 Row</Radio>
          <Radio value='10'>10 Rows</Radio>
          <Radio value='50'>50 Rows</Radio>
        </RadioGroup>
      ) : null}
    </div>
  );
};

export default InterfaceSelectContent;
