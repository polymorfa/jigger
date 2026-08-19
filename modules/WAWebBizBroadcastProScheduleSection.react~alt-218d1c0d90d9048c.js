__d("WAWebBizBroadcastProScheduleSection.react", [
	"fbt",
	"Promise",
	"WAWebBizBroadcastProScheduleModal.react",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSToast.react",
	"WDSTooltip.react",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState;
	function _(t) {
		var a = t.disabled, i = a === void 0 ? !1 : a, l = t.disabledReason, u = t.onScheduleSend, d = t.onUndoSchedule, _ = o("WDSToast.react").useWDSToast(), f = _.showToast, g = r("useWAWebUnmountSignal")(), h = p(!1), y = h[0], C = h[1], b = p(!1), v = b[0], S = b[1], R = m(function() {
			C(!0);
		}, []), L = m(function() {
			C(!1);
		}, []), E = m(function(t) {
			S(!0), (e || (e = n("Promise"))).resolve().then(function() {
				return u(t);
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
		}, [
			u,
			d,
			f,
			g
		]), k = c.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "medium",
			disabled: i || v,
			onPress: R,
			testid: "bb_pro_schedule_open_modal",
			label: s._(
				/*BTDS*/
				""
			)
		});
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			testid: "bb_pro_schedule_section",
			children: [l != null ? c.jsx(r("WDSTooltip.react"), {
				disabled: !i,
				label: l,
				children: k
			}) : k, y ? c.jsx(r("WAWebBizBroadcastProScheduleModal.react"), {
				onCancel: L,
				onSchedule: E,
				isSubmitting: v
			}) : null]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
