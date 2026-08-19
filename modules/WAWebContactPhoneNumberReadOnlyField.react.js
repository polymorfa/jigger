__d("WAWebContactPhoneNumberReadOnlyField.react", [
	"fbt",
	"WAIsoToCc",
	"WAWebFlex.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(8), a = t.countryCode, i = t.numberWithoutPrefix, l;
		n[0] !== a || n[1] !== i ? (l = r("nullthrows")(o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
			countryCodeIso: a,
			phoneNumberWithoutCountryCode: i
		})), n[0] = a, n[1] = i, n[2] = l) : l = n[2];
		var u = l, d = u.formattedInputValue, m = r("WAIsoToCc")[a], p = a + " +" + m + " " + d, _;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginTop8, o("WDSMargins.stylex").wdsMargins.marginBottom16), n[3] = _) : _ = n[3];
		var f, g;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx("div", {
			className: "x1pg5gke x1d3mw78 xm7witj",
			children: s._(
				/*BTDS*/
				""
			)
		}), g = { className: "x1lkfr7t x1fc57z9 x1anpbxc" }, n[4] = f, n[5] = g) : (f = n[4], g = n[5]);
		var h;
		return n[6] !== p ? (h = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: _,
			align: "start",
			grow: 0,
			shrink: 0,
			children: [f, c.jsx("div", babelHelpers.extends({}, g, { children: p }))]
		}), n[6] = p, n[7] = h) : h = n[7], h;
	}
	l.default = d;
}), 226);
