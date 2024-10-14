import React from 'react';
import TrollFace from '../TrollFace.png';

function Nav() {
	return (
		<nav className='navbar navbar-expand-lg '>
			<div className='container'>
				<div>
					<img src={TrollFace} alt='' />
					<h5 className='navbar-brand d-inline ps-3 text-white'>
						Meme Generator
					</h5>
				</div>

				<p className=' ms-auto ms-md-0 text-white pt-2'>React Project</p>
			</div>
		</nav>
	);
}

export default Nav;
