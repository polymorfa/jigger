__d("WAWebBizAdManagementLoadingFallback.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebBizAdManagementColumnWidths",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 68, c = {
		cell: {
			boxSizing: "x9f619",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		row: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		textContainer: {
			minWidth: "xeuugli",
			$$css: !0
		},
		yourAdsCell: {
			width: "xh8yej3",
			$$css: !0
		}
	}, d = 6, m = [
		"yourAds",
		"status",
		"reach",
		"conversations",
		"costPerConversation",
		"amountSpent"
	];
	function p(e) {
		var t, n, r = {};
		return e.type === "pixel" ? (r.width = e.px + "px", r.flexShrink = 0) : e.type === "proportional" ? (r.flexGrow = e.value, r.flexBasis = "0", r.flexShrink = 0) : (r.flexGrow = 1, r.flexBasis = "0"), ((t = e.options) == null ? void 0 : t.minWidth) != null && (r.minWidth = e.options.minWidth + "px"), ((n = e.options) == null ? void 0 : n.maxWidth) != null && (r.maxWidth = e.options.maxWidth + "px"), r;
	}
	function _() {
		return s.jsxs("div", {
			className: "x1c7u0tx x78zum5 xdt5ytf x1iyjqo2",
			children: [s.jsx("div", { className: "x2lah0s x1gb2em4" }), Array.from({ length: d }, function(e, t) {
				return s.jsx(y, {}, t);
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: c.yourAdsCell,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 48,
				width: 48
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 4,
				xstyle: c.textContainer,
				children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 16,
					width: 120
				}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 12,
					width: 80
				})]
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 4,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 16,
				width: 60
			}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 12,
				width: 80
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = {
		amountSpent: s.jsx(g, {}),
		conversations: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 16,
			width: 50
		}),
		costPerConversation: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 16,
			width: 60
		}),
		reach: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 16,
			width: 50
		}),
		status: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 16,
			width: 60
		}),
		yourAds: s.jsx(f, {})
	};
	function y() {
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.row,
			children: m.map(function(e) {
				return s.jsx(o("WAWebFlex.react").FlexColumn, {
					style: p(o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths[e]),
					xstyle: c.cell,
					children: h[e]
				}, e);
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = _;
}), 98);
