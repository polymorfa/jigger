__d("WAWebChatDebugCommand.react", [
	"WAWebDebugCommandGetters",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebHighlightedText.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebStateUtils",
	"WAWebUnstyledButton.react",
	"react",
	"useWAWebActiveSelection",
	"useWAWebDebugCommandValues"
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
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, c = {
		button: {
			width: "xh8yej3",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		container: {
			height: "xdiz9cm",
			fontSize: "x1jchvi3",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			textAlign: "x1yc453h",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		inactive: {
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		active: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		name: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		doc: {
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			color: "xraqfvc",
			display: "x1lliihq",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.debugCommand, n = t.id, a = o("useWAWebDebugCommandValues").useDebugCommandValues(n, [o("WAWebDebugCommandGetters").getDoc, o("WAWebDebugCommandGetters").getName]), i = a[0], l = a[1], d = e.onClick, m = r("useWAWebActiveSelection")(e.active, n), p = m[0], _ = m[1], f = function(n) {
			d(n, o("WAWebStateUtils").unproxy(t));
		}, g = function(t) {
			t.stopPropagation(), t.preventDefault();
		}, h = {
			enter: f,
			space: f
		};
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: p,
			onFocus: g,
			handlers: h,
			children: s.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: [
					c.button,
					u.paddingInlineStart30,
					_ && c.active,
					!_ && c.inactive
				],
				testid: "li-" + n,
				onClick: f,
				children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
					justify: "center",
					align: "stretch",
					xstyle: [c.container, u.paddingInlineEnd30],
					children: [s.jsx(r("WAWebFlexItem.react"), { children: s.jsx(o("WAWebHighlightedText.react").HighlightedText, {
						text: l,
						xstyle: [c.name, u.paddingBottom5],
						searchQuery: e.searchQuery
					}) }), s.jsx(r("WAWebFlexItem.react"), { children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
						xstyle: c.doc,
						text: i,
						ellipsify: !0
					}) })]
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
