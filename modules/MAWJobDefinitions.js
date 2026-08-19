__d("MAWJobDefinitions", ["MAWExternalId"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["s2sInstanceKey", "s2sUserFlowQPLEvent"], s = ["scheduleConfig"];
	function u(e) {
		return e;
	}
	function c(e) {
		return e;
	}
	var d = {
		acceptGroupInvite: function(t, n, r, o, a, i) {
			var e = _(i);
			return {
				args: {
					chatJid: t,
					inviteCode: o,
					invitedParticipantUserId: r,
					inviteExpirationTs: a,
					inviterUserId: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "acceptGroupInvite"
			};
		},
		addGroupParticipants: function(t, n, r, o) {
			var e = _(o);
			return {
				args: {
					group: t,
					s2sInstanceKey: r,
					users: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "addGroupParticipants"
			};
		},
		deleteMsgsForMe: function(t, n) {
			var e = _(n);
			return {
				args: { msgIds: t },
				scheduleConfig: e != null ? e : void 0,
				type: "deleteMsgsForMe"
			};
		},
		demoteGroupParticipants: function(t, n, r) {
			var e = _(r);
			return {
				args: {
					group: t,
					users: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "demoteGroupParticipants"
			};
		},
		downloadAndHandleMedia: function(t, n, r, o, a, i, l) {
			var e = _(l);
			return {
				args: {
					downloadType: a,
					hash: n,
					msgType: o,
					protocolMsgId: t,
					qplEntryPoint: r
				},
				scheduleConfig: e != null ? e : void 0,
				type: "downloadAndHandleMedia"
			};
		},
		forwardMsg: function(n, r, a, i, l, s, u) {
			var t = _(u), c = a != null ? a : {}, d = c.s2sInstanceKey, m = c.s2sUserFlowQPLEvent, p = babelHelpers.objectWithoutPropertiesLoose(c, e);
			return {
				args: {
					args: p,
					chatJid: n,
					ephemeralSetting: i,
					externalId: l != null ? l : o("MAWExternalId").generateExternalId(),
					isFirstMsg: s,
					protocolMsgId: r,
					s2sInstanceKey: d
				},
				scheduleConfig: t != null ? t : void 0,
				type: "forwardMsg"
			};
		},
		handleFutureproofMsg: function(t) {
			var e = _(t);
			return {
				args: {},
				scheduleConfig: e != null ? e : void 0,
				type: "handleFutureproofMsg"
			};
		},
		igdReportUserSpam: function(t, n) {
			var e = t.chatJid, r = t.context, o = t.frxParams, a = t.frxTags, i = t.msgs, l = t.reportedMessageId, s = t.spamFlow, u = t.userJid, c = _(n);
			return {
				args: {
					chatJid: e,
					context: r,
					frxParams: o,
					frxTags: a,
					msgs: i,
					reportedMessageId: l,
					spamFlow: s,
					userJid: u
				},
				scheduleConfig: c != null ? c : void 0,
				type: "igdReportUserSpam"
			};
		},
		igdSendMsg: function(t, n) {
			var e = t.actorID, r = t.taskID, o = _(n);
			return {
				args: {
					actorID: e,
					taskID: r
				},
				scheduleConfig: o != null ? o : void 0,
				type: "igdSendMsg"
			};
		},
		leaveGroups: function(t, n) {
			var e = _(n);
			return {
				args: { groups: t },
				scheduleConfig: e != null ? e : void 0,
				type: "leaveGroups"
			};
		},
		promoteGroupParticipants: function(t, n, r) {
			var e = _(r);
			return {
				args: {
					group: t,
					users: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "promoteGroupParticipants"
			};
		},
		removeGroupParticipants: function(t, n, r) {
			var e = _(r);
			return {
				args: {
					group: t,
					users: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "removeGroupParticipants"
			};
		},
		revokeMsgs: function(t, n) {
			var e = _(n);
			return {
				args: t,
				scheduleConfig: e != null ? e : void 0,
				type: "revokeMsgs"
			};
		},
		sendBumpMsg: function(t, n, r, a) {
			var e = _(a);
			return {
				args: {
					args: n,
					chatJid: t,
					externalId: r != null ? r : o("MAWExternalId").generateExternalId()
				},
				scheduleConfig: e != null ? e : void 0,
				type: "sendBumpMsg"
			};
		},
		sendGroupInviteMsg: function(t, n, r) {
			var e = _(r);
			return {
				args: {
					args: t,
					externalId: n != null ? n : o("MAWExternalId").generateExternalId()
				},
				scheduleConfig: e != null ? e : void 0,
				type: "sendGroupInviteMsg"
			};
		},
		sendMediaMsg: function(t, n, r, a, i, l, s, u, c, d, m, p, f, g, h, y, C, b, v, S, R, L) {
			var e = _(C);
			return {
				args: {
					args: {
						duration: c,
						ephemeralSetting: m,
						filename: v,
						height: l,
						isFirstMsg: h,
						isForwarded: g,
						isPtt: d,
						jpegThumbnail: a,
						jpegThumbnailHeight: u,
						jpegThumbnailWidth: s,
						mediaGroupMetadata: L,
						offlineAttachmentId: S,
						openMessageOtid: f,
						quote: p,
						s2sInstanceKey: r,
						source: b,
						width: i
					},
					attachmentType: R,
					chatJid: t,
					externalId: y != null ? y : o("MAWExternalId").generateExternalId(),
					file: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "sendMediaMsg"
			};
		},
		sendMediaMsgV2: function(t, n, r, a, i, l, s, u, c, d, m, p, f, g, h, y, C, b, v, S, R, L, E) {
			var e = _(C);
			return {
				args: {
					args: {
						duration: c,
						ephemeralSetting: m,
						filename: v,
						height: l,
						isFirstMsg: h,
						isForwarded: g,
						isPtt: d,
						jpegThumbnail: a,
						jpegThumbnailHeight: u,
						jpegThumbnailWidth: s,
						mediaGroupMetadata: E,
						offlineAttachmentId: S,
						openMessageOtid: f,
						quote: p,
						s2sInstanceKey: R,
						source: b,
						width: i
					},
					attachmentType: L,
					chatJid: t,
					externalId: y != null ? y : o("MAWExternalId").generateExternalId(),
					mimeType: n,
					plaintext: r
				},
				scheduleConfig: e != null ? e : void 0,
				type: "sendMediaMsgV2"
			};
		},
		setGroupMemberAddMode: function(t, n, r) {
			var e = _(r);
			return {
				args: {
					groupJid: t,
					memberAddMode: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "setGroupMemberAddMode"
			};
		},
		setGroupSubject: function(t, n, r) {
			var e = _(r);
			return {
				args: {
					group: t,
					subject: n
				},
				scheduleConfig: e != null ? e : void 0,
				type: "setGroupSubject"
			};
		},
		startInstamadilloDYI: function(t, n) {
			var e = _(n);
			return {
				args: { qplInstanceKey: t },
				scheduleConfig: e != null ? e : void 0,
				type: "startInstamadilloDYI"
			};
		}
	};
	function m(e, t) {
		return p(e, t);
	}
	function p(e, t) {
		var n = t.scheduleConfig, r = babelHelpers.objectWithoutPropertiesLoose(t, s), a = {
			args: {},
			scheduleConfig: n,
			type: e
		};
		return t.externalIdJob && (a.args.externalId = o("MAWExternalId").generateExternalId()), a.args = babelHelpers.extends({}, a.args, r), t.uniqueJob && (a.uniqKey = e), a;
	}
	function _(e) {
		if (e != null) return {
			jobId: e.jobId,
			maxTimeoutMs: e.maxTimeoutMs,
			priority: e.priority
		};
	}
	function f(e) {
		return {
			otid: e.toplevelProtobuf.messageId,
			supplementalProtobufs: new Map(e.supplementalProtobufs.entries().map(function(e) {
				var t = e[0], n = e[1];
				return [t, {
					decryptedProtobuf: n.payload,
					protobufTimestampMS: n.timestampMs
				}];
			})),
			tags: e.tags,
			toplevelProtobuf: {
				decryptedProtobuf: e.toplevelProtobuf.payload,
				protobufTimestampMS: e.toplevelProtobuf.timestampMs
			}
		};
	}
	l.toThreadJidPrimaryId = u, l.toEncodedEchoMessage = c, l.jobSerializers = d, l.createStartJobInfo = m, l.mpsMessageToEncryptedBackupsMessage = f;
}), 98);
