__d("WAWebBizBroadcastMessageInputSection.react", [
	"fbt",
	"WAWebBizBroadcastGenAIEntryPoint.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebDropdown.react",
	"WAWebEmojiPanel.react",
	"WAWebFlex.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcMood.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = { messageInputContainer: {
		alignItems: "x6s0dn4",
		backgroundColor: "x1280gxy",
		borderTopColor: "xx42vgk x1iho30r",
		borderInlineEndColor: "xbogo7e xwdt1gy",
		borderBottomColor: "x120ee7l x1vtqnfi",
		borderInlineStartColor: "x1vb5itz xhu2vye",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopWidth: "x178xt8z",
		borderInlineEndWidth: "x1lun4ml",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		rowGap: "x1qvou4u",
		columnGap: "x1s70e7g",
		outlineColor: "x1uczgqu x850hsn",
		outlineStyle: "xaatb59",
		outlineWidth: "x1k57tk5 xoxpeok",
		paddingTop: "x1tiyuxx",
		paddingBottom: "x1nbhmlj",
		paddingInlineStart: "x12w63v0",
		paddingInlineEnd: "x1nzty39",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(36), n = e.message, a = e.onGenAIPress, i = e.onMessageChange, l = e.richTextInputRef, c = m(null), d = m(null), f = p(null), g = f[0], h = f[1], y = p(!1), C = y[0], b = y[1], v = r("useWAWebIsKeyboardUser")(), S = v.isKeyboardUser, R;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			b(!0);
		}, t[0] = R) : R = t[0];
		var L = R, E;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			d.current != null && t.relatedTarget instanceof Node && d.current.contains(t.relatedTarget) || b(!1);
		}, t[1] = E) : E = t[1];
		var k = E, I;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			h(null), (d.current == null || !d.current.contains(document.activeElement)) && b(!1);
		}, t[2] = I) : I = t[2];
		var T = I, D;
		t[3] !== S || t[4] !== n || t[5] !== i || t[6] !== l ? (D = function(t) {
			var e = l.current;
			e != null ? (e.replaceSelection(t), e.focus()) : i(n + t), S && T();
		}, t[3] = S, t[4] = n, t[5] = i, t[6] = l, t[7] = D) : D = t[7];
		var x = D, $;
		t[8] !== x ? ($ = function(t) {
			t.preventDefault(), t.stopPropagation();
			var e = u.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: x,
				onFocusNext: T,
				onFocusPrev: T
			});
			h({
				anchor: t.target,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				menu: e,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker
			});
		}, t[8] = x, t[9] = $) : $ = t[9];
		var P = $, N;
		t[10] !== i ? (N = function(t) {
			var e = t.text.trim();
			i(e);
		}, t[10] = i, t[11] = N) : N = t[11];
		var M = N, w;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x6s0dn4 x78zum5 x1iyjqo2 x129bwdz x1trrmfo xu0aao5" }, t[12] = w) : w = t[12];
		var A;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (A = o("WAWebBizBroadcastsCreationStrings").getMessageTextFieldLabel(), t[13] = A) : A = t[13];
		var F;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("WAWebRichTextInputPlugins.react"), {
			textFormatEnabled: !0,
			textFormatShortcutsEnabled: !0,
			floatingToolbarEnabled: !0,
			bulletPointsEnabled: !0,
			numberedListEnabled: !0,
			inlineCodeEnabled: !0,
			blockQuoteEnabled: !0
		}), t[14] = F) : F = t[14];
		var O;
		t[15] !== M || t[16] !== n || t[17] !== l ? (O = u.jsx("div", babelHelpers.extends({}, w, { children: u.jsx(r("WAWebRichTextInput.react"), {
			ref: l,
			initialText: n,
			placeholder: A,
			multiline: !0,
			testid: "biz-broadcasts-message-input",
			onChange: M,
			onFocus: L,
			onBlur: k,
			children: F
		}) })), t[15] = M, t[16] = n, t[17] = l, t[18] = O) : O = t[18];
		var B;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x2lah0s" }, t[19] = B) : B = t[19];
		var W;
		t[20] !== C || t[21] !== a ? (W = a != null && u.jsx(r("WAWebBizBroadcastGenAIEntryPoint.react"), {
			isComposerFocused: C,
			onPress: a
		}), t[20] = C, t[21] = a, t[22] = W) : W = t[22];
		var q;
		t[23] !== W ? (q = u.jsx("div", babelHelpers.extends({}, B, { children: W })), t[23] = W, t[24] = q) : q = t[24];
		var U;
		t[25] !== g || t[26] !== P || t[27] !== C ? (U = (C || g != null) && u.jsx("div", {
			className: "x2lah0s",
			children: u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				size: "small",
				Icon: r("WDSIconIcMood.react"),
				onPress: P,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				testid: "biz-broadcast-creation-message-emoji-button"
			})
		}), t[25] = g, t[26] = P, t[27] = C, t[28] = U) : U = t[28];
		var V;
		t[29] !== g ? (V = g != null && u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "EmojiPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			ref: c,
			requestDismiss: T,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: g })
		}), t[29] = g, t[30] = V) : V = t[30];
		var H;
		return t[31] !== O || t[32] !== q || t[33] !== U || t[34] !== V ? (H = u.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: d,
			xstyle: _.messageInputContainer,
			children: [
				O,
				q,
				U,
				V
			]
		}), t[31] = O, t[32] = q, t[33] = U, t[34] = V, t[35] = H) : H = t[35], H;
	}
	l.default = f;
}), 226);
