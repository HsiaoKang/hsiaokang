import IText from "../../../components/IText/IText"
import Progress from "../../../components/Progress/Progress"

const OccupancyRate = () => {
    return (
        <div className="flex fd-c jc-b height-full">
            <Progress value={85} />
            <div className="flex mt-auto">
                <div className="flex fd-c jc-b height-48 span-30">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#338BFF"}>已入住</IText>
                </div>
                <div className="flex fd-c jc-b height-48 span-30">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#6C8097"}>房屋总数</IText>
                </div>
                <div className="flex fd-c jc-b height-48 span-30">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#FF711F"}>环比增长</IText>
                </div>
            </div>
        </div>
    )
}

export default OccupancyRate
