import { FC } from 'react';
import CodeEditor from '@/components/code-editor';

const Home: FC = () => {
  return (
    <section className='flex gap-4 h-full'>
      <div className=' bg-[#1E1E1E] w-1/2 rounded-lg'>
        <CodeEditor />
      </div>

      <div className='bg-red-400 w-1/2 rounded-lg py-2 px-8'>Yellow</div>
    </section>
  );
};

export default Home;
