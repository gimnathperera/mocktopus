import React, { FC } from 'react';
import { Button } from '@nextui-org/react';

type Props = {
  onGenerate: () => void;
  onReset: () => void;
};

const Header: FC<Props> = ({ onGenerate, onReset }) => {
  return (
    <div className='pb-6 text-center flex items-center justify-between'>
      <h1 className='tracking-tight inline font-semibold text-[2.3rem] lg:text-3xl'>
        Generate 𝔽𝕒𝕜𝕖 Data
      </h1>
      <div className='flex items-center gap-4'>
        <Button color='default' variant='shadow' onClick={onReset}>
          Reset ↻
        </Button>
        <Button color='primary' variant='shadow' onClick={onGenerate}>
          Generate 🪄
        </Button>
      </div>
    </div>
  );
};
export default Header;
