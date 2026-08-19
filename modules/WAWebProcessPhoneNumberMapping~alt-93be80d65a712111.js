__d("WAWebProcessPhoneNumberMapping", [
	"WAArrayUtils",
	"WALogger",
	"WAWebApiContact",
	"WAWebDBCreateLidPnMappings",
	"WAWebHandleMsgTypes.flow",
	"WAWebUpdateLidMetadataJob",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	function c(e) {
		var t = e.data, n = e.lid, r = e.processingResult, o = e.shouldWaitForJob;
		r.push({
			jobArgs: {
				lid: n,
				data: t
			},
			shouldWaitForJob: o
		});
	}
	function d(t) {
		return t.preMatChat != null ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[extractMapping] using preMatChat"]))), t.preMatChat) : t.chat;
	}
	async function m(e, t) {
		var n, r = [], a = e.author, i = e.peerRecipientPn, l = e.recipientLatestLid, u = e.recipientPn, m = d(e), p = o("WAWebWidFactory").asUserLidOrThrow(a);
		if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
			var _ = t == null ? void 0 : t.origin;
			if (u != null) n = {
				lid: o("WAWebWidFactory").asUserLidOrThrow(m),
				pn: o("WAWebWidFactory").asUserWidOrThrow(u),
				learningSource: "process-phone-number-mapping"
			}, c({
				lid: o("WAWebWidFactory").asUserLidOrThrow(m),
				data: { shareOwnPn: !1 },
				shouldWaitForJob: !0,
				processingResult: r
			});
			else if (i != null) l != null ? n = {
				lid: o("WAWebWidFactory").asUserLidOrThrow(m),
				pn: i,
				latestLid: l,
				learningSource: "recipient-latest-lid"
			} : n = {
				lid: o("WAWebWidFactory").asUserLidOrThrow(m),
				pn: i,
				learningSource: "peer-lid-message"
			};
			else if (m.isLid()) {
				var f = await o("WAWebApiContact").getContactRecord(m);
				(f == null || (f == null ? void 0 : f.shareOwnPn) !== !0) && c({
					lid: o("WAWebWidFactory").asUserLidOrThrow(m),
					data: { shareOwnPn: !0 },
					shouldWaitForJob: !1,
					processingResult: r
				});
			} else m.isBot() || o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[extractMappingsForOneToOneLidMessages] peer message with non-LID chat: ", ""])), m.toLogString()).sendLogs("peer-message-non-lid-chat");
			if (_ !== "ctwa") {
				var g = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && e.author.isLid() && e.chat.isLid();
				i == null && !g && (n = "missing-peer-recipient-pn");
			}
			return {
				mapping: n,
				lidMetadataUpdates: r
			};
		}
		var h = e.displayName;
		h != null && c({
			lid: p,
			data: { displayNameLID: h },
			shouldWaitForJob: !0,
			processingResult: r
		});
		var y = e.senderPn;
		return y != null && (n = {
			lid: p,
			pn: o("WAWebWidFactory").asUserWidOrThrow(y),
			learningSource: "process-phone-number-mapping"
		}), y == null && c({
			lid: p,
			data: { shareOwnPn: !0 },
			shouldWaitForJob: !0,
			processingResult: r
		}), {
			mapping: n,
			lidMetadataUpdates: r
		};
	}
	async function p(e) {
		var t, n = e.author, r = e.peerRecipientLid, a = e.recipientLatestLid, i = e.recipientLid, l = d(e);
		if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
			var s = o("WAWebWidFactory").asUserWidOrThrow(l);
			i != null ? t = {
				lid: i,
				pn: s,
				learningSource: "process-phone-number-mapping"
			} : r != null ? a != null ? t = {
				pn: s,
				lid: r,
				latestLid: a,
				learningSource: "recipient-latest-lid"
			} : t = {
				lid: r,
				pn: s,
				learningSource: "peer-pn-message"
			} : t = "missing-peer-recipient-lid";
		}
		var u = e.senderLid;
		return u != null && (t = {
			lid: o("WAWebWidFactory").asUserLidOrThrow(u),
			pn: o("WAWebWidFactory").asUserWidOrThrow(n),
			learningSource: "process-phone-number-mapping"
		}), {
			mapping: t,
			lidMetadataUpdates: []
		};
	}
	async function _(e) {
		var t = e.msgInfo, n = e.msgMeta, r = t.author;
		return r.isLid() ? m(t, n) : p(t);
	}
	async function f(e) {
		var t = e.msgInfo, n = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && t.participantUsername != null;
		if (!n && t.chat.isGroup() && t.author.isLid() && !o("WAWebUserPrefsMeUser").isMeAccount(t.author) && t.participantPn == null && t.displayName == null && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[extractMappingsForGroupOrStatusBroadcastMessage] participantPn is missing for group message from LID author"]))), e.bclParticipant) {
			e.msgInfo;
			var r = g(e.bclParticipant);
			return r == null ? { lidMetadataUpdates: [] } : {
				mapping: r,
				lidMetadataUpdates: []
			};
		}
		var a, i = [], l = t.author, s = t.participantLid, d = t.participantPn;
		d != null ? a = {
			lid: o("WAWebWidFactory").asUserLidOrThrow(l),
			pn: d,
			learningSource: "process-phone-number-mapping"
		} : s != null && !n && (a = {
			lid: s,
			pn: o("WAWebWidFactory").asUserWidOrThrow(l),
			learningSource: "process-phone-number-mapping"
		});
		var m = t.displayName;
		return !o("WAWebUserPrefsMeUser").isMeAccount(l) && m != null && c({
			lid: o("WAWebWidFactory").asUserLidOrThrow(l),
			data: { displayNameLID: m },
			shouldWaitForJob: !0,
			processingResult: i
		}), {
			mapping: a,
			lidMetadataUpdates: i
		};
	}
	function g(e) {
		var t = e.wid, n = e.recipientLatestLid;
		if (t.isLid()) {
			var r = t, a = e.peerRecipientPn;
			if (a == null) {
				var i = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
				return i ? null : "missing-peer-recipient-pn";
			}
			return n ? {
				lid: r,
				latestLid: n,
				pn: a,
				learningSource: "recipient-latest-lid"
			} : {
				lid: r,
				pn: a,
				learningSource: "peer-lid-message"
			};
		}
		var l = e.peerRecipientLid, s = t;
		return l == null ? "missing-peer-recipient-lid" : n ? {
			lid: l,
			latestLid: n,
			pn: s,
			learningSource: "recipient-latest-lid"
		} : {
			lid: l,
			pn: s,
			learningSource: "peer-pn-message"
		};
	}
	function h(e) {
		var t = e.flushImmediately, n = e.mapping;
		return n.learningSource === "recipient-latest-lid" ? o("WAWebDBCreateLidPnMappings").createLidPnMappings({
			mappings: [{
				lid: n.lid,
				pn: n.pn
			}, {
				lid: n.latestLid,
				pn: n.pn
			}],
			flushImmediately: t,
			learningSource: "recipient-latest-lid"
		}) : o("WAWebDBCreateLidPnMappings").createLidPnMappings({
			mappings: [{
				lid: n.lid,
				pn: n.pn
			}],
			flushImmediately: t,
			learningSource: n.learningSource
		});
	}
	async function y(e) {
		var t = e.msgInfo.chat;
		return t.isUser() ? _(e) : t.isGroup() || t.isBroadcast() ? f(e) : { lidMetadataUpdates: [] };
	}
	async function C(e, t, n) {
		if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
			var r = e.bclParticipants.map(function(r) {
				return b({
					msgInfo: e,
					msgMeta: t,
					bclParticipant: r
				}, n);
			}), a = await Promise.all(r);
			return {
				type: "peer-broadcast",
				mappings: a
			};
		}
		return {
			type: "not-peer-broadcast",
			mapping: await b({
				msgInfo: e,
				msgMeta: t
			}, n)
		};
	}
	async function b(e, t) {
		var n, r, a = await y(e), i = a.lidMetadataUpdates, l = a.mapping, s = o("WAArrayUtils").groupByAndMap(i, function(e) {
			return e.shouldWaitForJob ? "waitForJob" : "fireAndForget";
		}, function(e) {
			return e.jobArgs;
		}), u = (n = s.get("waitForJob")) != null ? n : [], c = (r = s.get("fireAndForget")) != null ? r : [];
		return c.length > 0 && o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(c), u.length > 0 && await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(u), l != null && typeof l == "object" && await h({
			mapping: l,
			flushImmediately: t
		}), l;
	}
	l.processPhoneNumberMappings = C;
}), 98);
