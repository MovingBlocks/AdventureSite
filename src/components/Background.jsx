import React from 'react'

export function Background(props) {
    return (
        <div className="cover-img">
            <div className="container pruple-tint">
            {props.children}
            </div>
        </div>
    )
}
