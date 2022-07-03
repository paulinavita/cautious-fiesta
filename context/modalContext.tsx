import { CardModalProps } from '@components/Home/Card'
import { useCallback } from 'react';
import { createContext, ReactNode, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  isModalOpen: boolean;
  payload: CardModalProps;
  handleOpen: (payload: CardModalProps) => void;
  handlClose: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<CardModalProps>({} as CardModalProps);

  const handlClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback((payload: CardModalProps) => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    setPayload(payload);
  }, []);

  return (
    <ModalContext.Provider value={{ isModalOpen, handlClose, handleOpen, payload }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
