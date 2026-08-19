__d("WAWebLinkMsg.react", [
	"WAWebBizSuspiciousLabel.react",
	"WAWebDisplayType",
	"WAWebEmojiText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendMsgGetters",
	"WAWebGalleryMsg.react",
	"WAWebL10N",
	"WAWebMediaLinkPreview.react",
	"WAWebMessageAuthor.react",
	"WAWebMessageCheckbox.react",
	"WAWebMessageContainer.react",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgModelPropUtils",
	"WAWebMsgPhoneNumbers",
	"WAWebVelocityTransitionGroup",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebListener",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = { paddingInlineStart30: {
		paddingInlineStart: "x162tt16",
		$$css: !0
	} }, m = { msg: {
		position: "x1n2onr6",
		display: "x78zum5",
		maxWidth: "x193iq5w",
		$$css: !0
	} };
	function p(t) {
		var n, a, i = t.displayAuthor, l = t.link, s = t.msg, p = t.onClickMsg, _ = t.onMessageSelect, f = t.selectedMessages, g = t.testid, h = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(n = o("WAWebMsgGetters")).getBody,
			n.getCaption,
			(a = o("WAWebFrontendMsgGetters")).getDir,
			n.getId,
			n.getIsSentByMe,
			a.getMediaData,
			n.getType,
			a.getRtl,
			a.getSenderObj,
			n.getStar,
			a.getAsRevoked,
			n.getIsKept
		]), y = h[0], C = h[1], b = h[2], v = h[3], S = h[4], R = h[5], L = h[6], E = h[7], k = h[8], I = h[9], T = h[10], D = h[11], x = c(!1), $ = x[0], P = x[1], N = c(function() {
			return f.isSelected(s.unsafe());
		}), M = N[0], w = N[1], A = function(t) {
			M !== t && w(t);
		};
		o("useWAWebListener").useListener(f, v.toString(), A);
		var F = function() {
			$ || P(!0);
		}, O = function() {
			$ || P(!0);
		}, B = function() {
			$ && P(!1);
		}, W = function() {
			p(s.unsafe(), !M);
		}, q = function(t) {
			t && t.stopPropagation(), _(s.unsafe(), !M, t);
		}, U = t.selectable === !0 || $ ? u.jsx(r("WAWebMessageCheckbox.react"), {
			checked: M,
			onClick: q,
			msgTheme: "gallery"
		}) : null, V = !0, H = o("WAWebFormatConfigurationConversation").Conversation({
			mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(s),
			groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(s),
			links: o("WAWebMsgLinks").getLinksFromMsg(s.unsafe()),
			phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(s.unsafe()),
			selectable: V,
			trusted: o("WAWebMsgModelPropUtils").isTrusted(s.unsafe()),
			fromMe: v.fromMe,
			fromChatWid: v.remote,
			parseLists: !0,
			parseQuotes: !0,
			parseInlineCode: !0
		}), G = y && y.includes(l.url) ? y : C, z = o("WAWebMsgLinks").getSuspiciousLinks(s.unsafe()).length > 0, j = i ? u.jsx("div", babelHelpers.extends({}, {
			0: { className: "xyqdw3p xs9asl8 x25sj25 xyri2b" },
			1: { className: "xyqdw3p x25sj25 xyri2b x18d9i69" }
		}[!!z << 0], { children: u.jsx(r("WAWebMessageAuthor.react"), {
			msg: s,
			contact: k
		}) })) : null;
		return u.jsx(r("WAWebGalleryMsg.react"), {
			hover: $,
			onClick: W,
			onMouseEnter: $ ? null : O,
			onMouseOver: $ ? null : F,
			onMouseLeave: $ ? B : null,
			testid: g,
			children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				m.msg,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd12,
				d.paddingInlineStart30
			]), {
				"data-testid": "link-msg",
				children: [u.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "delay-leave",
					children: U
				}), u.jsx(r("WAWebMessageContainer.react"), {
					isSentByMe: S,
					children: u.jsxs("div", {
						className: "x9f619 xyqdw3p xwib8y2 x1djpfga x1im30kd",
						children: [
							j,
							u.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
								link: l,
								displayType: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY
							}),
							u.jsx(r("WAWebMediaLinkPreview.react"), {
								title: l.url,
								isSentByMe: S,
								matchedText: l.domain,
								displayType: o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
								star: I,
								kept: D,
								isLoading: !1
							}),
							u.jsx(o("WAWebEmojiText.react").EmojiText, {
								text: G,
								selectable: V,
								className: "x9f619 x1rg5ohu x193iq5w x123j3cw x18d9i69 x25sj25 x11lfxj5 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
								dirMismatch: E !== r("WAWebL10N").isRTL(),
								direction: b,
								formatters: H
							})
						]
					})
				})]
			}))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
