__d("WAWebCategorySelectionList.react", [
	"WAWebCheckBox.react",
	"WAWebFlex.react",
	"WDSIconIcChevronRight.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		categoryItem: {
			alignItems: "x6s0dn4",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		categoryItemV2: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xb0esv5",
			width: "xh8yej3",
			$$css: !0
		},
		checkboxContainer: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			height: "xsdox4t",
			justifyContent: "xl56j7k",
			width: "x100vrsf",
			$$css: !0
		},
		chevronContainer: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			height: "xsdox4t",
			justifyContent: "xl56j7k",
			width: "x1xvr5cs",
			$$css: !0
		},
		categoryName: {
			flex: "x98rzlu",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.isDisabled, a = e.isLoading, i = e.isSelected, l = e.onDrillDown, c = e.results, d = e.toggleResultById;
		if (a) {
			var m;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx("div", { children: "Loading..." }), t[0] = m) : m = t[0], m;
		}
		var p;
		t[1] !== n || t[2] !== i || t[3] !== l || t[4] !== c || t[5] !== d ? (p = c != null && c.map(function(e) {
			var t = l != null && e.children != null && e.children.length > 0;
			if (t) return s.jsxs("div", {
				className: "x6s0dn4 x9f619 x1ypdohk x78zum5 x1aj3ljl x8a3fw1 x16ovd2e x12xbjc7 xb0esv5 xyo0t3i xh8yej3",
				onClick: function() {
					return l == null ? void 0 : l(e);
				},
				onKeyDown: function(n) {
					(n.key === "Enter" || n.key === " ") && (n.preventDefault(), l == null || l(e));
				},
				role: "button",
				tabIndex: 0,
				"aria-label": e.localized_display_name,
				"aria-haspopup": "menu",
				children: [s.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					xstyle: u.categoryName,
					children: e.localized_display_name
				}), s.jsx("span", {
					className: "xjp7ctv",
					"aria-hidden": !0,
					children: s.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: u.chevronContainer,
						children: s.jsx(r("WDSIconIcChevronRight.react"), {
							height: 20,
							width: 20
						})
					})
				})]
			}, e.id);
			var a = i(e.id), c = n(e.id), m = l != null;
			return s.jsxs(o("WAWebFlex.react").FlexRow, {
				gap: 12,
				testid: "biz_profile_category_option",
				role: "group",
				"aria-label": e.localized_display_name,
				xstyle: m ? u.categoryItemV2 : u.categoryItem,
				children: [
					!m && s.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: u.checkboxContainer,
						children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
							checked: a,
							disabled: c,
							testid: "biz_profile_category_option_checkbox",
							onChange: function() {
								return d(e.id);
							}
						})
					}),
					s.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						xstyle: m ? u.categoryName : void 0,
						children: e.localized_display_name
					}),
					m && s.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: u.checkboxContainer,
						children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
							checked: a,
							disabled: c,
							testid: "biz_profile_category_option_checkbox",
							onChange: function() {
								return d(e.id);
							}
						})
					})
				]
			}, e.id);
		}), t[1] = n, t[2] = i, t[3] = l, t[4] = c, t[5] = d, t[6] = p) : p = t[6];
		var _;
		return t[7] !== p ? (_ = s.jsx(o("WAWebFlex.react").FlexColumn, { children: p }), t[7] = p, t[8] = _) : _ = t[8], _;
	}
	l.default = c;
}), 98);
