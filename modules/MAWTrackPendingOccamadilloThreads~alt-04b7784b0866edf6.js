__d("MAWTrackPendingOccamadilloThreads", [
	"Deferred",
	"LSDatabaseSingleton",
	"LSInitSyncCompleteSubscription",
	"LSIntEnum",
	"LSPlatformLsInitLog",
	"MAWMIC",
	"MAWMICSchema",
	"QuickPerformanceLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (e = {}, e[o("MAWMICSchema").ANNOTATIONS.occamadilloBatchesSentToWorker] = 0, e[o("MAWMICSchema").ANNOTATIONS.occamadilloPendingThreadsAfterInitSync] = 0, e[o("MAWMICSchema").ANNOTATIONS.occamadilloDuplicateThreads] = 0, e);
	(function() {
		Object.keys(d).forEach(function(e) {
			o("MAWMIC").addIntAnnotation(e, 0);
		});
	})();
	function m(e) {
		o("MAWMIC").addIntAnnotation(e, ++d[e]);
	}
	function p() {
		return d.occamadilloBatchesSentToWorker;
	}
	var _ = new (r("Deferred"))(), f = new Set(), g = new Set(), h = new Set(), y = new Set();
	function C(e) {
		var t = e.callingSource;
		y.add((c || (c = o("LSIntEnum"))).toNumber(t)), o("MAWMIC").addIntArrayAnnotation(o("MAWMICSchema").ANNOTATIONS.occamadilloCallingSources, Array.from(y));
	}
	var b = null;
	function v(e) {
		if (o("MAWMIC").addPoint(o("MAWMICSchema").POINTS.thread_mapping_start), f.has(e)) {
			m(o("MAWMICSchema").ANNOTATIONS.occamadilloDuplicateThreads);
			return;
		}
		g.add(e), o("LSPlatformLsInitLog").LsSync.isRunning() && h.add(e), b = (s || (s = r("QuickPerformanceLogger"))).currentTimestamp(), f.add(e), o("MAWMIC").addIntAnnotation("occamadilloThreadCount", f.size), o("LSPlatformLsInitLog").LsSync.hasEnded() && m(o("MAWMICSchema").ANNOTATIONS.occamadilloPendingThreadsAfterInitSync);
	}
	function S() {
		o("MAWMIC").addBoolAnnotation("threadMappingAcked", !0);
	}
	async function R(e) {
		var t = await (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
		await o("LSInitSyncCompleteSubscription").maybeWaitForSyncGroup(t, (c || (c = o("LSIntEnum"))).ofNumber(95)), g.delete(e), h.delete(e), o("MAWMIC").addIntAnnotation("occamadilloCompleteThreadCount", f.size - g.size), E();
	}
	function L() {
		_.resolve(), E();
	}
	function E() {
		if (o("MAWMIC").addIntAnnotation("occamadilloThreadCount", f.size), o("LSPlatformLsInitLog").LsSync.hasEnded() && h.size === 0) {
			o("MAWMIC").addPoint(o("MAWMICSchema").POINTS.thread_mapping_end);
			return;
		}
		g.size === 0 && o("MAWMIC").addPoint(o("MAWMICSchema").POINTS.thread_mapping_end);
	}
	l.incrementCounter = m, l.getBatchesSentNumber = p, l.markThreadPassedToNativeOp = C, l.addPendingThread = v, l.markBridgeCallAcked = S, l.removePendingThread = R, l.completeSync = L, l.maybeEndOccamadilloThreadMapping = E;
}), 98);
