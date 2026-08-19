__d("WAWebDeveloperMenuMetaConfigDrawer.react", [
	"WAWebConfirmPopup.react",
	"WAWebCopiableText.react",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebHighlightedText.react",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebMetaConfigDebugOverrides",
	"WAWebMetaConfigSearchModel",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WAWebSearchInput",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebSearchModel"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useRef, m = c.useState;
	function p(e) {
		var t;
		return (t = e == null ? void 0 : e.reduce(function(e, t) {
			var n = e[0], r = e[1], o = {
				itemKey: t.id,
				height: t.data.type === "bool" ? 42 : 58,
				data: {
					config: t.data,
					isHeading: !1
				}
			};
			return t.data.overridden ? n.push(o) : r.push(o), [n, r];
		}, [[], []])) != null ? t : [[], []];
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(12), n = e.name, r = e.onChange, a = e.value, i = m(a), l = i[0], s = i[1], c;
		t[0] !== l || t[1] !== r ? (c = function() {
			r(l), o("WAWebModalManager").ModalManager.close();
		}, t[0] = l, t[1] = r, t[2] = c) : c = t[2];
		var d = c, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = {
			surface: "unknown",
			viewName: "dev-meta-config"
		}, t[3] = p) : p = t[3];
		var _ = "Edit \"" + n + "\"", f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = function(t) {
			var e = t.text;
			s(e);
		}, t[4] = f) : f = t[4];
		var g;
		t[5] !== l || t[6] !== d ? (g = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: l,
			placeholder: "Enter a new value",
			onEnter: d,
			managed: !0,
			selectOnMount: !0,
			maxVisibleLines: 8,
			onChange: f
		}), t[5] = l, t[6] = d, t[7] = g) : g = t[7];
		var h;
		return t[8] !== d || t[9] !== _ || t[10] !== g ? (h = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: p,
			title: _,
			onOK: d,
			children: g
		}), t[8] = d, t[9] = _, t[10] = g, t[11] = h) : h = t[11], h;
	}
	function f(t) {
		var a = o("react-compiler-runtime").c(38), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, c = s.onBack, m = o("useWAWebSearchModel").useSearchModel(g), f = m.query, h = m.results, y = m.searchInstance, C = h == null ? void 0 : h.results, b;
		a[3] !== C ? (b = p(C), a[3] = C, a[4] = b) : b = a[4];
		var v = b, S = v[0], R = v[1], L, E, k, I;
		if (a[5] !== f || a[6] !== (h == null ? void 0 : h.query) || a[7] !== y) {
			I = function(t, n) {
				o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, String(n)), T();
			}, L = function(t) {
				o("WAWebModalManager").ModalManager.open(u.jsx(_, {
					name: t.displayName,
					value: String(t.value),
					onChange: function(n) {
						o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, n), T();
					}
				}));
			}, E = function(t) {
				o("WAWebMetaConfigDebugOverrides").resetMetaConfig(t.key), T();
			}, k = function() {
				o("WAWebMetaConfigDebugOverrides").resetAllMetaConfigs(), T();
			};
			var T = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e;
					y.preloadData(), yield f((e = h == null ? void 0 : h.query.searchText) != null ? e : "");
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			a[5] = f, a[6] = h == null ? void 0 : h.query, a[7] = y, a[8] = L, a[9] = E, a[10] = k, a[11] = I;
		} else L = a[8], E = a[9], k = a[10], I = a[11];
		var D;
		if (a[12] !== R || a[13] !== S) {
			if (D = [], S.length) {
				var x, $;
				a[15] === Symbol.for("react.memo_cache_sentinel") ? ($ = {
					itemKey: "#HEADING_OVERRIDDEN",
					height: 56,
					data: {
						title: "Overridden MetaConfigs",
						isHeading: !0
					},
					static: !0
				}, a[15] = $) : $ = a[15], (x = D).push.apply(x, [$].concat(S));
			}
			if (R.length) {
				var P, N;
				a[16] === Symbol.for("react.memo_cache_sentinel") ? (N = {
					itemKey: "#HEADING_ALL",
					height: 56,
					data: {
						title: "Available MetaConfigs",
						isHeading: !0
					},
					static: !0
				}, a[16] = N) : N = a[16], (P = D).push.apply(P, [N].concat(R));
			}
			a[12] = R, a[13] = S, a[14] = D;
		} else D = a[14];
		var M = d(null), w;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsx(o("WAWebMenuIcon.react").MenuIcon, {}), a[17] = w) : w = a[17];
		var A;
		a[18] !== k ? (A = u.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			children: u.jsxs(r("WAWebUnstyledButton.react"), {
				ref: M,
				testid: "dev_meta_config_options_menu",
				children: [w, u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					material: !0,
					target: M,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "reset-all",
						secondary: "Reset All Overrides",
						onSelect: k
					})
				})]
			})
		}), a[18] = k, a[19] = A) : A = a[19];
		var F = A, O;
		a[20] !== c ? (O = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "MetaConfig",
			onBack: c,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), a[20] = c, a[21] = O) : O = a[21];
		var B;
		a[22] !== L || a[23] !== E || a[24] !== I || a[25] !== (h == null ? void 0 : h.query) ? (B = function(t) {
			var e;
			if (t.data.isHeading) return u.jsx(o("WAWebFlex.react").FlexColumn, {
				paddingTop: 16,
				children: u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: t.data.title })
			});
			var n = t.data.config, a = (e = h == null ? void 0 : h.query.searchText) != null ? e : "", i = u.jsx(r("WAWebCopiableText.react"), {
				text: n.key,
				showOnHover: !0,
				children: a ? u.jsx(o("WAWebHighlightedText.react").HighlightedStreaks, {
					highlightText: a,
					sourceText: n.displayName
				}) : n.displayName
			}), l = n.type === "bool" ? u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
				optionId: n.key,
				initialState: n.value === !0 || n.value === "true",
				primary: i,
				onSelect: function(t) {
					return I(n, t);
				}
			}) : u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: n.key,
				primary: i,
				secondary: "(" + n.type + ") " + String(n.value),
				onSelect: function() {
					return L(n);
				}
			});
			return u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [u.jsx(o("WAWebFlex.react").FlexItem, {
					isFlexContainer: !0,
					grow: 1,
					children: l
				}), n.overridden ? u.jsx(r("WAWebUnstyledButton.react"), {
					testid: "dev_meta_config_reset_override",
					title: "Reset",
					onClick: function() {
						return E(n);
					},
					children: u.jsx(o("WAWebXIcon.react").XIcon, {})
				}) : null]
			});
		}, a[22] = L, a[23] = E, a[24] = I, a[25] = h == null ? void 0 : h.query, a[26] = B) : B = a[26];
		var W;
		a[27] !== D || a[28] !== B ? (W = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
			material: !0,
			colorScheme: "lightest",
			data: D,
			renderItem: B
		}), a[27] = D, a[28] = B, a[29] = W) : W = a[29];
		var q;
		a[30] !== F || a[31] !== f || a[32] !== W ? (q = u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
			focusOnMount: !0,
			placeholder: "Search MetaConfigs",
			detailRight: F,
			onSearch: f,
			children: W
		}), a[30] = F, a[31] = f, a[32] = W, a[33] = q) : q = a[33];
		var U;
		return a[34] !== l || a[35] !== O || a[36] !== q ? (U = u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "settings",
			testid: "meta-config-drawer",
			children: [O, q]
		}), a[34] = l, a[35] = O, a[36] = q, a[37] = U) : U = a[37], U;
	}
	function g() {
		return new (o("WAWebMetaConfigSearchModel")).MetaConfigSearch();
	}
	l.default = f;
}), 98);
