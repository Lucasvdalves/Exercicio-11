import React from 'react';

function Button() {

    const redirectToGitHub = () => {
        window.location.href = 'https://github.com/Lucasvdalves?tab=repositories';
    };

    return (
        <div>
            <li><a onClick={redirectToGitHub}>Portifólio</a></li>

        </div>
    )
} export default Button