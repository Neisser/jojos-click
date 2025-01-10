export interface Shortener {
    short: string;
    code: string;
    status: string;
    clicks: string;
    _id: string;
}

export interface ShortenerResult {
    data: {
        url: string;
    },
    message: string
}
