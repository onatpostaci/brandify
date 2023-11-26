import SnippetCard from "@/components/SnippetCard";
import { List } from "postcss/lib/list";
import {
  MouseEventHandler,
  RefObject,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface PageWrapperProps {
  children: React.ReactNode;
}

export interface SnippetProps {
  prompt: string;
  snippet: string;
  imageSource: string;
  keywords: string;
}

export interface NewMessage {
  owner: number;
  paragraph: string;
  isAnswer: boolean;
  snippet: string;
  keywords: [];
}

export interface CustomInputProps {
  type: string;
  placeholder: string;
  containerStyles?: string;
  sendButton?: boolean;
  wrapperWidth?: number;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: MouseEventHandler<HTMLButtonElement>;
}

export interface LoginModalProps {
  open: boolean;
  modalRef?: RefObject<HTMLDivElement>;
  handleOverlayClick?: MouseEventHandler<HTMLDivElement>;
}

export interface SidebarItemProps {
  href: string;
  gap: boolean;
  icon: React.ReactNode;
  title: string;
}

export interface AvatarChipProps {
  imgSrc: string;
  altName: string;
}

export interface MessageBoxProps {
  owner: number;
  text: string;
  isAnswer: boolean;
  snippet?: string;
  keywords: [];
}

export interface AccordionProps {
  question: string;
  answer: string;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  idx: number;
}

export interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
