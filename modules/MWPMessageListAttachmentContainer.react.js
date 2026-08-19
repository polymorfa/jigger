__d("MWPMessageListAttachmentContainer.react", [
	"MWPMessageHasXMA",
	"MWPMessageListColumn.react",
	"mwpMessageIsReply",
	"mwpMessageWithAttachmentHasPoll",
	"react",
	"react-strict-dom",
	"xmaLayouts"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		container: {
			maxWidth: "x193iq5w",
			position: "x1n2onr6",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		container_for_poll: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			width: "xh8yej3",
			$$css: !0
		},
		container_for_top_margin: {
			marginTop: "x1gslohp",
			$$css: !0
		},
		container_for_xma: {
			width: "xh8yej3",
			$$css: !0
		},
		vr: {
			backgroundColor: "x1eb86dx",
			height: "x36qwtl",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.children, n = e.connectTop, a = e.hasTopMargin, i = a === void 0 ? !1 : a, l = e.message, c = e.outgoing, d = e.paint, m = d === void 0 ? !0 : d, p = e.renderEmphasisRing, _ = e.xmaLayout, f = e.xstyle, g = r("MWPMessageHasXMA")(l), h = r("mwpMessageIsReply")(l), y = r("mwpMessageWithAttachmentHasPoll")(l), C = l.text, b = C != null ? C !== "" : !1, v = s.jsx(o("react-strict-dom").html.div, {
			"data-testid": void 0,
			style: [
				u.container,
				g ? u.container_for_xma : !1,
				y ? u.container_for_poll : !1,
				i ? u.container_for_top_margin : !1,
				f !== null ? f : !1
			],
			children: t
		});
		return s.jsxs(s.Fragment, { children: [n && (_ === o("xmaLayouts").XMA_LAYOUTS.UNIFIED_LAYOUT || !g || !b) ? s.jsx(o("react-strict-dom").html.div, { style: u.vr }) : null, s.jsx(o("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap, {
			paint: !h && m,
			children: p != null ? p(v) : v
		})] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
