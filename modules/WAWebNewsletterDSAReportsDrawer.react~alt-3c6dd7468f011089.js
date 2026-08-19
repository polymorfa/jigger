__d("WAWebNewsletterDSAReportsDrawer.react", [
	"fbt",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebCommonNewsletterStrings",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"WAWebNewsletterDSAReportsRow.react",
	"WAWebText.react",
	"react",
	"useWAWebNewsletterReports"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		emptyListContainer: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		reportListContainer: {
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		textCenter: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		paddingHoriz32: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function m() {
		var e = s._(
			/*BTDS*/
			""
		), t = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: [
				d.container,
				d.emptyListContainer,
				d.paddingHoriz32
			],
			children: [c.jsx(o("WAWebText.react").WAWebTextLarge, {
				testid: "reports-drawer-empty-state-title",
				marginBottom: 16,
				children: e
			}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "reports-drawer-empty-state-subtitle",
				xstyle: d.textCenter,
				children: t
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onReportClick, n = e.reports;
		return c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			testid: "newsletter-report-list",
			xstyle: [d.container, d.reportListContainer],
			children: c.jsx(o("WAWebFlex.react").FlexColumn, { children: n.map(function(e) {
				return c.jsx(r("WAWebNewsletterDSAReportsRow.react"), {
					report: e,
					onReportClick: t
				}, e.id.toString());
			}) })
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onClose, l = a.onReportClick, u = o("useWAWebNewsletterReports").useNewsletterReports(), d = u[0], _ = u[1], f = u[2], g;
		switch (d) {
			case o("useWAWebNewsletterReports").FetchReportStatus.FETCHING:
				g = c.jsx(o("WAWebEmptyState.react").Loading, {});
				break;
			case o("useWAWebNewsletterReports").FetchReportStatus.SUCCESS:
				g = f.length === 0 ? c.jsx(m, {}) : c.jsx(p, {
					reports: f,
					onReportClick: l
				});
				break;
			case o("useWAWebNewsletterReports").FetchReportStatus.ERROR:
				g = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
					center: !0,
					text: s._(
						/*BTDS*/
						""
					),
					testid: "reports-drawer-error-state",
					onClick: _
				});
				break;
			case o("useWAWebNewsletterReports").FetchReportStatus.OFFLINE:
				g = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
					center: !0,
					text: o("WAWebCommonNewsletterStrings").getNoInternetConnectionText(),
					testid: "reports-drawer-offline-state",
					onClick: _
				});
				break;
		}
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "newsletter-reports-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-dsa-reports"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterDSAReportsDrawerTitle(),
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: g })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
