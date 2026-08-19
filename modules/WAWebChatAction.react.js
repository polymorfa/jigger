__d("WAWebChatAction.react", [
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatConfiguration",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardShortcut.react",
	"WAWebStateUtils",
	"WAWebUnstyledButton.react",
	"react",
	"useWAWebActiveSelection",
	"useWAWebModelValues",
	"useWAWebSearchQuery"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingInlineStart30: {
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		paddingInlineEnd30: {
			paddingInlineEnd: "x5zjp28",
			$$css: !0
		},
		paddingInlineEnd10: {
			paddingInlineEnd: "x2vl965",
			$$css: !0
		}
	}, c = {
		button: {
			width: "xh8yej3",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		hover: {
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		active: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		container: {
			height: "xdiz9cm",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		text: {
			fontSize: "x1f6kntn",
			$$css: !0
		},
		label: {
			textAlign: "x1yc453h",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("useWAWebModelValues").useModelValues(e.action, [
			"id",
			"name",
			"label"
		]), n = e.onClick, a = e.searchQuery, i = r("useWAWebActiveSelection")(e.active, t.id), l = i[0], d = i[1], m = function(r) {
			n(r, o("WAWebStateUtils").unproxy(t));
		}, p = function(t) {
			t.stopPropagation(), t.preventDefault();
		}, _ = o("useWAWebSearchQuery").useSearchText(a), f = o("WAWebFormatConfiguration").Search({ terms: [_] }), g = {
			enter: m,
			space: m
		};
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: l,
			onFocus: p,
			handlers: g,
			children: s.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: [
					c.button,
					d && c.active,
					!d && c.hover,
					u.paddingInlineStart30
				],
				onClick: m,
				children: s.jsxs(o("WAWebFlex.react").FlexRow, {
					ref: l,
					xstyle: [c.container, u.paddingInlineEnd30],
					align: "center",
					justify: "all",
					children: [s.jsx(r("WAWebFlexItem.react"), {
						xstyle: [c.label, u.paddingInlineEnd10],
						children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
							multiline: !0,
							text: t.label,
							formatters: f,
							xstyle: c.text
						})
					}), s.jsx("div", { children: s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
						action: t.name,
						addModifiers: !0
					}) })]
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
