__d("WAWebGroupIntegrityUtils", [
	"WAWebChatGroupUtils",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebStateUtils",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		marginInline15: {
			marginInlineStart: "xx6jrq6",
			marginInlineEnd: "xjx09e3",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginTop15: {
			marginTop: "xcxhlts",
			$$css: !0
		}
	};
	function c(e) {
		var t, n = r("WAWebFbtCommon")("Exit Group");
		return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) && ((t = o("WAWebStateUtils").unproxy(e).groupMetadata) == null ? void 0 : t.getParentGroupChat()) != null && (n = r("WAWebFbtCommon")("Exit Community")), n;
	}
	function d(e) {
		var t = e.content, n = e.icon, a = e.testId;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: [u.marginInline15, u.marginTop15],
			testid: a,
			children: [n, s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: t
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.getLeaveGroupString = c, l.SuspendedModalBodyParagraph = d;
}), 98);
