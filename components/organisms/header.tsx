import React from 'react'
import ShopLogo from '../atoms/shop-logo'
import HeaderNavLink from '../molecules/header-link'
import { SearchBar } from '../molecules/search-bar'

function Header() {
  return (
    <div className='flex p-4 shadow-2xl align-middle items-center justify-between'>
      <ShopLogo />
      <SearchBar/>
      <HeaderNavLink />
    </div>
  )
}

export default Header