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
		var t, n = o("react-compiler-runtime").c(16), a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [], n[0] = a) : a = n[0];
		var i = r("useWAWebAsync")(_, a), l = i.value, u = d(null), p = u[0], f = u[1], g = (t = p != null ? p : l) != null ? t : !1, h;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (h = async function(t) {
			o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
				statusPrivacySettingsAction: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.ALLOW_RESHARING_CLICKED,
				statusPrivacySurface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS,
				allowResharing: t
			});
			try {
				await r("WAWebUserPrefsStatus").persistStatusReshareAllowed(t), f(t);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}, n[1] = h) : h = n[1];
		var y = h, C, b, v;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }), b = { className: "x1p57kb1" }, v = { className: "x78zum5 x1cy8zhl x1qughib x1xrf6ya xscbp6u x1ypdohk" }, n[2] = C, n[3] = b, n[4] = v) : (C = n[2], b = n[3], v = n[4]);
		var S, R;
		n[5] !== g ? (S = function() {
			y(!g);
		}, R = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), y(!g));
		}, n[5] = g, n[6] = S, n[7] = R) : (S = n[6], R = n[7]);
		var L;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsxs("div", {
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
		}), n[8] = L) : L = n[8];
		var E;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		).toString(), n[9] = E) : E = n[9];
		var k;
		n[10] !== g ? (k = c.jsx(r("WDSSwitch.react"), {
			value: g,
			"aria-label": E
		}), n[10] = g, n[11] = k) : k = n[11];
		var I;
		return n[12] !== S || n[13] !== R || n[14] !== k ? (I = c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [C, c.jsx("div", babelHelpers.extends({}, b, { children: c.jsxs("div", babelHelpers.extends({}, v, {
				role: "button",
				tabIndex: 0,
				onClick: S,
				onKeyDown: R,
				"data-testid": "status-reshare-toggle",
				children: [L, k]
			})) }))]
		}), n[12] = S, n[13] = R, n[14] = k, n[15] = I) : I = n[15], I;
	}
	function _() {
		return r("WAWebUserPrefsStatus").getStatusReshareAllowed();
	}
	l.default = p;
}), 226);
