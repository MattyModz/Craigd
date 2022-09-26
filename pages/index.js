import React from "react";

import Index from "../src/componants/Hero/index";
import Longform from "../src/componants/longform";
import Sectioone from "../src/componants/sectionone";

import Sectiontwo from "../src/componants/sectiontwo";

import Sectionsix from "../src/componants/sectionsix";
import Sectionseven from "../src/componants/sectionseven";

export default function Home() {
  return (
    <>
      <Index />
      <Sectioone />
      <Sectiontwo />
      <Longform />
      <Sectionsix />
      <Sectionseven />
    </>
  );
}
