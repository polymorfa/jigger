__d("WAWebVideoPlaybackSpeedButton.react", [
	"fbt",
	"WDSButton.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.disabled, a = e.onClick, i = e.playbackRate, l = n === void 0 ? !1 : n, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[0] = c) : c = t[0];
		var m;
		t[1] !== i ? (m = s._(
			/*BTDS*/
			"",
			[s._param("speed", i + "x")]
		), t[1] = i, t[2] = m) : m = t[2];
		var p;
		t[3] !== i ? (p = d(i), t[3] = i, t[4] = p) : p = t[4];
		var _;
		return t[5] !== l || t[6] !== a || t[7] !== m || t[8] !== p ? (_ = u.jsx(r("WDSTooltip.react"), {
			label: c,
			children: u.jsx(r("WDSButton.react"), {
				"aria-label": m,
				disabled: l,
				label: p,
				onPress: a,
				size: "small",
				type: "media",
				variant: "borderless"
			})
		}), t[5] = l, t[6] = a, t[7] = m, t[8] = p, t[9] = _) : _ = t[9], _;
	}
	function d(e) {
		return e === 1 ? s._(
			/*BTDS*/
			""
		) : e === 1.5 ? s._(
			/*BTDS*/
			""
		) : e === 2 ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = c;
}), 226);
