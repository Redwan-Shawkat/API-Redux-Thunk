import { Link } from "react-router-dom";

const Nav = () => {
	return (
    <header className='header'>
      <div className='container'>
        <nav className='header__navbar'>
          <ul>
            <li>
              <Link to='/'>Shop</Link>
            </li>
            {/*             
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
             */}
            <li>
              <Link to='/todos'>Todos</Link>
            </li>
            <li>
              <Link to='/counter-app'>Counter App</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
