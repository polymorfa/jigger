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
	"asyncToGeneratorRuntime",
	"err",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = 1;
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
			return yield o("WAWebSendEventEditMsgAction").sendEventEditMessage({
				name: p,
				startTime: a,
				endTime: r,
				isEventCanceled: !1,
				description: c,
				location: m,
				callType: l != null ? l : void 0
			}, i), !0;
		}), y.apply(this, arguments);
	}
	var C = n("$InternalEnum").Mirrored(["EventCreate", "ChooseChat"]);
	function b(e) {
		var t = e.callLinkRequired, a = t === void 0 ? !1 : t, i = e.existingEventMsg, l = e.isScheduledCall, u = l === void 0 ? !1 : l, c = e.nameInputPlaceholder, m = e.nameInputTitle, y = e.onSend, b = e.onWaitingRoomToggled, v = e.prefilledData, S = e.preselectedChat, R = e.ref, L = e.showLocationField, E = L === void 0 ? !0 : L, k = e.showRemoveEndTimeButton, I = k === void 0 ? !0 : k, T = e.title, D = o("useWAWebFlow").useFlow(C.EventCreate, {
			transitions: o("useWAWebFlow").FlowTransitions.None,
			onEnd: o("WAWebModalManager").closeModalManager
		}), x = D[0], $ = D[1], P = _([]), N = f(v), M = N[0], w = N[1], A = _(null);
		u && A.current == null && (A.current = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger()), p(function() {
			var e = A.current;
			!v && a && e != null && (e.clickCreateEvent(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE), e.clickCreateVideoCallLink(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE));
		}, [a, v]);
		var F = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				if (w(e), !t) {
					$.push(C.ChooseChat);
					return;
				}
				var n = e.eventCallType, r = e.eventDescription, a = e.eventEndTime, l = e.eventLocationName, s = e.eventName, c = e.eventStartTime, d = Number(c), m = a != null ? Number(a) : void 0;
				if (v && i) {
					var p = yield h({
						eventData: e,
						eventEndTime: m,
						eventStartTime: d,
						existingEventMsg: i
					});
					if (!p) return;
				} else u && n != null && A.current != null && (n === "video" ? A.current.clickVideoCallLinkShare(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE) : A.current.clickVoiceCallLinkShare(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE)), yield o("WAWebSendEventCreationMsgAction").sendEventCreationMessage({
					eventCreationOpts: {
						name: s,
						startTime: d,
						endTime: m,
						description: r,
						location: l,
						callType: n != null ? n : void 0,
						isScheduledCall: u,
						requireApproval: e.requireApproval
					},
					chat: t,
					quotedMsg: t.composeQuotedMsg
				}), t.set("composeQuotedMsg", null);
				yield o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.EventCreation
				}), y == null || y(), $.end();
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})();
		if ($.step == null) return null;
		var O = null;
		switch ($.step) {
			case C.EventCreate: {
				var B = S != null ? o("WAWebChatEphemerality").calculateEphemeralDurationForChat(S) : null;
				O = d.jsx(r("WAWebEventsCreateEventModal.react"), {
					title: T,
					existingEventMsg: i,
					prefilledData: v,
					nameInputTitle: m,
					nameInputPlaceholder: c,
					showLocationField: E,
					showRemoveEndTimeButton: I,
					callLinkRequired: a,
					ephemeralDurationSeconds: B,
					onConfirm: function(t) {
						return F(t, S);
					},
					onCancel: function() {
						a && A.current != null && A.current.dismiss(o("WAWebWamEnumSubSurface").SUB_SURFACE.SCHEDULE_CALL_EVENT_CREATION_PAGE), $.end();
					},
					onWaitingRoomToggled: b
				});
				break;
			}
			case C.ChooseChat: {
				var W, q = function() {
					return P.current;
				}, U = function(t) {
					var e = t.selectedItems;
					P.current = e.filter(function(e) {
						return e instanceof o("WAWebChatModel").Chat;
					});
				}, V = function(t) {
					var e = t.selectedItems, n = e;
					if (!M) throw r("err")("Event create modal flow: Expected event data to be set before chat is selected");
					if (n.length !== 1) throw r("err")("Event create modal flow: Expected exactly one chat to be selected");
					return F(M, n[0]);
				};
				O = d.jsx(o("WAWebSelectModal.react").SelectModal, {
					title: s._(
						/*BTDS*/
						""
					),
					listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
					getInitialItems: q,
					maxItems: g,
					onConfirm: V,
					onCancel: function() {
						return $.pop();
					},
					onSelectionChanged: U,
					singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.NEXT,
					excludeChat: (W = o("WAWebChatCollection").ChatCollection.get(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())) != null ? W : void 0,
					tsNavigationData: {
						surface: "unknown",
						viewName: "send-event"
					}
				});
				break;
			}
		}
		return d.jsx(x, {
			ref: R,
			flow: $,
			children: O
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
