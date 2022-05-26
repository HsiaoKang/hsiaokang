import classNames from 'classnames'
import './IText.scss'
const IText = ({ color, children,className }) => {
    return (
        <span className={classNames("i-text",className)}>
            <span className="i" style={{ backgroundColor: color }}></span>
            <span className="text fs-14 color-2">{children}</span>
        </span>
    )
}

export default IText
