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
		var e = o("react-compiler-runtime").c(21), t = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", v), n = d(!1), a = n[0], i = n[1], l = r("useDelayedBooleanState")(a, f), u = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), m = u.inited, g = u.initErrored, C;
		e[0] !== g || e[1] !== m ? (C = o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() || r("WAWebEnvironment").isWeb && g && !m, e[0] = g, e[1] = m, e[2] = C) : C = e[2];
		var S = C;
		t && a && i(!1);
		var R;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (R = async function() {
			i(!0);
			var e = await o("WAWebVoipStartEmptyCall").startEmptyCall(o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.START_CALL);
			e || i(!1);
		}, e[3] = R) : R = e[3];
		var L = R, E = b, k = y, I, T;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return void L();
		}, T = s._(
			/*BTDS*/
			""
		), e[4] = I, e[5] = T) : (I = e[4], T = e[5]);
		var D = t || a || S, x;
		e[6] !== l || e[7] !== D ? (x = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcVideoCall.react"),
			clickHandler: I,
			title: T,
			disabled: D,
			loading: l,
			testid: "voip_calls_tab_start_call_tile"
		}), e[6] = l, e[7] = D, e[8] = x) : x = e[8];
		var $;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcLink.react"),
			clickHandler: h,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip_calls_tab_new_call_link_tile"
		}), e[9] = $) : $ = e[9];
		var P;
		e[10] !== x ? (P = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: _.rowContainer,
			children: [x, $]
		}), e[10] = x, e[11] = P) : P = e[11];
		var N;
		e[12] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), e[12] = N) : N = e[12];
		var M;
		e[13] !== t ? (M = c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcDialpad.react"),
			clickHandler: k,
			title: N,
			disabled: t,
			testid: "voip_calls_tab_call_a_number_tile"
		}), e[13] = t, e[14] = M) : M = e[14];
		var w;
		e[15] === Symbol.for("react.memo_cache_sentinel") ? (w = (p == null ? void 0 : p()) === !0 && c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcCalendarMonth.react"),
			clickHandler: E,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "voip_calls_tab_schedule_call_tile"
		}), e[15] = w) : w = e[15];
		var A;
		e[16] !== M ? (A = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: _.rowContainer,
			children: [M, w]
		}), e[16] = M, e[17] = A) : A = e[17];
		var F;
		return e[18] !== A || e[19] !== P ? (F = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			xstyle: _.gridContainer,
			children: [P, A]
		}), e[18] = A, e[19] = P, e[20] = F) : F = e[20], F;
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
