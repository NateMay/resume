export interface IImage {
    url: string | null;
    href?: string;
    clickAction?: () => any;
    caption?: string;
    title?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
}
