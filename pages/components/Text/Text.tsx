import React, { FunctionComponent } from "react";

interface TextProps{
    children: string;
    maxLines?: number;
}

const Text: FunctionComponent<TextProps> = (props) => {
    return (
      <div className='neo-text' style={{WebkitLineClamp: props.maxLines??6}}>
        <p>{props.children}</p>
      </div>
    );
}

export default Text;