import React from 'react'
import './myStyles.css'
export const StyleSheet = ({primary}) => {
    let className=primary?'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style Sheet</h1>
        </div>
    )
}
