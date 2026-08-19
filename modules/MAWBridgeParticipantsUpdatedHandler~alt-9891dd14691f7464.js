__d("MAWBridgeParticipantsUpdatedHandler", [
	"fbt",
	"I64",
	"LSAuthorityLevel",
	"LSContactBlockedByViewerStatus",
	"LSContactGender",
	"LSContactIdType",
	"LSContactType",
	"LSContactViewerRelationship",
	"LSContactWorkForeignEntityType",
	"LSFactory",
	"LSGroupParticipantJoinState",
	"LSIntEnum",
	"LSVerifyContactRowExistsStoredProcedure",
	"MAWCurrentUser",
	"MAWJids",
	"MAWMiActMappingTableAPI",
	"MAWUpdateLSThreadCapabilities",
	"uniqueArray"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = o("MAWCurrentUser").getID(), d = (e || (e = o("I64"))).of_string(c);
	function m(e, t) {
		var n = t.map(function(e) {
			var t = e.chatJid, n = e.type, r = e.userJid;
			return babelHelpers.extends({ chatJid: t }, b(n), { userJid: r });
		});
		return _(e, n);
	}
	function p(e, t) {
		var n = t.participants.map(function(e) {
			return {
				chatJid: e.threadJid,
				isAdmin: e.isAdmin,
				isInvited: e.isInvited,
				isSuperAdmin: e.isSuperAdmin,
				userJid: o("MAWJids").toUserJid(e.fbid)
			};
		});
		return _(e, n);
	}
	async function _(e, t) {
		var n = await g(e, t);
		await Promise.all(n.map(function(t) {
			var n = t.mawParticipant, r = t.threadKey, a = o("MAWJids").convertChatJidToIntJid(n.userJid);
			return [e.participants.get(r, a).then(function(t) {
				var o = y(t, n, r);
				return t != null ? e.participants.put(o) : Promise.all([e.participants.add(o), f(e, a)]);
			}), h(e, a, r, n.isAdmin)];
		}).flat(1 / 0));
	}
	async function f(t, n) {
		await r("LSVerifyContactRowExistsStoredProcedure")(r("LSFactory")(t), {
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
			blockedByViewerStatus: u.ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED),
			contactIdType: u.ofNumber(r("LSContactIdType").FBID),
			contactType: u.ofNumber(r("LSContactType").USER),
			contactViewerRelationship: u.ofNumber(r("LSContactViewerRelationship").UNKNOWN),
			gender: u.ofNumber(r("LSContactGender").UNKNOWN),
			id: n,
			isBlocked: !1,
			isMemorialized: !1,
			isSelf: c === (e || (e = o("I64"))).to_string(n),
			workForeignEntityType: u.ofNumber(r("LSContactWorkForeignEntityType").UNKNOWN)
		});
	}
	async function g(e, t) {
		var n = r("uniqueArray")(t.map(function(e) {
			return e.chatJid;
		})), a = new Map();
		return await Promise.all(n.map(function(t) {
			return o("MAWMiActMappingTableAPI").getThreadKeyForChatJid(e, t).then(function(e) {
				return e != null && a.set(t, e);
			});
		})), t.map(function(e) {
			var t = a.get(e.chatJid);
			return t == null ? null : {
				mawParticipant: e,
				threadKey: t
			};
		}).filter(Boolean);
	}
	async function h(t, n, r, a) {
		await o("MAWUpdateLSThreadCapabilities").disableBlockerCapabilitiesTxn(t, r), (e || (e = o("I64"))).equal(d, n) && (a ? await o("MAWUpdateLSThreadCapabilities").enableAddMembersTxn(t, r) : await o("MAWUpdateLSThreadCapabilities").disableAddMembersTxn(t, r));
	}
	function y(t, n, r) {
		return t == null ? babelHelpers.extends({}, C(n), {
			authorityLevel: (e || (e = o("I64"))).zero,
			contactId: o("MAWJids").convertChatJidToIntJid(n.userJid),
			deliveredWatermarkTimestampMs: e.zero,
			isSuperAdmin: n.isSuperAdmin,
			nickname: void 0,
			normalizedSearchTerms: void 0,
			participantCapabilities: void 0,
			readActionTimestampMs: e.zero,
			readWatermarkTimestampMs: e.zero,
			threadKey: r,
			threadRoles: e.zero
		}) : babelHelpers.extends({}, t, C(n));
	}
	function C(e) {
		return {
			groupParticipantJoinState: e.isInvited ? (u || (u = o("LSIntEnum"))).ofNumber(r("LSGroupParticipantJoinState").INVITED) : (u || (u = o("LSIntEnum"))).ofNumber(r("LSGroupParticipantJoinState").MEMBER),
			isAdmin: e.isAdmin,
			isModerator: !1,
			subscribeSource: e.isSuperAdmin ? s._(
				/*BTDS*/
				""
			).toString() : void 0
		};
	}
	function b(e) {
		return {
			isAdmin: e === "superadmin" || e === "admin",
			isInvited: e === "invitedParticipant",
			isSuperAdmin: e === "superadmin"
		};
	}
	l.callFromMainThread = m, l.call = p, l.mawToLsParticipantTypeConversion = b;
}), 226);
