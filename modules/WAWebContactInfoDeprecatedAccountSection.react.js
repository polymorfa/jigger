__d("WAWebContactInfoDeprecatedAccountSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebConversationDeprecatedLidChatUtils",
	"WAWebGroupInfoSeparator.react",
	"WDSFlex.stylex",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { notice: {
		paddingTop: "x1p57kb1",
		paddingBottom: "xvpt6g3",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(3), a = t.chat;
		if (!o("WAWebConversationDeprecatedLidChatUtils").isDeprecatedLidChatSendBlocked(a)) return null;
		var i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(r("WAWebGroupInfoSeparator.react"), {}), n[0] = i) : i = n[0];
		var l;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexCenter, d.notice), n[1] = l) : l = n[1];
		var u;
		return n[2] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsxs(c.Fragment, { children: [i, c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			testid: "contact-info-deprecated-account-section",
			children: c.jsx("div", babelHelpers.extends({}, l, { children: c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		})] }), n[2] = u) : u = n[2], u;
	}
	l.default = m;
}), 226);
