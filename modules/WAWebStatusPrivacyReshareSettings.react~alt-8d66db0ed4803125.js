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
		var t, n = r("useWAWebAsync")(function() {
			return r("WAWebUserPrefsStatus").getStatusReshareAllowed();
		}, []), a = n.value, i = d(null), l = i[0], u = i[1], p = (t = l != null ? l : a) != null ? t : !1, _ = async function(t) {
			o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
				statusPrivacySettingsAction: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.ALLOW_RESHARING_CLICKED,
				statusPrivacySurface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS,
				allowResharing: t
			});
			try {
				await r("WAWebUserPrefsStatus").persistStatusReshareAllowed(t), u(t);
			} catch (e) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		};
		return c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-no-vertical",
			animation: !1,
			children: [c.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }), c.jsx("div", {
				className: "x1p57kb1",
				children: c.jsxs("div", {
					className: "x78zum5 x1cy8zhl x1qughib x1xrf6ya xscbp6u x1ypdohk",
					role: "button",
					tabIndex: 0,
					onClick: function() {
						_(!p);
					},
					onKeyDown: function(t) {
						(t.key === "Enter" || t.key === " ") && (t.preventDefault(), _(!p));
					},
					"data-testid": "status-reshare-toggle",
					children: [c.jsxs("div", {
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
					}), c.jsx(r("WDSSwitch.react"), {
						value: p,
						"aria-label": s._(
							/*BTDS*/
							""
						).toString()
					})]
				})
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
