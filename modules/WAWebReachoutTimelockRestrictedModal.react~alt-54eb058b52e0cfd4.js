__d("WAWebReachoutTimelockRestrictedModal.react", [
	"fbt",
	"WATimeUtils",
	"WAWebClock",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebGetReachoutTimelockJob",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebReachoutTimelockEnforcementSheetInfoWamEvent",
	"WAWebReachoutTimelockUtils",
	"WAWebUnmuteNotificationsRefreshedIcon.react",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumReachoutTimelockAction",
	"WAWebWamEnumReachoutTimelockEventSource",
	"WAWebWdsPictoTimerFeedbackWarningIcon.react",
	"WDSIconIcBlock.react",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"react",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		timerContainer: {
			position: "x1n2onr6",
			$$css: !0
		},
		timerTextContainer: {
			position: "x10l6tqk",
			top: "x10508h5",
			$$css: !0
		},
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.enforcementEndTs, n = (t - o("WATimeUtils").unixTime() * 1e3) / 1e3, a = p(n < 0 ? 0 : n), i = a[0], l = a[1], s = m(!1);
		return d(function() {
			if (!(i < 0)) {
				var e = async function() {
					if (!s.current) {
						s.current = !0;
						try {
							await o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock();
							var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY);
							if (e != null) {
								var n = (e.time_enforcement_ends - o("WATimeUtils").unixTime() * 1e3) / 1e3;
								n <= 0 && window.clearInterval(t), l(n > 0 ? n : 0);
							} else window.clearInterval(t);
						} catch (e) {
							r("WAWebNoop")(e), window.clearInterval(t), l(0);
						} finally {
							s.current = !1;
						}
					}
				}, t = window.setInterval(function() {
					l(function(t) {
						return t <= 0 ? (e(), t) : t - 1;
					});
				}, 1e3);
				return function() {
					return window.clearInterval(t);
				};
			}
		}, [i]), u.jsx(o("WAWebFlex.react").FlexRow, {
			paddingBottom: 24,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: _.timerContainer,
				justify: "center",
				children: [u.jsx(o("WAWebWdsPictoTimerFeedbackWarningIcon.react").WdsPictoTimerFeedbackWarningIcon, {}), u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: _.timerTextContainer,
					children: u.jsx(r("WDSText.react"), {
						type: "Headline2",
						colorName: "persistentAlwaysBlack",
						children: o("WAWebClock").Clock.enforcementTimeLeftStr(i)
					})
				})]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		switch (e) {
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.WEB_COMPANION_ONLY: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.RESTRICT_ALL_COMPANIONS: return s._(
				/*BTDS*/
				""
			);
			default: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function h(e) {
		switch (e) {
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.RESTRICT_ALL_COMPANIONS: return s._(
				/*BTDS*/
				""
			);
			default: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function y(e) {
		switch (e) {
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_QUALITY: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ADULT: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ALCOHOL: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_ANIMALS: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DATING: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DRUGS: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_GAMBLING: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_HEALTHCARE: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_SUPPLEMENTS: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_TOBACCO: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType.BIZ_COMMERCE_VIOLATION_WEAPONS: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			default: return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getRestrictedAccountLearnMoreUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}
	}
	function C() {
		var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY), t = r("useVisibility")({ onVisible: function() {
			async function t() {
				if (e != null) {
					var t = e.state !== o("WAWebUserPrefsTypes").ReachoutTimelockState.VISIBLE, n = e.time_enforcement_ends, r = o("WATimeUtils").unixTime() * 1e3, a = r >= n;
					if (t && new (o("WAWebReachoutTimelockEnforcementSheetInfoWamEvent")).ReachoutTimelockEnforcementSheetInfoWamEvent({
						wasSheetSeenForFirstTime: !0,
						reachoutTimelockEventSource: o("WAWebWamEnumReachoutTimelockEventSource").REACHOUT_TIMELOCK_EVENT_SOURCE.BOTTOM_SHEET,
						reachoutTimelockAction: o("WAWebWamEnumReachoutTimelockAction").REACHOUT_TIMELOCK_ACTION.IMPRESSION
					}).commit(), a) {
						var i = r - n;
						new (o("WAWebReachoutTimelockEnforcementSheetInfoWamEvent")).ReachoutTimelockEnforcementSheetInfoWamEvent({
							timeSinceEnforcemeentEndAndSheetSeenMs: i,
							reachoutTimelockEventSource: o("WAWebWamEnumReachoutTimelockEventSource").REACHOUT_TIMELOCK_EVENT_SOURCE.BOTTOM_SHEET,
							reachoutTimelockAction: o("WAWebWamEnumReachoutTimelockAction").REACHOUT_TIMELOCK_ACTION.IMPRESSION
						}).commit();
					}
					t && (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY, babelHelpers.extends({}, e, { state: o("WAWebUserPrefsTypes").ReachoutTimelockState.VISIBLE })), o("WAWebCmd").Cmd.reachoutTimelockStateChange());
				}
			}
			t();
		} }), n = t[0];
		if (e == null) return null;
		var a = [
			{
				icon: u.jsx("span", {
					className: "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xhslqc4 x1120s5i",
					children: u.jsx(r("WDSIconIcCheck.react"), {
						width: 20,
						height: 18
					})
				}),
				text: function() {
					return h(e.enforcement_type);
				},
				testid: "reachout-timelock-restricted-modal-bullet-1"
			},
			{
				icon: u.jsx(r("WDSIconIcBlock.react"), {
					width: 24,
					height: 24,
					xstyle: _.bulletIcon
				}),
				text: function() {
					return s._(
						/*BTDS*/
						""
					);
				},
				testid: "reachout-timelock-restricted-modal-bullet-2"
			},
			{
				icon: u.jsx(o("WAWebUnmuteNotificationsRefreshedIcon.react").UnmuteNotificationsRefreshedIcon, {
					width: 24,
					height: 24,
					xstyle: _.bulletIcon
				}),
				text: function() {
					return s._(
						/*BTDS*/
						""
					);
				},
				testid: "reachout-timelock-restricted-modal-bullet-3"
			}
		];
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "reachout-timelock-restricted"
			},
			type: o("WAWebModal.react").ModalTheme.ReachoutTimelock,
			contentRef: n,
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "secondary",
			onOK: o("WAWebModalManager").closeModalManager,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					children: u.jsx(f, { enforcementEndTs: e.time_enforcement_ends })
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
						testid: "reachout-timelock-restricted-modal-title",
						children: g(e.enforcement_type)
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					paddingBottom: 16,
					paddingStart: 24,
					paddingEnd: 24,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						testid: "reachout-timelock-restricted-modal-subtitle",
						textAlign: "center",
						children: y(e.enforcement_type)
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					justify: "start",
					children: a.map(function(e) {
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
								xstyle: _.bulletIconContainer,
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
	C.displayName = C.name + " [from " + i.id + "]", l.ReachoutTimelockRestrictedModal = C;
}), 226);
