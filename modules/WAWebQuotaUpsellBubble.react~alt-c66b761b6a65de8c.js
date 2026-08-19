__d("WAWebQuotaUpsellBubble.react", [
	"WAWebMessageBubbleActions.react",
	"WAWebMetaOneUpsellLogger",
	"WAWebModalManager",
	"WAWebQuotaUpsellCompanionAlert.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect;
	function m(e) {
		var t = e.benefitType, n = e.metaSlot, a = e.msgId, i = e.body, l = e.bodyLine1, u = e.bodyLine2, m = e.buttons, p = e.title;
		d(function() {
			o("WAWebMetaOneUpsellLogger").logQuotaUpsellView(a, t);
		}, [t, a]);
		var _ = c(function() {
			o("WAWebMetaOneUpsellLogger").logQuotaUpsellCtaClick(t), o("WAWebModalManager").ModalManager.openAlert(s.jsx(r("WAWebQuotaUpsellCompanionAlert.react"), {}));
		}, [t]), f = i != null && i !== "", g = f ? i : l, h = m != null && m.length > 0 ? m[0] : null, y = h != null && h.label != null && h.label !== "" ? h.label : null, C = [];
		p != null && p !== "" && C.push({
			colorName: "contentDefault",
			content: p,
			key: "title",
			type: "Body2Emphasized"
		}), g != null && g !== "" && C.push({
			colorName: "contentDeemphasized",
			content: g,
			key: "body",
			type: "Body2"
		}), u != null && u !== "" && !f && C.push({
			colorName: "contentDeemphasized",
			content: u,
			key: "bodyLine2",
			type: "Body2"
		});
		var b = n != null ? s.jsx("span", {
			className: "xtrg13t x1wbi8v6",
			"data-testid": "quota-upsell-meta-inline",
			children: n
		}) : null;
		return s.jsxs("div", {
			className: "x78zum5 xdt5ytf x16ovd2e",
			"data-testid": "quota-upsell-bubble",
			children: [
				C.length > 0 && s.jsx("div", {
					className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g",
					"data-testid": "quota-upsell-text-block",
					children: C.map(function(e, t) {
						return s.jsxs(r("WDSText.react"), {
							type: e.type,
							colorName: e.colorName,
							children: [e.content, t === C.length - 1 ? b : null]
						}, e.key);
					})
				}),
				C.length === 0 && n != null && s.jsx("div", {
					className: "x78zum5 x13a6bvl",
					"data-testid": "quota-upsell-meta-row",
					children: n
				}),
				y != null && s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
					label: y,
					onClick: _,
					testid: "quota-upsell-cta"
				}] })
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
