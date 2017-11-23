import React from "react";
import ReactDOM from "react-dom";
import LoadingButton from './components/LoadingButton';
import Link from './components/Link';

ReactDOM.render(
    <div>
        <LoadingButton/>
        <br/>
        <Link children="123" page="21321312"/>
    </div>
    , document.getElementById("root"));