import React, { useState } from 'react';
import styles from '../styles/Auth.module.css'; // Importing as CSS module

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for: ${form.name}`);
  };

  return (
    <div className={styles.authPage}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>Name</label>
        <input
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
        />
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
        <button type="submit" className={styles.authButton}>Create Account</button>
        <p className={styles.authSwitch}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
