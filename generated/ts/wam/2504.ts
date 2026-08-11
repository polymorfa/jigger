export const WamWebcMenu = 2504 as const

export interface WebcMenuEvent {
  /** field 2, wire `webc_menu_action` */
  webcMenuAction?: WEBCMENUTYPE
  /** field 3, wire `webc_menu_item_label` */
  webcMenuItemLabel?: WEBCMENUITEMLABEL
}