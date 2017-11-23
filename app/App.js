import React from "react";
import ReactDOM from "react-dom";
import LoadingButton from './components/LoadingButton';
import Link from './components/Link';
import MyList from './components/MyList';

ReactDOM.render(
    <div>
        <LoadingButton/>
        <br/>
        <Link children="123" page="21321312"/>
        <br/>
        <MyList/>
    </div>
    , document.getElementById("root"));