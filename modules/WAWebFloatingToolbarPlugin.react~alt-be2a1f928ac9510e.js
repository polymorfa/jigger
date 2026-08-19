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
		_(function() {
			if (e.current == null) return;
			function t(t) {
				var n = e.current;
				if (n != null && (t.buttons === 1 || t.buttons === 3) && n.style.pointerEvents !== "none") {
					var r = document.elementFromPoint(t.clientX, t.clientY);
					n.contains(r) || (n.style.pointerEvents = "none");
				}
			}
			function n() {
				var t = e.current;
				t != null && t.style.pointerEvents !== "auto" && (t.style.pointerEvents = "auto");
			}
			return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), function() {
				document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
			};
		}, [e]);
	}
	function S(e) {
		var n = e.anchorElem, a = e.blockQuoteAction, i = e.boldAction, l = e.bulletedListAction, u = e.codeAction, c = e.editor, m = e.inlineCodeAction, g = e.italicAction, h = e.numberedListAction, y = e.spoilerAction, S = e.strikethroughAction, R = f(null), L = f(!0), E = c.getRootElement();
		v(R);
		var k = p(function() {
			var e = o("Lexical").$getSelection(), t = R.current, r = window.getSelection();
			if (t != null && e != null && r != null && !r.isCollapsed && E != null && E.contains(r.anchorNode)) {
				var a = C(r, E);
				b({
					anchorElem: n,
					floatingElem: t,
					rootElem: E,
					targetRect: a
				});
			}
		}, [n, E]);
		_(function() {
			var e = n.parentElement, t = function() {
				c.update(function() {
					k();
				});
			};
			return window.addEventListener("resize", t), e == null || e.addEventListener("scroll", t), E == null || E.addEventListener("scroll", t), function() {
				window.removeEventListener("resize", t), e == null || e.removeEventListener("scroll", t), E == null || E.removeEventListener("scroll", t);
			};
		}, [
			c,
			k,
			n,
			E
		]), _(function() {
			return c.getEditorState().read(function() {
				k();
			}), c.registerCommand(o("Lexical").SELECTION_CHANGE_COMMAND, function() {
				return L.current && k(), !1;
			}, o("Lexical").COMMAND_PRIORITY_LOW);
		}, [c, k]);
		var I = function(n) {
			c.update(function() {
				L.current = !1, o("WAWebTextFormatUtils").$toggleTextFormat(n), t.setTimeout(function() {
					L.current = !0;
				}, 50);
			});
		}, T = m == null || m === o("WAWebTextFormatUtils").TextFormatActionType.Skip && u !== o("WAWebTextFormatUtils").TextFormatActionType.Skip, D = o("useLexicalEditable").useLexicalEditable();
		return d.jsx("div", {
			ref: R,
			className: "x10l6tqk x13vifvy x1o0tod xg01cxk x19991ni x1wsgiic x1so62im x1oy9qf3",
			children: D && d.jsx(r("WDSMenu.react"), {
				isHorizontalMenu: !0,
				children: d.jsxs("div", {
					className: "x78zum5 x1q0g3np x6s0dn4 x46w9ns",
					children: [
						d.jsx(r("WDSMenuBarItem.react"), {
							icon: r("WDSIconIcFormatBold.react"),
							disabled: i === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
							buttonVariant: i === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
							buttonSize: "small",
							onClick: function() {
								return I(o("WAWebTextFormatUtils").TextFormatType.Bold);
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
								return I(o("WAWebTextFormatUtils").TextFormatType.Italic);
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
								return I(o("WAWebTextFormatUtils").TextFormatType.Strikethrough);
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
								return I(o("WAWebTextFormatUtils").TextFormatType.Spoiler);
							},
							title: s._(
								/*BTDS*/
								""
							)
						}),
						T && d.jsx(r("WDSMenuBarItem.react"), {
							icon: r("WDSIconIcCode.react"),
							disabled: u === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
							buttonVariant: u === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
							buttonSize: "small",
							onClick: function() {
								return I(o("WAWebTextFormatUtils").TextFormatType.Code);
							},
							title: s._(
								/*BTDS*/
								""
							),
							keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_CODE
						}),
						m != null && !T && d.jsx(r("WDSMenuBarItem.react"), {
							icon: r("WDSIconIcCode.react"),
							disabled: m === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
							buttonVariant: m === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
							buttonSize: "small",
							onClick: function() {
								return I(o("WAWebTextFormatUtils").TextFormatType.InlineCode);
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
								return I(o("WAWebTextFormatUtils").TextFormatType.NumberedList);
							},
							title: s._(
								/*BTDS*/
								""
							),
							keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_NUMBERED_LIST
						}),
						l != null && d.jsx(r("WDSMenuBarItem.react"), {
							icon: r("WDSIconIcFormatListBulleted.react"),
							disabled: l === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
							buttonVariant: l === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
							buttonSize: "small",
							onClick: function() {
								return I(o("WAWebTextFormatUtils").TextFormatType.BulletedList);
							},
							title: s._(
								/*BTDS*/
								""
							),
							keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_BULLETED_LIST
						}),
						a != null && d.jsx(r("WDSMenuBarItem.react"), {
							icon: r("WDSIconIcFormatQuote.react"),
							disabled: a === o("WAWebTextFormatUtils").TextFormatActionType.Skip,
							buttonVariant: a === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless",
							buttonSize: "small",
							onClick: function() {
								return I(o("WAWebTextFormatUtils").TextFormatType.Quote);
							},
							title: s._(
								/*BTDS*/
								""
							),
							keyboardShortcutAction: o("WAWebActions").Action.TOGGLE_QUOTE
						})
					]
				})
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e, n) {
		var r, a = n.blockQuoteEnabled, i = n.bulletPointsEnabled, l = n.inlineCodeEnabled, s = n.numberedListEnabled, u = g(!1), c = u[0], d = u[1], m = g((r = o("WAWebTextFormatUtils")).TextFormatActionType.Skip), f = m[0], h = m[1], y = g(r.TextFormatActionType.Skip), C = y[0], b = y[1], v = g(r.TextFormatActionType.Skip), S = v[0], R = v[1], L = g(r.TextFormatActionType.Skip), E = L[0], k = L[1], I = g(r.TextFormatActionType.Skip), T = I[0], D = I[1], x = g(r.TextFormatActionType.Skip), $ = x[0], P = x[1], N = g(r.TextFormatActionType.Skip), M = N[0], w = N[1], A = g(r.TextFormatActionType.Skip), F = A[0], O = A[1], B = g(r.TextFormatActionType.Skip), W = B[0], q = B[1], U = p(function() {
			e && e.getEditorState().read(function() {
				if (e.isComposing()) {
					d(!1);
					return;
				}
				var t = o("WAWebLexicalUtils").$getRangeSelection(), n = window.getSelection(), r = e.getRootElement();
				if (n != null && (!t || t.isCollapsed() || r == null || !r.contains(n.anchorNode) || t.getTextContent() === "\n")) {
					d(!1);
					return;
				}
				if (!o("Lexical").$isRangeSelection(t)) {
					d(!1);
					return;
				}
				d(!0);
				var u = o("WAWebTextFormatUtils").$normalizeTextSelection();
				[
					[o("WAWebTextFormatUtils").TextFormatType.Bold, h],
					[o("WAWebTextFormatUtils").TextFormatType.Italic, b],
					[o("WAWebTextFormatUtils").TextFormatType.Strikethrough, R],
					[o("WAWebTextFormatUtils").TextFormatType.Spoiler, k],
					[o("WAWebTextFormatUtils").TextFormatType.Code, D],
					l ? [o("WAWebTextFormatUtils").TextFormatType.InlineCode, P] : null,
					s ? [o("WAWebTextFormatUtils").TextFormatType.NumberedList, w] : null,
					i ? [o("WAWebTextFormatUtils").TextFormatType.BulletedList, O] : null,
					a ? [o("WAWebTextFormatUtils").TextFormatType.Quote, q] : null
				].filter(Boolean).forEach(function(e) {
					var t = e[0], n = e[1];
					n(u ? o("WAWebTextFormatUtils").$getTextFormatAction(u, t) : o("WAWebTextFormatUtils").TextFormatActionType.Skip);
				});
			});
		}, [
			a,
			i,
			e,
			l,
			s
		]);
		_(function() {
			return document.addEventListener("selectionchange", U), function() {
				document.removeEventListener("selectionchange", U);
			};
		}, [U]), _(function() {
			if (e) return o("LexicalUtils").mergeRegister(e.registerRootListener(function() {
				e.getRootElement() == null && d(!1);
			}), e.registerUpdateListener(function() {
				t.setTimeout(U, 0);
			}));
		}, [e, U]);
		var V = {
			isText: c,
			boldAction: c ? f : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
			italicAction: c ? C : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
			strikethroughAction: c ? S : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
			spoilerAction: c ? E : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
			codeAction: c ? T : o("WAWebTextFormatUtils").TextFormatActionType.Skip,
			inlineCodeAction: null,
			numberedListAction: null,
			bulletedListAction: null,
			blockQuoteAction: null
		};
		return l && (V.inlineCodeAction = c ? $ : o("WAWebTextFormatUtils").TextFormatActionType.Skip), s && (V.numberedListAction = M), i && (V.bulletedListAction = F), a && (V.blockQuoteAction = W), V;
	}
	function L(t) {
		var n = t.blockQuoteEnabled, a = t.bulletPointsEnabled, i = t.inlineCodeEnabled, l = t.numberedListEnabled, s = o("LexicalComposerContext").useLexicalComposerContext(), c = s[0], m = R(c, {
			bulletPointsEnabled: a,
			numberedListEnabled: l,
			inlineCodeEnabled: i,
			blockQuoteEnabled: n
		}), p = m.isText, _ = babelHelpers.objectWithoutPropertiesLoose(m, u), f = document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID);
		return f == null ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[FloatingToolbarPlugin] anchor elem not found"]))), null) : p ? (o("WAWebABProps").getABPropConfigValue("is_spoiler_rich_format_sender_enabled") || (_.spoilerAction = null), o("ReactDOM").createPortal(d.jsx(r("WAWebPortalThemeWrapper.react"), { children: d.jsx(S, babelHelpers.extends({
			editor: c,
			anchorElem: f
		}, _)) }), f)) : null;
	}
	L.displayName = L.name + " [from " + i.id + "]", l.FloatingToolbarPlugin = L;
}), 226);
