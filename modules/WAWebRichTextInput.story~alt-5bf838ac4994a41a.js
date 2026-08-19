__d("WAWebRichTextInput.story", [
	"WALogger",
	"WAWebButton.react",
	"WAWebChat.react",
	"WAWebDebugCommandSuggestions.react",
	"WAWebEmojiPickerPlugin",
	"WAWebMentionPickerPlugin",
	"WAWebQuickReplyGatingUtils",
	"WAWebQuickReplySuggestions.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputContentEditable.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebShowroomUtils",
	"WAWebSuggestionsPanelContainer.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"react",
	"useWAWebCheckbox",
	"useWAWebSelect"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useRef, y = f.useState, C = {
		container: {
			position: "x1n2onr6",
			marginInlineEnd: "x1xegmmw",
			marginBottom: "x1e56ztr",
			marginInlineStart: "x13fj5qh",
			marginTop: "x7iklje",
			$$css: !0
		},
		inputContainer: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			marginBottom: "xod5an3",
			$$css: !0
		},
		input: {
			zIndex: "xhtitgo",
			backgroundColor: "xk7ee7b",
			$$css: !0
		},
		fontSize13: {
			fontSize: "x1nxh6w3",
			$$css: !0
		},
		fontSize17: {
			fontSize: "x1lkfr7t",
			$$css: !0
		},
		fontSize19: {
			fontSize: "xlm9qay",
			$$css: !0
		},
		fontSize21: {
			fontSize: "x1n34360",
			$$css: !0
		},
		fontSize23: {
			fontSize: "xwudbvs",
			$$css: !0
		},
		fontSize25: {
			fontSize: "x1r90a5f",
			$$css: !0
		},
		marginAll8: {
			marginTop: "x1380le5",
			marginInlineEnd: "xqf2s3x",
			marginBottom: "xefnzgg",
			marginInlineStart: "x150mmf0",
			$$css: !0
		}
	}, b = o("WAWebShowroomUtils").getRandomGroup();
	function v(e) {
		o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebToast.react").Toast, { msg: e }));
	}
	function S() {
		var t, n = y(), a = n[0], i = n[1], l = (t = o("useWAWebCheckbox")).useCheckBox("Read only", !1), p = l[0], f = l[1], h = t.useCheckBox("Spell check", !1), S = h[0], R = h[1], L = t.useCheckBox("Multiline", !0), k = L[0], I = L[1], T = t.useCheckBox("Max Length (10)", !1), D = T[0], x = T[1], $ = t.useCheckBox("Line Wrap (true by default)", !0), P = $[0], N = $[1], M = t.useCheckBox("Show placeholder", !0), w = M[0], A = M[1], F = t.useCheckBox("Show title", !0), O = F[0], B = F[1], W = E(), q = W.formatCheckBoxes, U = W.formatOptions, V = o("useWAWebSelect").useSelect("Font size", [
			13,
			o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE,
			17,
			19,
			21,
			23,
			25
		], {
			defaultSelectedIndex: 1,
			onChange: function(t) {
				t < o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE && v("Using a font size smaller than " + o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE + " is not supported. This is for testing purpose only.");
			}
		}), H = V[0], G = V[1], z = o("useWAWebSelect").useSelect("Max Visible Lines (default 5)", [
			3,
			4,
			5,
			6,
			7,
			8
		], { defaultSelectedIndex: 2 }), j = z[0], K = z[1], Q = t.useCheckBox("Focus on mount", !1), X = Q[0], Y = Q[1], J = t.useCheckBox("Select on mount (will also focus the input)", !1), Z = J[0], ee = J[1], te = t.useCheckBox("Set initial text", !1, Z), ne = te[0], re = te[1], oe = t.useCheckBox("Paste from HTML", !1), ae = oe[0], ie = oe[1], le = String(ne) + "-" + String(X) + "-" + String(Z);
		if (g(function() {
			return function() {
				return v("Input is forced re-rendered.");
			};
		}, [le]), !b) return _.jsx("span", { children: "No groups found" });
		var se = a == null ? void 0 : a.editor, ue = function(n, r) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onChange"])));
		}, ce = function() {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onBlur"])));
		}, de = function() {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onFocus"])));
		}, me = function(t) {
			v("onEnter triggered"), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onEnter"])));
		}, pe = function(t) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onFiles"]))), v("onFiles triggered (see console for output)");
		}, _e = function(t) {
			return o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onTextPaste"]))), v("onTextPaste triggered (see console for output)"), !1;
		}, fe = function() {
			v("onMaxPasteExceeded triggered");
		}, ge = function(t, n) {
			setTimeout(function() {
				return a == null ? void 0 : a.setTextContent(t);
			}, n);
		};
		return _.jsxs("div", {
			className: "x1n2onr6 x1xegmmw x1e56ztr x13fj5qh x7iklje",
			children: [
				_.jsxs("div", {
					className: "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xod5an3",
					children: [_.jsxs(r("WAWebRichTextInput.react"), {
						xstyle: C.input,
						textXstyle: C["fontSize" + String(H)],
						ref: i,
						initialText: ne || Z ? "Sample text ❤️ *bold*" : void 0,
						readOnly: p,
						spellCheck: S,
						multiline: k,
						lineWrap: P,
						placeholder: w ? "Type a message" : void 0,
						title: O ? "Type a message" : void 0,
						showDebugPanel: !0,
						maxLength: D ? 10 : void 0,
						maxVisibleLines: j != null ? j : 5,
						focusOnMount: X,
						selectOnMount: Z,
						pasteFromHTML: ae,
						onChange: ue,
						onFiles: pe,
						onTextPaste: _e,
						onMaxPasteExceeded: fe,
						onEnter: me,
						onBlur: ce,
						onFocus: de,
						children: [
							_.jsx(r("WAWebRichTextInputPlugins.react"), babelHelpers.extends({
								groupMetadata: b.groupMetadata,
								textFormatEnabled: !0
							}, U)),
							_.jsx(r("WAWebEmojiPickerPlugin"), {}),
							_.jsx(r("WAWebMentionPickerPlugin"), {
								chat: b,
								source: "chat-composer"
							})
						]
					}, le), se && _.jsxs(_.Fragment, { children: [
						!1,
						!1,
						o("WAWebQuickReplyGatingUtils").canSendQuickReply() && _.jsx(r("WAWebQuickReplySuggestions.react"), {
							kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
							editor: se
						}),
						_.jsx(r("WAWebDebugCommandSuggestions.react"), {
							kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
							editor: se
						})
					] })]
				}),
				_.jsx("h2", { children: "Test group for mentions" }),
				_.jsx(o("WAWebChat.react").Chat, {
					chat: b,
					noContext: !0,
					mode: "INFO"
				}),
				_.jsx("h2", { children: "Options" }),
				f,
				A,
				B,
				R,
				I,
				N,
				x,
				re,
				Y,
				ee,
				ie,
				G,
				K,
				_.jsx("h2", { children: "Text Format Options" }),
				q,
				_.jsx("h2", { children: "Ref APIs" }),
				_.jsx("div", { children: _.jsxs(o("WAWebButton.react").ButtonGroup, {
					direction: "vertical",
					children: [
						_.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
							onClick: function() {
								return ge("Hello *World*!\nLine 2\nLine 3");
							},
							children: "Set text via 'inputRef.setTextContent'"
						}),
						_.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
							onClick: function() {
								return ge("Hello *World*!\nLine 2\nLine 3", 5e3);
							},
							children: "Set text via 'inputRef.setTextContent' (5s delay)"
						}),
						_.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
							onClick: function() {
								return ge("");
							},
							children: "Clear text via 'inputRef.setTextContent'"
						}),
						_.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
							onClick: function() {
								return ge("", 5e3);
							},
							children: "Clear text via 'inputRef.setTextContent' (5s delay)"
						})
					]
				}) })
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		var e = E(), t = e.formatCheckBoxes, n = e.formatOptions, o = h("\n*Text formats*\n\n*bold* _italic_ ~strikethrough~ ```code```\n\nNested formats\n_~*nested*~_\n~crossed *bold* _italic_~\n*bold ~crossed~*\n_italic ~crossed~ *bold*_\n\nEmojis\n❤️💚\n\n\n*Code Block*\n\n```\nconst enabled = true;\n*bold* _italic_ ~strikethrough~\n`inline code`\n> Quoted message\n```\n\n\n*Bulleted List*\n\n* Item with plaintext\n* Item with emojis ❤️💚\n* *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n* ```Entire item inside a code block```\n\n* Item before\n* Item ends with code block ```\n* Item 1 inside code block\n* Item 2 inside code block```\n* Item after\n\n* Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Hyphen List*\n\n- Item with plaintext\n- Item with emojis ❤️💚\n- *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n- ```Entire item inside a code block```\n\n- Item before\n- Item ends with code block ```\n- Item 1 inside code block\n- Item 2 inside code block```\n- Item after\n\n- Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Numbered List*\n\n1. Item with plaintext\n2. Item with emojis ❤️💚\n3. Item with link https://whatsapp.com/\n4. *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n5. ```Entire item inside a code block```\n15. Item starting with a non-sequential number\n\n1. Item before\n2. Item ends with code block ```\n3. Item 1 inside code block\n4. Item 2 inside code block```\n5. Item after\n\n1. Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Inline Code*\n\nWhat is `const var = '123'`?\nExplain `const name = \"world\"; const fun = () => { console.log('Hello'); }`\n\n\n*Block Quote*\n\n> Quoted message 1\n> *bold* _italic_ ~strikethrough~ `inline code` ```block code```\n> Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog word\n> Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna.\n\n> Quote ends with code block ```code\n```\n  ");
		return _.jsxs("div", {
			className: "x1380le5 xqf2s3x xefnzgg x150mmf0",
			children: [
				_.jsx("div", {
					className: "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xod5an3",
					children: _.jsx(r("WAWebRichTextInput.react"), {
						xstyle: C.input,
						initialText: o.current,
						multiline: !0,
						showDebugPanel: !0,
						onChange: function(t) {
							var e = t.text;
							o.current = e;
						},
						children: _.jsx(r("WAWebRichTextInputPlugins.react"), babelHelpers.extends({ textFormatEnabled: !0 }, n))
					})
				}),
				_.jsx("h2", { children: "Text Format Options" }),
				t
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = {
		storyName: "WAWebRichTextInput",
		component: S,
		description: "\n    New rich text input based on Facebook's Lexical Editor.\n  ",
		examples: [{
			title: "RichTextInput",
			description: "\n        Supported plugins\n        - mentions\n        - emojis\n        - text format\n        - quick replies\n      ",
			example: function() {
				return _.jsx(S, {});
			},
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}, {
			title: "RichTextInput",
			description: "\n        With initial text\n      ",
			example: function() {
				return _.jsx(R, {});
			},
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}]
	};
	function E() {
		var e, t = (e = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0), n = t[0], r = t[1], a = e.useCheckBox("Enable numbered list", !0), i = a[0], l = a[1], s = e.useCheckBox("Enable inline code", !0), u = s[0], c = s[1], d = e.useCheckBox("Enable block quote", !0), m = d[0], p = d[1], f = e.useCheckBox("Enable text format shortcuts", !0), g = f[0], h = f[1], y = e.useCheckBox("Enable floating toolbar", !0), C = y[0], b = y[1];
		return {
			formatOptions: {
				bulletPointsEnabled: n,
				numberedListEnabled: i,
				inlineCodeEnabled: u,
				blockQuoteEnabled: m,
				textFormatShortcutsEnabled: g,
				floatingToolbarEnabled: C
			},
			formatCheckBoxes: _.jsxs(_.Fragment, { children: [
				r,
				l,
				c,
				p,
				h,
				b
			] })
		};
	}
	l.default = L;
}), 98);
