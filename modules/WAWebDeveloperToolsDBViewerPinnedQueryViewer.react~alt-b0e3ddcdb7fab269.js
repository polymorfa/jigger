__d("WAWebDeveloperToolsDBViewerPinnedQueryViewer.react", [
	"WAWebDeveloperToolsDBViewer.react",
	"WAWebDeveloperToolsDBViewerPinnedQueriesList.react",
	"WAWebFlex.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useState, d = {
		querySelector: {
			width: "xbstwhj",
			$$css: !0
		},
		fullHeight: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.setTitle, a = c(null), i = a[0], l = a[1];
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: "x5yr21d",
			gap: 12,
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				className: (e || (e = r("stylex")))([d.querySelector, d.fullHeight]),
				shrink: 0,
				children: u.jsx(r("WAWebDeveloperToolsDBViewerPinnedQueriesList.react"), {
					onQuerySelect: l,
					selectedQueryId: i == null ? void 0 : i.id
				})
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				grow: 1,
				className: "x5yr21d",
				gap: 12,
				children: i != null ? u.jsx("div", {
					className: "x5yr21d xeuugli x6ikm8r x10wlt62 xh8yej3",
					children: u.jsx(o("WAWebDeveloperToolsDBViewer.react").DeveloperToolsDBViewer, {
						initialQueryState: i,
						setTitle: n
					}, i.id)
				}) : u.jsx("div", {
					className: "x5yr21d x6s0dn4 xhslqc4 x78zum5 xl56j7k",
					children: "Select a pinned query"
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
