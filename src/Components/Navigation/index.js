// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// About Me, Portfolio, Contact, and Resume
function Navigation(props) {

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Myles Kovacs Creations</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/Resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">Contact</a>
            </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Navigation;