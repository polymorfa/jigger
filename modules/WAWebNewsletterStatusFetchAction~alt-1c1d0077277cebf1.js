__d("WAWebNewsletterStatusFetchAction", [
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebDBCreateOrUpdateReactions",
	"WAWebDBGetReactions",
	"WAWebDBMessageDelete",
	"WAWebDBMessageUtils",
	"WAWebJidToWid",
	"WAWebNewsletterBackendAddOnsUtils",
	"WAWebNewsletterBridgeMsgAddOnsUtils",
	"WAWebNewsletterDBUtils",
	"WAWebNewsletterGetStatusMyReactionsJob",
	"WAWebNewsletterGetStatusesJob",
	"WAWebNewsletterMetadataCollection",
	"WAWebNewsletterQueryUtils",
	"WAWebNewsletterReactionCollection",
	"WAWebNewsletterStatusProcessingUtils",
	"WAWebNewsletterUpdateMsgsRecordsJob",
	"WAWebStatusCollection",
	"WAWebStatusGatingUtils",
	"WAWebUserPrefsMeUser",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m = n("$InternalEnum").Mirrored([
		"NewStatuses",
		"NoNewStatuses",
		"FetchFailed"
	]), p = new Map();
	async function _(e) {
		var t = p.get(e);
		if (t != null) return t;
		var n = y(e);
		p.set(e, n);
		try {
			return await n;
		} finally {
			p.delete(e);
		}
	}
	async function f(e) {
		return o("WAWebStatusGatingUtils").isChannelStatusLikesSendEnabled() ? o("WAWebNewsletterGetStatusMyReactionsJob").fetchNewsletterStatusMyReactions(e) : null;
	}
	async function g(t, n) {
		if (t.length !== 0) try {
			var r = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(t.map(function(e) {
				return e.serverId;
			}), n, o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus);
			for (var a of t) {
				var i = a.reactionText, l = a.serverId, s = r.get(l);
				s != null && o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.gadd({ id: s.id }).updateMyReaction(i);
			}
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][my-reactions] hydrate failed"]))).tags("newsletter", "status").sendLogs("newsletter-status-my-reactions-hydrate-failed");
		}
	}
	async function h(e, t) {
		var n = o("WAWebStatusCollection").StatusCollection.get(o("WAWebJidToWid").jidWithTypeToWid({
			jidType: "newsletter",
			newsletterJid: t
		}));
		if (n != null) {
			var r = new Set(e.map(function(e) {
				return e.serverId;
			})), a = new Map();
			for (var i of n.msgs.toArray()) {
				var l = i.serverId;
				l != null && !r.has(l) && a.set(o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(l, t).toString(), i);
			}
			if (a.size !== 0) try {
				var u = await o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(Array.from(a.keys())), c = u.filter(function(e) {
					return e.reactionText !== o("WAWebDBGetReactions").REVOKED_REACTION_TEXT && a.has(e.parentMsgKey);
				}).map(function(e) {
					return e.parentMsgKey;
				});
				if (c.length === 0) return;
				var d = o("WATimeUtils").unixTimeMs(), m = o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid();
				await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(c.map(function(e) {
					return {
						parentMsgKey: e,
						senderUserJid: m,
						reactionText: o("WAWebDBGetReactions").REVOKED_REACTION_TEXT,
						timestamp: d,
						orphan: 0,
						msgKey: e
					};
				}));
				for (var p of c) {
					var _ = a.get(p);
					_ != null && o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.gadd({ id: _.id }).updateMyReaction(o("WAWebDBGetReactions").REVOKED_REACTION_TEXT);
				}
			} catch (e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status][my-reactions] reconcile failed"]))).tags("newsletter", "status").sendLogs("newsletter-status-my-reactions-reconcile-failed");
			}
		}
	}
	async function y(e) {
		var t, n = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(r("WAWebNewsletterMetadataCollection") == null || (t = r("WAWebNewsletterMetadataCollection").get(e)) == null ? void 0 : t.membershipType);
		try {
			var a, i, l = await o("WAWebNewsletterGetStatusesJob").getNewsletterStatuses(e, n, {}), s = l.from, d = l.msgs, p = l.reactionCounts, _ = l.revokedServerIds, f = l.viewCounts;
			if (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[newsletter][status] fetched ",
				" statuses for ",
				""
			])), String(d.length), e), await C(s, _ != null ? _ : []), d.length === 0) return S(s, e);
			await b({
				from: s,
				msgs: d,
				viewCounts: f,
				reactionCounts: p,
				isFullFetch: !0
			});
			var g = (a = r("WAWebNewsletterMetadataCollection") == null || (i = r("WAWebNewsletterMetadataCollection").get(e)) == null || (i = i.statusMetadata) == null ? void 0 : i.lastStatusServerId) != null ? a : 0, h = Math.max(o("WAWebNewsletterStatusProcessingUtils").computeMaxServerId(d), g);
			return h > 0 && o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(e, h), m.NewStatuses;
		} catch (t) {
			return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] Failed to fetch statuses for ", ""])), e).catching(r("getErrorSafe")(t)).tags("newsletter", "status").sendLogs("newsletter-status-fetch-failed"), m.FetchFailed;
		}
	}
	async function C(e, t) {
		if (t.length !== 0) {
			var n = o("WAWebStatusCollection").StatusCollection.get(e);
			if (n != null) {
				var r = new Set(t), a = n.msgs.filter(function(e) {
					return e.serverId != null && r.has(e.serverId);
				});
				a.length !== 0 && (n.revokeMsgs(a.map(function(e) {
					return e.id.toString();
				})), await o("WAWebDBMessageDelete").removeStatusMessage(a));
			}
		}
	}
	async function b(e) {
		var t = e.from, n = e.isFullFetch, r = e.msgs, a = e.reactionCounts, i = e.viewCounts;
		await o("WAWebNewsletterStatusProcessingUtils").addAndPersistStatusMessages(t, r);
		var l = r.map(function(e) {
			return e.id;
		}), s = o("WAWebNewsletterStatusProcessingUtils").prepareReactionsForPersist(l, a, o("WATimeUtils").unixTime()), u = s.reactionIdsToRemove, c = s.reactions;
		if (i.size > 0 ? (await o("WAWebNewsletterBackendAddOnsUtils").persistNewsletterStatusInteractions({
			ids: l,
			reactionIdsToRemove: u,
			reactions: c,
			timestamp: Date.now(),
			viewCounts: i
		}), o("WAWebNewsletterStatusProcessingUtils").updateStatusViewCounts(t, r, i), await o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
			ids: l,
			reactionIdsToRemove: u,
			reactions: c
		})) : c.length > 0 && o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] reactions w/o view counts, skip persist"]))).sendLogs("newsletter-status-reactions-no-viewcounts"), n) {
			var m = o("WAWebStatusCollection").StatusCollection.get(t);
			m != null && await v(m);
		}
		o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
	}
	async function v(e) {
		var t = [];
		e.msgs.forEach(function(e) {
			return t.push(e.id.toString());
		});
		var n = await o("WAWebNewsletterUpdateMsgsRecordsJob").getNewsletterMsgAckValues(t);
		e.msgs.forEach(function(e, t) {
			var r = n[t];
			r != null && r >= o("WAWebAck").ACK.READ && e.set({ ack: r });
		});
	}
	function S(e, t) {
		var n, a = o("WAWebStatusCollection").StatusCollection.get(e);
		a != null && o("WAWebStatusCollection").StatusCollection.remove(a);
		var i = r("WAWebNewsletterMetadataCollection") == null ? void 0 : r("WAWebNewsletterMetadataCollection").get(t), l = i == null || (n = i.statusMetadata) == null ? void 0 : n.lastStatusServerId;
		return l != null && o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(t, l), m.NoNewStatuses;
	}
	l.FetchResult = m, l.fetchNewsletterStatuses = _, l.fetchMyStatusReactions = f, l.hydrateMyStatusReactions = g, l.reconcileMyStatusReactions = h;
}), 98);
