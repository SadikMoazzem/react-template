export type GenericAPI<T> = {
    count: number;
    next?: number;
    previous?: number;
    results: T[];
}
