import React from 'react'

const FormWrapper = props => {
    return (
        <div style={{ background: "green" }}>
            {props.children}
        </div>
    )
}

export default FormWrapper;