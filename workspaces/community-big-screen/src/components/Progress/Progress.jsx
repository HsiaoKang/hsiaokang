import classNames from "classnames"
import { useMemo, useState } from "react"
import "./Profress.scss"

const Progress = ({ value }) => {
    const [container, setContainer] = useState({})
    const zeroBlockWidth = 40
    const smallBlockWidth = 10
    // 进度条宽度（去掉零块）
    const containerWidth = container.clientWidth - zeroBlockWidth

    // 小方块数量
    const smallBlockCount = useMemo(
        () => Math.floor(containerWidth / smallBlockWidth),
        [containerWidth]
    )

    // 

    // 已走完的进度块数
    const progressFlag = useMemo(
        () => Math.floor((containerWidth * (value / 100)) / smallBlockWidth),
        [containerWidth, value]
    )

    const tipStyle = {
        transform: "translateX(-50%)",
        left: ((containerWidth+zeroBlockWidth) * (value / 100))  ,
    }

    return (
        <div
            className="cm-progress"
            ref={(elm) => {
                setContainer(elm)
            }}
        >
            {/* 百分比标识 */}
            <div className="tip-wrap">
                <div className="tip" style={tipStyle}>
                    {value ? value + "%" : ""}
                    <div className="triangle"></div>
                </div>
            </div>
            {/* 进度条 */}
            <div className="progress">
                {/* 零块 */}
                <div className="zero-block"></div>
                {/* 每一截小块 */}
                {Array.from({ length: smallBlockCount }).map((item, i) => (
                    <div
                        key={i}
                        className={classNames("small-block", { active: i <= progressFlag })}
                    ></div>
                ))}
            </div>

            {/*  */}
        </div>
    )
}

export default Progress
