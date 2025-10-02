import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return (
    <NextStudio
      config={config}
      // prevent React from complaining about unknown props
      unstable__noTransitions // this is the supported alternative
    />
  );
}
