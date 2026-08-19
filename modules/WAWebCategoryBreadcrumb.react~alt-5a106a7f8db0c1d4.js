__d("WAWebCategoryBreadcrumb.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			alignItems: "x6s0dn4",
			flexWrap: "x1a02dak",
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		currentSegment: {
			cursor: "xt0e3qv",
			$$css: !0
		},
		separator: {
			userSelect: "x87ps6o",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.onNavigate, n = e.path;
		return n.length === 0 ? null : u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.container,
			role: "navigation",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [u.jsx("span", {
				className: "x1ypdohk",
				onClick: function() {
					return t(0);
				},
				onKeyDown: function(n) {
					(n.key === "Enter" || n.key === " ") && (n.preventDefault(), t(0));
				},
				role: "button",
				tabIndex: 0,
				children: u.jsx(r("WDSText.react"), {
					colorName: "accent",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), n.map(function(e, o) {
				var a = o === n.length - 1;
				return u.jsxs(u.Fragment, { children: [u.jsx("span", {
					className: "xjp7ctv",
					"aria-hidden": !0,
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						xstyle: c.separator,
						children: ">"
					})
				}), a ? u.jsx("span", {
					className: "xjp7ctv",
					"aria-current": "page",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body2Emphasized",
						xstyle: c.currentSegment,
						children: e.localized_display_name
					})
				}) : u.jsx("span", {
					className: "x1ypdohk",
					onClick: function() {
						return t(o + 1);
					},
					onKeyDown: function(n) {
						(n.key === "Enter" || n.key === " ") && (n.preventDefault(), t(o + 1));
					},
					role: "button",
					tabIndex: 0,
					children: u.jsx(r("WDSText.react"), {
						colorName: "accent",
						type: "Body2",
						children: e.localized_display_name
					})
				})] }, e.id);
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
