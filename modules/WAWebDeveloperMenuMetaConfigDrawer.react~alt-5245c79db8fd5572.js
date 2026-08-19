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
		var n = o("react-compiler-runtime").c(38), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onBack, c = o("useWAWebSearchModel").useSearchModel(g), m = c.query, f = c.results, h = c.searchInstance, y = f == null ? void 0 : f.results, C;
		n[3] !== y ? (C = p(y), n[3] = y, n[4] = C) : C = n[4];
		var b = C, v = b[0], S = b[1], R, L, E, k;
		if (n[5] !== m || n[6] !== (f == null ? void 0 : f.query) || n[7] !== h) {
			k = function(t, n) {
				o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, String(n)), I();
			}, R = function(t) {
				o("WAWebModalManager").ModalManager.open(u.jsx(_, {
					name: t.displayName,
					value: String(t.value),
					onChange: function(n) {
						o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, n), I();
					}
				}));
			}, L = function(t) {
				o("WAWebMetaConfigDebugOverrides").resetMetaConfig(t.key), I();
			}, E = function() {
				o("WAWebMetaConfigDebugOverrides").resetAllMetaConfigs(), I();
			};
			var I = async function() {
				var e;
				h.preloadData(), await m((e = f == null ? void 0 : f.query.searchText) != null ? e : "");
			};
			n[5] = m, n[6] = f == null ? void 0 : f.query, n[7] = h, n[8] = R, n[9] = L, n[10] = E, n[11] = k;
		} else R = n[8], L = n[9], E = n[10], k = n[11];
		var T;
		if (n[12] !== S || n[13] !== v) {
			if (T = [], v.length) {
				var D, x;
				n[15] === Symbol.for("react.memo_cache_sentinel") ? (x = {
					itemKey: "#HEADING_OVERRIDDEN",
					height: 56,
					data: {
						title: "Overridden MetaConfigs",
						isHeading: !0
					},
					static: !0
				}, n[15] = x) : x = n[15], (D = T).push.apply(D, [x].concat(v));
			}
			if (S.length) {
				var $, P;
				n[16] === Symbol.for("react.memo_cache_sentinel") ? (P = {
					itemKey: "#HEADING_ALL",
					height: 56,
					data: {
						title: "Available MetaConfigs",
						isHeading: !0
					},
					static: !0
				}, n[16] = P) : P = n[16], ($ = T).push.apply($, [P].concat(S));
			}
			n[12] = S, n[13] = v, n[14] = T;
		} else T = n[14];
		var N = d(null), M;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(o("WAWebMenuIcon.react").MenuIcon, {}), n[17] = M) : M = n[17];
		var w;
		n[18] !== E ? (w = u.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			children: u.jsxs(r("WAWebUnstyledButton.react"), {
				ref: N,
				testid: "dev_meta_config_options_menu",
				children: [M, u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					material: !0,
					target: N,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "reset-all",
						secondary: "Reset All Overrides",
						onSelect: E
					})
				})]
			})
		}), n[18] = E, n[19] = w) : w = n[19];
		var A = w, F;
		n[20] !== s ? (F = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "MetaConfig",
			onBack: s,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[20] = s, n[21] = F) : F = n[21];
		var O;
		n[22] !== R || n[23] !== L || n[24] !== k || n[25] !== (f == null ? void 0 : f.query) ? (O = function(t) {
			var e;
			if (t.data.isHeading) return u.jsx(o("WAWebFlex.react").FlexColumn, {
				paddingTop: 16,
				children: u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: t.data.title })
			});
			var n = t.data.config, a = (e = f == null ? void 0 : f.query.searchText) != null ? e : "", i = u.jsx(r("WAWebCopiableText.react"), {
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
					return k(n, t);
				}
			}) : u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: n.key,
				primary: i,
				secondary: "(" + n.type + ") " + String(n.value),
				onSelect: function() {
					return R(n);
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
						return L(n);
					},
					children: u.jsx(o("WAWebXIcon.react").XIcon, {})
				}) : null]
			});
		}, n[22] = R, n[23] = L, n[24] = k, n[25] = f == null ? void 0 : f.query, n[26] = O) : O = n[26];
		var B;
		n[27] !== T || n[28] !== O ? (B = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
			material: !0,
			colorScheme: "lightest",
			data: T,
			renderItem: O
		}), n[27] = T, n[28] = O, n[29] = B) : B = n[29];
		var W;
		n[30] !== A || n[31] !== m || n[32] !== B ? (W = u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
			focusOnMount: !0,
			placeholder: "Search MetaConfigs",
			detailRight: A,
			onSearch: m,
			children: B
		}), n[30] = A, n[31] = m, n[32] = B, n[33] = W) : W = n[33];
		var q;
		return n[34] !== i || n[35] !== F || n[36] !== W ? (q = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "meta-config-drawer",
			children: [F, W]
		}), n[34] = i, n[35] = F, n[36] = W, n[37] = q) : q = n[37], q;
	}
	function g() {
		return new (o("WAWebMetaConfigSearchModel")).MetaConfigSearch();
	}
	l.default = f;
}), 98);
