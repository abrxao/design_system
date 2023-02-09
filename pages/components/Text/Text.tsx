import React, { FunctionComponent } from "react";
import General from "../generalInterface";

interface TextProps extends General{
    maxLines?: number;
}

const Text: FunctionComponent<Omit<TextProps, "onBlur">> = (props) => {
    return (
      <div
        className='neo-text'
        style={{ WebkitLineClamp: props.maxLines ?? 6 }}
        onClick={(e) => (props.onClick ? props.onClick(e) : {})}
        onChange={(e) => (props.onChange ? props.onChange(e) : {})}
        onKeyDown={(e) => (props.onKeyDown ? props.onKeyDown(e) : {})}>
        <p>{props.children}</p>
      </div>
    );
}

export default Text;