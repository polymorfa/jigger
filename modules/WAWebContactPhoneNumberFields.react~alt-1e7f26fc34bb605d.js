__d("WAWebContactPhoneNumberFields.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebContactLogging",
	"WAWebContactPhoneNumberField.react",
	"WAWebCountriesUtils",
	"WAWebCountrySelectField.react",
	"WAWebFlex.react",
	"WAWebOutContactInviteAction",
	"WAWebOutContactInviteGating",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumCompanionInviteOriginType",
	"WDSPaddings.stylex",
	"react",
	"useWAWebCountries"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, m = n("$InternalEnum").Mirrored([
		"Registered",
		"Unregistered",
		"Invalid",
		"Duplicate",
		"IsCustomer"
	]), p = "contact-phone-number-fields-error";
	function _(e) {
		var t = e.countryCode, n = e.fullPhoneNumber, a = e.numberWithoutPrefix, i = e.onChange, l = e.onViewDuplicateContact, u = e.origin, _ = e.status, g = o("useWAWebCountries").useCountries({ filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }), h = g.error, y = g.value, C = _ != null && _ !== m.Registered;
		if (y == null || h != null) return null;
		var b = function(t) {
			v(t, a);
		}, v = function(n, r) {
			i(n != null ? n : t, r);
		}, S = c.jsx(r("WAWebUnstyledButton.react"), {
			onClick: l,
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
				color: "teal",
				weight: "medium",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), R = u === o("WAWebContactLogging").ContactSourceType.NewChat, L = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			"",
			[s._param("view-contact-button", S)]
		) }), E = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) });
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingBottom20],
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				grow: 1,
				shrink: 1,
				dir: "ltr",
				children: [c.jsx("div", {
					className: "xzj7eog",
					dir: "auto",
					children: c.jsx(r("WAWebCountrySelectField.react"), {
						countries: y,
						testid: "phone-number-country-selector",
						onChange: b,
						initialSelection: t
					}, t)
				}), c.jsx(r("WAWebContactPhoneNumberField.react"), {
					countryCode: t,
					numberWithoutPrefix: a,
					onChange: v,
					isValid: _ === m.Registered,
					errorShown: C,
					errorMessageDOMId: p
				})]
			}), _ && c.jsxs(o("WAWebFlex.react").FlexRow, {
				id: p,
				xstyle: d.marginTop10,
				children: [
					_ === m.IsCustomer && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						""
					) }),
					_ === m.Invalid && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						""
					) }),
					_ === m.Registered && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						""
					) }),
					_ === m.Unregistered && c.jsx(f, { fullPhoneNumber: n }),
					_ === m.Duplicate && R && L,
					_ === m.Duplicate && !R && E
				]
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.fullPhoneNumber;
		return n != null && o("WAWebOutContactInviteGating").isContactEditInviteCtaEnabled() ? c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			"",
			[s._param("invite-button", c.jsx(r("WAWebUnstyledButton.react"), {
				testid: "invite-non-wa-contact-btn",
				onClick: function() {
					o("WAWebOutContactInviteAction").sendInvite(n, o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.UNKNOWN).catch(function(t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[out-contact-invite] sendInvite failed unexpectedly: ", ""])), t);
					});
				},
				children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "teal",
					weight: "medium",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}))]
		) }) : c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.PhoneNumberStatusType = m, l.ContactPhoneNumberFields = _;
}), 226);
