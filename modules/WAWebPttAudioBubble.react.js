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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(81), a = t.msg, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			o("WAWebMsgGetters").getId,
			o("WAWebMsgGetters").getAck,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebFrontendMsgGetters").getAsPttLike
		], n[0] = i) : i = n[0];
		var l = o("useWAWebMsgValues").useMsgValues(a.id, i), s = l[0], d = l[1], m = l[2], _ = l[3], f = o("WAWebFrontendMsgGetters").getChat(a.unsafe()), g = c(r("WAWebChatThemeModeContext")), h = g.isThemed, y = g.isVibrant, C;
		n[1] !== h || n[2] !== y || n[3] !== m ? (C = h ? {
			0: { className: "x1nuagic xv8ol63 x531f83 xv7i4pt x1tq6e3e xu7j3m8 x166b9r3 x1m638s7 x8w6msn x4waw3b x1ba4949 xvcldg8 x1orp12f x18aq6mh xkbu4vg x1gjk43w" },
			1: { className: "x1nuagic x531f83 xv7i4pt x1tq6e3e x166b9r3 x1m638s7 x4waw3b x1ba4949 xvcldg8 xkbu4vg x1gjk43w x1auojx4 x1vzaafi x1xj1co4 xbgy0q5 x1orp12f" }
		}[!!(y && m) << 0] : null, n[1] = h, n[2] = y, n[3] = m, n[4] = C) : C = n[4];
		var b = C, v;
		n[5] !== m ? (v = r("WAWebL10N").isRTL() ? !m : m, n[5] = m, n[6] = v) : v = n[6];
		var S = v, R = t.author != null, L = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(f), E = t.quotedMsg != null, k = o("WAWebMsgSelectors").showForwarded(a), I = t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, T = (e || (e = r("stylex")))(t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ? p.regularBubble : p.newsletterBubble, o("WAWebDisplayType").isWideDisplay(t.displayType) && p.bubbleAnnouncement, t.author != null && o("WAWebDisplayType").isWideDisplay(t.displayType) && p.hasAuthorAnnouncement, R && p.hasAuthor, R && L && p.hasAuthorElevatedPushNames, E && p.hasQuote, p.bubble), D;
		n[7] !== S || n[8] !== t.status ? (D = t.status ? u.jsx("div", {
			className: {
				0: "x10l6tqk x1t1qrwb x7hj1vm",
				1: "x10l6tqk x1t1qrwb xgvahye"
			}[!!S << 0],
			children: t.status
		}) : null, n[7] = S, n[8] = t.status, n[9] = D) : D = n[9];
		var x = D, $ = e(E && p.hasQuoteAuthor, k && p.isForwardedAuthor, o("WAWebDisplayType").isWideDisplay(t.displayType) && p.authorAnnouncement, p.author, I && p.authorGalleryNarrow, L && p.authorElevatedPushNames), P = t.author != null ? u.jsx("div", {
			className: $,
			children: t.author
		}) : null, N;
		n[10] !== R || n[11] !== a ? (N = o("WAWebMsgSelectors").showForwarded(a) ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: a.unsafe(),
			xstyle: [p.forwardedIndicator, R && p.hasAuthorForwardedIndicator]
		}) : null, n[10] = R, n[11] = a, n[12] = N) : N = n[12];
		var M = N, w;
		n[13] !== a ? (w = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), { msg: a }), n[13] = a, n[14] = w) : w = n[14];
		var A = w, F;
		n[15] !== a ? (F = a.unsafe(), n[15] = a, n[16] = F) : F = n[16];
		var O = o("useWAWebNewsletterActionItems").useWAWebNewsletterActionItems(F), B = O.length > 0, W;
		n[17] !== R || n[18] !== t.quotedMsg ? (W = t.quotedMsg ? u.jsx("div", babelHelpers.extends({}, {
			0: { className: "xdj266r x18faa90 x1e56ztr x4h0osi" },
			1: { className: "x18faa90 x1e56ztr x4h0osi x1ok221b" }
		}[!!R << 0], { children: t.quotedMsg })) : null, n[17] = R, n[18] = t.quotedMsg, n[19] = W) : W = n[19];
		var q = W, U;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (U = ["playbackRate", "playbackControlMessageId"], n[20] = U) : U = n[20];
		var V = o("useWAWebModelValues").useModelValues(o("WAWebPttPrefs").PttPrefs, U), H = V.playbackControlMessageId, G = V.playbackRate, z = _ != null, j, K = !1;
		if (z) {
			var Q;
			n[21] !== s ? (Q = s.toString(), n[21] = s, n[22] = Q) : Q = n[22], K = H === Q;
			var X;
			n[23] !== s ? (X = function() {
				o("WAWebPttPrefs").PttPrefs.advancePlaybackRateFor(s);
			}, n[23] = s, n[24] = X) : X = n[24];
			var Y = X, J;
			n[25] !== S || n[26] !== K ? (J = {
				0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xg01cxk x19991ni x13dflua xz4gly6 xe9ewy2",
				2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xg01cxk x19991ni x13dflua xz4gly6 xwklpps",
				1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni x13dflua xz4gly6 xe9ewy2 x67bb7w x1hc1fzr",
				3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni x13dflua xz4gly6 xwklpps x67bb7w x1hc1fzr"
			}[!!S << 1 | !!K << 0], n[25] = S, n[26] = K, n[27] = J) : J = n[27];
			var Z = J, ee = d === o("WAWebAck").ACK.PLAYED, te;
			n[28] !== Y || n[29] !== m || n[30] !== G || n[31] !== K || n[32] !== ee ? (te = u.jsx(r("WAWebPttMessagePlaybackRateButton"), {
				playbackRate: G,
				onClick: Y,
				isSentByMe: m,
				played: ee,
				playbackRateButtonIsVisible: K
			}), n[28] = Y, n[29] = m, n[30] = G, n[31] = K, n[32] = ee, n[33] = te) : te = n[33];
			var ne;
			n[34] !== Z || n[35] !== te ? (ne = u.jsx("div", {
				className: Z,
				children: te
			}), n[34] = Z, n[35] = te, n[36] = ne) : ne = n[36], j = ne;
		}
		var re;
		n[37] !== K ? (re = {
			0: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x47corl xg01cxk x19991ni x13dflua xz4gly6",
			1: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x19991ni x13dflua xz4gly6 x67bb7w x1hc1fzr"
		}[!K << 0], n[37] = K, n[38] = re) : re = n[38];
		var oe = re, ae = {
			0: "x78zum5 x6s0dn4 x2fvf9 x13fj5qh",
			4: "x78zum5 x6s0dn4 x15zctf7 x2fvf9 x13fj5qh",
			2: "x78zum5 x6s0dn4 x1xegmmw xdwrcjd",
			6: "x78zum5 x6s0dn4 x15zctf7 x1xegmmw xdwrcjd",
			1: "x78zum5 x6s0dn4 x2fvf9 x1lziwak",
			5: "x78zum5 x6s0dn4 x15zctf7 x2fvf9 x1lziwak",
			3: "x78zum5 x6s0dn4 x1xegmmw x1lziwak",
			7: "x78zum5 x6s0dn4 x15zctf7 x1xegmmw x1lziwak"
		}[!!m << 2 | !!S << 1 | !!(!S && L) << 0], ie;
		n[39] !== B || n[40] !== m ? (ie = {
			0: "x10l6tqk xmnce4g",
			4: "x10l6tqk x1inkcgm",
			2: "x10l6tqk xmnce4g xbfrwjf",
			6: "x10l6tqk x1inkcgm xbfrwjf",
			1: "x10l6tqk xmnce4g x1ua38it",
			5: "x10l6tqk x1inkcgm x1ua38it",
			3: "x10l6tqk xmnce4g x1ua38it",
			7: "x10l6tqk x1inkcgm x1ua38it"
		}[!!m << 2 | !B << 1 | !!B << 0], n[39] = B, n[40] = m, n[41] = ie) : ie = n[41];
		var le = ie, se;
		n[42] !== a ? (se = a.unsafe(), n[42] = a, n[43] = se) : se = n[43];
		var ue;
		n[44] === Symbol.for("react.memo_cache_sentinel") ? (ue = "x1198e8h x18faa90 xahult9 x4h0osi", n[44] = ue) : ue = n[44];
		var ce;
		n[45] !== se ? (ce = u.jsx(r("WAWebBizCtwaContext.react"), {
			msg: se,
			wrapperClass: ue
		}), n[45] = se, n[46] = ce) : ce = n[46];
		var de;
		n[47] !== S ? (de = {
			0: "x1iyjqo2 x1j85h84 xgyfb49",
			1: "x1iyjqo2 x1j85h84 x1az2cgm"
		}[!!S << 0], n[47] = S, n[48] = de) : de = n[48];
		var me;
		n[49] !== t.player || n[50] !== de ? (me = u.jsx("div", {
			className: de,
			children: t.player
		}), n[49] = t.player, n[50] = de, n[51] = me) : me = n[51];
		var pe;
		n[52] === Symbol.for("react.memo_cache_sentinel") ? (pe = { className: "x1n2onr6" }, n[52] = pe) : pe = n[52];
		var _e;
		n[53] !== oe || n[54] !== t.avatar || n[55] !== x ? (_e = u.jsxs("div", {
			className: oe,
			children: [t.avatar, x]
		}), n[53] = oe, n[54] = t.avatar, n[55] = x, n[56] = _e) : _e = n[56];
		var fe;
		n[57] !== j || n[58] !== _e ? (fe = u.jsxs("div", babelHelpers.extends({}, pe, { children: [j, _e] })), n[57] = j, n[58] = _e, n[59] = fe) : fe = n[59];
		var ge;
		n[60] !== ae || n[61] !== me || n[62] !== fe ? (ge = u.jsxs("div", {
			className: ae,
			children: [me, fe]
		}), n[60] = ae, n[61] = me, n[62] = fe, n[63] = ge) : ge = n[63];
		var he;
		n[64] !== a ? (he = u.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }), n[64] = a, n[65] = he) : he = n[65];
		var ye;
		n[66] !== le || n[67] !== he ? (ye = u.jsx("div", {
			className: le,
			children: he
		}), n[66] = le, n[67] = he, n[68] = ye) : ye = n[68];
		var Ce;
		n[69] !== P || n[70] !== M || n[71] !== A || n[72] !== q || n[73] !== ce || n[74] !== ge || n[75] !== ye || n[76] !== b ? (Ce = u.jsxs("div", babelHelpers.extends({}, b, { children: [
			P,
			M,
			A,
			q,
			ce,
			ge,
			ye
		] })), n[69] = P, n[70] = M, n[71] = A, n[72] = q, n[73] = ce, n[74] = ge, n[75] = ye, n[76] = b, n[77] = Ce) : Ce = n[77];
		var be;
		return n[78] !== T || n[79] !== Ce ? (be = u.jsx("div", {
			className: T,
			children: Ce
		}), n[78] = T, n[79] = Ce, n[80] = be) : be = n[80], be;
	}
	l.default = _;
}), 98);
