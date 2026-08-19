__d("WAWebContactInfoMessagesSection.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebStarRefreshedIcon.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onStarred, r;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var a = s._(
				/*BTDS*/
				""
			);
			r = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: a }), t[0] = r;
		} else r = t[0];
		var i = r, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, { iconXstyle: c.secondaryColor }), t[1] = l) : l = t[1];
		var d = l, m;
		return t[2] !== n ? (m = u.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			titleTestId: "section-starred-messages",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			children: u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				icon: d,
				onClick: n,
				testid: "block-starred-messages",
				title: i
			})
		}), t[2] = n, t[3] = m) : m = t[3], m;
	}
	l.default = d;
}), 226);
