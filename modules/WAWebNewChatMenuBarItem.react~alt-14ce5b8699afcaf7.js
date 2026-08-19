__d("WAWebNewChatMenuBarItem.react", [
	"fbt",
	"WAWebABProps",
	"WAWebActions",
	"WAWebMobilePlatforms",
	"WAWebNewChatButtonGatingUtils",
	"WAWebNewChatOutlineIcon.react",
	"WAWebTabOrder",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconWdsIcNewChatFilled.react",
	"WDSMenuBarItem.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chatListVisible, n = e.onNewChat, a = o("WAWebNewChatButtonGatingUtils").getNewChatButtonVariant(), i = o("WAWebABProps").getABPropConfigValue("wa_web_match_primary_icons"), l = i && o("WAWebMobilePlatforms").isIOSPrimary(), c = i && o("WAWebMobilePlatforms").isAndroidPrimary(), d = s._(
			/*BTDS*/
			""
		);
		switch (a) {
			case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.FILLED_ICON_BUTTON: {
				var m = u.jsx(r("WDSButton.react"), {
					testid: "menu-bar-chat",
					Icon: r("WDSIconWdsIcNewChatFilled.react"),
					"aria-label": d,
					onPress: n,
					variant: "filled",
					type: "default",
					size: "medium",
					disabled: !t
				}, "btn-new-chat");
				return t ? u.jsx(r("WDSTooltip.react"), {
					label: d,
					shortcut: o("WAWebActions").Action.OPEN_NEW_CHAT,
					children: m
				}) : m;
			}
			case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.FILLED_TEXT_BUTTON: return u.jsx(r("WDSMenuBarItem.react"), {
				testid: "menu-bar-chat",
				icon: r("WDSIconWdsIcNewChatFilled.react"),
				onClick: n,
				title: s._(
					/*BTDS*/
					""
				),
				label: s._(
					/*BTDS*/
					""
				),
				buttonVariant: "filled",
				tabOrder: t ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0,
				disabled: !t,
				keyboardShortcutAction: o("WAWebActions").Action.OPEN_NEW_CHAT
			}, "btn-new-chat");
			case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.CONTROL: {
				var p = (function(e) {
					return l ? r("WDSIconIcAdd.react") : c ? r("WDSIconWdsIcNewChatFilled.react") : o("WAWebNewChatOutlineIcon.react").NewChatOutlineIcon;
				})(!0), _ = l || c ? "filled" : "borderless";
				return u.jsx(r("WDSMenuBarItem.react"), {
					testid: "menu-bar-chat",
					icon: p,
					onClick: n,
					title: d,
					buttonVariant: _,
					tabOrder: t ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0,
					disabled: !t,
					keyboardShortcutAction: o("WAWebActions").Action.OPEN_NEW_CHAT
				}, "btn-new-chat");
			}
		}
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
