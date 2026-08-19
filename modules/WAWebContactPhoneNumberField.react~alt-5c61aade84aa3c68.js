__d("WAWebContactPhoneNumberField.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebPhoneNumberInput.react",
	"WDSIconIcCheck.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
		paddingTop9: {
			paddingTop: "x96k8nx",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, _ = {
		inputRow: {
			borderBottomWidth: "xlxy82",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x16pkwpw",
			$$css: !0
		},
		inputFocused: {
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		checkMark: {
			color: "xdlexau",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.countryCode, n = e.errorMessageDOMId, a = e.errorShown, i = e.isValid, l = e.numberWithoutPrefix, c = e.onChange, f = e.onEnter, g = m(!1), h = g[0], y = g[1], C = d(null);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: "x1n2onr6 xeuugli",
			grow: 1,
			align: "stretch",
			dir: "auto",
			children: [u.jsx("div", {
				className: "x1pg5gke x1d3mw78 xm7witj",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [_.inputRow, h && _.inputFocused],
				align: "center",
				children: [u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [p.paddingTop9, p.paddingBottom5],
					grow: 1,
					shrink: 1,
					children: u.jsx(r("WAWebPhoneNumberInput.react"), {
						countryCodeIso: t,
						errorMessageDOMId: n,
						errorShown: a,
						onBlur: function() {
							y(!1);
						},
						onFocus: function() {
							y(!0);
						},
						onChange: c,
						onEnter: f,
						phoneNumberWithoutCountryPrefix: l,
						ref: C,
						showCountryPrefix: !1,
						ariaLabel: s._(
							/*BTDS*/
							""
						)
					})
				}), i && u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 0,
					shrink: 0,
					children: u.jsx(r("WDSIconIcCheck.react"), { xstyle: _.checkMark })
				})]
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
