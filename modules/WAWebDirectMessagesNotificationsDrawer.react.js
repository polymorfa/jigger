__d("WAWebDirectMessagesNotificationsDrawer.react", [
	"fbt",
	"WAWebGranularNotificationsDrawer.react",
	"WAWebMuteCollection",
	"WAWebNoop",
	"cr:7293",
	"react",
	"react-compiler-runtime",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = (e = n("cr:7293")) != null ? e : {}, m = d.getNotificationToneSetting, p = d.setNotificationToneSetting;
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
			settingName: "defaultNotificationToneId",
			originalSetter: p != null ? p : r("WAWebNoop"),
			toProtobufValue: v
		}, t[1] = d) : d = t[1];
		var _ = o("useWAWebSettingSync").useMappedSettingSync(d), S = o("useWAWebSettingSync").useSettingSync("isMessagesNotificationEnabled", b), R = o("useWAWebSettingSync").useSettingSync("isReactionsNotificationEnabled", C), L = i.toString(), E;
		t[2] !== u || t[3] !== _ || t[4] !== S || t[5] !== R || t[6] !== L ? (E = {
			title: L,
			testidPrefix: "direct-messages",
			getNotificationsEnabled: y,
			setNotificationsEnabled: S,
			getReactionsEnabled: h,
			setReactionsEnabled: R,
			getSoundsEnabled: g,
			setSoundsEnabled: f,
			getNotificationToneSetting: m,
			setNotificationToneSetting: _,
			notificationToneDropdownTitle: u
		}, t[2] = u, t[3] = _, t[4] = S, t[5] = R, t[6] = L, t[7] = E) : E = t[7];
		var k = E, I;
		return t[8] !== k || t[9] !== n || t[10] !== a ? (I = c.jsx(r("WAWebGranularNotificationsDrawer.react"), {
			config: k,
			onClose: n,
			ref: a
		}), t[8] = k, t[9] = n, t[10] = a, t[11] = I) : I = t[11], I;
	}
	function f(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalSoundsEnabled(e);
	}
	function g() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalSoundsEnabled();
	}
	function h() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalNotificationReactionsEnabled();
	}
	function y() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalNotificationsEnabled();
	}
	function C(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalNotificationReactionsEnabled(e);
	}
	function b(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalNotificationsEnabled(e);
	}
	function v(e) {
		return e;
	}
	l.default = _;
}), 226);
