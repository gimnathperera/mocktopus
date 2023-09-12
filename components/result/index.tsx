'use client';
import { FC } from 'react';
import { Button } from '@nextui-org/react';

interface Props {
  mockResult: string;
}

const Result: FC<Props> = ({ mockResult }) => {
  return (
    <div className='relative bg-[#1E1E1E] rounded-lg py-2 pl-8 pr-2 w-1/2'>
      <div className='h-full overflow-auto'>
        {/* <pre>{JSON.parse(mockResult)}</pre> */}
        <pre className='text-[#ced4da]'>
          <code className='p-2 rounded-md shadow-sm text-sm font-mono italic'>
            {JSON.parse(mockResult)}
          </code>
        </pre>
      </div>
      <div className='absolute bottom-4 right-7'>
        <Button color='success' variant='bordered' className='mr-4'>
          Download
        </Button>
        <Button color='warning' variant='bordered'>
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};

export default Result;
