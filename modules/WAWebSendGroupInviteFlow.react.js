__d("WAWebSendGroupInviteFlow.react", [
	"fbt",
	"WAWebGroupType",
	"WAWebSendTextFlow.react",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n, a = o("react-compiler-runtime").c(9), i = e.chat, l = (t = i.groupMetadata) == null ? void 0 : t.groupInviteLink, c;
		a[0] !== l ? (c = r("nullthrows")(l), a[0] = l, a[1] = c) : c = a[1];
		var d = c, m = ((n = i.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.COMMUNITY, p;
		a[2] !== d || a[3] !== m ? (p = m ? s._(
			/*BTDS*/
			""
		).toString() + " " + d : s._(
			/*BTDS*/
			""
		).toString() + " " + d, a[2] = d, a[3] = m, a[4] = p) : p = a[4];
		var _ = p, f, g;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), g = s._(
			/*BTDS*/
			""
		), a[5] = f, a[6] = g) : (f = a[5], g = a[6]);
		var h;
		return a[7] !== _ ? (h = u.jsx(r("WAWebSendTextFlow.react"), {
			ariaLabel: f,
			title: g,
			text: _
		}), a[7] = _, a[8] = h) : h = a[8], h;
	}
	l.default = c;
}), 226);
