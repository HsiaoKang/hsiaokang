import Table from "../../../components/Table/Table"

const HouseStatistics = () => {
    const columns = [
        {
            title: "网格",
            dataIndex: "a",
        },
        {
            title: "自用",
            dataIndex: "a",
        },
        {
            title: "租借用",
            dataIndex: "a",
        },
        {
            title: "闲置",
            dataIndex: "a",
        },
        {
            title: "其他",
            dataIndex: "a",
        },
    ]

    const dataSource = [
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
        {
            a: "a1",
        },
    ]
    return (
        <div style={{ marginLeft: "-16px" ,marginRight:'-16px'}}>
            <Table columns={columns} dataSource={dataSource} autoScroll />
        </div>
    )
}
export default HouseStatistics
