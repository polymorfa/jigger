__d("MAWSendVideoToWorker", [
	"MAWMediaWorkerResource",
	"Promise",
	"WALogger",
	"WebWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = d();
	function c(t) {
		var r;
		return new (s || (s = (n("Promise"))))(function(e) {
			r = u && m(u) ? d() : u, r.setMessageHandler(function(t) {
				e(t);
			}).execute(), r.postMessage(t);
		}).finally(function() {
			r && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Clean up media worker"]))), r.terminate(), (!u || !u.isCurrentState("constructed")) && (u = d()));
		});
	}
	function d() {
		return new (r("WebWorker"))(r("MAWMediaWorkerResource")).setAllowCrossPageTransition(!0);
	}
	function m(e) {
		return e.isCurrentState("preparing") || e.isCurrentState("executing");
	}
	l.sendVideoMessageToWorker = c;
}), 98);
