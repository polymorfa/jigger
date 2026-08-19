__d("WAWebWWAIPrivateProcessingBadge.react", [
	"fbt",
	"WAWebLockIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.testid, n = t === void 0 ? "wwai_private_processing_badge" : t;
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1trrmfo",
			"data-testid": n,
			children: [u.jsx("span", {
				className: "xhslqc4 x78zum5 x6s0dn4",
				"aria-hidden": "true",
				children: u.jsx(o("WAWebLockIcon.react").LockIcon, {})
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body3",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
