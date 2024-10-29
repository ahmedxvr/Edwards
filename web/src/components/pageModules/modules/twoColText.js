import React from "react";

import ModuleWrapper from "../moduleWrapper";
import { SimplePortableText } from "../../sanity/simplePortableText";

const TwoColText = ({ config, heading, leftText, rightText }) => {
  return (
    <ModuleWrapper {...config}>
      <div className="px-gutter">
        <h3 className="richH0 mb-[30px]">{heading}</h3>
        <div className={` grid lg:grid-cols-2 gap-x-52 gap-y-10`}>
          {leftText && <SimplePortableText desktop text={leftText} />}
          {rightText && <SimplePortableText desktop text={rightText} />}
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default TwoColText;
