"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import NextAppDirEmotionCacheProvider from "./EmotionCacheProvider";
import { getPalette } from "./palette";
import { Roboto } from "next/font/google";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontSize: 12,
          fontFamily: roboto.style.fontFamily,
        },
        palette: getPalette(mode),
      }),
    [mode],
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ColorModeContext.Provider value={colorMode}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}