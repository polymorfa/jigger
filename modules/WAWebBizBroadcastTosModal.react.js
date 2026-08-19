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
	"asyncToGeneratorRuntime",
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
		var a = o("react-compiler-runtime").c(31), i = t.broadcastJid, l = t.entryPoint, u = t.onAccept, _ = t.onDismiss, f;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), a[0] = f) : f = a[0];
		var g = f, h;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), a[1] = h) : h = a[1];
		var y = h, C = o("useWAWebBizBroadcastQuota").useWAWebBizBroadcastQuota(), b = C.awaitQuota, v, S;
		a[2] !== l ? (v = function() {
			if (y) {
				var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxViewed(l, e);
			}
		}, S = [l, y], a[2] = l, a[3] = v, a[4] = S) : (v = a[3], S = a[4]), d(v, S);
		var R, L;
		a[5] !== _ ? (R = function() {
			y || (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBizBroadcastTosModal] ineligible, dismissing"]))), _());
		}, L = [y, _], a[5] = _, a[6] = R, a[7] = L) : (R = a[6], L = a[7]), d(R, L);
		var E;
		a[8] !== b || a[9] !== i || a[10] !== l || a[11] !== u || a[12] !== _ ? (E = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(l);
				try {
					yield b();
				} catch (u) {
					var e, t = u, n = (e = r("getErrorSafe")(t)) != null ? e : r("err")("biz broadcast quota fetch failed"), a = "quota_fetch_failed: " + n.name + ": " + n.message, d = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(l, a, d, i), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				o("WAWebBizBroadcastTos").acceptBizBroadcastTos().then(function() {
					var e = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptSuccess(l, e), u();
				}).catch(function(e) {
					var t, n = (t = r("getErrorSafe")(e)) != null ? t : r("err")("unknown error"), a = n.name + ": " + n.message, s = o("WAWebBizBroadcastTos").getBizBroadcastTosDebugInfo();
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(l, a, s, i), _();
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[8] = b, a[9] = i, a[10] = l, a[11] = u, a[12] = _, a[13] = E) : E = a[13];
		var k = E, I;
		a[14] !== l || a[15] !== _ ? (I = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(l), _();
		}, a[14] = l, a[15] = _, a[16] = I) : I = a[16];
		var T = I;
		if (!y) return null;
		var D;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), a[17] = D) : D = a[17];
		var x;
		a[18] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), a[18] = x) : x = a[18];
		var $;
		a[19] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: c.jsx(o("WAWebWdsIllMarketingMessagesIcon.react").WdsIllMarketingMessagesIcon, {
				width: 180,
				height: 120
			})
		}), a[19] = $) : $ = a[19];
		var P;
		a[20] === Symbol.for("react.memo_cache_sentinel") ? (P = c.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			textAlign: "center",
			children: s._(
				/*BTDS*/
				""
			)
		}), a[20] = P) : P = a[20];
		var N;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), a[21] = N) : N = a[21];
		var M;
		a[22] !== l ? (M = function() {
			return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(l, "learn_more");
		}, a[22] = l, a[23] = M) : M = a[23];
		var w;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), a[24] = w) : w = a[24];
		var A;
		a[25] !== M ? (A = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.titleSubtitle,
			align: "stretch",
			children: [P, c.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: [
					N,
					" ",
					c.jsx(r("WDSTextualLink.react"), {
						href: g,
						onClick: M,
						children: w
					})
				]
			})]
		}), a[25] = M, a[26] = A) : A = a[26];
		var F;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (F = c.jsx(r("WDSIconIcTouchApp.react"), babelHelpers.extends({}, p)), a[27] = F) : F = a[27];
		var O;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: m.valuePropItem,
			children: [F, c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), a[28] = O) : O = a[28];
		var B;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsx(r("WDSIconIcShowChart.react"), babelHelpers.extends({}, p)), a[29] = B) : B = a[29];
		var W;
		return a[30] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.valueProps,
			align: "stretch",
			children: [O, c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: m.valuePropItem,
				children: [B, c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}), a[30] = W) : W = a[30], c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Small,
			buttonGroupStyle: m.legalFooterControls,
			okText: D,
			onOK: k,
			cancelText: x,
			onCancel: T,
			onOverlayClick: T,
			testid: "biz-broadcast-tos-modal",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.content,
				align: "stretch",
				children: [$, c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: m.body,
					align: "stretch",
					children: [
						A,
						W,
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
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(l, "tos");
										},
										children: s._(
											/*BTDS*/
											""
										)
									})), s._implicitParam("=m3", c.jsx(r("WDSTextualLink.react"), {
										href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
										onClick: function() {
											return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(l, "privacy_policy");
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
