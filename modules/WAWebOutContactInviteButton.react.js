__d("WAWebOutContactInviteButton.react", [
	"fbt",
	"WALogger",
	"WAWebOutContactInviteAction",
	"WAWebWamEnumCompanionInviteOriginType",
	"WDSButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback;
	function m(t) {
		var n = t.entryPoint, a = n === void 0 ? o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_LIST : n, i = t.phoneNumber, l = d(function(t) {
			t.stopPropagation(), o("WAWebOutContactInviteAction").sendInvite(i, a).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[out-contact-invite] sendInvite failed unexpectedly: ", ""])), t);
			});
		}, [a, i]);
		return c.jsx(r("WDSButton.react"), {
			testid: "out-contact-invite-button",
			size: "small",
			variant: "borderless",
			onPress: l,
			label: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
