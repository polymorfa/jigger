__d("WAWebDeveloperToolsDBViewerPageViewSelector.react", [
	"WAWebDeveloperToolsArrayUtils",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { padding6: {
		paddingTop: "x1yrsyyn",
		paddingInlineEnd: "x1icxu4v",
		paddingBottom: "x10b6aqq",
		paddingInlineStart: "x25sj25",
		$$css: !0
	} }, c = {
		tab: {
			height: "x1s1d1n7",
			$$css: !0
		},
		pageTab: {
			backgroundColor: "x1od0jb8",
			color: "xhslqc4",
			":hover_color": "xfrlarv",
			$$css: !0
		},
		activePageTab: {
			backgroundColor: "x1abdmlv",
			color: "xk4n5i7",
			$$css: !0
		},
		firstTab: {
			borderStartStartRadius: "xyi3aci",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		lastTab: {
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.currentPage, n = e.onPageViewChange, a = e.pages;
		return s.jsx(o("WAWebFlex.react").FlexRow, { children: a.map(function(e, i) {
			var l = e.id === t;
			return s.jsx(r("WAWebUnstyledButton.react"), {
				disabled: l,
				xstyle: [
					c.tab,
					l ? c.activePageTab : c.pageTab,
					u.padding6,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
					i === 0 && c.firstTab,
					o("WAWebDeveloperToolsArrayUtils").isLastItemInArray(a, i) && c.lastTab
				],
				onClick: function() {
					n(e.id);
				},
				children: s.jsxs(o("WAWebFlex.react").FlexRow, {
					gap: 8,
					align: "center",
					children: [e.icon, e.id]
				})
			}, i);
		}) });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
