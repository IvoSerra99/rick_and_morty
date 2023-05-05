import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav ({onSearch}) {

    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button>
                <NavLink to="/home">Inicio</NavLink>
            </button>
            <button>
                <NavLink to="/about">Sobre mi!</NavLink>
            </button>
        </div>
    );
}