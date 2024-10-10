import { render, screen } from "@testing-library/react-native"
import { HeartIcon } from "../../../src/assets/HeartIcon"
import '@testing-library/jest-dom'; 
import { Svg } from "react-native-svg";

describe('Pruebas en el <HeartIcon />', () => {
    test('Debe mostrar el Icono gris', () => {
        const { UNSAFE_getByType} = render(<HeartIcon height={20} width={20} fill={false} />);
        const heartIcon = UNSAFE_getByType(Svg)
        expect(heartIcon.props.fill).toBe('gray');
    })
    test('Debe mostrar el Icono rojo', () => {
        const { UNSAFE_getByType} = render(<HeartIcon height={20} width={20} fill={true} />);
        const heartIcon = UNSAFE_getByType(Svg)
        expect(heartIcon.props.fill).toBe('red');
    })
})