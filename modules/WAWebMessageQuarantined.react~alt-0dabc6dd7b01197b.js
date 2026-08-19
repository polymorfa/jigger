__d("WAWebMessageQuarantined.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebDocumentFileIcon",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessageBubbleHiddenText.react",
	"WAWebMessageContentBox.react",
	"WAWebMessageDeeperContainer.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebQuarantinedAttachmentInterstitial.react",
	"WDSFontTokenStyles",
	"WDSText.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		attachmentContainer: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			position: "x1n2onr6",
			$$css: !0
		},
		attachmentContainerNoText: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		iconContainer: {
			flexShrink: "x2lah0s",
			width: "x23j0i4",
			height: "x1gnnpzl",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		textContainer: {
			flexGrow: "x1iyjqo2",
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.displayAuthor, n = e.displayType, a = e.msg, i = o("useWAWebMsgValues").useMsgValues(a.id, [
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getQuarantineExtractedText,
			o("WAWebFrontendMsgGetters").getSenderObj
		]), l = i[0], d = i[1], m = i[2], p = s._(
			/*BTDS*/
			""
		), _ = d != null && d.length > 0, f = function() {
			o("WAWebQuarantinedAttachmentInterstitial.react").openQuarantinedAttachmentInterstitial(a.id);
		}, g = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: f,
			className: "x1198e8h x1lxpwgx xzueoph xw01apr",
			children: u.jsx(r("WAWebMessageDeeperContainer.react"), {
				xstyle: [c.attachmentContainer, !_ && c.attachmentContainerNoText],
				outgoingMsg: l,
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: c.iconContainer,
						children: u.jsx(r("WAWebDocumentFileIcon"), {
							width: 26,
							mimeType: "",
							ext: ""
						})
					}), u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: c.textContainer,
						justify: "center",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "contentDefault",
							children: p
						})
					})]
				})
			})
		});
		return u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: a,
			displayType: n,
			displayAuthor: t,
			hideMeta: !1,
			theme: "landscape",
			useFixedWidth: a.isDynamicReplyButtonsMsg,
			children: u.jsx(r("WAWebMessageBubbleHiddenText.react"), {
				contact: m,
				msg: a.unsafe(),
				children: u.jsxs(r("WAWebMessageContentBox.react"), {
					displayType: n,
					msg: a,
					showAuthor: t,
					trusted: !1,
					children: [g, u.jsx(r("WAWebMessageSpacerText.react"), {
						msg: a.unsafe(),
						spacer: _,
						children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
							text: _ ? d : null,
							xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
							direction: "auto",
							breakWord: !0
						})
					})]
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
