__d("WAWebReportGroupPopup.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebReportPopupBase.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		});
		return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
			hasAdditionalAction: !e.chat.isReadOnly,
			reportSubText: s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", t)]
			),
			additionalActionLabelText: r("WAWebFbtCommon")("Leave Group"),
			additionalActionSubText: s._(
				/*BTDS*/
				""
			),
			onSendReport: e.onReport,
			onSendReportAndAdditionalAction: e.onReportAndLeave,
			onCancel: o("WAWebModalManager").closeModalManager
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
