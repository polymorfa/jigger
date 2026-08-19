__d("WAWebReportSpamPopup.react", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebReportGatingUtils",
	"WAWebText.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		section: {
			display: "x78zum5",
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		border: {
			paddingBottom: "x1ehvx8p",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		mdMetaText: {
			paddingTop: "x1qbkcu5",
			$$css: !0
		}
	}, p = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
		href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
		testid: "learn-more-link",
		children: r("WAWebFbtCommon")("Learn more")
	});
	function _(t) {
		var n = t.isCommunityAnnouncementGroup, a = n === void 0 ? !1 : n, i = t.onReport, l = t.showAdditionalActionCheckbox, u = l === void 0 ? !0 : l, _ = d(t.isMessage !== !0 && t.isCommunity !== !0), f = _[0], g = _[1], h = function() {
			g(!f);
		}, y = function() {
			if (!u || !f) {
				i();
				return;
			}
			if (t.isMessage === !0) {
				t.onReportBlock();
				return;
			}
			t.isCommunity === !0 || t.isGroupChat === !0 ? t.onReportExitClear() : t.onReportBlockClear();
		}, C, b, v, S;
		t.isMessage === !0 ? (C = s._(
			/*BTDS*/
			"",
			[s._param("message-sender", t.sender)]
		), b = t.isBizBot3p ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), o("WAWebReportGatingUtils").isUKOSAReportingEnabled() ? v = t.isBizBot3p ? s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", p)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", p)]
		) : v = t.isBizBot3p ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		)) : t.isCommunity ? (C = s._(
			/*BTDS*/
			""
		), b = r("WAWebFbtCommon")("Exit Community"), v = s._(
			/*BTDS*/
			""
		)) : t.isGroupChat === !0 ? (C = s._(
			/*BTDS*/
			""
		), b = a ? r("WAWebFbtCommon")("Exit Community") : s._(
			/*BTDS*/
			""
		), S = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			""
		)) : t.isBusiness === !0 ? (C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		), S = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			""
		)) : t.isBizBot3p === !0 ? (C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		), S = s._(
			/*BTDS*/
			""
		), v = o("WAWebReportGatingUtils").isUKOSAReportingEnabled() ? s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", p)]
		) : s._(
			/*BTDS*/
			""
		)) : (C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		), S = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			""
		));
		var R = c.jsx("div", {
			"data-testid": "menu-icon-report-spam",
			className: "x1rg5ohu x1okw0bk x1uuroth x19991ni x1d8287x xwji4o3 x1sa5p1d",
			children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: h,
				checked: f,
				id: "menu-icon-report-spam"
			})
		}), L = c.jsx("label", {
			htmlFor: "menu-icon-report-spam",
			className: "x98rzlu x19991ni x1d8287x xwji4o3",
			children: b
		}), E = u && b != null;
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "report-spam"
			},
			title: C,
			onOK: y,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "solid-warning",
			onCancel: t.onCancel,
			children: [
				E && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.section, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSMargins.stylex").wdsMargins.marginEnd0, m.border), { children: [R, L] })),
				c.jsx(o("WAWebText.react").WAWebTextMuted, {
					xstyle: m.mdMetaText,
					children: v
				}),
				c.jsx(o("WAWebText.react").WAWebTextMuted, {
					xstyle: m.mdMetaText,
					children: S
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
