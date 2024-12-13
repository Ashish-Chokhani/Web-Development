import React from "react";

const date = new Date();
const year=date.getFullYear();

function Header()
{
    return <footer>
    <p>Copyright &copy; {year}</p>
    </footer>
}

export default Header;