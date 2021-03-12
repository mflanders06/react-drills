import React from 'react';

const Image = (props) => {
    return( <img className="myPic" src={props.imgPath} alt='I took this from the assignment'></img> );
};

export default Image;