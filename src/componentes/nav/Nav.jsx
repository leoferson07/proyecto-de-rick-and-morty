import SearchBar from "../searchbar/SearchBar"
import { NavLink } from "react-router-dom";

const Nav = (props)=> {
    return (
        <div>
            <NavLink to='/home'>
                <button>home</button>
            </NavLink>
            <NavLink to='/favorites'>
                <button>Favorites</button>
            </NavLink>
            <NavLink to='/about'>
                <button>About</button>
            </NavLink>
            <hr />
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav;