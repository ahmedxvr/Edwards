import React from "react";
import Image from "gatsby-plugin-sanity-image";

export const SanityImage = ({ image, ...rest }) => {
  return image && image?.asset ? <Image {...image} {...rest} /> : null;
};
