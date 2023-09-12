import { FC, useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { Spinner } from '@nextui-org/react';

interface Props {
  mockResult: string;
  onCopyToClipboard: () => void;
  onDownload: () => void;
}

const Result: FC<Props> = ({ mockResult, onCopyToClipboard, onDownload }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative bg-[#1E1E1E] rounded-lg py-2 pl-8 pr-2 w-1/2'>
      <div className='h-full overflow-auto'>
        {loading ? (
          <Spinner size='sm' className='w-full h-full' />
        ) : (
          <pre className='text-[#ced4da]'>
            <code className='p-2 rounded-md shadow-sm text-sm font-mono'>{mockResult}</code>
          </pre>
        )}
      </div>
      <div className='absolute bottom-4 right-7'>
        <Button color='success' variant='shadow' className='mr-4' onClick={onDownload}>
          Download
        </Button>
        <Button color='warning' variant='shadow' onClick={onCopyToClipboard}>
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};

export default Result;
