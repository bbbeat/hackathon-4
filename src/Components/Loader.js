import Loader from "react-loader-spinner";
import React from 'react';

export default function App(props) {

    return ((props.loading) ? <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
    /> : <div></div>


    );

}
