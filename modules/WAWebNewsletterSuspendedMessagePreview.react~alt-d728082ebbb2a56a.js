__d("WAWebNewsletterSuspendedMessagePreview.react", [
	"fbt",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebSettingsBlockedIcon.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(8), n = e.isGeosuspended, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a = m(r), i = a[0], l = a[1], c, _;
		t[1] !== n ? (c = function() {
			var e = async function() {
				if (n) {
					var e = await o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
					l(e);
				}
			};
			e();
		}, _ = [n], t[1] = n, t[2] = c, t[3] = _) : (c = t[2], _ = t[3]), d(c, _);
		var f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x1k4tb9n" }, t[4] = f) : f = t[4];
		var g;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
			width: 14,
			height: 14,
			displayInline: !0,
			directional: !0,
			xstyle: [p.marginTop3, p.marginInlineEnd3]
		}), t[5] = g) : g = t[5];
		var h;
		return t[6] !== i ? (h = u.jsxs("span", babelHelpers.extends({ title: i }, f, {
			"data-testid": "newsletter-suspended-message-preview",
			children: [g, i]
		})), t[6] = i, t[7] = h) : h = t[7], h;
	}
	l.default = _;
}), 226);
