import React from 'react';
import Fragment from '../hoc/fragment.js';
import withClass from '../hoc/withClass.js';

function Layout(props) {
    return (
        <>
            <div className="header">{props.header}</div>
            <div>{props.menu}</div>
            <div>{props.content}</div>
            <div>{props.footer}</div>
        </>
    )
}

export default withClass(Layout, "layout");
