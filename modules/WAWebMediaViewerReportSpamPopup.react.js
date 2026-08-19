__d("WAWebMediaViewerReportSpamPopup.react", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		section: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		checkboxLabel: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		},
		border: {
			paddingBottom: "x1ehvx8p",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.isBizBot3p, a = t.isBusiness, i = t.isGroup, l = t.onCancel, u = t.onReport, p = t.title, _ = d(!1), f = _[0], g = _[1];
		function h() {
			u(f);
		}
		var y = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			children: r("WAWebFbtCommon")("Learn more")
		}), C, b;
		return a ? (C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		)) : n ? (C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		)) : (C = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", y)]
		), b = s._(
			/*BTDS*/
			""
		)), c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "media-viewer-report-spam"
			},
			onOK: h,
			okButtonType: "solid-warning",
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: l,
			title: p,
			children: [c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.section, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSMargins.stylex").wdsMargins.marginEnd0, m.border), { children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return g(function(e) {
						return !e;
					});
				},
				checked: f,
				id: "menu-icon-report-spam"
			}), c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
				xstyle: m.checkboxLabel,
				htmlFor: "menu-icon-report-spam",
				children: b
			})] })), c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: m.section,
				color: "muted",
				children: C
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
