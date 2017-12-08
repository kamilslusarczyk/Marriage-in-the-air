export class ResponseBase {
    Data: any;
    Message: string;
    token: any;
    userId: any;
}

export class ResponseBaseGeneric<T> {
    Data: T;
    Message: string;
    token: string;
    userId: number;
}