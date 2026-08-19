__d("WAWebDeveloperMenuAbPropsDrawer.react", [
	"invariant",
	"WAWebABPropCommandPalettePlugin",
	"WAWebABPropSearchModel",
	"WAWebConfirmPopup.react",
	"WAWebDebug",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebModalManager",
	"WAWebRefreshIcon.react",
	"WAWebRichTextField.react",
	"WAWebSearchInput",
	"WAWebSettingsFBT",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"cr:21223",
	"react",
	"react-compiler-runtime",
	"useWAWebSearchModel"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState;
	function f(e) {
		var t;
		return (t = e == null ? void 0 : e.reduce(function(e, t) {
			var n = e[0], r = e[1], o = {
				itemKey: t.id,
				height: t.data.type === "bool" || t.data.value === "" ? 42 : 58,
				data: {
					abProp: t.data,
					isHeading: !1
				}
			};
			return t.data.overridden ? n.push(o) : r.push(o), [n, r];
		}, [[], []])) != null ? t : [[], []];
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(15), n = e.name, r = e.onChange, a = e.type, i = e.value, l = _(i), s = l[0], u = l[1], d = _(null), m = d[0], p = d[1], f;
		t[0] !== s || t[1] !== r ? (f = function() {
			r(s), o("WAWebModalManager").ModalManager.close();
		}, t[0] = s, t[1] = r, t[2] = f) : f = t[2];
		var g = f, h;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (h = {
			surface: "unknown",
			viewName: "dev-ab-props"
		}, t[3] = h) : h = t[3];
		var y = "Edit \"" + n + "\"", C = String(s), b;
		t[4] !== a ? (b = function(t) {
			var e = t.text;
			u(e);
			var n = !Number.isNaN(Number(e));
			if (a === "int" && (!n || Number(e) % 1 !== 0)) {
				p("This value must be an int");
				return;
			} else if (a === "float" && !n) {
				p("This value must be a float");
				return;
			}
			p("");
		}, t[4] = a, t[5] = b) : b = t[5];
		var v;
		t[6] !== m || t[7] !== g || t[8] !== C || t[9] !== b ? (v = c.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: C,
			placeholder: "Enter a new value",
			onEnter: g,
			managed: !0,
			selectOnMount: !0,
			maxVisibleLines: 8,
			error: m,
			onChange: b
		}), t[6] = m, t[7] = g, t[8] = C, t[9] = b, t[10] = v) : v = t[10];
		var S;
		return t[11] !== g || t[12] !== y || t[13] !== v ? (S = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: h,
			title: y,
			onOK: g,
			children: v
		}), t[11] = g, t[12] = y, t[13] = v, t[14] = S) : S = t[14], S;
	}
	function h(t) {
		var n = o("react-compiler-runtime").c(47), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.onBack, d = o("useWAWebSearchModel").useSearchModel(C), h = d.query, b = d.results, v = d.searchInstance, S = _(f), R = S[0], L = S[1], E = R[0], k = R[1], I;
		n[3] !== (b == null ? void 0 : b.results) ? (I = function() {
			L(f(b == null ? void 0 : b.results));
		}, n[3] = b == null ? void 0 : b.results, n[4] = I) : I = n[4];
		var T;
		n[5] !== b ? (T = [b], n[5] = b, n[6] = T) : T = n[6], m(I, T);
		var D, x, $, P;
		n[7] !== h || n[8] !== (b == null ? void 0 : b.query) || n[9] !== v ? (x = async function(t, n) {
			await r("WAWebDebug").overrideABProp(t.name, n), await $();
		}, D = function(t) {
			var e = t.type;
			e !== "bool" || s(0, 74916), o("WAWebModalManager").ModalManager.open(c.jsx(g, {
				name: t.name,
				value: String(t.value),
				type: e,
				onChange: async function(n) {
					await r("WAWebDebug").overrideABProp(t.name, n), await $();
				}
			}));
		}, $ = async function() {
			var e;
			v.preloadData(), await h((e = b == null ? void 0 : b.query.searchText) != null ? e : "");
		}, P = async function(t) {
			await r("WAWebDebug").resetABProp(t.name), await $();
		}, n[7] = h, n[8] = b == null ? void 0 : b.query, n[9] = v, n[10] = D, n[11] = x, n[12] = $, n[13] = P) : (D = n[10], x = n[11], $ = n[12], P = n[13]);
		var N = P, M;
		if (n[14] !== k || n[15] !== E) {
			if (M = [], E.length) {
				var w, A;
				n[17] === Symbol.for("react.memo_cache_sentinel") ? (A = {
					itemKey: "#HEADING_OVERRIDDEN",
					height: 56,
					data: {
						title: "Overridden AB Props",
						isHeading: !0
					},
					static: !0
				}, n[17] = A) : A = n[17], (w = M).push.apply(w, [A].concat(E));
			}
			if (k.length) {
				var F, O;
				n[18] === Symbol.for("react.memo_cache_sentinel") ? (O = {
					itemKey: "#HEADING_ALL",
					height: 56,
					data: {
						title: "Available AB Props",
						isHeading: !0
					},
					static: !0
				}, n[18] = O) : O = n[18], (F = M).push.apply(F, [O].concat(k));
			}
			n[14] = k, n[15] = E, n[16] = M;
		} else M = n[16];
		var B;
		n[19] !== $ ? (B = async function() {
			await r("WAWebDebug").syncABProps(!1), await $();
		}, n[19] = $, n[20] = B) : B = n[20];
		var W = B, q = y, U = p(null), V;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx(o("WAWebMenuIcon.react").MenuIcon, {}), n[21] = V) : V = n[21];
		var H;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}), n[22] = H) : H = n[22];
		var G;
		n[23] !== W ? (G = c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "fetch",
			detailLeft: H,
			secondary: "Fetch all from server",
			onSelect: W
		}), n[23] = W, n[24] = G) : G = n[24];
		var z;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (z = c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "changelog",
			secondary: "Show ABProp Changelog",
			onSelect: q
		}), n[25] = z) : z = n[25];
		var j;
		n[26] !== G ? (j = c.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			children: c.jsxs(r("WAWebUnstyledButton.react"), {
				ref: U,
				children: [V, c.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
					material: !0,
					target: U,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					children: [G, z]
				})]
			})
		}), n[26] = G, n[27] = j) : j = n[27];
		var K = j, Q;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (Q = o("WAWebSettingsFBT").developerABPropsTitle(), n[28] = Q) : Q = n[28];
		var X;
		n[29] !== u ? (X = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: Q,
			onBack: u,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[29] = u, n[30] = X) : X = n[30];
		var Y;
		n[31] !== D || n[32] !== N || n[33] !== x || n[34] !== (b == null ? void 0 : b.query) ? (Y = function(t) {
			var e;
			if (t.data.isHeading) return c.jsx(o("WAWebFlex.react").FlexColumn, {
				paddingTop: 16,
				children: c.jsx(o("WAWebMenuItems.react").MenuHeading, { children: t.data.title })
			});
			var n = t.data.abProp;
			return c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [c.jsx(o("WAWebFlex.react").FlexItem, {
					isFlexContainer: !0,
					grow: 1,
					children: c.jsx(o("WAWebABPropCommandPalettePlugin").ABPropMenuItem, {
						abProp: n,
						onToggle: x,
						onEdit: D,
						highlightText: (e = b == null ? void 0 : b.query.searchText) != null ? e : ""
					}, n.name)
				}), n.overridden ? c.jsx(r("WAWebUnstyledButton.react"), {
					title: "Reset",
					onClick: function() {
						return N(n);
					},
					children: c.jsx(o("WAWebXIcon.react").XIcon, {})
				}) : null]
			});
		}, n[31] = D, n[32] = N, n[33] = x, n[34] = b == null ? void 0 : b.query, n[35] = Y) : Y = n[35];
		var J;
		n[36] !== M || n[37] !== Y ? (J = c.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
			material: !0,
			colorScheme: "lightest",
			data: M,
			renderItem: Y
		}), n[36] = M, n[37] = Y, n[38] = J) : J = n[38];
		var Z;
		n[39] !== K || n[40] !== h || n[41] !== J ? (Z = c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
			focusOnMount: !0,
			placeholder: "Search AB Props",
			detailRight: K,
			onSearch: h,
			children: J
		}), n[39] = K, n[40] = h, n[41] = J, n[42] = Z) : Z = n[42];
		var ee;
		return n[43] !== i || n[44] !== X || n[45] !== Z ? (ee = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "ab-props-drawer",
			children: [X, Z]
		}), n[43] = i, n[44] = X, n[45] = Z, n[46] = ee) : ee = n[46], ee;
	}
	async function y() {
		var e = n("cr:21223") == null ? void 0 : n("cr:21223").getABPropDebugLog(), t = window.open("", "_blank"), r = t.document.createElement("pre");
		r.textContent = e != null ? e : "[empty]", t.document.body.appendChild(r);
	}
	function C() {
		return new (o("WAWebABPropSearchModel")).ABPropSearch();
	}
	l.default = h;
}), 98);
