"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import NextAppDirEmotionCacheProvider from "./EmotionCacheProvider";
import { getPalette } from "./palette";
import {typography} from "./typography";
import { PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {}, mode: 'dark' });

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<PaletteMode>('dark');

  const toggleColorMode = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme({
    typography,
    palette: getPalette(mode),
  });

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <MuiThemeProvider theme={theme}>
        <ColorModeContext.Provider value={{toggleColorMode, mode}}>
          <CssBaseline />
          {children}
        </ColorModeContext.Provider>
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}