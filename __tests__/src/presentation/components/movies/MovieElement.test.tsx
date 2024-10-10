import { fireEvent, render, screen } from "@testing-library/react-native"
import { MovieElement } from "../../../../../src/presentation/components/movies/MovieElement"
import { Movie } from "../../../../../src/core/entities/movie.entity"
import { NavigationContainer } from "@react-navigation/native"

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
    const originalModule = jest.requireActual('@react-navigation/native');
    return {
        ...originalModule,
        useNavigation: () => ({
            navigate: mockNavigate,
        }),
    };
});

describe('Pruebas en <MovieElement/>', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const movie: Movie = {
        "backdrop": "https://image.tmdb.org/t/p/w500/zAqBIeO71BFL7bAtP5TFzVjVamy.jpg",
        "description": "Una mujer atraviesa las tumultuosas etapas de una relación abusiva. Tras mudarse a la ciudad de Boston después de la universidad, decide iniciar su propio negocio como florista y se enamora de un joven neurocirujano.",
        "id": 1079091,
        "poster": "https://image.tmdb.org/t/p/w500/2EH42blLQzgqwDWxn39RXkTgb91.jpg",
        "rating": 7.054,
        "releaseDate": new Date('2024-08-07T00:00:00.000Z'),
        "title": "Romper el círculo"
    }
    const favorites = {}

    const editFavorites = jest.fn();

    test('Debe mostrar el título, el rating, y la fecha de estreno', () => {

        const { getByText } = render(
            <NavigationContainer>
                <MovieElement movie={movie} favorites={favorites} editFavorites={editFavorites} />
            </NavigationContainer>
        );

        expect(getByText(movie.title)).toBeTruthy();
        expect(getByText(movie.rating.toFixed(2))).toBeTruthy();
        expect(getByText(new Date(movie.releaseDate).toLocaleDateString('es-ES', {
            day: 'numeric', month: 'long', year: 'numeric',
        }))).toBeTruthy();
    });

    test('Debe llamar la función de editFavorites con la película', () => {
        const { getByLabelText } = render(
            <NavigationContainer>
                <MovieElement movie={movie} favorites={favorites} editFavorites={editFavorites} />
            </NavigationContainer>
        );
        const heartIcon = getByLabelText('heart-icon');
        fireEvent.press(heartIcon);
        expect(editFavorites).toHaveBeenCalledWith(movie);
    });


    test('Debe ejecutar el navigate hacia "Details" con el movieId', () => {

        const { getByLabelText } = render(
            <NavigationContainer>
                <MovieElement movie={movie} favorites={favorites} editFavorites={editFavorites} />
            </NavigationContainer>
        );

        const container = screen.getByLabelText('container');
        fireEvent.press(container);

        expect(mockNavigate).toHaveBeenCalledWith("Details", { "movieId": 1079091 });
    });


})