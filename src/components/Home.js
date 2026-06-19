import React from 'react';
import AddNote from './AddNote';
import Notes from './Notes';

const Home = () => {
  return (
    <div className="container my-4">

      <h1 className="text-center mb-4">
        Welcome to iNotebook
      </h1>

      <div className="row mb-4">

        <div className="col-md-3 mb-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <i className="fas fa-book fa-3x text-primary mb-2"></i>
              <h5>Study Notes</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <i className="fas fa-tasks fa-3x text-success mb-2"></i>
              <h5>Tasks</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <i className="fas fa-lightbulb fa-3x text-warning mb-2"></i>
              <h5>Ideas</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow">
            <div className="card-body text-center">
              <i className="fas fa-code fa-3x text-info mb-2"></i>
              <h5>Programming</h5>
            </div>
          </div>
        </div>

      </div>

      <AddNote />
<Notes />
    </div>
  );
};

export default Home;