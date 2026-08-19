__d("MAWFetchXMABlob", ["FBLogger", "Promise"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var o = t.descriptionForLogging, a = t.url, i = t.xmaContentType;
		return a == null || a === "" ? (e || (e = n("Promise"))).resolve() : window.fetch(a).then(function(e) {
			return e.blob();
		}).catch(function(t) {
			return r("FBLogger")("messenger_web_sharing").mustfix("Error fetching url in xma share from %s, with XMA content type %s and error %s", o, i, t), (e || (e = n("Promise"))).resolve();
		});
	}
	l.fetchBlob = s;
}), 98);
