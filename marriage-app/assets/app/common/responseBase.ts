export class ResponseBase {
    Data: any;
    Message: string;
    token: any;
    userId: any;
    success: boolean;
}

export class ResponseBaseGeneric<T> {
    Data: T;
    Message: string;
    token: string;
    userId: number;
    success: boolean;
}