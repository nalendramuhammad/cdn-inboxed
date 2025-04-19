"use client";

import { Suspense } from "react";
import CaseStudiesClient from "./CaseStudiesClient";

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudiesClient />
    </Suspense>
  );
}
