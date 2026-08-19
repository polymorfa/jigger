__d("WAWebNewsletterEnforcementAlertDrawer.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebCommonNewsletterStrings",
	"WAWebDSADateUtils",
	"WAWebDivider.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebEnforcementActionLogging",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebNewsletterAlertsRowComponent.react",
	"WAWebNewsletterEnforcementAlertCollection",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityIconUtils",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNoNewsletterAlertsDrawer.react",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWarningIcon.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"useWAWebNewsletterEnforcementAlerts",
	"useWAWebNewsletterIsSuspended"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useEffect, m = {
		marginTop48: {
			marginTop: "xx4vt8u",
			$$css: !0
		},
		paddingTop48: {
			paddingTop: "x4i7bpe",
			$$css: !0
		}
	}, p = {
		criticalColor: {
			color: "x30a034",
			$$css: !0
		},
		emptyStateFlex: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		}
	}, _ = c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
		iconXstyle: p.criticalColor,
		height: 24,
		width: 24
	});
	function f(t) {
		var n = o("react-compiler-runtime").c(37), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, _ = l.onAppealClick, f = l.onBack, C = l.onClick, b = l.onClose, v = o("useWAWebNewsletterEnforcementAlerts").useNewsletterEnforcementAlerts(u), S = v[0], R = v[1], L = v[2], E = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(u), k;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (k = [], n[3] = k) : k = n[3], d(h, k);
		var I = g, T, D = !1;
		e: switch (S) {
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.FETCHING: {
				D = !0;
				var x;
				n[4] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebFlex.react").FlexColumn, {
					justify: "center",
					align: "center",
					grow: 1,
					margin: 32,
					children: c.jsx(o("WAWebSpinner.react").Spinner, {
						color: "default",
						size: 40,
						stroke: 4
					})
				}), n[4] = x) : x = n[4], T = x;
				break e;
			}
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.SUCCESS: {
				var $;
				n[5] !== E || n[6] !== C ? ($ = function(t) {
					return y(t, C, E);
				}, n[5] = E, n[6] = C, n[7] = $) : $ = n[7];
				var P;
				n[8] !== L || n[9] !== $ ? (P = r("compactMap")(L, $), n[8] = L, n[9] = $, n[10] = P) : P = n[10];
				var N = P, M = N.length > 0, w;
				n[11] !== M ? (w = !M && o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.getAppeals().length === 0, n[11] = M, n[12] = w) : w = n[12], D = w;
				var A;
				n[13] !== N || n[14] !== M || n[15] !== _ || n[16] !== D ? (A = D ? c.jsx(r("WAWebNoNewsletterAlertsDrawer.react"), {}) : c.jsxs(c.Fragment, { children: [
					M && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "secondaryLighter",
						paddingStart: 24,
						paddingTop: 24,
						testid: "newsletter-alerts-drawer-header",
						children: s._(
							/*BTDS*/
							""
						)
					}), N] }),
					c.jsxs(c.Fragment, { children: [o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.getAppeals().length !== 0 && c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "secondaryLighter",
						paddingStart: 24,
						paddingTop: M ? 40 : 12,
						testid: "newsletter-alerts-appeals-section",
						children: s._(
							/*BTDS*/
							""
						)
					}), o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.getAppeals().map(function(e, t) {
						var n, a, i;
						return c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
							icon: o("WAWebNewsletterIntegrityIconUtils").getBadgeIconForOutcomeListBasedOnAppealState(e.appealState),
							onClick: function() {
								_(e);
							},
							subtitle: o("WAWebNewsletterIntegrityUtils").getOutcomeListSubtitle((n = e.appealCreationTime) != null ? n : 0),
							testId: "newsletter-alerts-appeal-status-row-" + t,
							title: o("WAWebNewsletterIntegrityUtils").getOutcomeListTitle(e.appealState, e.enforcementType, ((a = e.violatingContentData) == null ? void 0 : a.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || ((i = e.enforcementExtraData) == null || (i = i.enforcementTargetData) == null ? void 0 : i.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS)
						}, t);
					})] }),
					o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() && c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebDivider.react"), { direction: "horizontal" }), c.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "center",
						paddingTop: 24,
						testid: "channel-guidelines-section",
						children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "center",
							children: [c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							}), c.jsx(r("WDSTextualLink.react"), {
								onClick: I,
								testid: "channel-guidelines-link",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})
					})] })
				] }), n[13] = N, n[14] = M, n[15] = _, n[16] = D, n[17] = A) : A = n[17], T = A;
				break e;
			}
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.ERROR: {
				var F;
				n[18] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
					/*BTDS*/
					""
				), n[18] = F) : F = n[18];
				var O;
				n[19] !== R ? (O = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
					center: !0,
					onClick: R,
					testid: "alerts-drawer-error-state",
					text: F
				}), n[19] = R, n[20] = O) : O = n[20], T = O;
				break e;
			}
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.OFFLINE: {
				var B, W;
				n[21] === Symbol.for("react.memo_cache_sentinel") ? (B = o("WAWebCommonNewsletterStrings").getNoInternetConnectionText(), W = [m.marginTop48, m.paddingTop48], n[21] = B, n[22] = W) : (B = n[21], W = n[22]);
				var q;
				n[23] !== R ? (q = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
					center: !0,
					onClick: R,
					testid: "no-internet-while-loading-channel-alerts",
					text: B,
					xstyle: W
				}), n[23] = R, n[24] = q) : q = n[24], T = q;
			}
		}
		var U;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (U = {
			surface: "unknown",
			viewName: "newsletter-enforcement-alert"
		}, n[25] = U) : U = n[25];
		var V;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (V = o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(), n[26] = V) : V = n[26];
		var H;
		n[27] !== f || n[28] !== b ? (H = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			focusBackOrCancel: !0,
			onBack: f,
			onCancel: b,
			title: V,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[27] = f, n[28] = b, n[29] = H) : H = n[29];
		var G = D ? p.emptyStateFlex : void 0, z;
		n[30] !== T || n[31] !== G ? (z = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			xstyle: G,
			children: T
		}) }), n[30] = T, n[31] = G, n[32] = z) : z = n[32];
		var j;
		return n[33] !== i || n[34] !== H || n[35] !== z ? (j = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "newsletter-multiple-alerts-drawer",
			theme: "gallery",
			tsNavigationData: U,
			children: [H, z]
		}), n[33] = i, n[34] = H, n[35] = z, n[36] = j) : j = n[36], j;
	}
	function g() {
		r("WAWebEnforcementActionLogging").logChannelGuidelinesClick(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl());
	}
	function h() {
		r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_ALERT_LIST);
	}
	function y(e, t, n) {
		var a, i, l;
		if ((e.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION || e.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE) && ((a = e.appeal) == null ? void 0 : a.appealState) === "SUCCESS" || !e.isValidAlertToRender()) return null;
		switch (e.enforcementType) {
			case o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION: return c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
				icon: _,
				onClick: function() {
					return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.PROFILE_PICTURE_DELETION_SCREEN);
				},
				subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
				testId: "newsletter-alerts-profile-picture-deletion-row",
				title: s._(
					/*BTDS*/
					""
				)
			}, e.enforcementId);
			case o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE: return c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
				icon: _,
				onClick: function() {
					return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.ADMIN_PROFILE_DETAILED_SCREEN);
				},
				subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
				testId: "newsletter-alerts-admin-profile-row",
				title: o("WAWebCommonNewsletterIntegrityStrings").getAdminProfileRemovedTextForList()
			}, e.enforcementId);
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
				var u = e.countryCodes;
				return u == null ? null : c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
					icon: _,
					onClick: function() {
						return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN);
					},
					subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
					testId: "newsletter-alerts-geosuspension-row",
					title: o("WAWebCommonNewsletterIntegrityStrings").getGeosuspensionStringForChannelAlertsDrawer(u)
				}, e.enforcementId);
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM: {
				var d = e.countryCodes;
				return d == null || e.targetMsgMapForEvidence == null ? null : c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
					icon: _,
					onClick: function() {
						return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.GEOSUSPEND_INFORM_SCREEN);
					},
					subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
					testId: "newsletter-alerts-geosuspension-inform-row",
					title: o("WAWebCommonNewsletterIntegrityStrings").getGeosuspensionStringForChannelAlertsDrawer(d)
				}, e.enforcementId);
			}
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND: return c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
				icon: _,
				onClick: function() {
					return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.SUSPENDED_DETAILED_SCREEN);
				},
				subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
				testId: "newsletter-alerts-suspension-alert-row",
				title: s._(
					/*BTDS*/
					""
				)
			}, e.enforcementId);
			case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM: return ((i = (l = e.targetMsgMapForEvidence) == null ? void 0 : l.size) != null ? i : 0) > 0 ? c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
				icon: _,
				onClick: function() {
					return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.SUSPEND_INFORM_SCREEN);
				},
				subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
				testId: "newsletter-alerts-suspension-alert-row-2",
				title: s._(
					/*BTDS*/
					""
				)
			}, e.enforcementId) : null;
			case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG: return !n && e.targetMsgMapForEvidence != null ? c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
				icon: _,
				onClick: function() {
					return t(e, o("WAWebCommonNewsletterEnums").AlertScreen.VIOLATING_MESSAGES_SCREEN);
				},
				subtitle: o("WAWebDSADateUtils").getSectionSubtitle(e.enforcementCreationTime.toString()),
				testId: "newsletter-alerts-hidden-channel-row",
				title: s._(
					/*BTDS*/
					""
				)
			}, e.enforcementId) : null;
		}
	}
	l.default = f;
}), 226);
