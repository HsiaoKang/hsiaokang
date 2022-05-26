import House from "../../modules/house/House/House"
import TopBar from "../TopBar/TopBar"
import "./Container.scss"

const Container = ({ children }) => {
    return (
        <div className="container">
            <header className="header">
                <h1 className="title">月牙湖社区大数据可视化平台</h1>
                <p className="updateTime">最近更新：2022年05月01日 14:12:01</p>
            </header>
            <div className="body">
                <TopBar />
                <House />
            </div>
        </div>
    )
}

export default Container
