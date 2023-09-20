export interface TodoGet {
    id: string;
    nome: string;
    descricao: string;
    created: string;
    __v: number;
    feita: boolean;
    
}
export interface TodoPost {
    nome: string;
    feita?: boolean;
}

export interface TodoState {

    list: TodoGet[];
    isLoading: boolean;
}

export type ReturnType<T> = {
    data: T;
    message?: string;
};