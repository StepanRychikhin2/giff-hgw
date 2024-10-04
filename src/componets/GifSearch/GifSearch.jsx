import sty from './GifSAeacyh.module.css'
function GifSeach({ getImagesInput }) {
	return (
		<>
			<div className={sty.seachBar}>
				<label>
					<input
						placeholder="Search images and photos"
						id="namefind"
						className={sty.seachInp3}
						type="text"
						name="seachbar"
						autoFocus
						autoComplete="off"
						required
					></input>
				</label>
			</div>
		</>
	)
}

export default GifSeach
