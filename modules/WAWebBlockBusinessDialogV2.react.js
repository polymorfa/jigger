__d("WAWebBlockBusinessDialogV2.react", [
	"fbt",
	"WAWebBlockContactAction",
	"WAWebBlockContants",
	"WAWebBlocklistUtils",
	"WAWebCTWAGatingUtils",
	"WAWebChatModelUtils",
	"WAWebCommonCTWADataSharing",
	"WAWebComplianceUtil",
	"WAWebContactFormsUrl",
	"WAWebConversionTupleCollection",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMmSignalSharingGatingUtils",
	"WAWebMmSignalSharingUIUtils",
	"WAWebMmSignalSharingUserDisclosedInCollectionWindow",
	"WAWebName.react",
	"WAWebReportGatingUtils",
	"WAWebSendSpamChatAction",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebUseBusinessProfile.react",
	"WAWebWDSRichTextField.react",
	"WDSBaseCheckbox.react",
	"WDSBaseRadio.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSMargins.stylex",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useMemo, p = c.useState, _ = {
		marginTop18: {
			marginTop: "xhrpt6u",
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		}
	}, f = {
		deemphasized: {
			color: "xhslqc4",
			$$css: !0
		},
		noWrap: {
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		radioLabel: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		}
	}, g = [
		{
			value: o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded,
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: o("WAWebBlockContants").BizOptOutReason.NoSignUp,
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: o("WAWebBlockContants").BizOptOutReason.Spam,
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: o("WAWebBlockContants").BizOptOutReason.OffensiveMessages,
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		},
		{
			value: o("WAWebBlockContants").BizOptOutReason.Other,
			getLabel: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}
	];
	function h(e) {
		var t, a = e.blockEntryPoint, i = e.chat, l = e.onMount, c = e.reportId, h = e.withReport, y = i.contact, C = u.jsx(o("WAWebName.react").Name, { contact: y }), b = p(null), v = b[0], S = b[1], R = p(null), L = R[0], E = R[1], k = r("useWAWebToggle")(!1), I = k[0], T = k[1], D = (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(y.id, ["isBizBot3p"])) != null ? t : {}, x = D.isBizBot3p, $ = x === void 0 ? !1 : x, P = m(function() {
			var e = o("WAWebChatModelUtils").getSenderMsgCount(i);
			switch (e) {
				case 0: return o("WAWebBlockContants").BizOptOutFirstMessage.None;
				case 1: return o("WAWebBlockContants").BizOptOutFirstMessage.True;
				default: return o("WAWebBlockContants").BizOptOutFirstMessage.False;
			}
		}, [i]);
		d(function() {
			l != null && l();
		}, [l]);
		var N = function(t) {
			t !== v && (E(null), S(t));
		}, M = function() {
			o("WDSDialogBridge").closeWDSDialog();
		}, w = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				v != null && (yield o("WAWebBlockContactAction").blockContact({
					contact: y,
					blockEntryPoint: a,
					bizOptOutArgs: {
						reason: v,
						reasonDescription: L,
						firstMessage: P,
						entryPoint: a
					}
				}), I && i && (yield o("WAWebSendSpamChatAction").sendReport({
					chat: i,
					spamFlow: o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(a)
				})), o("WDSDialogBridge").closeWDSDialog());
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), A = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl(),
			testid: "learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), F = $ ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), O = s._(
			/*BTDS*/
			"",
			[s._param("contact", C)]
		), B = $ ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), W = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", A)]
		), q = s._(
			/*BTDS*/
			""
		), U = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: f.noWrap,
			href: o("WAWebMmSignalSharingUIUtils").getMmSignalSharingLearnMoreHCAURL(),
			testid: "mm-signal-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), V = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: f.noWrap,
			href: o("WAWebCTWAGatingUtils").getCTWALearnMoreHyperLinkForCCICompliantUI(),
			testid: "ctwa-data-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), H = function() {
			return o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", U)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", U)]
			);
		}, G = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", V)]
			);
		}, z = c != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled() ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(c, o("WAWebComplianceUtil").WA_CF_RES_OSA_ID, o("WAWebComplianceUtil").WA_CF_RES_OSA),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : null, j = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(i) != null && o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI(), K = (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(i.mmSignalSharingExpirationWindow), Q = (function() {
			if (!j && !K) return null;
			if (j && K) {
				var e, t, n, o, a = (e = (t = r("WAWebConversionTupleCollection").get(i.id)) == null ? void 0 : t.timestamp) != null ? e : 0, l = i.mmSignalSharingExpirationWindow, s = (n = l == null || (o = l[l.length - 1]) == null ? void 0 : o.unixTime.server) != null ? n : 0;
				return a > s ? G() : H();
			}
			return j ? G() : H();
		})(), X = h ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			columnGap: 8,
			xstyle: _.marginTop18,
			children: [u.jsx(r("WDSBaseCheckbox.react"), {
				value: I,
				onChange: T,
				id: "menu-icon-block",
				testid: "report-checkbox"
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				testid: "report-business-title",
				children: q
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: _.marginTop6,
				testid: "biz-block-popup-report-subtext",
				children: W
			})] })]
		}) : null, Y = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: r("WAWebFbtCommon")("Block"),
				onPress: function() {
					w();
				},
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline",
				disabled: v == null
			},
			tertiaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: M,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		});
		return u.jsxs(r("WDSDialog.react"), {
			closeButton: !1,
			description: O,
			footer: Y,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: M,
			open: !0,
			size: "sm",
			testid: "block-business-popup",
			title: F,
			children: [
				z != null && u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom20,
					children: z
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: _.paddingBottom6,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: B
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": B,
					align: "stretch",
					children: g.map(function(e, t) {
						var n = e.getLabel, a = e.value, i = v === a, l = v == null;
						return u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							children: [u.jsxs("label", babelHelpers.extends({}, {
								0: { className: "x6s0dn4 xfex06f x1ypdohk x78zum5 xz9dl7a xsag5q8" },
								1: { className: "x6s0dn4 xfex06f x1ypdohk x78zum5 xz9dl7a xsag5q8 x120ee7l x1q0q8m5 xso031l" }
							}[(a !== o("WAWebBlockContants").BizOptOutReason.Other) << 0], { children: [u.jsx(r("WDSBaseRadio.react"), {
								name: "block-reason-radio",
								value: String(a),
								checked: i,
								onChange: function() {
									return N(a);
								},
								tabIndex: i || l && t === 0 ? 0 : -1,
								testid: "block-reason-" + String(a)
							}), u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								xstyle: f.radioLabel,
								children: n()
							})] })), a === o("WAWebBlockContants").BizOptOutReason.Other && v === o("WAWebBlockContants").BizOptOutReason.Other && u.jsx(r("WAWebWDSRichTextField.react"), {
								testid: "block-reason-description",
								initialText: L != null ? L : void 0,
								onValueChange: E,
								maxLength: 30,
								maxCharacterCount: 30,
								placeholder: s._(
									/*BTDS*/
									""
								)
							})]
						}, String(a));
					})
				}),
				X,
				Q != null && u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "start",
					columnGap: 4,
					xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
					children: [u.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
						viewBox: {
							x: 1.67,
							y: -1,
							width: 22,
							height: 22
						},
						xstyle: f.deemphasized,
						displayInline: !0
					}), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: Q
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
