import React from 'react';
 import data from "./data"

export default function Testing(){

const [url, setUrl] = React.useState(" ")

    function getUrl(){
        let random = Math.floor(Math.random() * data.length)

        setUrl(data[random].url)
    }

return(
    <>
    <img src={url} alt='pic'/>
    <button onClick={getUrl}>Click Me</button>
    </>
)
    


}