// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s 
// GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa' 

function Footer() {
    return (
        <div>
            <footer class="footer mt-2  fixed-bottom bg-dark ">
                <div class="container">
                    <ul class="nav  justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/MylesKovacs">
                                <FaGithub/> GitHub
            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/myles-kovacs-150022152/">
                            <FaLinkedin /> LinkedIn
            </a>
                        </li>

                    </ul>
                </div>
                <span style={{ color: 'white' }}>&copy; MJK474</span>
            </footer>
        </div>
    )
}

export default Footer
