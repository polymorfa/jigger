__d("WAWebBlockBusinessPopup.react", [
	"fbt",
	"WAWebBlockContactAction",
	"WAWebBlockContants",
	"WAWebBlocklistUtils",
	"WAWebCTWAGatingUtils",
	"WAWebChatModelUtils",
	"WAWebCheckBox.react",
	"WAWebCommonCTWADataSharing",
	"WAWebComplianceUtil",
	"WAWebConfirmPopup.react",
	"WAWebContactFormsUrl",
	"WAWebConversionTupleCollection",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMmSignalSharingGatingUtils",
	"WAWebMmSignalSharingUIUtils",
	"WAWebMmSignalSharingUserDisclosedInCollectionWindow",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebRadio.react",
	"WAWebReportGatingUtils",
	"WAWebRichTextField.react",
	"WAWebSendSpamChatAction",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUseBusinessProfile.react",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = { marginTop6: {
		marginTop: "x1k70j0n",
		$$css: !0
	} }, g = {
		border: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		deemphasizedColor: {
			color: "xhslqc4",
			$$css: !0
		},
		noWrap: {
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	}, h = [
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
	function y(t) {
		var n, a = t.blockEntryPoint, i = t.chat, l = t.onMount, u = t.reportId, d = t.withReport, y = i.contact, C = _(null), b = C[0], v = C[1], S = _(null), R = S[0], L = S[1], E = r("useWAWebToggle")(!1), k = E[0], I = E[1], T = (n = o("WAWebUseBusinessProfile.react").useBusinessProfile(y.id, ["isBizBot3p"])) != null ? n : {}, D = T.isBizBot3p, x = D === void 0 ? !1 : D, $ = p(function() {
			var e = o("WAWebChatModelUtils").getSenderMsgCount(i);
			switch (e) {
				case 0: return o("WAWebBlockContants").BizOptOutFirstMessage.None;
				case 1: return o("WAWebBlockContants").BizOptOutFirstMessage.True;
				default: return o("WAWebBlockContants").BizOptOutFirstMessage.False;
			}
		}, [i]);
		m(function() {
			l != null && l();
		}, [l]);
		var P = function(t) {
			var e = t.text;
			L(e);
		}, N = function(t) {
			L(null), v(t);
		}, M = async function() {
			b != null && (await o("WAWebBlockContactAction").blockContact({
				contact: y,
				blockEntryPoint: a,
				bizOptOutArgs: {
					reason: b,
					reasonDescription: R,
					firstMessage: $,
					entryPoint: a
				}
			}), k && i && await o("WAWebSendSpamChatAction").sendReport({
				chat: i,
				spamFlow: o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(a)
			}), o("WAWebModalManager").ModalManager.close());
		}, w = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl(),
			testid: "learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), A = function() {
			return x ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, F = function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(t, o("WAWebComplianceUtil").WA_CF_RES_OSA_ID, o("WAWebComplianceUtil").WA_CF_RES_OSA),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}, O = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("contact", j)]
			);
		}, B = function() {
			return x ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, W = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", w)]
			);
		}, q = function() {
			return s._(
				/*BTDS*/
				""
			);
		}, U = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: g.noWrap,
			href: o("WAWebMmSignalSharingUIUtils").getMmSignalSharingLearnMoreHCAURL(),
			testid: "mm-signal-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), V = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: g.noWrap,
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
		}, z = function() {
			var t = W(), n = q();
			return c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				columnGap: 16,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop2, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
						children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
							onChange: I,
							checked: k,
							id: "menu-icon-block",
							testid: "report-checkbox"
						})
					}),
					c.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: o("WDSMargins.stylex").wdsMargins.marginTop4,
						children: [c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
							htmlFor: "menu-icon-block",
							weight: "medium",
							children: n
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: f.marginTop6,
							testid: "biz-block-popup-report-subtext",
							children: t
						})]
					}),
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12)))
				]
			});
		}, j = c.jsx(o("WAWebName.react").Name, { contact: y }), K = A(), Q = B(), X = O(), Y = u != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled() ? F(u) : null, J = d ? z() : null, Z = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(i) != null && o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI(), ee = (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(i.mmSignalSharingExpirationWindow), te = (function() {
			if (!Z && !ee) return null;
			if (Z && ee) {
				var e, t, n, o, a = (e = (t = r("WAWebConversionTupleCollection").get(i.id)) == null ? void 0 : t.timestamp) != null ? e : 0, l = i.mmSignalSharingExpirationWindow, s = (n = l == null || (o = l[l.length - 1]) == null ? void 0 : o.unixTime.server) != null ? n : 0;
				return a > s ? G() : H();
			}
			return Z ? G() : H();
		})();
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "block-business",
				viewName: "block-business"
			},
			okDisabled: b == null,
			onOK: M,
			okText: r("WAWebFbtCommon")("Block"),
			onCancel: o("WAWebModalManager").closeModalManager,
			title: K,
			testid: "block-business-popup",
			children: [
				Y != null && c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom20,
					children: Y
				}),
				c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom20,
					children: X
				}),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					className: "x10b6aqq xso031l x1q0q8m5 x120ee7l",
					children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "muted",
						children: Q
					})
				}),
				c.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": Q,
					align: "stretch",
					children: h.map(function(e, t) {
						var n = e.getLabel, r = e.value, a = b === r, i = b == null;
						return c.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							children: [c.jsx(o("WAWebFlex.react").FlexRow, {
								xstyle: g.border,
								children: c.jsx(o("WAWebRadio.react").RadioWithLabel, {
									testid: "block-reason-" + String(r),
									name: "block-reason-radio",
									value: String(r),
									label: n(),
									checked: a,
									tabIndex: a || i && t === 0 ? 0 : -1,
									onChange: function() {
										return N(r);
									}
								})
							}), b != null && r === o("WAWebBlockContants").BizOptOutReason.Other && b === o("WAWebBlockContants").BizOptOutReason.Other && c.jsx(o("WAWebRichTextField.react").RichTextField, {
								testid: "block-reason-description",
								focusOnMount: !0,
								hideFloatingLabel: !0,
								showRemaining: !0,
								value: R,
								maxLength: 30,
								onChange: P,
								placeholder: s._(
									/*BTDS*/
									""
								)
							})]
						}, r);
					})
				}),
				J,
				te != null && c.jsxs(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop20, g.deemphasizedColor],
					children: [c.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
						viewBox: {
							x: 1.67,
							y: -1,
							width: 22,
							height: 22
						},
						xstyle: g.deemphasizedColor,
						displayInline: !0
					}), te]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
