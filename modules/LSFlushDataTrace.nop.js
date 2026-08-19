__d("LSFlushDataTrace.nop", [
	"MetaConfig",
	"Promise",
	"ReQL",
	"updateAndFlushLSDataTrace"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(a, i, l) {
		return r("MetaConfig")._("62") ? o("ReQL").firstAsync(o("ReQL").fromTableAscending(a.data_trace_meta).getKeyRange(l)).then(function(t) {
			return t != null ? r("updateAndFlushLSDataTrace")(a, l) : (e || (e = n("Promise"))).resolve();
		}) : (e || (e = n("Promise"))).resolve();
	};
	s.__nop_name__ = "LSFlushDataTrace", l.default = s;
}), 98);
