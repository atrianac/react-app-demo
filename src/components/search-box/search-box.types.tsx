import { ChangeEvent } from "react";


type ElementEvent = HTMLInputElement & Element & HTMLElement  

export interface SearchBoxProperties {
    placeholder: string
    handleEvent: <T extends ElementEvent>(e: ChangeEvent<T>) => void 
}