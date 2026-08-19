__d("WAWebCountrySelectField.react", [
	"fbt",
	"WAIsoToCc",
	"WAWebClickable.react",
	"WAWebCountriesNativeCountryNames",
	"WAWebCountrySelect.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebSearchInput",
	"WAWebSimpleSearch",
	"WAWebStopEvent",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcCheck.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useRef, p = c.useState, _ = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, f = {
		tealColor: {
			color: "x1v5yvga",
			$$css: !0
		},
		label: {
			width: "x1dmp6jm",
			fontSize: "x1lkfr7t",
			lineHeight: "x1fc57z9",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(33), n = e.countries, a = e.initialSelection, i = e.onChange, l = e.testid, c = p(), d = c[0], g = c[1], h = p(a), y = h[0], C = h[1], b = m(null), v = m(), S;
		t[0] !== n ? (S = o("WAWebCountrySelect.react").getCountryDropdownItems({ countries: n }), t[0] = n, t[1] = S) : S = t[1];
		var R = S, L = R;
		if (d != null && d.length) {
			var E;
			if (t[2] !== L || t[3] !== d) {
				var k;
				t[5] !== d ? (k = function(t) {
					return o("WAWebSimpleSearch").simpleSearch(d, [t.menuItem.searchCriteria]);
				}, t[5] = d, t[6] = k) : k = t[6], E = L.filter(k), t[2] = L, t[3] = d, t[4] = E;
			} else E = t[4];
			L = E;
		}
		var I = L, T;
		t[7] !== i ? (T = function(t) {
			var e;
			C(t), i == null || i(t), (e = v.current) == null || e.hidePopover();
		}, t[7] = i, t[8] = T) : T = t[8];
		var D = T, x;
		t[9] !== y ? (x = function(t) {
			return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, babelHelpers.extends({}, t.menuItem, { detailRight: t.itemKey === y ? u.jsx(r("WDSIconIcCheck.react"), { iconXstyle: f.tealColor }) : t.menuItem.detailRight }));
		}, t[9] = y, t[10] = x) : x = t[10];
		var $ = x, P;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (P = [
			16,
			16,
			8,
			16
		], t[11] = P) : P = t[11];
		var N;
		t[12] !== I || t[13] !== $ || t[14] !== D || t[15] !== y ? (N = u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
			buffer: 4,
			controllerRef: v,
			initHandling: "click",
			material: !0,
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			target: b,
			children: u.jsx(o("WAWebSearchInput").SearchInput, {
				colorScheme: "darker",
				onSearch: g,
				padding: P,
				children: u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
					data: I,
					initialActiveOptionId: y,
					material: !0,
					maxHeight: 400,
					minWidth: 300,
					onSelect: D,
					renderItem: $,
					reorderAnimationsEnabled: !1
				})
			})
		}), t[12] = I, t[13] = $, t[14] = D, t[15] = y, t[16] = N) : N = t[16];
		var M = N, w;
		if (t[17] !== y) {
			var A = function() {
				var e, t = r("WAIsoToCc")[y], n = y + " +" + t, o = (e = r("WAWebCountriesNativeCountryNames")[y]) != null ? e : y, a = o + " +" + t, i = s._(
					/*BTDS*/
					"",
					[s._param("country label", a)]
				);
				return u.jsx("div", {
					"aria-label": i,
					children: n
				});
			};
			w = A(), t[17] = y, t[18] = w;
		} else w = t[18];
		var F = w, O;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (O = "xlxy82 x1q0q8m5 x16pkwpw x1ypdohk", t[19] = O) : O = t[19];
		var B;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsx("div", {
			className: "x1pg5gke x1d3mw78 xm7witj",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[20] = B) : B = t[20];
		var W;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (W = [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, _.paddingBottom5], t[21] = W) : W = t[21];
		var q;
		t[22] !== F ? (q = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			dir: "ltr",
			justify: "start",
			xstyle: f.label,
			children: F
		}), t[22] = F, t[23] = q) : q = t[23];
		var U;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("WDSIconIcArrowDropDown.react"), {
			height: 20,
			width: 20,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart8
		}), t[24] = U) : U = t[24];
		var V;
		t[25] !== q ? (V = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			justify: "all",
			children: [q, U]
		}), t[25] = q, t[26] = V) : V = t[26];
		var H;
		t[27] !== V || t[28] !== l ? (H = u.jsx(o("WAWebClickable.react").Clickable, {
			dataTestId: l,
			onClick: o("WAWebStopEvent").stopPropagation,
			ref: b,
			xstyle: W,
			children: V
		}), t[27] = V, t[28] = l, t[29] = H) : H = t[29];
		var G;
		return t[30] !== M || t[31] !== H ? (G = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			className: O,
			grow: 0,
			shrink: 0,
			children: [
				B,
				H,
				M
			]
		}), t[30] = M, t[31] = H, t[32] = G) : G = t[32], G;
	}
	l.default = g;
}), 226);
