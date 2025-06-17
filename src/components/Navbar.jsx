import ReactLogo from "../assets/react.svg";

export default function NavBar() {
  return (
    <header>
      <nav>
        <img src={ReactLogo} alt="React logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
