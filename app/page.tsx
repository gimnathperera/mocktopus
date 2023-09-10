'use client';
import { FC, useRef, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';
import CodeEditor from '@/components/code-editor';
import Header from '@/components/header';
import Result from '@/components/result';
import { extractInterfaceNames } from '@/utils';
import { Initials } from '@/config/constants';
import InterfaceSelectModal from '@/components/interface-select-modal';

const Home: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [code, setCode] = useState<string>(Initials.DefaultInterface);
  const [numberOfRows, setNumberOfRows] = useState(new Set(['1']));

  const selectedInterfaces = useRef<string[] | null>(null);

  const handleOnGenerate = (): void => {
    const interfaceNamesToMock = extractInterfaceNames(code);
    selectedInterfaces.current = interfaceNamesToMock;
    onOpen();
  };

  // TODO: fix any type here
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

      <InterfaceSelectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedInterfaces={selectedInterfaces.current}
      />
    </section>
  );
};

export default Home;
