import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Bar } from "@antv/g2plot"
import useDOM from "../../../hooks/useDOM"
import { tooltipConfig } from "../../../config"

const RealHouse = () => {
    const chartRef = useRef()
    const [container, getDOM] = useDOM()
    const data = [
        { year: "1951 年", value: 38 },
        { year: "1952 年", value: 52 },
        { year: "1956 年", value: 61 },
        { year: "1957 年", value: 145 },
        { year: "1958 年", value: 48 },
    ]

    const createChart = useCallback(() => {
        const child = document.getElementById("house-real-house")
        if (child.childNodes.length) return
        const bar = new Bar("house-real-house", {
            data,
            xField: "value",
            yField: "year",
            seriesField: "year",
            legend: false,
            width: container.clientWidth,
            height: container.clientHeight,
            autoFit: false,
            tooltip: tooltipConfig,
        })
        chartRef.current = bar
        bar.render()
    }, [container, data])

    useLayoutEffect(() => {
        if (!container) return
        createChart()
    }, [container])
    return (
        <div ref={getDOM} className="height-full">
            <div id="house-real-house"></div>
        </div>
    )
}

export default RealHouse
