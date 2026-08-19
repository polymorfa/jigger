__d("WAWebNewsletterDSAReportDetailsDrawer.react", [
	"WAWebButton.react",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterReportDetailsComponents",
	"WAWebRemediationOptionSection.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = { paddingBlock36: {
		paddingTop: "xijc0j3",
		paddingBottom: "xq1608w",
		$$css: !0
	} }, d = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		btnContainer: {
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = a.onClickSeeOptions, s = a.onRequestReviewClick, m = a.report, _ = m.appeal.creationTime != null ? u.jsx(o("WAWebNewsletterReportDetailsComponents").ReportDetailsContentWithAppealInfo, { report: m }) : u.jsx(o("WAWebNewsletterReportDetailsComponents").ReportDetailsContent, { report: m });
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "newsletter-report-details-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-dsa-report-details"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterDSAReportsDrawerTitle(),
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: [
					d.container,
					c.paddingBlock36,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor32
				],
				children: [_, p(l, s, m)]
			}) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e, t, n) {
		return n.reportStatus !== "FAIL" ? null : o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled() === !0 ? n.appeal.creationTime != null && n.appeal.state !== "REJECT" ? null : u.jsx(r("WAWebRemediationOptionSection.react"), {
			buttonType: "primary",
			stretch: !1,
			onClickSeeOptions: e
		}) : n.appeal.state === "NOT_APPEALED" ? u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: [d.btnContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop24],
			children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				testid: "newsletter-report-request-review-button",
				stretch: !1,
				onClick: t,
				shadowOnHover: !1,
				children: o("WAWebCommonNewsletterIntegrityStrings").getRequestAppealButtonText()
			})
		}) : null;
	}
	l.default = m;
}), 98);
