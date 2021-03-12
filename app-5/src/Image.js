import React from 'react';
/*
class Image extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src= alt='Image I took from the assignment'></img>
            </div>
        )
    }
}
*/

const Image = (props) => {
    return(
        <img className="myPic" src={props.imgPath} alt='I took this from the assignment'></img>
    );
};


export default Image;