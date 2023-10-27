import React, { useState } from 'react'

export default function About(props) {
    return (
        <div className={`text-${props.mode === 'light' ? 'dark' : 'light'} container about-textutils`}>
            <h1 className='my-3'>About TextUtils</h1>
            <h3>What is this app for?</h3>
            <p>TextUtils is a simple utility application that converts the text you entered into your desired case and allows you to analyse your text and copy the output. <strong>The application has been built using React Js alone.</strong></p>
            <h3>Why was TextUtils built?</h3>
            <p>My motivation to build this application was to create something that I would be using in the long term. As someone who messes up a lot while typing, TextUtils feels like a life saver at times. Anyway, who would like to see a paragraph like this in an official email?</p>
            <p className={`wrong-text-case-eg-1 bg-${props.mode === 'light' ? 'lightGray' : 'darkGray'}`}>
            eXERCISING IS VITALLY IMPORTANT FOR OVERALL HEALTH AND WELL-BEING. Regular PHysical Activity helps maintain weight, reduces the risk of chronic diseases, such as Heart Disease, and enhances mood. it boostS Energy levels, improves sleep quality, ANd increases muscle strength.
            </p>
        </div>
    )
}
