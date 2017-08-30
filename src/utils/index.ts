function padTime(value: any) {
    const format = '00';
    const text = format + value;
    return text.slice(-format.length);
}

export function timeFormatter(value: PolyTest.Time) {
    if (!value) return;
    const newVal = { ...value };
    Object.keys(newVal)
        .forEach(k => newVal[k] = padTime(newVal[k]));

    return newVal;
}