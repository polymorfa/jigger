const WamWebcMenu = 2504 // channel: regular

type WebcMenuEvent struct {
	WebcMenuAction WEBCMENUTYPE `wam:"webc_menu_action"` // field 2
	WebcMenuItemLabel WEBCMENUITEMLABEL `wam:"webc_menu_item_label"` // field 3
}