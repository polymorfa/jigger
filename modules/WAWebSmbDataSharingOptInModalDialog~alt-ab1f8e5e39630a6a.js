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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(44), n = e.isEpd, a = e.useNewLayout, i = o("WAWebThemeContext").useIsDarkTheme();
		i ? m.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : m.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		var l, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), t[0] = u) : u = t[0], l = u;
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				h.paddingTop24,
				h.paddingBottom24,
				h.illustration
			],
			justify: "center",
			children: l
		}), t[1] = c) : c = t[1];
		var d = a && h.centered_text, p;
		t[2] !== d ? (p = [
			h.marginBottom12,
			h.title,
			d
		], t[2] = d, t[3] = p) : p = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebCTWAGatingUtils").isCTWA3pdDataSharingTitleChangeEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[4] = _) : _ = t[4];
		var f;
		t[5] !== p ? (f = m.jsx(o("WAWebFlex.react").FlexRow, { children: m.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "20",
			color: "dark",
			weight: "medium",
			xstyle: p,
			children: _
		}) }), t[5] = p, t[6] = f) : f = t[6];
		var g = a ? "secondary" : "dark", y = a && h.centered_text, C;
		t[7] !== y ? (C = [h.paragraph, y], t[7] = y, t[8] = C) : C = t[8];
		var b;
		t[9] !== n ? (b = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[9] = n, t[10] = b) : b = t[10];
		var v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = m.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
			children: s._(
				/*BTDS*/
				""
			)
		}), t[11] = v) : v = t[11];
		var S;
		t[12] !== b || t[13] !== g || t[14] !== C ? (S = m.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: h.marginBottom12,
			children: m.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "16",
				color: g,
				weight: "normal",
				xstyle: C,
				children: [
					b,
					" ",
					v
				]
			})
		}), t[12] = b, t[13] = g, t[14] = C, t[15] = S) : S = t[15];
		var R = a ? h.iconColorNew : h.iconColor, L;
		t[16] !== R ? (L = m.jsx(r("WDSIconIcVisibilityOff.react"), {
			height: 22,
			width: 22,
			xstyle: R
		}), t[16] = R, t[17] = L) : L = t[17];
		var E;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (E = [
			h.marginStart24,
			h.paragraph,
			h.iconDescription
		], t[18] = E) : E = t[18];
		var k;
		t[19] !== a ? (k = m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			size: "16",
			color: "dark",
			xstyle: E,
			children: a ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[19] = a, t[20] = k) : k = t[20];
		var I;
		t[21] !== L || t[22] !== k ? (I = m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.marginBottom12,
			children: [L, k]
		}), t[21] = L, t[22] = k, t[23] = I) : I = t[23];
		var T = a ? h.iconColorNew : h.iconColor, D;
		t[24] !== T ? (D = m.jsx(r("WDSIconIcSettings.react"), { xstyle: T }), t[24] = T, t[25] = D) : D = t[25];
		var x;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (x = [
			h.marginStart24,
			h.paragraph,
			h.iconDescription
		], t[26] = x) : x = t[26];
		var $;
		t[27] !== a ? ($ = m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			size: "16",
			color: "dark",
			xstyle: x,
			children: s._(
				/*BTDS*/
				"",
				[s._param("settingsType", a ? "Data Sharing Settings." : "Ads Data Sharing Settings")]
			)
		}), t[27] = a, t[28] = $) : $ = t[28];
		var P;
		t[29] !== D || t[30] !== $ ? (P = m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.marginBottom12,
			children: [D, $]
		}), t[29] = D, t[30] = $, t[31] = P) : P = t[31];
		var N;
		t[32] !== a ? (N = a && m.jsxs(o("WAWebFlex.react").FlexRow, {
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
		}), t[32] = a, t[33] = N) : N = t[33];
		var M = a && h.centered_text, w;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", m.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebTosUrl").getMetaBizTosUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), t[34] = w) : w = t[34];
		var A;
		t[35] !== M ? (A = m.jsx(o("WAWebFlex.react").FlexRow, { children: m.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			xstyle: M,
			children: w
		}) }), t[35] = M, t[36] = A) : A = t[36];
		var F;
		return t[37] !== S || t[38] !== I || t[39] !== P || t[40] !== N || t[41] !== A || t[42] !== f ? (F = m.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			c,
			f,
			S,
			I,
			P,
			N,
			A
		] }), t[37] = S, t[38] = I, t[39] = P, t[40] = N, t[41] = A, t[42] = f, t[43] = F) : F = t[43], F;
	}
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
		var t = o("react-compiler-runtime").c(28), n = e.callback, a = e.chats, i = e.entrypoint, l = g(!1), u = l[0], d = l[1], p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled(), t[0] = p) : p = t[0];
		var h = p, y;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (y = o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() || h, t[1] = y) : y = t[1];
		var b = y, R = f(null), E, k;
		t[2] !== i ? (E = function() {
			var e = o("WAWebABProps").getABPropConfigValue("ctwa_3pd_data_sharing_additional_logging") ? C() : null;
			R.current = e;
			var t = o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount();
			if (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t + 1), o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled()) {
				var n = o("WAWebUserPrefsGeneral").getCTWADataSharingOptOutDisclosureShownCount();
				o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(n + 1);
			}
			$(i, e), o("WAWebCommonCTWADataSharing").markV2DisclosureSeen();
		}, k = [i], t[2] = i, t[3] = E, t[4] = k) : (E = t[3], k = t[4]), _(E, k);
		var I;
		t[5] !== n || t[6] !== a || t[7] !== i ? (I = function(t) {
			var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
			d(!0), L(t, i, R.current).then(async function() {
				if (t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true && a != null && a.length > 0) {
					var l = r("compactMap")(a, A), s = l.filter(w), u = s.map(function(e) {
						return r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
							accountLid: e,
							entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SMB_DATA_SHARING_CONSENT_SCREEN,
							globalDataSharingEntryPoint: i,
							isEnabled: !0
						});
					}), d = await Promise.allSettled(u), m = d.some(M);
					m && (o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Per-customer data sharing opt-in failed"]))).sendLogs("ctwa-per-customer-opt-in-fail"), S());
				} else t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false && (!e && o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled() && o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.startCoolOff());
				o("WAWebModalManager").ModalManager.close(), n();
			}).catch(v);
		}, t[5] = n, t[6] = a, t[7] = i, t[8] = I) : I = t[8];
		var T = I, N;
		t[9] !== T ? (N = function() {
			return T(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true);
		}, t[9] = T, t[10] = N) : N = t[10];
		var F = N, O;
		t[11] !== T ? (O = function() {
			return T(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false);
		}, t[11] = T, t[12] = O) : O = t[12];
		var B = O, W;
		t[13] !== n || t[14] !== i ? (W = function() {
			P(n, i, R.current);
		}, t[13] = n, t[14] = i, t[15] = W) : W = t[15];
		var q = W, U;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), t[16] = U) : U = t[16];
		var V = U, H;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (H = s._(
			/*BTDS*/
			""
		), t[17] = H) : H = t[17];
		var G = H, z;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
			/*BTDS*/
			""
		), t[18] = z) : z = t[18];
		var j = z, K;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
			/*BTDS*/
			""
		), t[19] = K) : K = t[19];
		var Q = K, X;
		t[20] !== u ? (X = u ? m.jsx(x, {}) : m.jsx(D, {
			useNewLayout: b,
			isEpd: h
		}), t[20] = u, t[21] = X) : X = t[21];
		var Y;
		return t[22] !== B || t[23] !== q || t[24] !== F || t[25] !== u || t[26] !== X ? (Y = m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-data-sharing-modal-dialog",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: F,
			okDisabled: u,
			cancelDisabled: u,
			okText: b ? V : G,
			onCancel: B,
			onOverlayClick: q,
			cancelText: b ? j : Q,
			children: X
		}), t[22] = B, t[23] = q, t[24] = F, t[25] = u, t[26] = X, t[27] = Y) : Y = t[27], Y;
	}
	function M(e) {
		return e.status === "rejected";
	}
	function w(e) {
		return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
	}
	function A(e) {
		return e.accountLid;
	}
	var F = {
		maybeShowOrderDataSharingDialog: E,
		maybeShowLabelDataSharingDialog: k,
		maybeShowChatEntryDataSharingDialog: I,
		maybeShowListsManagementDataSharingDialog: T,
		SmbDataSharingOptInModalDialog: N
	};
	l.default = F;
}), 226);
