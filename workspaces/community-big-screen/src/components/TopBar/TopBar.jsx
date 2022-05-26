import classNames from "classnames"
import { useState } from "react"
import "./TopBar.scss"
const TopBar = () => {
    // 1人口，2房源
    const [type, setType] = useState(1)

    return (
        <div className="top-bar">
            <div className="operation">
                <button
                    className={classNames("button mr-20", { active: type === 1 })}
                    onClick={() => setType(1)}
                >
                    人口
                </button>
                <button
                    className={classNames("button", { active: type === 2 })}
                    onClick={() => setType(2)}
                >
                    房源
                </button>
            </div>
            <div className="weather">天气</div>
        </div>
    )
}

export default TopBar
