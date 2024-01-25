import React, { useEffect } from "react";
import { useLocation,useNavigate, useParams } from "react-router-dom";
import Detail from "../routes/Detail";

function DetailProps(props) {
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate();
    console.log(navigate);
    console.log(useParams());

    useEffect(()=> {
        // navigate('/');
    });
    return <Detail location={location} navigate = {navigate} {...props} />;
}

export default DetailProps;