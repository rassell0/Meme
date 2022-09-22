import React from 'react';
export default function Form(){



const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImg:"https://i.imgflip.com/26hg.jpg"
})

const [memeImages,setMemeImages] = React.useState({})

React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(info => info.json())
    .then(data => setMemeImages(data))
},[])



function memeGenerator(){
    const memes = memeImages.data.memes;
    const random = Math.floor(Math.random() * memes.length)
const url = memes[random].url
setMeme(old=> ({
    ...old,
    randomImg: url
    
}))

    }
    
    
    
 function handleChange(event){
 const {name,value} = event.target
setMeme(setText=>({
    ...setText,
    [name]: value
}))

 }





    return(
        <div className='container'>
            <div className='form'>
            <input type="text" placeholder='Top Text'
            name='topText'
            onChange={handleChange}
            ></input>

            <input type="text" placeholder='Bottom Text'
            name='bottomText'
            onChange={handleChange}
            ></input>



            <button onClick={memeGenerator}>Get new Meme image</button>
           
            </div>
            <div className='meme'>
             <img className='image' src={meme.randomImg} alt="yo"/>
            <h2 className='meme-text top'>{meme.topText}</h2>
            <h2 className='meme-text bottom'>{meme.bottomText}</h2>
             
             </div>
        </div>
    )
}