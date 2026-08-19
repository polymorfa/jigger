__d("WAWebBizAdCreationSummarySection.react", [
	"fbt",
	"CometPlaceholder.react",
	"WAWebBizAdCreationSummaryContent.react",
	"WAWebBizAdCreationSummaryReachEstimationRow.react",
	"WAWebBizSectionDivider.react",
	"WAWebBizShimmerRows.react",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		header: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		listItems: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			rowGap: "x8a3fw1",
			$$css: !0
		},
		sectionContainer: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function d() {
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: c.sectionContainer,
			children: [u.jsx(r("WAWebBizSectionDivider.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				xstyle: c.header
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: c.listItems,
				children: [
					u.jsx(r("CometPlaceholder.react"), {
						fallback: u.jsx(r("WAWebBizShimmerRows.react"), {
							count: 1,
							height: 20
						}),
						name: i.id,
						children: u.jsx(r("WAWebBizAdCreationSummaryReachEstimationRow.react"), {})
					}),
					u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
					u.jsx(r("CometPlaceholder.react"), {
						fallback: u.jsx(m, {}),
						name: i.id,
						children: u.jsx(r("WAWebBizAdCreationSummaryContent.react"), {})
					})
				]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			gap: 12,
			children: [
				u.jsx(r("WAWebBizShimmerRows.react"), {
					count: 3,
					height: 20
				}),
				u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				u.jsx(r("WAWebBizShimmerRows.react"), {
					count: 1,
					height: 20
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
