import React, { FunctionComponent } from 'react';
import General from '../generalInterface';
interface CardImgBox extends General{
  children: any;
  sx?: any;
}

const CardImgBox: FunctionComponent<CardImgBox> = (props) => {
  return (
    <div
      className='neo-card-img'
      style={props.sx}>
      {props.children}
    </div>
  );
};
export default CardImgBox;
