__d("WAWebEventsCreateEventModalFlow.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebCallLinkActionEventWamEvent",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatEphemerality",
	"WAWebChatModel",
	"WAWebCmd",
	"WAWebEventUtils",
	"WAWebEventsCreateEventModal.react",
	"WAWebModalManager",
	"WAWebPreCallUserJourneyLogger",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebSendEventCreationMsgAction",
	"WAWebSendEventEditMsgAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WAWebVoipWaitingRoomToggleLoadable",
	"WAWebWamEnumCallLinkAction",
	"WAWebWamEnumCallLinkActionEntryPoint",
	"WAWebWamEnumCallLinkMedia",
	"WAWebWamEnumSubSurface",
	"err",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = 1;
	async function h(t) {
		var n = t.eventData, r = t.eventEndTime, a = t.eventStartTime, i = t.existingEventMsg, l = n.eventCallType, c = n.eventDescription, m = n.eventLocationName, p = n.eventName;
		if (o("WAWebEventUtils").shouldShowEventAsPassed(a, r) && l != null) return o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
			msg: s._(
				/*BTDS*/
				""
			),
			id: o("WAWebActionToast.react").genId()
		})), !1;
		var _ = i.eventJoinLink, f = n.requireApproval, g = n.hasRequireApprovalChanged;
		if (g === !0 && f != null && _ != null) {
			var h = null;
			try {
				h = new URL(_).pathname.split("/").filter(Boolean).pop();
			} catch (e) {
				h = null;
			}
			if (h != null && h !== "") {
				var y = _.includes("/video/");
				o("WAWebVoipWaitingRoomToggleLoadable").toggleWaitingRoomLoadable({
					isVideoCall: y,
					linkToken: h,
					waitingRoomEnabled: f
				}).then(function() {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebEventsCreateEventModalFlow: waiting room toggle +"]))), new (o("WAWebCallLinkActionEventWamEvent")).CallLinkActionEventWamEvent({
						callLinkAction: o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION.TOGGLE_WAITING_ROOM,
						callLinkActionEntryPoint: o("WAWebWamEnumCallLinkActionEntryPoint").CALL_LINK_ACTION_ENTRY_POINT.EVENT_CREATION,
						callLinkMedia: y ? o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VIDEO : o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA.VOICE,
						isWaitingRoomEnabled: f
					}).commit();
				}).catch(function(e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["WAWebEventsCreateEventModalFlow: toggle waiting room failed ", ""])), e).sendLogs("toggle-waiting-room-error"), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				});
			}
		}
		return await o("WAWebSendEventEditMsgAction").sendEventEditMessage({
			name: p,
			startTime: a,
			endTime: r,
			isEventCanceled: !1,
			description: c,
			location: m,
			callType: l != null ? l : void 0
		}, i), !0;
	}
	var y = n("$InternalEnum").Mirrored(["EventCreate", "ChooseChat"]);
	function C(e) {
		var t = e.callLinkRequired, n = t === void 0 ? !1 : t, a = e.existingEventMsg, i = e.isScheduledCall, l = i === void 0 ? !1 : i, u = e.nameInputPlaceholder, c = e.nameInputTitle, m = e.onSend, C = e.onWaitingRoomToggled, b = e.prefilledData, v = e.preselectedChat, S = e.ref, R = e.showLocationField, L = R === void 0 ? !0 : R, E = e.showRemoveEndTimeButton, k = E === void 0 ? !0 : E, I = e.title, T = o("useWAWebFlow").useFlow(y.EventCreate, {
			transitions: o("useWAWebFlow").FlowTransitions.None,
			onEnd: o("WAWebModalManager").closeModalManager
		}), D = T[0], x = T[1], $ = _([]), P = f(b), N = P[0], M = P[1], w = _(null);
		l && w.current == null && (w.current = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger()), p(function() {
			var e = w.current;
			!b && n && e != null && (e.clickCreateEvent(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE), e.clickCreateVideoCallLink(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE));
		}, [n, b]);
		var A = async function(t, n) {
			if (M(t), !n) {
				x.push(y.ChooseChat);
				return;
			}
			var e = t.eventCallType, r = t.eventDescription, i = t.eventEndTime, s = t.eventLocationName, u = t.eventName, c = t.eventStartTime, d = Number(c), p = i != null ? Number(i) : void 0;
			if (b && a) {
				var _ = await h({
					eventData: t,
					eventEndTime: p,
					eventStartTime: d,
					existingEventMsg: a
				});
				if (!_) return;
			} else l && e != null && w.current != null && (e === "video" ? w.current.clickVideoCallLinkShare(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE) : w.current.clickVoiceCallLinkShare(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE)), await o("WAWebSendEventCreationMsgAction").sendEventCreationMessage({
				eventCreationOpts: {
					name: u,
					startTime: d,
					endTime: p,
					description: r,
					location: s,
					callType: e != null ? e : void 0,
					isScheduledCall: l,
					requireApproval: t.requireApproval
				},
				chat: n,
				quotedMsg: n.composeQuotedMsg
			}), n.set("composeQuotedMsg", null);
			await o("WAWebCmd").Cmd.openChatFromUnread({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.EventCreation
			}), m == null || m(), x.end();
		};
		if (x.step == null) return null;
		var F = null;
		switch (x.step) {
			case y.EventCreate: {
				var O = v != null ? o("WAWebChatEphemerality").calculateEphemeralDurationForChat(v) : null;
				F = d.jsx(r("WAWebEventsCreateEventModal.react"), {
					title: I,
					existingEventMsg: a,
					prefilledData: b,
					nameInputTitle: c,
					nameInputPlaceholder: u,
					showLocationField: L,
					showRemoveEndTimeButton: k,
					callLinkRequired: n,
					ephemeralDurationSeconds: O,
					onConfirm: function(t) {
						return A(t, v);
					},
					onCancel: function() {
						n && w.current != null && w.current.dismiss(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE), x.end();
					},
					onWaitingRoomToggled: C
				});
				break;
			}
			case y.ChooseChat: {
				var B, W = function() {
					return $.current;
				}, q = function(t) {
					var e = t.selectedItems;
					$.current = e.filter(function(e) {
						return e instanceof o("WAWebChatModel").Chat;
					});
				}, U = function(t) {
					var e = t.selectedItems, n = e;
					if (!N) throw r("err")("Event create modal flow: Expected event data to be set before chat is selected");
					if (n.length !== 1) throw r("err")("Event create modal flow: Expected exactly one chat to be selected");
					return A(N, n[0]);
				};
				F = d.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: s._(
						/*BTDS*/
						""
					),
					listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
					getInitialItems: W,
					maxItems: g,
					onConfirm: U,
					onCancel: function() {
						return x.pop();
					},
					onSelectionChanged: q,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					excludeChat: (B = o("WAWebChatCollection").ChatCollection.get(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())) != null ? B : void 0,
					tsNavigationData: {
						surface: "unknown",
						viewName: "send-event"
					}
				});
				break;
			}
		}
		return d.jsx(D, {
			ref: S,
			flow: x,
			children: F
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
