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
    <div className='relative bg-[#1E1E1E] rounded-lg py-2 pl-4 pr-2 w-full h-[70vh] md:h-full'>
      <div className='h-full overflow-auto'>
        {loading ? (
          <Spinner size='sm' className='w-full h-full' />
        ) : (
          <pre className='text-[#ced4da] overflow-x-auto'>
            <code className='p-2 rounded-md shadow-sm text-xs sm:text-sm font-mono break-words'>
              {mockResult}
            </code>
          </pre>
        )}
      </div>
      <div className='absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2'>
        <Button color='success' variant='shadow' size='sm' className='sm:mr-4' onClick={onDownload}>
          Download
        </Button>
        <Button color='warning' variant='shadow' size='sm' onClick={onCopyToClipboard}>
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};

export default Result;
