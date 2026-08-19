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
		var n = t.parent, a = d(!1), i = a[0], l = a[1], u = d(), _ = u[0], f = u[1], g = function(t) {
			var e = t.trim();
			l(e.length > 0);
		}, h = function(t, n) {
			_ == null || _.replaceSelection(t, n);
		}, y = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]), C = function() {
			if (_ != null) {
				var e = _.getTextContent();
				if (e != null) {
					var t = e.trim();
					t.length > 0 && (o("WAWebSendCommentMessageAction").sendCommentMessage(n, t).finally(function() {
						o("WAWebCommentModalActions").CommentModalActions.scrollReplyModalToBottom();
					}), _.setTextContent(""), l(!1));
				}
			}
		}, b = null;
		return c.jsx("div", {
			className: "x1n2onr6 xhtitgo x9f619 x78zum5 x1q0g3np xuk3077 xh8yej3 x122xwht xhjsbib x123j3cw xs9asl8 x1gx403c x1q3ajuy",
			children: c.jsxs("div", {
				className: "x78zum5 x1isitws xuk3077",
				children: [
					b,
					c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.inputContainer, m.paddingBlock9, o("WDSPaddings.stylex").wdsPaddings.paddingHor12, m.marginBlock5, o("WDSMargins.stylex").wdsMargins.marginHor8), { children: [c.jsxs(r("WAWebRichTextInput.react"), {
						ref: f,
						placeholder: s._(
							/*BTDS*/
							""
						),
						onChange: function(t) {
							g(t.parsableText);
						},
						spellCheck: y.spellcheck,
						onEnter: y.enterIsSend ? C : r("WAWebNoop"),
						multiline: !0,
						minVisibleLines: 1,
						maxVisibleLines: 5,
						children: [c.jsx(r("WAWebRichTextInputPlugins.react"), {
							transformTextEmoji: y.transformTextEmoji,
							textFormatEnabled: !0,
							bulletPointsEnabled: !0,
							numberedListEnabled: !0,
							inlineCodeEnabled: !0,
							blockQuoteEnabled: !0,
							phoneNumbersEnabled: !0,
							floatingToolbarEnabled: !0
						}), c.jsx(r("WAWebEmojiPickerPlugin"), {})]
					}), c.jsx(o("WAWebMessageEditComposer.react").EmojiButton, {
						xstyle: [p.emojiButton, o("WDSMargins.stylex").wdsMargins.marginStart8],
						onEmoji: h
					})] })),
					i ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.sendButtonContainer, p.childPadding, m.paddingBlock5, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), { children: c.jsx(o("WAWebComposeBoxSendButton.react").SendButton, {
						supportsPtt: !1,
						onClickSend: C,
						hasText: i,
						recordingSession: null,
						onStartRecording: r("WAWebNoop")
					}) })) : null
				]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
