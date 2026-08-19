__d("MAWThreadNewestMsgOrReactionUtils", [
	"FBLogger",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbReaction",
	"MAWDbReactionsTxns",
	"MAWDexieTable",
	"MAWGetThreadUpdateType",
	"MAWODSProxy",
	"MAWThreadUpdateType",
	"WALogger",
	"WAMsg",
	"WAOdsEnums",
	"WATimeUtils",
	"first",
	"last"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		return m(e, t, u);
	}
	function u(e, t) {
		switch (e) {
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD:
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.MARK_THREAD_AS_UNREAD: return t !== !0;
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE:
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY: return !1;
			default: throw r("FBLogger")("messenger_web").mustfixThrow("[MAWCentralizedThreadUpdate] Unhandled threadUpdateType to create filter function : " + e);
		}
	}
	function c(e, t) {
		return m(e, t, d);
	}
	function d(e, t) {
		switch (e) {
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY:
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD:
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.MARK_THREAD_AS_UNREAD: return t !== !0;
			case o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE: return !1;
			default: throw r("FBLogger")("messenger_web").mustfixThrow("[MAWCentralizedThreadUpdate] Unhandled threadUpdateType to create filter function : %s", e);
		}
	}
	function m(t, n, r) {
		var a = function(a) {
			return a == null ? o("MAWDexieTable").dexieResolve(null) : _(t, n, r, a);
		};
		return p(t, n, r).then(function(t) {
			return a(t).then(function(r) {
				if (t == null && r == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[CentralizedThreadUpdate] No Reaction or Message in ", " is eligible for snippet"])), n), null;
				if (r == null) return t;
				if (t == null) return r;
				var a = o("WATimeUtils").castToMillisTime(o("MAWDbMsg").getSortOrderWithFallback(t)), i = o("MAWDbReaction").getReactionTimeMs(r);
				return a >= i ? t : r;
			});
		});
	}
	function p(e, t, n) {
		return o("MAWDbMsgTxns").fetchMessagesFromDbWithSortOrderMs(e, t, null, !0, 1, function(e) {
			var t;
			return n(o("MAWGetThreadUpdateType").getThreadUpdateTypeForMsg({
				adminType: (t = e.msgContent) == null ? void 0 : t.adminType,
				author: e.author,
				msgType: e.type,
				xmaMessageType: e.xmaMessageType
			}), e.ephemeralMsgDisappeared === !0);
		}, "before").then(r("first"));
	}
	function _(e, t, n, a) {
		var i = o("MAWDbMsg").getSortOrderWithFallback(a), l = function(a, l) {
			return o("MAWDbReactionsTxns").fetchReactionsFromDbWithTimestamp(e, t, o("WATimeUtils").castToMillisTime(i), l, l == null, a, function(e) {
				return n(o("MAWGetThreadUpdateType").getThreadUpdateTypeForReaction(e), !1) && o("MAWDbReaction").getReactionTimeMs(e) > i;
			});
		}, s = [1, 10], u = 100, c = new Set(), d = function(n, a) {
			var t;
			return l((t = s[n]) != null ? t : u, a).then(function(t) {
				var a = t.filter(function(e) {
					return !c.has(h(e));
				});
				return a.length === 0 ? (o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_THREAD_GET_NEWEST_REACTION_BATCH_NUM,
					key: "new." + n
				}), null) : f(e, a).then(function(e) {
					var a = e.newestReaction, i = e.nullMsgIds;
					return a != null ? (o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_THREAD_GET_NEWEST_REACTION_BATCH_NUM,
						key: "new." + n
					}), a) : (i.forEach(function(e) {
						return c.add(e);
					}), d(n + 1, r("last")(t)));
				});
			});
		};
		return d(0, null);
	}
	function f(e, t) {
		return o("MAWDbMsgTxns").getUniqueMsgsByProtocolMsgIds(e, t.map(g)).then(function(e) {
			var n = new Set(e.map(y)), r = new Set(), o = null;
			return t.forEach(function(e) {
				var t = h(e);
				n.has(t) ? o = C(o, e) : r.add(t);
			}), {
				newestReaction: o,
				nullMsgIds: r
			};
		});
	}
	function g(e) {
		return {
			author: e.reactToAuthor,
			chat: e.threadJid,
			externalId: e.reactToExternalId
		};
	}
	function h(e) {
		return o("WAMsg").craftWAMsgIdString(g(e));
	}
	function y(e) {
		return o("WAMsg").craftWAMsgIdString({
			author: e.author,
			chat: e.threadJid,
			externalId: e.externalId
		});
	}
	function C(e, t) {
		return e == null ? t : t == null || o("MAWDbReaction").getReactionTimeMs(e) > o("MAWDbReaction").getReactionTimeMs(t) ? e : t;
	}
	l.getNewestMsgOrReactionForBump = s, l.getNewestMsgOrReactionForSnippet = c, l.filterForSnippet = d;
}), 98);
