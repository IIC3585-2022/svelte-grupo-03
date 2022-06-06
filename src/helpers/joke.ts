import type { Content, Field, Operation } from "../interfaces/joke";

export const newContent = (value: string, type?: string, id?: number): Content => {
    return {
        id,
        type,
        value
    };
}

export const newOperation = (name: string, url: string, fields: Field[]): Operation => {
    return {
        name,
        url,
        fields
    };
}

export const newField = (name: string, field: string, text: string): Field => {
    return {
        name,
        field,
        text
    };
}