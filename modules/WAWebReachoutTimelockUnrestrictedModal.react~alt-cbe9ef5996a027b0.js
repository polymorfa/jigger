__d("WAWebReachoutTimelockUnrestrictedModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebIcBusinessCenterIcon.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebReachoutTimelockUtils",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsTypes",
	"WAWebWdsPictoUserCheckFeedbackPositiveIcon.react",
	"WDSIconIcMood.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function d() {
		return [{
			icon: u.jsx(r("WDSIconIcMood.react"), { xstyle: c.bulletIcon }),
			text: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			},
			testid: "reachout-timelock-unrestricted-cpv-modal-bullet-1"
		}, {
			icon: u.jsx(r("WDSIconWdsIcChat.react"), { iconXstyle: c.bulletIcon }),
			text: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getMessagingBestPracticeUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			},
			testid: "reachout-timelock-unrestricted-cpv-modal-bullet-2"
		}];
	}
	function m() {
		return [{
			icon: u.jsx(r("WDSIconIcMood.react"), { xstyle: c.bulletIcon }),
			text: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getMessagingBestPracticeUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			},
			testid: "reachout-timelock-unrestricted-modal-bullet-1"
		}, {
			icon: u.jsx(o("WAWebIcBusinessCenterIcon.react").IcBusinessCenterIcon, {
				width: 24,
				height: 24,
				xstyle: c.bulletIcon
			}),
			text: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			},
			testid: "reachout-timelock-unrestricted-modal-bullet-2"
		}];
	}
	function p(e) {
		return e ? d() : m();
	}
	function _(e) {
		return e ? null : s._(
			/*BTDS*/
			""
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n = e.enforcementType, a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY), i = (t = n != null ? n : a == null ? void 0 : a.enforcement_type) != null ? t : o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.DEFAULT, l = o("WAWebReachoutTimelockUtils").isCPVEnforcement(i), d = p(l), m = _(l);
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "reachout-timelock-unrestricted"
			},
			type: o("WAWebModal.react").ModalTheme.ReachoutTimelock,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "secondary",
			onOK: o("WAWebModalManager").closeModalManager,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingBottom: 24,
					children: u.jsx(o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react").WdsPictoUserCheckFeedbackPositiveIcon, {})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingBottom: 16,
					paddingStart: 24,
					paddingEnd: 24,
					children: u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						textAlign: "center",
						testid: "reachout-timelock-unrestricted-modal-title",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				m != null && u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingBottom: 16,
					paddingStart: 24,
					paddingEnd: 24,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						textAlign: "center",
						testid: "reachout-timelock-unrestricted-modal-subtitle",
						children: m
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					justify: "start",
					children: d.map(function(e) {
						var t = e.icon, n = e.testid, a = e.text;
						return u.jsxs(o("WAWebFlex.react").FlexRow, {
							testid: n,
							paddingStart: 8,
							paddingTop: 4,
							paddingBottom: 4,
							marginBottom: 8,
							columnGap: 24,
							align: "center",
							children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
								justify: "center",
								align: "center",
								shrink: 0,
								xstyle: c.bulletIconContainer,
								children: t
							}), u.jsx(o("WAWebFlex.react").FlexColumn, {
								align: "center",
								alignSelf: "center",
								children: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: a()
								})
							})]
						}, n);
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.ReachoutTimelockUnrestrictedModal = f;
}), 226);
