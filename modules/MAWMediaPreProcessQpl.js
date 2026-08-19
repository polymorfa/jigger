__d("MAWMediaPreProcessQpl", [
	"MAWBrowserApi",
	"MAWSendQplToServer",
	"Random",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = typeof self.BigInt == "function", s = r("justknobx")._("3427") * 1e3, u = o("MAWBrowserApi").getNumCpu(), c = o("MAWBrowserApi").getMemClass(), d = o("MAWBrowserApi").readCpuPerformanceClass();
	function m(t, n) {
		var a = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4), i = o("MAWSendQplToServer").startQplUserFlow(r("qpl")._(1056840460, "718"), {
			bool: { has_big_int_support: e },
			string: { preprocess_type: t }
		}, a, s);
		return n && i.addAnnotations({
			int: { input_file_size: n.size },
			string: { mimetype: n.type }
		}), u != null && i.addAnnotations({ int: { cpu_core_count: u } }), c != null && i.addAnnotations({ int: { mem_class: c } }), d != null && i.addAnnotations({ string: { cpu_performance: d } }), babelHelpers.extends({}, i, { flowDetails: {
			event: r("qpl")._(1056840460, "718"),
			instanceKey: a
		} });
	}
	l.startMediaPreProcessQpl = m;
}), 98);
