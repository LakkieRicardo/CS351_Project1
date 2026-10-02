import { Component } from 'react';

export class AccountView extends Component {
  render() {
    const { onGoToCreateAccount } = this.props;

    return (
      <div className="container py-3">
        <h2>Account</h2>
        <div className="card bg-dark text-white border-secondary">
          <div className="card-body">
            <p><strong>Username:</strong> demo_user</p>
            <p><strong>Email:</strong> demo@example.com</p>
            <p><strong>Member since:</strong> January 2024</p>
            <p><strong>Shipping address:</strong> 123 Demo St, Springfield, USA</p>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={onGoToCreateAccount}
          >
            Create Account
          </button>
        </div>
      </div>
    );
  }
}

export default AccountView;
