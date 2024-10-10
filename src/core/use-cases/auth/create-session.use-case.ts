import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { AuthMapper } from '../../../infraestructure/mappers/auth.mappers';
import { SessionID } from '../../entities/auth.entity';
import { GuestSessionIDResponse } from '../../../infraestructure/interfaces/auth-movie-db.resonses';

export const createSessionUseCase = async (fetcher: HttpAdapter): Promise<SessionID> => {

    try {
        const session = await fetcher.get<GuestSessionIDResponse>('/guest_session/new');
        return AuthMapper.fromMovieDBGuestSessionToEntity(session);

    } catch (error) {
        console.log({ error });
        throw new Error('Cannot get movies genre list');
    }
};
