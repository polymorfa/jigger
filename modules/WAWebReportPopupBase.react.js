__d("WAWebReportPopupBase.react", [
	"fbt",
	"WAWebBlocklistUtils",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		marginInline6: {
			marginInlineStart: "xdzw4kq",
			marginInlineEnd: "xbelrpt",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	};
	function m(e, t) {
		return e === void 0 && (e = !1), e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("contact", t)]
		);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.isBizBot3p, n = e.isBusiness, r = e.isCommunityAnnouncementGroup, a = e.isGroup;
		return t ? s._(
			/*BTDS*/
			""
		) : n ? s._(
			/*BTDS*/
			""
		) : a && !r && o("WAWebBlocklistUtils").isRBIForGroupsEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = t.additionalActionLabelText, a = t.additionalActionSubText, i = t.hasAdditionalAction, l = t.onCancel, u = t.onSendReport, m = t.onSendReportAndAdditionalAction, p = t.reportSubText, _ = t.type, f = r("useWAWebToggle")(!1), g = f[0], h = f[1], y = function() {
			g ? m() : u();
		}, C = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: y,
			okText: r("WAWebFbtCommon")("Report"),
			okButtonType: "solid-warning",
			onCancel: l != null ? l : function() {
				return o("WAWebModalManager").ModalManager.close();
			},
			title: C,
			tsNavigationData: {
				surface: "report",
				viewName: "report"
			},
			type: _,
			children: [c.jsx(o("WAWebText.react").WAWebTextMuted, { children: p }), i && c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [d.marginInline6, o("WDSPaddings.stylex").wdsPaddings.paddingTop2],
						children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
							onChange: h,
							checked: g,
							id: "additional-action-checkbox",
							tabIndex: 0
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: o("WDSMargins.stylex").wdsMargins.marginStart12,
						children: [c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
							htmlFor: "additional-action-checkbox",
							weight: "medium",
							testid: "report-popup-additional-action-label-text",
							children: n
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: d.marginTop6,
							testid: "report-popup-additional-action-subtext",
							children: a
						})]
					}),
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12)))
				]
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.getBlockLabelText = m, l.getBlockSubText = p, l.ReportPopupBase = _;
}), 226);
