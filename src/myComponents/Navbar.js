import React, { useState }  from 'react'

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <nav>
            <div className='logo'>Mr-Bhuiyan</div>

            <ul className='nav-links' style={{ transform: open ? "translateX(0px)" : "" }}>
                <li>
                    <a>home</a>
                </li>
                <li>
                    <a>about us</a>
                </li>
                <li>
                    <a>our services</a>
                </li>
                <li>
                    <a>our clients</a>
                </li>
                <li>
                    <a>contact us</a>
                </li>
            </ul>
            <i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
        </nav>
    </div>
  )
}

export default Navbar