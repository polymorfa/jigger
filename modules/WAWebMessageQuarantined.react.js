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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(40), n = e.displayAuthor, a = e.displayType, i = e.msg, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getQuarantineExtractedText,
			o("WAWebFrontendMsgGetters").getSenderObj
		], t[0] = l) : l = t[0];
		var d = o("useWAWebMsgValues").useMsgValues(i.id, l), m = d[0], p = d[1], _ = d[2], f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[1] = f) : f = t[1];
		var g = f, h = p != null && p.length > 0, y;
		t[2] !== i.id ? (y = function() {
			o("WAWebQuarantinedAttachmentInterstitial.react").openQuarantinedAttachmentInterstitial(i.id);
		}, t[2] = i.id, t[3] = y) : y = t[3];
		var C = y, b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = "x1198e8h x1lxpwgx xzueoph xw01apr", t[4] = b) : b = t[4];
		var v = !h && c.attachmentContainerNoText, S;
		t[5] !== v ? (S = [c.attachmentContainer, v], t[5] = v, t[6] = S) : S = t[6];
		var R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: c.iconContainer,
			children: u.jsx(r("WAWebDocumentFileIcon"), {
				width: 26,
				mimeType: "",
				ext: ""
			})
		}), t[7] = R) : R = t[7];
		var L;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [R, u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.textContainer,
				justify: "center",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: g
				})
			})]
		}), t[8] = L) : L = t[8];
		var E;
		t[9] !== m || t[10] !== S ? (E = u.jsx(r("WAWebMessageDeeperContainer.react"), {
			xstyle: S,
			outgoingMsg: m,
			children: L
		}), t[9] = m, t[10] = S, t[11] = E) : E = t[11];
		var k;
		t[12] !== C || t[13] !== E ? (k = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: C,
			className: b,
			children: E
		}), t[12] = C, t[13] = E, t[14] = k) : k = t[14];
		var I = k, T = i.isDynamicReplyButtonsMsg, D;
		t[15] !== i ? (D = i.unsafe(), t[15] = i, t[16] = D) : D = t[16];
		var x;
		t[17] !== i ? (x = i.unsafe(), t[17] = i, t[18] = x) : x = t[18];
		var $ = h ? p : null, P;
		t[19] !== $ ? (P = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: $,
			xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
			direction: "auto",
			breakWord: !0
		}), t[19] = $, t[20] = P) : P = t[20];
		var N;
		t[21] !== h || t[22] !== x || t[23] !== P ? (N = u.jsx(r("WAWebMessageSpacerText.react"), {
			msg: x,
			spacer: h,
			children: P
		}), t[21] = h, t[22] = x, t[23] = P, t[24] = N) : N = t[24];
		var M;
		t[25] !== I || t[26] !== n || t[27] !== a || t[28] !== i || t[29] !== N ? (M = u.jsxs(r("WAWebMessageContentBox.react"), {
			displayType: a,
			msg: i,
			showAuthor: n,
			trusted: !1,
			children: [I, N]
		}), t[25] = I, t[26] = n, t[27] = a, t[28] = i, t[29] = N, t[30] = M) : M = t[30];
		var w;
		t[31] !== _ || t[32] !== D || t[33] !== M ? (w = u.jsx(r("WAWebMessageBubbleHiddenText.react"), {
			contact: _,
			msg: D,
			children: M
		}), t[31] = _, t[32] = D, t[33] = M, t[34] = w) : w = t[34];
		var A;
		return t[35] !== n || t[36] !== a || t[37] !== i || t[38] !== w ? (A = u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayType: a,
			displayAuthor: n,
			hideMeta: !1,
			theme: "landscape",
			useFixedWidth: T,
			children: w
		}), t[35] = n, t[36] = a, t[37] = i, t[38] = w, t[39] = A) : A = t[39], A;
	}
	l.default = d;
}), 226);
