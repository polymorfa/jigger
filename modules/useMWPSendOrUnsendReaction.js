__d("useMWPSendOrUnsendReaction", [
	"FBLogger",
	"I64",
	"Int64Hooks",
	"LSFactory",
	"LSIntEnum",
	"LSMessagingThreadAttributionType",
	"LSOptimisticUpsertAttachmentReaction",
	"LSOptimisticUpsertReactionStoredProcedure",
	"LSOptimisticUpsertReactionV2StoredProcedure",
	"MWLSThread",
	"MWPActor.react",
	"MessageReactionOperation",
	"MessageReactionStyle",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"react-compiler-runtime",
	"sendToSentQPLLogger",
	"useIsMultiReactionEnabled",
	"useIsReactionsV2Enabled",
	"useMWLSDefaultThreadSourceAndResetAttribution",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e, t, n, a, l, s) {
		return e.runInTransaction(function(e) {
			return r("LSOptimisticUpsertReactionV2StoredProcedure")(r("LSFactory")(e), {
				actorId: t,
				currentCount: l,
				messageId: n.messageId,
				messageTimestamp: n.timestampMs,
				operation: (u || (u = o("LSIntEnum"))).ofNumber(r("MessageReactionOperation").ADD),
				reactionFbid: a,
				reactionLiteral: s,
				reactionStyle: u.ofNumber(r("MessageReactionStyle").BASIC_SUPER_REACT_ANIMATION),
				threadId: n.threadKey,
				viewerIsReactor: !0
			});
		}, "readwrite", void 0, void 0, i.id + ":50");
	}
	function m(e, t, n, r, o, a, i) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a, l, s, c) {
			yield e.runInTransaction(function(e) {
				return r("LSOptimisticUpsertReactionV2StoredProcedure")(r("LSFactory")(e), {
					actorId: t,
					currentCount: a,
					messageId: n.messageId,
					messageTimestamp: n.timestampMs,
					operation: (u || (u = o("LSIntEnum"))).ofNumber(c ? r("MessageReactionOperation").REMOVE_MULTI_REACT : r("MessageReactionOperation").REMOVE),
					reactionFbid: l,
					reactionLiteral: s,
					reactionStyle: u.ofNumber(r("MessageReactionStyle").BASIC_SUPER_REACT_ANIMATION),
					threadId: n.threadKey,
					viewerIsReactor: !1
				});
			}, "readwrite", void 0, void 0, i.id + ":79");
		}), p.apply(this, arguments);
	}
	function _(e, t, n, r, a) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.reactions_v2).getKeyRange(n.threadKey, n.messageId, r)).then(function(i) {
			return d(e, t, n, r, i != null ? i.count : (c || (c = o("I64"))).zero, a);
		});
	}
	function f(t, a) {
		var l = o("react-compiler-runtime").c(9), d = (s || (s = r("useReStore")))(), p = o("MWPActor.react").useActor(), f = r("useMWLSDefaultThreadSourceAndResetAttribution")(), g = o("useIsMultiReactionEnabled").useIsMultiReactEnabled(t.threadKey), h = o("MWLSThread").useThread(t.threadKey), y, C;
		return l[0] !== p || l[1] !== a || l[2] !== d || l[3] !== f || l[4] !== g || l[5] !== t || l[6] !== h ? (y = function(s) {
			var l = !1, y = o("sendToSentQPLLogger").markSendToSentStartWithAnnotation(h, {
				isAttachmentReaction: a != null && a !== "",
				isReaction: !0
			}, r("LSMessagingThreadAttributionType").UNKNOWN);
			r("promiseDone")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a != null && a !== "") {
					var h = a, y = yield (e || (e = n("Promise"))).all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(d.tables.reaction_v2_types).filter(function(e) {
						return e.reactionLiteral === s || e.reactionLiteralVariant16 === s;
					})), o("ReQL").firstAsync(o("ReQL").fromTableAscending(d.tables.attachment_reactions).getKeyRange(t.threadKey, t.messageId, h, p))]), C = y[0], b = y[1], v = b != null && (C != null ? b.reaction === C.reactionLiteral || b.reaction === C.reactionLiteralVariant16 : b.reaction === s);
					return l = v, yield d.runInTransaction(function(e) {
						return r("LSFactory")(e).storedProcedure(r("LSOptimisticUpsertAttachmentReaction"), t.threadKey, (c || (c = o("I64"))).of_float(Date.now()), t.messageId, p, v ? "" : s, h, (u || (u = o("LSIntEnum"))).ofNumber(r("MessageReactionStyle").BASIC_SUPER_REACT_ANIMATION), f(t.threadKey), void 0);
					}, "readwrite", void 0, void 0, i.id + ":190"), !0;
				}
				var S = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(d.tables.threads).getKeyRange(t.threadKey)), R = S ? o("useIsReactionsV2Enabled").isReactionsV2Enabled(S) : !1;
				if (R) {
					var L = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(d.tables.reaction_v2_types).filter(function(e) {
						return e.reactionLiteral === s || e.reactionLiteralVariant16 === s;
					}));
					if (L == null) return r("FBLogger")("messenger_web").warn("Reactions v2: trying to send reaction that is not in reaction_v2_types table"), !1;
					var E = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(d.tables.reactions_v2).getKeyRange(t.threadKey, t.messageId).filter(function(e) {
						return (!g || (c || (c = o("I64"))).equal(e.reactionFbid, L.reactionFbid)) && e.viewerIsReactor;
					}));
					if (E == null) return yield _(d, p, t, L.reactionFbid, s), !0;
					var k = (c || (c = o("I64"))).equal(E.reactionFbid, L.reactionFbid);
					return l = k, (!g || k) && (yield m(d, p, t, E.count, E.reactionFbid, s, g)), k || (yield _(d, p, t, L.reactionFbid, s)), !0;
				}
				return yield d.runInTransaction(function(e) {
					return r("LSOptimisticUpsertReactionStoredProcedure")(r("LSFactory")(e), {
						actorId: p,
						messageId: t.messageId,
						reaction: s,
						sendAttribution: f(t.threadKey),
						threadKey: t.threadKey,
						timestampMs: (c || (c = o("I64"))).of_float(Date.now())
					});
				}, "readwrite", void 0, void 0, i.id + ":298"), !0;
			})().then(function(e) {
				e ? o("sendToSentQPLLogger").markSendToSentSuccess(y) : o("sendToSentQPLLogger").markSendToSentFail(y, l ? "failed_to_send_remove_reaction" : "failed_to_send_reaction");
			}, function(e) {
				throw o("sendToSentQPLLogger").markSendToSentFail(y, l ? "failed_to_send_remove_reaction" : "failed_to_send_reaction", e instanceof Error ? e : void 0), e;
			}));
		}, C = [
			d,
			t,
			a,
			g,
			p,
			f,
			h
		], l[0] = p, l[1] = a, l[2] = d, l[3] = f, l[4] = g, l[5] = t, l[6] = h, l[7] = y, l[8] = C) : (y = l[7], C = l[8]), o("Int64Hooks").useCallbackInt64(y, C);
	}
	l.default = f;
}), 98);
