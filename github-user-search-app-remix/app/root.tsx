import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/tailwind.css?url';
import { cn } from './utils/cn';
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

function App() {
  const [theme] = useTheme();

  return (
    <html lang='en' className={cn(theme)}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <NonFlashOfWrongThemeEls />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
