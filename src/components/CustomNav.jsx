import React from "react";
import Nav from "./Nav";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];
  const menuItems = [
    { name: "how", path: "#how" },
    { name: "data", path: "#data" },
    { name: "privacy", path: "#privacy-policy" },
    { name: "delete", path: "#delete-account" },
  ];
  function handleChangeL(lang) {
    if (lang === "en") {
      return i18n.changeLanguage("kn");
    }
    return i18n.changeLanguage("en");
  }
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="" justify="center">
        <NavbarBrand>
          <img src="Logo.ksm.jpg" className="h-10 rounded-2xl " />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Nav />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="">
          <Button
            onClick={() => {
              handleChangeL(currentLanguage);
            }}
            content={currentLanguage === "en" ? "Kinyarwanda" : "English"}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-bold text-black"
              href={item.path}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              size="lg"
            >
              {t(`nav.${item.name}`)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
