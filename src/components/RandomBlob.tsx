import React, { useMemo } from 'react'

type props = {
    className: string
}

const RandomBlob = (props: props) => {
    const randomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    const randomFloat = (
        min: number,
        max: number,
        precision: number = 2
    ): number => {
        const randomValue = Math.random() * (max - min) + min
        return parseFloat(randomValue.toFixed(precision))
    }

    const blobProps = useMemo(() => {
        const size = randomFloat(10, 30)

        const lowerRight = randomInt(0, 40)
        const higherRight = randomInt(60, 100)
        const right = Math.random() < 0.5 ? lowerRight : higherRight

        return {
            height: `${size}rem`,
            width: `${size}rem`,
            top: `${randomInt(10, 90)}%`,
            right: `${right}%`,
        }
    }, [])

    return (
        <div
            className={`${props.className} absolute rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-xl opacity-70 dark:opacity-60 animate-blob z-0`}
            style={blobProps}
        ></div>
    )
}

export default RandomBlob
