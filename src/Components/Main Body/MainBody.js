import React from 'react'
import './MainBody.css'
import MemesData from'./MemesData.js'

function MainBody() {
    const [url, setUrl] = React.useState();
    const [upper_txt, setUpper_txt] = React.useState();
    const [lower_txt, setLower_txt] = React.useState();
    const changeTopText = (event) => {
        setUpper_txt(event.target.value);
    }
    const changeBottomText = (event) => {
        setLower_txt(event.target.value);
    }
    function loadMeme(event) {
        event.preventDefault();
        const memesArray = MemesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        setUrl(url);
    }
    return (
        <div className="main-body">
            <form onSubmit={loadMeme}>
                <div className="flex flex-space-between">
                    <input type="text" className="input" placeholder="Top text" onChange={changeTopText} value={upper_txt} name="upper_txt"></input>
                    <input type="text" className="input" placeholder="Bottom text" onChange={changeBottomText} value={lower_txt} name="lower_txt"></input>
                </div>
                <input type="submit" className="submit" value="Get a new meme image 🖼"></input>
            </form>
            <div className="meme">
                {url &&
                <div>
                    <img src={url} alt="meme" className="meme-img"></img>
                    {upper_txt && <h3 className="upper-txt">{upper_txt}</h3>}
                    {lower_txt && <h3 className="lower-txt">{lower_txt}</h3>}
                </div>}
            </div>
        </div>
    )
}

export default MainBody;