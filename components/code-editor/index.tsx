'use client';
import { FC } from 'react';
import Editor from '@monaco-editor/react';
import { Spinner } from '@nextui-org/react';

type Props = {};

const CodeEditor: FC<Props> = ({}) => {
  return (
    <div className='bg-[#1E1E1E] rounded-lg w-1/2'>
      <div className='py-2 h-full'>
        <Editor
          defaultLanguage='typescript'
          defaultValue={`// You can use typescript interfaces like following; 

  interface Person {
    id: 1;
    firstName: "Jhon";
    lastName: "Doe";
    age: 24;
    bio: "Architect & UI Designer";
  }
 `}
          theme='vs-dark'
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 14,
          }}
          loading={<Spinner size='sm' />}
        />
      </div>
    </div>
  );
};
export default CodeEditor;
