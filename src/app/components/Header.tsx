import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <Link href='/'>
                    Traversy Media
                </Link>
            </div>
            <div className='links'>
                <Link href='/about'>
                    About
                </Link>
                <Link href='/about/team'>
                    Team
                </Link>
                <Link href='/code/repos'>
                    Code
                </Link>
            </div>
        </header>
    )
}

export default Header
