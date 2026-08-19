__d("WAWebStarredHeaderDropdown.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebStarredMsgsUtils",
	"WAWebThreadMsgUtils",
	"WAWebUnstarAllPopup.react",
	"WAWebUnstarRefreshedIcon.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.chat, a = e.msgs, i = e.threadId, l;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			if (a.length > 0 ? l = a : l = n != null ? o("WAWebStarredMsgsUtils").getStarredMsgs(n).toArray() : [], i != null) {
				var c;
				t[4] !== i ? (c = function(t) {
					return o("WAWebThreadMsgUtils").isMsgInThread(t, i);
				}, t[4] = i, t[5] = c) : c = t[5], l = l.filter(c);
			}
			t[0] = n, t[1] = a, t[2] = i, t[3] = l;
		} else l = t[3];
		var d;
		t[6] !== n || t[7] !== l ? (d = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebUnstarAllPopup.react"), {
				msgs: l,
				chat: n
			}));
		}, t[6] = n, t[7] = l, t[8] = d) : d = t[8];
		var m = d, p = l.length === 0, _;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[9] = _) : _ = t[9];
		var f;
		return t[10] !== m || t[11] !== p ? (f = u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon,
			testid: "mi-unstar-all menu-item",
			onPress: m,
			disabled: p,
			title: _
		}) }), t[10] = m, t[11] = p, t[12] = f) : f = t[12], f;
	}
	l.default = c;
}), 226);
