__d("WAWebStatusPrivacyReshareSettings.react", [
	"fbt",
	"WAWebDrawerSection.react",
	"WAWebLogStatusPrivacySettings",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsStatus",
	"WDSFontTokenStyles",
	"WDSIconIcRepeat.react",
	"WDSSwitch.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		label: {
			color: "x14ug900",
			$$css: !0
		},
		description: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p() {
		var t, a = o("react-compiler-runtime").c(16), i;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [], a[0] = i) : i = a[0];
		var l = r("useWAWebAsync")(_, i), u = l.value, p = d(null), f = p[0], g = p[1], h = (t = f != null ? f : u) != null ? t : !1, y;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (y = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
					statusPrivacySettingsAction: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.ALLOW_RESHARING_CLICKED,
					statusPrivacySurface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS,
					allowResharing: e
				});
				try {
					yield r("WAWebUserPrefsStatus").persistStatusReshareAllowed(e), g(e);
				} catch (e) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[1] = y) : y = a[1];
		var C = y, b, v, S;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }), v = { className: "x1p57kb1" }, S = { className: "x78zum5 x1cy8zhl x1qughib x1xrf6ya xscbp6u x1ypdohk" }, a[2] = b, a[3] = v, a[4] = S) : (b = a[2], v = a[3], S = a[4]);
		var R, L;
		a[5] !== h ? (R = function() {
			C(!h);
		}, L = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), C(!h));
		}, a[5] = h, a[6] = R, a[7] = L) : (R = a[6], L = a[7]);
		var E;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsxs("div", {
			className: "x78zum5 x1cy8zhl xs2akgl x98rzlu xeuugli",
			children: [c.jsx("div", {
				className: "x78zum5 x6s0dn4 xl56j7k xhslqc4",
				children: c.jsx(r("WDSIconIcRepeat.react"), {})
			}), c.jsxs("div", {
				className: "x78zum5 xdt5ytf x98rzlu xeuugli x129bwdz",
				children: [c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, m.label), { children: s._(
					/*BTDS*/
					""
				) })), c.jsx("div", babelHelpers.extends({}, e.props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, m.description), { children: s._(
					/*BTDS*/
					""
				) }))]
			})]
		}), a[8] = E) : E = a[8];
		var k;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		).toString(), a[9] = k) : k = a[9];
		var I;
		a[10] !== h ? (I = c.jsx(r("WDSSwitch.react"), {
			value: h,
			"aria-label": k
		}), a[10] = h, a[11] = I) : I = a[11];
		var T;
		return a[12] !== R || a[13] !== L || a[14] !== I ? (T = c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [b, c.jsx("div", babelHelpers.extends({}, v, { children: c.jsxs("div", babelHelpers.extends({}, S, {
				role: "button",
				tabIndex: 0,
				onClick: R,
				onKeyDown: L,
				"data-testid": "status-reshare-toggle",
				children: [E, I]
			})) }))]
		}), a[12] = R, a[13] = L, a[14] = I, a[15] = T) : T = a[15], T;
	}
	function _() {
		return r("WAWebUserPrefsStatus").getStatusReshareAllowed();
	}
	l.default = p;
}), 226);
