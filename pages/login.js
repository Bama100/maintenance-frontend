
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const login = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, form);
    alert('Token: ' + res.data.token);
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /><br />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}
