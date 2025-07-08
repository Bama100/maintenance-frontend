
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const register = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, form);
    alert('Registered Successfully');
  };

  return (
    <div>
      <Navbar />
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} /><br />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} /><br />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} /><br />
      <button onClick={register}>Register</button>
    </div>
  );
}
