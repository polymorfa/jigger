__d("WAWebPttAudioBubble.react", [
	"WAWebAck",
	"WAWebBizCtwaContext.react",
	"WAWebChatThemeModeContext",
	"WAWebDisplayType",
	"WAWebElevatedPushNamesFlag",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageMeta.react",
	"WAWebMessagePaidPartnershipDisclaimerText.react",
	"WAWebMsgGetters",
	"WAWebMsgSelectors",
	"WAWebPttMessagePlaybackRateButton",
	"WAWebPttPrefs",
	"react",
	"stylex",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebNewsletterActionItems"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useContext, d = "6px", m = "336px", p = {
		bubble: {
			boxSizing: "x9f619",
			maxWidth: "x193iq5w",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		newsletterBubble: {
			width: "x1yuel0x",
			$$css: !0
		},
		regularBubble: {
			width: "x121pien",
			$$css: !0
		},
		bubbleAnnouncement: {
			width: "x1yuel0x",
			$$css: !0
		},
		hasAuthorAnnouncement: {
			paddingTop: "x1byr4rc",
			$$css: !0
		},
		forwardedIndicator: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "xg8j3zb",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		hasAuthorForwardedIndicator: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		hasAuthor: {
			paddingTop: "x9tmck8",
			$$css: !0
		},
		hasAuthorElevatedPushNames: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		hasQuote: {
			paddingTop: "xyqdw3p",
			$$css: !0
		},
		hasQuoteAuthor: {
			position: "x1n2onr6",
			top: "x1ngbm5e",
			insetInlineStart: "x1tvzbhf",
			width: "xh8yej3",
			paddingTop: "xyqdw3p",
			paddingInlineStart: "x1djpfga",
			$$css: !0
		},
		isForwardedAuthor: {
			width: "x14atkfc",
			$$css: !0
		},
		authorAnnouncement: {
			width: "x11ys1z5",
			maxWidth: "xm2tn8k",
			$$css: !0
		},
		author: {
			width: "x1e8r7jv",
			maxWidth: "xiqdezl",
			$$css: !0
		},
		authorElevatedPushNames: {
			width: "xh8yej3",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x4tra6z",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			$$css: !0
		},
		authorGalleryNarrow: {
			width: "x1e8r7jv x1isr11b",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.msg, a = o("useWAWebMsgValues").useMsgValues(n.id, [
			o("WAWebMsgGetters").getId,
			o("WAWebMsgGetters").getAck,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebFrontendMsgGetters").getAsPttLike
		]), i = a[0], l = a[1], s = a[2], d = a[3], m = o("WAWebFrontendMsgGetters").getChat(n.unsafe()), _ = c(r("WAWebChatThemeModeContext")), f = _.isThemed, g = _.isVibrant, h = f ? {
			0: { className: "x1nuagic xv8ol63 x531f83 xv7i4pt x1tq6e3e xu7j3m8 x166b9r3 x1m638s7 x8w6msn x4waw3b x1ba4949 xvcldg8 x1orp12f x18aq6mh xkbu4vg x1gjk43w" },
			1: { className: "x1nuagic x531f83 xv7i4pt x1tq6e3e x166b9r3 x1m638s7 x4waw3b x1ba4949 xvcldg8 xkbu4vg x1gjk43w x1auojx4 x1vzaafi x1xj1co4 xbgy0q5 x1orp12f" }
		}[!!(g && s) << 0] : null, y = r("WAWebL10N").isRTL() ? !s : s, C = t.author != null, b = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(m), v = t.quotedMsg != null, S = o("WAWebMsgSelectors").showForwarded(n), R = t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, L = (e || (e = r("stylex")))(t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ? p.regularBubble : p.newsletterBubble, o("WAWebDisplayType").isWideDisplay(t.displayType) && p.bubbleAnnouncement, t.author != null && o("WAWebDisplayType").isWideDisplay(t.displayType) && p.hasAuthorAnnouncement, C && p.hasAuthor, C && b && p.hasAuthorElevatedPushNames, v && p.hasQuote, p.bubble), E = t.status ? u.jsx("div", {
			className: {
				0: "x10l6tqk x1t1qrwb x7hj1vm",
				1: "x10l6tqk x1t1qrwb xgvahye"
			}[!!y << 0],
			children: t.status
		}) : null, k = e(v && p.hasQuoteAuthor, S && p.isForwardedAuthor, o("WAWebDisplayType").isWideDisplay(t.displayType) && p.authorAnnouncement, p.author, R && p.authorGalleryNarrow, b && p.authorElevatedPushNames), I = t.author != null ? u.jsx("div", {
			className: k,
			children: t.author
		}) : null, T = o("WAWebMsgSelectors").showForwarded(n) ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: n.unsafe(),
			xstyle: [p.forwardedIndicator, C && p.hasAuthorForwardedIndicator]
		}) : null, D = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: n }), x = o("useWAWebNewsletterActionItems").useWAWebNewsletterActionItems(n.unsafe()), $ = x.length > 0, P = t.quotedMsg ? u.jsx("div", babelHelpers.extends({}, {
			0: { className: "xdj266r x18faa90 x1e56ztr x4h0osi" },
			1: { className: "x18faa90 x1e56ztr x4h0osi x1ok221b" }
		}[!!C << 0], { children: t.quotedMsg })) : null, N = o("useWAWebModelValues").useModelValues(o("WAWebPttPrefs").PttPrefs, ["playbackRate", "playbackControlMessageId"]), M = N.playbackControlMessageId, w = N.playbackRate, A = d != null, F, O = !1;
		if (A) {
			O = M === i.toString();
			var B = function() {
				o("WAWebPttPrefs").PttPrefs.advancePlaybackRateFor(i);
			}, W = {
				0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xg01cxk x19991ni x13dflua xz4gly6 xe9ewy2",
				2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xg01cxk x19991ni x13dflua xz4gly6 xwklpps",
				1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni x13dflua xz4gly6 xe9ewy2 x67bb7w x1hc1fzr",
				3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni x13dflua xz4gly6 xwklpps x67bb7w x1hc1fzr"
			}[!!y << 1 | !!O << 0];
			F = u.jsx("div", {
				className: W,
				children: u.jsx(r("WAWebPttMessagePlaybackRateButton"), {
					playbackRate: w,
					onClick: B,
					isSentByMe: s,
					played: l === o("WAWebAck").ACK.PLAYED,
					playbackRateButtonIsVisible: O
				})
			});
		}
		var q = {
			0: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x47corl xg01cxk x19991ni x13dflua xz4gly6",
			1: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x19991ni x13dflua xz4gly6 x67bb7w x1hc1fzr"
		}[!O << 0], U = {
			0: "x78zum5 x6s0dn4 x2fvf9 x13fj5qh",
			4: "x78zum5 x6s0dn4 x15zctf7 x2fvf9 x13fj5qh",
			2: "x78zum5 x6s0dn4 x1xegmmw xdwrcjd",
			6: "x78zum5 x6s0dn4 x15zctf7 x1xegmmw xdwrcjd",
			1: "x78zum5 x6s0dn4 x2fvf9 x1lziwak",
			5: "x78zum5 x6s0dn4 x15zctf7 x2fvf9 x1lziwak",
			3: "x78zum5 x6s0dn4 x1xegmmw x1lziwak",
			7: "x78zum5 x6s0dn4 x15zctf7 x1xegmmw x1lziwak"
		}[!!s << 2 | !!y << 1 | !!(!y && b) << 0], V = {
			0: "x10l6tqk xmnce4g",
			4: "x10l6tqk x1inkcgm",
			2: "x10l6tqk xmnce4g xbfrwjf",
			6: "x10l6tqk x1inkcgm xbfrwjf",
			1: "x10l6tqk xmnce4g x1ua38it",
			5: "x10l6tqk x1inkcgm x1ua38it",
			3: "x10l6tqk xmnce4g x1ua38it",
			7: "x10l6tqk x1inkcgm x1ua38it"
		}[!!s << 2 | !$ << 1 | !!$ << 0];
		return u.jsx("div", {
			className: L,
			children: u.jsxs("div", babelHelpers.extends({}, h, { children: [
				I,
				T,
				D,
				P,
				u.jsx(r("WAWebBizCtwaContext.react"), {
					msg: n.unsafe(),
					wrapperClass: "x1198e8h x18faa90 xahult9 x4h0osi"
				}),
				u.jsxs("div", {
					className: U,
					children: [u.jsx("div", {
						className: {
							0: "x1iyjqo2 x1j85h84 xgyfb49",
							1: "x1iyjqo2 x1j85h84 x1az2cgm"
						}[!!y << 0],
						children: t.player
					}), u.jsxs("div", {
						className: "x1n2onr6",
						children: [F, u.jsxs("div", {
							className: q,
							children: [t.avatar, E]
						})]
					})]
				}),
				u.jsx("div", {
					className: V,
					children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: n })
				})
			] }))
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
