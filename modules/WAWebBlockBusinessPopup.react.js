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
	"asyncToGeneratorRuntime",
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
		var a, i = t.blockEntryPoint, l = t.chat, u = t.onMount, d = t.reportId, y = t.withReport, C = l.contact, b = _(null), v = b[0], S = b[1], R = _(null), L = R[0], E = R[1], k = r("useWAWebToggle")(!1), I = k[0], T = k[1], D = (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(C.id, ["isBizBot3p"])) != null ? a : {}, x = D.isBizBot3p, $ = x === void 0 ? !1 : x, P = p(function() {
			var e = o("WAWebChatModelUtils").getSenderMsgCount(l);
			switch (e) {
				case 0: return o("WAWebBlockContants").BizOptOutFirstMessage.None;
				case 1: return o("WAWebBlockContants").BizOptOutFirstMessage.True;
				default: return o("WAWebBlockContants").BizOptOutFirstMessage.False;
			}
		}, [l]);
		m(function() {
			u != null && u();
		}, [u]);
		var N = function(t) {
			var e = t.text;
			E(e);
		}, M = function(t) {
			E(null), S(t);
		}, w = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				v != null && (yield o("WAWebBlockContactAction").blockContact({
					contact: C,
					blockEntryPoint: i,
					bizOptOutArgs: {
						reason: v,
						reasonDescription: L,
						firstMessage: P,
						entryPoint: i
					}
				}), I && l && (yield o("WAWebSendSpamChatAction").sendReport({
					chat: l,
					spamFlow: o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(i)
				})), o("WAWebModalManager").ModalManager.close());
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), A = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getControlsWhenMessagingBusinessFaqUrl(),
			testid: "learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), F = function() {
			return $ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, O = function(t) {
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
		}, B = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("contact", K)]
			);
		}, W = function() {
			return $ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, q = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", A)]
			);
		}, U = function() {
			return s._(
				/*BTDS*/
				""
			);
		}, V = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: g.noWrap,
			href: o("WAWebMmSignalSharingUIUtils").getMmSignalSharingLearnMoreHCAURL(),
			testid: "mm-signal-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), H = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: g.noWrap,
			href: o("WAWebCTWAGatingUtils").getCTWALearnMoreHyperLinkForCCICompliantUI(),
			testid: "ctwa-data-sharing-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), G = function() {
			return o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ? s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", V)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", V)]
			);
		}, z = function() {
			return s._(
				/*BTDS*/
				"",
				[s._param("link to learn more", H)]
			);
		}, j = function() {
			var t = q(), n = U();
			return c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				columnGap: 16,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop2, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
						children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
							onChange: T,
							checked: I,
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
		}, K = c.jsx(o("WAWebName.react").Name, { contact: C }), Q = F(), X = W(), Y = B(), J = d != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled() ? O(d) : null, Z = y ? j() : null, ee = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(l) != null && o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI(), te = (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens()) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(l.mmSignalSharingExpirationWindow), ne = (function() {
			if (!ee && !te) return null;
			if (ee && te) {
				var e, t, n, o, a = (e = (t = r("WAWebConversionTupleCollection").get(l.id)) == null ? void 0 : t.timestamp) != null ? e : 0, i = l.mmSignalSharingExpirationWindow, s = (n = i == null || (o = i[i.length - 1]) == null ? void 0 : o.unixTime.server) != null ? n : 0;
				return a > s ? z() : G();
			}
			return ee ? z() : G();
		})();
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "block-business",
				viewName: "block-business"
			},
			okDisabled: v == null,
			onOK: w,
			okText: r("WAWebFbtCommon")("Block"),
			onCancel: o("WAWebModalManager").closeModalManager,
			title: Q,
			testid: "block-business-popup",
			children: [
				J != null && c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom20,
					children: J
				}),
				c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom20,
					children: Y
				}),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					className: "x10b6aqq xso031l x1q0q8m5 x120ee7l",
					children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "muted",
						children: X
					})
				}),
				c.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": X,
					align: "stretch",
					children: h.map(function(e, t) {
						var n = e.getLabel, r = e.value, a = v === r, i = v == null;
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
										return M(r);
									}
								})
							}), v != null && r === o("WAWebBlockContants").BizOptOutReason.Other && v === o("WAWebBlockContants").BizOptOutReason.Other && c.jsx(o("WAWebRichTextField.react").RichTextField, {
								testid: "block-reason-description",
								focusOnMount: !0,
								hideFloatingLabel: !0,
								showRemaining: !0,
								value: L,
								maxLength: 30,
								onChange: N,
								placeholder: s._(
									/*BTDS*/
									""
								)
							})]
						}, r);
					})
				}),
				Z,
				ne != null && c.jsxs(o("WAWebText_DONOTUSE.react").TextParagraph, {
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
					}), ne]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
