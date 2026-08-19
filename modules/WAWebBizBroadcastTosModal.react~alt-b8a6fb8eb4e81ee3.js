__d("WAWebBizBroadcastTosModal.react", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastTos",
	"WAWebBroadcastConsts",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWdsIllMarketingMessagesIcon.react",
	"WDSIconIcShowChart.react",
	"WDSIconIcTouchApp.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"err",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastQuota"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = {
		body: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		featureIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		legalFooter: {
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		legalFooterControls: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		titleSubtitle: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		valuePropItem: {
			columnGap: "xrdqr27",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		valueProps: {
			rowGap: "x1qvou4u",
			$$css: !0
		}
	}, p = {
		height: 24,
		width: 24,
		xstyle: m.featureIcon
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(31), a = t.broadcastJid, i = t.entryPoint, l = t.onAccept, u = t.onDismiss, _;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), n[0] = _) : _ = n[0];
		var f = _, g;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), n[1] = g) : g = n[1];
		var h = g, y = o("useWAWebBizBroadcastQuota").useWAWebBizBroadcastQuota(), C = y.awaitQuota, b, v;
		n[2] !== i ? (b = function() {
			if (h) {
				var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxViewed(i, e);
			}
		}, v = [i, h], n[2] = i, n[3] = b, n[4] = v) : (b = n[3], v = n[4]), d(b, v);
		var S, R;
		n[5] !== u ? (S = function() {
			h || (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBizBroadcastTosModal] ineligible, dismissing"]))), u());
		}, R = [h, u], n[5] = u, n[6] = S, n[7] = R) : (S = n[6], R = n[7]), d(S, R);
		var L;
		n[8] !== C || n[9] !== a || n[10] !== i || n[11] !== l || n[12] !== u ? (L = async function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(i);
			try {
				await C();
			} catch (l) {
				var e, t = l, n = (e = r("getErrorSafe")(t)) != null ? e : r("err")("biz broadcast quota fetch failed"), d = "quota_fetch_failed: " + n.name + ": " + n.message, m = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(i, d, m, a), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			o("WAWebBizBroadcastTos").acceptBizBroadcastTos().then(function() {
				var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptSuccess(i, e), l();
			}).catch(function(e) {
				var t, n = (t = r("getErrorSafe")(e)) != null ? t : r("err")("unknown error"), l = n.name + ": " + n.message, s = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(i, l, s, a), u();
			});
		}, n[8] = C, n[9] = a, n[10] = i, n[11] = l, n[12] = u, n[13] = L) : L = n[13];
		var E = L, k;
		n[14] !== i || n[15] !== u ? (k = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(i), u();
		}, n[14] = i, n[15] = u, n[16] = k) : k = n[16];
		var I = k;
		if (!h) return null;
		var T;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), n[17] = T) : T = n[17];
		var D;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), n[18] = D) : D = n[18];
		var x;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: c.jsx(o("WAWebWdsIllMarketingMessagesIcon.react").WdsIllMarketingMessagesIcon, {
				width: 180,
				height: 120
			})
		}), n[19] = x) : x = n[19];
		var $;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			textAlign: "center",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[20] = $) : $ = n[20];
		var P;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), n[21] = P) : P = n[21];
		var N;
		n[22] !== i ? (N = function() {
			return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(i, "learn_more");
		}, n[22] = i, n[23] = N) : N = n[23];
		var M;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), n[24] = M) : M = n[24];
		var w;
		n[25] !== N ? (w = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.titleSubtitle,
			align: "stretch",
			children: [$, c.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: [
					P,
					" ",
					c.jsx(r("WDSTextualLink.react"), {
						href: f,
						onClick: N,
						children: M
					})
				]
			})]
		}), n[25] = N, n[26] = w) : w = n[26];
		var A;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(r("WDSIconIcTouchApp.react"), babelHelpers.extends({}, p)), n[27] = A) : A = n[27];
		var F;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (F = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: m.valuePropItem,
			children: [A, c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), n[28] = F) : F = n[28];
		var O;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx(r("WDSIconIcShowChart.react"), babelHelpers.extends({}, p)), n[29] = O) : O = n[29];
		var B;
		return n[30] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.valueProps,
			align: "stretch",
			children: [F, c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: m.valuePropItem,
				children: [O, c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}), n[30] = B) : B = n[30], c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Small,
			buttonGroupStyle: m.legalFooterControls,
			okText: T,
			onOK: E,
			cancelText: D,
			onCancel: I,
			onOverlayClick: I,
			testid: "biz-broadcast-tos-modal",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.content,
				align: "stretch",
				children: [x, c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: m.body,
					align: "stretch",
					children: [
						w,
						B,
						c.jsx(o("WAWebFlex.react").FlexColumn, {
							align: "center",
							xstyle: m.legalFooter,
							children: c.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								textAlign: "center",
								children: s._(
									/*BTDS*/
									"",
									[s._implicitParam("=m1", c.jsx(r("WDSTextualLink.react"), {
										href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(i, "tos");
										},
										children: s._(
											/*BTDS*/
											""
										)
									})), s._implicitParam("=m3", c.jsx(r("WDSTextualLink.react"), {
										href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(i, "privacy_policy");
										},
										children: s._(
											/*BTDS*/
											""
										)
									}))]
								)
							})
						})
					]
				})]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
