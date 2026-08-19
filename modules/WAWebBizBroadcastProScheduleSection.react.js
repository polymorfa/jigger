__d("WAWebBizBroadcastProScheduleSection.react", [
	"fbt",
	"Promise",
	"WAWebBizBroadcastProScheduleModal.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSToast.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState;
	function _(t) {
		var a = o("react-compiler-runtime").c(21), i = t.disabled, l = t.disabledReason, u = t.onScheduleSend, d = t.onUndoSchedule, m = i === void 0 ? !1 : i, _ = o("WDSToast.react").useWDSToast(), f = _.showToast, g = r("useWAWebUnmountSignal")(), h = p(!1), y = h[0], C = h[1], b = p(!1), v = b[0], S = b[1], R;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			C(!0);
		}, a[0] = R) : R = a[0];
		var L = R, E;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			C(!1);
		}, a[1] = E) : E = a[1];
		var k = E, I;
		a[2] !== u || a[3] !== d || a[4] !== f || a[5] !== g ? (I = function(r) {
			S(!0), (e || (e = n("Promise"))).resolve().then(function() {
				return u(r);
			}).then(function() {
				if (!g.aborted) {
					C(!1);
					var e = d;
					g.aborted || f({
						type: "success",
						message: s._(
							/*BTDS*/
							""
						),
						action: e != null ? {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: function() {
								e();
							}
						} : void 0
					});
				}
			}).catch(function() {
				g.aborted || f({
					type: "error",
					message: s._(
						/*BTDS*/
						""
					)
				});
			}).finally(function() {
				g.aborted || S(!1);
			});
		}, a[2] = u, a[3] = d, a[4] = f, a[5] = g, a[6] = I) : I = a[6];
		var T = I, D = m || v, x;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), a[7] = x) : x = a[7];
		var $;
		a[8] !== D ? ($ = c.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "medium",
			disabled: D,
			onPress: L,
			testid: "bb_pro_schedule_open_modal",
			label: x
		}), a[8] = D, a[9] = $) : $ = a[9];
		var P = $, N;
		a[10] !== m || a[11] !== l || a[12] !== P ? (N = l != null ? c.jsx(r("WDSTooltip.react"), {
			disabled: !m,
			label: l,
			children: P
		}) : P, a[10] = m, a[11] = l, a[12] = P, a[13] = N) : N = a[13];
		var M;
		a[14] !== T || a[15] !== y || a[16] !== v ? (M = y ? c.jsx(r("WAWebBizBroadcastProScheduleModal.react"), {
			onCancel: k,
			onSchedule: T,
			isSubmitting: v
		}) : null, a[14] = T, a[15] = y, a[16] = v, a[17] = M) : M = a[17];
		var w;
		return a[18] !== N || a[19] !== M ? (w = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			testid: "bb_pro_schedule_section",
			children: [N, M]
		}), a[18] = N, a[19] = M, a[20] = w) : w = a[20], w;
	}
	l.default = _;
}), 226);
