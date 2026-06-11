import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 sticky top-0 w-screen bg-gray-600 drop-shadow-2xl z-10">
      <Link to="/dashboard">
        <img
          src="src/assets/gameboy-cart.png"
          className="w-1/24 drop-shadow-lg inline m-auto hover:brightness-120"
        />
      </Link>
      <Link to="/dashboard">
        <h2 className="inline ubuntu-bold text-xl m-5 hover:underline">
          Dashboard
        </h2>
      </Link>
      <div className="absolute right-8 m-auto inline">
        <Link to="/games">
          <h2 className="linkButton ubuntu-medium">Games</h2>
        </Link>
        <Link to="/consoles">
          <h2 className="linkButton ubuntu-medium">Console</h2>
        </Link>
        <Link to="/pokeapi">
          <h2 className="linkButton ubuntu-medium">Get Pokemon</h2>
        </Link>
        <Link to="/about">
          <h2 className="linkButton ubuntu-medium">About</h2>
        </Link>
      </div>
    </nav>
  );
}
