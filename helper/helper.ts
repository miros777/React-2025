export const retrieveTokens = <T>(keyLocalStorage: string) => {
    const currentData = localStorage.getItem(keyLocalStorage) || null;

    if (!currentData) {
        return {} as T
    }
    const parse = JSON.parse(currentData);
    return parse as T;

}