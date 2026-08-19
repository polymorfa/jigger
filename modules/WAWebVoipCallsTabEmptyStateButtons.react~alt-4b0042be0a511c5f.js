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
		var e = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}), t = d(!1), n = t[0], a = t[1], i = r("useDelayedBooleanState")(n, f), l = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), u = l.inited, m = l.initErrored, g = o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() || r("WAWebEnvironment").isWeb && m && !u;
		e && n && a(!1);
		var h = async function() {
			a(!0);
			var e = await o("WAWebVoipStartEmptyCall").startEmptyCall(o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.START_CALL);
			e || a(!1);
		}, y = function() {
			o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.CallsTabHScroll) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat();
		}, C = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
				onEnd: function() {
					o("WAWebCmd").Cmd.closeActiveChat(), o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
				},
				entryPoint: "calls_tab"
			}));
		};
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			xstyle: _.gridContainer,
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				xstyle: _.rowContainer,
				children: [c.jsx(r("WAWebEmptyStateActionTile.react"), {
					Icon: r("WDSIconIcVideoCall.react"),
					clickHandler: function() {
						return void h();
					},
					title: s._(
						/*BTDS*/
						""
					),
					disabled: e || n || g,
					loading: i,
					testid: "voip_calls_tab_start_call_tile"
				}), c.jsx(r("WAWebEmptyStateActionTile.react"), {
					Icon: r("WDSIconIcLink.react"),
					clickHandler: function() {
						return void o("WAWebVoipCreateCallLinksPopup.react").handleGenerateCallLinkClick();
					},
					title: s._(
						/*BTDS*/
						""
					),
					testid: "voip_calls_tab_new_call_link_tile"
				})]
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				xstyle: _.rowContainer,
				children: [c.jsx(r("WAWebEmptyStateActionTile.react"), {
					Icon: r("WDSIconIcDialpad.react"),
					clickHandler: C,
					title: s._(
						/*BTDS*/
						""
					),
					disabled: e,
					testid: "voip_calls_tab_call_a_number_tile"
				}), (p == null ? void 0 : p()) === !0 && c.jsx(r("WAWebEmptyStateActionTile.react"), {
					Icon: r("WDSIconIcCalendarMonth.react"),
					clickHandler: y,
					title: s._(
						/*BTDS*/
						""
					),
					testid: "voip_calls_tab_schedule_call_tile"
				})]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
