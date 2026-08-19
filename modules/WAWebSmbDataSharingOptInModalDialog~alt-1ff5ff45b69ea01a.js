__d("WAWebSmbDataSharingOptInModalDialog", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useRef, h = _.useState, y = {
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
	}, C = 3;
	function b() {
		return {
			viewStartTime: Date.now(),
			previousImpressionCount: o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
			previousOptOutImpressionCount: o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false ? o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount() : null
		};
	}
	function v(e, t, n) {
		e.smbDataSharingConsentScreenVersion = C, e.elapsedTimeMs = n === o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW ? 0 : Math.max(0, Date.now() - t.viewStartTime), e.previousImpressionCount = t.previousImpressionCount, t.previousOptOutImpressionCount != null && (e.previousOptOutImpressionCount = t.previousOptOutImpressionCount);
	}
	var S = function() {
		var e = s._(
			/*BTDS*/
			""
		);
		o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
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
	}, R = function() {
		var e = r("WAWebFbtCommon")("OK");
		o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
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
	}, L = function(n, r, a) {
		var t = new (o("WAWebSmbDataSharingConsentScreenWamEvent")).SmbDataSharingConsentScreenWamEvent();
		t.smbDataSharingConsentScreenVersion = 0, t.smbDataSharingConsentDisclosureVersion = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION, t.smbDataSharingConsentScreenType = n, t.smbDataSharingConsentScreenEntryPoint = r, a != null && v(t, a, n), t.commitAndWaitForFlush().catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["logDataSharingOptInInteraction: metric failed"])));
		});
	}, E = function(t, n, r) {
		var e = t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true ? o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_AGREE : o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE, a = t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true && o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : void 0;
		return o("WAWebSMBDataSharingSettingAction").setSMBDataSharingSettingAction(t, a).then(function() {
			return L(e, n, r);
		}).catch(S);
	};
	function k(e, t, n) {
		if (!o("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e)) return t();
		o("WAWebModalManager").ModalManager.open(p.jsx(M, {
			entrypoint: n,
			callback: t,
			chats: [e]
		}));
	}
	function I(e) {
		var t = e.cb, n = e.chats, r = e.entrypoint, a = e.target, i = n.some(function(e) {
			return o("WAWebCommonCTWADataSharing").shouldShowLabelDataSharingDialog(e, a);
		});
		if (!i) return t();
		o("WAWebModalManager").ModalManager.open(p.jsx(M, {
			entrypoint: r,
			callback: t,
			chats: n
		}));
	}
	function T(e, t, n) {
		if (!o("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)) return t();
		o("WAWebModalManager").ModalManager.open(p.jsx(M, {
			entrypoint: n,
			callback: t,
			chats: [e]
		}));
	}
	function D(e) {
		if (!o("WAWebCommonCTWADataSharing").shouldShowListsManagementDataSharingDialog()) return e();
		o("WAWebModalManager").ModalManager.open(p.jsx(M, {
			entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LISTS_MANAGEMENT,
			callback: e
		}));
	}
	function x(e) {
		var t = e.isEpd, n = e.useNewLayout, a = o("WAWebThemeContext").useIsDarkTheme(), i = a ? p.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : p.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		return i = p.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), p.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			p.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					y.paddingTop24,
					y.paddingBottom24,
					y.illustration
				],
				justify: "center",
				children: i
			}),
			p.jsx(o("WAWebFlex.react").FlexRow, { children: p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "20",
				color: "dark",
				weight: "medium",
				xstyle: [
					y.marginBottom12,
					y.title,
					n && y.centered_text
				],
				children: o("WAWebCTWAGatingUtils").isCTWA3pdDataSharingTitleChangeEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}) }),
			p.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: y.marginBottom12,
				children: p.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					color: n ? "secondary" : "dark",
					weight: "normal",
					xstyle: [y.paragraph, n && y.centered_text],
					children: [
						t ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						),
						" ",
						p.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			}),
			p.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: y.marginBottom12,
				children: [p.jsx(r("WDSIconIcVisibilityOff.react"), {
					height: 22,
					width: 22,
					xstyle: n ? y.iconColorNew : y.iconColor
				}), p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						y.marginStart24,
						y.paragraph,
						y.iconDescription
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
			p.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: y.marginBottom12,
				children: [p.jsx(r("WDSIconIcSettings.react"), { xstyle: n ? y.iconColorNew : y.iconColor }), p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						y.marginStart24,
						y.paragraph,
						y.iconDescription
					],
					children: s._(
						/*BTDS*/
						"",
						[s._param("settingsType", n ? "Data Sharing Settings." : "Ads Data Sharing Settings")]
					)
				})]
			}),
			n && p.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: y.marginBottom12,
				children: [p.jsx(r("WDSIconIcAccountCircle.react"), { xstyle: y.iconColorNew }), p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						y.marginStart24,
						y.paragraph,
						y.iconDescription
					],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			p.jsx(o("WAWebFlex.react").FlexRow, { children: p.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: n && y.centered_text,
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", p.jsx(o("WAWebExternalLink.react").ExternalLink, {
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
	x.displayName = x.name + " [from " + i.id + "]";
	var $ = function() {
		return p.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: y.spinnerWrapper,
			children: p.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 48,
				stroke: 6
			})
		});
	}, P = function(t, n) {
		var e = new (o("WAWebSmbDataSharingConsentScreenWamEvent")).SmbDataSharingConsentScreenWamEvent();
		e.smbDataSharingConsentScreenVersion = 0, e.smbDataSharingConsentDisclosureVersion = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION, e.smbDataSharingConsentScreenType = o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW, e.smbDataSharingConsentScreenEntryPoint = t, n != null && v(e, n, o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW), e.commitAndWaitForFlush().catch(function(e) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["logModalDialogView: metric failed"])));
		});
	};
	function N(e, t, n) {
		L(o("WAWebWamEnumSmbDataSharingConsentScreenType").SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_CANCEL, t, n), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff(), o("WAWebModalManager").ModalManager.close(), e();
	}
	function M(e) {
		var t = e.callback, a = e.chats, i = e.entrypoint, l = h(!1), u = l[0], m = l[1], _ = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled(), y = o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() || _, C = g(null);
		f(function() {
			var e = o("WAWebABProps").getABPropConfigValue("ctwa_3pd_data_sharing_additional_logging") ? b() : null;
			C.current = e;
			var t = o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount();
			if (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t + 1), o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
				var n = o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount();
				o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(n + 1);
			}
			P(i, e), o("WAWebCommonCTWADataSharing").markV2DisclosureSeen();
		}, [i]);
		var v = function(l) {
			var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
			m(!0), E(l, i, C.current).then(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (l === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true && a != null && a.length > 0) {
					var s = r("compactMap")(a, function(e) {
						return e.accountLid;
					}), u = s.filter(function(e) {
						return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
					}), m = u.map(function(e) {
						return r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
							accountLid: e,
							entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SMB_DATA_SHARING_CONSENT_SCREEN,
							globalDataSharingEntryPoint: i,
							isEnabled: !0
						});
					}), p = yield (d || (d = n("Promise"))).allSettled(m), _ = p.some(function(e) {
						return e.status === "rejected";
					});
					_ && (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Per-customer data sharing opt-in failed"]))).sendLogs("ctwa-per-customer-opt-in-fail"), R());
				} else l === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false && (!e && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled() && o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff());
				o("WAWebModalManager").ModalManager.close(), t();
			})).catch(S);
		}, L = function() {
			return v(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true);
		}, k = function() {
			return v(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false);
		}, I = function() {
			N(t, i, C.current);
		}, T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		), M = s._(
			/*BTDS*/
			""
		), w = s._(
			/*BTDS*/
			""
		);
		return p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-data-sharing-modal-dialog",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: L,
			okDisabled: u,
			cancelDisabled: u,
			okText: y ? T : D,
			onCancel: k,
			onOverlayClick: I,
			cancelText: y ? M : w,
			children: u ? p.jsx($, {}) : p.jsx(x, {
				useNewLayout: y,
				isEpd: _
			})
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	var w = {
		maybeShowOrderDataSharingDialog: k,
		maybeShowLabelDataSharingDialog: I,
		maybeShowChatEntryDataSharingDialog: T,
		maybeShowListsManagementDataSharingDialog: D,
		SmbDataSharingOptInModalDialog: M
	};
	l.default = w;
}), 226);
