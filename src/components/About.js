import React, { useState } from 'react'

export default function About(props) {
    return (
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'} container about-textutils`}>
            <h1 className='my-3'>About TextUtils</h1>
            <h3>What is this app for?</h3>
            <p>TextUtils is a simple utility application that converts the text you entered into your desired case and allows you to analyse your text and copy the output. The application has been built using React Js alone.</p>
            <h3>Why was TextUtils built?</h3>
            <p></p>
        </div>
    )
}
