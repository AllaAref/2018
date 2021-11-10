export interface IAdmin {
    telegramId: string;
}

export interface ITag {
    displayValue: string;
    value: string;
    group: string
}

export interface IChannel {
    name: string;
    link: string;
    tags: ITag[]
}