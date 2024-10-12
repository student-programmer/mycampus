export const enCodeUrl = (value: string | string[]) => {
    if (Array.isArray(value)) {
        const prepare = value.join(', '); 
        return decodeURIComponent(prepare)
    }
    return decodeURIComponent(value)
}