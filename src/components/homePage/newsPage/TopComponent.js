import "./TopComponent.css"
const TopComponent = (props) => {
    const data = props.newsData
    return (
        <div className="topContent_wrapper">
            <h2>Featured Artikel</h2>
            <section>
                <div className="topLeft_content">
                    <img src={data[0]?.img} />
                    <h3> {data[0]?.title}</h3>
                    <p>{data[0]?.description}</p>
                </div>
                <aside>
                    <div>
                        <img src={data[1]?.img} />
                        <h3>{data[1]?.title}</h3>
                    </div>
                    <div>
                        <img src={data[2]?.img} />
                        <h3>{data[2]?.title}</h3>
                    </div>
                    <div>
                        <img src={data[3]?.img} />
                        <h3>{data[3]?.title}</h3>
                    </div>
                </aside>
            </section>
        </div >
    )
}
export default TopComponent;