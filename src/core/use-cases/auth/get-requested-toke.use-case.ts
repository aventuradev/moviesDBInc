import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { TokenRequestResponse } from '../../../infraestructure/interfaces/auth-movie-db.resonses';
import { AuthMapper } from '../../../infraestructure/mappers/auth.mappers';
import { Token } from '../../entities/auth.entity';

export const getRequestedTokenUseCase = async (fetcher: HttpAdapter): Promise<Token> => {

    try {
        const tokenRequest = await fetcher.get<TokenRequestResponse>('/token/new');

        return AuthMapper.fromMovieDBTokenRequestToEntity(tokenRequest);

    } catch (error) {
        console.log({ error });
        throw new Error('Cannot get movies genre list');
    }
};
