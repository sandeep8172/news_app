import "./BottomComponent.css";

const BottomComponent = (props) => {

    const { img, title, description } = props.data
    return (
        // <>
        <div>
            <img src={img} />
            <figure>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </figure>
        </div>
    );
};
export default BottomComponent;
