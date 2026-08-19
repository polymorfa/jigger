__d("WAWebGroupCallDropdownContent.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebModalManager",
	"WAWebSchedulingCallsNotSupportedModal.react",
	"WAWebSharableEventGatingUtils",
	"WAWebVoipCallsTabScheduleCallModal.react",
	"WAWebVoipCreateCallLinksPopupLoadable.react",
	"WAWebVoipNewGroupCallContactPicker.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumSubSurface",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcCall.react",
	"WDSIconIcHowToReg.react",
	"WDSIconIcLink.react",
	"WDSIconIcVideocam.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"cr:23046",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = (e = n("cr:23046")) != null ? e : {}, p = m.isWindowsHybridEnabled;
	function _(e) {
		var t = o("react-compiler-runtime").c(33), n = e.chat, a = e.isCallingDisabled, i = e.isLargeGroup, l = e.logger, u = e.onActionTaken, m = e.onClose, _ = i === void 0 ? !1 : i, f, g;
		t[0] !== l ? (f = function() {
			var e = r("WAWebCallCollection").activeCall;
			e != null && e.shouldShowPostCallSurvey === !0 && r("WAWebCallCollection").setActiveCall(null), l.clickCallDropdown(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER);
		}, g = [l], t[0] = l, t[1] = f, t[2] = g) : (f = t[1], g = t[2]), d(f, g);
		var h;
		t[3] !== n || t[4] !== l || t[5] !== u || t[6] !== m ? (h = function(t) {
			t ? l.clickVideoCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU) : l.clickAudioCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), u(), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED), m();
		}, t[3] = n, t[4] = l, t[5] = u, t[6] = m, t[7] = h) : h = t[7];
		var y = h, C;
		t[8] !== y || t[9] !== a || t[10] !== _ ? (C = !_ && c.jsxs(c.Fragment, { children: [
			c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCall.react"),
				title: s._(
					/*BTDS*/
					""
				),
				disabled: a,
				testid: "call-dropdown-voice-button",
				onPress: function() {
					return y(!1);
				}
			}),
			c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVideocam.react"),
				title: s._(
					/*BTDS*/
					""
				),
				disabled: a,
				testid: "call-dropdown-video-button",
				onPress: function() {
					return y(!0);
				}
			}),
			c.jsx(r("WDSMenuItem.react"), { type: "separator" })
		] }), t[8] = y, t[9] = a, t[10] = _, t[11] = C) : C = t[11];
		var b;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[12] = b) : b = t[12];
		var v;
		t[13] !== n || t[14] !== l || t[15] !== u || t[16] !== m ? (v = function() {
			u(), l.clickAddContact(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
				chat: n,
				showCallTypeButtons: !0,
				isGroupMemberSelection: !0
			})), m();
		}, t[13] = n, t[14] = l, t[15] = u, t[16] = m, t[17] = v) : v = t[17];
		var S;
		t[18] !== a || t[19] !== v ? (S = c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcHowToReg.react"),
			title: b,
			disabled: a,
			testid: "call-dropdown-select-people-button",
			onPress: v
		}), t[18] = a, t[19] = v, t[20] = S) : S = t[20];
		var R;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[21] = R) : R = t[21];
		var L, E;
		t[22] !== n || t[23] !== l || t[24] !== u || t[25] !== m ? (L = c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcLink.react"),
			title: R,
			testid: "call-dropdown-send-link-button",
			onPress: function() {
				u(), l.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, { targetChat: n })), m();
			}
		}), E = (p == null ? void 0 : p()) === !0 && c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCalendarMonth.react"),
			title: s._(
				/*BTDS*/
				""
			),
			testid: "call-dropdown-schedule-button",
			onPress: function() {
				u(), o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.GroupChat) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : (l.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(n)), m();
			}
		}), t[22] = n, t[23] = l, t[24] = u, t[25] = m, t[26] = L, t[27] = E) : (L = t[26], E = t[27]);
		var k;
		return t[28] !== L || t[29] !== E || t[30] !== C || t[31] !== S ? (k = c.jsxs(r("WDSMenu.react"), { children: [
			C,
			S,
			L,
			E
		] }), t[28] = L, t[29] = E, t[30] = C, t[31] = S, t[32] = k) : k = t[32], k;
	}
	l.default = _;
}), 226);
