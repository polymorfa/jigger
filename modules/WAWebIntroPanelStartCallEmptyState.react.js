__d("WAWebIntroPanelStartCallEmptyState.react", [
	"fbt",
	"JSResourceForInteraction",
	"WALogger",
	"WAWebCallCollection",
	"WAWebEmptyStateModule.react",
	"WAWebEnvironment",
	"WAWebIntroPanelStartCallUtil",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSIconIcVideoCall.react",
	"WDSToast.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = o("react-compiler-runtime").c(14), a = t.baseActions, i = t.metaAiTile, l = t.titleCard, u = d(!1), m = u[0], g = u[1], h = o("WDSToast.react").useWDSToast(), y = h.showToast, C = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", f), b = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), v = b.inited, S = b.initErrored;
		C && m && g(!1);
		var R;
		n[0] !== m || n[1] !== y ? (R = function() {
			if (!(m || r("WAWebCallCollection").activeCall != null)) {
				g(!0);
				var t = r("JSResourceForInteraction")("WAWebVoipStartEmptyCall").__setRef("WAWebIntroPanelStartCallEmptyState.react").load().then(_);
				y({
					type: "loading",
					align: "start",
					message: p,
					process: o("WAWebIntroPanelStartCallUtil").waitForStartingCallToSettle(t)
				}), t.then(function(e) {
					e !== !0 && g(!1);
				}).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebIntroPanelStartCallEmptyState] startEmptyCall from empty state failed"]))).catching(r("getErrorSafe")(t)).sendLogs("start-empty-call-failed"), y({
						type: "default",
						align: "start",
						message: s._(
							/*BTDS*/
							""
						)
					}), g(!1);
				});
			}
		}, n[0] = m, n[1] = y, n[2] = R) : R = n[2];
		var L = R, E;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), n[3] = E) : E = n[3];
		var k = m || C || r("WAWebEnvironment").isWeb && S && !v, I;
		n[4] !== L || n[5] !== k ? (I = {
			title: E,
			Icon: r("WDSIconIcVideoCall.react"),
			clickHandler: L,
			testid: "start-call-tile",
			actionId: "start_call",
			disabled: k
		}, n[4] = L, n[5] = k, n[6] = I) : I = n[6];
		var T = I, D;
		n[7] !== a || n[8] !== i || n[9] !== T ? (D = i != null ? [].concat(a, [T, i]) : [].concat(a, [T]), n[7] = a, n[8] = i, n[9] = T, n[10] = D) : D = n[10];
		var x = D, $;
		return n[11] !== l || n[12] !== x ? ($ = c.jsx(r("WAWebEmptyStateModule.react"), {
			titleCard: l,
			wdsActions: x
		}), n[11] = l, n[12] = x, n[13] = $) : $ = n[13], $;
	}
	function p() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function _(e) {
		return e.startEmptyCall(o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CHAT_EMPTY_STATE);
	}
	function f() {
		return r("WAWebCallCollection").activeCall != null;
	}
	l.default = m;
}), 226);
