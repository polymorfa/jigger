__d("WAWebBotPluginMsgBubbleMeta.react", [
	"WAWebClock",
	"WAWebProtobufsAICommon.pb",
	"WAWebSearchPluginBingIconIcon.react",
	"WAWebSearchPluginGoogleIconIcon.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 16;
	function c(e) {
		var t = e.botPluginSearchProvider, n = e.botPluginSearchQuery, a = e.botPluginSearchUrl, i = e.t, l = e.theme;
		if (t == null || a == null) return null;
		var c = null;
		switch (t) {
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.GOOGLE:
				c = s.jsx(o("WAWebSearchPluginGoogleIconIcon.react").SearchPluginGoogleIconIcon, { height: u });
				break;
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.BING:
				c = s.jsx(o("WAWebSearchPluginBingIconIcon.react").SearchPluginBingIconIcon, { height: u });
				break;
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.SUPPORT:
			case o("WAWebProtobufsAICommon.pb").BotPluginMetadata$SearchProvider.UNKNOWN: break;
		}
		var d = null;
		l !== "date" ? i != null && (d = o("WAWebClock").Clock.timestampStr(i)) : i != null && (d = o("WAWebClock").Clock.relativeStr(i));
		var m = n != null ? s.jsx("div", {
			className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
			children: s.jsx(r("WDSTextualLink.react"), {
				href: a,
				textConfig: "Body1",
				children: n
			})
		}) : null;
		return s.jsxs("div", {
			className: "xcxhlts x1y3qizg x19dbzi3 x78zum5 x1qughib",
			children: [s.jsx("div", {
				className: "x1jchvi3 xo1l8bm xs83m0k x6ikm8r x10wlt62 xlyipyv",
				children: s.jsxs("div", {
					className: "x78zum5 x6ikm8r x10wlt62",
					children: [c, s.jsx("div", {
						className: "xe2zdcy x4p5aij x6ikm8r x10wlt62",
						children: m
					})]
				})
			}), s.jsx("div", {
				className: "x78zum5 x13a6bvl xpqajaz",
				children: d
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
