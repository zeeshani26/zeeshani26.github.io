import React from "react";
import { Image } from "@chakra-ui/react";

export default function LazyImage({ priority = false, ...props }) {
  return (
    <Image
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      {...props}
    />
  );
}
