__d("WAWebTeamLinkMemberRowActions.react", [
	"fbt",
	"WDSButton.react",
	"WDSIconIcMoreHoriz.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(30), n = e.invitation, a = e.onRemove, i = e.onRenew, l = n.invitationStatus, c = l === "PENDING" || l === "EXPIRED", d = l === "PENDING" || l === "EXPIRED", p = l === "COMPLETED", _ = c || d || p, f = m(null), g;
		t[0] !== c || t[1] !== n || t[2] !== i ? (g = c && u.jsx(r("WDSMenuItem.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				return i(n);
			},
			testid: "teamlink-row-renew"
		}), t[0] = c, t[1] = n, t[2] = i, t[3] = g) : g = t[3];
		var h;
		t[4] !== d || t[5] !== n || t[6] !== a ? (h = d && u.jsx(r("WDSMenuItem.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			destructive: !0,
			onPress: function() {
				return a(n);
			},
			testid: "teamlink-row-delete"
		}), t[4] = d, t[5] = n, t[6] = a, t[7] = h) : h = t[7];
		var y;
		t[8] !== p || t[9] !== n || t[10] !== a ? (y = p && u.jsx(r("WDSMenuItem.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			destructive: !0,
			onPress: function() {
				return a(n);
			},
			testid: "teamlink-row-offboard"
		}), t[8] = p, t[9] = n, t[10] = a, t[11] = y) : y = t[11];
		var C;
		t[12] !== g || t[13] !== h || t[14] !== y ? (C = u.jsxs(r("WDSMenu.react"), { children: [
			g,
			h,
			y
		] }), t[12] = g, t[13] = h, t[14] = y, t[15] = C) : C = t[15];
		var b = C, v;
		t[16] !== b ? (v = {
			targetRef: f,
			menu: b
		}, t[16] = b, t[17] = v) : v = t[17];
		var S = r("useWDSMenu")(v), R = S.closeMenu, L = S.isMenuOpen, E = S.menuPortal, k = S.openMenu, I;
		t[18] !== R || t[19] !== L || t[20] !== k ? (I = function(t) {
			t.stopPropagation(), L ? R() : k();
		}, t[18] = R, t[19] = L, t[20] = k, t[21] = I) : I = t[21];
		var T = I;
		if (!_) return null;
		var D;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x2lah0s x1td3qas x10w6t97 x78zum5 x6s0dn4 xl56j7k" }, t[22] = D) : D = t[22];
		var x;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[23] = x) : x = t[23];
		var $;
		t[24] !== T || t[25] !== L ? ($ = u.jsx(r("WDSButton.react"), {
			ref: f,
			Icon: r("WDSIconIcMoreHoriz.react"),
			variant: "borderless",
			type: "default",
			size: "small",
			onPress: T,
			"aria-label": x,
			"aria-haspopup": "menu",
			"aria-expanded": L,
			testid: "teamlink-row-actions-btn"
		}), t[24] = T, t[25] = L, t[26] = $) : $ = t[26];
		var P;
		return t[27] !== E || t[28] !== $ ? (P = u.jsxs("div", babelHelpers.extends({}, D, { children: [$, E] })), t[27] = E, t[28] = $, t[29] = P) : P = t[29], P;
	}
	l.default = p;
}), 226);
