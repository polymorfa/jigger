__d("MWPMessageListColumn.react", [
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		bubble: {
			minWidth: "xeuugli",
			$$css: !0
		},
		centered: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		customHeight: function(t) {
			return [{
				height: t != null ? "x16ye13r" : t,
				$$css: !0
			}, { "--x-height": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		},
		grow: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		justifyContentStart: {
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		paint: {
			backgroundColor: "x1eb86dx",
			$$css: !0
		},
		profile: {
			paddingInlineEnd: "xf159sx",
			paddingInlineStart: "xdmgqn6",
			$$css: !0
		},
		root: {
			alignItems: "x1h91t0o",
			alignSelf: "xkh2ocl",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x13a6bvl",
			maxWidth: "x193iq5w",
			$$css: !0
		},
		selfCentered: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		shrinkwrap: {
			flexGrow: "x1c4vz4f",
			$$css: !0
		},
		spacer: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		vr: {
			backgroundColor: "x1eb86dx",
			width: "xh8yej3",
			$$css: !0
		},
		withGutters: {
			paddingInlineEnd: "x1o5r3ls",
			paddingInlineStart: "x15r0g6m",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.bubble, r = e.centered, a = e.children, i = e.grow, l = e.justifyContent, c = e.paint, d = e.profile, m = e.selfCentered, p = e.shrinkwrap, _ = e.withGutters, f = i === !0 ? u.grow : !1, g = p === !0 ? u.shrinkwrap : !1, h = c === !0 ? u.paint : !1, y = d === !0 ? u.profile : !1, C = _ === !0 ? u.withGutters : !1, b = n === !0 ? u.bubble : !1, v = r === !0 ? u.centered : !1, S = m === !0 ? u.selfCentered : !1, R = l === "flex-start" ? u.justifyContentStart : !1, L;
		t[0] !== f || t[1] !== g || t[2] !== h || t[3] !== y || t[4] !== C || t[5] !== b || t[6] !== v || t[7] !== S || t[8] !== R ? (L = [
			u.root,
			f,
			g,
			h,
			y,
			C,
			b,
			v,
			S,
			R
		], t[0] = f, t[1] = g, t[2] = h, t[3] = y, t[4] = C, t[5] = b, t[6] = v, t[7] = S, t[8] = R, t[9] = L) : L = t[9];
		var E;
		return t[10] !== a || t[11] !== L ? (E = s.jsx(o("react-strict-dom").html.div, {
			role: "none",
			style: L,
			children: a
		}), t[10] = a, t[11] = L, t[12] = E) : E = t[12], E;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, r = e.grow, a = e.shrinkwrap, i = r != null ? r : !1, l = a != null ? a : !1, u;
		return t[0] !== n || t[1] !== i || t[2] !== l ? (u = s.jsx(c, {
			grow: i,
			paint: !0,
			shrinkwrap: l,
			withGutters: !0,
			children: n
		}), t[0] = n, t[1] = i, t[2] = l, t[3] = u) : u = t[3], u;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.selfCentered, a = r != null ? r : !1, i;
		return t[0] !== n || t[1] !== a ? (i = s.jsx(c, {
			paint: !0,
			profile: !0,
			selfCentered: a,
			shrinkwrap: !0,
			children: n
		}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, r = e.paint, a = e.profile, i = r != null ? r : !0, l = a != null ? a : !1, u;
		return t[0] !== n || t[1] !== i || t[2] !== l ? (u = s.jsx(c, {
			paint: i,
			profile: l,
			selfCentered: !0,
			shrinkwrap: !0,
			children: n
		}), t[0] = n, t[1] = i, t[2] = l, t[3] = u) : u = t[3], u;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = e.centered, r = e.children, a = e.paint, i = n != null ? n : !1, l = a != null ? a : !0, u;
		return t[0] !== r || t[1] !== i || t[2] !== l ? (u = s.jsx(c, {
			centered: i,
			paint: l,
			shrinkwrap: !0,
			children: r
		}), t[0] = r, t[1] = i, t[2] = l, t[3] = u) : u = t[3], u;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.paint, a = r === void 0 ? !0 : r, i;
		return t[0] !== n || t[1] !== a ? (i = s.jsx(c, {
			grow: !0,
			paint: a,
			children: n
		}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(2), n = e.children, r;
		return t[0] !== n ? (r = s.jsx(c, {
			grow: !0,
			justifyContent: "flex-start",
			paint: !0,
			children: n
		}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.paint, a;
		return t[0] !== n || t[1] !== r ? (a = s.jsx(c, {
			bubble: !0,
			paint: r,
			children: n
		}), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	function y() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("react-strict-dom").html.div, {
			role: "none",
			style: u.spacer
		}), e[0] = t) : t = e[0], t;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(4), n = e.height, r;
		t[0] !== n ? (r = u.customHeight(n), t[0] = n, t[1] = r) : r = t[1];
		var a;
		return t[2] !== r ? (a = s.jsx(o("react-strict-dom").html.div, {
			role: "none",
			style: [u.vr, r]
		}), t[2] = r, t[3] = a) : a = t[3], a;
	}
	l.MWPMessageListColumnWithGutters = d, l.MWPMessageListColumnProfile = m, l.MWPMessageListColumnSelfCentered = p, l.MWPMessageListColumnShrinkwrap = _, l.MWPMessageListColumnGrow = f, l.MWPMessageListColumnGrowJustified = g, l.MWPMessageListColumnBubble = h, l.MWPMessageListColumnHorizontalSpacer = y, l.MWPMessageListColumnVerticalRhythm = C;
}), 98);
