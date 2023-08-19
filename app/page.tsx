import { FC } from 'react';
import CodeEditor from '@/components/code-editor';

const Home: FC = () => {
  return (
    <section className='flex gap-2 h-full'>
      <div className='bg-slate-600 w-1/2 rounded-md'>
        <CodeEditor />
      </div>
      <div className='bg-red-400 w-1/2'>Yellow</div>
    </section>
  );
};

export default Home;
