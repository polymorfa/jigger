__d("WAWebCappingUsageModal.react", [
	"fbt",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastHomeFlowLoadable",
	"WAWebCappingOTERequestModalLoadable.react",
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
	"WAWebProgressBar.react",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSIconIcArrowBack.react",
	"WDSIconIcBlock.react",
	"WDSIconIcCheckCircle.react",
	"WDSIconIcDomain.react",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSIconWdsIcChat.react",
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
	function m(e) {
		var t, n, a = o("react-compiler-runtime").c(32), i = e.onBack, l = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData(), m;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebIndividualNewChatMessageCappingLimitUtils").getUsagePercentage(), a[0] = m) : m = a[0];
		var y = m, C;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebIndividualNewChatMessageCappingLimitUtils").isOTEEligible(), a[1] = C) : C = a[1];
		var b = C, v;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebMobilePlatforms").isSMB(), a[2] = v) : v = a[2];
		var S = v, R;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (R = o("WAWebIndividualNewChatMessageCappingLimitUtils").isUserCapped(), a[3] = R) : R = a[3];
		var L = R, E;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCycleEndDateFormatted(r("WAWebL10N").getFullLocale()), a[4] = E) : E = a[4];
		var k = E, I;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (I = S && !b && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), a[5] = I) : I = a[5];
		var T = I, D;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (D = [], a[6] = D) : D = a[6], c(h, D);
		var x = (t = l == null ? void 0 : l.used_quota) != null ? t : 0, $ = (n = l == null ? void 0 : l.total_quota) != null ? n : 0, P = g, N = (l == null ? void 0 : l.cycle_start_timestamp) != null ? P(l.cycle_start_timestamp) : "", M = (l == null ? void 0 : l.cycle_end_timestamp) != null ? P(l.cycle_end_timestamp) : "", w = f, A = function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS, "try_business_broadcasts", JSON.stringify(l || {})), o("WDSDialogBridge").closeWDSDialog(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.MESSAGE_CAPPING_NUX,
				onClose: _
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, F = function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS, "request_ote", JSON.stringify(l || {})), o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebCappingOTERequestModalLoadable.react").CappingOTERequestModalLoadable, {}));
		}, O;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: S ? o("WAWebFaqUrl").getSMBIndividualNewChatMessageCappingHCAUrl() : o("WAWebFaqUrl").getConsumerIndividualNewChatMessageCappingHCAUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), a[7] = O) : O = a[7];
		var B = O, W;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (W = [], L && W.push({
			icon: u.jsx(r("WDSIconIcBlock.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: k !== "" ? s._(
				/*BTDS*/
				"",
				[s._param("date", u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: k
				}))]
			) : s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-block"
		}), W.push({
			icon: u.jsx(r("WDSIconIcCheckCircle.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-1"
		}), S && b ? W.push({
			icon: u.jsx(r("WDSIconWdsIcChat.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-2"
		}) : T ? W.push({
			icon: u.jsx(r("WDSIconWdsIcBroadcastMessage.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-broadcasts"
		}) : W.push({
			icon: u.jsx(r("WDSIconIcDomain.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-3"
		}), a[8] = W) : W = a[8];
		var q, U, V, H;
		if (S && b) {
			var G;
			a[9] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), a[9] = G) : G = a[9], q = G, U = F;
			var z;
			a[10] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
				/*BTDS*/
				""
			), a[10] = z) : z = a[10], V = z, H = w;
		} else if (T) {
			var j;
			a[11] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
				/*BTDS*/
				""
			), a[11] = j) : j = a[11], q = j, U = A;
			var K;
			a[12] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
				/*BTDS*/
				""
			), a[12] = K) : K = a[12], V = K, H = w;
		} else if (S) {
			var Q;
			a[13] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
				/*BTDS*/
				""
			), a[13] = Q) : Q = a[13], q = Q, U = w;
			var X;
			a[14] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
				/*BTDS*/
				""
			), a[14] = X) : X = a[14], V = X, H = o("WDSDialogBridge").closeWDSDialog;
		} else {
			var Y;
			a[15] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
				/*BTDS*/
				""
			), a[15] = Y) : Y = a[15], q = Y, U = w;
			var J;
			a[16] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
				/*BTDS*/
				""
			), a[16] = J) : J = a[16], V = J, H = o("WDSDialogBridge").closeWDSDialog;
		}
		var Z;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (Z = {
			label: V,
			onPress: H,
			variant: "outline",
			testid: "popup-controls-cancel"
		}, a[17] = Z) : Z = a[17];
		var ee = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: q,
				onPress: U,
				variant: "filled",
				testid: "popup-controls-ok"
			},
			secondaryButtonProps: Z
		}), te;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
			/*BTDS*/
			""
		), a[18] = te) : te = a[18];
		var ne;
		a[19] !== i ? (ne = i != null ? u.jsx("div", {
			className: "x10l6tqk xxrlk4x xymx5cc x1vjfegm",
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				variant: "borderless",
				onPress: i,
				testid: "capping-usage-modal-back-button",
				"aria-label": s._(
					/*BTDS*/
					""
				)
			})
		}) : void 0, a[19] = i, a[20] = ne) : ne = a[20];
		var re;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (re = { className: "x12xbjc7" }, a[21] = re) : re = a[21];
		var oe;
		a[22] !== M || a[23] !== N ? (oe = N !== "" && M !== "" && u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			testid: "capping-usage-modal-cycle-dates",
			children: s._(
				/*BTDS*/
				"",
				[s._param("startDate", N), s._param("endDate", M)]
			)
		}), a[22] = M, a[23] = N, a[24] = oe) : oe = a[24];
		var ae;
		a[25] !== y ? (ae = u.jsx(r("WAWebProgressBar.react"), {
			value: y,
			max: 100
		}), a[25] = y, a[26] = ae) : ae = a[26];
		var ie;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (ie = { className: "x12xbjc7" }, a[27] = ie) : ie = a[27];
		var le;
		a[28] !== B ? (le = u.jsx("div", babelHelpers.extends({}, ie, { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			testid: "capping-usage-modal-subtitle",
			children: B
		}) })), a[28] = B, a[29] = le) : le = a[29];
		var se;
		return a[30] !== W ? (se = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			justify: "start",
			children: W.map(p)
		}), a[30] = W, a[31] = se) : se = a[31], u.jsxs(r("WDSDialog.react"), {
			closeButton: !0,
			footer: ee,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "md",
			testid: "capping-usage-modal",
			title: te,
			topBarStartContent: ne,
			children: [
				u.jsxs("div", babelHelpers.extends({}, re, { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "end",
					justify: "all",
					paddingBottom: 8,
					children: [u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						testid: "capping-usage-modal-amount",
						children: s._(
							/*BTDS*/
							"",
							[s._param("used", r("WAWebL10N").n(x)), s._param("total", r("WAWebL10N").n($))]
						)
					}), oe]
				}), ae] })),
				le,
				se
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
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
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function f() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl());
	}
	function g(e) {
		var t = new Date(e * 1e3);
		return t.toLocaleDateString(r("WAWebL10N").getFullLocale(), {
			day: "numeric",
			month: "short"
		});
	}
	function h() {
		o("WAWebIndividualNewChatMessageCappingLogEvents").logView(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS, JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}));
	}
	l.CappingUsageModal = m;
}), 226);
