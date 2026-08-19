__d("MAWOccamadilloOnMutexChange", [
	"I64",
	"LSDefaultSyncGroups",
	"LSIntEnum",
	"LSSyncGroupsUtils",
	"Promise",
	"WALogger",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e) {
		var t = o("LSDefaultSyncGroups").e2eeMetadataSyncGroup;
		return t != null ? e.sync_groups.put(babelHelpers.extends({}, o("LSSyncGroupsUtils").defaultSyncGroup, { groupId: (c || (c = o("LSIntEnum"))).ofNumber(t.groupId) })) : (s || (s = n("Promise"))).resolve();
	}
	function m(e) {
		return e.network_requests.put({
			epochId: void 0,
			failureCount: (u || (u = o("I64"))).zero,
			lastDelayedRequestTimestampMs: void 0,
			lastSentTimestampMs: u.zero,
			lastSyncRequestTimestampMs: u.zero,
			networkTaskIdentifier: void 0,
			syncDatabaseId: (c || (c = o("LSIntEnum"))).ofNumber(95),
			taskQueueName: ""
		});
	}
	function p(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Occamadillo] Resetting sync cursor and network request"]))), r("promiseDone")(t.runInTransaction(function(e) {
			return (s || (s = n("Promise"))).all([d(e), m(e)]);
		}, "readwrite", void 0, void 0, i.id + ":53"));
	}
	l.onOccamadilloMutexChange = p;
}), 98);
