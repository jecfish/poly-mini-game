import 'reflect-metadata';

const formatMetadataKey = Symbol("format");

export function Prop(value?: string) {
    console.log(formatMetadataKey, value);
    return Reflect.metadata(formatMetadataKey, value);
}