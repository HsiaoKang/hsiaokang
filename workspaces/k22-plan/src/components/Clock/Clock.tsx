import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
const width = 400
const height = 300

const Base = () => {
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>()

    useEffect(() => {
        if (!ctx) return
        draw(ctx)
    }, [ctx])

    function draw(ctx: CanvasRenderingContext2D) {
        drawBorder(ctx)
    }

    function drawBorder(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "black"
        ctx.strokeRect(0, 0, width, height)
    }

    const refCall = useCallback((node) => {
        console.log(1)
        setCtx(node.getContext("2d"))
    }, [])

    return (
        <canvas ref={refCall} width={width} height={width}>
            不支持画布
        </canvas>
    )
}
export default Base
