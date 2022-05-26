import classNames from "classnames"
import "./Wrapper.scss"

const Wrapper = ({ width, height, padding, extra, title, subTitle, className, children }) => {
    const hasHeader = title || extra
    return (
        <div
            className={classNames("wrapper-box", className)}
            style={{ width, height, padding: padding ? padding + "px" : null }}
        >
            {hasHeader && (
                <div className="flex height-18 width-full ai-c jc-b">
                    <span className="ff-pm fs-18">
                        {title}
                        <span className="ff-normal ml-8">{subTitle}</span>
                    </span>
                    <span>{extra}</span>
                </div>
            )}
            <div className={classNames("flex-1",{'pt-20':hasHeader})}>{children}</div>

            {/* 四个角 */}
            <div className="angle angle-1"></div>
            <div className="angle angle-2"></div>
            <div className="angle angle-3"></div>
            <div className="angle angle-4"></div>
        </div>
    )
}

export default Wrapper
