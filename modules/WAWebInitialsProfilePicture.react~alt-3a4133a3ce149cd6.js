__d("WAWebInitialsProfilePicture.react", [
	"$InternalEnum",
	"WABidi",
	"WAWebInitialsFromNameUtils",
	"react",
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
		var n = t.initialsData, a = t.theme, i = a === void 0 ? c.Default : a, l = t.wid, s = t.name, m = t.backgroundColorId, p = o("useWAWebDefaultProfileColors").useDefaultProfileColors(l, s), _ = p.background, f = p.foreground, g = o("useWAWebGroupColors").useGroupsColorStyle(m != null ? m : 1, "background");
		g = _ != null ? _ : g;
		var h = n.firstInitial != null && n.secondInitial != null, y = o("WAWebInitialsFromNameUtils").supportedAlphabetsMap.get(o("WAWebInitialsFromNameUtils").InitialsAlphabets.HAN), C = !1;
		if (y && n.secondInitial != null && y.test(n == null ? void 0 : n.secondInitial)) {
			var b, v = ((b = n.secondInitial) == null ? void 0 : b.length) || 0;
			C = v > 1;
		}
		var S = n.firstInitial != null && o("WABidi").bidiDir(n.firstInitial) === "rtl" ? "rtl" : "ltr", R = i === c.NewsletterQuestionsResponses ? d.initialsNewsletterResponses : d.initialsDefault;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.initialsBackground, R, g, f), { children: u.jsxs("div", babelHelpers.extends({ dir: S }, {
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
		}[(i === c.Default) << 3 | (i === c.GroupChatProfilePicture) << 2 | !!(i === c.GroupChatProfilePicture && h) << 1 | !!C << 0], { children: [u.jsx("div", {
			"data-testid": "profile-first-initial",
			className: "x1rg5ohu xk50ysn",
			children: n.firstInitial
		}), u.jsx("div", {
			"data-testid": "profile-second-initial",
			className: "x1rg5ohu xk50ysn",
			children: n.secondInitial
		})] })) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.ThemeType = c, l.InitialsProfilePicture = m;
}), 98);
