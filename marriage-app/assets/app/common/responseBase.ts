export class ResponseBase {
    data: any;
    message: string;
    token: any;
    userId: any;
    success: boolean;
}

export class ResponseBaseGeneric<T> {
    data: T;
    message: string;
    token: string;
    userId: number;
    success: boolean;
}