import classNames from "classnames"
import { useEffect, useState } from "react"
import "./Table.scss"

const Table = ({ columns, dataSource, autoScroll = false }) => {
    const [currentRowIndex, setCurrentRowIndex] = useState(null)
    // 滚动速度 ms
    const scrollSpeed = 3000
    useEffect(() => {
        if (!autoScroll) return
        const timer = setInterval(() => {
            setCurrentRowIndex((prev) => {
                if(prev===dataSource?.length-1){
                    return 0
                }
                return prev === null ? 0 : prev + 1
            })
        }, scrollSpeed)
        return () => {
            clearInterval(timer)
        }
    }, [autoScroll, dataSource?.length])
    return (
        <table className={classNames("cm-table")}>
            {/* <colgroup>
                {columns?.map((item, i) => (
                    <col></col>
                ))}
            </colgroup> */}
            <thead>
                <tr>
                    {columns?.map((item, i) => (
                        <th key={i}>{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item, trIndex) => (
                    <tr
                        key={trIndex}
                        className={classNames({ "active-row": trIndex === currentRowIndex })}
                    >
                        {columns?.map((td, tdIndex) => (
                            <td key={tdIndex} className={classNames(`col-${tdIndex}`)}>
                                {item[td.dataIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
