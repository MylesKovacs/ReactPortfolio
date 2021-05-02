import React from 'react'
import {FaHtml5, FaCss3, FaNodeJs, FaReact, FaSave} from 'react-icons/fa'
import {DiJavascript1, DiMongodb} from 'react-icons/di'
import resume from '../../Assets/Myles-Kovacs.pdf'


function Resume() {
    return (
        <div >
            <div class="card" style={{ width: "34rem", margin: 'auto', height: '50' }}>
                <div class="card-body" style={{ height: '50vh' }}>
                    <h5 class="card-title">Proficiencies</h5>
                    <p class="card-text">
                        <div class="progress mt-3">
                        <FaHtml5/><div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
                        </div>
                        <div class="progress mt-3">
                        <FaCss3/><div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">CSS</div>
                        </div>
                        <div class="progress mt-3">
                        <DiJavascript1/><div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                        </div>
                        <div class="progress mt-3">
                        <DiMongodb/><div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Mongo</div>
                        </div>
                        <div class="progress mt-3">
                        <FaReact/><div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">React</div>
                        </div>
                        <div class="progress mt-3">
                        <FaNodeJs/><div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Node</div>
                        </div>
                        </p>
                        <span><a href={resume} target="_blank" rel="noopener noreferrer"><FaSave/>Resume</a></span>
                </div>
            </div>

        </div>
    )
}

export default Resume


{/* <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}