__d("WAWebCommentComposeBox.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebCommentModalActions",
	"WAWebComposeBoxSendButton.react",
	"WAWebEmojiPickerPlugin",
	"WAWebMessageEditComposer.react",
	"WAWebNoop",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebSendCommentMessageAction",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingBlock9: {
			paddingTop: "x96k8nx",
			paddingBottom: "xdvlbce",
			$$css: !0
		},
		marginBlock5: {
			marginTop: "x1ok221b",
			marginBottom: "xu06os2",
			$$css: !0
		}
	}, p = {
		inputContainer: {
			boxSizing: "x9f619",
			flex: "x12lumcd",
			width: "x1qrby5j",
			minHeight: "xisnujt",
			fontSize: "x6prxxf",
			fontWeight: "x1fcty0u",
			lineHeight: "x1fc57z9",
			backgroundColor: "xk7ee7b",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			outline: "x1a2a7pz",
			willChange: "x13w7htt",
			display: "x78zum5",
			$$css: !0
		},
		sendButtonContainer: {
			width: "x100vrsf",
			minWidth: "x1fns5xo",
			$$css: !0
		},
		childPadding: {
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			minHeight: "x1wiwyrm",
			$$css: !0
		},
		emojiButton: {
			color: "xhslqc4",
			cursor: "x1ypdohk",
			alignSelf: "xqcrz7y",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(32), a = t.parent, i = d(!1), l = i[0], u = i[1], _ = d(), g = _[0], h = _[1], y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			var e = t.trim();
			u(e.length > 0);
		}, n[0] = y) : y = n[0];
		var C = y, b;
		n[1] !== g ? (b = function(t, n) {
			g == null || g.replaceSelection(t, n);
		}, n[1] = g, n[2] = b) : b = n[2];
		var v = b, S, R;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (S = r("WAWebChatPreferenceCollection").getDefault(), R = [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		], n[3] = S, n[4] = R) : (S = n[3], R = n[4]);
		var L = o("useWAWebModelValues").useModelValues(S, R), E;
		n[5] !== a || n[6] !== g ? (E = function() {
			if (g != null) {
				var e = g.getTextContent();
				if (e != null) {
					var t = e.trim();
					t.length > 0 && (o("WAWebSendCommentMessageAction").sendCommentMessage(a, t).finally(f), g.setTextContent(""), u(!1));
				}
			}
		}, n[5] = a, n[6] = g, n[7] = E) : E = n[7];
		var k = E, I, T;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x1n2onr6 xhtitgo x9f619 x78zum5 x1q0g3np xuk3077 xh8yej3 x122xwht xhjsbib x123j3cw xs9asl8 x1gx403c x1q3ajuy" }, T = { className: "x78zum5 x1isitws xuk3077" }, n[8] = I, n[9] = T) : (I = n[8], T = n[9]);
		var D;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (D = (e || (e = r("stylex"))).props(p.inputContainer, m.paddingBlock9, o("WDSPaddings.stylex").wdsPaddings.paddingHor12, m.marginBlock5, o("WDSMargins.stylex").wdsMargins.marginHor8), n[10] = D) : D = n[10];
		var x, $;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), x = function(t) {
			C(t.parsableText);
		}, n[11] = x, n[12] = $) : (x = n[11], $ = n[12]);
		var P = L.enterIsSend ? k : r("WAWebNoop"), N;
		n[13] !== L.transformTextEmoji ? (N = c.jsx(r("WAWebRichTextInputPlugins.react"), {
			transformTextEmoji: L.transformTextEmoji,
			textFormatEnabled: !0,
			bulletPointsEnabled: !0,
			numberedListEnabled: !0,
			inlineCodeEnabled: !0,
			blockQuoteEnabled: !0,
			phoneNumbersEnabled: !0,
			floatingToolbarEnabled: !0
		}), n[13] = L.transformTextEmoji, n[14] = N) : N = n[14];
		var M;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (M = c.jsx(r("WAWebEmojiPickerPlugin"), {}), n[15] = M) : M = n[15];
		var w;
		n[16] !== L.spellcheck || n[17] !== P || n[18] !== N ? (w = c.jsxs(r("WAWebRichTextInput.react"), {
			ref: h,
			placeholder: $,
			onChange: x,
			spellCheck: L.spellcheck,
			onEnter: P,
			multiline: !0,
			minVisibleLines: 1,
			maxVisibleLines: 5,
			children: [N, M]
		}), n[16] = L.spellcheck, n[17] = P, n[18] = N, n[19] = w) : w = n[19];
		var A;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (A = [p.emojiButton, o("WDSMargins.stylex").wdsMargins.marginStart8], n[20] = A) : A = n[20];
		var F;
		n[21] !== v ? (F = c.jsx(o("WAWebMessageEditComposer.react").EmojiButton, {
			xstyle: A,
			onEmoji: v
		}), n[21] = v, n[22] = F) : F = n[22];
		var O;
		n[23] !== w || n[24] !== F ? (O = c.jsxs("div", babelHelpers.extends({}, D, { children: [w, F] })), n[23] = w, n[24] = F, n[25] = O) : O = n[25];
		var B;
		n[26] !== k || n[27] !== l ? (B = l ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.sendButtonContainer, p.childPadding, m.paddingBlock5, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), { children: c.jsx(o("WAWebComposeBoxSendButton.react").SendButton, {
			supportsPtt: !1,
			onClickSend: k,
			hasText: l,
			recordingSession: null,
			onStartRecording: r("WAWebNoop")
		}) })) : null, n[26] = k, n[27] = l, n[28] = B) : B = n[28];
		var W;
		return n[29] !== O || n[30] !== B ? (W = c.jsx("div", babelHelpers.extends({}, I, { children: c.jsxs("div", babelHelpers.extends({}, T, { children: [
			null,
			O,
			B
		] })) })), n[29] = O, n[30] = B, n[31] = W) : W = n[31], W;
	}
	function f() {
		o("WAWebCommentModalActions").CommentModalActions.scrollReplyModalToBottom();
	}
	l.default = _;
}), 226);
