import { Column } from "@antv/g2plot"
import { useCallback, useEffect } from "react"
import { tooltipConfig } from "../../../config"
import useDOM from "../../../hooks/useDOM"

const LiveStatusTrend = () => {
    const [container, getDOM] = useDOM()

    const data = [
        {
            type: "1月",
            sales: 38,
        },
        {
            type: "2月",
            sales: 52,
        },
        {
            type: "3月",
            sales: 61,
        },
        {
            type: "4月",
            sales: 145,
        },
        {
            type: "5月",
            sales: 48,
        },
        {
            type: "6月",
            sales: 38,
        },
        {
            type: "7月",
            sales: 38,
        },
        {
            type: "8月",
            sales: 38,
        },
        {
            type: "9月",
            sales: 38,
        },
        {
            type: "10月",
            sales: 38,
        },
        {
            type: "11月",
            sales: 38,
        },
        {
            type: "12月",
            sales: 38,
        },
    ]

    const createChart = useCallback(() => {
        if(!container) return

        const columnPlot = new Column("house-live-status-trend", {
            data,
            xField: "type",
            yField: "sales",
            width: container.clientWidth,
            height: container.clientHeight,
            tooltip:tooltipConfig,
            xAxis: {
                label: {
                    autoHide: true,
                    autoRotate: false,
                },
            },
            meta: {
                type: {
                    alias: "类别",
                },
                sales: {
                    alias: "销售额",
                },
            },
            minColumnWidth: 20,
            maxColumnWidth: 20,
        })

        columnPlot.render()
    }, [container])

    useEffect(()=>{
        if(!container) return
        createChart()
    },[container, createChart])
    return (
        <div ref={getDOM} className="height-full">
            <div id="house-live-status-trend"></div>
        </div>
    )
}
export default LiveStatusTrend
