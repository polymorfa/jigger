__d("WAWebTeeLockBadge.react", [
	"WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(12), a = t.children, i = t.size, l = i === void 0 ? "small" : i, s = d[l], m;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1n2onr6 x1rg5ohu" }, n[0] = m) : m = n[0];
		var p;
		n[1] !== l ? (p = (e || (e = r("stylex"))).props(c.badge, c[l]), n[1] = l, n[2] = p) : p = n[2];
		var _;
		n[3] !== s.height || n[4] !== s.width ? (_ = u.jsx(r("WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react"), {
			"aria-hidden": !0,
			height: s.height,
			width: s.width
		}), n[3] = s.height, n[4] = s.width, n[5] = _) : _ = n[5];
		var f;
		n[6] !== p || n[7] !== _ ? (f = u.jsx("div", babelHelpers.extends({}, p, {
			"data-testid": "tee-lock-badge-icon",
			children: _
		})), n[6] = p, n[7] = _, n[8] = f) : f = n[8];
		var g;
		return n[9] !== a || n[10] !== f ? (g = u.jsxs("div", babelHelpers.extends({}, m, {
			"data-testid": "tee-lock-badge-container",
			children: [a, f]
		})), n[9] = a, n[10] = f, n[11] = g) : g = n[11], g;
	}
	l.default = m;
}), 98);
