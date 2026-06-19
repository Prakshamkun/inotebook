import React from 'react';

const About = () => {
  return (
    <div className="container my-4">

      <h1 className="mb-4">About iNotebook</h1>

      <div className="card">
        <div className="card-body">

          <h3>What is iNotebook?</h3>
          <p>
            iNotebook is a cloud-based note-taking application that allows
            users to securely create, edit, delete, and manage their notes
            from anywhere.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Create and save notes</li>
            <li>Edit existing notes</li>
            <li>Delete unwanted notes</li>
            <li>Secure user authentication</li>
            <li>Access notes from anywhere</li>
            <li>Responsive and user-friendly interface</li>
          </ul>

          <h3>Technologies Used</h3>
          <ul>
            <li>React.js</li>
            <li>React Router</li>
            <li>Bootstrap 5</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JWT Authentication</li>
          </ul>

          <h3>Developer Information</h3>
          <p>
            This project was developed as part of learning the MERN Stack.
            It demonstrates authentication, CRUD operations, React Context API,
            routing, and MongoDB integration.
          </p>

        </div>
      </div>

    </div>
  );
};

export default About;