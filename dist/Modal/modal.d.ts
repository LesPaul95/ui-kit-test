/// <reference types="react" />
export declare type ModalProps = {
    opened: boolean;
    handleClose: () => void;
    children: JSX.Element;
    closeButton?: boolean;
    title?: string;
    canselButtonLable?: string;
    disableBackdropClick?: boolean;
    backgroundColor?: string;
};
export declare const Modal: ({ opened, handleClose, children, closeButton, disableBackdropClick, backgroundColor, title, }: ModalProps) => JSX.Element;
