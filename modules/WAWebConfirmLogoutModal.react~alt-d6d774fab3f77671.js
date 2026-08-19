__d("WAWebConfirmLogoutModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebDialogEventLogger",
	"WAWebDrawerManager",
	"WAWebEligibilityLogging",
	"WAWebFbtAppName",
	"WAWebKeyboardTabUtils",
	"WAWebLockScreenResolver",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebScreenLockDrawer.react",
	"WAWebSocketModel",
	"WAWebUserPrefsScreenLock",
	"WAWebWamEnumDialogNameType",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = n("$InternalEnum")({
		LOGOUT: "logout",
		CANCEL: "cancel",
		APP_LOCK: "app_lock"
	}), d = function() {
		r("WAWebDialogEventLogger")({
			dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
			source: c.APP_LOCK
		}), o("WAWebModalManager").ModalManager.close(), o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ? o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow() : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebScreenLockDrawer.react"), { onCancel: function() {
			o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		} }), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	};
	function m(e) {
		var t = e.checkUnsent, n = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell"), a;
		t && o("WAWebMsgCollection").MsgCollection.hasUnsentMessages() ? a = s._(
			/*BTDS*/
			""
		) : n ? o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ? a = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, { children: s._(
				/*BTDS*/
				""
			) }))]
		) : a = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, { children: s._(
				/*BTDS*/
				""
			) }))]
		) : a = s._(
			/*BTDS*/
			""
		);
		var i = o("WAWebUserPrefsScreenLock").getScreenLockEnabled() || n ? null : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(r("WAWebClickableLink.react"), {
				onClick: d,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), l = n ? {
			text: s._(
				/*BTDS*/
				""
			),
			onClick: d
		} : null;
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "confirm-logout"
			},
			title: s._(
				/*BTDS*/
				""
			),
			onOK: function() {
				r("WAWebDialogEventLogger")({
					dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
					source: c.LOGOUT
				}), o("WAWebSocketModel").Socket.logout();
			},
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "solid-warning",
			onCancel: function() {
				r("WAWebDialogEventLogger")({
					dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
					source: c.CANCEL
				}), o("WAWebModalManager").ModalManager.close();
			},
			cancelText: s._(
				/*BTDS*/
				""
			),
			extraButtonProps: l,
			splitLayout: n,
			children: [
				n ? u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					children: a
				}) : a,
				u.jsx("br", {}),
				i
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
