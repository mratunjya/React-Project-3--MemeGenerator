import React from 'react'
import './MainBody.css'
import MemesData from'./MemesData.js'

function MainBody() {
    const [url, setUrl] = React.useState();
    const [upper_txt, setUpper_txt] = React.useState();
    const [lower_txt, setLower_txt] = React.useState();
    function loadMeme() {
        const memesArray = MemesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        setUrl(url);
        setLower_txt(document.getElementsByClassName('input')[1].value);
        setUpper_txt(document.getElementsByClassName('input')[0].value);
    }
    return (
        <div className="main-body">
            <main>
                <div className="flex flex-space-between">
                    <input type="text" className="input" required placeholder="Top text"></input>
                    <input type="text" className="input" required placeholder="Bottom text"></input>
                </div>
                <input type="submit" className="submit" value="Get a new meme image 🖼" onClick={loadMeme}></input>
            </main>
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