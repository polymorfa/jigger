__d("WAWebOutContactCell.react", [
	"fbt",
	"WALogger",
	"WAWebBoolFunc",
	"WAWebChatCell.react",
	"WAWebDefaultUserIcon.react",
	"WAWebOutContactConsts",
	"WAWebOutContactGetters",
	"WAWebOutContactInviteAction",
	"WAWebOutContactInviteButton.react",
	"WAWebPhoneUtils",
	"WAWebWamEnumCompanionInviteOriginType",
	"react",
	"useWAWebOutContactImpressionLogging",
	"useWAWebOutContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo;
	function _(t) {
		var n = t.contact, a = t.entryPoint, i = t.inviteFlow, l = t.isSearchResult, u = t.onClick, d = t.searchMatch, _ = t.testid, f = t.theme, g = i === o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite, h = o("useWAWebOutContactValues").useWAWebOutContactValues(n.id, [o("WAWebOutContactGetters").getName, o("WAWebOutContactGetters").getPhoneNumber]), y = h[0], C = h[1], b = o("WAWebPhoneUtils").formatPhone(C), v = a != null ? a : l === !0 ? o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_SEARCH : o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_LIST, S = p(function() {
			return d != null && d.results.length > 0 ? d.results.map(function(e) {
				return d.match.substring(e.startIndex, e.startIndex + e.length);
			}).join(" ") : void 0;
		}, [d]), R = m(function() {
			o("WAWebOutContactInviteAction").sendInvite(C, v).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[out-contact-invite] sendInvite failed unexpectedly: ", ""])), t);
			});
		}, [C, v]), L = u != null ? u : g ? void 0 : R, E = r("useWAWebOutContactImpressionLogging")(v);
		return c.jsx("div", {
			ref: E,
			children: c.jsx(r("WAWebChatCell.react"), {
				testid: _ != null ? _ : "out-contact-cell",
				contextEnabled: o("WAWebBoolFunc").returnFalse,
				theme: f,
				image: c.jsx("div", {
					className: "x78zum5 x6s0dn4 xl56j7k",
					children: c.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
						height: 49,
						width: 49
					})
				}),
				primary: y,
				secondary: g ? s._(
					/*BTDS*/
					""
				) : b,
				searchText: S,
				detail: g ? null : c.jsx(r("WAWebOutContactInviteButton.react"), {
					phoneNumber: C,
					entryPoint: v
				}),
				onClick: L,
				idle: !1
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
