export interface Token {
    expires_at: string;
    request_token: string;
}

export interface SessionID {
    expires_at: string;
    session_id: string;
}
