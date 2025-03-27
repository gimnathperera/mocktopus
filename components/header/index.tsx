import React, { FC } from 'react';
import { Button } from '@nextui-org/react';

type Props = {
  onGenerate: () => void;
  onReset: () => void;
};

const Header: FC<Props> = ({ onGenerate, onReset }) => {
  return (
    <div className='pb-6 text-center flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0'>
      <h1 className='tracking-tight inline font-semibold text-2xl sm:text-3xl mb-4 sm:mb-0'>
        Generate 𝔽𝕒𝕜𝕖 Data
      </h1>
      <div className='flex items-center gap-4'>
        <Button color='default' variant='shadow' size='sm' onClick={onReset}>
          Reset ↻
        </Button>
        <Button color='primary' variant='shadow' size='sm' onClick={onGenerate}>
          Generate 🪄
        </Button>
      </div>
    </div>
  );
};
export default Header;
