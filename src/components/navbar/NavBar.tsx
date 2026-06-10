import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 sticky top-0 w-screen bg-[url('src/assets/metal-with-rust.png')] z-10">
      <Link to="/dashboard">
        <img
          src="src/assets/gameboy-cart.png"
          className="w-1/24 drop-shadow-lg inline"
        />
      </Link>
      <Link to="/dashboard">
        <h1 className="inline underline text-2xl m-5">Dashboard</h1>
      </Link>
      <Link to="/carts">
        <h1 className="right-0 inline underline text-2xl">Carts</h1>
      </Link>
      <Link to="/consoles">
        <h1 className="mr-0 inline underline text-2xl">Games</h1>
      </Link>
    </nav>
  );
}
