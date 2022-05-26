import icon1 from "../../../assets/house/icon_juzhu@2x.png"
import icon2 from "../../../assets/house/icon_shengchan@2x.png"
import icon3 from "../../../assets/house/icon_jingying@2x.png"
import icon4 from "../../../assets/house/icon_bangong@2x.png"
import icon5 from "../../../assets/house/icon_cangchu@2x.png"
import icon6 from "../../../assets/house/icon_qita@2x.png"

import Wrapper from "../../../components/Wrapper/Wrapper"
import CommunityIntro from "../CommunityIntro/CommunityIntro"
import HouseStatistics from "../HouseStatistics/HouseStatistics"
import OccupancyRate from "../OccupancyRate/OccupancyRate"
import HouseStatusTrend from "../HouseStatusTrend/HouseStatusTrend"
import PolicyStatistics from "../PolicyStatistics/PolicyStatistics"
import RealHouse from "../RealHouse/RealHouse"
import RealUnit from "../RealUnit/RealUnit"
import LiveStatusTrend from "../LiveStatusTrend/LiveStatusTrend"

const House = () => {
    const topStatistics = [
        {
            value: 32,
            label: "居住",
            icon: icon1,
        },
        {
            value: 32,
            label: "生产",
            icon: icon2,
        },
        {
            value: 32,
            label: "经营",
            icon: icon3,
        },
        {
            value: 32,
            label: "办公",
            icon: icon4,
        },
        {
            value: 32,
            label: "仓储",
            icon: icon5,
        },
        {
            value: 32,
            label: "其他",
            icon: icon6,
        },
    ]
    return (
        <div className="height-full flex">
            <div className="flex fd-c">
                {/* 社区信息 */}
                <Wrapper height={210} width={445} padding="24">
                    <CommunityIntro />
                </Wrapper>
                <Wrapper className="mt-20" title="入住率" width={445} height={204}>
                    <OccupancyRate />
                </Wrapper>
                <Wrapper
                    className="mt-20"
                    title="社区房源统计"
                    subTitle={
                        <span className="color-2 fs-14">
                            网格总数：
                            <span className="color-orange">13</span>
                        </span>
                    }
                    width={445}
                    height={408}
                >
                    <HouseStatistics />
                </Wrapper>
            </div>
            <div className="flex-1 pl-20 pr-20 ">
                {/* 顶部统计 */}
                <div className="flex jc-b width-full">
                    {topStatistics.map((item, index) => (
                        <Wrapper width={135} height={88} key={index}>
                            <span className="number fs-28">{item.value}</span>
                            <div className="flex color-2">
                                <img
                                    className="mr-8"
                                    width={20}
                                    height={20}
                                    src={item.icon}
                                    alt=""
                                />
                                {item.label}
                            </div>
                        </Wrapper>
                    ))}
                </div>
                {/* 地图 */}
                <Wrapper width={"100%"} height={466} className="mt-20"></Wrapper>
                <Wrapper width={"100%"} height={266} className="mt-20" title="社区房源变化趋势">
                    <HouseStatusTrend />
                </Wrapper>
            </div>
            <div className="flex fd-c">
                <Wrapper width={446} height={280} title="一标三实渠道统计">
                    <PolicyStatistics />
                </Wrapper>
                <div className="flex jc-b width-full mt-20">
                    <Wrapper width={212} height={274} title="实有房屋">
                        <RealHouse />
                    </Wrapper>

                    <Wrapper width={212} height={274} title="实有单位">
                        <RealUnit />
                    </Wrapper>
                </div>
                <Wrapper title="入住变化趋势" width={445} height={266} className="mt-20">
                    <LiveStatusTrend/>
                </Wrapper>
            </div>
        </div>
    )
}

export default House
