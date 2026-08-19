__d("WAWebNewsletterSuspendedMessagePreview.react", [
	"fbt",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebSettingsBlockedIcon.react",
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(8), r = e.isGeosuspended, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = m(a), l = i[0], c = i[1], _, f;
		t[1] !== r ? (_ = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (r) {
						var e = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
						c(e);
					}
				});
				function t() {
					return e.apply(this, arguments);
				}
				return t;
			})();
			e();
		}, f = [r], t[1] = r, t[2] = _, t[3] = f) : (_ = t[2], f = t[3]), d(_, f);
		var g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x1k4tb9n" }, t[4] = g) : g = t[4];
		var h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
			width: 14,
			height: 14,
			displayInline: !0,
			directional: !0,
			xstyle: [p.marginTop3, p.marginInlineEnd3]
		}), t[5] = h) : h = t[5];
		var y;
		return t[6] !== l ? (y = u.jsxs("span", babelHelpers.extends({ title: l }, g, {
			"data-testid": "newsletter-suspended-message-preview",
			children: [h, l]
		})), t[6] = l, t[7] = y) : y = t[7], y;
	}
	l.default = _;
}), 226);
