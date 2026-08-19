__d("WAWebClearFalcoBufferApi", [
	"WALogger",
	"WAWebCanonicalWamFalcoBufferConstants",
	"WAWebLocalStorage",
	"WAWebStorageErrorHandlingUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = 4194304;
	async function d(t) {
		var n = t.force;
		if (r("WAWebLocalStorage") != null) {
			var a = n || p() > c || await o("WAWebStorageErrorHandlingUtils").isQuotaActuallyExceeded();
			if (a) {
				var i = _();
				if (i.length !== 0) try {
					var l = new Set();
					i.forEach(function(e) {
						var t = r("WAWebLocalStorage")[e];
						r("WAWebLocalStorage").removeItem(e);
						for (var n of m(e, t)) l.add(n);
					}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"[falco] cleared ",
						" keys; lost event names: ",
						""
					])), i.length, Array.from(l).join(",")).sendLogs("wam_falco_buffer_cleared");
				} catch (e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[falco] error clearing falco buffer"]))).catching(r("getErrorSafe")(e)).sendLogs("wam_falco_buffer_clear_error");
				}
			}
		}
	}
	function m(e, t) {
		if (typeof t != "string") return [];
		try {
			var n = JSON.parse(t), a = null;
			if (e === o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY ? a = n : n != null && typeof n == "object" && Array.isArray(n.items) && (a = n.items), !Array.isArray(a)) return [];
			var i = [];
			for (var l of a) l != null && typeof l == "object" && typeof l.name == "string" && i.push(l.name);
			return i;
		} catch (e) {
			return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[falco] unable to read cleared event names"]))).catching(r("getErrorSafe")(e)).sendLogs("wam_falco_buffer_clear_count_error"), [];
		}
	}
	function p() {
		if (r("WAWebLocalStorage") == null) return 0;
		var e = 0;
		for (var t of Object.keys(r("WAWebLocalStorage"))) {
			var n, o = (n = r("WAWebLocalStorage")[t]) != null ? n : "";
			e += (t + o).length;
		}
		return e;
	}
	function _() {
		return r("WAWebLocalStorage") == null ? [] : Object.keys(r("WAWebLocalStorage")).filter(function(e) {
			return e.includes("falco_queue_log") || e === o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY;
		});
	}
	l.clearFalcoBuffer = d;
}), 98);
