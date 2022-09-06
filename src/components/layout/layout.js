import React from 'react';

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

export default Layout;
