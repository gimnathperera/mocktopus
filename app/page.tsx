'use client';
import { FC, useState } from 'react';
import CodeEditor from '@/components/code-editor';
import Header from '@/components/header';
import Result from '@/components/result';

const DEFAULT_INTERFACE = `// You can use typescript interfaces like following; 

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
}
`;

const Home: FC = () => {
  const [code, setCode] = useState<string>(DEFAULT_INTERFACE);
  const [numberOfRows, setNumberOfRows] = useState(new Set(['10']));

  const handleOnGenerate = (): void => {
    console.log('*********', code);
  };

  const handleOnRowCountChange = (newRowCount: any): void => {
    setNumberOfRows(newRowCount);
  };
  const handleOnCodeChange = (newCode: string): void => {
    setCode(newCode);
  };

  return (
    <section className='h-full'>
      <Header
        onGenerate={handleOnGenerate}
        numberOfRows={numberOfRows}
        onRowCountChange={handleOnRowCountChange}
      />
      <div className='flex justify-center gap-6 h-[calc(100vh-12rem)]'>
        <CodeEditor onCodeChange={handleOnCodeChange} initialCode={code} />
        <Result />
      </div>
    </section>
  );
};

export default Home;
