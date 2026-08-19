__d("WAWebABPropCommandPalettePlugin", [
	"WAWebABPropSearchModel",
	"WAWebCellV2.react",
	"WAWebCommandPaletteController",
	"WAWebCopiableText.react",
	"WAWebDebug",
	"WAWebFlex.react",
	"WAWebHighlightedText.react",
	"WAWebLexicalMenuPaginationFooter",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebNoop",
	"WAWebPencilIcon.react",
	"WAWebRefreshIcon.react",
	"WAWebText.react",
	"WDSIconIcScience.react",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue",
	"useWAWebLexicalSearchModelQuery"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(13), n = e.abProp, a = e.highlightText, i = e.onEdit, l = e.onSelect, u = e.onToggle, c = o("useWAWebABPropConfigValue").useABPropConfigValue(n.name), d;
		t[0] !== n.name || t[1] !== a ? (d = a ? s.jsx(o("WAWebHighlightedText.react").HighlightedStreaks, {
			highlightText: a,
			sourceText: n.name
		}) : n.name, t[0] = n.name, t[1] = a, t[2] = d) : d = t[2];
		var m;
		t[3] !== n.name || t[4] !== d ? (m = s.jsx(r("WAWebCopiableText.react"), {
			text: n.name,
			showOnHover: !0,
			children: d
		}), t[3] = n.name, t[4] = d, t[5] = m) : m = t[5];
		var p = m, _;
		return t[6] !== n || t[7] !== c || t[8] !== i || t[9] !== l || t[10] !== u || t[11] !== p ? (_ = n.type === "bool" ? s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: n.name,
			initialState: !!c,
			primary: p,
			onSelect: function(t) {
				l == null || l(n), u == null || u(n, t);
			}
		}) : s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: n.name,
			primary: p,
			secondary: String(c),
			onSelect: function() {
				l == null || l(n), i == null || i(n);
			},
			detailRight: s.jsx(o("WAWebPencilIcon.react").PencilIcon, {})
		}), t[6] = n, t[7] = c, t[8] = i, t[9] = l, t[10] = u, t[11] = p, t[12] = _) : _ = t[12], _;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(27), n = e.abProp, a = o("WAWebCommandPaletteController").useCommandPalette(), i;
		t[0] !== n.name || t[1] !== a ? (i = async function(t) {
			await r("WAWebDebug").overrideABProp(n.name, t), a.popPlugin();
		}, t[0] = n.name, t[1] = a, t[2] = i) : i = t[2];
		var l = i, u;
		t[3] !== n.name || t[4] !== a ? (u = async function() {
			await r("WAWebDebug").resetABProp(n.name), a.popPlugin();
		}, t[3] = n.name, t[4] = a, t[5] = u) : u = t[5];
		var c = u, d;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (d = [
			0,
			16,
			16,
			16
		], t[6] = d) : d = t[6];
		var m;
		t[7] !== n.name ? (m = s.jsx(o("WAWebText.react").WAWebTextTitle, { children: n.name }), t[7] = n.name, t[8] = m) : m = t[8];
		var p;
		t[9] !== n.value || t[10] !== m ? (p = s.jsx(r("WAWebCellV2.react"), {
			primary: m,
			secondary: n.value,
			interactive: !1,
			colorScheme: "lighter",
			size: "medium"
		}), t[9] = n.value, t[10] = m, t[11] = p) : p = t[11];
		var _ = a.input || "Type your new value into the command palette", f;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(o("WAWebPencilIcon.react").PencilIcon, {}), t[12] = f) : f = t[12];
		var g;
		t[13] !== a.input || t[14] !== l ? (g = function() {
			return l(a.input);
		}, t[13] = a.input, t[14] = l, t[15] = g) : g = t[15];
		var h;
		t[16] !== _ || t[17] !== g ? (h = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "edit",
			primary: "New Value",
			secondary: _,
			detailLeft: f,
			onSelect: g
		}), t[16] = _, t[17] = g, t[18] = h) : h = t[18];
		var y;
		t[19] !== n.originalValue || t[20] !== n.overridden || t[21] !== c ? (y = n.overridden === !0 && s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "reset",
			primary: "Reset",
			secondary: s.jsxs("span", { children: ["Set the value back to ", n.originalValue] }),
			detailLeft: s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
			onSelect: c
		}), t[19] = n.originalValue, t[20] = n.overridden, t[21] = c, t[22] = y) : y = t[22];
		var C;
		return t[23] !== y || t[24] !== p || t[25] !== h ? (C = s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, { children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
			padding: d,
			children: [
				p,
				h,
				y
			]
		}) }), t[23] = y, t[24] = p, t[25] = h, t[26] = C) : C = t[26], C;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(19), n = e.colorScheme, a = e.onEdit, i = e.onSelect, l = e.onToggle, c = o("useWAWebLexicalSearchModelQuery").useLexicalSearchModelQuery(m), d = c.next, p = c.previous, _ = c.results;
		if (_ == null || _.results.length === 0) return null;
		var f;
		if (t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== _.query || t[4] !== _.results) {
			var g;
			t[6] !== a || t[7] !== i || t[8] !== l || t[9] !== _.query ? (g = function(t) {
				return s.jsx(u, {
					abProp: t.data,
					onSelect: i,
					onToggle: l,
					onEdit: a,
					highlightText: _.query.searchText
				}, t.id);
			}, t[6] = a, t[7] = i, t[8] = l, t[9] = _.query, t[10] = g) : g = t[10], f = _.results.map(g), t[0] = a, t[1] = i, t[2] = l, t[3] = _.query, t[4] = _.results, t[5] = f;
		} else f = t[5];
		var h;
		t[11] !== d || t[12] !== p || t[13] !== _.pagination ? (h = _.pagination != null && s.jsx(r("WAWebLexicalMenuPaginationFooter"), {
			page: _.pagination.page,
			totalPages: _.pagination.totalPages,
			onDown: _.pagination.next ? d : null,
			onUp: _.pagination.previous ? p : null
		}), t[11] = d, t[12] = p, t[13] = _.pagination, t[14] = h) : h = t[14];
		var y;
		return t[15] !== n || t[16] !== f || t[17] !== h ? (y = s.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
			colorScheme: n,
			children: [f, h]
		}), t[15] = n, t[16] = f, t[17] = h, t[18] = y) : y = t[18], y;
	}
	function m() {
		return new (o("WAWebABPropSearchModel")).ABPropSearch({ maxPageLength: 8 });
	}
	function p() {
		var e = o("react-compiler-runtime").c(2), t = o("WAWebCommandPaletteController").useCommandPalette(), n;
		if (e[0] !== t) {
			var r = function(n) {
				t.pushPlugin({
					id: "ABPropEditAction",
					placeholder: "Enter new value",
					shortName: n.name,
					forceMenuSelection: !0,
					Component: function() {
						return s.jsx(c, { abProp: n });
					}
				});
			}, a = _;
			n = s.jsx(d, {
				onEdit: r,
				onToggle: a
			}), e[0] = t, e[1] = n;
		} else n = e[1];
		return n;
	}
	function _(e, t) {
		r("WAWebDebug").overrideABProp(e.name, t).catch(r("WAWebNoop"));
	}
	var f = {
		plugin: {
			id: "ABPropCommandPaletteAction",
			placeholder: "Search AB Props",
			shortName: s.jsx(r("WDSIconIcScience.react"), {
				width: 16,
				height: 16
			}),
			Component: p,
			restoreInputOnBack: !0
		},
		trigger: "/ab",
		doc: {
			isDevOnly: !0,
			name: "AB Props",
			description: "Filter through and edit development AB Props"
		}
	};
	l.ABPropMenuItem = u, l.ABPropPlugin = f;
}), 98);
