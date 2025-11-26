
export type DropdownItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};



export const serviceDropdownItems: DropdownItem[] = [
  { label: "Konsaltinq", href: "/services#konsaltinq" },
  { label: "Suvarma", href: "/services#suvarma" },
  { label: "Laboratoriya", href: "/services#laboratoriya" },
  { label: "Torpaqların alqı-satqısı", href: "/services#torpaq-alis-satis" },
];

export const navigationItems: NavItem[] = [
  { label: "about", href: "/about" },
  { label: "products", href: "/products", hasDropdown: true },
  { label: "services", href: "/services", hasDropdown: true, dropdownItems: serviceDropdownItems },
  { label: "career", href: "/career" },
];