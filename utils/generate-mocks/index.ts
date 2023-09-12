import { mock } from 'intermock';

export const generateMocks = (
  code: string,
  detectedInterfaces: string[],
  numberOfRows?: number,
): Record<string | number, {}>[] | Record<string, unknown> => {
  const hasMultipleInterfaces = detectedInterfaces.length > 1;

  const generateMockData = (): any => {
    return mock({
      language: 'typescript',
      files: [['docs', code]],
      output: 'object',
      interfaces: detectedInterfaces,
    });
  };

  if (numberOfRows === undefined || numberOfRows === 1) {
    const mockedData = generateMockData();

    if (!hasMultipleInterfaces) {
      const selectedInterface: any = detectedInterfaces[0];
      const selectedInterfaceData = mockedData[selectedInterface];

      return selectedInterfaceData;
    }

    return mockedData;
  } else {
    const mockedDataArray: any[] = [];
    for (let i = 0; i < numberOfRows; i++) {
      const mockedData = generateMockData();

      const selectedInterface: any = detectedInterfaces[0];
      const selectedInterfaceData = mockedData[selectedInterface];

      mockedDataArray.push(selectedInterfaceData);
    }

    return mockedDataArray;
  }
};
