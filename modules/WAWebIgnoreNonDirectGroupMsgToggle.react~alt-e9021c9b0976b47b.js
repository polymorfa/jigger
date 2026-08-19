__d("WAWebIgnoreNonDirectGroupMsgToggle.react", [
	"fbt",
	"WAWebMuteCollection",
	"WAWebSettingsCheckList.react",
	"WAWebText.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = r("useWAWebToggle")(function() {
			return o("WAWebMuteCollection").MuteCollection.getIgnoreNondirectGroupMsg();
		}, function(e) {
			return o("WAWebMuteCollection").MuteCollection.setIgnoreNondirectGroupMsg(e);
		}), t = e[0], n = e[1], a = s._(
			/*BTDS*/
			""
		);
		return u.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			testid: "option-nondirect-group-msg-notif",
			id: "nondirect-group-msg-notif",
			checked: t,
			checkboxRightAligned: !0,
			onChange: n,
			children: [a, u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				""
			) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
