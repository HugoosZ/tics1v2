import React from "react";

import Image from 'next/image'
function CustomIcon(props: any) {
  return (
    <Image src="/image.png" width={props.width} height={props.height} alt="Custom Icon" />
  );
}

export default CustomIcon;
