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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(1), t = d, n;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var a = s._(
				/*BTDS*/
				""
			);
			n = u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcLogout.react"),
				title: a,
				onPress: t,
				testid: "mi-logout menu-item",
				destructive: !0
			}), e[0] = n;
		} else n = e[0];
		return n;
	}
	function d(e) {
		e == null || e.stopPropagation(), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LOG_OUT), o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers(), o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebConfirmLogoutDialogV2.react"), { checkUnsent: !0 })) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebConfirmLogoutModal.react"), { checkUnsent: !0 }));
	}
	l.default = c;
}), 226);
