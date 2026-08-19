__d("WAWebConfirmLogoutDialogV2.react", [
	"fbt",
	"$InternalEnum",
	"WAWebClickableLink.react",
	"WAWebDialogEventLogger",
	"WAWebDrawerManager",
	"WAWebEligibilityLogging",
	"WAWebFbtAppName",
	"WAWebKeyboardTabUtils",
	"WAWebLockScreenResolver",
	"WAWebMsgCollection",
	"WAWebScreenLockDrawer.react",
	"WAWebSocketModel",
	"WAWebUserPrefsScreenLock",
	"WAWebWamEnumDialogNameType",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = n("$InternalEnum")({
		LOGOUT: "logout",
		CANCEL: "cancel",
		APP_LOCK: "app_lock"
	});
	function d() {
		r("WAWebDialogEventLogger")({
			dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
			source: c.APP_LOCK
		}), o("WDSDialogBridge").closeWDSDialog(), o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ? o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow() : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebScreenLockDrawer.react"), { onCancel: o("WAWebDrawerManager").closeDrawerLeft }), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.checkUnsent, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell"), t[0] = a) : a = t[0];
		var i = a, l;
		if (n && o("WAWebMsgCollection").MsgCollection.hasUnsentMessages()) {
			var c;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
				/*BTDS*/
				""
			), t[1] = c) : c = t[1], l = c;
		} else if (i) if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
			var m;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, { children: s._(
					/*BTDS*/
					""
				) }))]
			), t[2] = m) : m = t[2], l = m;
		} else {
			var f;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows, { children: s._(
					/*BTDS*/
					""
				) }))]
			), t[3] = f) : f = t[3], l = f;
		}
		else {
			var g;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
				/*BTDS*/
				""
			), t[4] = g) : g = t[4], l = g;
		}
		var h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebUserPrefsScreenLock").getScreenLockEnabled() || i ? null : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(r("WAWebClickableLink.react"), {
				onClick: d,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), t[5] = h) : h = t[5];
		var y = h, C;
		t[6] !== l ? (C = y != null ? s._(
			/*BTDS*/
			"",
			[
				s._param("body", l),
				s._param("break", u.jsx("br", {})),
				s._param("lockScreenLink", y)
			]
		) : l, t[6] = l, t[7] = C) : C = t[7];
		var b = C, v = _, S = p, R;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[8] = R) : R = t[8];
		var L;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[9] = L) : L = t[9];
		var E;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (E = i ? s._(
			/*BTDS*/
			""
		) : void 0, t[10] = E) : E = t[10];
		var k;
		return t[11] !== b ? (k = u.jsx(r("WDSConfirmDialog.react"), {
			title: R,
			description: b,
			confirmLabel: L,
			destructive: !0,
			onConfirm: v,
			onDismiss: S,
			secondaryLabel: E,
			onSecondary: i ? d : void 0,
			open: !0
		}), t[11] = b, t[12] = k) : k = t[12], k;
	}
	function p() {
		r("WAWebDialogEventLogger")({
			dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
			source: c.CANCEL
		}), o("WDSDialogBridge").closeWDSDialog();
	}
	function _() {
		r("WAWebDialogEventLogger")({
			dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
			source: c.LOGOUT
		}), o("WAWebSocketModel").Socket.logout();
	}
	l.default = m;
}), 226);
