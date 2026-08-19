__d("WAWebWWAISuggestionCard.react", [
	"fbt",
	"WAWebStopEvent",
	"WAWebWWAILogging",
	"WDSIconIcThumbDown.react",
	"WDSIconIcThumbUp.react",
	"WDSText.react",
	"react",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState;
	function _(e) {
		var t = e.index, n = e.onSelect, a = e.suggestion, i = e.totalCards, l = m(null), c = o("useWAWebHover").useWAWebHover(l), _ = p(null), f = _[0], g = _[1], h = d(function() {
			n(a);
		}, [n, a]), y = d(function(e) {
			if (e.target === e.currentTarget) {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault(), n(a);
					return;
				}
				if (e.key === "ArrowDown" || e.key === "ArrowUp") {
					o("WAWebStopEvent").stopEvent(e);
					var r = e.key === "ArrowDown" ? (t + 1) % i : (t - 1 + i) % i, l = e.currentTarget.parentElement, s = l == null ? void 0 : l.querySelectorAll("[role=\"option\"]"), u = s == null ? void 0 : s[r];
					u instanceof HTMLElement && u.focus();
				}
			}
		}, [
			n,
			a,
			t,
			i
		]), C = d(function(e, t) {
			o("WAWebStopEvent").stopEvent(t);
			var n = f === e ? null : e;
			n != null && o("WAWebWWAILogging").logFeedback(e === "up" ? "thumbs_up" : "thumbs_down", a.tone), g(n);
		}, [f, a.tone]), b = d(function(e) {
			return C("up", e);
		}, [C]), v = d(function(e) {
			return C("down", e);
		}, [C]);
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1xrf6ya xscbp6u xdx6fka xvtqlqk xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x1h3rtpe x1ypdohk xh8yej3 x9f619 x1yc453h x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ubxc9n xe1j47m x1cgwre2 xm2pc3q x8b8dig",
			ref: l,
			"data-testid": "wwai_suggestion_card_" + t,
			role: "option",
			"aria-selected": !1,
			tabIndex: 0,
			onClick: h,
			onKeyDown: y,
			children: [u.jsx("span", {
				className: "x1iyjqo2 xs83m0k x1t1x2f9 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					children: a.text
				})
			}), u.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x78zum5 x2lah0s x6s0dn4 x1trrmfo xg01cxk" },
				1: { className: "x78zum5 x2lah0s x6s0dn4 x1trrmfo x1hc1fzr" }
			}[!!(c || f != null) << 0], { children: [u.jsx("button", babelHelpers.extends({}, {
				0: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk x14ug900 x1ubxc9n" },
				1: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1ubxc9n xk4n5i7 x1abdmlv" }
			}[(f === "up") << 0], {
				"data-testid": "wwai_thumbs_up_" + t,
				onClick: b,
				type: "button",
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				children: u.jsx(r("WDSIconIcThumbUp.react"), {
					width: 16,
					height: 16
				})
			})), u.jsx("button", babelHelpers.extends({}, {
				0: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk x14ug900 x1ubxc9n" },
				1: { className: "x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1ubxc9n xk4n5i7 x1abdmlv" }
			}[(f === "down") << 0], {
				"data-testid": "wwai_thumbs_down_" + t,
				onClick: v,
				type: "button",
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				children: u.jsx(r("WDSIconIcThumbDown.react"), {
					width: 16,
					height: 16
				})
			}))] }))]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
