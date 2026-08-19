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
	"react"
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
		), l = i != null ? s._(
			/*BTDS*/
			"",
			[
				s._param("body", a),
				s._param("break", u.jsx("br", {})),
				s._param("lockScreenLink", i)
			]
		) : a, m = function() {
			r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
				source: c.LOGOUT
			}), o("WAWebSocketModel").Socket.logout();
		}, p = function() {
			r("WAWebDialogEventLogger")({
				dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
				source: c.CANCEL
			}), o("WDSDialogBridge").closeWDSDialog();
		};
		return u.jsx(r("WDSConfirmDialog.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			description: l,
			confirmLabel: s._(
				/*BTDS*/
				""
			),
			destructive: !0,
			onConfirm: m,
			onDismiss: p,
			secondaryLabel: n ? s._(
				/*BTDS*/
				""
			) : void 0,
			onSecondary: n ? d : void 0,
			open: !0
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
