import sty from './GiftList.module.css'
function GifList({ infddn }) {
	return (
		<ul id="list" className={sty.list}>
			{infddn
				? infddn.map((inf) => {
						return (
							<li id={inf.id}>
								<img
									className={sty.itemImg}
									src={inf.images.original.url}
								></img>
							</li>
						)
				  })
				: null}
		</ul>
	)
}

export default GifList
