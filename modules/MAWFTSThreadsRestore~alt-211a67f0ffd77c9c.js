__d("MAWFTSThreadsRestore", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"LSFactory",
	"LSFetchFtsThreadsStoredProcedure",
	"LSMessagingThreadTypeUtil",
	"MAWBridgeSendAndReceive",
	"MAWFTSRestoreCap",
	"MAWFTSRestoreSyncLogger",
	"MAWJids",
	"ReQL",
	"ThreadsDoublyLinkedList",
	"WAJids",
	"emptyFunction",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (function() {
		function t() {
			this.$1 = new Map(), this.$4 = !1, this.$5 = (e || (e = o("I64"))).zero, this.$6 = !1, this.$7 = new Set(), r("FBLogger")("messenger_web").info("New MAWFTSThreadsRestore instance"), this.$2 = new (r("ThreadsDoublyLinkedList"))();
		}
		var n = t.prototype;
		return n.startThreadsRestore = async function() {
			this.$4 || (this.$4 = !0, this.$6 = !0, await o("MAWFTSRestoreSyncLogger").initLoggingSessionId(), await this.$8(), await this.$9());
		}, n.isThreadQueryInProgress = function() {
			return this.$6 || this.$7.size > 0;
		}, n.getInitialLastActivityTimeForThreadMs = function(t) {
			return this.$1.get(t);
		}, n.getThreadsHead = function() {
			return this.$2.getHead();
		}, n.hasThread = function(t) {
			return this.$2.has(t);
		}, n.insertIntoHead = function(t) {
			this.$2.insertToHead(t);
		}, n.removeThread = function(t) {
			this.$2.remove(t);
		}, n.$10 = function(t, n) {
			o("MAWFTSRestoreSyncLogger").onFetchThreadsPageStart(), t.runInTransaction(function(e) {
				return r("LSFetchFtsThreadsStoredProcedure")(r("LSFactory")(e), {
					clientCallerId: "msgr_search_web_fts_threads_fetch",
					sessionId: "",
					timestamp: n
				});
			}, "readwrite", void 0, void 0, i.id + ":123");
		}, n.$11 = function(n, a, i) {
			i === void 0 && (i = r("emptyFunction")), this.$6 = !0;
			var t = a.hasNextPage, l = a.nextPageCursor, s = a.resultCount, u = (e || (e = o("I64"))).to_int32(s), c = !e.equal(l, this.$5), d = o("MAWFTSRestoreCap").isRestoreTimeWithinCap(e.to_float(l));
			c && o("MAWFTSRestoreSyncLogger").onFetchThreadsPageComplete(u), t && d ? c && (this.$5 = l, this.$10(n, l)) : (this.$6 = !1, this.$7.size === 0 && o("MAWFTSRestoreSyncLogger").onFetchThreadsComplete(), i());
		}, n.$8 = async function() {
			var t = this, n = await this.$12(), r = o("ReQL").fromTableAscending(n.tables.messenger_fts_threads_queries, [
				"hasNextPage",
				"nextPageCursor",
				"resultCount"
			]), a = { contents: function() {} };
			a.contents = r.subscribe(function(e, r) {
				r.operation !== "delete" && t.$11(n, r.value, a.contents);
			});
			var i = await o("ReQL").firstAsync(r);
			i ? this.$11(n, i) : this.$10(n, (e || (e = o("I64"))).max_int);
		}, n.$13 = function(n) {
			var t = this, a = n.nextMessageTimestamp, i = n.threadId, l = n.threadType, s = (e || (e = o("I64"))).to_string(i), u = o("LSMessagingThreadTypeUtil").isGroup(l), c = u ? o("WAJids").toGroupJid(s) : o("MAWJids").toUserJid(s);
			this.$7.add(c), r("promiseDone")(o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchGetFTSNextTimestamp", { threadId: c }).then(function(n) {
				var r = (e || (e = o("I64"))).to_float(a);
				if (o("MAWFTSRestoreCap").isRestoreTimeWithinCap(r)) {
					if (!t.$1.has(c)) {
						t.$1.set(c, r);
						var i = n != null && !o("MAWFTSRestoreCap").isRestoreTimeWithinCap(parseInt(n, 10));
						o("MAWFTSRestoreSyncLogger").incrementTotalResultCount(i);
					}
					if (n !== "0") return t.$2.add(o("WAJids").unsafeCoerceToChatJid(c)), o("MAWBridgeSendAndReceive").sendAndReceive("backend", "searchSetFTSNextTimestamp", {
						newSortOrderMs: e.to_string(a),
						threadId: c
					});
				}
			}).finally(function() {
				t.$7.delete(c), t.$7.size === 0 && !t.$6 && o("MAWFTSRestoreSyncLogger").onFetchThreadsComplete();
			}));
		}, n.$9 = async function() {
			var e = this, t = await this.$12(), n = o("ReQL").fromTableAscending(t.tables.messenger_fts_threads, [
				"threadId",
				"nextMessageTimestamp",
				"threadType"
			]);
			n.subscribe(function(t, n) {
				n.operation === "add" && e.$13(n.value);
			});
			var r = await o("ReQL").toArrayAsync(n);
			r.forEach(function(t) {
				e.$13(t);
			});
		}, n.$12 = async function() {
			return this.$3 == null && (this.$3 = await (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton), this.$3;
		}, t;
	})();
	function d() {
		return u == null && (u = new c()), u;
	}
	l.MAWFTSThreadsRestore = c, l.getInstance = d;
}), 98);
