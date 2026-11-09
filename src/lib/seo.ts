import type { Metadata } from "next";
import { site } from "@/lib/site";

export const defaultMetadata: Metadata = {
  title: {
    default: `${site.name} · ${site.pillars.join(" · ")}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_AU",
  },
};

export function pageTitle(title: string): Metadata {
  return {
    title,
    description: site.description,
    robots: { index: false, follow: false },
  };
}
