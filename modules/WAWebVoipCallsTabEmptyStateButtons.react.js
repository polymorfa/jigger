__d("WAWebVoipCallsTabEmptyStateButtons.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCmd",
	"WAWebDialerPadFlowLoadable",
	"WAWebDrawerManager",
	"WAWebEmptyStateActionTile.react",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSchedulingCallsNotSupportedModal.react",
	"WAWebSharableEventGatingUtils",
	"WAWebVoipCallsTabNavigateTo",
	"WAWebVoipCallsTabScheduleCallModal.react",
	"WAWebVoipCreateCallLinksPopup.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipStartEmptyCall",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcDialpad.react",
	"WDSIconIcLink.react",
	"WDSIconIcVideoCall.react",
	"asyncToGeneratorRuntime",
	"cr:23046",
	"react",
	"react-compiler-runtime",
	"useDelayedBooleanState",
	"useWAWebEventTargetValue",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState, m = (e = n("cr:23046")) != null ? e : {}, p = m.isWindowsHybridEnabled, _ = {
		gridContainer: {
			rowGap: "xlxy9ep",
			columnGap: "xf91ah9",
			$$css: !0
		},
		rowContainer: {
			rowGap: "xlxy9ep",
			columnGap: "xf91ah9",
			$$css: !0
		}
	}, f = 3e3;
	function g() {
		var e = o("react-compiler-runtime").c(21), t = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", v), a = d(!1), i = a[0], l = a[1], u = r("useDelayedBooleanState")(i, f), m = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), g = m.inited, C = m.initErrored, S;
		e[0] !== C || e[1] !== g ? (S = o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() || r("WAWebEnvironment").isWeb && C && !g, e[0] = C, e[1] = g, e[2] = S) : S = e[2];
		var R = S;
		t && i && l(!1);
		var L;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (L = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				l(!0);
				var e = yield o("WAWebVoipStartEmptyCall").startEmptyCall(o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.START_CALL);
				e || l(!1);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[3] = L) : L = e[3];
		var E = L, k = b, I = y, T, D;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return void E();
		}, D = s._(
			/*BTDS*/
			""
		), e[4] = T, e[5] = D) : (T = e[4], D = e[5]);
		var x = t || i || R, $;
		e[6] !== u || e[7] !== x ? ($ = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcVideoCall.react"),
			clickHandler: T,
			title: D,
			disabled: x,
			loading: u,
			testid: "voip_calls_tab_start_call_tile"
		}), e[6] = u, e[7] = x, e[8] = $) : $ = e[8];
		var P;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (P = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcLink.react"),
			clickHandler: h,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip_calls_tab_new_call_link_tile"
		}), e[9] = P) : P = e[9];
		var N;
		e[10] !== $ ? (N = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: _.rowContainer,
			children: [$, P]
		}), e[10] = $, e[11] = N) : N = e[11];
		var M;
		e[12] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), e[12] = M) : M = e[12];
		var w;
		e[13] !== t ? (w = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcDialpad.react"),
			clickHandler: I,
			title: M,
			disabled: t,
			testid: "voip_calls_tab_call_a_number_tile"
		}), e[13] = t, e[14] = w) : w = e[14];
		var A;
		e[15] === Symbol.for("react.memo_cache_sentinel") ? (A = (p == null ? void 0 : p()) === !0 && c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcCalendarMonth.react"),
			clickHandler: k,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip_calls_tab_schedule_call_tile"
		}), e[15] = A) : A = e[15];
		var F;
		e[16] !== w ? (F = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: _.rowContainer,
			children: [w, A]
		}), e[16] = w, e[17] = F) : F = e[17];
		var O;
		return e[18] !== F || e[19] !== N ? (O = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			xstyle: _.gridContainer,
			children: [N, F]
		}), e[18] = F, e[19] = N, e[20] = O) : O = e[20], O;
	}
	function h() {
		return void o("WAWebVoipCreateCallLinksPopup.react").handleGenerateCallLinkClick();
	}
	function y() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
			onEnd: C,
			entryPoint: "calls_tab"
		}));
	}
	function C() {
		o("WAWebCmd").Cmd.closeActiveChat(), o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
	}
	function b() {
		o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.CallsTabHScroll) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat();
	}
	function v() {
		return r("WAWebCallCollection").activeCall != null;
	}
	l.default = g;
}), 226);
