__d("WAWebSelectModalSelectedChatList.react", [
	"WAWebChatModel",
	"WAWebChatParticipantList.react",
	"WAWebContactModel",
	"WDSPaddings.stylex",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = {
		paddingInlineEnd25: {
			paddingInlineEnd: "x1a4sjiy",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, m = { container: {
		display: "x78zum5",
		flexWrap: "x1a02dak",
		maxHeight: "x1aoj0v",
		overflowX: "xw2csxc",
		overflowY: "x1odjw0f",
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p(t) {
		var n = o("react-compiler-runtime").c(10), a = t.chats, i = t.onDelete, l;
		n[0] !== a ? (l = a.getSelected(), n[0] = a, n[1] = l) : l = n[1];
		var s = c(l), p = s[0], f = s[1], g;
		n[2] !== a ? (g = function() {
			f(a.getSelected());
		}, n[2] = a, n[3] = g) : g = n[3], o("useWAWebListener").useListener(a, "all", g);
		var h;
		n[4] !== p ? (h = r("compactMap")(p, _), n[4] = p, n[5] = h) : h = n[5];
		var y = h;
		if (y.length === 0) return null;
		var C;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = (e || (e = r("stylex"))).props(m.container, o("WDSPaddings.stylex").wdsPaddings.paddingTop20, d.paddingInlineEnd25, d.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingStart24), n[6] = C) : C = n[6];
		var b;
		return n[7] !== y || n[8] !== i ? (b = u.jsx("div", babelHelpers.extends({}, C, { children: u.jsx(r("WAWebChatParticipantList.react"), {
			theme: "list-names",
			contacts: y,
			onDelete: i
		}) })), n[7] = y, n[8] = i, n[9] = b) : b = n[9], b;
	}
	function _(e) {
		if (e instanceof r("WAWebContactModel")) return e;
		if (e instanceof o("WAWebChatModel").Chat) return e.contact;
	}
	l.default = p;
}), 98);
