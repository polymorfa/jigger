__d("WAWebCappingWarningDetailModal.react", [
	"fbt",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastHomeFlowLoadable",
	"WAWebCappingOTERequestModalLoadable.react",
	"WAWebCappingUsageModalLoadable.react",
	"WAWebCappingWarningDetailModalLoadable.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebIndividualNewChatMessageCappingLimitUtils",
	"WAWebIndividualNewChatMessageCappingLogEvents",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSIconIcBlock.react",
	"WDSIconIcCheck.react",
	"WDSIconIcDomain.react",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSIconWdsIcChat.react",
	"WDSIllustrationWdsPictoMessageReportFeedbackWarning.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function m() {
		var e, t, n = o("react-compiler-runtime").c(39), a = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingWarningLevel(), i = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData(), l = (e = i == null ? void 0 : i.used_quota) != null ? e : 0, m = (t = i == null ? void 0 : i.total_quota) != null ? t : 0, f;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebMobilePlatforms").isSMB(), n[0] = f) : f = n[0];
		var y = f, v;
		n[1] !== y ? (v = y && o("WAWebIndividualNewChatMessageCappingLimitUtils").isOTEEligible(), n[1] = y, n[2] = v) : v = n[2];
		var S = v, R;
		n[3] !== y || n[4] !== S ? (R = y && !S && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), n[3] = y, n[4] = S, n[5] = R) : R = n[5];
		var L = R, E;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (E = [], n[6] = E) : E = n[6], c(b, E);
		var k = a === o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.SECOND_WARNING, I;
		if (k) I = s._(
			/*BTDS*/
			"",
			[s._param("used", r("WAWebL10N").n(l)), s._param("total", r("WAWebL10N").n(m))]
		);
		else if (y) {
			var T;
			n[7] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
				/*BTDS*/
				""
			), n[7] = T) : T = n[7], I = T;
		} else {
			var D;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
				/*BTDS*/
				""
			), n[8] = D) : D = n[8], I = D;
		}
		var x = C, $ = h, P = g, N = _, M;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(o("WAWebText.react").WAWebClickableText, {
			onClick: N,
			color: "primary",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentActionEmphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), n[9] = M) : M = n[9];
		var w = M, A;
		n[10] !== y ? (A = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: y ? o("WAWebFaqUrl").getSMBIndividualNewChatMessageCappingHCAUrl() : o("WAWebFaqUrl").getConsumerIndividualNewChatMessageCappingHCAUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), n[10] = y, n[11] = A) : A = n[11];
		var F = A, O, B;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (O = {
			icon: u.jsx("span", {
				className: "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xhslqc4 x1120s5i",
				children: u.jsx(r("WDSIconIcCheck.react"), {
					width: 20,
					height: 18
				})
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-warning-detail-bullet-1"
		}, B = {
			icon: u.jsx(r("WDSIconIcBlock.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				"",
				[s._param("settingsLink", w)]
			),
			testid: "capping-warning-detail-bullet-2"
		}, n[12] = O, n[13] = B) : (O = n[12], B = n[13]);
		var W;
		if (n[14] !== y || n[15] !== S || n[16] !== L) {
			if (W = [O, B], S) {
				var q;
				n[18] === Symbol.for("react.memo_cache_sentinel") ? (q = {
					icon: u.jsx(r("WDSIconWdsIcChat.react"), {
						width: 24,
						height: 24,
						iconXstyle: d.bulletIcon
					}),
					text: s._(
						/*BTDS*/
						""
					),
					testid: "capping-warning-detail-bullet-3"
				}, n[18] = q) : q = n[18], W.push(q);
			} else if (L) {
				var U;
				n[19] === Symbol.for("react.memo_cache_sentinel") ? (U = {
					icon: u.jsx(r("WDSIconWdsIcBroadcastMessage.react"), {
						width: 24,
						height: 24,
						iconXstyle: d.bulletIcon
					}),
					text: s._(
						/*BTDS*/
						""
					),
					testid: "capping-warning-detail-bullet-3"
				}, n[19] = U) : U = n[19], W.push(U);
			} else if (!y) {
				var V;
				n[20] === Symbol.for("react.memo_cache_sentinel") ? (V = {
					icon: u.jsx(r("WDSIconIcDomain.react"), {
						width: 24,
						height: 24,
						iconXstyle: d.bulletIcon
					}),
					text: s._(
						/*BTDS*/
						""
					),
					testid: "capping-warning-detail-bullet-3"
				}, n[20] = V) : V = n[20], W.push(V);
			}
			n[14] = y, n[15] = S, n[16] = L, n[17] = W;
		} else W = n[17];
		var H, G, z, j;
		if (S) {
			var K;
			n[21] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
				/*BTDS*/
				""
			), n[21] = K) : K = n[21], H = K, G = P;
			var Q;
			n[22] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
				/*BTDS*/
				""
			), n[22] = Q) : Q = n[22], z = Q, j = x;
		} else if (L) {
			var X;
			n[23] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
				/*BTDS*/
				""
			), n[23] = X) : X = n[23], H = X, G = $;
			var Y;
			n[24] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
				/*BTDS*/
				""
			), n[24] = Y) : Y = n[24], z = Y, j = x;
		} else if (y) {
			var J;
			n[25] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
				/*BTDS*/
				""
			), n[25] = J) : J = n[25], H = J, G = x;
			var Z;
			n[26] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
				/*BTDS*/
				""
			), n[26] = Z) : Z = n[26], z = Z, j = o("WDSDialogBridge").closeWDSDialog;
		} else {
			var ee;
			n[27] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
				/*BTDS*/
				""
			), n[27] = ee) : ee = n[27], H = ee, G = x;
			var te;
			n[28] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
				/*BTDS*/
				""
			), n[28] = te) : te = n[28], z = te, j = o("WDSDialogBridge").closeWDSDialog;
		}
		var ne;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (ne = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: H,
				onPress: G,
				variant: "filled",
				testid: "popup-controls-ok"
			},
			secondaryButtonProps: {
				label: z,
				onPress: j,
				variant: "outline",
				testid: "popup-controls-cancel"
			}
		}), n[29] = ne) : ne = n[29];
		var re = ne, oe;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (oe = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WDSIllustrationWdsPictoMessageReportFeedbackWarning.react"), {
				"aria-hidden": !0,
				testid: "capping-warning-detail-illustration"
			})
		}), n[30] = oe) : oe = n[30];
		var ae;
		n[31] !== F ? (ae = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingBottom: 16,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				testid: "capping-warning-detail-subtitle",
				textAlign: "center",
				children: F
			})
		}), n[31] = F, n[32] = ae) : ae = n[32];
		var ie;
		n[33] !== W ? (ie = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			justify: "start",
			children: W.map(p)
		}), n[33] = W, n[34] = ie) : ie = n[34];
		var le;
		return n[35] !== ae || n[36] !== ie || n[37] !== I ? (le = u.jsxs(r("WDSDialog.react"), {
			closeButton: !0,
			footer: re,
			headerMedia: oe,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "md",
			testid: "capping-warning-detail-modal",
			title: I,
			children: [ae, ie]
		}), n[35] = ae, n[36] = ie, n[37] = I, n[38] = le) : le = n[38], le;
	}
	function p(e) {
		var t = e.icon, n = e.testid, a = e.text;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: n,
			paddingStart: 8,
			paddingTop: 4,
			paddingBottom: 4,
			marginBottom: 8,
			columnGap: 24,
			align: "center",
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				align: "center",
				shrink: 0,
				xstyle: d.bulletIconContainer,
				children: t
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				alignSelf: "center",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: a
				})
			})]
		}, n);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable, { onBack: f }));
	}
	function f() {
		o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingWarningDetailModalLoadable.react").CappingWarningDetailModalLoadable, {}));
	}
	function g() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebCappingOTERequestModalLoadable.react").CappingOTERequestModalLoadable, {}));
	}
	function h() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.MESSAGE_CAPPING_NUX,
			onClose: y
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	function y() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function C() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl());
	}
	function b() {
		o("WAWebIndividualNewChatMessageCappingLogEvents").logView(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_NUX, JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}), o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD_CAPPING_ALERT_CARD);
	}
	l.CappingWarningDetailModal = m;
}), 226);
