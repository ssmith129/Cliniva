// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  iconType: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  badge: string;
  badgeClass: string;
  role: string[];
  /** When true, the menu is gated behind a password before its submenu can be opened. */
  locked?: boolean;
  submenu: RouteInfo[];
}
