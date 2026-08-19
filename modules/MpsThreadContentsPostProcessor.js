__d("MpsThreadContentsPostProcessor", [
	"FBLogger",
	"I64",
	"MAWBridge",
	"MAWBridgeParticipants",
	"MAWBridgeTypesCreators",
	"MAWDbParticipant",
	"MAWFolderTypes",
	"MAWInMemoryGroupInfoStore",
	"MAWInMemoryParticipantStore",
	"MAWInMemoryThreadStore",
	"MAWJids",
	"MAWProtobufDeserializers",
	"MAWUserJidWrapper",
	"MpsTypes",
	"Promise",
	"WAArmadilloMiTransportAdminMessage.pb",
	"WAGroupInviteUtils",
	"WAJids",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		var t = [];
		for (var n of e) {
			var r = o("MAWJids").threadIdToChatJid(n), a = o("WAJids").interpretAsUserJid(r);
			a != null && t.push({
				tag: "OneToOneMessageRequestLoaded",
				value: {
					fbid: o("WAJids").extractUserId(a),
					threadJid: a
				}
			});
		}
		return t;
	}
	function c(e) {
		var t = [], n = o("MAWUserJidWrapper").getMyUserJid();
		for (var r of e) {
			var a;
			if (r.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel) {
				var i = (a = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(r.message.payload).encryptedTransportMessage()) == null || (a = a.consumerMessage()) == null || (a = a.payload) == null || (a = a.content) == null ? void 0 : a.groupInviteMessage;
				if (i != null) {
					var l = i.caption, s = i.groupJid, u = i.inviteCode, c = i.inviteExpiration;
					if (!(s == null || u == null || c == null)) {
						var d = o("WAJids").interpretAsUserJid(o("MAWJids").threadIdToChatJid(r.message.threadId));
						if (d != null) {
							var m = o("WAJids").toGroupJid(s), p = {
								caption: l == null ? void 0 : l.text,
								inviteCode: o("WAGroupInviteUtils").toInviteCode(u),
								invitedParticipantId: o("MAWDbParticipant").craftParticipantId(m, n),
								inviteeJid: n,
								inviteExpirationTs: o("WATimeUtils").castLongIntToUnixTime(c),
								inviterJid: d,
								threadJid: m
							};
							t.push({
								tag: "GroupInviteUpdate",
								value: o("MAWBridgeTypesCreators").createBridgeGroupInvite(p)
							});
						}
					}
				}
			}
		}
		return t;
	}
	function d(e) {
		var t = [], n = o("WAJids").userIdFromJid(o("MAWUserJidWrapper").getMyUserJid()), r = new Set();
		for (var a of e) {
			var i, l, u;
			if (!(r.has(a.message.threadId) || a.directive.actionType !== o("MpsTypes").ActionType.UpsertTopLevel)) {
				var c = o("WAJids").interpretAsGroupJid(o("MAWJids").threadIdToChatJid(a.message.threadId));
				if (c != null) {
					var d = (i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(a.message.payload).adminMessage()) == null ? void 0 : i.proto;
					if ((d == null ? void 0 : d.xmatGroupThreadCreated) != null) {
						r.add(a.message.threadId);
						var m = a.message.senderId === n, p = o("MAWInMemoryThreadStore").getCommittedInMemoryThread(c), _ = (l = p == null ? void 0 : p.authoritativeThreadKey) != null ? l : null, f = (u = p == null ? void 0 : p.optimisticThreadKey) != null ? u : null;
						(f != null || _ == null) && t.push({
							tag: "CreateE2EEMetadataThreadV2",
							value: {
								bumpTimestampMs: (s || (s = o("I64"))).of_float(a.message.timestampMs),
								creationSource: m ? "outgoing_message" : "incoming_message",
								folderId: o("MAWFolderTypes").FOLDER_ID.INBOX,
								jid: c,
								optimisticThreadKey: f
							}
						}), (f != null || _ != null) && t.push({
							tag: "VerifyThreadExists",
							value: {
								authoritativeThreadKey: _,
								cannotReplyReason: null,
								clientThreadKey: f,
								createAsOutgoing: m,
								createIfMissing: !0,
								description: "mpsThreadContentsPostProcessor",
								folder: null,
								instanceKey: null,
								isGroup: !0,
								jid: c,
								lastReadTs: o("WATimeUtils").castToMillisTime(a.message.timestampMs)
							}
						}), t.push({
							tag: "ThreadUpdated",
							value: o("MAWBridgeTypesCreators").createBridgeUpdatedThread({ threadJid: c })
						}), t.push({
							tag: "UpdateThreadActivity",
							value: {
								bumpTimestampMs: (s || (s = o("I64"))).of_float(a.message.timestampMs),
								chatJid: c,
								source: m ? "outgoing_msg" : "incoming_msg"
							}
						});
					}
				}
			}
		}
		return t;
	}
	function m(e) {
		var t = [];
		for (var n of e) {
			var r = o("MAWJids").threadIdToChatJid(n), a = o("WAJids").interpretAsGroupJid(r);
			a != null && t.push(a);
		}
		return t;
	}
	function p(e) {
		var t = [];
		return e.forEach(function(e) {
			e != null && t.push({
				tag: "GroupInfoUpdated",
				value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(e)
			});
		}), t;
	}
	function _(e) {
		return e === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode.ALL_MEMBERS ? "all_member_add" : e === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode.ADMINS_ONLY ? "admin_add" : e === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode.UNSET || e === null || e === void 0 ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function f(e) {
		for (var t of e) {
			var n, r, a;
			if (t.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel) {
				var i = o("WAJids").interpretAsGroupJid(o("MAWJids").threadIdToChatJid(t.message.threadId));
				if (i != null) {
					var l = (n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(t.message.payload).adminMessage()) == null ? void 0 : n.proto;
					if (l != null) {
						var s = o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(i);
						if (s != null) {
							var u = s, c = (r = l.groupNameChanged) == null ? void 0 : r.groupName;
							c != null && (u = babelHelpers.extends({}, u, {
								name: c.length > 0 ? c : void 0,
								nameOwner: o("WAJids").toMsgrUserJid(t.message.senderId),
								nameTs: o("WATimeUtils").castMilliSecondsToUnixTime(t.message.timestampMs)
							}));
							var d = _((a = l.groupMembershipAddModeChanged) == null ? void 0 : a.mode);
							d != null && (u = babelHelpers.extends({}, u, { memberAddMode: d })), u !== s && o("MAWInMemoryGroupInfoStore").storeInMemoryGroupInfo(u);
						}
					}
				}
			}
		}
	}
	function g(e) {
		return (e != null ? e : []).map(function(e) {
			return o("WAJids").toMsgrUserJid(e);
		});
	}
	function h(e) {
		return e.length === 0 ? [] : [{
			tag: "ParticipantsUpdated",
			value: o("MAWBridgeParticipants").createBridgeParticipants(e)
		}];
	}
	function y(e) {
		return e.map(function(e) {
			var t = e.threadJid, n = e.userJid;
			return {
				tag: "ParticipantRemoved",
				value: {
					threadJid: t,
					userId: o("WAJids").extractUserId(n)
				}
			};
		});
	}
	function C(e) {
		var t = [];
		for (var n of e) {
			var r;
			if (n.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel) {
				var a = o("WAJids").interpretAsGroupJid(o("MAWJids").threadIdToChatJid(n.message.threadId));
				if (a != null) {
					var i = (r = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(n.message.payload).adminMessage()) == null ? void 0 : r.proto;
					if (i != null) {
						var l = i.groupParticipantChanged, s = g(l == null ? void 0 : l.targetUserId);
						s.length > 0 && ((l == null ? void 0 : l.action) === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupParticipantChanged$Action.ADDED ? t.push.apply(t, h(o("MAWInMemoryParticipantStore").insertInMemoryParticipants(a, s.map(function(e) {
							return {
								type: "participant",
								userJid: e
							};
						})))) : (l == null ? void 0 : l.action) === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupParticipantChanged$Action.REMOVED && t.push.apply(t, y(o("MAWInMemoryParticipantStore").deleteInMemoryParticipants(a, s))));
						var u = i.groupAdminChanged, c = g(u == null ? void 0 : u.targetUserId);
						c.length > 0 && ((u == null ? void 0 : u.action) === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupAdminChanged$Action.ADDED ? t.push.apply(t, h(o("MAWInMemoryParticipantStore").updateInMemoryParticipantTypes(a, c, "admin"))) : (u == null ? void 0 : u.action) === o("WAArmadilloMiTransportAdminMessage.pb").MiTransportAdminMessage$GroupAdminChanged$Action.REMOVED && t.push.apply(t, h(o("MAWInMemoryParticipantStore").updateInMemoryParticipantTypes(a, c, "participant"))));
					}
				}
			}
		}
		return t;
	}
	function b(t) {
		return (e || (e = n("Promise"))).resolve().then(function() {
			var e = m(t).map(function(e) {
				return o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e);
			});
			return p(e);
		});
	}
	function v(e) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = new Set();
			for (var n of e) n.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel && t.add(n.message.threadId);
			if (t.size === 0) return new Map();
			try {
				f(e);
			} catch (e) {
				r("FBLogger")("mps").catching(r("getErrorSafe")(e)).warn("[MpsThreadContentsPostProcessor] Failed to store group info updates");
			}
			var a = [];
			try {
				a.push.apply(a, d(e));
			} catch (e) {
				r("FBLogger")("mps").catching(r("getErrorSafe")(e)).warn("[MpsThreadContentsPostProcessor] Failed to emit group thread created events");
			}
			try {
				a.push.apply(a, C(e));
			} catch (e) {
				r("FBLogger")("mps").catching(r("getErrorSafe")(e)).warn("[MpsThreadContentsPostProcessor] Failed to store participant updates");
			}
			try {
				a.push.apply(a, u(t));
			} catch (e) {
				r("FBLogger")("mps").catching(r("getErrorSafe")(e)).warn("[MpsThreadContentsPostProcessor] Failed to emit 1:1 message request events");
			}
			try {
				a.push.apply(a, c(e));
			} catch (e) {
				r("FBLogger")("mps").catching(r("getErrorSafe")(e)).warn("[MpsThreadContentsPostProcessor] Failed to emit group invite events");
			}
			try {
				var i = yield b(t);
				a.push.apply(a, i);
			} catch (e) {
				r("FBLogger")("mps").catching(r("getErrorSafe")(e)).warn("[MpsThreadContentsPostProcessor] Failed to emit group info events");
			}
			return a.length > 0 && o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: a }), new Map();
		}), S.apply(this, arguments);
	}
	var R = {
		name: "MpsThreadContentsPostProcessor",
		process: v
	};
	l.MpsThreadContentsPostProcessor = R;
}), 98);
