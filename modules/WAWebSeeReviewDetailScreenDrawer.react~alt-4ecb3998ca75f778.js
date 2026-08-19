__d("WAWebSeeReviewDetailScreenDrawer.react", [
	"fbt",
	"WAWebAppealOutcomeHeader.react",
	"WAWebClock",
	"WAWebCommonNewsletterEnums",
	"WAWebDSADateUtils",
	"WAWebDisplayType",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebEnforcementStatusThumbnail.react",
	"WAWebFlex.react",
	"WAWebGalleryMsg.react",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebMsgCollection",
	"WAWebNewsletterAdminProfileDetailsView.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useEffect, m = {
		paddingBlock36: {
			paddingTop: "xijc0j3",
			paddingBottom: "xq1608w",
			$$css: !0
		},
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		}
	}, p = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		adminProfileName: {
			fontSize: "x1jchvi3",
			fontWeight: "xfjzk2p",
			lineHeight: "x17mssa0",
			color: "x14ug900",
			$$css: !0
		}
	};
	function _(t) {
		var n, a, i, l = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), _ = u.chat, g = u.currentEnforcementAppeal, h = u.onBack;
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.SEE_REVIEW_DETAILS_SCREEN);
		}, []);
		var y = g.msgData != null ? o("WAWebMsgCollection").MsgCollection.gadd(g.msgData) : null, C = o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSAWhatYouNeedToKnowInfoSection(o("WAWebNewsletterIntegrityDrawerUiComponents.react").getDecisionModalCategoryForEnforcementSource(g.enforcementSource)), b = (n = g.enforcementExtraData) == null ? void 0 : n.adminProfileData, v = b == null ? void 0 : b.name, S = g.appealState !== "CONTENT_UNAVAILABLE" && (g.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG || g.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM || g.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM) && g.msgData != null, R = ((a = g.violatingContentData) == null ? void 0 : a.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || ((i = g.enforcementExtraData) == null || (i = i.enforcementTargetData) == null ? void 0 : i.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: l,
			testid: "newsletter-appeal-outcome-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-review-detail"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: h,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: [
						p.container,
						m.paddingBlock36,
						m.paddingInline48,
						o("WDSMargins.stylex").wdsMargins.marginBottom0
					],
					children: [
						c.jsx(r("WAWebAppealOutcomeHeader.react"), { appealOutcome: g.appealState }),
						c.jsx(f, { currentEnforcementAppeal: g }),
						g.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE && b != null && v != null && v !== "" && c.jsx("div", {
							className: "xl7twdi x12xbjc7",
							children: c.jsx(r("WAWebNewsletterAdminProfileDetailsView.react"), {
								nameXstyle: p.adminProfileName,
								size: 96,
								newsletterAdminProfile: {
									id: b.id,
									name: v,
									pictureId: b.pictureId,
									pictureDirectPath: b.pictureDirectPath
								}
							})
						}),
						g.appealState === "REJECT" && c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: C }, C.key)
					]
				}), S && y != null && c.jsxs(r("WAWebGalleryMsg.react"), { children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: [
						m.marginBottom10,
						o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
						o("WDSMargins.stylex").wdsMargins.marginTop8
					],
					justify: "all",
					align: "center",
					children: [o("WAWebNewsletterIntegrityDrawerUiComponents.react").getMessageTitleForViolatingMessage(_), c.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						grow: 1,
						shrink: 0,
						justify: "end",
						children: c.jsx(o("WAWebText.react").WAWebTextSmall, { children: o("WAWebClock").Clock.relativeStr(y.t) })
					})]
				}), R ? c.jsx(r("WAWebEnforcementStatusThumbnail.react"), { msg: y }) : c.jsx(r("WAWebMessageWrapper.react"), {
					msg: y,
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS,
					position: o("WAWebMessagePosition").MsgPosition.MID,
					errorBoundaryName: "see-review-detail-screen-drawer"
				})] }, y.id.toString())]
			}) })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n, r = e.currentEnforcementAppeal, a = ((t = r.violatingContentData) == null ? void 0 : t.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || ((n = r.enforcementExtraData) == null || (n = n.enforcementTargetData) == null ? void 0 : n.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
		return c.jsxs(c.Fragment, { children: [
			c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
					weight: "medium",
					xstyle: p.header,
					testid: "newsletter-appeal-outcome-title",
					padding: 12,
					alignSelf: "center",
					color: "primary",
					children: o("WAWebNewsletterIntegrityUtils").getTitleBasedOnEnforcementTypeAndOutcome(r.appealState, r.enforcementType, a)
				})
			}),
			c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					testid: "newsletter-appeal-outcome-body",
					padding: 12,
					color: "secondary",
					xstyle: p.header,
					children: o("WAWebNewsletterIntegrityUtils").getHeaderBodyTextBasedOnEnforcementTypeAndOutcome({
						appealOutcome: r.appealState,
						enforcementType: r.enforcementType,
						countries: r.countryCode,
						enforcementViolationCategory: r.enforcementViolationCategory,
						isStatusContent: a
					})
				})
			}),
			c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "secondaryLighter",
					padding: 8,
					testid: "newsletter-appeal-outcome-creation-date",
					xstyle: p.header,
					children: s._(
						/*BTDS*/
						"",
						[s._param("appeal_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(r.appealCreationTime))]
					)
				})
			})
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
