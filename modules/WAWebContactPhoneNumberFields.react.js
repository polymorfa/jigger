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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(35), n = e.countryCode, a = e.fullPhoneNumber, i = e.numberWithoutPrefix, l = e.onChange, u = e.onViewDuplicateContact, _ = e.origin, g = e.status, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = { filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION }, t[0] = h) : h = t[0];
		var y = o("useWAWebCountries").useCountries(h), C = y.error, b = y.value, v = g != null && g !== m.Registered;
		if (b == null || C != null) return null;
		var S, R;
		t[1] !== n || t[2] !== i || t[3] !== l ? (R = function(t) {
			S(t, i);
		}, S = function(t, r) {
			l(t != null ? t : n, r);
		}, t[1] = n, t[2] = i, t[3] = l, t[4] = S, t[5] = R) : (S = t[4], R = t[5]);
		var L;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "teal",
			weight: "medium",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[6] = L) : L = t[6];
		var E;
		t[7] !== u ? (E = c.jsx(r("WAWebUnstyledButton.react"), {
			onClick: u,
			children: L
		}), t[7] = u, t[8] = E) : E = t[8];
		var k = E, I = _ === o("WAWebContactLogging").ContactSourceType.NewChat, T;
		t[9] !== k ? (T = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			"",
			[s._param("view-contact-button", k)]
		) }), t[9] = k, t[10] = T) : T = t[10];
		var D = T, x;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), t[11] = x) : x = t[11];
		var $ = x, P;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (P = [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingBottom20], t[12] = P) : P = t[12];
		var N;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "xzj7eog" }, t[13] = N) : N = t[13];
		var M;
		t[14] !== b || t[15] !== n || t[16] !== R ? (M = c.jsx("div", babelHelpers.extends({}, N, {
			dir: "auto",
			children: c.jsx(r("WAWebCountrySelectField.react"), {
				countries: b,
				testid: "phone-number-country-selector",
				onChange: R,
				initialSelection: n
			}, n)
		})), t[14] = b, t[15] = n, t[16] = R, t[17] = M) : M = t[17];
		var w = g === m.Registered, A;
		t[18] !== n || t[19] !== S || t[20] !== v || t[21] !== i || t[22] !== w ? (A = c.jsx(r("WAWebContactPhoneNumberField.react"), {
			countryCode: n,
			numberWithoutPrefix: i,
			onChange: S,
			isValid: w,
			errorShown: v,
			errorMessageDOMId: p
		}), t[18] = n, t[19] = S, t[20] = v, t[21] = i, t[22] = w, t[23] = A) : A = t[23];
		var F;
		t[24] !== A || t[25] !== M ? (F = c.jsxs(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			shrink: 1,
			dir: "ltr",
			children: [M, A]
		}), t[24] = A, t[25] = M, t[26] = F) : F = t[26];
		var O;
		t[27] !== D || t[28] !== a || t[29] !== I || t[30] !== g ? (O = g && c.jsxs(o("WAWebFlex.react").FlexRow, {
			id: p,
			xstyle: d.marginTop10,
			children: [
				g === m.IsCustomer && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					""
				) }),
				g === m.Invalid && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					""
				) }),
				g === m.Registered && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					""
				) }),
				g === m.Unregistered && c.jsx(f, { fullPhoneNumber: a }),
				g === m.Duplicate && I && D,
				g === m.Duplicate && !I && $
			]
		}), t[27] = D, t[28] = a, t[29] = I, t[30] = g, t[31] = O) : O = t[31];
		var B;
		return t[32] !== F || t[33] !== O ? (B = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: P,
			children: [F, O]
		}), t[32] = F, t[33] = O, t[34] = B) : B = t[34], B;
	}
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
