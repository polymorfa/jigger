__d("WAWebContactPhoneNumberReadOnlyField.react", [
	"fbt",
	"WAIsoToCc",
	"WAWebFlex.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = t.countryCode, a = t.numberWithoutPrefix, i = r("nullthrows")(o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
			countryCodeIso: n,
			phoneNumberWithoutCountryCode: a
		})), l = i.formattedInputValue, u = r("WAIsoToCc")[n], d = n + " +" + u + " " + l;
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginTop8, o("WDSMargins.stylex").wdsMargins.marginBottom16),
			align: "start",
			grow: 0,
			shrink: 0,
			children: [c.jsx("div", {
				className: "x1pg5gke x1d3mw78 xm7witj",
				children: s._(
					/*BTDS*/
					""
				)
			}), c.jsx("div", {
				className: "x1lkfr7t x1fc57z9 x1anpbxc",
				children: d
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
