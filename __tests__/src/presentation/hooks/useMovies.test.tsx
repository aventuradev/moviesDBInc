import { renderHook, waitFor } from "@testing-library/react-native"
import { useMovies } from "../../../../src/presentation/hooks/useMovies"

describe('Pruebas en el useMovies', () => {
    test('Debe retornar isLoading true y now Playing []', () => {
        const { result } = renderHook(() => useMovies());
        const { isLoading, nowPlaying } = result.current;

        expect(isLoading).toBe(true);
        expect(nowPlaying).toEqual([]);
    })
    test('Debe retornar isLoading true', async () => {
        const { result } = renderHook(() => useMovies());
        await waitFor(
            () => {
                expect(result.current.isLoading).toBe(true)
            }
        );
    });

    test('Debe retornar el arreglo de nowPlaying con elementos', async () => {
        const { result } = renderHook(() => useMovies());
        await waitFor(
            () => {
                expect(result.current.nowPlaying.length).toBeGreaterThan(0);
            }
        );
    })
})