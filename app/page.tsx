'use client';
import { FC } from 'react';
import CodeEditor from '@/components/code-editor';
import { Button } from '@nextui-org/react';

const Home: FC = () => {
  return (
    <section className='h-full'>
      <div className='pb-6 text-center flex items-center justify-between'>
        <h1 className='tracking-tight inline font-semibold text-[2.3rem] lg:text-3xl'>
          Generate Fake Data
        </h1>
        <Button color='primary' variant='shadow'>
          Generate
        </Button>
      </div>
      <div className='flex h-[90%] justify-center gap-6'>
        <div className='bg-[#1E1E1E] rounded-lg w-1/2'>
          <CodeEditor />
        </div>

        <div className='bg-[#1E1E1E] rounded-lg py-2 px-8 w-1/2'>Yellow</div>
      </div>
    </section>
  );
};

export default Home;
