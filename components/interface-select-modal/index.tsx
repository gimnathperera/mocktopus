import React, { FC } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import InterfaceSelectContent from '@/components/interface-select-content';

interface Props {
  isOpen: boolean;
  selectedInterfaces: string[] | null;
  onOpenChange: () => void;
}

const InterfaceSelectModal: FC<Props> = ({ isOpen, onOpenChange, selectedInterfaces }) => {
  console.log('🚀 ~ file: index.tsx:18 ~ selectedInterfaces:', selectedInterfaces);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose): any => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Following 𝕀𝕟𝕥𝕖𝕣𝕗𝕒𝕔𝕖𝕤 Detected
              </ModalHeader>
              <ModalBody>
                <p>Please select the interfaces you want to generate mock data for.</p>
                <InterfaceSelectContent />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='bordered' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
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
