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
	"react",
	"react-compiler-runtime"
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
		var n = o("react-compiler-runtime").c(21), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onBack, m = l.onClickSeeOptions, _ = l.onRequestReviewClick, f = l.report, g;
		n[3] !== f ? (g = f.appeal.creationTime != null ? u.jsx(o("WAWebNewsletterReportDetailsComponents").ReportDetailsContentWithAppealInfo, { report: f }) : u.jsx(o("WAWebNewsletterReportDetailsComponents").ReportDetailsContent, { report: f }), n[3] = f, n[4] = g) : g = n[4];
		var h = g, y;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (y = {
			surface: "unknown",
			viewName: "newsletter-dsa-report-details"
		}, n[5] = y) : y = n[5];
		var C;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebCommonNewsletterIntegrityStrings").getNewsletterDSAReportsDrawerTitle(), n[6] = C) : C = n[6];
		var b;
		n[7] !== s ? (b = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: C,
			onBack: s,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[7] = s, n[8] = b) : b = n[8];
		var v;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (v = [
			d.container,
			c.paddingBlock36,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor32
		], n[9] = v) : v = n[9];
		var S;
		n[10] !== m || n[11] !== _ || n[12] !== f ? (S = p(m, _, f), n[10] = m, n[11] = _, n[12] = f, n[13] = S) : S = n[13];
		var R;
		n[14] !== h || n[15] !== S ? (R = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: v,
			children: [h, S]
		}) }), n[14] = h, n[15] = S, n[16] = R) : R = n[16];
		var L;
		return n[17] !== i || n[18] !== b || n[19] !== R ? (L = u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "newsletter-report-details-drawer",
			tsNavigationData: y,
			children: [b, R]
		}), n[17] = i, n[18] = b, n[19] = R, n[20] = L) : L = n[20], L;
	}
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
