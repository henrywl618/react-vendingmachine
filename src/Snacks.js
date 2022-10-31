import { Link } from "react-router-dom";

const Snacks = ({ snack }) => {
    return (
        <>
        <p> {`You just bought ${snack}`} </p>
        <br></br>
        <Link to="/">Go Back</Link>
        </>
    )
};

export default Snacks;