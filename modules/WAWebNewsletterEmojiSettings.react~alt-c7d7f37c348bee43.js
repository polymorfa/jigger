__d("WAWebNewsletterEmojiSettings.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebDefaultReactions",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebRadio.react",
	"WDSMargins.stylex",
	"react",
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
		var t = e.currentlySelected, n = e.onClick, r = c.jsx("div", {
			className: "xhslqc4 x1fqp7bg",
			children: s._(
				/*BTDS*/
				""
			)
		});
		return c.jsxs(c.Fragment, { children: [r, c.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "newsletter-reaction-codes-setting",
			checkedValue: t,
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
			onChange: n,
			options: d.map(function(e) {
				return {
					value: e.value,
					label: e.getLabel(),
					onChange: n,
					testid: "newsletter-emoji-setting-" + e.value
				};
			})
		})] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return c.jsx("span", { children: o("WAWebDefaultReactions").DEFAULT_REACTIONS.map(function(t, n) {
			var a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t), i = n + 1 === o("WAWebDefaultReactions").DEFAULT_REACTIONS.length ? o("WDSMargins.stylex").wdsMargins.marginEnd0 : o("WDSMargins.stylex").wdsMargins.marginEnd4;
			return a != null ? c.createElement("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(i), { key: "newsletter-emoji-container-" + n }), c.jsx(r("WAWebEmoji.react"), {
				emoji: a,
				size: "small",
				element: "span"
			}, "newsletter-emoji-" + n)) : null;
		}) });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
