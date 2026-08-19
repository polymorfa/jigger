__d("WAWebGroupMessagesNotificationsDrawer.react", [
	"fbt",
	"WAWebGranularNotificationsDrawer.react",
	"WAWebMuteCollection",
	"WAWebNoop",
	"cr:7293",
	"react",
	"react-compiler-runtime",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = (e = n("cr:7293")) != null ? e : {}, m = d.getNotificationToneGroupSetting, p = d.setNotificationToneGroupSetting;
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
			settingName: "groupDefaultNotificationToneId",
			originalSetter: p != null ? p : r("WAWebNoop"),
			toProtobufValue: v
		}, t[1] = d) : d = t[1];
		var _ = o("useWAWebSettingSync").useMappedSettingSync(d), S = o("useWAWebSettingSync").useSettingSync("isGroupMessageNotificationEnabled", b), R = o("useWAWebSettingSync").useSettingSync("isGroupReactionsNotificationEnabled", C), L = i.toString(), E;
		t[2] !== S || t[3] !== R || t[4] !== u || t[5] !== _ || t[6] !== L ? (E = {
			title: L,
			testidPrefix: "group-messages",
			getNotificationsEnabled: y,
			setNotificationsEnabled: S,
			getReactionsEnabled: h,
			setReactionsEnabled: R,
			getSoundsEnabled: g,
			setSoundsEnabled: f,
			getNotificationToneSetting: m,
			setNotificationToneSetting: _,
			notificationToneDropdownTitle: u
		}, t[2] = S, t[3] = R, t[4] = u, t[5] = _, t[6] = L, t[7] = E) : E = t[7];
		var k = E, I;
		return t[8] !== k || t[9] !== n || t[10] !== a ? (I = c.jsx(r("WAWebGranularNotificationsDrawer.react"), {
			config: k,
			onClose: n,
			ref: a
		}), t[8] = k, t[9] = n, t[10] = a, t[11] = I) : I = t[11], I;
	}
	function f(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalGroupSoundsEnabled(e);
	}
	function g() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalGroupSoundsEnabled();
	}
	function h() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationReactionsEnabled();
	}
	function y() {
		return o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationsEnabled();
	}
	function C(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalGroupNotificationReactionsEnabled(e);
	}
	function b(e) {
		o("WAWebMuteCollection").MuteCollection.setGlobalGroupNotificationsEnabled(e);
	}
	function v(e) {
		return e;
	}
	l.default = _;
}), 226);
