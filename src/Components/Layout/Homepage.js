import React from 'react'
import selfie from '../../Assets/Selfie.jpg'


function Homepage() {
    return (
        <div>
            <div class="card mx-auto" style={{width: "50%"}}>
                <img src={selfie} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Myles Kovacs</h5>
                        <p class="card-text">A full stack web developer</p>
                        <a href="/Projects" class="btn btn-primary">Projects</a>
                    </div>
        </div>
            </div>
    )
}

export default Homepage
