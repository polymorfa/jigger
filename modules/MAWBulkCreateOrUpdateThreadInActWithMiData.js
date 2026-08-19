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
	"Promise",
	"TaskSchedulerPriority",
	"WABaseGlobals",
	"WAExponentialBackoff",
	"WAJids",
	"WATimeUtils",
	"WMIWABridgeApi",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = o("MWFBLogger").MWLogger().tags(["MiActMapping", "Occam"]);
	function y(e, t, n, r) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a, i) {
			var l = v(t), _ = l.map(function(e) {
				var t = e.fbid, n = e.forceLoadMessages, r = n === void 0 ? !1 : n, a = e.instanceKey, i = e.isGroupThread, l = e.jid, s = e.lastActivityTimestampMs, u = e.lastReadWatermarkTimestampMs, c = (g || (g = o("I64"))).to_string(l), d = i ? o("WAJids").toGroupJid(c) : o("MAWJids").toUserJid(c);
				return {
					authoritativeThreadKey: g.to_string(t),
					chatJid: d,
					forceLoadMessages: r,
					instanceKey: a,
					lastActivityTimestampMs: g.to_float(s),
					lastReadWatermarkTimestampMs: g.to_float(u),
					numOfMsgsToLoad: b({ fbid: t })
				};
			}), y = l.map(function(e) {
				var t = e.instanceKey, n = e.jid;
				return t != null ? {
					instanceKey: t,
					intJid: n
				} : null;
			}).filter(Boolean);
			if ((f || (f = r("ExecutionEnvironment"))).isInWorker) {
				var C = _.map(function(e) {
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
				return (m || (m = n("Promise"))).resolve(C);
			} else if ((f || (f = r("ExecutionEnvironment"))).isInBrowser) {
				var R = _.map(function(e) {
					return e.chatJid;
				}), L = o("MAWUICacheServices").getMAWUICacheServices();
				r("gkx")("16151") && L.resetInMemoryCache("snippets", R), r("promiseDone")(L.checkExistingCacheOrGetFromScratchAndNotifyListenersFor("snippets", R));
			}
			(p || (p = o("ODS"))).bumpEntityKey(3303, "maw_thread_mapping", "bulk_create_thread." + a);
			var E = yield S(e, _, y, a, i);
			a === "init_sync" && o("MAWMIC").addPoint("thread_mapping_received");
			var k = null, I = [], T = [], $ = [];
			for (var P of E) {
				if (P.status === "rejected") {
					h.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Thread creation failed: ", ""])), P.reason), k = P.reason;
					continue;
				}
				var N = P.value.chatJid, M = o("WAJids").interpretAsGroupJid(N);
				M != null && ($.push(M), P.value.isCreated ? I.push(M) : P.value.shouldQueryForGroup ? T.push(M) : o("MAWBridgeFireAndForget").fireAndForget("backend", "updateLSThreadFromGroupInfo", { groupJid: M })), r("promiseDone")(o("MAWTrackPendingOccamadilloThreads").removePendingThread(N));
			}
			if (I.length > 0) {
				h.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Querying WA server for ", " new groups"])), I.length);
				try {
					yield r("WMIWABridgeApi").queryGroups({
						groups: I,
						type: "array"
					});
				} catch (e) {
					var w = e instanceof Error ? e.message : "unknown";
					h.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["queryGroups failed for new groups. ", ""])), w);
					var A = e instanceof Error && e.message.includes("\"errorCode\":403");
					if (!A) throw e;
				}
			}
			T.length > 0 && (h.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Querying WA server for ", " existing groups (non-blocking)"])), T.length), D(T));
			for (var F of $) x(F);
			var O = _.map(function(e) {
				return e.forceLoadMessages === !0 && e.numOfMsgsToLoad != null ? {
					jid: e.chatJid,
					numOfMsgsToLoad: e.numOfMsgsToLoad
				} : null;
			}).filter(Boolean);
			if (O.length > 0 && r("promiseDone")(o("MpsOverBridge").mps().batchLoadMessages({
				config: {
					priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY,
					shouldFetchSupplementals: !0,
					shouldFetchTags: !0,
					strategy: "full-fetch"
				},
				debug: { purpose: "MAWBulkCreateOrUpdateThreadInActWithMiData.forceLoadMessages" },
				ranges: O.map(function(e) {
					var t = e.jid, n = e.numOfMsgsToLoad;
					return {
						direction: "desc",
						from: [o("MpsTypes").toTimestamp(o("WABaseGlobals").newClockSkewCalculation() ? o("WATimeUtils").unixTimeMs() : Date.now()), void 0],
						numMessages: n,
						threadId: o("MpsTypes").toThreadId(t)
					};
				})
			})), k != null) throw h.mustfixThrow(k);
			return E;
		}), C.apply(this, arguments);
	}
	function b(e) {
		var t = e.fbid, n = 1, r = 10, a = 20, i = o("MWCookieUtil").getAutoChatTabFromCookie(), l = i ? (g || (g = o("I64"))).equal(i.threadKey, t) : !1, s = l ? r : n, u = location.pathname.split("/");
		return u.indexOf((g || (g = o("I64"))).to_string(t)) > -1 && (s = a), s;
	}
	function v(e) {
		var t = new Set(), n = Array.from(e.reduce(function(e, n) {
			var r = e.get((g || (g = o("I64"))).to_string(n.fbid));
			if (r == null) e.set((g || (g = o("I64"))).to_string(n.fbid), n);
			else {
				n.instanceKey != null && t.add(n.instanceKey);
				var a = r.lastActivityTimestampMs === n.lastActivityTimestampMs && r.lastReadWatermarkTimestampMs === n.lastReadWatermarkTimestampMs;
				h.mustfix("MAWmiActBulkCreateOrUpdateThreadInActWithMiData is called with duplicated threads. Data consistency: %s", a ? "true" : "false");
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
	function S(e, t, n, r, o) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a) {
			var i = new Map();
			n.forEach(function(e) {
				var t = e.instanceKey, n = e.intJid;
				i.set(n, t), o("MAWThreadMappingQPL").addPoint("create_in_maw_start", t);
			}), o("MAWMIC").addPoint("thread_mapping_request_sent_to_worker");
			var l = {
				reason: r,
				s2sInstanceKey: a,
				threads: t
			}, s = yield L(e, l), u = s.reduce(function(e, t) {
				if (t.status === "fulfilled") {
					var n = o("WAJids").threadIdForChatJid(t.value.chatJid);
					e.set(n, t.value.isCreated);
				}
				return e;
			}, new Map());
			return n.forEach(function(e) {
				var t = e.instanceKey, n = e.intJid, r = u.get((g || (g = o("I64"))).to_string(n));
				r == null ? o("MAWThreadMappingQPL").endFailure("create_in_maw_failed", t) : (o("MAWThreadMappingQPL").addAnnotations({ bool: { isMawThreadCreated: r } }, t), o("MAWThreadMappingQPL").addPoint("create_in_maw_success", t));
			}), s;
		}), R.apply(this, arguments);
	}
	function L(e, t) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var r = e != null ? (m || (m = n("Promise"))).resolve(e) : (_ || (_ = o("LSDatabaseSingleton"))).LSDatabaseSingleton, a = yield r.then(function(e) {
				return o("MAWActThreadMapping").bulkVerifyThreadExistsInWorker(e, t);
			});
			return a;
		}), E.apply(this, arguments);
	}
	var k = 3, I = 1e3, T = 8e3;
	function D(t) {
		return o("WAExponentialBackoff").exponentialBackoff({
			maxTimeout: T,
			minTimeout: I,
			retries: k,
			signal: new AbortController().signal
		}, function(e) {
			return r("WMIWABridgeApi").queryGroups({
				groups: t,
				type: "array"
			}).catch(function(t) {
				var n = r("getErrorSafe")(t);
				return e(n);
			});
		}).catch(function(t) {
			var n = r("getErrorSafe")(t);
			h.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"queryGroups failed for existing groups after ",
				" retries. ",
				""
			])), k, n.message);
		});
	}
	function x(e) {
		o("MAWBridgeFireAndForget").fireAndForget("backend", "checkIfGroupParticipant", { threadJid: e });
	}
	l.bulkCreateOrUpdateThreadInActWithMiData = y, l.deduplicateThreadData = v;
}), 98);
