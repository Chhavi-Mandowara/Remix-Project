import { type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css?url";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const themeFromEnv = (process.env.DEFAULT_THEME || "light") as Theme;

  return {
    theme: themeFromEnv,
  };
}

export default function AppWithProvider() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <html lang="en" data-theme={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="My portfolio website built with Remix"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>My portfolio</title>
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="light:bg-white light:text-black dark:bg-black dark:text-white mint:text[#213540]">
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-20">
        {children}
      </main>
    </div>
  );
}
