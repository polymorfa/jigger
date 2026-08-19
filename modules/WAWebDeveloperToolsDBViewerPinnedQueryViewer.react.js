__d("WAWebDeveloperToolsDBViewerPinnedQueryViewer.react", [
	"WAWebDeveloperToolsDBViewer.react",
	"WAWebDeveloperToolsDBViewerPinnedQueriesList.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useState, d = {
		querySelector: {
			width: "xbstwhj",
			$$css: !0
		},
		fullHeight: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(11), a = t.setTitle, i = c(null), l = i[0], s = i[1], m;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = "x5yr21d", n[0] = m) : m = n[0];
		var p;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = (e || (e = r("stylex")))([d.querySelector, d.fullHeight]), n[1] = p) : p = n[1];
		var _ = l == null ? void 0 : l.id, f;
		n[2] !== _ ? (f = u.jsx(o("WAWebFlex.react").FlexColumn, {
			className: p,
			shrink: 0,
			children: u.jsx(r("WAWebDeveloperToolsDBViewerPinnedQueriesList.react"), {
				onQuerySelect: s,
				selectedQueryId: _
			})
		}), n[2] = _, n[3] = f) : f = n[3];
		var g;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (g = "x5yr21d", n[4] = g) : g = n[4];
		var h;
		n[5] !== l || n[6] !== a ? (h = u.jsx(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			className: g,
			gap: 12,
			children: l != null ? u.jsx("div", {
				className: "x5yr21d xeuugli x6ikm8r x10wlt62 xh8yej3",
				children: u.jsx(o("WAWebDeveloperToolsDBViewer.react").DeveloperToolsDBViewer, {
					initialQueryState: l,
					setTitle: a
				}, l.id)
			}) : u.jsx("div", {
				className: "x5yr21d x6s0dn4 xhslqc4 x78zum5 xl56j7k",
				children: "Select a pinned query"
			})
		}), n[5] = l, n[6] = a, n[7] = h) : h = n[7];
		var y;
		return n[8] !== f || n[9] !== h ? (y = u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: m,
			gap: 12,
			children: [f, h]
		}), n[8] = f, n[9] = h, n[10] = y) : y = n[10], y;
	}
	l.default = m;
}), 98);
