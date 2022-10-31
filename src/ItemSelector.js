import { Link, NavLink } from "react-router-dom";

const ItemSelector = ( {snacks} ) => {
    const snackLinks = snacks.map( snack => (
        <li><NavLink exact to={`/${snack}`}>{snack}</NavLink></li>
    ));

    return (
        <ul>
            {snackLinks}
        </ul>
    )
};

export default ItemSelector;