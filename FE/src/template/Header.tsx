import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCart } from '../store/cart/actions';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const data = useSelector((state: any) => state.cart.data);

  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenedDrawer(!openedDrawer);
  };

  const changeNav = () => {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  };

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/cart');
  };

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/' onClick={changeNav}>
            <FontAwesomeIcon icon={['fas', 'film']} className='ml-1' size='lg' />
            <span className='ms-2 h5'>Movie</span>
          </Link>

          <div className={'navbar-collapse offcanvas-collapse ' + (openedDrawer ? 'open' : '')}>
            <ul className='navbar-nav me-auto mb-lg-0'>
              <li className='nav-item'>
                <Link to='/products' className='nav-link' onClick={changeNav}>
                  Browse Movie
                </Link>
              </li>
            </ul>
            <button
              type='button'
              className='btn btn-outline-dark me-3 d-none d-lg-inline'
              onClick={handleNavigate}
            >
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
              <span className='ms-3 badge rounded-pill bg-dark'>{data?.length}</span>
            </button>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  id='userDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <FontAwesomeIcon icon={['fas', 'user-alt']} />
                </a>
                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='userDropdown'>
                  <li>
                    <Link to='/' className='dropdown-item' onClick={changeNav}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='dropdown-item' onClick={changeNav}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='d-inline-block d-lg-none'>
            <button type='button' className='btn btn-outline-dark' onClick={handleNavigate}>
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
              <span className='ms-3 badge rounded-pill bg-dark'>{data?.length}</span>
            </button>
            <button
              className='navbar-toggler p-0 border-0 ms-3'
              type='button'
              onClick={toggleDrawer}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
