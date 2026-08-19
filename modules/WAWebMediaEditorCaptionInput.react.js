__d("WAWebMediaEditorCaptionInput.react", [
	"fbt",
	"WAUnicodeUtils",
	"WAWebAttachMediaViewOnceInChat.react",
	"WAWebChatPreferenceCollection",
	"WAWebClickable.react",
	"WAWebDropdown.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiPanel.react",
	"WAWebEmojiPickerPlugin",
	"WAWebFlex.react",
	"WAWebGroupType",
	"WAWebIcMoodIcon.react",
	"WAWebL10N",
	"WAWebMediaCaptionConstants",
	"WAWebMentionPickerPlugin",
	"WAWebMentionSuggestions.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebSendButtonWithCount.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcClose.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIsKeyboardUser",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		buttonContainer: {
			minHeight: "x1rj1pf4",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		inputButton: {
			marginInlineStart: "x13fj5qh",
			color: "xhslqc4",
			$$css: !0
		},
		secondaryButtonContainer: {
			marginInlineStart: "x13fj5qh",
			$$css: !0
		},
		viewOnceHidden: {
			visibility: "xlshs6z",
			$$css: !0
		},
		richTextInput: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1t1x2f9",
			minWidth: "xeuugli",
			marginTop: "x1k70j0n",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xzueoph",
			marginInlineStart: "x1lziwak",
			minHeight: "xisnujt",
			color: "x14ug900",
			wordWrap: "x1vvkbs",
			whiteSpace: "x126k92a",
			userSelect: "x1hx0egp",
			$$css: !0
		},
		richTextInputText: {
			fontSize: "x1lkfr7t",
			$$css: !0
		},
		placeholderTruncate: {
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function f(e) {
		var t, n, a = o("react-compiler-runtime").c(90), i = e.chat, l = e.expandedTextFormatsEnabled, c = e.initialText, f = e.onEnter, h = e.onSendButtonClick, y = e.sendButtonEnabled, C = e.setCaptionInputRef, b = e.setSendButtonRef, v = (t = e.maxCaptionLength) != null ? t : o("WAWebMediaCaptionConstants").MAX_CAPTION_LENGTH, S = p(c), R = S[0], L = S[1], E = m(null), k = m(null), I = p(null), T = I[0], D = I[1], x = r("useWAWebIsKeyboardUser")(), $ = x.isKeyboardUser, P;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			var e;
			(e = E.current) == null || e.focus();
		}, a[0] = P) : P = a[0];
		var N = P, M, w;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (M = r("WAWebChatPreferenceCollection").getDefault(), w = [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		], a[1] = M, a[2] = w) : (M = a[1], w = a[2]);
		var A = o("useWAWebModelValues").useModelValues(M, w), F, O;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (F = function() {
			N();
		}, O = [], a[3] = F, a[4] = O) : (F = a[3], O = a[4]), d(F, O);
		var B;
		a[5] !== C ? (B = function(t) {
			E.current = t, C(t);
		}, a[5] = C, a[6] = B) : B = a[6];
		var W = B, q;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (q = function(t) {
			var e;
			(e = E.current) == null || e.reset(), N();
		}, a[7] = q) : q = a[7];
		var U = q, V;
		a[8] !== $ ? (V = function() {
			D(null), $ && N();
		}, a[8] = $, a[9] = V) : V = a[9];
		var H = V, G;
		if (a[10] !== H || a[11] !== $) {
			var z = function(t) {
				var e = E.current;
				e && (e.focus(), e.replaceSelection(t)), $ && H();
			};
			G = function(t) {
				t.preventDefault(), t.stopPropagation();
				var e = u.jsx(r("WAWebEmojiPanel.react"), {
					onEmoji: z,
					onFocusNext: N,
					onFocusPrev: N
				});
				D({
					menu: e,
					dirY: o("WAWebDropdown.react").DirY.TOP,
					type: o("WAWebDropdown.react").MenuType.EmojiPicker,
					anchor: t.target
				}), N();
			}, a[10] = H, a[11] = $, a[12] = G;
		} else G = a[12];
		var j = G, K;
		a[13] !== e ? (K = function(n) {
			L(n.parsableText), e.onChange(n.parsableText);
		}, a[13] = e, a[14] = K) : K = a[14];
		var Q = K, X;
		a[15] !== f ? (X = function(t) {
			var e;
			(e = E.current) != null && e.isFocused() ? f(t) : f();
		}, a[15] = f, a[16] = X) : X = a[16];
		var Y = X, J = o("WAUnicodeUtils").numCodepoints(R || ""), Z = v - J < 50, ee;
		a[17] !== R ? (ee = R != null && R !== "" ? u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: _.inputButton,
			onClick: U,
			title: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSIconIcClose.react"), {})
		}) : null, a[17] = R, a[18] = ee) : ee = a[18];
		var te = ee, ne;
		a[19] !== Z || a[20] !== v || a[21] !== J ? (ne = Z && u.jsx("div", {
			className: "x13fj5qh x1f6kntn xhslqc4",
			children: r("WAWebL10N").n(v - J)
		}), a[19] = Z, a[20] = v, a[21] = J, a[22] = ne) : ne = a[22];
		var re = ne, oe = null;
		if (T) {
			var ae;
			a[23] !== T ? (ae = u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: T }), a[23] = T, a[24] = ae) : ae = a[24];
			var ie;
			a[25] !== H || a[26] !== ae ? (ie = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "EmojiPicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				ref: k,
				requestDismiss: H,
				children: ae
			}), a[25] = H, a[26] = ae, a[27] = ie) : ie = a[27], oe = ie;
		}
		var le;
		a[28] !== i || a[29] !== e.msgType || a[30] !== e.onToggleViewOnce || a[31] !== e.theme || a[32] !== e.viewOnce || a[33] !== e.viewOnceDisabled ? (le = e.theme !== "document" && !i.id.isStatus() ? u.jsx(r("WAWebAttachMediaViewOnceInChat.react"), {
			chat: i,
			containerXstyle: [_.secondaryButtonContainer, e.viewOnceDisabled && _.viewOnceHidden],
			disabled: e.viewOnceDisabled,
			isOn: !!e.viewOnce,
			mediaType: e.msgType,
			onChange: e.onToggleViewOnce
		}) : null, a[28] = i, a[29] = e.msgType, a[30] = e.onToggleViewOnce, a[31] = e.theme, a[32] = e.viewOnce, a[33] = e.viewOnceDisabled, a[34] = le) : le = a[34];
		var se = le, ue = e.chat.groupMetadata;
		((n = e.chat.groupMetadata) == null ? void 0 : n.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !o("WAWebMentionSuggestions.react").shouldEnableGroupMentions(ue) && (ue = null);
		var ce;
		if (a[35] !== e.placeholderText) {
			var de;
			ce = (de = e.placeholderText) != null ? de : s._(
				/*BTDS*/
				""
			), a[35] = e.placeholderText, a[36] = ce;
		} else ce = a[36];
		var me = ce, pe = e.onFiles, _e = e.multiline !== !1, fe = A.spellcheck, ge = !A.enterIsSend, he = l !== !1, ye = l !== !1, Ce = l !== !1, be = l !== !1, ve = e.internLinksEnabled !== !1, Se = e.phoneNumbersEnabled !== !1, Re;
		a[37] !== A.transformTextEmoji || a[38] !== ue || a[39] !== he || a[40] !== ye || a[41] !== Ce || a[42] !== be || a[43] !== ve || a[44] !== Se ? (Re = u.jsx(r("WAWebRichTextInputPlugins.react"), {
			groupMetadata: ue,
			transformTextEmoji: A.transformTextEmoji,
			textFormatEnabled: !0,
			bulletPointsEnabled: he,
			numberedListEnabled: ye,
			inlineCodeEnabled: Ce,
			blockQuoteEnabled: be,
			internLinksEnabled: ve,
			phoneNumbersEnabled: Se,
			linksEnabled: !0,
			floatingToolbarEnabled: !0,
			textFormatShortcutsEnabled: !0
		}), a[37] = A.transformTextEmoji, a[38] = ue, a[39] = he, a[40] = ye, a[41] = Ce, a[42] = be, a[43] = ve, a[44] = Se, a[45] = Re) : Re = a[45];
		var Le;
		a[46] === Symbol.for("react.memo_cache_sentinel") ? (Le = u.jsx(r("WAWebEmojiPickerPlugin"), {}), a[46] = Le) : Le = a[46];
		var Ee = e.chat, ke;
		a[47] !== i ? (ke = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(i), a[47] = i, a[48] = ke) : ke = a[48];
		var Ie;
		a[49] !== e.chat || a[50] !== ke ? (Ie = u.jsx(r("WAWebMentionPickerPlugin"), {
			chat: Ee,
			elevatedPushNamesEnabled: ke,
			source: "media-editor-caption"
		}), a[49] = e.chat, a[50] = ke, a[51] = Ie) : Ie = a[51];
		var Te;
		a[52] !== A.spellcheck || a[53] !== Q || a[54] !== Y || a[55] !== c || a[56] !== v || a[57] !== me || a[58] !== e.onFiles || a[59] !== W || a[60] !== _e || a[61] !== ge || a[62] !== Re || a[63] !== Ie ? (Te = u.jsxs(r("WAWebRichTextInput.react"), {
			ref: W,
			testid: "media-caption-input-container",
			initialText: c,
			placeholder: me,
			ariaLabel: me,
			placeholderTextXStyle: _.placeholderTruncate,
			onChange: Q,
			onEnter: Y,
			onFiles: pe,
			maxLength: v,
			maxVisibleLines: 5,
			multiline: _e,
			spellCheck: fe,
			enterIsNewLine: ge,
			focusOnMount: !0,
			xstyle: _.richTextInput,
			textXstyle: _.richTextInputText,
			children: [
				Re,
				Le,
				Ie
			]
		}), a[52] = A.spellcheck, a[53] = Q, a[54] = Y, a[55] = c, a[56] = v, a[57] = me, a[58] = e.onFiles, a[59] = W, a[60] = _e, a[61] = ge, a[62] = Re, a[63] = Ie, a[64] = Te) : Te = a[64];
		var De = Te, xe;
		if (a[65] !== e.containerClassName) {
			var $e;
			xe = ($e = e.containerClassName) != null ? $e : "xh8yej3 xic84rp xdj266r x15d6yb6 xat24cr x798i94", a[65] = e.containerClassName, a[66] = xe;
		} else xe = a[66];
		var Pe;
		a[67] === Symbol.for("react.memo_cache_sentinel") ? (Pe = "x9f619 xh8yej3 x1ba4aug x1tiyuxx xvtqlqk x1nbhmlj xdx6fka x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a", a[67] = Pe) : Pe = a[67];
		var Ne;
		a[68] !== e.modeSelectorElement ? (Ne = e.modeSelectorElement != null ? u.jsx("div", {
			className: "x1xegmmw x2lah0s xamitd3",
			children: e.modeSelectorElement
		}) : null, a[68] = e.modeSelectorElement, a[69] = Ne) : Ne = a[69];
		var Me;
		a[70] !== j ? (Me = u.jsx(g, { onClick: j }), a[70] = j, a[71] = Me) : Me = a[71];
		var we;
		a[72] !== te || a[73] !== re || a[74] !== Me ? (we = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: _.buttonContainer,
			align: "center",
			children: [
				re,
				te,
				Me
			]
		}), a[72] = te, a[73] = re, a[74] = Me, a[75] = we) : we = a[75];
		var Ae;
		a[76] !== De || a[77] !== Ne || a[78] !== we ? (Ae = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			className: Pe,
			children: [
				Ne,
				De,
				we
			]
		}), a[76] = De, a[77] = Ne, a[78] = we, a[79] = Ae) : Ae = a[79];
		var Fe;
		a[80] !== h || a[81] !== y || a[82] !== b ? (Fe = y === !0 ? u.jsx("div", {
			className: "x10l6tqk xdg88n9",
			children: u.jsx(r("WAWebSendButtonWithCount.react"), {
				ref: b,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				large: !0,
				count: null,
				onClick: h,
				disabled: !1
			})
		}) : null, a[80] = h, a[81] = y, a[82] = b, a[83] = Fe) : Fe = a[83];
		var Oe;
		return a[84] !== xe || a[85] !== Ae || a[86] !== Fe || a[87] !== oe || a[88] !== se ? (Oe = u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: xe,
			align: "center",
			justify: "center",
			children: [
				Ae,
				se,
				oe,
				Fe
			]
		}), a[84] = xe, a[85] = Ae, a[86] = Fe, a[87] = oe, a[88] = se, a[89] = Oe) : Oe = a[89], Oe;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onClick, r, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), a = u.jsx(o("WAWebIcMoodIcon.react").IcMoodIcon, {}), t[0] = r, t[1] = a) : (r = t[0], a = t[1]);
		var i;
		return t[2] !== n ? (i = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: n,
			xstyle: _.inputButton,
			title: r,
			children: a
		}), t[2] = n, t[3] = i) : i = t[3], i;
	}
	l.default = f;
}), 226);
