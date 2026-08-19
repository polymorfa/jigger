__d("WAWebTimeInput.react", [
	"WAWebL10N",
	"WAWebUA",
	"WAWebUnstyledButton.react",
	"WDSIconIcSchedule.react",
	"WDSText.react",
	"fbs",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef, d = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		marginInlineEnd9: {
			marginInlineEnd: "x19dbzi3",
			$$css: !0
		}
	}, m = {
		container: {
			flexGrow: "x1iyjqo2",
			flexBasis: "x1r8uery",
			display: "x78zum5",
			$$css: !0
		},
		eventBorder: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x1dby8ki",
			$$css: !0
		},
		aboutBorder: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingInlineStart: "x12w63v0",
			height: "x1vqgdyp",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		eventActiveBorder: {
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		aboutActiveBorder: {
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		labeledContainer: {
			position: "x1n2onr6",
			marginTop: "x1xmf6yo",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(32), a = t.ariaLabel, i = t.label, l = t.min, s = t.name, p = t.onChange, _ = t.testid, f = t.theme, g = t.value, h = c(), y = r("useWAWebToggle")(!1), C = y[0], b = y[1], v;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (v = r("WAWebL10N").isRTL(), n[0] = v) : v = n[0];
		var S = v, R;
		n[1] !== p ? (R = function(t) {
			var e = t.target.value;
			p(e);
		}, n[1] = p, n[2] = R) : R = n[2];
		var L = R, E;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			var e;
			(e = h.current) == null || e.showPicker();
		}, n[3] = E) : E = n[3];
		var k = E, I = f === "about", T = i != null && I, D = I ? m.aboutBorder : m.eventBorder, x = !I && d.marginBottom10, $ = !I && d.paddingBlock5, P = C && (I ? m.aboutActiveBorder : m.eventActiveBorder), N = T && m.labeledContainer, M, w;
		if (n[4] !== D || n[5] !== x || n[6] !== $ || n[7] !== P || n[8] !== N) {
			var A = [
				m.container,
				D,
				x,
				$,
				P,
				N
			], F = !("showPicker" in HTMLInputElement.prototype);
			M = F || o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari, w = (e || (e = r("stylex"))).props(A), n[4] = D, n[5] = x, n[6] = $, n[7] = P, n[8] = N, n[9] = M, n[10] = w;
		} else M = n[9], w = n[10];
		var O;
		n[11] !== T || n[12] !== i ? (O = T && u.jsx("div", {
			className: "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: i
			})
		}), n[11] = T, n[12] = i, n[13] = O) : O = n[13];
		var B;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1iyjqo2" }, n[14] = B) : B = n[14];
		var W;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (W = {
			0: { className: "xh8yej3 x5yr21d xrv4cvt xgcd1z6 x1heor9g x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xolhmmf x18tydcn x1a7k29d x15fb772 xx784q3 x1yc453h" },
			1: { className: "xh8yej3 x5yr21d xrv4cvt xgcd1z6 x1heor9g x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xolhmmf x18tydcn x1a7k29d x15fb772 xx784q3 xp4054r" }
		}[!!S << 0], n[15] = W) : W = n[15];
		var q;
		n[16] !== a || n[17] !== L || n[18] !== l || n[19] !== s || n[20] !== _ || n[21] !== b || n[22] !== g ? (q = u.jsx("span", babelHelpers.extends({}, B, { children: u.jsx("input", babelHelpers.extends({ ref: h }, W, {
			type: "time",
			name: s,
			value: g,
			"aria-label": a,
			"data-testid": _,
			min: l,
			onChange: L,
			onFocus: b,
			onBlur: b
		})) })), n[16] = a, n[17] = L, n[18] = l, n[19] = s, n[20] = _, n[21] = b, n[22] = g, n[23] = q) : q = n[23];
		var U;
		n[24] !== M || n[25] !== b ? (U = !M && u.jsx(r("WAWebUnstyledButton.react"), {
			onClick: k,
			xstyle: d.marginInlineEnd9,
			onFocus: b,
			onBlur: b,
			"aria-label": r("fbs")._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSIconIcSchedule.react"), {
				height: 20,
				width: 20,
				xstyle: m.iconColor,
				testid: "schedule_time_picker_clock"
			})
		}), n[24] = M, n[25] = b, n[26] = U) : U = n[26];
		var V;
		return n[27] !== O || n[28] !== q || n[29] !== U || n[30] !== w ? (V = u.jsxs("section", babelHelpers.extends({}, w, { children: [
			O,
			q,
			U
		] })), n[27] = O, n[28] = q, n[29] = U, n[30] = w, n[31] = V) : V = n[31], V;
	}
	l.TimeInput = p;
}), 226);
