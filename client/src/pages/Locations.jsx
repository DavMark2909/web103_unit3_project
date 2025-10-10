import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import unitygrid from '../assets/unitygrid.jpg'
import '../css/Locations.css'
import { useNavigate } from 'react-router-dom';

const imgs = {
    "New York": "https://imgs.search.brave.com/pCgQ5CWmvHqNr9fsxpGqrHB8E3ImWptxh3UTcVgfEHg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/MzM0NTEwL3Bob3Rv/L25ldy15b3JrLWNp/dHktc2t5bGluZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UmtjVWlFbVpZYXJC/UG5RVzhxbTdHVUpF/ZWdFMjRNb2xjbDJp/ak1sWTNrUT0",
    "Chicago": "https://imgs.search.brave.com/mOHjrqqbotHchPuHIhgOtQmnrjiggHANZC-PXp29sx0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzI0LzU4Lzcx/LzM2MF9GXzMyNDU4/NzE2OF9xcDNjcDlG/em5lRjZZMlRBeXF4/Y2Fyd3p2dDdybVc5/VC5qcGc",
    "Seattle": "https://imgs.search.brave.com/FzYAtuM4EZ5adZxXJD4aQqbvo7II0tmqjWtISfyzRrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvZ21UMll2Q2Zy/VkJta2pMOVhqVk1K/cm96LzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc",
    "Los Angeles": "https://imgs.search.brave.com/PleARGPZkrs1bj8t8JCcEAiQFTizfQFVojq-8iRJ9a0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYy/NzAwMDY0L3Bob3Rv/L2xvcy1hbmdlbGVz/LXZpZXctdG8taG9s/bHl3b29kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1wRGtH/WVVELTYtOFViSzVx/S1ZzM080bnY1bC00/T3pMd2JycnMwdmVN/TUFBPQ",
    "Miami": "https://imgs.search.brave.com/b3Xn5OLUUP6zI7Ipv09b4Kthr2x-CkDG5HvkSEAneFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQz/ODY4NTE3L3Bob3Rv/L2Rvd250b3duLW1p/YW1pLXBlb3BsZS13/YWxraW5nLWFsb25n/LW1pYW1pLXJpdmVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1NWURKX3NQYlR6/ZmQzUVQ5UXRtNVo0/c0haeEdLRlJPc1NW/NWtBZVpCMlc0PQ"
}

const Locations = () => {

    const navigate = useNavigate();
    const [locations, setLocations] = useState([])


    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                console.log(locationsData)
                setLocations(locationsData)
                setListeners()
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const handleSearch = (e) => {
        const selectedLocation = e.target.value;
        if (selectedLocation) {
            navigate(`/locations/${selectedLocation}`);
        }
    }

    const setListeners = () => {
        const polygons = document.querySelectorAll('polygon')

        polygons.forEach(element => {
            element.addEventListener('mouseover', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`)
                buttonElement.style.opacity = 1;
            })

            element.addEventListener('mouseleave', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`)
                buttonElement.style.opacity = 0;
            })
        })
    }

    return (
        <>
            <div className='search-container'>
                <select onChange={handleSearch} defaultValue="">
                    <option value="" disabled>Search for a location...</option>
                    <option value="Chicago">Chicago</option>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Miami">Miami</option>
                </select>
            </div>

            <div className='available-locations'>
                {locations.map((location, index) => (
                    <div key={index} className="location-card">
                        <div className='location-image'>
                            <img src={imgs[location]} alt={location}/>
                        </div>
                        <h3>{location}</h3>
                        <button onClick={() => navigate(`/locations/${location}`)}>
                            View Events at {location}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Locations



            {/* <div id='venue1button' className='venue1-button-overlay'>
                <button>{locationNames.location1}</button>
            </div>

            <div id='venue2button' className='venue2-button-overlay'>
                <button>{locationNames.location2}</button>
            </div>

            <div id='venue3button' className='venue3-button-overlay'>
                <button>{locationNames.location3}</button>
            </div>

            <div id='venue4button' className='venue4-button-overlay'>
                <button>{locationNames.location4}</button>
            </div>

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000.32 500" xmlSpace="preserve">
                <image id="background" xlinkHref={unitygrid} transform="matrix(0.48 0 0 0.48 0 0)"></image>
                
                <a href='/echolounge'><polygon id="venue1" points="2.97,234.52 17.94,198.9 34.45,188.58 52.52,191.68 56.65,196.32 69.03,162.26 84,137.48 
                103.61,121.48 126.32,109.61 154.71,125.61 175.87,149.87 189.81,176.71 199.61,206.13 205.81,229.35 210.45,243.81 206.84,272.19 
                214.58,285.1 214.58,302.13 203.74,334.13 194.45,351.68 205.29,366.65 132.52,366.65 159.35,391.42 155.74,399.68 119.61,399.68 
                86.06,399.68 62.84,399.68 25.16,399.68 0,397.61 " /></a>
                
                <a href='/houseofblues'><polygon id="venue2" name='venue2' value={2} points="358.58,353.74 376.65,322.77 389.55,314.52 384.39,280.45 407.61,272.19 422.06,220.58 
                438.58,126.65 449.42,38.39 457.68,16.71 468,35.81 474.19,103.42 491.74,203.03 508.26,261.87 517.03,281.48 517.03,214.9 
                529.42,194.26 540.77,197.35 540.77,169.48 552.13,167.94 556.77,149.87 566.06,156.06 566.06,193.74 577.42,211.81 577.42,238.65 
                601.16,254.65 594.45,302.13 575.87,335.68 587.23,353.74 601.16,363.55 358.58,363.55 " /></a>
                
                <a href='/pavilion'><polygon id="venue3" name='venue3' value={3} points="998.06,83.81 952.65,31.16 914.45,16.71 877.29,43.55 833.94,102.39 811.74,161.23 
                796.77,241.23 802.97,303.16 833.94,353.23 871.61,385.23 954.71,385.23 1000.32,387.81 " /></a>

                <a href='/americanairlines'><polygon id="venue4" name='venue4' value={4} points="625,291 615,305 608,318 625,338 637,354 622.5,358 673,363.5 751,363.5 793,363.5 
                769,352 772,347 793,340 806,321 796.8,291 784,269 757,261 730,272 707,281 672,283 "/></a>
            </svg> */}
   
//         </div>
//     )
// }

// export default Locations