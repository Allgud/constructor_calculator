import { SyntheticEvent } from "react"

export  interface IFieldProps {
    elements: ElementProps[]
}

export type ElementProps = {
    id: number,
    cls1: string, 
    cls2: string, 
    cls3: string,
    draggable: boolean,
    content: ElContentProps[]
}

export type ElContentProps = {
    id: number,
    text: string
}

export interface ISwitcherButton {
    title: string,
    icon: string,
    active: boolean,
    activeIcon: string,
    handler: (arg0: SyntheticEvent) => void;
}