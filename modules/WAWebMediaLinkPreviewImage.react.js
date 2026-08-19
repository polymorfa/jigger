__d("WAWebMediaLinkPreviewImage.react", [
	"WAWebDisplayType",
	"WAWebMediaLinkPreviewImageLayout.react",
	"WDSIconIcLink.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = "102px", d = {
		fullPreviewNotHighQualityLayoutMediaWithoutDescription: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		media: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			$$css: !0
		},
		mediaLQ: {
			height: "xeghe2j",
			width: "x41jr8d",
			objectFit: "xl1xv1r",
			$$css: !0
		},
		composeMediaHQ: {
			maxHeight: "x1vke2v8",
			$$css: !0
		},
		composeMedia: {
			minHeight: "x1yyal6b",
			height: "xi9e97b",
			minWidth: "x1h16669",
			width: "x12i9s57",
			$$css: !0
		},
		botPluginLinkMedia: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			height: "xm00f2n",
			width: "x1dk3rag",
			objectFit: "xl1xv1r",
			$$css: !0
		},
		supportCitationsLinkMedia: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			marginTop: "xvijh9v",
			marginInlineEnd: "x1mpyi22",
			marginBottom: "x1ty9z65",
			marginInlineStart: "xm2jcoa",
			objectFit: "xl1xv1r",
			$$css: !0
		},
		statusMedia: {
			height: "xwc1p85",
			width: "xpmtt7c",
			$$css: !0
		},
		highQualityLayoutMedia: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		fullPreviewNotHighQualityLayoutMedia: {
			marginTop: "x1anpbxc",
			marginInlineEnd: "x1sa5p1d",
			marginBottom: "xat24cr",
			marginInlineStart: "x1hm9lzh",
			borderStartStartRadius: "xrxyp3c",
			borderStartEndRadius: "xv0oops",
			borderEndEndRadius: "x1isl5vh",
			borderEndStartRadius: "xn8zj9a",
			float: "x1faq86j",
			height: "xxtgz2e",
			width: "xtw4mwf",
			$$css: !0
		},
		isInviteMedia: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			marginTop: "x1xmf6yo",
			marginInlineEnd: "x14z9mp",
			marginBottom: "x1e56ztr",
			marginInlineStart: "x1hm9lzh",
			height: "x112a4uq",
			width: "x15jighw",
			$$css: !0
		},
		noThumbIcon: {
			color: "x18cpw0e",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(28), a = t.displayType, i = t.isCompose, l = t.isFullPreview, s = t.isHighQualityLayout, c = t.isInvite, m = t.isStatus, p = t.theme, _ = t.thumbnail, f = t.thumbnailJpeg, g = t.thumbnailJpegDirectPath, h = t.thumbnailJpegHeight, y = t.thumbnailJpegHQ, C = t.thumbnailJpegWidth, b = t.withoutDescription, v = i && y != null && C != null && C > 240, S = p === "bot_plugin_link", R = p === "support_citations_link", L;
		n[0] !== S || n[1] !== i || n[2] !== l || n[3] !== v || n[4] !== s || n[5] !== c || n[6] !== m || n[7] !== R || n[8] !== b ? (L = (e || (e = r("stylex")))([
			S && d.botPluginLinkMedia,
			R && d.supportCitationsLinkMedia,
			!S && d.media,
			!S && !R && (v ? d.composeMediaHQ : d.mediaLQ),
			m && d.statusMedia,
			s && d.highQualityLayoutMedia,
			l && !s && d.fullPreviewNotHighQualityLayoutMedia,
			l && !s && b && d.fullPreviewNotHighQualityLayoutMediaWithoutDescription,
			c && d.isInviteMedia,
			i && !v && d.composeMedia
		]), n[0] = S, n[1] = i, n[2] = l, n[3] = v, n[4] = s, n[5] = c, n[6] = m, n[7] = R, n[8] = b, n[9] = L) : L = n[9];
		var E = L, k = a === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
		if (_ != null && _ !== "") {
			var I;
			return n[10] !== E || n[11] !== _ ? (I = u.jsx("div", {
				"data-testid": "link-preview-thumbnail",
				className: E,
				children: _
			}), n[10] = E, n[11] = _, n[12] = I) : I = n[12], I;
		}
		if (f != null && f !== "" || y != null && y !== "") {
			var T = y != null && y !== "" && !k ? y : f;
			if (T != null) {
				var D = "data:image/jpeg;base64," + T, x;
				n[13] !== E || n[14] !== D ? (x = u.jsx("img", {
					"data-testid": "link-preview-thumbnail-jpeg",
					alt: "",
					className: E,
					src: D
				}), n[13] = E, n[14] = D, n[15] = x) : x = n[15];
				var $;
				return n[16] !== a || n[17] !== k || n[18] !== v || n[19] !== s || n[20] !== m || n[21] !== x || n[22] !== g || n[23] !== y || n[24] !== h || n[25] !== C ? ($ = u.jsx(r("WAWebMediaLinkPreviewImageLayout.react"), {
					thumbnailJpegDirectPath: g,
					thumbnailJpegHQ: y,
					height: h,
					width: C,
					galleryView: k,
					isStatus: m,
					isComposerHightQualityLayout: v,
					displayType: a,
					isHighQualityLayout: s,
					children: x
				}), n[16] = a, n[17] = k, n[18] = v, n[19] = s, n[20] = m, n[21] = x, n[22] = g, n[23] = y, n[24] = h, n[25] = C, n[26] = $) : $ = n[26], $;
			}
		}
		if (k) {
			var P;
			return n[27] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx("div", {
				"data-testid": "link-preview-no-thumb",
				className: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x41jr8d xeghe2j x6ikm8r x10wlt62 x1280gxy",
				children: u.jsx(r("WDSIconIcLink.react"), {
					testid: "ic-link",
					xstyle: d.noThumbIcon,
					width: 32,
					height: 32
				})
			}), n[27] = P) : P = n[27], P;
		}
		return null;
	}
	l.default = m;
}), 98);
