__d("WAWebWrapperQuickActionButton.react", [
	"fbt",
	"WAWebABProps",
	"WAWebInfoAltIcon.react",
	"WAWebRound.react",
	"WDSButton.react",
	"WDSIconIcFastForward.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { svgColorRefreshed: {
		color: "xhslqc4",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(20), n = e.onOpenBizEncStateMissmatchInfoPopup, a = e.onOpenBizPrivacyInfoPopup, i = e.onOpenEphemeralExemptionInfoPopup, l = e.onOpenForwardFlow, m = e.onOpenMarketingMessagesFeedback, p = e.showHostedBizEncStateMismatchInfoAction, _ = e.showQuickBizPrivacyInfoAction, f = e.showQuickEphemeralExemptionInfoAction, g = e.showQuickForwardAction, h = e.showQuickMarketingMessagesFeedbackAction, y = c(!1), C = y[0], b = y[1], v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions"), t[0] = v) : v = t[0];
		var S = v === !0, R = null, L = d.svgColorRefreshed;
		if (_) {
			var E;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
				/*BTDS*/
				""
			), t[1] = E) : E = t[1];
			var k;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: L }), t[2] = k) : k = t[2];
			var I;
			t[3] !== a ? (I = u.jsx(o("WAWebRound.react").Round, {
				onClick: a,
				label: E,
				theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
				children: k
			}), t[3] = a, t[4] = I) : I = t[4], R = I;
		} else if (h) {
			var T, D;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
				/*BTDS*/
				""
			), D = s._(
				/*BTDS*/
				""
			), t[5] = T, t[6] = D) : (T = t[5], D = t[6]);
			var x;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: L }), t[7] = x) : x = t[7];
			var $;
			t[8] !== m ? ($ = u.jsx(o("WAWebRound.react").Round, {
				label: T,
				title: D,
				theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
				onClick: m,
				children: x
			}), t[8] = m, t[9] = $) : $ = t[9], R = $;
		} else if (g) {
			var P;
			t[10] !== C || t[11] !== l ? (P = S ? u.jsxs("div", {
				className: "x6s0dn4 x3nfvp2 xc8icb0 xl56j7k x1n2onr6",
				onPointerDownCapture: function() {
					return b(!0);
				},
				onPointerUpCapture: function() {
					return b(!1);
				},
				onPointerCancelCapture: function() {
					return b(!1);
				},
				onPointerLeave: function() {
					return b(!1);
				},
				children: [u.jsx("div", babelHelpers.extends({}, {
					0: { className: "x1honnu5 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13vifvy xtijo5x x1ey2m1c x1o0tod x47corl x10l6tqk x3oybdh x13t8fmb x11xpdln xum2xem x1ja2u2z" },
					1: { className: "x1honnu5 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13vifvy xtijo5x x1ey2m1c x1o0tod x47corl x10l6tqk x13t8fmb x11xpdln xum2xem x1ja2u2z x9f2ct2" }
				}[!!C << 0])), u.jsx("span", {
					className: "x78zum5 x1n2onr6 x1vjfegm",
					children: u.jsx(r("WDSTooltip.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						children: u.jsx(r("WDSButton.react"), {
							type: "media",
							variant: "borderless",
							size: "small",
							directional: !0,
							Icon: r("WDSIconIcFastForward.react"),
							onPress: function() {
								return l(!1);
							},
							"aria-label": s._(
								/*BTDS*/
								""
							),
							testid: "forward-refreshed"
						})
					})
				})]
			}) : u.jsx(o("WAWebRound.react").Round, {
				label: s._(
					/*BTDS*/
					""
				),
				theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
				onClick: function() {
					return l(!1);
				},
				children: u.jsx(r("WDSIconIcFastForward.react"), {
					directional: !0,
					xstyle: L,
					height: 20,
					width: 20,
					testid: "forward-refreshed"
				})
			}), t[10] = C, t[11] = l, t[12] = P) : P = t[12], R = P;
		} else if (f) {
			var N;
			t[13] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
				/*BTDS*/
				""
			), t[13] = N) : N = t[13];
			var M;
			t[14] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: L }), t[14] = M) : M = t[14];
			var w;
			t[15] !== i ? (w = u.jsx(o("WAWebRound.react").Round, {
				label: N,
				theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
				onClick: i,
				children: M
			}), t[15] = i, t[16] = w) : w = t[16], R = w;
		} else if (p) {
			var A;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, { xstyle: L }), t[17] = A) : A = t[17];
			var F;
			t[18] !== n ? (F = u.jsx(o("WAWebRound.react").Round, {
				theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
				onClick: n,
				children: A
			}), t[18] = n, t[19] = F) : F = t[19], R = F;
		}
		return R;
	}
	l.default = m;
}), 226);
