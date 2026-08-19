__d("WAWebLeadStageNames", ["fbt", "WAWebLeadStage"], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		return e === 0 ? s._(
			/*BTDS*/
			""
		) : e === 1 ? s._(
			/*BTDS*/
			""
		) : e === 2 ? s._(
			/*BTDS*/
			""
		) : e === 3 ? s._(
			/*BTDS*/
			""
		) : e === 4 ? s._(
			/*BTDS*/
			""
		) : e === 5 ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function u(t, n) {
		return s._(
			/*BTDS*/
			"",
			[s._param("lead list name", t), s._param("lead stage name", e(n))]
		);
	}
	function c(t) {
		var n = t.trim().toLowerCase();
		if (n === "") return null;
		for (var r of o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE) if (e(r).toString().toLowerCase() === n) return r;
		return null;
	}
	l.getLeadStageName = e, l.getLeadSublistRowLabel = u, l.getLeadStageFromName = c;
}), 226);
