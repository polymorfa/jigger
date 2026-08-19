__d("WAWebMessageEditComposer.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebComposeBoxUtils",
	"WAWebComposeConstants",
	"WAWebDropdown.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiPanel.react",
	"WAWebEmojiPickerPlugin",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMentionPickerPlugin",
	"WAWebMessageEditLinkPreviewPanel.react",
	"WAWebMessageEditUtils",
	"WAWebMsgGetters",
	"WAWebMsgMentionMap",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputConst",
	"WAWebRichTextInputPlugins.react",
	"WAWebSpoilerGating",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebWebIcCheckIcon.react",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcMood.react",
	"escapeRegex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		composer: {
			position: "x1n2onr6",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		composerRefreshed: {
			alignItems: "xuk3077",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "x14e42zd",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			$$css: !0
		},
		inputContainer: {
			paddingTop: "x96k8nx",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xdvlbce",
			paddingInlineStart: "x1g0dm76",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			marginInlineEnd: "xpwdb9g",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		inputContainerRefreshed: {
			marginInlineEnd: "x14z9mp",
			paddingTop: "x889kno",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		input: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		emojiButton: {
			marginInlineStart: "x13fj5qh",
			color: "xhslqc4",
			cursor: "x1ypdohk",
			alignSelf: "xqcrz7y",
			$$css: !0
		},
		emojiButtonRefreshed: {
			marginTop: "x1380le5",
			marginInlineEnd: "xqf2s3x",
			marginBottom: "xefnzgg",
			marginInlineStart: "x150mmf0",
			alignSelf: "xpvyfi4",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		}
	}, p = 8;
	function _(t) {
		var n = o("react-compiler-runtime").c(18), a = t.onEmoji, i = t.onFocusNext, l = t.onFocusPrev, u = t.xstyle, m = d(null), p = m[0], _ = m[1], f;
		n[0] !== a || n[1] !== i || n[2] !== l ? (f = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = c.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: a,
				onFocusNext: i,
				onFocusPrev: l
			});
			_({
				menu: e,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker,
				anchor: t.target
			});
		}, n[0] = a, n[1] = i, n[2] = l, n[3] = f) : f = n[3];
		var g = f, h;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			_(null);
		}, n[4] = h) : h = n[4];
		var y = h, C = r("useWAWebStaticButtonA11y")(g), b = C[0], v = C[1], S;
		n[5] !== u ? (S = (e || (e = r("stylex")))(u), n[5] = u, n[6] = S) : S = n[6];
		var R;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[7] = R) : R = n[7];
		var L;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(r("WDSIconIcMood.react"), {}), n[8] = L) : L = n[8];
		var E;
		n[9] !== v || n[10] !== b || n[11] !== S ? (E = c.jsx("div", babelHelpers.extends({
			ref: b,
			className: S,
			title: R
		}, v, { children: L })), n[9] = v, n[10] = b, n[11] = S, n[12] = E) : E = n[12];
		var k = E, I = null;
		if (p) {
			var T;
			n[13] !== p ? (T = c.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "EmojiPicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: y,
				children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: p })
			}), n[13] = p, n[14] = T) : T = n[14], I = T;
		}
		var D;
		return n[15] !== k || n[16] !== I ? (D = c.jsxs(c.Fragment, { children: [k, I] }), n[15] = k, n[16] = I, n[17] = D) : D = n[17], D;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(4), n = e.disabled, a = e.onClick, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		return t[1] !== n || t[2] !== a ? (l = c.jsx(r("WDSButton.react"), {
			testid: "edit-message-confirm-button",
			onPress: a,
			Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
			disabled: n,
			variant: "filled",
			size: "medium",
			"aria-label": i
		}), t[1] = n, t[2] = a, t[3] = l) : l = t[3], l;
	}
	function g(e) {
		var t, n, a = o("react-compiler-runtime").c(64), i = e.disableConfirmButton, l = e.enableMentions, s = e.enableTextFormatting, u = e.initialLinkPreview, g = e.initialText, y = e.maxLength, C = e.msg, b = e.onConfirm, v = e.onInputChange, S = e.onLinkPreviewChange, R = e.placeholderOverride, L = l === void 0 ? !0 : l, E = s === void 0 ? !0 : s, k;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (k = [o("WAWebFrontendMsgGetters").getText, o("WAWebMsgGetters").getCaption], a[0] = k) : k = a[0];
		var I = o("useWAWebMsgValues").useMsgValues(C.id, k), T = I[0], D = I[1], x;
		a[1] !== C ? (x = o("WAWebFrontendMsgGetters").getChat(C.unsafe()), a[1] = C, a[2] = x) : x = a[2];
		var $ = x, P = (t = (n = g != null ? g : T) != null ? n : D) != null ? t : "", N = d(P), M = N[0], w = N[1], A = d(), F = A[0], O = A[1], B, W;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (B = r("WAWebChatPreferenceCollection").getDefault(), W = [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		], a[3] = B, a[4] = W) : (B = a[3], W = a[4]);
		var q = o("useWAWebModelValues").useModelValues(B, W), U;
		a[5] !== F ? (U = function(t) {
			F && (F.focus(), F.replaceSelection(t));
		}, a[5] = F, a[6] = U) : U = a[6];
		var V = U, H;
		a[7] !== F ? (H = function() {
			F && F.focus();
		}, a[7] = F, a[8] = H) : H = a[8];
		var G = H, z;
		a[9] !== v ? (z = function(t) {
			w(t.text), v(t);
		}, a[9] = v, a[10] = z) : z = a[10];
		var j = z, K, Q;
		a[11] !== C.type ? (Q = o("WAWebMessageEditUtils").getMsgEditType(C.type), a[11] = C.type, a[12] = Q) : Q = a[12];
		var X = Q;
		if (X === o("WAWebMessageEditUtils").MsgEditType.TextEdit) {
			var Y;
			a[13] !== $ || a[14] !== u || a[15] !== S || a[16] !== M ? (Y = c.jsx(r("WAWebMessageEditLinkPreviewPanel.react"), {
				chat: $,
				text: M,
				onChange: S,
				initialLinkPreview: u
			}), a[13] = $, a[14] = u, a[15] = S, a[16] = M, a[17] = Y) : Y = a[17], K = Y;
		}
		var J = X === o("WAWebMessageEditUtils").MsgEditType.CaptionEdit, Z;
		a[18] !== $ || a[19] !== J ? (Z = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
			chat: $,
			isEditingCaption: J
		}), a[18] = $, a[19] = J, a[20] = Z) : Z = a[20];
		var ee = Z, te = R != null ? R : ee, ne;
		a[21] !== g || a[22] !== C ? (ne = g != null ? g : h(C), a[21] = g, a[22] = C, a[23] = ne) : ne = a[23];
		var re = y != null ? y : o("WAWebComposeConstants").MAX_TXT_MSG_SIZE, oe = q.spellcheck, ae = !q.enterIsSend, ie = $.groupMetadata, le = q.transformTextEmoji, se;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (se = o("WAWebSpoilerGating").isSpoilerSenderEnabled(), a[24] = se) : se = a[24];
		var ue;
		a[25] !== $.groupMetadata || a[26] !== q.transformTextEmoji || a[27] !== E ? (ue = c.jsx(r("WAWebRichTextInputPlugins.react"), {
			groupMetadata: ie,
			transformTextEmoji: le,
			textFormatEnabled: E,
			spoilerEnabled: se,
			bulletPointsEnabled: E,
			numberedListEnabled: E,
			inlineCodeEnabled: E,
			blockQuoteEnabled: E,
			internLinksEnabled: E,
			phoneNumbersEnabled: E,
			linksEnabled: E,
			textFormatShortcutsEnabled: E,
			floatingToolbarEnabled: E
		}), a[25] = $.groupMetadata, a[26] = q.transformTextEmoji, a[27] = E, a[28] = ue) : ue = a[28];
		var ce;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (ce = c.jsx(r("WAWebEmojiPickerPlugin"), {}), a[29] = ce) : ce = a[29];
		var de;
		a[30] !== $ || a[31] !== L ? (de = L ? c.jsx(r("WAWebMentionPickerPlugin"), {
			chat: $,
			elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled($),
			source: "message_edit"
		}) : null, a[30] = $, a[31] = L, a[32] = de) : de = a[32];
		var me;
		a[33] !== q.spellcheck || a[34] !== j || a[35] !== b || a[36] !== te || a[37] !== ne || a[38] !== re || a[39] !== ae || a[40] !== ue || a[41] !== de ? (me = c.jsxs(r("WAWebRichTextInput.react"), {
			testid: "edit-message-composer",
			ref: O,
			initialText: ne,
			xstyle: m.input,
			onChange: j,
			onEnter: b,
			placeholder: te,
			title: te,
			maxLength: re,
			maxVisibleLines: p,
			multiline: !0,
			focusOnMount: !0,
			spellCheck: oe,
			enterIsNewLine: ae,
			children: [
				ue,
				ce,
				de
			]
		}), a[33] = q.spellcheck, a[34] = j, a[35] = b, a[36] = te, a[37] = ne, a[38] = re, a[39] = ae, a[40] = ue, a[41] = de, a[42] = me) : me = a[42];
		var pe = me, _e;
		a[43] === Symbol.for("react.memo_cache_sentinel") ? (_e = [
			m.emojiButton,
			m.emojiButtonRefreshed,
			o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
		], a[43] = _e) : _e = a[43];
		var fe;
		a[44] !== V || a[45] !== G ? (fe = c.jsx(_, {
			xstyle: _e,
			onEmoji: V,
			onFocusNext: G,
			onFocusPrev: G
		}), a[44] = V, a[45] = G, a[46] = fe) : fe = a[46];
		var ge = fe, he;
		a[47] !== i || a[48] !== b ? (he = c.jsx(f, {
			onClick: b,
			disabled: i
		}), a[47] = i, a[48] = b, a[49] = he) : he = a[49];
		var ye = he, Ce;
		a[50] === Symbol.for("react.memo_cache_sentinel") ? (Ce = { className: "x1n2onr6 x1c4vz4f x2lah0s" }, a[50] = Ce) : Ce = a[50];
		var be, ve, Se;
		a[51] === Symbol.for("react.memo_cache_sentinel") ? (be = [
			0,
			20,
			20,
			20
		], ve = [
			2,
			0,
			8,
			0
		], Se = [m.composer, m.composerRefreshed], a[51] = be, a[52] = ve, a[53] = Se) : (be = a[51], ve = a[52], Se = a[53]);
		var Re;
		a[54] === Symbol.for("react.memo_cache_sentinel") ? (Re = [m.inputContainer, m.inputContainerRefreshed], a[54] = Re) : Re = a[54];
		var Le;
		a[55] !== pe ? (Le = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: Re,
			children: pe
		}), a[55] = pe, a[56] = Le) : Le = a[56];
		var Ee;
		a[57] !== ye || a[58] !== ge || a[59] !== Le ? (Ee = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			alignSelf: "stretch",
			justify: "center",
			columnGap: 8,
			margin: be,
			padding: ve,
			xstyle: Se,
			children: [
				Le,
				ge,
				ye
			]
		}), a[57] = ye, a[58] = ge, a[59] = Le, a[60] = Ee) : Ee = a[60];
		var ke;
		return a[61] !== K || a[62] !== Ee ? (ke = c.jsxs("div", babelHelpers.extends({}, Ce, { children: [
			K,
			null,
			Ee
		] })), a[61] = K, a[62] = Ee, a[63] = ke) : ke = a[63], ke;
	}
	function h(e) {
		var t, n, a = (t = (n = o("WAWebFrontendMsgGetters").getText(e)) != null ? n : o("WAWebMsgGetters").getCaption(e)) != null ? t : "", i = o("WAWebMsgMentionMap").calculateMsgMentionMap(e), l = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e);
		if (i) {
			var s = new RegExp(Object.keys(i).map(function(e) {
				return r("escapeRegex")(e);
			}).join("|"), "g");
			a = a.replace(s, function(e) {
				var t = i[e].id.toString();
				return "" + o("WAWebRichTextInputConst").ZWS + t + o("WAWebRichTextInputConst").ZWS;
			});
		}
		if (l) {
			var u = new RegExp(Object.keys(l).map(function(e) {
				return r("escapeRegex")(e);
			}).join("|"), "g");
			a = a.replace(u, function(e) {
				return "" + o("WAWebRichTextInputConst").ZWS + e.slice(1) + o("WAWebRichTextInputConst").ZWS;
			});
		}
		return a;
	}
	l.EmojiButton = _, l.MessageEditComposer = g;
}), 226);
