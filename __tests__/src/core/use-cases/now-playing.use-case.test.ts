import { movieDBAxiosFetcher } from "../../../../src/config/adapters/movieDB.adapter"
import { moviesNowPlayingUseCase } from "../../../../src/core/use-cases"

describe('Pruebas en el now-palying.use-case', () => {
    test('Debe retornar un arrelgo no vacío', async () => {
        const nowPlaying = await moviesNowPlayingUseCase(movieDBAxiosFetcher());
        expect(nowPlaying.length).not.toBe(0);
    });

    test('Debe retornar el primer elemento con las propiedades de Movie', async () => {
        const nowPlaying = await moviesNowPlayingUseCase(movieDBAxiosFetcher());

        expect(nowPlaying[0]).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            releaseDate: expect.any(Date),
            rating: expect.any(Number),
            poster: expect.any(String),
            backdrop: expect.any(String),
        })
    })
})