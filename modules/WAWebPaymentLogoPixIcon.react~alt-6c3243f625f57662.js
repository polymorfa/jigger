__d("WAWebPaymentLogoPixIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "payment-logo-pix";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 14, "0 0 14 14");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fillRule: "evenodd",
					d: "M3.52 3.55c.5 0 .99.2 1.35.56l1.96 1.95c.14.15.37.15.5 0L9.3 4.11a1.9 1.9 0 0 1 1.35-.56h.23L8.4 1.08a1.98 1.98 0 0 0-2.8 0L3.13 3.55zm7.12 6.9c-.51 0-1-.2-1.35-.56L7.34 7.94a.37.37 0 0 0-.51 0L4.87 9.89a1.9 1.9 0 0 1-1.35.56h-.39l2.47 2.47a1.98 1.98 0 0 0 2.8 0l2.47-2.47zm.78-6.34 1.5 1.5a1.98 1.98 0 0 1 0 2.79l-1.5 1.5a.3.3 0 0 0-.1-.03h-.68a1.34 1.34 0 0 1-.95-.39L7.74 7.53a.96.96 0 0 0-1.32 0L4.46 9.5a1.35 1.35 0 0 1-.94.39h-.84a.3.3 0 0 0-.1.02l-1.5-1.5a1.98 1.98 0 0 1 0-2.8l1.5-1.5.1.02h.84c.35 0 .7.14.94.4l1.96 1.95a.93.93 0 0 0 1.32 0L9.7 4.52c.25-.25.6-.4.95-.4h.68a.3.3 0 0 0 .1-.01",
					clipRule: "evenodd",
					style: { fill: "color(display-p3 .1961 .7373 .6745)" }
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PaymentLogoPixIcon = d;
}), 98);
