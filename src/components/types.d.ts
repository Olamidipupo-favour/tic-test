import { ReactNode } from "react";

export interface ModalProps{
    open:boolean,
    cancel:() => void;
    className: string;
    children:ReactNode
}