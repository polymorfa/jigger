__d("WAWebNewsletterEmojiSettings.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebDefaultReactions",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebRadio.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = [
		{
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			value: o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All
		},
		{
			getLabel: function() {
				return s._(
					/*BTDS*/
					"",
					[s._param("reaction-emojis", c.jsx(p, {}))]
				);
			},
			value: o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic
		},
		{
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			value: o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None
		}
	];
	function m(e) {
		var t = o("react-compiler-runtime").c(7), n = e.currentlySelected, r = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx("div", {
			className: "xhslqc4 x1fqp7bg",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[0] = a) : a = t[0];
		var i = a, l = n, u;
		t[1] !== r ? (u = d.map(function(e) {
			return {
				value: e.value,
				label: e.getLabel(),
				onChange: r,
				testid: "newsletter-emoji-setting-" + e.value
			};
		}), t[1] = r, t[2] = u) : u = t[2];
		var m;
		return t[3] !== r || t[4] !== l || t[5] !== u ? (m = c.jsxs(c.Fragment, { children: [i, c.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "newsletter-reaction-codes-setting",
			checkedValue: l,
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
			onChange: r,
			options: u
		})] }), t[3] = r, t[4] = l, t[5] = u, t[6] = m) : m = t[6], m;
	}
	function p() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx("span", { children: o("WAWebDefaultReactions").DEFAULT_REACTIONS.map(_) }), e[0] = t) : t = e[0], t;
	}
	function _(t, n) {
		var a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t), i = n + 1 === o("WAWebDefaultReactions").DEFAULT_REACTIONS.length ? o("WDSMargins.stylex").wdsMargins.marginEnd0 : o("WDSMargins.stylex").wdsMargins.marginEnd4;
		return a != null ? c.createElement("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(i), { key: "newsletter-emoji-container-" + n }), c.jsx(r("WAWebEmoji.react"), {
			emoji: a,
			size: "small",
			element: "span"
		}, "newsletter-emoji-" + n)) : null;
	}
	l.default = m;
}), 226);
