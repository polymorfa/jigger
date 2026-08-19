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
	"react-compiler-runtime",
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
		var e, t = o("react-compiler-runtime").c(71), n = y(), a = n[0], i = n[1], l = (e = o("useWAWebCheckbox")).useCheckBox("Read only", !1), s = l[0], u = l[1], c = e.useCheckBox("Spell check", !1), d = c[0], m = c[1], p = e.useCheckBox("Multiline", !0), f = p[0], h = p[1], v = e.useCheckBox("Max Length (10)", !1), S = v[0], $ = v[1], N = e.useCheckBox("Line Wrap (true by default)", !0), M = N[0], A = N[1], F = e.useCheckBox("Show placeholder", !0), O = F[0], B = F[1], W = e.useCheckBox("Show title", !0), q = W[0], U = W[1], V = w(), H = V.formatCheckBoxes, G = V.formatOptions, z, j;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (z = [
			13,
			o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE,
			17,
			19,
			21,
			23,
			25
		], j = {
			defaultSelectedIndex: 1,
			onChange: P
		}, t[0] = z, t[1] = j) : (z = t[0], j = t[1]);
		var K = o("useWAWebSelect").useSelect("Font size", z, j), Q = K[0], X = K[1], Y, J;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (Y = [
			3,
			4,
			5,
			6,
			7,
			8
		], J = { defaultSelectedIndex: 2 }, t[2] = Y, t[3] = J) : (Y = t[2], J = t[3]);
		var Z = o("useWAWebSelect").useSelect("Max Visible Lines (default 5)", Y, J), ee = Z[0], te = Z[1], ne = o("useWAWebCheckbox").useCheckBox("Focus on mount", !1), re = ne[0], oe = ne[1], ae = o("useWAWebCheckbox").useCheckBox("Select on mount (will also focus the input)", !1), ie = ae[0], le = ae[1], se = o("useWAWebCheckbox").useCheckBox("Set initial text", !1, ie), ue = se[0], ce = se[1], de = o("useWAWebCheckbox").useCheckBox("Paste from HTML", !1), me = de[0], pe = de[1], _e = String(ue) + "-" + String(re) + "-" + String(ie), fe;
		if (t[4] !== _e ? (fe = [_e], t[4] = _e, t[5] = fe) : fe = t[5], g(x, fe), !b) {
			var ge;
			return t[6] === Symbol.for("react.memo_cache_sentinel") ? (ge = _.jsx("span", { children: "No groups found" }), t[6] = ge) : ge = t[6], ge;
		}
		var he = a == null ? void 0 : a.editor, ye = D, Ce = T, be = I, ve = k, Se = E, Re = L, Le = R, Ee;
		t[7] !== a ? (Ee = function(t, n) {
			setTimeout(function() {
				return a == null ? void 0 : a.setTextContent(t);
			}, n);
		}, t[7] = a, t[8] = Ee) : Ee = t[8];
		var ke = Ee, Ie, Te;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (Ie = { className: "x1n2onr6 x1xegmmw x1e56ztr x13fj5qh x7iklje" }, Te = { className: "x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz xod5an3" }, t[9] = Ie, t[10] = Te) : (Ie = t[9], Te = t[10]);
		var De = C["fontSize" + String(Q)], xe = ue || ie ? "Sample text ❤️ *bold*" : void 0, $e = O ? "Type a message" : void 0, Pe = q ? "Type a message" : void 0, Ne = S ? 10 : void 0, Me = ee != null ? ee : 5, we;
		t[11] !== G ? (we = _.jsx(r("WAWebRichTextInputPlugins.react"), babelHelpers.extends({
			groupMetadata: b.groupMetadata,
			textFormatEnabled: !0
		}, G)), t[11] = G, t[12] = we) : we = t[12];
		var Ae, Fe;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (Ae = _.jsx(r("WAWebEmojiPickerPlugin"), {}), Fe = _.jsx(r("WAWebMentionPickerPlugin"), {
			chat: b,
			source: "chat-composer"
		}), t[13] = Ae, t[14] = Fe) : (Ae = t[13], Fe = t[14]);
		var Oe;
		t[15] !== re || t[16] !== _e || t[17] !== M || t[18] !== f || t[19] !== me || t[20] !== s || t[21] !== ie || t[22] !== d || t[23] !== $e || t[24] !== Pe || t[25] !== Ne || t[26] !== Me || t[27] !== we || t[28] !== De || t[29] !== xe ? (Oe = _.jsxs(r("WAWebRichTextInput.react"), {
			xstyle: C.input,
			textXstyle: De,
			ref: i,
			initialText: xe,
			readOnly: s,
			spellCheck: d,
			multiline: f,
			lineWrap: M,
			placeholder: $e,
			title: Pe,
			showDebugPanel: !0,
			maxLength: Ne,
			maxVisibleLines: Me,
			focusOnMount: re,
			selectOnMount: ie,
			pasteFromHTML: me,
			onChange: ye,
			onFiles: Se,
			onTextPaste: Re,
			onMaxPasteExceeded: Le,
			onEnter: ve,
			onBlur: Ce,
			onFocus: be,
			children: [
				we,
				Ae,
				Fe
			]
		}, _e), t[15] = re, t[16] = _e, t[17] = M, t[18] = f, t[19] = me, t[20] = s, t[21] = ie, t[22] = d, t[23] = $e, t[24] = Pe, t[25] = Ne, t[26] = Me, t[27] = we, t[28] = De, t[29] = xe, t[30] = Oe) : Oe = t[30];
		var Be;
		t[31] !== he ? (Be = he && _.jsxs(_.Fragment, { children: [
			!1,
			!1,
			o("WAWebQuickReplyGatingUtils").canSendQuickReply() && _.jsx(r("WAWebQuickReplySuggestions.react"), {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: he
			}),
			_.jsx(r("WAWebDebugCommandSuggestions.react"), {
				kind: o("WAWebSuggestionsPanelContainer.react").SuggestionsPanelKind.ComposeBox,
				editor: he
			})
		] }), t[31] = he, t[32] = Be) : Be = t[32];
		var We;
		t[33] !== Oe || t[34] !== Be ? (We = _.jsxs("div", babelHelpers.extends({}, Te, { children: [Oe, Be] })), t[33] = Oe, t[34] = Be, t[35] = We) : We = t[35];
		var qe, Ue, Ve;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (qe = _.jsx("h2", { children: "Test group for mentions" }), Ue = _.jsx(o("WAWebChat.react").Chat, {
			chat: b,
			noContext: !0,
			mode: "INFO"
		}), Ve = _.jsx("h2", { children: "Options" }), t[36] = qe, t[37] = Ue, t[38] = Ve) : (qe = t[36], Ue = t[37], Ve = t[38]);
		var He;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (He = _.jsx("h2", { children: "Text Format Options" }), t[39] = He) : He = t[39];
		var Ge;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (Ge = _.jsx("h2", { children: "Ref APIs" }), t[40] = Ge) : Ge = t[40];
		var ze;
		t[41] !== ke ? (ze = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: function() {
				return ke("Hello *World*!\nLine 2\nLine 3");
			},
			children: "Set text via 'inputRef.setTextContent'"
		}), t[41] = ke, t[42] = ze) : ze = t[42];
		var je;
		t[43] !== ke ? (je = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: function() {
				return ke("Hello *World*!\nLine 2\nLine 3", 5e3);
			},
			children: "Set text via 'inputRef.setTextContent' (5s delay)"
		}), t[43] = ke, t[44] = je) : je = t[44];
		var Ke;
		t[45] !== ke ? (Ke = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: function() {
				return ke("");
			},
			children: "Clear text via 'inputRef.setTextContent'"
		}), t[45] = ke, t[46] = Ke) : Ke = t[46];
		var Qe;
		t[47] !== ke ? (Qe = _.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: function() {
				return ke("", 5e3);
			},
			children: "Clear text via 'inputRef.setTextContent' (5s delay)"
		}), t[47] = ke, t[48] = Qe) : Qe = t[48];
		var Xe;
		t[49] !== ze || t[50] !== je || t[51] !== Ke || t[52] !== Qe ? (Xe = _.jsx("div", { children: _.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: "vertical",
			children: [
				ze,
				je,
				Ke,
				Qe
			]
		}) }), t[49] = ze, t[50] = je, t[51] = Ke, t[52] = Qe, t[53] = Xe) : Xe = t[53];
		var Ye;
		return t[54] !== oe || t[55] !== X || t[56] !== H || t[57] !== ce || t[58] !== A || t[59] !== $ || t[60] !== te || t[61] !== h || t[62] !== pe || t[63] !== B || t[64] !== u || t[65] !== le || t[66] !== m || t[67] !== We || t[68] !== Xe || t[69] !== U ? (Ye = _.jsxs("div", babelHelpers.extends({}, Ie, { children: [
			We,
			qe,
			Ue,
			Ve,
			u,
			B,
			U,
			m,
			h,
			A,
			$,
			ce,
			oe,
			le,
			pe,
			X,
			te,
			He,
			H,
			Ge,
			Xe
		] })), t[54] = oe, t[55] = X, t[56] = H, t[57] = ce, t[58] = A, t[59] = $, t[60] = te, t[61] = h, t[62] = pe, t[63] = B, t[64] = u, t[65] = le, t[66] = m, t[67] = We, t[68] = Xe, t[69] = U, t[70] = Ye) : Ye = t[70], Ye;
	}
	function R() {
		v("onMaxPasteExceeded triggered");
	}
	function L(t) {
		return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onTextPaste"]))), v("onTextPaste triggered (see console for output)"), !1;
	}
	function E(e) {
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onFiles"]))), v("onFiles triggered (see console for output)");
	}
	function k(e) {
		v("onEnter triggered"), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onEnter"])));
	}
	function I() {
		o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onFocus"])));
	}
	function T() {
		o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onBlur"])));
	}
	function D(e, t) {
		o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[rich-text-input] onChange"])));
	}
	function x() {
		return $;
	}
	function $() {
		return v("Input is forced re-rendered.");
	}
	function P(e) {
		e < o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE && v("Using a font size smaller than " + o("WAWebRichTextInputContentEditable.react").MIN_FONT_SIZE + " is not supported. This is for testing purpose only.");
	}
	function N() {
		var e = w(), t = e.formatCheckBoxes, n = e.formatOptions, o = h("\n*Text formats*\n\n*bold* _italic_ ~strikethrough~ ```code```\n\nNested formats\n_~*nested*~_\n~crossed *bold* _italic_~\n*bold ~crossed~*\n_italic ~crossed~ *bold*_\n\nEmojis\n❤️💚\n\n\n*Code Block*\n\n```\nconst enabled = true;\n*bold* _italic_ ~strikethrough~\n`inline code`\n> Quoted message\n```\n\n\n*Bulleted List*\n\n* Item with plaintext\n* Item with emojis ❤️💚\n* *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n* ```Entire item inside a code block```\n\n* Item before\n* Item ends with code block ```\n* Item 1 inside code block\n* Item 2 inside code block```\n* Item after\n\n* Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Hyphen List*\n\n- Item with plaintext\n- Item with emojis ❤️💚\n- *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n- ```Entire item inside a code block```\n\n- Item before\n- Item ends with code block ```\n- Item 1 inside code block\n- Item 2 inside code block```\n- Item after\n\n- Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Numbered List*\n\n1. Item with plaintext\n2. Item with emojis ❤️💚\n3. Item with link https://whatsapp.com/\n4. *Item* with nested formats _italic_ _~*nested*~_ `inline code` ```block code```\n5. ```Entire item inside a code block```\n15. Item starting with a non-sequential number\n\n1. Item before\n2. Item ends with code block ```\n3. Item 1 inside code block\n4. Item 2 inside code block```\n5. Item after\n\n1. Item ends with multiline block ```code\ncode\ncode\n```\n\n\n*Inline Code*\n\nWhat is `const var = '123'`?\nExplain `const name = \"world\"; const fun = () => { console.log('Hello'); }`\n\n\n*Block Quote*\n\n> Quoted message 1\n> *bold* _italic_ ~strikethrough~ `inline code` ```block code```\n> Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog word\n> Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna. Lorem ipsum dolor sit elit, sed do tempor ut labore et dolore magna.\n\n> Quote ends with code block ```code\n```\n  ");
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
	N.displayName = N.name + " [from " + i.id + "]";
	var M = {
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
				return _.jsx(N, {});
			},
			templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
		}]
	};
	function w() {
		var e, t = o("react-compiler-runtime").c(17), n = (e = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0), r = n[0], a = n[1], i = e.useCheckBox("Enable numbered list", !0), l = i[0], s = i[1], u = e.useCheckBox("Enable inline code", !0), c = u[0], d = u[1], m = e.useCheckBox("Enable block quote", !0), p = m[0], f = m[1], g = e.useCheckBox("Enable text format shortcuts", !0), h = g[0], y = g[1], C = e.useCheckBox("Enable floating toolbar", !0), b = C[0], v = C[1], S;
		t[0] !== p || t[1] !== r || t[2] !== b || t[3] !== c || t[4] !== l || t[5] !== h ? (S = {
			bulletPointsEnabled: r,
			numberedListEnabled: l,
			inlineCodeEnabled: c,
			blockQuoteEnabled: p,
			textFormatShortcutsEnabled: h,
			floatingToolbarEnabled: b
		}, t[0] = p, t[1] = r, t[2] = b, t[3] = c, t[4] = l, t[5] = h, t[6] = S) : S = t[6];
		var R;
		t[7] !== f || t[8] !== a || t[9] !== v || t[10] !== d || t[11] !== s || t[12] !== y ? (R = _.jsxs(_.Fragment, { children: [
			a,
			s,
			d,
			f,
			y,
			v
		] }), t[7] = f, t[8] = a, t[9] = v, t[10] = d, t[11] = s, t[12] = y, t[13] = R) : R = t[13];
		var L;
		return t[14] !== S || t[15] !== R ? (L = {
			formatOptions: S,
			formatCheckBoxes: R
		}, t[14] = S, t[15] = R, t[16] = L) : L = t[16], L;
	}
	l.default = M;
}), 98);
