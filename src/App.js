import logo from './logo.svg'
import './App.css'
import { Component } from 'react'
import GifSearch from './componets/GifSearch/GifSearch'
import GifList from './componets/GifList/GifList'
class App extends Component {
	state = {
		upd: '',
		giftList: [],
		page: 1,
		add: 1,
	}

	getImagesInput = (evt) => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=O5KMbEo8sOzB4NTZ5vD04vSkLbiA75To&q=${
				document.getElementById('namefind').value
			}&limit=20`
		)
			.then((data) => data.json())
			.then((data) => this.setState({ giftList: data }))
			.catch((error) => console.error(error))
	}

	componentDidMount() {
		fetch(
			'https://api.giphy.com/v1/gifs/search?api_key=O5KMbEo8sOzB4NTZ5vD04vSkLbiA75To&q=pc&limit=20'
		)
			.then((data) => data.json())
			.then((data) => this.setState({ giftList: data }))
			.catch((error) => console.error(error))
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				// page = 1
				this.getImagesInput()
			}
		})
	}
	render() {
		console.log(this.state.giftList.data)
		return (
			<>
				<GifSearch getImagesInput={this.getImagesInput}></GifSearch>
				<GifList infddn={this.state.giftList.data}></GifList>
			</>
		)
	}
}

export default App
