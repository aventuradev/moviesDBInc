import { SessionID, Token } from '../../core/entities/auth.entity';
import { GuestSessionIDResponse, TokenRequestResponse } from '../interfaces/auth-movie-db.resonses';



export class AuthMapper {

    static fromMovieDBTokenRequestToEntity(token: TokenRequestResponse): Token {
        return {
            expires_at: token.expires_at,
            request_token: token.request_token,
        };
    }
    static fromMovieDBGuestSessionToEntity(guestSession: GuestSessionIDResponse): SessionID {
        return {
            expires_at: guestSession.expires_at,
            session_id: guestSession.guest_session_id,
        };
    }
}
