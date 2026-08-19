__d("WAWebNewsletterDSAReportsRow.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebDSADateUtils",
	"WAWebNewsletterIntegrityUtils",
	"WAWebSettingsDocumentIcon.react",
	"WAWebText.react",
	"WDSIconIcArrowForward.react",
	"WDSIconIcSchedule.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = e.onReportClick, n = e.report, a = {
			width: 24,
			height: 24,
			directional: !0,
			iconXstyle: c.icon
		}, i = n.reportStatus === "PENDING" || n.appeal.state === "PENDING" ? r("WDSIconIcSchedule.react") : o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon, l = u.jsx(i, babelHelpers.extends({}, a)), d = u.jsx(r("WDSIconIcArrowForward.react"), babelHelpers.extends({}, a)), m = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			testid: "newsletter-report-status",
			textWrap: "wrap",
			children: u.jsx("span", {
				className: "report-id",
				"data-testid": n.id.toString(),
				children: o("WAWebNewsletterIntegrityUtils").getReportStatusString(n)
			})
		}), p = u.jsxs(u.Fragment, { children: [n.newsletterName != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
			textWrap: "wrap",
			children: n.newsletterName
		}), u.jsx(o("WAWebText.react").WAWebTextMuted, {
			testid: "newsletter-report-last-update",
			textWrap: "wrap",
			children: n.appeal.creationTime != null ? s._(
				/*BTDS*/
				"",
				[s._param("appeal_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(n.appeal.creationTime))]
			) : s._(
				/*BTDS*/
				"",
				[s._param("report_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(n.creationTime))]
			)
		})] });
		return u.jsx(r("WAWebCellV2.react"), {
			testid: "newsletter-report-row",
			size: "large",
			border: "bottom-full",
			detailLeft: l,
			detailLeftXStyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
			primary: m,
			secondary: p,
			detailRight: d,
			onClick: function() {
				return t(n);
			}
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
