__d("WAWebLogoutChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebConfirmLogoutDialogV2.react",
	"WAWebConfirmLogoutModal.react",
	"WAWebForceFlushWamBuffers",
	"WAWebModalManager",
	"WAWebWamEnumWebcMenuItemLabel",
	"WDSDialogBridge",
	"WDSIconIcLogout.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = function(t) {
			t == null || t.stopPropagation(), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LOG_OUT), o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers(), o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebConfirmLogoutDialogV2.react"), { checkUnsent: !0 })) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebConfirmLogoutModal.react"), { checkUnsent: !0 }));
		}, t = s._(
			/*BTDS*/
			""
		), n = "mi-logout menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLogout.react"),
			title: t,
			onPress: e,
			testid: n,
			destructive: !0
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
