__d("WAWebMenu.react", [
	"WAWebMenuController.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = o("react-compiler-runtime").c(12), r, a;
		n[0] !== t ? (a = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a) : (r = n[1], a = n[2]);
		var i;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (i = new Map(), n[3] = i) : i = n[3];
		var l = c(i), s = l[0], d = l[1], m;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (m = {
			onChange: async function(t) {
				await d(t);
			},
			onOrderChange: async function(t) {
				await d(t);
			}
		}, n[4] = m) : m = n[4];
		var p = o("WAWebMenuController.react").useRegister(m), _;
		n[5] !== s || n[6] !== r || n[7] !== a ? (_ = u.jsx(o("WAWebMenuController.react").WAWebMenuController, babelHelpers.extends({ data: s }, r, { ref: a })), n[5] = s, n[6] = r, n[7] = a, n[8] = _) : _ = n[8];
		var f;
		return n[9] !== p || n[10] !== _ ? (f = u.jsx(o("WAWebMenuController.react").Register, {
			registerRef: p,
			children: _
		}), n[9] = p, n[10] = _, n[11] = f) : f = n[11], f;
	}
	l.WAWebMenu = d;
}), 98);
