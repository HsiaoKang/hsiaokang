import { Line } from "@antv/g2plot"
import { useCallback, useEffect } from "react"
import { tooltipConfig } from "../../../config"
import useDOM from "../../../hooks/useDOM"

const HouseStatusTrend = () => {
    const [container, getDOM] = useDOM()
    const data = [
        { year: "1991", value: 1, category: "a" },
        { year: "1992", value: 4, category: "a" },
        { year: "1993", value: 3.5, category: "a" },
        { year: "1994", value: 5, category: "b" },
        { year: "1995", value: 4.9, category: "b" },
        { year: "1995", value: 4, category: "c" },
        { year: "1996", value: 4, category: "c" },
    ]

    const createChart = useCallback(() => {
        if (!container) return
        const line = new Line("house-status-trend", {
            data,
            xField: "year",
            yField: "value",
            seriesField: "category",
            width: container.clientWidth,
            height: container.clientHeight ?? 0,
            tooltip: tooltipConfig,
        })
        line.render()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [container])

    useEffect(() => {
        createChart()
    }, [createChart])

    return (
        <div className="height-full" ref={getDOM}>
            <div id="house-status-trend"></div>
        </div>
    )
}
export default HouseStatusTrend
