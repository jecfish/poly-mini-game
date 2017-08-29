declare module "*.html" {
    const content: string;
    export default content;
}

declare interface Card {
    id: number;
    coverImageUrl: string;
    imageUrl: string;
    isFlipped: boolean;
    isMatched: boolean;
}