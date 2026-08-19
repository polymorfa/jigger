__d("WAWebWWAIErrorState.react", [
	"fbt",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.errorType, a = e.onRetry, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1sk1jro x1ci70gm xdx6fka xvtqlqk x1f0uite" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = d(n), t[1] = n, t[2] = l) : l = t[2];
		var c;
		t[3] !== l ? (c = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			textAlign: "center",
			type: "Body2",
			children: l
		}), t[3] = l, t[4] = c) : c = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[5] = m) : m = t[5];
		var p;
		t[6] !== a ? (p = u.jsx(r("WDSButton.react"), {
			label: m,
			onPress: a,
			variant: "borderless"
		}), t[6] = a, t[7] = p) : p = t[7];
		var _;
		return t[8] !== c || t[9] !== p ? (_ = u.jsxs("div", babelHelpers.extends({}, i, {
			"data-testid": "wwai_error_state",
			role: "alert",
			children: [c, p]
		})), t[8] = c, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	function d(e) {
		return e === "timeout" ? s._(
			/*BTDS*/
			""
		).toString() : e === "network" ? s._(
			/*BTDS*/
			""
		).toString() : e === "server" ? s._(
			/*BTDS*/
			""
		).toString() : e === "unknown" ? s._(
			/*BTDS*/
			""
		).toString() : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = c;
}), 226);
