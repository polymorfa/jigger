__d("WAWebFloatingToolbarPlugin.react", [
	"fbt",
	"Lexical",
	"LexicalComposerContext",
	"LexicalUtils",
	"ReactDOM",
	"WALogger",
	"WAWebABProps",
	"WAWebActions",
	"WAWebL10N",
	"WAWebLexicalUtils",
	"WAWebPopover.react",
	"WAWebPortalThemeWrapper.react",
	"WAWebTextFormatUtils",
	"WDSIconIcCode.react",
	"WDSIconIcFormatBold.react",
	"WDSIconIcFormatItalic.react",
	"WDSIconIcFormatListBulleted.react",
	"WDSIconIcFormatListNumbered.react",
	"WDSIconIcFormatQuote.react",
	"WDSIconIcFormatStrikethrough.react",
	"WDSIconIcHidden.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"clamp",
	"react",
	"react-compiler-runtime",
	"useLexicalEditable"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["isText"], c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = 8, y = 10;
	function C(e, t) {
		var n = e.getRangeAt(0), r;
		if (e.anchorNode === t) {
			for (var o = t; o.firstElementChild instanceof HTMLElement;) o = o.firstElementChild;
			r = o.getBoundingClientRect();
		} else r = n.getBoundingClientRect();
		return r;
	}
	function b(e) {
		var t = e.anchorElem, n = e.floatingElem, o = e.rootElem, a = e.targetRect, i = t.parentElement;
		if (a == null || !i) {
			n.style.opacity = "0", n.style.transform = "translate(-10000px, -10000px)";
			return;
		}
		var l = n.getBoundingClientRect(), s = t.getBoundingClientRect(), u = o.getBoundingClientRect(), c = i.getBoundingClientRect(), d = a.top - l.height - y;
		d -= s.top;
		var m = u.top - l.height - y, p = u.bottom - l.height;
		d = r("clamp")(d, m, p);
		var _ = 0;
		if (r("WAWebL10N").isRTL()) {
			var g = -(window.innerWidth - l.width - h * 2), C = 0;
			_ = -(window.innerWidth - a.right - h * 2), _ = r("clamp")(_, g, C);
		} else {
			_ = a.left - h;
			var f = c.right - l.width - h;
			_ = Math.min(f, _), _ -= s.left;
		}
		n.style.opacity = "1", n.style.transform = "translate(" + _ + "px, " + d + "px)";
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(3), n, r;
		t[0] !== e ? (n = function() {
			if (e.current != null) {
				var t = function(n) {
					var t = e.current;
					if (t != null && (n.buttons === 1 || n.buttons === 3) && t.style.pointerEvents !== "none") {
						var r = document.elementFromPoint(n.clientX, n.clientY);
						t.contains(r) || (t.style.pointerEvents = "none");
					}
				}, n = function() {
					var t = e.current;
					t != null && t.style.pointerEvents !== "auto" && (t.style.pointerEvents = "auto");
				};
				return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), (function() {
					document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
				});
			}
		}, r = [e], t[0] = e, t[1] = n, t[2] = r) : (n = t[1], r = t[2]), _(n, r);
	}
	function S(e) {
		var n = o("react-compiler-runtime").c(37), a = e.anchorElem, i = e.blockQuoteAction, l = e.boldAction, u = e.bulletedListAction, c = e.codeAction, m = e.editor, p = e.inlineCodeAction, g = e.italicAction, h = e.numberedListAction, y = e.spoilerAction, S = e.strikethroughAction, R = f(null), L = f(!0), E;
		n[0] !== m ? (E = m.getRootElement(), n[0] = m, n[1] = E) : E = n[1];
		var k = E;
		v(R);
		var I;
		n[2] !== a || n[3] !== k ? (I = function() {
			var e = o("Lexical").$getSelection(), t = R.current, n = window.getSelection();
			if (t != null && e != null && n != null && !n.isCollapsed && k != null && k.contains(n.anchorNode)) {
				var r = C(n, k);
				b({
					anchorElem: a,
					floatingElem: t,
					rootElem: k,
					targetRect: r
				});
			}
		}, n[2] = a, n[3] = k, n[4] = I) : I = n[4];
		var T = I, D;
		n[5] !== T || n[6] !== a.parentElement || n[7] !== m || n[8] !== k ? (D = function() {
			var e = a.parentElement, t = function() {
				m.update(function() {
					T();
				});
			};
			return window.addEventListener("resize", t), e == null || e.addEventListener("scroll", t), k == null || k.addEventListener("scroll", t), (function() {
				window.removeEventListener("resize", t), e == null || e.removeEventListener("scroll", t), k == null || k.removeEventListener("scroll", t);
			});
		}, n[5] = T, n[6] = a.parentElement, n[7] = m, n[8] = k, n[9] = D) : D = n[9];
		var x;
		n[10] !== T || n[11] !== a || n[12] !== m || n[13] !== k ? (x = [
			m,
			T,
			a,
			k
		], n[10] = T, n[11] = a, n[12] = m, n[13] = k, n[14] = x) : x = n[14], _(D, x);
		var $, P;
		n[15] !== T || n[16] !== m ? ($ = function() {
			return m.getEditorState().read(function() {
				T();
			}), m.registerCommand(o("Lexical").SELECTION_CHANGE_COMMAND, function() {
				return L.current && T(), !1;
			}, o("Lexical").COMMAND_PRIORITY_LOW);
		}, P = [m, T], n[15] = T, n[16] = m, n[17] = $, n[18] = P) : ($ = n[17], P = n[18]), _($, P);
		var N;
		n[19] !== m ? (N = function(n) {
			m.update(function() {
				L.current = !1, o("WAWebTextFormatUtils").$toggleTextFormat(n), t.setTimeout(function() {
					L.current = !0;
				}, 50);
			});
		}, n[19] = m, n[20] = N) : N = n[20];
		var M = N, w = p == null || p === o("WAWebTextFormatUtils").TextFormatActionType.Skip && c !== o("WAWebTextFormatUtils").TextFormatActionType.Skip, A = o("useLexicalEditable").useLexicalEditable(), F;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x10l6tqk x13vifvy x1o0tod xg01cxk x19991ni x1wsgiic x1so62im x1oy9qf3" }, n[21] = F) : F = n[21];
		var O;
		n[22] !== i || n[23] !== l || n[24] !== u || n[25] !== c || n[26] !== M || n[27] !== p || n[28] !== A || n[29] !== g || n[30] !== h || n[31] !== w || n[32] !== y || n[33] !== S ? (O = A && d.jsx(r("WDSMenu.react"), {
			isHorizontalMenu: !0,
			children: d.jsxs("div", {
				className: "x78zum5 x1q0g3np x6s0dn4 x46w9ns",
				children: [
					d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcFormatBold.react"),
						disabled: l === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: l === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.Bold);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_BOLD
					}),
					d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcFormatItalic.react"),
						disabled: g === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: g === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.Italic);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_ITALIC
					}),
					d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcFormatStrikethrough.react"),
						disabled: S === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: S === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.Strikethrough);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_STRIKETHROUGH
					}),
					y != null && d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcHidden.react"),
						disabled: y === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: y === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.Spoiler);
						},
						title: s._(
							/*BTDS*/
							""
						)
					}),
					w && d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcCode.react"),
						disabled: c === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: c === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.Code);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_CODE
					}),
					p != null && !w && d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcCode.react"),
						disabled: p === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: p === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.InlineCode);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_INLINE_CODE
					}),
					h != null && d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcFormatListNumbered.react"),
						disabled: h === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: h === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.NumberedList);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_NUMBERED_LIST
					}),
					u != null && d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcFormatListBulleted.react"),
						disabled: u === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: u === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.BulletedList);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_BULLETED_LIST
					}),
					i != null && d.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcFormatQuote.react"),
						disabled: i === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
						buttonVariant: i === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
						buttonSize: "small",
						onClick: function() {
							return M(o("WAWebTextFormatUtils").TextFormatType.Quote);
						},
						title: s._(
							/*BTDS*/
							""
						),
						keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_QUOTE
					})
				]
			})
		}), n[22] = i, n[23] = l, n[24] = u, n[25] = c, n[26] = M, n[27] = p, n[28] = A, n[29] = g, n[30] = h, n[31] = w, n[32] = y, n[33] = S, n[34] = O) : O = n[34];
		var B;
		return n[35] !== O ? (B = d.jsx("div", babelHelpers.extends({ ref: R }, F, { children: O })), n[35] = O, n[36] = B) : B = n[36], B;
	}
	function R(e, n) {
		var r, a = o("react-compiler-runtime").c(28), i = n.blockQuoteEnabled, l = n.bulletPointsEnabled, s = n.inlineCodeEnabled, u = n.numberedListEnabled, c = g(!1), d = c[0], m = c[1], p = g((r = o("WAWebTextFormatUtils")).TextFormatActionType.Skip), f = p[0], h = p[1], y = g(r.TextFormatActionType.Skip), C = y[0], b = y[1], v = g(r.TextFormatActionType.Skip), S = v[0], R = v[1], L = g(r.TextFormatActionType.Skip), E = L[0], k = L[1], I = g(r.TextFormatActionType.Skip), T = I[0], D = I[1], x = g(r.TextFormatActionType.Skip), $ = x[0], P = x[1], N = g(r.TextFormatActionType.Skip), M = N[0], w = N[1], A = g(r.TextFormatActionType.Skip), F = A[0], O = A[1], B = g(r.TextFormatActionType.Skip), W = B[0], q = B[1], U;
		a[0] !== i || a[1] !== l || a[2] !== e || a[3] !== s || a[4] !== u ? (U = function() {
			e && e.getEditorState().read(function() {
				if (e.isComposing()) {
					m(!1);
					return;
				}
				var t = o("WAWebLexicalUtils").$getRangeSelection(), n = window.getSelection(), r = e.getRootElement();
				if (n != null && (!t || t.isCollapsed() || r == null || !r.contains(n.anchorNode) || t.getTextContent() === "\n")) {
					m(!1);
					return;
				}
				if (!o("Lexical").$isRangeSelection(t)) {
					m(!1);
					return;
				}
				m(!0);
				var a = o("WAWebTextFormatUtils").$normalizeTextSelection();
				[
					[o("WAWebTextFormatUtils").TextFormatType.Bold, h],
					[o("WAWebTextFormatUtils").TextFormatType.Italic, b],
					[o("WAWebTextFormatUtils").TextFormatType.Strikethrough, R],
					[o("WAWebTextFormatUtils").TextFormatType.Spoiler, k],
					[o("WAWebTextFormatUtils").TextFormatType.Code, D],
					s ? [o("WAWebTextFormatUtils").TextFormatType.InlineCode, P] : null,
					u ? [o("WAWebTextFormatUtils").TextFormatType.NumberedList, w] : null,
					l ? [o("WAWebTextFormatUtils").TextFormatType.BulletedList, O] : null,
					i ? [o("WAWebTextFormatUtils").TextFormatType.Quote, q] : null
				].filter(Boolean).forEach(function(e) {
					var t = e[0], n = e[1];
					n(a ? o("WAWebTextFormatUtils").$getTextFormatAction(a, t) : o("WAWebTextFormatUtils").TextFormatActionType.Skip);
				});
			});
		}, a[0] = i, a[1] = l, a[2] = e, a[3] = s, a[4] = u, a[5] = U) : U = a[5];
		var V = U, H, G;
		a[6] !== V ? (H = function() {
			return document.addEventListener("selectionchange", V), (function() {
				document.removeEventListener("selectionchange", V);
			});
		}, G = [V], a[6] = V, a[7] = H, a[8] = G) : (H = a[7], G = a[8]), _(H, G);
		var z, j;
		a[9] !== e || a[10] !== V ? (z = function() {
			if (e) return o("LexicalUtils").mergeRegister(e.registerRootListener(function() {
				e.getRootElement() == null && m(!1);
			}), e.registerUpdateListener(function() {
				t.setTimeout(V, 0);
			}));
		}, j = [e, V], a[9] = e, a[10] = V, a[11] = z, a[12] = j) : (z = a[11], j = a[12]), _(z, j);
		var K = d ? f : o("WAWebTextFormatUtils").TextFormatActionType.Skip, Q = d ? C : o("WAWebTextFormatUtils").TextFormatActionType.Skip, X = d ? S : o("WAWebTextFormatUtils").TextFormatActionType.Skip, Y = d ? E : o("WAWebTextFormatUtils").TextFormatActionType.Skip, J = d ? T : o("WAWebTextFormatUtils").TextFormatActionType.Skip, Z;
		return a[13] !== W || a[14] !== i || a[15] !== l || a[16] !== F || a[17] !== $ || a[18] !== s || a[19] !== d || a[20] !== M || a[21] !== u || a[22] !== J || a[23] !== K || a[24] !== Q || a[25] !== X || a[26] !== Y ? (Z = {
			isText: d,
			boldAction: K,
			italicAction: Q,
			strikethroughAction: X,
			spoilerAction: Y,
			codeAction: J,
			inlineCodeAction: null,
			numberedListAction: null,
			bulletedListAction: null,
			blockQuoteAction: null
		}, s && (Z.inlineCodeAction = d ? $ : o("WAWebTextFormatUtils").TextFormatActionType.Skip), u && (Z.numberedListAction = M), l && (Z.bulletedListAction = F), i && (Z.blockQuoteAction = W), a[13] = W, a[14] = i, a[15] = l, a[16] = F, a[17] = $, a[18] = s, a[19] = d, a[20] = M, a[21] = u, a[22] = J, a[23] = K, a[24] = Q, a[25] = X, a[26] = Y, a[27] = Z) : Z = a[27], Z;
	}
	function L(t) {
		var n = o("react-compiler-runtime").c(17), a = t.blockQuoteEnabled, i = t.bulletPointsEnabled, l = t.inlineCodeEnabled, s = t.numberedListEnabled, c = o("LexicalComposerContext").useLexicalComposerContext(), m = c[0], p;
		n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== s ? (p = {
			bulletPointsEnabled: i,
			numberedListEnabled: s,
			inlineCodeEnabled: l,
			blockQuoteEnabled: a
		}, n[0] = a, n[1] = i, n[2] = l, n[3] = s, n[4] = p) : p = n[4];
		var _ = R(m, p), f, g, h;
		if (n[5] !== _) {
			h = Symbol.for("react.early_return_sentinel");
			e: {
				var y = _.isText, C = babelHelpers.objectWithoutPropertiesLoose(_, u);
				f = C;
				var b;
				if (n[9] === Symbol.for("react.memo_cache_sentinel") ? (b = document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID), n[9] = b) : b = n[9], g = b, g == null) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[FloatingToolbarPlugin] anchor elem not found"]))), h = null;
					break e;
				}
				if (!y) {
					h = null;
					break e;
				}
				o("WAWebABProps").getABPropConfigValue("is_spoiler_rich_format_sender_enabled") || (f.spoilerAction = null);
			}
			n[5] = _, n[6] = f, n[7] = g, n[8] = h;
		} else f = n[6], g = n[7], h = n[8];
		if (h !== Symbol.for("react.early_return_sentinel")) return h;
		var v;
		n[10] !== f || n[11] !== g || n[12] !== m ? (v = d.jsx(r("WAWebPortalThemeWrapper.react"), { children: d.jsx(S, babelHelpers.extends({
			editor: m,
			anchorElem: g
		}, f)) }), n[10] = f, n[11] = g, n[12] = m, n[13] = v) : v = n[13];
		var L;
		return n[14] !== g || n[15] !== v ? (L = o("ReactDOM").createPortal(v, g), n[14] = g, n[15] = v, n[16] = L) : L = n[16], L;
	}
	l.FloatingToolbarPlugin = L;
}), 226);
