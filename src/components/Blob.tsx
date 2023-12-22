import React, { useMemo } from 'react'

type props = {
    className: string
}

const Blob = (props: props) => {
    return (
        <div
            className={`${props.className} absolute rounded-full mix-blend-multiply 
             filter blur-xl z-0 
             dark:opacity-60 dark:mix-blend-hard-light
             motion-reduce:animate-none`}
        ></div>
    )
}

export default Blob
