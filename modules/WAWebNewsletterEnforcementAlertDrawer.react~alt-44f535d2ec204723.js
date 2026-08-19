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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onAppealClick, u = a.onBack, _ = a.onClick, f = a.onClose, h = o("useWAWebNewsletterEnforcementAlerts").useNewsletterEnforcementAlerts(i), y = h[0], C = h[1], b = h[2], v = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(i);
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_ALERT_LIST);
		}, []);
		var S = function() {
			r("WAWebEnforcementActionLogging").logChannelGuidelinesClick(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl());
		}, R, L = !1;
		switch (y) {
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.FETCHING:
				L = !0, R = c.jsx(o("WAWebFlex.react").FlexColumn, {
					justify: "center",
					align: "center",
					grow: 1,
					margin: 32,
					children: c.jsx(o("WAWebSpinner.react").Spinner, {
						color: "default",
						size: 40,
						stroke: 4
					})
				});
				break;
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.SUCCESS: {
				var E = r("compactMap")(b, function(e) {
					return g(e, _, v);
				}), k = E.length > 0;
				L = !k && o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.getAppeals().length === 0, R = L ? c.jsx(r("WAWebNoNewsletterAlertsDrawer.react"), {}) : c.jsxs(c.Fragment, { children: [
					k && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "secondaryLighter",
						paddingStart: 24,
						paddingTop: 24,
						testid: "newsletter-alerts-drawer-header",
						children: s._(
							/*BTDS*/
							""
						)
					}), E] }),
					c.jsxs(c.Fragment, { children: [o("WAWebNewsletterEnforcementAlertCollection").NewsletterEnforcementAlertCollection.getAppeals().length !== 0 && c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "secondaryLighter",
						paddingStart: 24,
						paddingTop: k ? 40 : 12,
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
								l(e);
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
								onClick: S,
								testid: "channel-guidelines-link",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})
					})] })
				] });
				break;
			}
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.ERROR:
				R = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
					center: !0,
					onClick: C,
					testid: "alerts-drawer-error-state",
					text: s._(
						/*BTDS*/
						""
					)
				});
				break;
			case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.OFFLINE:
				R = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
					center: !0,
					onClick: C,
					testid: "no-internet-while-loading-channel-alerts",
					text: o("WAWebCommonNewsletterStrings").getNoInternetConnectionText(),
					xstyle: [m.marginTop48, m.paddingTop48]
				});
				break;
		}
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "newsletter-multiple-alerts-drawer",
			theme: "gallery",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-enforcement-alert"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				focusBackOrCancel: !0,
				onBack: u,
				onCancel: f,
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				xstyle: L ? p.emptyStateFlex : void 0,
				children: R
			}) })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e, t, n) {
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
