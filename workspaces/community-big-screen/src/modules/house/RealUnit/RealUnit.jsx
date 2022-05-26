import { Pie } from "@antv/g2plot"
import { useCallback, useEffect } from "react"
import { tooltipConfig } from "../../../config"
import useDOM from "../../../hooks/useDOM"

const RealUnit = () => {
    const [container, getDOM] = useDOM()
    const data = [
        { type: "分类一", value: 27 },
        { type: "分类二", value: 25 },
        { type: "分类三", value: 18 },
    ]

    const createChart = useCallback(() => {
        const pie = new Pie("house-real-unit", {
            data,
            angleField: "value",
            colorField: "type",
            width: container.clientWidth,
            height: container.clientHeight,
            legend: false,
            radius: 0.6,
            innerRadius: 0.6,
            statistic: false,
            label: {
                type: "outer",
                offset: "5%",
                layout: "limitInShape",
                style: {
                    // fontSize:10,
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
            <div id="house-real-unit"></div>
        </div>
    )
}

export default RealUnit
