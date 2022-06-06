export interface Content {
    id?: number;
    type?: string;
    value: string;
}

export interface Field {
    name: string;
    field: string;
    text: string;
}

export interface Operation {
    name: string;
    url: string;
    fields: Field[];
}
