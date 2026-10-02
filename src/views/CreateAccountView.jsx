import { Component } from 'react';

export class CreateAccountView extends Component {
  render() {
    return (
      <div className="container py-3">
        <h2>Create Account</h2>
        <form className="card bg-dark text-white border-secondary p-3">
          <div className="mb-3">
            <label className="form-label" htmlFor="create-username">Username</label>
            <input
              id="create-username"
              className="form-control"
              name="username"
              autoComplete="username"
              pattern="[A-Za-z0-9_]{3,20}"
              title="Use 3 to 20 letters, numbers, or underscores."
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="create-email">Email</label>
            <input
              id="create-email"
              className="form-control"
              name="email"
              type="email"
              autoComplete="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,}"
              title="Enter a valid email address, such as name@example.com."
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="create-password">Password</label>
            <input
              id="create-password"
              className="form-control"
              name="password"
              type="password"
              autoComplete="new-password"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}"
              title="Use at least 8 characters, including an uppercase letter, a lowercase letter, and a number."
              required
            />
          </div>
          <button type="submit" className="btn btn-light">Create Account</button>
        </form>
      </div>
    );
  }
}

export default CreateAccountView;
