__d("WAWebStatusPlusBadge.react", [
	"WAWebRound.react",
	"WDSIconIcAdd.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		badge: {
			height: "x1ta3ar0",
			width: "x1se2ifz",
			transitionProperty: "x13b0p5u",
			boxShadow: "x1gnnqk1",
			backgroundColor: "xfn3atn",
			color: "x1pse0pq",
			$$css: !0
		},
		badgeBackplate: {
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1j8ymqv",
			paddingBottom: "xa0aww2",
			paddingInlineStart: "x4tra6z",
			position: "x10l6tqk",
			bottom: "x1o583il",
			insetInlineEnd: "x1euzuty",
			left: null,
			right: null,
			zIndex: "xupqr0c",
			backgroundColor: "x1280gxy",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.anchorRef, a = e.onClick, i = e.positionXstyle, l;
		t[0] !== i ? (l = [
			u.badge,
			u.badgeBackplate,
			i
		], t[0] = i, t[1] = l) : l = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebRound.react").Round, {
			xstyle: u.badge,
			children: s.jsx(r("WDSIconIcAdd.react"), {
				width: 14,
				height: 14
			})
		}), t[2] = c) : c = t[2];
		var d;
		return t[3] !== n || t[4] !== a || t[5] !== l ? (d = s.jsx(o("WAWebRound.react").Round, {
			ref: n,
			testid: "status-plus-badge",
			onClick: a,
			xstyle: l,
			children: c
		}), t[3] = n, t[4] = a, t[5] = l, t[6] = d) : d = t[6], d;
	}
	l.default = c;
}), 98);
