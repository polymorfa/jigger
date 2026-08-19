__d("useWAWebRovingGridNavigation", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useRef, c = s.useState;
	function d(e) {
		if (e == null || e.children.length < 2) return 1;
		var t = e.children[0];
		if (!(t instanceof HTMLElement)) return 1;
		for (var n = t.offsetTop, r = 1, o = 1; o < e.children.length; o++) {
			var a = e.children[o];
			if (a instanceof HTMLElement && a.offsetTop === n) r++;
			else break;
		}
		return r;
	}
	function m(e) {
		return function(t, n, r) {
			var o = r.getColumnCount, a = r.itemCount;
			return n === "down" ? t + (e != null ? e : o()) : n === "end" ? a - 1 : n === "home" ? 0 : n === "left" ? t - 1 : n === "right" ? t + 1 : n === "up" ? t - (e != null ? e : o()) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
			})();
		};
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(17), n = e.initialFocusIndex, r = e.itemCount, a = e.movement, i = u(null), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], t[0] = l) : l = t[0];
		var s = u(l), m = c(-1), p = m[0], _ = m[1], f = c(r), g = f[0], h = f[1];
		g !== r && (h(r), p !== -1 && _(-1));
		var y;
		t[1] !== p || t[2] !== r ? (y = function(t) {
			var e;
			t < 0 || t >= r || t === p || (_(t), (e = s.current[t]) == null || e.focus());
		}, t[1] = p, t[2] = r, t[3] = y) : y = t[3];
		var C = y, b;
		t[4] !== C || t[5] !== p || t[6] !== r || t[7] !== a ? (b = function(t) {
			p !== -1 && C(a(p, t, {
				getColumnCount: function() {
					return d(i.current);
				},
				itemCount: r
			}));
		}, t[4] = C, t[5] = p, t[6] = r, t[7] = a, t[8] = b) : b = t[8];
		var v = b, S;
		t[9] !== v ? (S = {
			down: function() {
				return v("down");
			},
			end: function() {
				return v("end");
			},
			home: function() {
				return v("home");
			},
			left: function() {
				return v("left");
			},
			right: function() {
				return v("right");
			},
			up: function() {
				return v("up");
			}
		}, t[9] = v, t[10] = S) : S = t[10];
		var R = S, L;
		t[11] !== p || t[12] !== n ? (L = function(t) {
			var e = p !== -1 ? p === t : t === n;
			return {
				onBlur: function() {
					return _(-1);
				},
				onFocus: function() {
					return _(t);
				},
				ref: function(n) {
					s.current[t] = n;
				},
				tabIndex: e ? 0 : -1
			};
		}, t[11] = p, t[12] = n, t[13] = L) : L = t[13];
		var E = L, k;
		return t[14] !== E || t[15] !== R ? (k = {
			getItemProps: E,
			gridRef: i,
			handlers: R
		}, t[14] = E, t[15] = R, t[16] = k) : k = t[16], k;
	}
	l.measureGridColumns = d, l.createVerticalGridMovement = m, l.useWAWebRovingGridNavigation = p;
}), 98);
