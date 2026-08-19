__d("WAWebContactInfoDeprecatedAccountSection.react", [
	"fbt",
	"WAWebChatInfoDrawerSection.react",
	"WAWebConversationDeprecatedLidChatUtils",
	"WAWebGroupInfoSeparator.react",
	"WDSFlex.stylex",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { notice: {
		paddingTop: "x1p57kb1",
		paddingBottom: "xvpt6g3",
		$$css: !0
	} };
	function m(t) {
		var n = t.chat;
		return o("WAWebConversationDeprecatedLidChatUtils").isDeprecatedLidChatSendBlocked(n) ? c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebGroupInfoSeparator.react"), {}), c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			testid: "contact-info-deprecated-account-section",
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexCenter, d.notice), { children: c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		})] }) : null;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
