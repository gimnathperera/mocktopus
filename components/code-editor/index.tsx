'use client';
import { FC } from 'react';
import Editor from '@monaco-editor/react';

type Props = {};

const CodeEditor: FC<Props> = ({}) => {
  return (
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
      />
    </div>
  );
};
export default CodeEditor;
