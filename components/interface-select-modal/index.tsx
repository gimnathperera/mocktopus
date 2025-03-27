import React, { FC, Key } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import InterfaceSelectContent from '@/components/interface-select-content';
import { RowNumber } from '@/types';

interface Props {
  isOpen: boolean;
  detectedInterfaces: string[] | null;
  numberOfRows: RowNumber;
  interfaces: Set<string>;
  onOpenChange: () => void;
  setNumberOfRows: (numberOfRows: RowNumber) => void;
  setInterfaces: (keys: Set<Key>) => void;
  handleChipClose: (closedInterface: string) => void;
  onMockGenerate: () => void;
}

const InterfaceSelectModal: FC<Props> = ({
  isOpen,
  detectedInterfaces,
  numberOfRows,
  interfaces,
  setNumberOfRows,
  onOpenChange,
  setInterfaces,
  handleChipClose,
  onMockGenerate,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='xs' // Add responsive modal size
        className='max-w-[95%] sm:max-w-md' // Ensure modal fits mobile screens
      >
        <ModalContent>
          {(onClose): any => (
            <>
              <ModalHeader className='flex flex-col gap-1 text-lg sm:text-xl'>
                Following 𝕀𝕟𝕥𝕖𝕣𝕗𝕒𝕔𝕖𝕤 Detected
              </ModalHeader>
              <ModalBody>
                <p className='text-sm'>
                  Please select the interfaces you want to generate mock data for.
                </p>
                <InterfaceSelectContent
                  detectedInterfaces={detectedInterfaces ?? []}
                  numberOfRows={numberOfRows}
                  setNumberOfRows={setNumberOfRows}
                  interfaces={interfaces}
                  setInterfaces={setInterfaces}
                  handleChipClose={handleChipClose}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='bordered' size='sm' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' size='sm' onPress={onMockGenerate}>
                  🪄 Generate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default InterfaceSelectModal;
