__d("WAWebStatusUpdatesNotificationsDrawer.react", [
	"fbt",
	"WAWebGranularNotificationsDrawer.react",
	"WAWebMuteCollection",
	"WAWebNoop",
	"WAWebSettingsSyncBridge",
	"cr:7293",
	"react",
	"react-compiler-runtime",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = (e = n("cr:7293")) != null ? e : {}, m = d.getNotificationToneStatusSetting, p = d.setNotificationToneStatusSetting;
	function _(e) {
		var t = o("react-compiler-runtime").c(12), n = e.onClose, a = e.ref, i = s._(
			/*BTDS*/
			""
		), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var u = l, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = {
			settingName: "statusNotificationToneId",
			originalSetter: p != null ? p : r("WAWebNoop"),
			toProtobufValue: v
		}, t[1] = d) : d = t[1];
		var _ = o("useWAWebSettingSync").useMappedSettingSync(d), S = o("useWAWebSettingSync").useSettingSync("isStatusNotificationEnabled", b), R = o("useWAWebSettingSync").useSettingSync("isStatusReactionsNotificationEnabled", C), L = i.toString(), E;
		t[2] !== R || t[3] !== u || t[4] !== _ || t[5] !== S || t[6] !== L ? (E = {
			title: L,
			testidPrefix: "status-updates",
			getNotificationsEnabled: y,
			setNotificationsEnabled: S,
			getReactionsEnabled: h,
			setReactionsEnabled: R,
			getSoundsEnabled: g,
			setSoundsEnabled: f,
			getNotificationToneSetting: m,
			setNotificationToneSetting: _,
			notificationToneDropdownTitle: u
		}, t[2] = R, t[3] = u, t[4] = _, t[5] = S, t[6] = L, t[7] = E) : E = t[7];
		var k = E, I;
		return t[8] !== k || t[9] !== n || t[10] !== a ? (I = c.jsx(r("WAWebGranularNotificationsDrawer.react"), {
			config: k,
			onClose: n,
			ref: a
		}), t[8] = k, t[9] = n, t[10] = a, t[11] = I) : I = t[11], I;
	}
	function f(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalStatusSoundsEnabled(e), o("WAWebSettingsSyncBridge").sendSettingChange("statusNotificationToneId", e ? 1 : 0);
	}
	function g() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalStatusSoundsEnabled();
	}
	function h() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationReactionsEnabled();
	}
	function y() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationsEnabled();
	}
	function C(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalStatusNotificationReactionsEnabled(e);
	}
	function b(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalStatusNotificationsEnabled(e);
	}
	function v(e) {
		return e;
	}
	l.default = _;
}), 226);
