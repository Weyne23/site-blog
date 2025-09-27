import { LadingPage } from "@/templates/LadingPage";

import { allPosts } from "contentlayer/generated";

export default function Home() {

  console.log(allPosts)
  return (
    <LadingPage />
  );
}
