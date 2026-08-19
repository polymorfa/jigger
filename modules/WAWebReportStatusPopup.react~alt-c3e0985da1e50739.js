__d("WAWebReportStatusPopup.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebName.react",
	"WAWebReportPopupBase.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
		href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
		testid: "learn-more-link",
		children: r("WAWebFbtCommon")("Learn more")
	});
	function d(e) {
		var t = e.contact, n = e.onCancel, r = e.onReport, a = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebFrontendContactGetters").getIsContactBlocked]), i = a[0], l = u.jsx(o("WAWebName.react").Name, { contact: t }), d = async function() {
			r(!1);
		}, m = async function() {
			r(!0);
		}, p = function() {
			return t.isBusiness ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", c)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", c)]
			);
		};
		return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
			hasAdditionalAction: !i,
			reportSubText: p(),
			additionalActionLabelText: o("WAWebReportPopupBase.react").getBlockLabelText(!1, l),
			additionalActionSubText: o("WAWebReportPopupBase.react").getBlockSubText({
				isBizBot3p: !1,
				isBusiness: t.isBusiness,
				isGroup: !1,
				isCommunityAnnouncementGroup: !1
			}),
			onSendReport: d,
			onSendReportAndAdditionalAction: m,
			onCancel: n,
			type: o("WAWebModal.react").ModalTheme.StatusReport
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
