import type { Content } from "../interfaces/joke";

export const newContent = (value: string, type?: string, id?: number): Content => {
    return {
        id,
        type,
        value
    };
}