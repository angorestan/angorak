export interface IAngorakOptions {
	endpoint: string;
	auth: {
		username: string;
		password: string;
	};
}

export interface IResponse<T> {
	status: boolean;
	code: number;
	count?: number;
	data?: T;
	message?: string;
}
