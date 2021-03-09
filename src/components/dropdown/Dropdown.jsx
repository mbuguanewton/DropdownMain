import React, { useRef } from 'react'
import './dropdown.scss'
import { FaChevronDown } from 'react-icons/fa'
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick'

function Dropdown({ label, children }) {
    const dropRef = useRef(null)
    const [isActive, setIsActive] = useDetectOutsideClick(dropRef, false)

    const toggle = () => {
        setIsActive((prevState) => !prevState)
    }
    return (
        <div className='dropdown' ref={dropRef}>
            <div className='dropdown__label' onClick={toggle}>
                <span>{label}</span>
                <FaChevronDown className='icon' />
            </div>
            {isActive && <div className='dropdown__children'>{children}</div>}
        </div>
    )
}

export default Dropdown
