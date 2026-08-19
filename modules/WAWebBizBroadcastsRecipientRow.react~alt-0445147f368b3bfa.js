__d("WAWebBizBroadcastsRecipientRow.react", [
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.memo;
	function c(e) {
		var t = e.contact, n = e.contactId, a = e.index, i = e.isSelected, l = e.onToggle, u = o("WAWebFrontendContactGetters").getDisplayName(t);
		function c() {
			l(n);
		}
		function d(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), l(n));
		}
		function m(e) {
			e == null || e.stopPropagation(), l(n);
		}
		return s.jsx("div", babelHelpers.extends({
			role: "button",
			"data-testid": "broadcasts-upsert-audience-screen-row-" + a
		}, {
			0: { className: "x1n67ipk xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3 x1h3rtpe" }
		}[!!i << 0], {
			"aria-pressed": i,
			tabIndex: 0,
			onClick: c,
			onKeyDown: d,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [s.jsx("div", {
					className: "x1iw51ew xde1mab x3hqpx7",
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 12,
						children: [s.jsx(r("WDSBaseCheckbox.react"), {
							"aria-label": u,
							onChange: m,
							tabIndex: -1,
							value: i,
							testid: "broadcasts-upsert-audience-screen-checkbox-row-" + a
						}), s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
							contact: t,
							index: a
						})]
					})
				}), s.jsx("div", {
					className: "xvtqlqk x3hqpx7",
					children: s.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body1",
						maxLines: 1,
						testid: "broadcasts-upsert-audience-screen-phone-row-" + a,
						children: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(t).displayName
					})
				})]
			})
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = u(c);
	l.default = d;
}), 98);
