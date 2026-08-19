__d("useWAWebContactManagerSelection", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo, d = s.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(18), n = d(_), r = n[0], a = n[1], i;
		t[0] !== r ? (i = function(t) {
			return r.has(String(t));
		}, t[0] = r, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = function(t) {
			a(function(e) {
				var n = new Map(e), r = String(t);
				return n.has(r) ? n.delete(r) : n.set(r, t), n;
			});
		}, t[2] = s) : s = t[2];
		var u = s, c;
		t[3] !== e ? (c = function() {
			a(function(t) {
				var n = e.length > 0 && e.every(function(e) {
					return t.has(String(e));
				});
				return n ? new Map() : new Map(e.map(p));
			});
		}, t[3] = e, t[4] = c) : c = t[4];
		var m = c, f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			a(new Map());
		}, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== r ? (h = new Set(r.values()), t[6] = r, t[7] = h) : h = t[7];
		var y = h, C = r.size, b;
		t[8] !== e || t[9] !== r ? (b = e.length > 0 && e.every(function(e) {
			return r.has(String(e));
		}), t[8] = e, t[9] = r, t[10] = b) : b = t[10];
		var v = b, S = C > 0 && !v, R;
		return t[11] !== v || t[12] !== S || t[13] !== l || t[14] !== C || t[15] !== y || t[16] !== m ? (R = {
			selectedJids: y,
			isSelected: l,
			toggle: u,
			toggleAll: m,
			clear: g,
			selectedCount: C,
			isAllSelected: v,
			isIndeterminate: S
		}, t[11] = v, t[12] = S, t[13] = l, t[14] = C, t[15] = y, t[16] = m, t[17] = R) : R = t[17], R;
	}
	function p(e) {
		return [String(e), e];
	}
	function _() {
		return new Map();
	}
	l.default = m;
}), 98);
