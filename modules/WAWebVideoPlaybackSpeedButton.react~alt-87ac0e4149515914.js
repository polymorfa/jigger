__d("WAWebVideoPlaybackSpeedButton.react", [
	"fbt",
	"WDSButton.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.disabled, n = t === void 0 ? !1 : t, o = e.onClick, a = e.playbackRate;
		return u.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					"",
					[s._param("speed", a + "x")]
				),
				disabled: n,
				label: d(a),
				onPress: o,
				size: "small",
				type: "media",
				variant: "borderless"
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
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
