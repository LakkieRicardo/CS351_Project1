import { Component } from 'react';

export class CreateAccountView extends Component {
  render() {
    return (
      <div className="container py-3">
        <h2>Create Account</h2>
        <form className="card bg-dark text-white border-secondary p-3">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input className="form-control" defaultValue="demo_user" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" defaultValue="demo@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" defaultValue="password123" />
          </div>
          <button type="submit" className="btn btn-light">Create Account</button>
        </form>
      </div>
    );
  }
}

export default CreateAccountView;
