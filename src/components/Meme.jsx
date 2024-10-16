import React from 'react';
import MemeImg from '../assets/meme.png';

function Meme() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: MemeImg,
	});

	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	function getImage(event) {
		event.preventDefault();
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const randomImgUrl = allMemes[randomNumber].url;

		setMeme((prevState) => ({
			...prevState,
			randomImage: randomImgUrl,
		}));
	}

	function handleForm(event) {
		const { name, value } = event.target;
		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	return (
		<section className='meme-section'>
			<div className='container d-flex justify-content-center mb-5'>
				<form onSubmit={getImage}>
					<div className='row mb-3'>
						<div className='col-6'>
							<label htmlFor='tText'>Top text</label>
							<br />
							<input
								id='tText'
								type='text'
								name='topText'
								value={meme.topText}
								onChange={handleForm}
							/>
						</div>

						<div className='col-6'>
							<label htmlFor='bText'>Bottom text</label>
							<br />
							<input
								id='bText'
								type='text'
								name='bottomText'
								value={meme.bottomText}
								onChange={handleForm}
							/>
						</div>
					</div>
					<button type='submit'>Get new meme image &#x1F5BC;</button>
				</form>
			</div>
			<div className='position-relative container d-flex justify-content-center'>
				<img className='meme-image' src={meme.randomImage} alt='' />
				<p className='top-text position-absolute'>{meme.topText}</p>{' '}
				<p className='bottom-text position-absolute'>{meme.bottomText}</p>{' '}
			</div>
		</section>
	);
}

export default Meme;
