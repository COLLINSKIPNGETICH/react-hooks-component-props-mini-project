import React from 'react';

function About({ blogLogo, aboutText }) {
  return (
    <aside>
      <img src={blogLogo} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
