import React from 'react'
import Search from '../Search'
import LocationSelect from '../LocationSelect'
import WishList from '../../pages/Wishlist'
import Cart from '../../pages/Cart'
import Login from '../../pages/Login'

const Header = () => {
  return (
    <div>
        <Search/>
        <LocationSelect/>
        <WishList/>
        <Cart/>
        <Login/>
    </div>
  )
}

export default Header