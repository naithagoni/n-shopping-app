import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartPage from "@pages/Cart/CartPage";
import SearchBar from "@components/SearchBar/SearchBar";

const Navbar = () => {
  const themes = [
    {
      name: "valentine",
      isDisabled: false,
      ariaLabel: "Valentine",
    },
    {
      name: "retro",
      isDisabled: false,
      ariaLabel: "Retro",
    },
    {
      name: "forest",
      isDisabled: false,
      ariaLabel: "Forest",
    },
    {
      name: "vit",
      isDisabled: true,
      ariaLabel: "Vit",
    },
  ];
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "valentine"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const currentTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", currentTheme as string);
  }, [theme]);

  // const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.checked) {
  //     setTheme("forest");
  //   } else {
  //     setTheme("valentine");
  //   }
  // };
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <nav className="navbar bg-base-100 z-100 shadow-xl fixed top-0 bg-transparent backdrop-blur">
        <NavLink
          to="/"
          className="btn btn-ghost text-xl logo-class hover:bg-transparent"
        >
          <img src="src/assets/n-dark.svg" alt="logo" />
          {import.meta.env.VITE_APP_TITLE}
        </NavLink>
        <SearchBar />
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive
              ? "btn btn-sm rounded-md"
              : "btn btn-sm btn-ghost rounded-md";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => {
            return isActive
              ? "btn btn-sm rounded-md"
              : "btn btn-sm btn-ghost rounded-md";
          }}
        >
          Products
        </NavLink>
        <div className="divider divider-horizontal mt-4 mb-4 ml-0 mr-0"></div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <CartPage />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <label className="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        onChange={handleToggle}
        checked={theme === "valentine" ? false : true}
      />
      <svg
        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label> */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 rounded-md">
            Themes
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-md"
          >
            {/* Dynamically generate radio inputs for themes */}
            {themes.map((themeOption) => (
              <li key={themeOption.name}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost rounded-md justify-start"
                  aria-label={themeOption.ariaLabel}
                  value={themeOption.name}
                  checked={theme === themeOption.name}
                  disabled={themeOption.isDisabled}
                  onChange={handleThemeChange}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
