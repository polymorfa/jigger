__d("MAWOnDemandCutoverTrigger", [
	"LSCutoverMappingQueryFromOpenThreadIdStoredProcedure",
	"LSFactory",
	"LSTriggerOnDemandCutoverIfNeededStoredProcedure",
	"MAWCreateAndWaitForAuthoritativeOneToOneThread",
	"MAWOnDemandCutoverQPLLogger",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		o("MAWOnDemandCutoverQPLLogger").startQpl(t, n), r("promiseDone")(e.runInTransaction(function(e) {
			return r("LSCutoverMappingQueryFromOpenThreadIdStoredProcedure")(r("LSFactory")(e), { openThreadId: t });
		}, "readwrite", void 0, void 0, i.id + ":35")), r("promiseDone")(e.runInTransaction(function(e) {
			return r("LSTriggerOnDemandCutoverIfNeededStoredProcedure")(r("LSFactory")(e), { waJid: t });
		}, "readwrite", void 0, void 0, i.id + ":45"));
	}
	function s(t, n, a) {
		e(t, n, a), r("MAWCreateAndWaitForAuthoritativeOneToOneThread")(t, n, "MAWOnDemandCutoverTrigger", function() {
			o("MAWOnDemandCutoverQPLLogger").addPoint(n, "secure_thread_created");
		});
	}
	l.triggerOnDemandCutover = e, l.triggerOnDemandCutoverAndCreateSecureThread = s;
}), 98);
