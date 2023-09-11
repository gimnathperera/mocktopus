import { mock } from 'intermock';

export const generateMocks = (
  code: string,
  detectedInterfaces: string[],
): string | Record<string | number, {}> => {
  const mockedData = mock({
    language: 'typescript',
    files: [['docs', code]],
    output: 'string',
    interfaces: detectedInterfaces,
  });

  return mockedData;
};
