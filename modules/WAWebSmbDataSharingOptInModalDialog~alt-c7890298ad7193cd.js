__d("WAWebSmbDataSharingOptInModalDialog", [
	"fbt",
	"WALogger",
	"WASmaxInBizSettingsEnums",
	"WAWebABProps",
	"WAWebBusinessDataSharingIllustrationDarkIcon.react",
	"WAWebBusinessDataSharingIllustrationLightIcon.react",
	"WAWebCTWADataSharingModel",
	"WAWebCTWAGatingUtils",
	"WAWebCommonCTWADataSharing",
	"WAWebConfirmPopup.react",
	"WAWebCtwaPerCustomerDataSharingSync",
	"WAWebDataSharing3pdLidCollection",
	"WAWebDataSharingOptInCoolOffModel",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSMBDataSharingSettingAction",
	"WAWebSmbDataSharingConsentScreenWamEvent",
	"WAWebSpinner.react",
	"WAWebText_DONOTUSE.react",
	"WAWebThemeContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTosUrl",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumSmbDataSharingConsentScreenType",
	"WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
	"WAWebWdsSmbPictoArrowsTransferIcon.react",
	"WDSIconIcAccountCircle.react",
	"WDSIconIcSettings.react",
	"WDSIconIcVisibilityOff.react",
	"WDSText.react",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = {
		illustration: {
			width: "xh8yej3",
			$$css: !0
		},
		title: {
			lineHeight: "x1u7k74",
			$$css: !0
		},
		centered_text: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		paragraph: {
			lineHeight: "x1pujyh6",
			$$css: !0
		},
		iconDescription: {
			maxWidth: "x1i5r0r9",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		iconColorNew: {
			color: "xhslqc4",
			$$css: !0
		},
		spinnerWrapper: {
			height: "x1lgcfn3",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		marginStart24: {
			marginInlineStart: "xyxtwap",
			$$css: !0
		},
		paddingTop24: {
			paddingTop: "xl7twdi",
			$$css: !0
		},
		paddingBottom24: {
			paddingBottom: "xvg22vi",
			$$css: !0
		}
	}, y = 3;
	function C() {
		return {
			viewStartTime: Date.now(),
			previousImpressionCount: o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
			previousOptOutImpressionCount: o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false ? o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount() : null
		};
	}
	function b(e, t, n) {
		e.smbDataSharingConsentScreenVersion = y, e.elapsedTimeMs = n === o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW ? 0 : Math.max(0, Date.now() - t.viewStartTime), e.previousImpressionCount = t.previousImpressionCount, t.previousOptOutImpressionCount != null && (e.previousOptOutImpressionCount = t.previousOptOutImpressionCount);
	}
	var v = function() {
		var e = s._(
			/*BTDS*/
			""
		);
		o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
			action: {
				dismiss: !0,
				actionText: e
			},
			msg: s._(
				/*BTDS*/
				""
			),
			id: o("WAWebToast.react").genId()
		}));
	}, S = function() {
		var e = r("WAWebFbtCommon")("OK");
		o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
			action: {
				dismiss: !0,
				actionText: e
			},
			msg: s._(
				/*BTDS*/
				""
			),
			id: o("WAWebToast.react").genId()
		}));
	}, R = function(n, r, a) {
		var t = new (o("WAWebSmbDataSharingConsentScreenWamEvent")).SmbDataSharingConsentScreenWamEvent();
		t.smbDataSharingConsentScreenVersion = 0, t.smbDataSharingConsentDisclosureVersion = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION, t.smbDataSharingConsentScreenType = n, t.smbDataSharingConsentScreenEntryPoint = r, a != null && b(t, a, n), t.commitAndWaitForFlush().catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["logDataSharingOptInInteraction: metric failed"])));
		});
	}, L = function(t, n, r) {
		var e = t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true ? o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_AGREE : o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE, a = t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true && o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : void 0;
		return o("WAWebSMBDataSharingSettingAction").setSMBDataSharingSettingAction(t, a).then(function() {
			return R(e, n, r);
		}).catch(v);
	};
	function E(e, t, n) {
		if (!o("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e)) return t();
		o("WAWebModalManager").ModalManager.open(m.jsx(N, {
			entrypoint: n,
			callback: t,
			chats: [e]
		}));
	}
	function k(e) {
		var t = e.cb, n = e.chats, r = e.entrypoint, a = e.target, i = n.some(function(e) {
			return o("WAWebCommonCTWADataSharing").shouldShowLabelDataSharingDialog(e, a);
		});
		if (!i) return t();
		o("WAWebModalManager").ModalManager.open(m.jsx(N, {
			entrypoint: r,
			callback: t,
			chats: n
		}));
	}
	function I(e, t, n) {
		if (!o("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)) return t();
		o("WAWebModalManager").ModalManager.open(m.jsx(N, {
			entrypoint: n,
			callback: t,
			chats: [e]
		}));
	}
	function T(e) {
		if (!o("WAWebCommonCTWADataSharing").shouldShowListsManagementDataSharingDialog()) return e();
		o("WAWebModalManager").ModalManager.open(m.jsx(N, {
			entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LISTS_MANAGEMENT,
			callback: e
		}));
	}
	function D(e) {
		var t = e.isEpd, n = e.useNewLayout, a = o("WAWebThemeContext").useIsDarkTheme(), i = a ? m.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : m.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		return i = m.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), m.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			m.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					h.paddingTop24,
					h.paddingBottom24,
					h.illustration
				],
				justify: "center",
				children: i
			}),
			m.jsx(o("WAWebFlex.react").FlexRow, { children: m.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "20",
				color: "dark",
				weight: "medium",
				xstyle: [
					h.marginBottom12,
					h.title,
					n && h.centered_text
				],
				children: o("WAWebCTWAGatingUtils").isCTWA3pdDataSharingTitleChangeEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}) }),
			m.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: h.marginBottom12,
				children: m.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					color: n ? "secondary" : "dark",
					weight: "normal",
					xstyle: [h.paragraph, n && h.centered_text],
					children: [
						t ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						),
						" ",
						m.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			}),
			m.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.marginBottom12,
				children: [m.jsx(r("WDSIconIcVisibilityOff.react"), {
					height: 22,
					width: 22,
					xstyle: n ? h.iconColorNew : h.iconColor
				}), m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						h.marginStart24,
						h.paragraph,
						h.iconDescription
					],
					children: n ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				})]
			}),
			m.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.marginBottom12,
				children: [m.jsx(r("WDSIconIcSettings.react"), { xstyle: n ? h.iconColorNew : h.iconColor }), m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						h.marginStart24,
						h.paragraph,
						h.iconDescription
					],
					children: s._(
						/*BTDS*/
						"",
						[s._param("settingsType", n ? "Data Sharing Settings." : "Ads Data Sharing Settings")]
					)
				})]
			}),
			n && m.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.marginBottom12,
				children: [m.jsx(r("WDSIconIcAccountCircle.react"), { xstyle: h.iconColorNew }), m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						h.marginStart24,
						h.paragraph,
						h.iconDescription
					],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			m.jsx(o("WAWebFlex.react").FlexRow, { children: m.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: n && h.centered_text,
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", m.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebTosUrl").getMetaBizTosUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			}) })
		] });
	}
	D.displayName = D.name + " [from " + i.id + "]";
	var x = function() {
		return m.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.spinnerWrapper,
			children: m.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 48,
				stroke: 6
			})
		});
	}, $ = function(t, n) {
		var e = new (o("WAWebSmbDataSharingConsentScreenWamEvent")).SmbDataSharingConsentScreenWamEvent();
		e.smbDataSharingConsentScreenVersion = 0, e.smbDataSharingConsentDisclosureVersion = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION, e.smbDataSharingConsentScreenType = o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW, e.smbDataSharingConsentScreenEntryPoint = t, n != null && b(e, n, o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW), e.commitAndWaitForFlush().catch(function(e) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["logModalDialogView: metric failed"])));
		});
	};
	function P(e, t, n) {
		R(o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_CANCEL, t, n), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff(), o("WAWebModalManager").ModalManager.close(), e();
	}
	function N(e) {
		var t = e.callback, n = e.chats, a = e.entrypoint, i = g(!1), l = i[0], u = i[1], d = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled(), p = o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() || d, h = f(null);
		_(function() {
			var e = o("WAWebABProps").getABPropConfigValue("ctwa_3pd_data_sharing_additional_logging") ? C() : null;
			h.current = e;
			var t = o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount();
			if (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t + 1), o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
				var n = o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount();
				o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(n + 1);
			}
			$(a, e), o("WAWebCommonCTWADataSharing").markV2DisclosureSeen();
		}, [a]);
		var y = function(i) {
			var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
			u(!0), L(i, a, h.current).then(async function() {
				if (i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true && n != null && n.length > 0) {
					var l = r("compactMap")(n, function(e) {
						return e.accountLid;
					}), s = l.filter(function(e) {
						return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
					}), u = s.map(function(e) {
						return r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
							accountLid: e,
							entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SMB_DATA_SHARING_CONSENT_SCREEN,
							globalDataSharingEntryPoint: a,
							isEnabled: !0
						});
					}), d = await Promise.allSettled(u), m = d.some(function(e) {
						return e.status === "rejected";
					});
					m && (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Per-customer data sharing opt-in failed"]))).sendLogs("ctwa-per-customer-opt-in-fail"), S());
				} else i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false && (!e && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled() && o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff());
				o("WAWebModalManager").ModalManager.close(), t();
			}).catch(v);
		}, b = function() {
			return y(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true);
		}, R = function() {
			return y(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false);
		}, E = function() {
			P(t, a, h.current);
		}, k = s._(
			/*BTDS*/
			""
		), I = s._(
			/*BTDS*/
			""
		), T = s._(
			/*BTDS*/
			""
		), N = s._(
			/*BTDS*/
			""
		);
		return m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-data-sharing-modal-dialog",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: b,
			okDisabled: l,
			cancelDisabled: l,
			okText: p ? k : I,
			onCancel: R,
			onOverlayClick: E,
			cancelText: p ? T : N,
			children: l ? m.jsx(x, {}) : m.jsx(D, {
				useNewLayout: p,
				isEpd: d
			})
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	var M = {
		maybeShowOrderDataSharingDialog: E,
		maybeShowLabelDataSharingDialog: k,
		maybeShowChatEntryDataSharingDialog: I,
		maybeShowListsManagementDataSharingDialog: T,
		SmbDataSharingOptInModalDialog: N
	};
	l.default = M;
}), 226);
