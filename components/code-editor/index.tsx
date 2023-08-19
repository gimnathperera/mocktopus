'use client';
import { FC } from 'react';
import Editor from '@monaco-editor/react';

type Props = {};

const CodeEditor: FC<Props> = ({}) => {
  return (
    <Editor
      defaultLanguage='typescript'
      defaultValue='// some comment'
      theme='vs-dark'
      options={{
        minimap: {
          enabled: false,
        },
        fontSize: 14,
      }}
    />
  );
};
export default CodeEditor;
