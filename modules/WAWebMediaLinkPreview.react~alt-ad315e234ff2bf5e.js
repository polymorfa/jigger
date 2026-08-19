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
		var t = e.children, n = e.displayType, r = e.kept, a = e.star;
		if (n !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) return t;
		var i = [];
		return a === !0 && i.push([
			o("WAWebStarIcon.react").StarIcon,
			16,
			15
		]), r === !0 && i.push([
			o("WAWebKeepInChatIcon.react").KeepInChatIcon,
			15.64,
			14.67
		]), u.jsxs("div", {
			"data-testid": "icon-star",
			className: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1280gxy",
			children: [t, i.length > 0 && u.jsx("div", {
				className: "x78zum5 x10l6tqk xmnqija xy1j3rs",
				children: i.map(function(e) {
					var t = e[0], n = e[1], r = e[2];
					return u.jsx(t, {
						xstyle: p.icon,
						width: n,
						height: r
					}, t.name);
				})
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n = t.botPluginReferenceIndex, a = t.botReelPluginThumbnailData, i = t.compose, l = i === void 0 ? !1 : i, s = t.containerXstyle, c = t.description, d = t.displayType, m = t.horizontalLayout, y = m === void 0 ? !1 : m, C = t.inviteGrpType, b = t.isInvite, R = t.isLoading, L = t.isSentByMe, E = t.kept, k = t.linkPreviewData, I = t.links, T = t.matchedText, D = t.onClick, x = t.star, $ = t.theme, P = t.thumbnail, N = t.thumbnailJpeg, M = t.thumbnailJpegDirectPath, w = t.thumbnailJpegHeight, A = t.thumbnailJpegHQ, F = t.thumbnailJpegWidth, O = t.title, B = $ === "bot_plugin_link", W = d === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, q = ($ === "high-quality" || $ === "high-quality-extended") && !W, U = !l && !W && v(T), V = g({
			descriptionFromMsg: c,
			inviteGrpType: C,
			matchedText: T
		}), H = _(O), G = f(H), z = d === o("WAWebDisplayType").DISPLAY_TYPE.STATUS, j = $ === "support_citations_link", K = T != null && T !== "" ? u.jsx("div", babelHelpers.extends({ "data-testid": "url-element" }, {
			0: { className: "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij" },
			4: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn" },
			2: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn" },
			6: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn" },
			1: { className: "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij xuxw1ft x6ikm8r x10wlt62 xlyipyv" },
			5: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv" },
			3: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv" },
			7: { className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv" }
		}[!!z << 2 | !!l << 1 | !!j << 0], { children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: T,
			direction: H,
			dirMismatch: G
		}) })) : null, Q = k == null ? void 0 : k.previewMetadata;
		if (l && Q != null && o("WAWebPaymentLinkPreviewWithAmountFeature").isPaymentLinkPreviewWithAmountEnabled(k, I)) return u.jsx(r("WAWebPaymentLinkPreview.react"), {
			title: O,
			urlElement: K,
			previewMetadata: Q,
			isLoading: R
		});
		var X = l && A != null && F != null && F > h, Y = (e || (e = r("stylex")))([
			p.preview,
			l && p.noBorderRadius,
			l && p.compose,
			l && (A != null && X ? p.composeWithHQMediaPreview : p.composeWithSQMediaPreview),
			L === !0 ? p.boubbleOut : p.bubbleIn,
			z && p.status,
			z && q && p.statusImageShrink,
			$ === "extended" && p.extended,
			q && p.highQualityLayout,
			U && !q && p.fullPreview,
			y && p.horizontalLayout,
			s
		]), J = R, Z = J ? u.jsx(r("WDSIconIcLink.react"), {
			testid: "ic-link",
			xstyle: [p.paddingAll24, p.placeholderImage],
			width: 32,
			height: 32
		}) : u.jsx(r("WAWebMediaLinkPreviewImage.react"), {
			thumbnail: P,
			thumbnailJpeg: N,
			thumbnailJpegHQ: A,
			thumbnailJpegDirectPath: M,
			thumbnailJpegHeight: w,
			thumbnailJpegWidth: F,
			isHighQualityLayout: q,
			displayType: d,
			isStatus: z,
			isFullPreview: U,
			theme: $,
			withoutDescription: V == null,
			isInvite: d !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? !!b : !1,
			isCompose: l
		}), ee = u.jsx(r("WAWebMediaLinkPreviewDescription.react"), {
			useTextLimit: U && !q,
			isStatus: z,
			isFullPreview: U,
			isHighQualityLayout: q,
			isComposeHQPreview: X,
			isCompose: l,
			testid: C != null ? "link-description-" + String(C) : "link-description",
			children: V
		}), te = O != null && B && n != null ? n + ". " + O : O;
		return u.jsxs("div", {
			"data-testid": "link-preview-container",
			className: Y,
			style: l ? { ":empty": { display: "none" } } : void 0,
			onClick: D,
			children: [
				u.jsx(S, {
					star: x,
					kept: E,
					displayType: d,
					children: Z
				}),
				u.jsxs("div", babelHelpers.extends({}, e.props(p.body, z && p.statusBody, U && p.fullPreviewBody, U && !q && p.fullPreviewNotHighQualityLayoutBody, l ? p.composeBody : p.notComposeBody, l && (X ? p.composeBodyHQ : p.composeBodyLQ)), { children: [
					!J && u.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
						isBotPluginLink: B,
						isCompose: l,
						isStatus: z,
						title: te,
						titleDir: H,
						titleDirMismatch: G
					}),
					!B && !J && ee,
					K
				] })),
				J && u.jsx("div", { className: "x1ji6iu3 x1ptvdk8 xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl" })
			]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);
