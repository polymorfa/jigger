__d("WDSRichTextField.react", [
	"Lexical",
	"LexicalClearEditorPlugin",
	"LexicalComposerContext",
	"LexicalContentEditable",
	"LexicalErrorBoundary",
	"LexicalHistoryPlugin",
	"LexicalPlainTextPlugin",
	"LexicalSelection",
	"MLCComposer.react",
	"UserAgent",
	"WAWebCopyPasteSelectable.react",
	"WDSBidiParagraphNode",
	"WDSFontTokenStyles",
	"WDSIconIcMood.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSRichTextAddOns",
	"WDSRichTextCharLimitPlugin",
	"WDSRichTextEditorStatePlugin",
	"WDSRichTextInitialStatePlugin",
	"WDSRichTextOnEnterPlugin",
	"WDSRichTextShell.react",
	"WDSText.react",
	"err",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useId, _ = d.useImperativeHandle, f = d.useMemo, g = d.useState, h = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb", y = {
		root: {
			color: "x1heor9g",
			backgroundColor: "xjbqb8w",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			boxSizing: "x9f619",
			maxWidth: "x193iq5w",
			width: "xh8yej3",
			lineHeight: "x1fc57z9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			caretColor: "xjdcl3y",
			outline: "x1a2a7pz",
			"::selection_backgroundColor": "xkrh14z",
			$$css: !0
		},
		singleLine: {
			whiteSpace: "x1whj5v",
			$$css: !0
		},
		multiLine: {
			whiteSpace: "x126k92a",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		passwordMask: {
			"-webkit-text-security": "x1amp90o",
			$$css: !0
		},
		errorCaret: {
			caretColor: "x1fmtg6p",
			$$css: !0
		}
	}, C = { overlay: {
		position: "x10l6tqk",
		top: "x13vifvy",
		insetInlineStart: "x1o0tod",
		insetInlineEnd: "xtijo5x",
		pointerEvents: "x47corl",
		color: "xhslqc4",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		textOverflow: "xlyipyv",
		whiteSpace: "xuxw1ft",
		userSelect: "x87ps6o",
		$$css: !0
	} }, b = { label: {
		cursor: "xt0e3qv",
		$$css: !0
	} }, v = {
		paragraph: [o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS, "x15bjb6t xdj266r x14z9mp xat24cr x1lziwak xq9mrsl x1n2onr6"].join(" "),
		text: {
			base: o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
			bold: "x117nqv4",
			italic: "x1k4tb9n",
			strikethrough: "xmqliwb x1t57i5m",
			code: "xldyu6s x7l0hbv"
		}
	};
	function S(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.StartIcon, l = a.bottomText, u = a.children, d = a.disabled, S = d === void 0 ? !1 : d, L = a.enableEmojiPicker, E = a.error, k = E === void 0 ? !1 : E, I = a.errorText, T = a.initialText, D = a.label, x = a.labelTestId, $ = a.loading, P = $ === void 0 ? !1 : $, N = a.maxCharacterCount, M = a.characterCountRenderer, w = a.maxLength, A = a.nodes, F = a.onBlur, O = a.onEnter, B = a.onFocus, W = a.onValueChange, q = a.placeholder, U = a.platform, V = U === void 0 ? h : U, H = a.prefix, G = a.readOnly, z = G === void 0 ? !1 : G, j = a.rows, K = j === void 0 ? 1 : j, Q = a.suffix, X = a.testid, Y = X === void 0 ? "text-input" : X, J = a.type, Z = J === void 0 ? "text" : J, ee = K > 1, te = g(T != null ? T : ""), ne = te[0], re = te[1], oe = g(!1), ae = oe[0], ie = oe[1], le = g(!1), se = le[0], ue = le[1], ce = g(null), de = ce[0], me = ce[1], pe = g(!1), _e = pe[0], fe = pe[1], ge = p(), he = "bottom-text-" + ge, ye = "adjacent-label-" + ge, Ce = D != null, be = ne.length > 0, ve = N != null && ne.length > N, Se = k || ve, Re = S === !0 && !Se, Le = !S && !z, Ee = f(function() {
			return o("LexicalHistoryPlugin").createEmptyHistoryState();
		}, []), ke = f(function() {
			var e = A != null ? A : [], t = e.some(function(e) {
				return o("WDSBidiParagraphNode").isBidiNodeType(e.getType());
			});
			return {
				editor: {
					theme: v,
					nodes: t ? [].concat(e, [{
						replace: o("Lexical").ParagraphNode,
						with: function() {
							for (var t of e) if (t !== o("WDSBidiParagraphNode").WDSBidiParagraphNode && o("WDSBidiParagraphNode").isBidiNodeType(t.getType())) return new t();
							return new (o("WDSBidiParagraphNode")).WDSBidiParagraphNode();
						}
					}]) : e,
					onError: function(t) {
						throw r("err")(t.message);
					},
					editable: Le
				},
				policyProduct: "whatsapp",
				surface: "WAJS"
			};
		}, []);
		m(function() {
			de != null && de.setEditable(Le);
		}, [de, Le]);
		var Ie = function(t) {
			re(t), W == null || W(t);
		}, Te = function() {
			ie(!0), B == null || B();
		}, De = function() {
			ie(!1), F == null || F();
		}, xe = function() {
			ue(!0);
		}, $e = function(t) {
			var e = t.relatedTarget;
			(!(e instanceof Node) || !t.currentTarget.contains(e)) && ue(!1);
		}, Pe = a.type === "password" ? a.passwordVisibilityToggled : null, Ne = function() {
			var e = !_e;
			fe(e), Pe == null || Pe(e);
		};
		_(n, function() {
			return {
				focus: function() {
					de == null || de.focus();
				},
				blur: function() {
					de != null && document.activeElement === de.getRootElement() && de.blur();
				},
				isFocused: function() {
					return de == null ? !1 : document.activeElement === de.getRootElement();
				},
				getTextContent: function() {
					return de == null ? "" : de.getEditorState().read(function() {
						return o("Lexical").$getRoot().getChildren().map(function(e) {
							return e.getTextContent();
						}).join("\n");
					});
				},
				setTextContent: function(t) {
					de != null && de.update(function() {
						var e, n = (e = o("Lexical")).$getRoot();
						n.clear();
						var r = e.$createParagraphNode(), a = new e.TextNode(t);
						r.append(a), n.append(r), e.$setSelection(null);
					});
				},
				selectAll: function() {
					de != null && (de.focus(), de.update(function() {
						var e = o("Lexical").$getRoot().select(0, o("Lexical").$getRoot().getChildrenSize());
						e != null && o("LexicalSelection").$selectAll(e);
					}));
				},
				editor: de
			};
		}, [de]);
		var Me = a.EndIcon, we = a.endIconAriaLabel, Ae = a.onEndIconClick, Fe = null, Oe = null, Be = null;
		if (a.type === "password") {
			var We = r(_e ? "WDSIconIcVisibility.react" : "WDSIconIcVisibilityOff.react"), qe = a.visibilityToggleButtonAriaLabel(_e);
			a.EndIcon != null ? (Fe = We, Oe = qe, Be = Ne) : (Me = We, we = qe, Ae = Ne);
		}
		var Ue = Me != null || Fe != null || Q != null || P || L != null, Ve = se || (L == null ? void 0 : L.isEmojiPickerOpen) === !0, He = null;
		Ue && (He = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnEnd, {
			EmojiIcon: L != null ? r("WDSIconIcMood.react") : void 0,
			EndIcon: Me,
			SecondaryIcon: Fe,
			emojiIconAriaLabel: L != null ? L.emojiPickerAriaLabel : void 0,
			endIconAriaLabel: we != null ? we : D,
			isDisabled: z || S,
			isFocused: Ve,
			loading: P,
			onEmojiIconClick: L != null ? L.onEmojiPress : void 0,
			onEndIconClick: Ae,
			onSecondaryIconClick: Be,
			platform: V,
			secondaryIconAriaLabel: Oe != null ? Oe : D,
			suffix: Q
		}));
		var Ge = i != null || H != null, ze = null;
		Ge && (ze = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnStart, {
			prefix: H,
			StartIcon: i,
			platform: V
		}));
		var je = l != null || I != null || N != null, Ke = null;
		je && (Ke = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnBottom, {
			bottomText: l,
			testid: void 0,
			errorText: I,
			maxCharacterCount: N,
			textLength: ne.length,
			platform: V,
			shouldShowError: Se,
			bottomId: he,
			characterCountRenderer: M
		}));
		var Qe = c.jsx(r("WDSRichTextShell.react"), {
			label: void 0,
			isFocused: ae,
			hasValue: be,
			platform: V,
			shouldShowError: Se,
			isDisabled: Re,
			isMultiLine: ee,
			isPlaceholderMode: !0,
			hasAddOnEnd: !!Ue,
			addOnStart: ze,
			addOnEnd: He,
			addOnBottom: Ke,
			isReadOnly: z,
			labelTestId: x,
			children: c.jsxs(r("MLCComposer.react"), {
				initialConfig: ke,
				children: [
					c.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
						contentEditable: c.jsx(o("LexicalContentEditable").ContentEditable, {
							className: (s || (s = r("stylex")))(y.root, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2, ee ? y.multiLine : y.singleLine, Z === "password" && !_e && y.passwordMask, Se && y.errorCaret),
							style: ee ? { height: K + "lh" } : void 0,
							"data-testid": void 0,
							ariaLabel: Ce || D == null ? void 0 : String(D),
							ariaLabelledBy: Ce ? ye : void 0,
							ariaInvalid: Se,
							ariaDescribedBy: je ? he : void 0,
							ariaMultiline: ee || void 0
						}),
						placeholder: c.jsx("div", babelHelpers.extends({}, s.props(C.overlay, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), { children: q })),
						ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary
					}),
					c.jsx(o("LexicalHistoryPlugin").HistoryPlugin, { externalHistoryState: Ee }),
					c.jsx(o("LexicalClearEditorPlugin").ClearEditorPlugin, {}),
					c.jsx(R, { onEditor: me }),
					c.jsx(r("WDSRichTextEditorStatePlugin"), {
						onValueChange: Ie,
						onFocus: Te,
						onBlur: De
					}),
					u,
					c.jsx(r("WDSRichTextInitialStatePlugin"), { initialText: T }),
					w != null && c.jsx(r("WDSRichTextCharLimitPlugin"), { maxLength: w }),
					c.jsx(r("WDSRichTextOnEnterPlugin"), {
						isMultiLine: ee,
						onEnter: O
					})
				]
			})
		});
		return Ce ? c.jsxs("div", {
			className: "x78zum5 xdt5ytf",
			role: "group",
			onFocus: xe,
			onBlur: $e,
			children: [c.jsx("label", {
				onClick: function() {
					return Le && (de == null ? void 0 : de.focus());
				},
				children: c.jsx(r("WDSText.react"), {
					testid: void 0,
					xstyle: b.label,
					id: ye,
					colorName: "contentDeemphasized",
					type: "Body2Emphasized",
					children: D
				})
			}), Qe]
		}) : c.jsx("div", {
			className: "xjp7ctv",
			role: "group",
			onFocus: xe,
			onBlur: $e,
			children: Qe
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.onEditor, n = o("LexicalComposerContext").useLexicalComposerContext(), r = n[0];
		return m(function() {
			t(r);
		}, [r, t]), null;
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = S;
}), 98);
