__d("WAWebTeeLockBadge.react", [
	"WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		container: {
			position: "x1n2onr6",
			display: "x1rg5ohu",
			$$css: !0
		},
		badge: {
			position: "x10l6tqk",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			boxShadow: "x119zby7",
			pointerEvents: "x47corl",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		small: {
			bottom: "x1me21xl",
			insetInlineEnd: "x131a0oe",
			left: null,
			right: null,
			width: "x1mzsije",
			height: "x8lyb6r",
			$$css: !0
		},
		medium: {
			bottom: "x1ey2m1c",
			insetInlineEnd: "xgvahye",
			left: null,
			right: null,
			width: "x100vrsf",
			height: "x1vqgdyp",
			$$css: !0
		},
		large: {
			bottom: "x1ey2m1c",
			insetInlineEnd: "xqqy42c",
			left: null,
			right: null,
			width: "x1247r65",
			height: "xng8ra",
			$$css: !0
		}
	}, d = {
		small: {
			width: 12,
			height: 14
		},
		medium: {
			width: 22,
			height: 26
		},
		large: {
			width: 34,
			height: 40
		}
	};
	function m(t) {
		var n = t.children, o = t.size, a = o === void 0 ? "small" : o, i = d[a];
		return u.jsxs("div", {
			className: "x1n2onr6 x1rg5ohu",
			"data-testid": "tee-lock-badge-container",
			children: [n, u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.badge, c[a]), {
				"data-testid": "tee-lock-badge-icon",
				children: u.jsx(r("WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react"), {
					"aria-hidden": !0,
					height: i.height,
					width: i.width
				})
			}))]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
