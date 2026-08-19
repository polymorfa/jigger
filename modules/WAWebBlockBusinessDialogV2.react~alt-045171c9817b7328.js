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
		var t, n = e.blockEntryPoint, a = e.chat, i = e.onMount, l = e.reportId, c = e.withReport, h = a.contact, y = u.jsx(o("WAWebName.react").Name, { contact: h }), C = p(null), b = C[0], v = C[1], S = p(null), R = S[0], L = S[1], E = r("useWAWebToggle")(!1), k = E[0], I = E[1], T = (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(h.id, ["isBizBot3p"])) != null ? t : {}, D = T.isBizBot3p, x = D === void 0 ? !1 : D, $ = m(function() {
			var e = o("WAWebChatModelUtils").getSenderMsgCount(a);
			switch (e) {
				case 0: return o("WAWebBlockContants").BizOptOutFirstMessage.None;
				case 1: return o("WAWebBlockContants").BizOptOutFirstMessage.True;
				default: return o("WAWebBlockContants").BizOptOutFirstMessage.False;
			}
		}, [a]);
		d(function() {
			i != null && i();
		}, [i]);
		var P = function(t) {
			t !== b && (L(null), v(t));
		}, N = function() {
			o("WDSDialogBridge").closeWDSDialog();
		}, M = async function() {
			b != null && (await o("WAWebBlockContactAction").blockContact({
				contact: h,
				blockEntryPoint: n,
				bizOptOutArgs: {
					reason: b,
					reasonDescription: R,
					firstMessage: $,
					entryPoint: n
				}
			}), k && a && await o("WAWebSendSpamChatAction").sendReport({
				chat: a,
				spamFlow: o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(n)
			}), o("WDSDialogBridge").closeWDSDialog());
		}, w = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl(),
			testid: "learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), A = x ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), F = s._(
			/*BTDS*/
			"",
			[s._param("contact", y)]
		), O = x ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), B = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", w)]
		), W = s._(
			/*BTDS*/
			""
		), q = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: f.noWrap,
			href: o("WAWebMmSignalSharingUIUtils").getMmSignalSharingLearnMoreHCAURL(),
			testid: "mm-signal-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), U = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: f.noWrap,
			href: o("WAWebCTWAGatingUtils").getCTWALearnMoreHyperLinkForCCICompliantUI(),
			testid: "ctwa-data-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), V = function() {
			return o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", q)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", q)]
			);
		}, H = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", U)]
			);
		}, G = l != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled() ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(l, o("WAWebComplianceUtil").WA_CF_RES_OSA_ID, o("WAWebComplianceUtil").WA_CF_RES_OSA),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : null, z = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(a) != null && o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI(), j = (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(a.mmSignalSharingExpirationWindow), K = (function() {
			if (!z && !j) return null;
			if (z && j) {
				var e, t, n, o, i = (e = (t = r("WAWebConversionTupleCollection").get(a.id)) == null ? void 0 : t.timestamp) != null ? e : 0, l = a.mmSignalSharingExpirationWindow, s = (n = l == null || (o = l[l.length - 1]) == null ? void 0 : o.unixTime.server) != null ? n : 0;
				return i > s ? H() : V();
			}
			return z ? H() : V();
		})(), Q = c ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			columnGap: 8,
			xstyle: _.marginTop18,
			children: [u.jsx(r("WDSBaseCheckbox.react"), {
				value: k,
				onChange: I,
				id: "menu-icon-block",
				testid: "report-checkbox"
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDefault",
				testid: "report-business-title",
				children: W
			}), u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: _.marginTop6,
				testid: "biz-block-popup-report-subtext",
				children: B
			})] })]
		}) : null, X = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: r("WAWebFbtCommon")("Block"),
				onPress: function() {
					M();
				},
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline",
				disabled: b == null
			},
			tertiaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: N,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		});
		return u.jsxs(r("WDSDialog.react"), {
			closeButton: !1,
			description: F,
			footer: X,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: N,
			open: !0,
			size: "sm",
			testid: "block-business-popup",
			title: A,
			children: [
				G != null && u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom20,
					children: G
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: _.paddingBottom6,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: O
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": O,
					align: "stretch",
					children: g.map(function(e, t) {
						var n = e.getLabel, a = e.value, i = b === a, l = b == null;
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
									return P(a);
								},
								tabIndex: i || l && t === 0 ? 0 : -1,
								testid: "block-reason-" + String(a)
							}), u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								xstyle: f.radioLabel,
								children: n()
							})] })), a === o("WAWebBlockContants").BizOptOutReason.Other && b === o("WAWebBlockContants").BizOptOutReason.Other && u.jsx(r("WAWebWDSRichTextField.react"), {
								testid: "block-reason-description",
								initialText: R != null ? R : void 0,
								onValueChange: L,
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
				Q,
				K != null && u.jsxs(o("WAWebFlex.react").FlexRow, {
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
						children: K
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
