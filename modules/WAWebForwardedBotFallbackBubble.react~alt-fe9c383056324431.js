__d("WAWebForwardedBotFallbackBubble.react", [
	"fbt",
	"WAWebMessagePlaceholder.react",
	"WAWebMessageTextBubble.react",
	"WDSIconIcMessageReport.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = e.displayAuthor, n = e.displayType, o = e.mode, a = e.msg, i = e.onDownloadClick, l = s._(
			/*BTDS*/
			""
		), d = c(function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), i());
		}, [i]);
		return u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: a,
			displayType: n,
			displayAuthor: t,
			children: u.jsxs(r("WAWebMessagePlaceholder.react"), {
				Icon: u.jsx(r("WDSIconIcMessageReport.react"), {}),
				msg: a.unsafe(),
				children: [
					u.jsx("span", {
						"data-testid": "forwarded-bot-fallback-bubble-" + o,
						children: l
					}),
					" ",
					u.jsx("span", {
						className: "xo1mcw5 x1ypdohk",
						"data-testid": "forwarded-bot-fallback-download-cta",
						onClick: i,
						onKeyDown: d,
						role: "button",
						tabIndex: 0,
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
