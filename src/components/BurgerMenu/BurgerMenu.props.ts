import { MenuItem } from "../Navbar/Navbar.props";

export interface BurgerMenuProps {
  placement: any;
  onClose: any;
  open: boolean;
  menuItems: MenuItem[];
  menuItemsService?: any[];
  isHomePage?: boolean | undefined;
}
