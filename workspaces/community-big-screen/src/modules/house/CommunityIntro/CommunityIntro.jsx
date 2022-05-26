import { useState } from "react"
import IText from "../../../components/IText/IText"
import styles from "./CommunityIntro.module.scss"
const CommunityIntro = () => {
    const [data] = useState({
        total: "123,1123",
    })
    return (
        <div className="flex fd-c height-full">
            <div>
                <span className="fs-24 color-1 ff-pm">月牙湖社区</span>
                <span className="fs-14 color-3 ml-4">/房屋总数</span>
            </div>
            <div className="fs-48 number lh-58">{data.total}</div>
            <div className="flex mt-auto">
                <div className="flex fd-c jc-b height-48 span-25">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#338BFF"}>自用</IText>
                </div>
                <div className="flex fd-c jc-b height-48 span-25">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#66E1DF"}>租借用</IText>
                </div>
                <div className="flex fd-c jc-b height-48 span-25">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#FF711F"}>闲置</IText>
                </div>
                <div className="flex fd-c jc-b height-48 span-25">
                    <span className="number lh-22">12.1234</span>
                    <IText color={"#FFC97A"}>其他</IText>
                </div>
            </div>
        </div>
    )
}

export default CommunityIntro
