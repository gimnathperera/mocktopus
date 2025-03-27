'use client';
import { FC, useRef, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';
import CodeEditor from '@/components/code-editor';
import Header from '@/components/header';
import Result from '@/components/result';
import { extractInterfaceNames, generateMocks } from '@/utils';
import { Initials } from '@/config/constants';
import InterfaceSelectModal from '@/components/interface-select-modal';
import { RowNumber } from '@/types';
import toast, { Toaster } from 'react-hot-toast';

const Home: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const detectedInterfaces = useRef<string[] | null>(null);
  const mockResult = useRef<string | null>(JSON.stringify(Initials.DefaultMockResult, null, 2));
  const [code, setCode] = useState<string>(Initials.DefaultInterface);
  const [numberOfRows, setNumberOfRows] = useState<RowNumber>('1');
  const [interfaces, setInterfaces] = useState<Set<string> | any>(
    new Set(detectedInterfaces?.current),
  );

  const handleChipClose = (closedInterface: string): void => {
    if (interfaces.size === 1) return;
    const newSelectedKeys = new Set(Array.from(interfaces)?.filter(key => key !== closedInterface));
    setInterfaces(newSelectedKeys);
  };

  const handleOnGenerate = (): void => {
    const interfaceNamesToMock = extractInterfaceNames(code);
    detectedInterfaces.current = interfaceNamesToMock;
    setInterfaces(new Set(interfaceNamesToMock));
    onOpen();
  };

  const handleOnReset = (): void => {
    window.location.reload();
  };

  const handleOnCodeChange = (newCode: string): void => {
    setCode(newCode);
  };

  const handleOnMockGenerate = (): void => {
    const generatedMocks = generateMocks(code, Array.from(interfaces), Number(numberOfRows));
    mockResult.current = JSON.stringify(generatedMocks, null, 2);

    onOpenChange();
  };

  const handleOnCopyToClipboard = (): void => {
    navigator.clipboard.writeText(mockResult.current ?? '');
    toast.success('Copied to clipboard');
  };

  const handleOnDownload = (): void => {
    const element = document.createElement('a');
    const file = new Blob([mockResult.current ?? ''], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'mock.json';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <section className='h-full'>
      <Header onGenerate={handleOnGenerate} onReset={handleOnReset} />
      <div className='flex flex-col md:flex-row justify-center gap-6 h-full md:h-[calc(100vh-12rem)]'>
        <div className='w-full md:w-1/2'>
          <CodeEditor onCodeChange={handleOnCodeChange} initialCode={code} />
        </div>
        <div className='w-full md:w-1/2'>
          <Result
            mockResult={mockResult?.current ?? ''}
            onCopyToClipboard={handleOnCopyToClipboard}
            onDownload={handleOnDownload}
          />
        </div>
      </div>

      <InterfaceSelectModal
        isOpen={isOpen}
        detectedInterfaces={detectedInterfaces.current}
        numberOfRows={numberOfRows}
        onOpenChange={onOpenChange}
        onMockGenerate={handleOnMockGenerate}
        setNumberOfRows={setNumberOfRows}
        interfaces={interfaces}
        setInterfaces={setInterfaces}
        handleChipClose={handleChipClose}
      />
      <Toaster position='bottom-left' reverseOrder={false} />
    </section>
  );
};

export default Home;
