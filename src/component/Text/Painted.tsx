import {FC} from "react";
import {useTheme} from "../theme/Theme";

interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}

interface ColorProps {
    color: Color
    size?: number | string
    bold?: boolean
}

export const PaintedText: FC<ColorProps> = ({children, color, size, bold}) => {
    const {theme} = useTheme();
    const isLight = theme === 'light'
    return <span style={{
        color: isLight ? color["900"] : color["300"],
        fontSize: size || 'inherit',
        fontWeight: bold ? 'bold' : 'inherit'
    }}>
        {children}{` `}
    </span>
}