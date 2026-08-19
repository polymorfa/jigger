__d("WAMediaManagerGetMostRecentMediaEntry", [
	"WAFindMostRecentMediaEntry",
	"WAMediaUtils",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.fullSizePlaintextHash, n = e.getMediaEntries, r = e.mediaDownloadFlow;
			r.addPoint("get_media_entries_start");
			var a = yield n(t);
			if (!a.success) return r.addPoint("get_media_entries_fail"), o("WAResultOrError").makeError("missing-media-entry");
			r.addPoint("get_media_entries_end");
			var i = a.value, l = o("WAFindMostRecentMediaEntry").findMostRecentMediaEntry(i);
			if (!l.success) return o("WAResultOrError").makeError("missing-media-entry");
			var s = l.value, u = s[0], c = s[1], d = o("WAMediaUtils").validateDecodedMediaEntryForDownload(c);
			if (!d.success) return d;
			var m = d.value;
			return o("WAResultOrError").makeResult({
				mediaEntries: i,
				msgIdOfRecentMediaEntry: u,
				recentMediaEntry: m
			});
		}), s.apply(this, arguments);
	}
	l.getMostRecentMediaEntry = e;
}), 98);
