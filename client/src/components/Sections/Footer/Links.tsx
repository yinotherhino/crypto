import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RootState } from '../../../redux/store';
import { changeAuth } from '../../../redux/slices/NavbarSlice';

interface IProps {
    headerStyle: string;
    linkStyle: string;
    bodyStyle: string;
}
const Links = ({headerStyle,linkStyle,bodyStyle}:IProps) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    
  return (
    <>
    <h3 className={headerStyle}>Links</h3>
        <div className={bodyStyle}>
          <Link to="/" className={linkStyle}>
            Home
          </Link>
          {isLoggedIn ? (
            <Link to="/dashboard" className={linkStyle}>
              Dashboard
            </Link>
          ) : (
            <>
              <p
                className={linkStyle}
                onClick={() => dispatch(changeAuth("login"))}>
                Login
              </p>
              <p
                className={linkStyle}
                onClick={() => dispatch(changeAuth("register"))}>
                Register
              </p>
            </>
          )}
          <Link to="/about" className={linkStyle}>
            About
          </Link>
          <Link to="/deposit" className={linkStyle}>
            Deposit
          </Link>
          <Link to="/legal" className={linkStyle}>
            Legal
          </Link>
          <Link to="/withdraw" className={linkStyle}>
            Withdraw
          </Link>
        </div>
    </>
  )
}

export default Links