
import React from "react";

import Profile from "~/components/Profile";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { Entry } from "~/interface";
import Footer from "~/components/Footer";
import { fetchAsset, fetchEntries } from "~/contentstack";

interface AppProps {
  entry: Entry;
}

export async function loader({ }: LoaderFunctionArgs) {
  const [entry, asset] = await Promise.all([fetchEntries(), fetchAsset()]);
  return json({ entry:{...entry, dp: (asset.url || '/cs_logo.png')} });
}

export default function Index() {
  const { entry } = useLoaderData() as AppProps;
  return (
    <div>
      <Profile
        dp={entry.dp}
        name={entry.name}
        designation={entry.designation}
        description={entry.description}
        width={200}
        height={200}
        linkedinUrl={entry.linkedin}
        githubUrl={entry.github}
        xUrl={entry.x}
      />

      <Footer/>
    </div>
  );
}
