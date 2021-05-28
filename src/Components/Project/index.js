import React from 'react'

function Project() {

    const projectInfo = [
        {
            href: 'https://github.com/AdamR-Work/That-One-Answer',
            src: 'https://i.imgur.com/n3cPZwl.jpg',
            hrefTwo: 'https://salty-spire-96574.herokuapp.com/',
            name: 'That One Answer',
            description: 'A streamlined resource to find quick answers to common problems'
        },
        {
            href: 'https://github.com/rolanduwxcc/project-bmw',
            src: 'https://i.imgur.com/gwfTMHu.jpg',
            hrefTwo: 'https://rolanduwxcc.github.io/project-bmw/',
            name: 'Movie News Search',
            description: 'A movie database for reviewers and movie junkies'
        },
        {
            href: 'https://github.com/MylesKovacs/WeatherDashboard',
            src: 'https://i.imgur.com/XrpbaMo.jpg',
            hrefTwo: 'https://myleskovacs.github.io/WeatherDashboard/',
            name: 'Weather Tracker',
            description: 'A forecast app to allow better planning around the weather'
        },
        {
            href: 'https://github.com/MylesKovacs/food-festival',
            src: 'https://i.imgur.com/Yp6Uztb.jpg',
            hrefTwo: 'https://myleskovacs.github.io/food-festival/',
            name: 'Food Festival',
            description: 'A website for a local food festival providing guest information'
        },
        {
            href: 'https://github.com/rolanduwxcc/family-graph',
            src: 'https://imgur.com/a/bsqnPYe',
            hrefTwo: 'https://blooming-reaches-99223.herokuapp.com/',
            name: 'FamilyGraph',
            description: 'A family tree building website'
        },
        {
            href: 'https://github.com/MylesKovacs/Password-generator',
            src: 'https://i.imgur.com/zV4oA22.jpg',
            hrefTwo: 'https://myleskovacs.github.io/Password-generator/',
            name: 'Password Generator',
            description: 'A tool for quick password generating'
        }
    ];

    return (
        <div class="pt-5">
            <div class="row row-cols-1 row-cols-md-3 g-4" >
                {projectInfo.map((info) => (
                    <div >
                    <div class="col">
                      <div class="card h-100">
                        <img src={info.src} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{info.name}</h5>
                          <p class="card-text">{info.description}</p>
                          <div class="btn-group d-flex justify-content-around">                          
                          <a href={info.href} target="_blank" rel="noopener noreferrer" class="btn btn-info">GitHub</a>
                          <a href={info.hrefTwo} target="_blank" rel="noopener noreferrer" class="btn btn-success">Deployed</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                ))}

                </div>
        </div>
    )
}

export default Project;
