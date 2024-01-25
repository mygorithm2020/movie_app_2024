import React, {useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

class Detail extends React.Component {
    componentDidMount() {
        const {location, navigate} = this.props;
        console.log(navigate);        
    }

    render() {
        console.log(this.props);        
        const {location} = this.props;
        if (location.state === undefined || location.state === null) {
            return (
                <Navigate to='/' replace={true}/>
            );
            // this.props.navigate('/');
            
        }else{
            return <span>{location.state.title}</span>;

        }
        // if (location.state) {
            
        // }else {
            
        // }
        
    }

    
}

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

export default Detail;