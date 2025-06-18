import React, { useState } from 'react';
import styles from '../styles/Auth.module.css'; // CSS Modules

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${form.email}`);
  };

  return (
    <div className={styles.authPage}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className={styles.authButton}>Log In</button>
        <p className={styles.authSwitch}>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
