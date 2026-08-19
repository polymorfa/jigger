__d("MAWSecureViewOnceMessageBubble.react", [
	"MWViewOnceMessageIcon",
	"MWXIconStrict.react",
	"MWXMessageBubble.react",
	"MWXText.react",
	"MessengerWebUXLogger",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.connectBottom, n = e.connectTop, o = e.label, a = e.mediaRenderQpl, i = e.outgoing;
		u(function() {
			a == null || a.addPoint("render-tombstoned-message", { bool: { outgoing_or_has_seen: !0 } }), a == null || a.endSuccessAfterDelay();
		}, [a]);
		var l = r("MessengerWebUXLogger").useImpressionLoggerRef({ eventName: "view_once_message_bubble_rendered" });
		return s.jsx(r("MWXMessageBubble.react"), {
			align: i ? "right" : "left",
			color: i ? "outgoing" : "incoming",
			connectBottom: t,
			connectTop: n,
			variant: "opaque",
			children: s.jsxs("div", {
				className: "x6s0dn4 x78zum5",
				"data-testid": void 0,
				ref: l,
				children: [s.jsx("div", {
					className: "x1lliihq xbelrpt xbyyjgo",
					children: s.jsx(r("MWXIconStrict.react"), {
						color: i ? "white" : "primary",
						icon: r("MWViewOnceMessageIcon"),
						isDecorative: !0,
						size: 18
					})
				}), s.jsx(r("MWXText.react"), {
					color: i ? "secondaryOnMedia" : "secondary",
					type: "bodyLink3",
					children: o
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
