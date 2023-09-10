import React, { FC, useState } from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { Chip } from '@nextui-org/react';

const InterfaceSelectContent: FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string> | any>(new Set(['text']));

  const backgroundColors: string[] = [
    'bg-primary',
    'bg-secondary',
    'bg-warning',
    'bg-danger',
    'bg-default',
  ];
  const handleChipClose = (closedInterface: string): void => {
    if (selectedKeys.size === 1) return;
    const newSelectedKeys = new Set(
      Array.from(selectedKeys).filter(key => key !== closedInterface),
    );
    setSelectedKeys(newSelectedKeys);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Listbox
        aria-label='Multiple selection example'
        variant='flat'
        disallowEmptySelection
        selectionMode='multiple'
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <ListboxItem key='text'>⚡ Text</ListboxItem>
        <ListboxItem key='number'>⚡ Number</ListboxItem>
        <ListboxItem key='date'>⚡ Date</ListboxItem>
        <ListboxItem key='single_date'>⚡ Single Date</ListboxItem>
        <ListboxItem key='iteration'>⚡ Iteration</ListboxItem>
      </Listbox>
      <div className='flex flex-wrap gap-2 items-center'>
        <p className='text-small text-default-500'>Selected interfaces: </p>
        {Array.from(selectedKeys).map((selectedInterface: any, index: number) => (
          <Chip
            size='sm'
            radius='full'
            variant='flat'
            key={selectedInterface}
            onClose={(): void => handleChipClose(selectedInterface)}
            classNames={{
              base: backgroundColors[index % backgroundColors.length],
              content: 'text-white',
            }}
          >
            {selectedInterface}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default InterfaceSelectContent;
