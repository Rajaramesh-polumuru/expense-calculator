export interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
}

export interface FormData {
  description: string;
  amount: string;
  date: string;
  category: string;
}

export interface FormErrors {
  description: string;
  amount: string;
  date: string;
  category: string;
}
