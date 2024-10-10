export interface TokenRequestResponse {
    success:       boolean;
    expires_at:    string;
    request_token: string;
}

export interface GuestSessionIDResponse {
    expires_at:       string;
    guest_session_id: string;
    success:          boolean;
}
