__d("WAWebNewsletterSuspendedMessagePreview.react", [
	"fbt",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebSettingsBlockedIcon.react",
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
		var t = e.isGeosuspended, n = m(s._(
			/*BTDS*/
			""
		)), r = n[0], a = n[1];
		return d(function() {
			async function e() {
				if (t) {
					var e = await o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
					a(e);
				}
			}
			e();
		}, [t]), u.jsxs("span", {
			title: r,
			className: "x1k4tb9n",
			"data-testid": "newsletter-suspended-message-preview",
			children: [u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
				width: 14,
				height: 14,
				displayInline: !0,
				directional: !0,
				xstyle: [p.marginTop3, p.marginInlineEnd3]
			}), r]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
