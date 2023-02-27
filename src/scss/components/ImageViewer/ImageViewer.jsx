import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'

const ImageViewer = () => {
    const [images, setImages] = useState([])
    const [activeImage, setActiveImage] = useState(0)
    const [controllerStatus, setControllerStatus] = useState(0)
    const [width, setWidth] = useState();
    let itemVisible = width / 60;
    const [field, setField] = useState();
    const [img_key, setImageKey] = useState('love');
    const prev = () => {
        if (controllerStatus > 0) {
            setControllerStatus(controllerStatus - 1)

        }
    }

    const next = () => {
        if (controllerStatus <= images.length - itemVisible) {
            setControllerStatus(controllerStatus + 1)
        }

    }

    function searchImg() {
        setImageKey(field)

    }


    useEffect(() => {
        var API_KEY = '33955721-7902e0dc630b0bcad5bb491a7';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(img_key);
        fetch(URL)
            .then((res) => res.json())
            .then(res => setImages(res.hits))


    }, [img_key])




    return (
        <div className='image-viewer'>
            <div className="search-img">
                <input type="text" className='search_image' onKeyUp={(e) => setField(e.target.value)} placeholder='Search like sad,romantic....' />
                <button onClick={() => searchImg()}>Search</button>
            </div>
            <div className="viewer-display" onLoad={(e) => setWidth(e.target.width)}>

                {images.length > 1 ? images.map((img, index) =>
                    <div className="item" style={{ left: `${index * 100}%`, transition: "all 300ms", transform: `translateX(-${activeImage * 100}%)` }}>
                        <div className="wrapper">
                            <img src={img.webformatURL} alt="" />
                            <div className="download-wrapper">
                                <a href="" className="download" download={img.webformatURL}>Download</a>

                            </div>
                        </div>
                    </div>
                ) : <h1 className='not-found'>পাইলাম না কিছুই</h1>

                }




            </div>
            <div className="viewer-controller">
                <div className="slide-buttons">
                    <button className={`prev ${controllerStatus === 0 ? 'disable' : ''}`} onClick={() => prev()}>Pre</button>
                    <button className={`next ${controllerStatus < images.length - itemVisible ? '' : 'disable'}`} onClick={() => next()}>Next</button>
                </div>
                <div className="button-wrappers">
                    <div className="control-buttons">
                        {images.map((img, index) =>
                            <div className={`control-item ${activeImage == index ? 'active' : ''}`} onClick={() => setActiveImage(index)} style={{ left: `${index * 60}px`, transform: `translateX(-${controllerStatus * 60}px)` }}>

                                <img src={img.webformatURL} alt="" />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ImageViewer