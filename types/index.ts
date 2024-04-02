export type Store = {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export type THero = {
  id: string;
  title: string;
  image: string;
  backgroundImage: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

