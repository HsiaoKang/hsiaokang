import { Pie } from "@antv/g2plot"
import { useCallback, useEffect } from "react"
import { tooltipConfig } from "../../../config"
import useDOM from "../../../hooks/useDOM"

const PolicyStatistics = () => {
    const [container, getDOM] = useDOM()
    const data = [
        { type: "分类一", value: 27 },
        { type: "分类二", value: 25 },
        { type: "分类三", value: 18 },
    ]

    const createChart = useCallback(() => {
        const pie = new Pie("house-policy-statistics", {
            data,
            angleField: "value",
            colorField: "type",
            width: container.clientWidth,
            height: container.clientHeight,
            legend: false,
            radius: 0.8,
            label: {
                type: "spider",
                offset: "10%",
                layout: "limitInShape",
                style: {
                    fill: "#D0DEEE",
                },
                content: (v) => {
                    return `${v.type}
${v.value}%`
                },
            },
            tooltip: tooltipConfig,
        })
        pie.render()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [container])

    useEffect(() => {
        if (!container) return
        createChart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [container])
    return (
        <div ref={getDOM} className="height-full">
            <div id="house-policy-statistics"></div>
        </div>
    )
}

export default PolicyStatistics
