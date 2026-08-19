__d("WAWebMediaLinkPreview.react", [
	"WABidi",
	"WAWebDisplayType",
	"WAWebEmojiText.react",
	"WAWebGroupType",
	"WAWebKeepInChatIcon.react",
	"WAWebL10N",
	"WAWebLinkPreviewGroupUtils",
	"WAWebMediaLinkPreviewDescription.react",
	"WAWebMediaLinkPreviewImage.react",
	"WAWebMediaLinkPreviewTitle.react",
	"WAWebNewsletterApiParse",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebPaymentLinkPreview.react",
	"WAWebPaymentLinkPreviewWithAmountFeature",
	"WAWebStarIcon.react",
	"WDSIconIcLink.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = 20, d = "x1qak2s4-B", m = "102px", p = {
		preview: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			color: "x14ug900",
			cursor: "x1ypdohk",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			fontSize: "x1wl59ut",
			lineHeight: "x1o168i8",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			transition: "xnhwuio",
			$$css: !0
		},
		noBorderRadius: {
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			$$css: !0
		},
		compose: {
			backgroundColor: "xjbqb8w",
			cursor: "x1sqbtui",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			maxWidth: "x1x1rfll",
			width: "xh8yej3",
			$$css: !0
		},
		composeWithSQMediaPreview: {
			height: "xi9e97b",
			maxHeight: "xygtw03",
			$$css: !0
		},
		composeWithHQMediaPreview: {
			maxHeight: "x1tw48k3",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		boubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		fullPreview: {
			display: "x1lliihq",
			$$css: !0
		},
		extended: {
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			$$css: !0
		},
		highQualityLayout: {
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		horizontalLayout: {
			flexDirection: "x1q0g3np",
			$$css: !0
		},
		status: {
			backgroundColor: "x1p8t8ri",
			width: "xh8yej3",
			$$css: !0
		},
		body: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			lineHeight: "x17fgdl5",
			maxHeight: "x1vt2n86",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "xe2zdcy",
			width: "xh8yej3",
			$$css: !0
		},
		statusBody: {
			paddingTop: "xz9dl7a",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xsag5q8",
			paddingInlineStart: "x1g0dm76",
			maxHeight: "xi3n7jm",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		fullPreviewBody: {
			maxHeight: "x1a0yzc1",
			$$css: !0
		},
		fullPreviewNotHighQualityLayoutBody: {
			display: "x1lliihq",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		},
		notComposeBody: {
			alignSelf: "x1y8v6su",
			$$css: !0
		},
		composeBody: {
			alignSelf: "xamitd3",
			boxSizing: "x9f619",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "xdvlbce",
			paddingInlineStart: "x1iwz3mf",
			$$css: !0
		},
		composeBodyLQ: {
			maxHeight: "xygtw03",
			$$css: !0
		},
		composeBodyHQ: {
			maxHeight: "x1tw48k3",
			$$css: !0
		},
		statusImageShrink: {
			display: "x78zum5",
			flexShrink: "xs83m0k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			maxHeight: "xmqja0k",
			width: "xh8yej3",
			$$css: !0
		},
		icon: {
			color: "x17t9dm2",
			pointerEvents: "x47corl",
			filter: "x1tqxd1j",
			$$css: !0
		},
		placeholderImage: {
			color: "xy8hc96",
			$$css: !0
		},
		paddingAll24: {
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		}
	};
	function _(e) {
		return e != null && e !== "" ? o("WABidi").bidiDir(e) : void 0;
	}
	function f(e) {
		var t = e === "rtl";
		return t !== r("WAWebL10N").isRTL();
	}
	function g(e) {
		var t = e.descriptionFromMsg, n = e.inviteGrpType, r = e.matchedText;
		if (o("WAWebNewsletterApiParse").isNewsletterInviteCode(r)) return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() ? t : null;
		if (n != null) {
			var a;
			return n === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && typeof t == "string" && (a = t), o("WAWebLinkPreviewGroupUtils").getInviteLinkDescription(n, a);
		}
		return t;
	}
	var h = 240, y = /^(www.)?twitter.com$/i, C = /^(www.)?x.com$/i, b = [y, C];
	function v(e) {
		return e == null || e === "" ? !1 : b.some(function(t) {
			return t.test(e);
		});
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, r = e.displayType, a = e.kept, i = e.star;
		if (r !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) return n;
		var l;
		if (t[0] !== a || t[1] !== i) {
			if (l = [], i === !0) {
				var s;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = [
					o("WAWebStarIcon.react").StarIcon,
					16,
					15
				], t[3] = s) : s = t[3], l.push(s);
			}
			if (a === !0) {
				var c;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = [
					o("WAWebKeepInChatIcon.react").KeepInChatIcon,
					15.64,
					14.67
				], t[4] = c) : c = t[4], l.push(c);
			}
			t[0] = a, t[1] = i, t[2] = l;
		} else l = t[2];
		var d;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1280gxy" }, t[5] = d) : d = t[5];
		var m;
		t[6] !== l ? (m = l.length > 0 && u.jsx("div", {
			className: "x78zum5 x10l6tqk xmnqija xy1j3rs",
			children: l.map(R)
		}), t[6] = l, t[7] = m) : m = t[7];
		var p;
		return t[8] !== n || t[9] !== m ? (p = u.jsxs("div", babelHelpers.extends({ "data-testid": "icon-star" }, d, { children: [n, m] })), t[8] = n, t[9] = m, t[10] = p) : p = t[10], p;
	}
	function R(e) {
		var t = e[0], n = e[1], r = e[2];
		return u.jsx(t, {
			xstyle: p.icon,
			width: n,
			height: r
		}, t.name);
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n = o("react-compiler-runtime").c(105), a = t.botPluginReferenceIndex, i = t.compose, l = t.containerXstyle, s = t.description, c = t.displayType, d = t.horizontalLayout, m = t.inviteGrpType, y = t.isInvite, C = t.isLoading, b = t.isSentByMe, R = t.kept, L = t.linkPreviewData, E = t.links, k = t.matchedText, I = t.onClick, T = t.star, D = t.theme, x = t.thumbnail, $ = t.thumbnailJpeg, P = t.thumbnailJpegDirectPath, N = t.thumbnailJpegHeight, M = t.thumbnailJpegHQ, w = t.thumbnailJpegWidth, A = t.title, F = i === void 0 ? !1 : i, O = d === void 0 ? !1 : d, B = D === "bot_plugin_link", W = c === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, q = (D === "high-quality" || D === "high-quality-extended") && !W, U, V, H, G, z, j, K, Q, X;
		if (n[0] !== l || n[1] !== s || n[2] !== c || n[3] !== O || n[4] !== m || n[5] !== F || n[6] !== W || n[7] !== q || n[8] !== C || n[9] !== b || n[10] !== L || n[11] !== E || n[12] !== k || n[13] !== D || n[14] !== M || n[15] !== w || n[16] !== A) {
			j = Symbol.for("react.early_return_sentinel");
			e: {
				H = !F && !W && v(k);
				var Y;
				n[26] !== s || n[27] !== m || n[28] !== k ? (Y = g({
					descriptionFromMsg: s,
					inviteGrpType: m,
					matchedText: k
				}), n[26] = s, n[27] = m, n[28] = k, n[29] = Y) : Y = n[29], U = Y;
				var J;
				n[30] !== A ? (K = _(A), J = f(K), n[30] = A, n[31] = J, n[32] = K) : (J = n[31], K = n[32]), Q = J, G = c === o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
				var Z = D === "support_citations_link", ee;
				n[33] !== F || n[34] !== G || n[35] !== Z || n[36] !== k || n[37] !== K || n[38] !== Q ? (ee = k != null && k !== "" ? u.jsx("div", babelHelpers.extends({ "data-testid": "url-element" }, {
					0: { className: "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij" },
					4: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn" },
					2: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn" },
					6: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn" },
					1: { className: "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij xuxw1ft x6ikm8r x10wlt62 xlyipyv" },
					5: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv" },
					3: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv" },
					7: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv" }
				}[!!G << 2 | !!F << 1 | !!Z << 0], { children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: k,
					direction: K,
					dirMismatch: Q
				}) })) : null, n[33] = F, n[34] = G, n[35] = Z, n[36] = k, n[37] = K, n[38] = Q, n[39] = ee) : ee = n[39], X = ee;
				var te = L == null ? void 0 : L.previewMetadata;
				if (F && te != null && o("WAWebPaymentLinkPreviewWithAmountFeature").isPaymentLinkPreviewWithAmountEnabled(L, E)) {
					var ne;
					n[40] !== C || n[41] !== te || n[42] !== A || n[43] !== X ? (ne = u.jsx(r("WAWebPaymentLinkPreview.react"), {
						title: A,
						urlElement: X,
						previewMetadata: te,
						isLoading: C
					}), n[40] = C, n[41] = te, n[42] = A, n[43] = X, n[44] = ne) : ne = n[44], j = ne;
					break e;
				}
				V = F && M != null && w != null && w > h, z = (e || (e = r("stylex")))([
					p.preview,
					F && p.noBorderRadius,
					F && p.compose,
					F && (M != null && V ? p.composeWithHQMediaPreview : p.composeWithSQMediaPreview),
					b === !0 ? p.boubbleOut : p.bubbleIn,
					G && p.status,
					G && q && p.statusImageShrink,
					D === "extended" && p.extended,
					q && p.highQualityLayout,
					H && !q && p.fullPreview,
					O && p.horizontalLayout,
					l
				]);
			}
			n[0] = l, n[1] = s, n[2] = c, n[3] = O, n[4] = m, n[5] = F, n[6] = W, n[7] = q, n[8] = C, n[9] = b, n[10] = L, n[11] = E, n[12] = k, n[13] = D, n[14] = M, n[15] = w, n[16] = A, n[17] = U, n[18] = V, n[19] = H, n[20] = G, n[21] = z, n[22] = j, n[23] = K, n[24] = Q, n[25] = X;
		} else U = n[17], V = n[18], H = n[19], G = n[20], z = n[21], j = n[22], K = n[23], Q = n[24], X = n[25];
		if (j !== Symbol.for("react.early_return_sentinel")) return j;
		var re = z, oe = C, ae;
		n[45] !== U || n[46] !== c || n[47] !== F || n[48] !== H || n[49] !== q || n[50] !== y || n[51] !== G || n[52] !== oe || n[53] !== D || n[54] !== x || n[55] !== $ || n[56] !== P || n[57] !== M || n[58] !== N || n[59] !== w ? (ae = oe ? u.jsx(r("WDSIconIcLink.react"), {
			testid: "ic-link",
			xstyle: [p.paddingAll24, p.placeholderImage],
			width: 32,
			height: 32
		}) : u.jsx(r("WAWebMediaLinkPreviewImage.react"), {
			thumbnail: x,
			thumbnailJpeg: $,
			thumbnailJpegHQ: M,
			thumbnailJpegDirectPath: P,
			thumbnailJpegHeight: N,
			thumbnailJpegWidth: w,
			isHighQualityLayout: q,
			displayType: c,
			isStatus: G,
			isFullPreview: H,
			theme: D,
			withoutDescription: U == null,
			isInvite: c !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? !!y : !1,
			isCompose: F
		}), n[45] = U, n[46] = c, n[47] = F, n[48] = H, n[49] = q, n[50] = y, n[51] = G, n[52] = oe, n[53] = D, n[54] = x, n[55] = $, n[56] = P, n[57] = M, n[58] = N, n[59] = w, n[60] = ae) : ae = n[60];
		var ie = ae, le = H && !q, se = m != null ? "link-description-" + String(m) : "link-description", ue;
		n[61] !== U || n[62] !== F || n[63] !== V || n[64] !== H || n[65] !== q || n[66] !== G || n[67] !== le || n[68] !== se ? (ue = u.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
			useTextLimit: le,
			isStatus: G,
			isFullPreview: H,
			isHighQualityLayout: q,
			isComposeHQPreview: V,
			isCompose: F,
			testid: se,
			children: U
		}), n[61] = U, n[62] = F, n[63] = V, n[64] = H, n[65] = q, n[66] = G, n[67] = le, n[68] = se, n[69] = ue) : ue = n[69];
		var ce = ue, de = A != null && B && a != null ? a + ". " + A : A, me;
		n[70] !== F ? (me = F ? { ":empty": { display: "none" } } : void 0, n[70] = F, n[71] = me) : me = n[71];
		var pe;
		n[72] !== c || n[73] !== ie || n[74] !== R || n[75] !== T ? (pe = u.jsx(S, {
			star: T,
			kept: R,
			displayType: c,
			children: ie
		}), n[72] = c, n[73] = ie, n[74] = R, n[75] = T, n[76] = pe) : pe = n[76];
		var _e;
		n[77] !== F || n[78] !== V || n[79] !== H || n[80] !== q || n[81] !== G ? (_e = (e || (e = r("stylex"))).props(p.body, G && p.statusBody, H && p.fullPreviewBody, H && !q && p.fullPreviewNotHighQualityLayoutBody, F ? p.composeBody : p.notComposeBody, F && (V ? p.composeBodyHQ : p.composeBodyLQ)), n[77] = F, n[78] = V, n[79] = H, n[80] = q, n[81] = G, n[82] = _e) : _e = n[82];
		var fe;
		n[83] !== B || n[84] !== F || n[85] !== G || n[86] !== de || n[87] !== oe || n[88] !== K || n[89] !== Q ? (fe = !oe && u.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
			isBotPluginLink: B,
			isCompose: F,
			isStatus: G,
			title: de,
			titleDir: K,
			titleDirMismatch: Q
		}), n[83] = B, n[84] = F, n[85] = G, n[86] = de, n[87] = oe, n[88] = K, n[89] = Q, n[90] = fe) : fe = n[90];
		var ge = !B && !oe && ce, he;
		n[91] !== _e || n[92] !== fe || n[93] !== ge || n[94] !== X ? (he = u.jsxs("div", babelHelpers.extends({}, _e, { children: [
			fe,
			ge,
			X
		] })), n[91] = _e, n[92] = fe, n[93] = ge, n[94] = X, n[95] = he) : he = n[95];
		var ye;
		n[96] !== oe ? (ye = oe && u.jsx("div", { className: "x1ji6iu3 x1ptvdk8 xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl" }), n[96] = oe, n[97] = ye) : ye = n[97];
		var Ce;
		return n[98] !== re || n[99] !== I || n[100] !== pe || n[101] !== he || n[102] !== ye || n[103] !== me ? (Ce = u.jsxs("div", {
			"data-testid": "link-preview-container",
			className: re,
			style: me,
			onClick: I,
			children: [
				pe,
				he,
				ye
			]
		}), n[98] = re, n[99] = I, n[100] = pe, n[101] = he, n[102] = ye, n[103] = me, n[104] = Ce) : Ce = n[104], Ce;
	}
	l.default = L;
}), 98);
