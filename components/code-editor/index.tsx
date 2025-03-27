'use client';
import { FC, useCallback, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Spinner } from '@nextui-org/react';

type Props = { onCodeChange: (code: string) => void; initialCode: string };

const CodeEditor: FC<Props> = ({ onCodeChange, initialCode }) => {
  const [code, setCode] = useState<string>(initialCode);

  const handleCodeChange = useCallback(
    (value: string | undefined): void => {
      const newCode = value ?? '';
      setCode(newCode);
      onCodeChange(newCode);
    },
    [onCodeChange],
  );

  return (
    <div className='bg-[#1E1E1E] rounded-lg w-full h-[70vh] md:h-full'>
      <div className='py-2 h-full'>
        <Editor
          defaultLanguage='typescript'
          theme='vs-dark'
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 12, // Reduced font size for mobile
          }}
          loading={<Spinner size='sm' />}
          onChange={handleCodeChange}
          value={code}
        />
      </div>
    </div>
  );
};
export default CodeEditor;
