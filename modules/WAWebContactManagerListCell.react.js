__d("WAWebContactManagerListCell.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDropdownV2.react",
	"WAWebLabelCollection",
	"WAWebLabelGetters",
	"WAWebListsGatingUtils",
	"WDSIconIcLabelFilled.react",
	"WDSText.react",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = {
		dotBase: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		cellDot: {
			width: "xsmyaan",
			height: "x1kpxq89",
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		tooltipDot: {
			width: "xsmyaan",
			height: "x1kpxq89",
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		moreCount: {
			flexShrink: "x2lah0s",
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		labelIcon: {
			flexShrink: "x2lah0s",
			marginInlineEnd: "xqf2s3x",
			display: "x78zum5",
			$$css: !0
		},
		tooltipLabelIcon: {
			flexShrink: "x2lah0s",
			marginInlineEnd: "xqf2s3x",
			display: "x78zum5",
			$$css: !0
		}
	}, f = {
		bgColor: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		},
		fgColor: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		}
	};
	function g(t) {
		var n, a, i = o("react-compiler-runtime").c(66), l = t.chatJid, u = p(null), d;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebListsGatingUtils").isListsEnabled(), i[0] = d) : d = i[0];
		var m = d, g;
		i[1] !== l ? (g = o("WAWebContactCollection").ContactCollection.get(l), i[1] = l, i[2] = g) : g = i[2];
		var C = g, b = (n = (a = o("useWAWebContactValues").useOptionalContactValues(C == null ? void 0 : C.id, [o("WAWebContactGetters").getLabels])) == null ? void 0 : a[0]) != null ? n : null, v;
		i[3] !== b ? (v = b != null ? b : [], i[3] = b, i[4] = v) : v = i[4];
		var S;
		i[5] !== v ? (S = r("compactMap")(v, y), i[5] = v, i[6] = S) : S = i[6];
		var R = S;
		if (R.length === 0) {
			var L;
			return i[7] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx("span", {
				role: "img",
				"aria-label": m ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				children: c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					maxLines: 1,
					children: "—"
				})
			}), i[7] = L) : L = i[7], L;
		}
		var E = R[0], k, I, T, D, x, $, P, N, M, w, A;
		if (i[8] !== E || i[9] !== R) {
			$ = Symbol.for("react.early_return_sentinel");
			e: {
				var F, O = (F = o("WAWebLabelGetters").getHexColor(E)) != null ? F : "transparent";
				if (R.length === 1) {
					var B;
					i[21] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x78zum5 x6s0dn4 xeuugli x193iq5w x6ikm8r x10wlt62" }, i[21] = B) : B = i[21];
					var W = m ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.dotBase, _.cellDot, f.bgColor(O)))) : c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.labelIcon, f.fgColor(O)), { children: c.jsx(r("WDSIconIcLabelFilled.react"), {
						width: 20,
						height: 20
					}) })), q;
					i[22] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft xs83m0k" }, i[22] = q) : q = i[22];
					var U;
					i[23] !== E.name ? (U = c.jsx("span", babelHelpers.extends({}, q, { children: c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: E.name
					}) })), i[23] = E.name, i[24] = U) : U = i[24];
					var V;
					i[25] !== W || i[26] !== U ? (V = c.jsxs("div", babelHelpers.extends({}, B, { children: [W, U] })), i[25] = W, i[26] = U, i[27] = V) : V = i[27], $ = V;
					break e;
				}
				var H = R.slice(1), G, z, j, K;
				if (i[28] !== R) {
					var Q = R.map(h).join(", ");
					i[34] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x6ikm8r x10wlt62 xh8yej3" }, i[34] = D) : D = i[34], G = u, i[35] === Symbol.for("react.memo_cache_sentinel") ? (z = { className: "x78zum5 x6s0dn4 xeuugli x193iq5w x6ikm8r x10wlt62" }, i[35] = z) : z = i[35], j = "group", K = m ? s._(
						/*BTDS*/
						"",
						[s._param("all list names", Q)]
					) : s._(
						/*BTDS*/
						"",
						[s._param("all label names", Q)]
					), i[28] = R, i[29] = D, i[30] = G, i[31] = z, i[32] = j, i[33] = K;
				} else D = i[29], G = i[30], z = i[31], j = i[32], K = i[33];
				var X = m ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.dotBase, _.cellDot, f.bgColor(O)))) : c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.labelIcon, f.fgColor(O)), { children: c.jsx(r("WDSIconIcLabelFilled.react"), {
					width: 20,
					height: 20
				}) })), Y;
				i[36] === Symbol.for("react.memo_cache_sentinel") ? (Y = { className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft xs83m0k" }, i[36] = Y) : Y = i[36];
				var J;
				i[37] !== E.name ? (J = c.jsx("span", babelHelpers.extends({}, Y, { children: c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					maxLines: 1,
					children: E.name
				}) })), i[37] = E.name, i[38] = J) : J = i[38];
				var Z = s._(
					/*BTDS*/
					"",
					[s._param("count", H.length)]
				), ee;
				i[39] !== Z ? (ee = c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: _.moreCount,
					children: Z
				}), i[39] = Z, i[40] = ee) : ee = i[40], i[41] !== G || i[42] !== z || i[43] !== j || i[44] !== K || i[45] !== X || i[46] !== J || i[47] !== ee ? (x = c.jsxs("div", babelHelpers.extends({ ref: G }, z, {
					role: j,
					"aria-label": K,
					children: [
						X,
						J,
						ee
					]
				})), i[41] = G, i[42] = z, i[43] = j, i[44] = K, i[45] = X, i[46] = J, i[47] = ee, i[48] = x) : x = i[48], k = o("WAWebDropdownV2.react").DropdownV2, M = u, w = o("WAWebDropdownV2.react").PopoverPosition.Bottom, A = o("WAWebDropdownV2.react").PopoverAlignment.Start, I = "hover", T = !1, i[49] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x78zum5 xdt5ytf x129bwdz x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1yc453h" }, i[49] = P) : P = i[49];
				var te;
				i[50] === Symbol.for("react.memo_cache_sentinel") ? (te = function(n) {
					var t, a = (t = o("WAWebLabelGetters").getHexColor(n)) != null ? t : "transparent";
					return c.jsxs("div", {
						className: "x78zum5 x6s0dn4",
						children: [m ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.dotBase, _.tooltipDot, f.bgColor(a)))) : c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.tooltipLabelIcon, f.fgColor(a)), { children: c.jsx(r("WDSIconIcLabelFilled.react"), {
							width: 16,
							height: 16
						}) })), c.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDefault",
							children: n.name
						})]
					}, n.id);
				}, i[50] = te) : te = i[50], N = H.map(te);
			}
			i[8] = E, i[9] = R, i[10] = k, i[11] = I, i[12] = T, i[13] = D, i[14] = x, i[15] = $, i[16] = P, i[17] = N, i[18] = M, i[19] = w, i[20] = A;
		} else k = i[10], I = i[11], T = i[12], D = i[13], x = i[14], $ = i[15], P = i[16], N = i[17], M = i[18], w = i[19], A = i[20];
		if ($ !== Symbol.for("react.early_return_sentinel")) return $;
		var ne;
		i[51] !== P || i[52] !== N ? (ne = c.jsx("div", babelHelpers.extends({}, P, { children: N })), i[51] = P, i[52] = N, i[53] = ne) : ne = i[53];
		var re;
		i[54] !== k || i[55] !== I || i[56] !== T || i[57] !== ne || i[58] !== M || i[59] !== w || i[60] !== A ? (re = c.jsx(k, {
			target: M,
			position: w,
			alignment: A,
			initHandling: I,
			dismissable: T,
			children: ne
		}), i[54] = k, i[55] = I, i[56] = T, i[57] = ne, i[58] = M, i[59] = w, i[60] = A, i[61] = re) : re = i[61];
		var oe;
		return i[62] !== D || i[63] !== x || i[64] !== re ? (oe = c.jsxs("div", babelHelpers.extends({}, D, { children: [x, re] })), i[62] = D, i[63] = x, i[64] = re, i[65] = oe) : oe = i[65], oe;
	}
	function h(e) {
		return e.name;
	}
	function y(e) {
		return o("WAWebLabelCollection").LabelCollection.get(e);
	}
	l.default = g;
}), 226);
