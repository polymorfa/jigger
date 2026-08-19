__d("WAWebCallsNotificationsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAuraGating",
	"WAWebAuraRingtoneGlobalSelectorLoadable",
	"WAWebAuraRingtonePrefs",
	"WAWebCmd",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebGuidePopup.react",
	"WAWebModalManager",
	"WAWebMuteCollection",
	"WAWebNotificationConstants",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSettingsCheckList.react",
	"WAWebSettingsSyncBridge",
	"react",
	"react-compiler-runtime",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(28), n = e.onClose, a = e.ref, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l = i, c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[1] = c) : c = t[1];
		var d = c, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[2] = p) : p = t[2];
		var g = p, h = m(f), y = h[0], C = h[1], b;
		t[3] !== y ? (b = function() {
			var e, t = !y;
			if (t && !r("WAWebEnvironment").isWindows && ((e = window.Notification) == null ? void 0 : e.permission) !== o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
				var n, a = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled");
				if (o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner((n = window.Notification) == null ? void 0 : n.permission, a)) {
					var i;
					o("WAWebModalManager").ModalManager.open(u.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
						messaging: i.Messaging.NOTIFICATIONS,
						onConfirm: i.guideConfirm,
						onCancel: i.notificationGuideLearnMore,
						type: i.GuidePopupType.GUIDE_ALLOW,
						enableNewBannerLogic: a,
						featureSurface: i.FeatureSurface.NOTIFICATION
					}));
				}
				window.Notification.requestPermission(function(e) {
					var t;
					o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner((t = window.Notification) == null ? void 0 : t.permission, a) || o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.onNotificationPermissionChange(), e === o("WAWebNotificationConstants").PERMISSION_ALLOWED && (o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(!0), C(!0), o("WAWebSettingsSyncBridge").sendSettingChange("isCallsNotificationEnabled", !0));
				});
			} else o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(t), C(t), o("WAWebSettingsSyncBridge").sendSettingChange("isCallsNotificationEnabled", t);
		}, t[3] = y, t[4] = b) : b = t[4];
		var v = b, S = m(_), R = S[0], L = S[1];
		r("WAWebAuraGating").isRingtonesBenefitActive() && !o("WAWebAuraRingtonePrefs").hasExplicitRingtoneSelection() && o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone() ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
		var E;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(t), L(t);
		}, t[5] = E) : E = t[5];
		var k = o("useWAWebSettingSync").useSettingSync("shouldPlaySoundForCallNotification", E), I;
		t[6] !== R || t[7] !== k ? (I = function() {
			var e = !R;
			k(e), o("WAWebAuraRingtonePrefs").saveSelectedRingtoneId(e ? o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID : o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
		}, t[6] = R, t[7] = k, t[8] = I) : I = t[8];
		var T = I, D;
		t[9] !== k ? (D = function(t) {
			k(t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID);
		}, t[9] = k, t[10] = D) : D = t[10];
		var x = D, $;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = {
			surface: "unknown",
			viewName: "calls-notifications"
		}, t[11] = $) : $ = t[11];
		var P;
		t[12] !== n ? (P = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "drawer-title-calls-notifications",
			title: l,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[12] = n, t[13] = P) : P = t[13];
		var N;
		t[14] !== y || t[15] !== v ? (N = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-show-calls-notification",
			id: "show-calls-notification",
			checked: y,
			checkboxRightAligned: !0,
			onChange: v,
			ariaLabel: d,
			children: d
		}), t[14] = y, t[15] = v, t[16] = N) : N = t[16];
		var M;
		t[17] !== x || t[18] !== R || t[19] !== T ? (M = r("WAWebAuraGating").isRingtonesBenefitActive() ? u.jsx(o("WAWebAuraRingtoneGlobalSelectorLoadable").WAWebAuraRingtoneGlobalSelectorLoadable, { onChange: x }) : u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-play-call-ringtone",
			id: "play-call-ringtone",
			checked: R,
			checkboxRightAligned: !0,
			onChange: T,
			ariaLabel: g,
			children: g
		}), t[17] = x, t[18] = R, t[19] = T, t[20] = M) : M = t[20];
		var w;
		t[21] !== N || t[22] !== M ? (w = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [N, M]
		}) }), t[21] = N, t[22] = M, t[23] = w) : w = t[23];
		var A;
		return t[24] !== a || t[25] !== w || t[26] !== P ? (A = u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "calls-notifications-drawer",
			tsNavigationData: $,
			children: [P, w]
		}), t[24] = a, t[25] = w, t[26] = P, t[27] = A) : A = t[27], A;
	}
	function _() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone();
	}
	function f() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
	}
	l.default = p;
}), 226);
