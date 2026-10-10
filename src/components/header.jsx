export default function Header() {
  return (
    <div className="wrap">
      <nav>
        <div className="flex flex-row gap-2">
          <img
            src="/icon.png"
            alt="logo"
            className="[width:30px] rounded-2xl"
          />
          <a className="logo" href="#top">
            Ksmarting Auto
          </a>
        </div>
        <ul>
          <li>
            <a href="#how" className="">
              How it works
            </a>
          </li>
          <li>
            <a href="#data">Your information</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#privacy-policy">Privacy policy</a>
          </li>
          <li>
            <a href="#delete-account">Delete account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
