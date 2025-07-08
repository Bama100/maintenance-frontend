
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link href="/">Home</Link> | 
      <Link href="/products"> Products</Link> | 
      <Link href="/services"> Services</Link> | 
      <Link href="/login"> Login</Link> | 
      <Link href="/register"> Register</Link>
    </nav>
  );
}
