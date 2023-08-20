'use client';
import { FC } from 'react';
import CodeEditor from '@/components/code-editor';
import Header from '@/components/header';
import Result from '@/components/result';

const Home: FC = () => {
  return (
    <section className='h-full'>
      <Header />
      <div className='flex justify-center gap-6 h-[calc(100vh-12rem)]'>
        <CodeEditor />
        <Result />
      </div>
    </section>
  );
};

export default Home;
