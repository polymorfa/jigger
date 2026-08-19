__d("WAWebStatusViewerInfoCellImage.react", [
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebReactionEmoji.react",
	"WAWebRound.react",
	"WAWebStatusLikeIcon.react",
	"WAWebThemeContext",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		absolutePosition: {
			position: "x10l6tqk",
			$$css: !0
		},
		emojiBadgeWrapper: {
			top: "x12eol54",
			insetInlineStart: "xfwv6vp",
			left: null,
			right: null,
			height: "xxk0z11",
			width: "xvy4d1p",
			backgroundColor: "x1280gxy",
			transitionProperty: "x13b0p5u",
			boxShadow: "x1gnnqk1",
			$$css: !0
		},
		lightIcon: {
			fill: "x4mu81t",
			$$css: !0
		},
		darkIcon: {
			fill: "x15rdi8m",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.contact, a = e.reactionText, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WAWebContactGetters").getId], t[0] = i) : i = t[0];
		var l = o("useWAWebContactValues").useContactValues(n.id, i), c = l[0], d = o("WAWebThemeContext").useIsDarkTheme(), m = null;
		if (a) {
			var p;
			t[1] !== d || t[2] !== a ? (p = a === String.fromCodePoint(128154) ? s.jsx("span", {
				className: "x10l6tqk x12mlbjr x4i5khs",
				children: s.jsx(o("WAWebStatusLikeIcon.react").StatusLikeIcon, { innerStyles: { border: d ? u.darkIcon : u.lightIcon } })
			}) : s.jsx(o("WAWebRound.react").Round, {
				xstyle: [u.absolutePosition, u.emojiBadgeWrapper],
				children: s.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
					scale: "bubble",
					reaction: r("nullthrows")(a)
				})
			}), t[1] = d, t[2] = a, t[3] = p) : p = t[3], m = p;
		}
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x1n2onr6 xvni27 xdd8jsf" }, t[4] = _) : _ = t[4];
		var f;
		t[5] !== c ? (f = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: c,
			size: 52,
			shape: o("WAWebDetailImage.react").DetailImageShape.Circle
		}), t[5] = c, t[6] = f) : f = t[6];
		var g;
		return t[7] !== m || t[8] !== f ? (g = s.jsxs("div", babelHelpers.extends({}, _, { children: [f, m] })), t[7] = m, t[8] = f, t[9] = g) : g = t[9], g;
	}
	l.default = c;
}), 98);
