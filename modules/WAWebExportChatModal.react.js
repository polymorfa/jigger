__d("WAWebExportChatModal.react", [
	"fbt",
	"WAAbortError",
	"WAWebExportChatAction",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebProgressBar.react",
	"WAWebThemeContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = {
		radioLabel: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		sectionLabel: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	}, f = {
		loading: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		downloading_media: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		formatting: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		saving: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(93), n = e.chat, a = e.onClose, i = p("config"), l = i[0], c = i[1], d = p("all"), g = d[0], h = d[1], y = p(""), C = y[0], b = y[1], v = p(""), S = v[0], R = v[1], L = p("loading"), E = L[0], k = L[1], I = p(0), T = I[0], D = I[1], x = p(1), $ = x[0], P = x[1], N = m(null), M = o("WAWebThemeContext").useIsDarkTheme(), w;
		t[0] !== n || t[1] !== g || t[2] !== S || t[3] !== a || t[4] !== C ? (w = function() {
			var e = new AbortController();
			N.current = e, c("exporting"), D(0), P(1);
			var t, r;
			g === "custom" && (C !== "" && (t = Math.floor(new Date(C + "T00:00:00").getTime() / 1e3)), S !== "" && (r = Math.floor(new Date(S + "T23:59:59").getTime() / 1e3))), o("WAWebExportChatAction").exportChat({
				chat: n,
				includeMedia: !1,
				startDate: t,
				endDate: r,
				signal: e.signal,
				onProgress: function(t, n, r) {
					k(t), D(n), P(r);
				}
			}).then(function(e) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						"",
						[s._plural(e.messageCount), s._param("count", e.messageCount)]
					),
					id: o("WAWebToast.react").genId("export-chat-success")
				}), o("WAWebToastManager").ToastPosition.CENTER), a();
			}).catch(function(e) {
				e instanceof o("WAAbortError").AbortError || c("error");
			});
		}, t[0] = n, t[1] = g, t[2] = S, t[3] = a, t[4] = C, t[5] = w) : w = t[5];
		var A = w, F;
		t[6] !== a ? (F = function() {
			N.current != null && N.current.abort(), a();
		}, t[6] = a, t[7] = F) : F = t[7];
		var O = F, B;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (B = function(t) {
			h(t === "custom" ? "custom" : "all");
		}, t[8] = B) : B = t[8];
		var W = B, q;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (q = function(t) {
			b(t.target.value);
		}, t[9] = q) : q = t[9];
		var U = q, V;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (V = function(t) {
			R(t.target.value);
		}, t[10] = V) : V = t[10];
		var H = V, G;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (G = new Date().toISOString().slice(0, 10), t[11] = G) : G = t[11];
		var z = G;
		if (l === "config") {
			var j;
			t[12] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
				/*BTDS*/
				""
			), t[12] = j) : j = t[12];
			var K;
			t[13] !== A ? (K = {
				label: j,
				onPress: A
			}, t[13] = A, t[14] = K) : K = t[14];
			var Q;
			t[15] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
				/*BTDS*/
				""
			), t[15] = Q) : Q = t[15];
			var X;
			t[16] !== a ? (X = {
				label: Q,
				onPress: a,
				variant: "borderless"
			}, t[16] = a, t[17] = X) : X = t[17];
			var Y;
			t[18] !== X || t[19] !== K ? (Y = u.jsx("div", { children: u.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				primaryButtonProps: K,
				tertiaryButtonProps: X
			}) }), t[18] = X, t[19] = K, t[20] = Y) : Y = t[20];
			var J = Y, Z;
			t[21] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
				/*BTDS*/
				""
			), t[21] = Z) : Z = t[21];
			var ee;
			t[22] === Symbol.for("react.memo_cache_sentinel") ? (ee = { className: "x14mdic9" }, t[22] = ee) : ee = t[22];
			var te;
			t[23] === Symbol.for("react.memo_cache_sentinel") ? (te = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: _.sectionLabel,
				children: s._(
					/*BTDS*/
					""
				)
			}), t[23] = te) : te = t[23];
			var ne;
			t[24] === Symbol.for("react.memo_cache_sentinel") ? (ne = { className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7" }, t[24] = ne) : ne = t[24];
			var re = g === "all", oe;
			t[25] !== re ? (oe = u.jsx(r("WDSBaseRadio.react"), {
				id: "date-range-all",
				value: "all",
				name: "date-range",
				checked: re,
				onChange: W
			}), t[25] = re, t[26] = oe) : oe = t[26];
			var ae;
			t[27] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				xstyle: _.radioLabel,
				children: s._(
					/*BTDS*/
					""
				)
			}), t[27] = ae) : ae = t[27];
			var ie;
			t[28] !== oe ? (ie = u.jsxs("label", babelHelpers.extends({ htmlFor: "date-range-all" }, ne, { children: [oe, ae] })), t[28] = oe, t[29] = ie) : ie = t[29];
			var le;
			t[30] === Symbol.for("react.memo_cache_sentinel") ? (le = { className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7" }, t[30] = le) : le = t[30];
			var se = g === "custom", ue;
			t[31] !== se ? (ue = u.jsx(r("WDSBaseRadio.react"), {
				id: "date-range-custom",
				value: "custom",
				name: "date-range",
				checked: se,
				onChange: W
			}), t[31] = se, t[32] = ue) : ue = t[32];
			var ce;
			t[33] === Symbol.for("react.memo_cache_sentinel") ? (ce = u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				xstyle: _.radioLabel,
				children: s._(
					/*BTDS*/
					""
				)
			}), t[33] = ce) : ce = t[33];
			var de;
			t[34] !== ue ? (de = u.jsxs("label", babelHelpers.extends({ htmlFor: "date-range-custom" }, le, { children: [ue, ce] })), t[34] = ue, t[35] = de) : de = t[35];
			var me;
			t[36] !== ie || t[37] !== de ? (me = u.jsxs(o("WAWebFlex.react").FlexColumn, {
				role: "radiogroup",
				children: [ie, de]
			}), t[36] = ie, t[37] = de, t[38] = me) : me = t[38];
			var pe;
			t[39] !== g || t[40] !== S || t[41] !== M || t[42] !== C ? (pe = g === "custom" && u.jsxs("div", {
				className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x16ovd2e x1m4z3lf",
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("input", babelHelpers.extends({
						"aria-label": s._(
							/*BTDS*/
							""
						),
						"data-testid": "export-start-date",
						max: S !== "" ? S : z,
						onChange: U,
						type: "date",
						value: C
					}, {
						0: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk" },
						1: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk xntwwlm" }
					}[!!M << 0])),
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("input", babelHelpers.extends({
						"aria-label": s._(
							/*BTDS*/
							""
						),
						"data-testid": "export-end-date",
						max: z,
						min: C !== "" ? C : void 0,
						onChange: H,
						type: "date",
						value: S
					}, {
						0: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk" },
						1: { className: "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk xntwwlm" }
					}[!!M << 0]))
				]
			}), t[39] = g, t[40] = S, t[41] = M, t[42] = C, t[43] = pe) : pe = t[43];
			var _e;
			t[44] !== me || t[45] !== pe ? (_e = u.jsxs("div", babelHelpers.extends({}, ee, { children: [
				te,
				me,
				pe
			] })), t[44] = me, t[45] = pe, t[46] = _e) : _e = t[46];
			var fe;
			return t[47] !== J || t[48] !== _e ? (fe = u.jsx(o("WAWebModal.react").Modal, {
				title: Z,
				actions: J,
				testid: "export-chat-modal",
				children: _e
			}), t[47] = J, t[48] = _e, t[49] = fe) : fe = t[49], fe;
		}
		if (l === "exporting") {
			var ge, he;
			t[50] !== $ || t[51] !== T ? (he = $ > 0 ? Math.round(T / $ * 100) : 0, t[50] = $, t[51] = T, t[52] = he) : he = t[52];
			var ye = he, Ce = (ge = f[E]) != null ? ge : f.loading, be;
			t[53] !== Ce ? (be = Ce(), t[53] = Ce, t[54] = be) : be = t[54];
			var ve = be, Se = $ > 0, Re;
			t[55] === Symbol.for("react.memo_cache_sentinel") ? (Re = s._(
				/*BTDS*/
				""
			), t[55] = Re) : Re = t[55];
			var Le;
			t[56] === Symbol.for("react.memo_cache_sentinel") ? (Le = { className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xs2akgl xl56j7k xi3av73 xl7twdi xvg22vi" }, t[56] = Le) : Le = t[56];
			var Ee;
			t[57] !== ye || t[58] !== Se ? (Ee = Se && u.jsx(r("WAWebProgressBar.react"), {
				value: ye,
				max: 100
			}), t[57] = ye, t[58] = Se, t[59] = Ee) : Ee = t[59];
			var ke;
			t[60] !== ve ? (ke = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: ve
			}), t[60] = ve, t[61] = ke) : ke = t[61];
			var Ie;
			t[62] !== E || t[63] !== T ? (Ie = E === "loading" && T > 0 && u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._plural(T), s._param("count", T)]
				)
			}), t[62] = E, t[63] = T, t[64] = Ie) : Ie = t[64];
			var Te;
			t[65] !== E || t[66] !== $ || t[67] !== T ? (Te = E === "downloading_media" && $ > 0 && u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					"",
					[s._param("current", T), s._param("total", $)]
				)
			}), t[65] = E, t[66] = $, t[67] = T, t[68] = Te) : Te = t[68];
			var De;
			t[69] !== Ee || t[70] !== ke || t[71] !== Ie || t[72] !== Te ? (De = u.jsxs("div", babelHelpers.extends({}, Le, { children: [
				Ee,
				ke,
				Ie,
				Te
			] })), t[69] = Ee, t[70] = ke, t[71] = Ie, t[72] = Te, t[73] = De) : De = t[73];
			var xe;
			t[74] === Symbol.for("react.memo_cache_sentinel") ? (xe = s._(
				/*BTDS*/
				""
			), t[74] = xe) : xe = t[74];
			var $e;
			t[75] !== O ? ($e = u.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "end",
				children: u.jsx(r("WDSButton.react"), {
					label: xe,
					variant: "borderless",
					onPress: O
				})
			}), t[75] = O, t[76] = $e) : $e = t[76];
			var Pe;
			return t[77] !== De || t[78] !== $e ? (Pe = u.jsxs(o("WAWebModal.react").Modal, {
				title: Re,
				onOverlayClick: r("WAWebNoop"),
				testid: "export-chat-progress",
				children: [De, $e]
			}), t[77] = De, t[78] = $e, t[79] = Pe) : Pe = t[79], Pe;
		}
		if (l === "error") {
			var Ne;
			t[80] === Symbol.for("react.memo_cache_sentinel") ? (Ne = s._(
				/*BTDS*/
				""
			), t[80] = Ne) : Ne = t[80];
			var Me;
			t[81] !== A ? (Me = {
				label: Ne,
				onPress: A
			}, t[81] = A, t[82] = Me) : Me = t[82];
			var we;
			t[83] === Symbol.for("react.memo_cache_sentinel") ? (we = s._(
				/*BTDS*/
				""
			), t[83] = we) : we = t[83];
			var Ae;
			t[84] !== a ? (Ae = {
				label: we,
				onPress: a,
				variant: "borderless"
			}, t[84] = a, t[85] = Ae) : Ae = t[85];
			var Fe;
			t[86] !== Ae || t[87] !== Me ? (Fe = u.jsx("div", { children: u.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				primaryButtonProps: Me,
				tertiaryButtonProps: Ae
			}) }), t[86] = Ae, t[87] = Me, t[88] = Fe) : Fe = t[88];
			var Oe = Fe, Be;
			t[89] === Symbol.for("react.memo_cache_sentinel") ? (Be = s._(
				/*BTDS*/
				""
			), t[89] = Be) : Be = t[89];
			var We;
			t[90] === Symbol.for("react.memo_cache_sentinel") ? (We = u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[90] = We) : We = t[90];
			var qe;
			return t[91] !== Oe ? (qe = u.jsx(o("WAWebModal.react").Modal, {
				title: Be,
				actions: Oe,
				testid: "export-chat-error",
				children: We
			}), t[91] = Oe, t[92] = qe) : qe = t[92], qe;
		}
		return null;
	}
	l.default = g;
}), 226);
