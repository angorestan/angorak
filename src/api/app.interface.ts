export interface IApp {
	name: string; // app name
	secure?: boolean; // app use secure protocol like HTTPS
	domain: string; // app domain
	port: number; // app start port
	host?: string; // app start host
	source?: string; // app source, if start with "upload:" means uploaded file directly, if start with "git:" means git url
	startup?: string | string[]; // app start script command
	destroy?: string | string[]; // app destroy script command
}

export type TTraefikKeys = "endpoint" | "domain" | "app" | "protocol" | "tls" | "cert";
// Interface for traefik config for each TTraefikKeys
export type ITraefikConfig = {
	[key in TTraefikKeys]: string;
};
