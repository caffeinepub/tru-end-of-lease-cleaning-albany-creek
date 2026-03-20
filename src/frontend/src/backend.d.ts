import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    id: bigint;
    serviceType: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    deleteSubmission(id: bigint): Promise<void>;
    getAllSubmissions(): Promise<Array<Submission>>;
    getSubmission(id: bigint): Promise<Submission | null>;
    submitContactForm(name: string, email: string, phone: string, serviceType: string, message: string): Promise<void>;
}
