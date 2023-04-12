import { useRouter } from "next/router";
import React from "react";

const PropertySlugPage = () => {
  const router = useRouter();
  console.log("PropertySlugPage ~ router:", router);
  return <div>Property Slug page</div>;
};

export default PropertySlugPage;
