import Loader from "react-loader-spinner";
import React from 'react';

export default function App() {

    return (<Loader
        type="Audio"
        color="yellow"
        height={100}
        width={100}
        timeout={3000} //3 secs
    /> 


    );

}
