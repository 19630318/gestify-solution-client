export enum MenuItemType {
    Link = 'link',
    DropDown = 'dropDown',
    Icon = 'icon',
    Separator = 'separator',
    ExtLink = 'extLink'
  }

export interface IMenuItem {
    type: MenuItemType;
    name?: string;
    state?: string;
    icon?: string;
    svgIcon?: string;
    tooltip?: string;
    disabled?: boolean;
    sub?: IChildItem[];
    badges?: IBadge[];
    permissions?: string[];
    seccionId?: string;
    fontSize?: string;
    queryParams?: any;
    show?: boolean;
}

export interface IChildItem {
    type?: string;
    name?: string;
    state?: string;
    icon?: string;
    svgIcon?: string;
    sub?: IChildItem[];
    permissions?: string[];
    disabled?: boolean;
    fontSize?: string;
    queryParams?: any;
    show?: boolean;
}

export interface IBadge {
    color: string;
    value: string;
}