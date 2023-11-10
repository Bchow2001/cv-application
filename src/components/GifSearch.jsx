import { useState } from "react";

function GifSearch() {
	const [gif, setGif] = useState("baby cat");

	const gifChange = (e) => {
		setGif(e.target.value);
	};

	const search = () => {
		console.log("search");
		result();
	};

	let result = () => {
		let a = "";
		const url =
			"https://api.giphy.com/v1/gifs/search?api_key=NtLvdbLz5eODNrD4i53STGyL3dy6Miv7&limit=1&q=";
		fetch(url.concat(gif))
			.then((response) => response.json())
			.then((content) => {
				a = content.data[0].images.downsized.url;
				console.log(a);
				const image = document.querySelector("#img");
				image.src = a;
			});
	};

	return (
		<>
			<form>
				<input id="gif-input" value={gif} onChange={gifChange}></input>
				<button type="button" onClick={search}>
					{" "}
					Click to Search
				</button>
			</form>
			<img src="" id="img"></img>
		</>
	);
}

export default GifSearch;
