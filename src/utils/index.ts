export function padTime(value: any) {
    const format = '00';
    const text = format + value;
    return text.slice(-format.length);
}