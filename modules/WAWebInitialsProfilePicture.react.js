__d("WAWebInitialsProfilePicture.react", [
	"$InternalEnum",
	"WABidi",
	"WAWebInitialsFromNameUtils",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebDefaultProfileColors",
	"useWAWebGroupColors"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = n("$InternalEnum").Mirrored([
		"Default",
		"GroupChatProfilePicture",
		"NewsletterQuestionsResponses"
	]), d = {
		initialsBackground: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "x1awj2ng",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		initialsNewsletterResponses: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			$$css: !0
		},
		initialsDefault: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(22), a = t.initialsData, i = t.theme, l = t.wid, s = t.name, m = t.backgroundColorId, p = i === void 0 ? c.Default : i, _ = o("useWAWebDefaultProfileColors").useDefaultProfileColors(l, s), f = _.background, g = _.foreground, h = o("useWAWebGroupColors").useGroupsColorStyle(m != null ? m : 1, "background");
		h = f != null ? f : h;
		var y = a.firstInitial != null && a.secondInitial != null, C = o("WAWebInitialsFromNameUtils").supportedAlphabetsMap.get(o("WAWebInitialsFromNameUtils").InitialsAlphabets.HAN), b = !1;
		if (C && a.secondInitial != null && C.test(a == null ? void 0 : a.secondInitial)) {
			var v, S = ((v = a.secondInitial) == null ? void 0 : v.length) || 0;
			b = S > 1;
		}
		var R = a.firstInitial != null && o("WABidi").bidiDir(a.firstInitial) === "rtl" ? "rtl" : "ltr", L = p === c.NewsletterQuestionsResponses ? d.initialsNewsletterResponses : d.initialsDefault, E;
		n[0] !== h || n[1] !== L || n[2] !== g ? (E = (e || (e = r("stylex"))).props(d.initialsBackground, L, h, g), n[0] = h, n[1] = L, n[2] = g, n[3] = E) : E = n[3];
		var k;
		n[4] !== b || n[5] !== p || n[6] !== y ? (k = {
			0: {},
			8: { className: "x1aueamr" },
			4: { className: "x1f6kntn" },
			12: { className: "x1f6kntn" },
			2: { className: "x1nxh6w3" },
			10: { className: "x1nxh6w3" },
			6: { className: "x1nxh6w3" },
			14: { className: "x1nxh6w3" },
			1: { className: "x1ncwhqj" },
			9: { className: "x1ncwhqj" },
			5: { className: "x1ncwhqj" },
			13: { className: "x1ncwhqj" },
			3: { className: "x1ncwhqj" },
			11: { className: "x1ncwhqj" },
			7: { className: "x1ncwhqj" },
			15: { className: "x1ncwhqj" }
		}[(p === c.Default) << 3 | (p === c.GroupChatProfilePicture) << 2 | !!(p === c.GroupChatProfilePicture && y) << 1 | !!b << 0], n[4] = b, n[5] = p, n[6] = y, n[7] = k) : k = n[7];
		var I;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x1rg5ohu xk50ysn" }, n[8] = I) : I = n[8];
		var T;
		n[9] !== a.firstInitial ? (T = u.jsx("div", babelHelpers.extends({ "data-testid": "profile-first-initial" }, I, { children: a.firstInitial })), n[9] = a.firstInitial, n[10] = T) : T = n[10];
		var D;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1rg5ohu xk50ysn" }, n[11] = D) : D = n[11];
		var x;
		n[12] !== a.secondInitial ? (x = u.jsx("div", babelHelpers.extends({ "data-testid": "profile-second-initial" }, D, { children: a.secondInitial })), n[12] = a.secondInitial, n[13] = x) : x = n[13];
		var $;
		n[14] !== R || n[15] !== k || n[16] !== T || n[17] !== x ? ($ = u.jsxs("div", babelHelpers.extends({ dir: R }, k, { children: [T, x] })), n[14] = R, n[15] = k, n[16] = T, n[17] = x, n[18] = $) : $ = n[18];
		var P;
		return n[19] !== E || n[20] !== $ ? (P = u.jsx("div", babelHelpers.extends({}, E, { children: $ })), n[19] = E, n[20] = $, n[21] = P) : P = n[21], P;
	}
	l.ThemeType = c, l.InitialsProfilePicture = m;
}), 98);
