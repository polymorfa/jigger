__d("WAWebNewsletterWamoSubMessageTypeContextMenu.react", [
	"fbt",
	"WAWebNewsletterWamoSubMessageType",
	"WAWebNewsletterWamoSubMessageTypeContextMenuItem.react",
	"WAWebPremiumChannelIcon.react",
	"WDSIconIcPublic.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onSelect;
		return u.jsxs("div", { children: [u.jsx(d, { onSelect: t }), u.jsx(m, { onSelect: t })] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.onSelect, n = function(n) {
			n.preventDefault(), t(o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.Public);
		};
		return u.jsx(r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"), {
			testid: "mi-public-message",
			action: n,
			icon: u.jsx(r("WDSIconIcPublic.react"), {}),
			text: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.onSelect, n = function(n) {
			n.preventDefault(), t(o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
		};
		return u.jsx(r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"), {
			testid: "mi-wamo-message",
			action: n,
			icon: u.jsx(o("WAWebPremiumChannelIcon.react").PremiumChannelIcon, {}),
			text: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = c;
}), 226);
