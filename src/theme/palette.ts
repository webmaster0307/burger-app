import { PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles';

export const getPalette = (mode: PaletteMode): PaletteOptions => ({
  background: {
    default: mode === 'dark' ? "#000" : grey[100],
    paper: mode === 'dark' ? grey[900] : '#fff'
  },
  primary: {
    main: "#d5fb84",
  },
  secondary: {
    main: mode === 'dark' ? grey[700] : grey[900]
  },
  text: {
    primary: mode === 'dark' ? "#fff" : '#000',
  },
})
