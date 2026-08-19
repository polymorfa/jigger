__d("WAWebWWAIErrorState.react", [
	"fbt",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.errorType, n = e.onRetry;
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1sk1jro x1ci70gm xdx6fka xvtqlqk x1f0uite",
			"data-testid": "wwai_error_state",
			role: "alert",
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				textAlign: "center",
				type: "Body2",
				children: d(t)
			}), u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: n,
				variant: "borderless"
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
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
