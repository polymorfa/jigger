__d("WAWebWrapperEphemeralInfoButton.react", [
	"fbt",
	"WAWebInfoAltIcon.react",
	"WAWebRound.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = 12, d = "x1xeqro6-B", m = {
		svgColor: {
			color: "x1bvqhpb",
			$$css: !0
		},
		mountAnimation: {
			animationName: "x7u67sc",
			animationDuration: "x5hsz1j",
			animationTimingFunction: "x1debuo4",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n = e.atBubbleCorner, r = e.onClick, a = n === void 0 ? !1 : n, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
			xstyle: m.svgColor,
			height: c,
			width: c
		}), t[1] = l) : l = t[1];
		var d;
		t[2] !== r ? (d = u.jsx(o("WAWebRound.react").Round, {
			onClick: r,
			label: i,
			testid: "msg_ephemeral_info_button",
			theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshedOverlay,
			xstyle: m.mountAnimation,
			children: l
		}), t[2] = r, t[3] = d) : d = t[3];
		var p = d;
		if (a) return p;
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 x6s0dn4 xl56j7k x23j0i4 xd7y6wv" }, t[4] = _) : _ = t[4];
		var f;
		return t[5] !== p ? (f = u.jsx("div", babelHelpers.extends({}, _, { children: p })), t[5] = p, t[6] = f) : f = t[6], f;
	}
	l.default = p;
}), 226);
