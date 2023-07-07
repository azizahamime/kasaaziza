import React, { useState } from 'react';
import downIcon from '../../assets/down.svg';

export default function Collapse({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="dropdown">
			<div className="dropdown-title">
				<p>{title}</p>
				<img src={downIcon} alt='down-icon' style={{ transform: isOpen ? 'rotate(180deg)' : null }} onClick={() => setIsOpen((curent) => !curent)} />
			</div>

			{isOpen && <div className='dropdown-content'>{children}</div>}
		</div>
	);
}