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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = (e = n("cr:23046")) != null ? e : {}, p = m.isWindowsHybridEnabled;
	function _(e) {
		var t = e.chat, n = e.isCallingDisabled, a = e.isLargeGroup, i = a === void 0 ? !1 : a, l = e.logger, u = e.onActionTaken, m = e.onClose;
		d(function() {
			var e = r("WAWebCallCollection").activeCall;
			e != null && e.shouldShowPostCallSurvey === !0 && r("WAWebCallCollection").setActiveCall(null), l.clickCallDropdown(o("WAWebWamEnumSubSurface").SUB_SURFACE.CHAT_HEADER);
		}, [l]);
		var _ = function(n) {
			n ? l.clickVideoCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU) : l.clickAudioCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), u(), o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(t, n, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED), m();
		};
		return c.jsxs(r("WDSMenu.react"), { children: [
			!i && c.jsxs(c.Fragment, { children: [
				c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcCall.react"),
					title: s._(
						/*BTDS*/
						""
					),
					disabled: n,
					testid: "call-dropdown-voice-button",
					onPress: function() {
						return _(!1);
					}
				}),
				c.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcVideocam.react"),
					title: s._(
						/*BTDS*/
						""
					),
					disabled: n,
					testid: "call-dropdown-video-button",
					onPress: function() {
						return _(!0);
					}
				}),
				c.jsx(r("WDSMenuItem.react"), { type: "separator" })
			] }),
			c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcHowToReg.react"),
				title: s._(
					/*BTDS*/
					""
				),
				disabled: n,
				testid: "call-dropdown-select-people-button",
				onPress: function() {
					u(), l.clickAddContact(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
						chat: t,
						showCallTypeButtons: !0,
						isGroupMemberSelection: !0
					})), m();
				}
			}),
			c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcLink.react"),
				title: s._(
					/*BTDS*/
					""
				),
				testid: "call-dropdown-send-link-button",
				onPress: function() {
					u(), l.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, { targetChat: t })), m();
				}
			}),
			(p == null ? void 0 : p()) === !0 && c.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCalendarMonth.react"),
				title: s._(
					/*BTDS*/
					""
				),
				testid: "call-dropdown-schedule-button",
				onPress: function() {
					u(), o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.GroupChat) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : (l.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU), o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(t)), m();
				}
			})
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
