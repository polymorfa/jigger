__d("WAWebSharableEventNotificationHandler", [
	"WALogger",
	"WAWebSharableEventGatingUtils",
	"WAWebSharableEventNotificationConstants",
	"WAWebSharableEventResolveSender",
	"WAWebSharableEventShowNotificationBridge",
	"WAWebUserPrefsMeUser",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d;
	function m(e) {
		return e === "ACTIVE" ? o("WAWebSharableEventNotificationConstants").SharableEventStatus.Active : e === "CANCELED" ? o("WAWebSharableEventNotificationConstants").SharableEventStatus.Canceled : e === "SUSPENDED" ? o("WAWebSharableEventNotificationConstants").SharableEventStatus.Suspended : null;
	}
	function p(e) {
		return e === "GOING" ? o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.Going : e === "MAYBE" ? o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.Maybe : e === "NOT_GOING" ? o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NotGoing : e === "NO_RESPONSE" ? o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NoResponse : null;
	}
	function _(e) {
		return e === "EVENT_STARTED" ? o("WAWebSharableEventNotificationConstants").SharableEventReminderType.EventStarted : o("WAWebSharableEventNotificationConstants").SharableEventReminderType.EventStartingSoon;
	}
	function f(t, n, r) {
		return o("WAWebUserPrefsMeUser").isMeAccount(n) ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[sharable_event][mex][",
			"] self-initiated-skip eventId=",
			""
		])), t, r), !0) : !1;
	}
	async function g(e) {
		var t = e.body, n = e.eventId, r = e.senderWid, a = e.title, i = e.type;
		await o("WAWebSharableEventShowNotificationBridge").showSharableEventNotificationFromBackend({
			eventId: n,
			title: a,
			body: t,
			senderWidString: r.toString()
		}, i);
	}
	var h = 60;
	function y(e) {
		if (e == null) return 0;
		var t = Math.floor(Date.now() / 1e3), n = Math.max(0, e - t);
		return Math.floor(n / h);
	}
	async function C(e) {
		var t = e.apply, n = e.extract, a = e.response, i = e.scope;
		if (!o("WAWebSharableEventGatingUtils").isSharableEventNotificationsEnabled()) {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sharable_event][mex][", "] notifications-disabled-ack-only"])), i);
			return;
		}
		var l = n(a);
		if (l == null) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sharable_event][mex][", "] response-extract-failed"])), i);
			return;
		}
		try {
			await t(l), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[sharable_event][mex][",
				"] apply eventId=",
				""
			])), i, l.eventId);
		} catch (e) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[sharable_event][mex][", "] apply failed"])), i).catching(r("getErrorSafe")(e)).sendLogs("sharable-event-mex-apply-failed");
		}
	}
	async function b(e, t) {
		return C({
			scope: "invite",
			response: t,
			extract: function(t) {
				var e, n = (e = t.xwa2_notify_event_on_invite) == null ? void 0 : e.event_id;
				return n == null ? null : { eventId: n };
			},
			apply: async function(t) {}
		});
	}
	async function v(e, t) {
		return C({
			scope: "update",
			response: t,
			extract: function(t) {
				var e = t.xwa2_notify_event_on_update;
				return {
					eventId: e.event_id,
					eventName: e.event_name,
					creatorLid: e.creator_lid,
					eventStatus: m(e.event_status)
				};
			},
			apply: async function(t) {
				var e = t.eventName;
				if (t.eventStatus === o("WAWebSharableEventNotificationConstants").SharableEventStatus.Suspended) {
					await o("WAWebSharableEventShowNotificationBridge").showSharableEventNotificationFromBackend({
						eventId: t.eventId,
						title: "",
						body: { kind: "suspended" },
						senderWidString: null
					}, o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Suspended);
					return;
				}
				if (!(t.eventStatus !== o("WAWebSharableEventNotificationConstants").SharableEventStatus.Active || e == null)) {
					var n = o("WAWebSharableEventResolveSender").normalizeSharableEventSenderLid(t.creatorLid);
					f("update", n, t.eventId) || await g({
						type: o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Update,
						eventId: t.eventId,
						title: e,
						body: {
							kind: "update",
							eventName: e
						},
						senderWid: n
					});
				}
			}
		});
	}
	async function S(e, t) {
		return C({
			scope: "rsvp",
			response: t,
			extract: function(t) {
				var e = t.xwa2_notify_event_on_rsvp;
				return {
					eventId: e.event_id,
					eventName: e.event_name,
					inviteeLid: e.invitee_lid,
					rsvpStatus: p(e.rsvp_status)
				};
			},
			apply: async function(t) {
				var e = t.eventName, n = t.rsvpStatus;
				if (!(e == null || n == null || n === o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NoResponse)) {
					var r = o("WAWebSharableEventResolveSender").normalizeSharableEventSenderLid(t.inviteeLid);
					f("rsvp", r, t.eventId) || await g({
						type: o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Rsvp,
						eventId: t.eventId,
						title: e,
						body: {
							kind: "rsvp",
							eventName: e,
							rsvp: n
						},
						senderWid: r
					});
				}
			}
		});
	}
	async function R(e, t) {
		return C({
			scope: "delete",
			response: t,
			extract: function(t) {
				var e = t.xwa2_notify_event_on_delete;
				return {
					eventId: e.event_id,
					eventName: e.event_name,
					creatorLid: e.creator_lid
				};
			},
			apply: async function(t) {
				var e = t.eventName;
				if (e != null) {
					var n = o("WAWebSharableEventResolveSender").normalizeSharableEventSenderLid(t.creatorLid);
					f("delete", n, t.eventId) || await g({
						type: o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Delete,
						eventId: t.eventId,
						title: e,
						body: {
							kind: "delete",
							eventName: e
						},
						senderWid: n
					});
				}
			}
		});
	}
	async function L(e, t) {
		return C({
			scope: "reminder",
			response: t,
			extract: function(t) {
				var e = t.xwa2_notify_event_on_reminder;
				return {
					eventId: e.event_id,
					eventName: e.event_name,
					startTsSec: e.start_ts_sec,
					reminderType: _(e.reminder_type)
				};
			},
			apply: async function(t) {
				var e = t.eventName, n = t.reminderType;
				e == null || n == null || await o("WAWebSharableEventShowNotificationBridge").showSharableEventNotificationFromBackend({
					eventId: t.eventId,
					title: e,
					body: {
						kind: "reminder",
						reminderType: n,
						minutesUntilStart: y(t.startTsSec)
					},
					senderWidString: null
				}, o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Reminder);
			}
		});
	}
	async function E(e, t) {
		return C({
			scope: "invite-remove",
			response: t,
			extract: function(t) {
				var e = t.xwa2_notify_event_on_invite_remove;
				return {
					eventId: e.event_id,
					eventName: e.event_name,
					inviteeLid: e.removed_lid
				};
			},
			apply: async function(t) {}
		});
	}
	l.handleSharableEventResponse = C, l.mexHandleSharableEventInviteNotification = b, l.mexHandleSharableEventUpdateNotification = v, l.mexHandleSharableEventRsvpNotification = S, l.mexHandleSharableEventDeleteNotification = R, l.mexHandleSharableEventReminderNotification = L, l.mexHandleSharableEventInviteRemoveNotification = E;
}), 98);
