__d("WAWebDeveloperMenuGroupAbPropsDrawer.react", [
	"fbt",
	"invariant",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebConfirmPopup.react",
	"WAWebDebug",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebGroupABPropSearchModel",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebModalManager",
	"WAWebRefreshIcon.react",
	"WAWebRichTextField.react",
	"WAWebSearchInput",
	"WAWebSelect.react",
	"WAWebSelectMenuItem.react",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebSearchModel"
], (function(t, n, r, o, a, i, l, s, u) {
	var e = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState;
	function h(e) {
		var t;
		return (t = e == null ? void 0 : e.reduce(function(e, t) {
			var n = e[0], r = e[1], o = {
				itemKey: t.id,
				height: t.data.type === "bool" || String(t.data.value) === "" ? 42 : 58,
				data: {
					abProp: t.data,
					isHeading: !1
				}
			};
			return t.data.overridden ? n.push(o) : r.push(o), [n, r];
		}, [[], []])) != null ? t : [[], []];
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(14), n = e.name, r = e.onChange, a = e.type, i = e.value, l = g(i), s = l[0], u = l[1], c = g(null), m = c[0], p = c[1], _;
		t[0] !== s || t[1] !== r ? (_ = function() {
			r(s), o("WAWebModalManager").ModalManager.close();
		}, t[0] = s, t[1] = r, t[2] = _) : _ = t[2];
		var f = _, h = "Edit \"" + n + "\"", y = String(s), C;
		t[3] !== a ? (C = function(t) {
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
		}, t[3] = a, t[4] = C) : C = t[4];
		var b;
		t[5] !== m || t[6] !== f || t[7] !== y || t[8] !== C ? (b = d.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: y,
			placeholder: "Enter a new value",
			onEnter: f,
			managed: !0,
			selectOnMount: !0,
			maxVisibleLines: 8,
			error: m,
			onChange: C
		}), t[5] = m, t[6] = f, t[7] = y, t[8] = C, t[9] = b) : b = t[9];
		var v;
		return t[10] !== f || t[11] !== h || t[12] !== b ? (v = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: h,
			onOK: f,
			children: b
		}), t[10] = f, t[11] = h, t[12] = b, t[13] = v) : v = t[13], v;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(5), n = e.abProp, r = e.onEdit, a = e.onToggle, i = n.name, l;
		return t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i ? (l = n.type === "bool" ? d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: n.name,
			initialState: !!n.value,
			primary: i,
			onSelect: function(t) {
				a == null || a(n, t);
			}
		}, n.name + "-" + String(n.value)) : d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: n.name,
			primary: i,
			secondary: String(n.value),
			onSelect: function() {
				r == null || r(n);
			}
		}), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l) : l = t[4], l;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(57), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, c = l.onBack, m = R, p = g(m), b = p[0], L = p[1], E;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			L(m());
		}, n[3] = E) : E = n[3], o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "add remove reset", E);
		var k = g(null), I = k[0], T = k[1], D = o("useWAWebSearchModel").useSearchModel(S), x = D.query, $ = D.results, P = D.searchInstance, N = g(h), M = N[0], w = N[1], A = M[0], F = M[1], O;
		n[4] !== ($ == null ? void 0 : $.results) ? (O = function() {
			w(h($ == null ? void 0 : $.results));
		}, n[4] = $ == null ? void 0 : $.results, n[5] = O) : O = n[5];
		var B;
		n[6] !== $ ? (B = [$], n[6] = $, n[7] = B) : B = n[7], _(O, B);
		var W;
		n[8] !== x || n[9] !== P ? (W = function(t) {
			T(t), P.updateGroupJid(t), x("");
		}, n[8] = x, n[9] = P, n[10] = W) : W = n[10];
		var q = W, U, V, H;
		n[11] !== x || n[12] !== ($ == null ? void 0 : $.query) || n[13] !== P || n[14] !== I ? (V = async function(t, n) {
			I != null || u(0, 136815), await r("WAWebDebug").overrideGroupABProp(I, t.name, n), await H();
		}, U = function(t) {
			I != null || u(0, 136815);
			var e = t.type;
			e !== "bool" || u(0, 74916);
			var n = I;
			o("WAWebModalManager").ModalManager.open(d.jsx(y, {
				name: t.name,
				value: String(t.value),
				type: e,
				onChange: async function(o) {
					await r("WAWebDebug").overrideGroupABProp(n, t.name, o), await H();
				}
			}));
		}, H = async function() {
			var e;
			P.preloadData(), await x((e = $ == null ? void 0 : $.query.searchText) != null ? e : "");
		}, n[11] = x, n[12] = $ == null ? void 0 : $.query, n[13] = P, n[14] = I, n[15] = U, n[16] = V, n[17] = H) : (U = n[15], V = n[16], H = n[17]);
		var G;
		n[18] !== H || n[19] !== I ? (G = async function(t) {
			I != null || u(0, 136815), await r("WAWebDebug").resetGroupABProp(I, t.name), await H();
		}, n[18] = H, n[19] = I, n[20] = G) : G = n[20];
		var z = G, j;
		if (n[21] !== F || n[22] !== A) {
			if (j = [], A.length) {
				var K, Q;
				n[24] === Symbol.for("react.memo_cache_sentinel") ? (Q = {
					itemKey: "#HEADING_OVERRIDDEN",
					height: 56,
					data: {
						title: "Overridden Group AB Props",
						isHeading: !0
					},
					static: !0
				}, n[24] = Q) : Q = n[24], (K = j).push.apply(K, [Q].concat(A));
			}
			if (F.length) {
				var X, Y;
				n[25] === Symbol.for("react.memo_cache_sentinel") ? (Y = {
					itemKey: "#HEADING_ALL",
					height: 56,
					data: {
						title: "Available Group AB Props",
						isHeading: !0
					},
					static: !0
				}, n[25] = Y) : Y = n[25], (X = j).push.apply(X, [Y].concat(F));
			}
			n[21] = F, n[22] = A, n[23] = j;
		} else j = n[23];
		var J;
		n[26] !== H || n[27] !== I ? (J = async function() {
			I != null && (await r("WAWebDebug").syncGroupABProps(I), await H());
		}, n[26] = H, n[27] = I, n[28] = J) : J = n[28];
		var Z = J, ee = f(null), te;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (te = d.jsx(o("WAWebMenuIcon.react").MenuIcon, {}), n[29] = te) : te = n[29];
		var ne;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (ne = d.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}), n[30] = ne) : ne = n[30];
		var re;
		n[31] !== Z ? (re = d.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			children: d.jsxs(r("WAWebUnstyledButton.react"), {
				ref: ee,
				children: [te, d.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					material: !0,
					target: ee,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					children: d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "fetch",
						detailLeft: ne,
						secondary: "Fetch all from server",
						onSelect: Z
					})
				})]
			})
		}), n[31] = Z, n[32] = re) : re = n[32];
		var oe = re, ae;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (ae = s._(
			/*BTDS*/
			""
		), n[33] = ae) : ae = n[33];
		var ie;
		n[34] !== b ? (ie = b.map(v), n[34] = b, n[35] = ie) : ie = n[35];
		var le;
		n[36] !== q || n[37] !== ie ? (le = d.jsx(o("WAWebFlex.react").FlexColumn, {
			paddingTop: 8,
			paddingBottom: 8,
			paddingStart: 16,
			paddingEnd: 16,
			children: d.jsx(o("WAWebSelect.react").Select, {
				width: 300,
				menuMaxHeight: 300,
				ariaRoleDescription: "",
				defaultLabel: ae,
				includeSearchInput: !0,
				onChange: q,
				children: ie
			})
		}), n[36] = q, n[37] = ie, n[38] = le) : le = n[38];
		var se = le, ue;
		n[39] === Symbol.for("react.memo_cache_sentinel") ? (ue = s._(
			/*BTDS*/
			""
		), n[39] = ue) : ue = n[39];
		var ce;
		n[40] !== c ? (ce = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: ue,
			onBack: c,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[40] = c, n[41] = ce) : ce = n[41];
		var de;
		n[42] !== U || n[43] !== z || n[44] !== V || n[45] !== j || n[46] !== oe || n[47] !== x || n[48] !== I ? (de = I != null ? d.jsx(o("WAWebSearchInput").DrawerSearchInput, {
			focusOnMount: !1,
			placeholder: "Search Group AB Props",
			detailRight: oe,
			onSearch: x,
			children: d.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
				material: !0,
				colorScheme: "lightest",
				data: j,
				renderItem: function(t) {
					if (t.data.isHeading) return d.jsx(o("WAWebFlex.react").FlexColumn, {
						paddingTop: 16,
						children: d.jsx(o("WAWebMenuItems.react").MenuHeading, { children: t.data.title })
					});
					var e = t.data.abProp;
					return d.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						children: [d.jsx(o("WAWebFlex.react").FlexItem, {
							isFlexContainer: !0,
							grow: 1,
							children: d.jsx(C, {
								abProp: e,
								onToggle: V,
								onEdit: U
							}, e.name)
						}), e.overridden ? d.jsx(r("WAWebUnstyledButton.react"), {
							title: "Reset",
							onClick: function() {
								return z(e);
							},
							children: d.jsx(o("WAWebXIcon.react").XIcon, {})
						}) : null]
					});
				}
			})
		}) : null, n[42] = U, n[43] = z, n[44] = V, n[45] = j, n[46] = oe, n[47] = x, n[48] = I, n[49] = de) : de = n[49];
		var me;
		n[50] !== se || n[51] !== de ? (me = d.jsxs(r("WAWebDrawerBody.react"), { children: [se, de] }), n[50] = se, n[51] = de, n[52] = me) : me = n[52];
		var pe;
		return n[53] !== i || n[54] !== ce || n[55] !== me ? (pe = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "group-ab-props-drawer",
			children: [ce, me]
		}), n[53] = i, n[54] = ce, n[55] = me, n[56] = pe) : pe = n[56], pe;
	}
	function v(e) {
		return d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: e.jid,
			primary: e.name,
			secondary: e.jid,
			searchCriteria: e.name + " " + e.jid
		}, e.jid);
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		return new (o("WAWebGroupABPropSearchModel")).GroupABPropSearch();
	}
	function R() {
		return o("WAWebChatCollection").ChatCollection.filter(k).map(E).sort(L);
	}
	function L(e, t) {
		return e.name.localeCompare(t.name);
	}
	function E(e) {
		return {
			jid: e.id.toString(),
			name: e.formattedTitle
		};
	}
	function k(e) {
		return o("WAWebChatGetters").getIsGroup(e);
	}
	l.default = b;
}), 226);
