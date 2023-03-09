export interface IAlert {
    message?: string;
    status?: "error" | "info" | "success" | "warning";
    open?: boolean
}