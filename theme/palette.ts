import { PaletteMode } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles';

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  background: {
    // pink
    default: mode === 'dark' ? "#000" : "#fff",
  },
  primary: {
    main: "#d5fb84",
  },
  text: {
    primary: mode === 'dark' ? "#fff" : '#000',
  },
})
