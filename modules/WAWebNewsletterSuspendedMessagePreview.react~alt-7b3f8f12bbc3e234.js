__d("WAWebNewsletterSuspendedMessagePreview.react", [
	"fbt",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebSettingsBlockedIcon.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		marginTop3: {
			marginTop: "x7r5mf7",
			$$css: !0
		},
		marginInlineEnd3: {
			marginInlineEnd: "x1p8j9ns",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.isGeosuspended, r = m(s._(
			/*BTDS*/
			""
		)), a = r[0], i = r[1];
		return d(function() {
			function e() {
				return r.apply(this, arguments);
			}
			function r() {
				return r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (t) {
						var e = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
						i(e);
					}
				}), r.apply(this, arguments);
			}
			e();
		}, [t]), u.jsxs("span", {
			title: a,
			className: "x1k4tb9n",
			"data-testid": "newsletter-suspended-message-preview",
			children: [u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
				width: 14,
				height: 14,
				displayInline: !0,
				directional: !0,
				xstyle: [p.marginTop3, p.marginInlineEnd3]
			}), a]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
