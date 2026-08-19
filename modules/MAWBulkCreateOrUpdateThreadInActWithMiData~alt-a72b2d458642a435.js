__d("MAWBulkCreateOrUpdateThreadInActWithMiData", [
	"ExecutionEnvironment",
	"I64",
	"LSDatabaseSingleton",
	"MAWActThreadMapping",
	"MAWBridgeFireAndForget",
	"MAWJids",
	"MAWMIC",
	"MAWThreadMappingQPL",
	"MAWTrackPendingOccamadilloThreads",
	"MAWUICacheServices",
	"MWCookieUtil",
	"MWFBLogger",
	"MpsOverBridge",
	"MpsTypes",
	"ODS",
	"TaskSchedulerPriority",
	"WABaseGlobals",
	"WAExponentialBackoff",
	"WAJids",
	"WATimeUtils",
	"WMIWABridgeApi",
	"getErrorSafe",
	"gkx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = o("MWFBLogger").MWLogger().tags(["MiActMapping", "Occam"]);
	async function h(t, n, a, i) {
		var l = C(n), d = l.map(function(e) {
			var t = e.fbid, n = e.forceLoadMessages, r = n === void 0 ? !1 : n, a = e.instanceKey, i = e.isGroupThread, l = e.jid, s = e.lastActivityTimestampMs, u = e.lastReadWatermarkTimestampMs, c = (f || (f = o("I64"))).to_string(l), d = i ? o("WAJids").toGroupJid(c) : o("MAWJids").toUserJid(c);
			return {
				authoritativeThreadKey: f.to_string(t),
				chatJid: d,
				forceLoadMessages: r,
				instanceKey: a,
				lastActivityTimestampMs: f.to_float(s),
				lastReadWatermarkTimestampMs: f.to_float(u),
				numOfMsgsToLoad: y({ fbid: t })
			};
		}), _ = l.map(function(e) {
			var t = e.instanceKey, n = e.jid;
			return t != null ? {
				instanceKey: t,
				intJid: n
			} : null;
		}).filter(Boolean);
		if ((m || (m = r("ExecutionEnvironment"))).isInWorker) {
			var h = d.map(function(e) {
				return {
					status: "fulfilled",
					value: {
						adminMsgParams: null,
						chatJid: e.chatJid,
						folder: null,
						isCreated: !1,
						participants: [],
						shouldQueryForGroup: !1
					}
				};
			});
			return Promise.resolve(h);
		} else if ((m || (m = r("ExecutionEnvironment"))).isInBrowser) {
			var v = d.map(function(e) {
				return e.chatJid;
			}), S = o("MAWUICacheServices").getMAWUICacheServices();
			r("gkx")("16151") && S.resetInMemoryCache("snippets", v), r("promiseDone")(S.checkExistingCacheOrGetFromScratchAndNotifyListenersFor("snippets", v));
		}
		(p || (p = o("ODS"))).bumpEntityKey(3303, "maw_thread_mapping", "bulk_create_thread." + a);
		var R = await b(t, d, _, a, i);
		a === "init_sync" && o("MAWMIC").addPoint("thread_mapping_received");
		var L = null, I = [], T = [], D = [];
		for (var x of R) {
			if (x.status === "rejected") {
				g.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Thread creation failed: ", ""])), x.reason), L = x.reason;
				continue;
			}
			var $ = x.value.chatJid, P = o("WAJids").interpretAsGroupJid($);
			P != null && (D.push(P), x.value.isCreated ? I.push(P) : x.value.shouldQueryForGroup ? T.push(P) : o("MAWBridgeFireAndForget").fireAndForget("backend", "updateLSThreadFromGroupInfo", { groupJid: P })), r("promiseDone")(o("MAWTrackPendingOccamadilloThreads").removePendingThread($));
		}
		if (I.length > 0) {
			g.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Querying WA server for ", " new groups"])), I.length);
			try {
				await r("WMIWABridgeApi").queryGroups({
					groups: I,
					type: "array"
				});
			} catch (e) {
				var N = e instanceof Error ? e.message : "unknown";
				g.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["queryGroups failed for new groups. ", ""])), N);
				var M = e instanceof Error && e.message.includes("\"errorCode\":403");
				if (!M) throw e;
			}
		}
		T.length > 0 && (g.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Querying WA server for ", " existing groups (non-blocking)"])), T.length), E(T));
		for (var w of D) k(w);
		var A = d.map(function(e) {
			return e.forceLoadMessages === !0 && e.numOfMsgsToLoad != null ? {
				jid: e.chatJid,
				numOfMsgsToLoad: e.numOfMsgsToLoad
			} : null;
		}).filter(Boolean);
		if (A.length > 0 && r("promiseDone")(o("MpsOverBridge").mps().batchLoadMessages({
			config: {
				priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
				shouldFetchSupplementals: !0,
				shouldFetchTags: !0,
				strategy: "full-fetch"
			},
			debug: { purpose: "MAWBulkCreateOrUpdateThreadInActWithMiData.forceLoadMessages" },
			ranges: A.map(function(e) {
				var t = e.jid, n = e.numOfMsgsToLoad;
				return {
					direction: "desc",
					from: [o("MpsTypes").toTimestamp(o("WABaseGlobals").newClockSkewCalculation() ? o("WATimeUtils").unixTimeMs() : Date.now()), void 0],
					numMessages: n,
					threadId: o("MpsTypes").toThreadId(t)
				};
			})
		})), L != null) throw g.mustfixThrow(L);
		return R;
	}
	function y(e) {
		var t = e.fbid, n = 1, r = 10, a = 20, i = o("MWCookieUtil").getAutoChatTabFromCookie(), l = i ? (f || (f = o("I64"))).equal(i.threadKey, t) : !1, s = l ? r : n, u = location.pathname.split("/");
		return u.indexOf((f || (f = o("I64"))).to_string(t)) > -1 && (s = a), s;
	}
	function C(e) {
		var t = new Set(), n = Array.from(e.reduce(function(e, n) {
			var r = e.get((f || (f = o("I64"))).to_string(n.fbid));
			if (r == null) e.set((f || (f = o("I64"))).to_string(n.fbid), n);
			else {
				n.instanceKey != null && t.add(n.instanceKey);
				var a = r.lastActivityTimestampMs === n.lastActivityTimestampMs && r.lastReadWatermarkTimestampMs === n.lastReadWatermarkTimestampMs;
				g.mustfix("MAWmiActBulkCreateOrUpdateThreadInActWithMiData is called with duplicated threads. Data consistency: %s", a ? "true" : "false");
			}
			return e;
		}, new Map()).values());
		return e.forEach(function(t) {
			var r = t.instanceKey;
			return r != null && o("MAWThreadMappingQPL").addAnnotations({ int: {
				mawBulkCreateThreads: e.length,
				mawBulkCreateUniqueThreads: n.length
			} }, r);
		}), t.forEach(function(e) {
			o("MAWThreadMappingQPL").endCancel("thread_not_unique_in_maw_bulk_create", e);
		}), n;
	}
	async function b(e, t, n, r, a) {
		var i = new Map();
		n.forEach(function(e) {
			var t = e.instanceKey, n = e.intJid;
			i.set(n, t), o("MAWThreadMappingQPL").addPoint("create_in_maw_start", t);
		}), o("MAWMIC").addPoint("thread_mapping_request_sent_to_worker");
		var l = {
			reason: r,
			s2sInstanceKey: a,
			threads: t
		}, s = await v(e, l), u = s.reduce(function(e, t) {
			if (t.status === "fulfilled") {
				var n = o("WAJids").threadIdForChatJid(t.value.chatJid);
				e.set(n, t.value.isCreated);
			}
			return e;
		}, new Map());
		return n.forEach(function(e) {
			var t = e.instanceKey, n = e.intJid, r = u.get((f || (f = o("I64"))).to_string(n));
			r == null ? o("MAWThreadMappingQPL").endFailure("create_in_maw_failed", t) : (o("MAWThreadMappingQPL").addAnnotations({ bool: { isMawThreadCreated: r } }, t), o("MAWThreadMappingQPL").addPoint("create_in_maw_success", t));
		}), s;
	}
	async function v(e, t) {
		var n = e != null ? Promise.resolve(e) : (_ || (_ = o("LSDatabaseSingleton"))).LSDatabaseSingleton, r = await n.then(function(e) {
			return o("MAWActThreadMapping").bulkVerifyThreadExistsInWorker(e, t);
		});
		return r;
	}
	var S = 3, R = 1e3, L = 8e3;
	function E(e) {
		return o("WAExponentialBackoff").exponentialBackoff({
			maxTimeout: L,
			minTimeout: R,
			retries: S,
			signal: new AbortController().signal
		}, function(t) {
			return r("WMIWABridgeApi").queryGroups({
				groups: e,
				type: "array"
			}).catch(function(e) {
				var n = r("getErrorSafe")(e);
				return t(n);
			});
		}).catch(function(e) {
			var t = r("getErrorSafe")(e);
			g.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"queryGroups failed for existing groups after ",
				" retries. ",
				""
			])), S, t.message);
		});
	}
	function k(e) {
		o("MAWBridgeFireAndForget").fireAndForget("backend", "checkIfGroupParticipant", { threadJid: e });
	}
	l.bulkCreateOrUpdateThreadInActWithMiData = h, l.deduplicateThreadData = C;
}), 98);
