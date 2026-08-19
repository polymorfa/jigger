__d("MAWLinkPreviewCard.react", [
	"fbt",
	"BaseView.react",
	"ConstUriUtils",
	"E2EELinkPreviewXMADataStatus",
	"E2EELinkPreviewXMADataType",
	"FBNucleusCrossFilled12Icon.react",
	"I64",
	"MAWLinkPreviewDataStatusUtils",
	"MAWLinkPreviewDataTypeUtils",
	"MWLSThreadDisplayContext",
	"MWMediaComposerLinkPreviewXMARenderQpl",
	"MWXIcon_DEPRECATED.react",
	"MWXImage.react",
	"MWXLinkPreviewLoadingIndicator.react",
	"MWXLinkPreviewTruncateText",
	"MWXText.react",
	"MWXTextPairing.react",
	"react",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = {
		container: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "x1qughib",
			$$css: !0
		},
		content: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "xlqzeqv",
			width: "xh8yej3",
			$$css: !0
		},
		image: {
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			height: "xng8ra",
			marginInlineEnd: "x1sa5p1d",
			objectFit: "xl1xv1r",
			width: "x1247r65",
			$$css: !0
		},
		isReplying: {
			borderTopWidth: "x972fbf",
			$$css: !0
		},
		outerContainer: {
			backgroundColor: "x57kliw",
			borderTopColor: "x8cjs6t",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			paddingInlineStart: "x1gx403c",
			paddingInlineEnd: "x1q3ajuy",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x889kno",
			$$css: !0
		},
		textSection: {
			flexShrink: "xs83m0k",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function g(t) {
		var n, a = t.draftID, l = t.isReplying, c = t.linkPreview, m = t.threadType, g = t.xmaData, h = o("MWMediaComposerLinkPreviewXMARenderQpl").useMediaComposerLinkPreviewXMARenderQpl(a, g.url, c.dataType, m), y = (e || (e = r("useReStore")))(), C = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext() === "ChatTab", b = o("MAWLinkPreviewDataTypeUtils").linkPreviewDataTypeIsOfType(c.dataType, r("E2EELinkPreviewXMADataType").FALLBACK), v = g.author_name, S = g.iframeMediaURL, R = g.title, L = g.url, E = L != null ? (n = o("ConstUriUtils").getUri(L)) == null ? void 0 : n.getDomain() : "", k = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: C,
			position: "subtext",
			text: b ? L : E
		}), I = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: C,
			position: "headline",
			text: b ? void 0 : R
		}), T = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: C,
			position: "body",
			text: b ? R : v
		}), D = o("MAWLinkPreviewDataStatusUtils").linkPreviewDataStatusIsOfType(c == null ? void 0 : c.status, r("E2EELinkPreviewXMADataStatus").LOADING);
		_(function() {
			!S && !D ? h == null || h.endSuccessAfterDelay({ bool: { has_media_preview_url: !1 } }) : h == null || h.addPoint("link-preview-card-render");
		}, [
			S,
			D,
			h
		]);
		var x = p(function() {
			h == null || h.endFailAfterDelay("load-image-error");
		}, [h]), $ = p(function() {
			h == null || h.endSuccessAfterDelay({ bool: { has_media_preview_url: !0 } });
		}, [h]);
		return D ? (h == null || h.addPoint("render_preview_loading_indicator"), d.jsx(r("BaseView.react"), {
			xstyle: [f.outerContainer, l && f.isReplying],
			children: d.jsx(r("BaseView.react"), {
				xstyle: f.container,
				children: d.jsx(r("MWXLinkPreviewLoadingIndicator.react"), { title: g.title })
			})
		})) : d.jsx(r("BaseView.react"), {
			xstyle: [f.outerContainer, l && f.isReplying],
			children: d.jsxs(r("BaseView.react"), {
				xstyle: f.container,
				children: [d.jsxs(r("BaseView.react"), {
					xstyle: f.content,
					children: [S != null && d.jsx(r("MWXImage.react"), {
						onError: x,
						onLoad: $,
						src: S,
						xstyle: f.image
					}), d.jsx(r("BaseView.react"), {
						xstyle: f.textSection,
						children: d.jsx(r("MWXTextPairing.react"), {
							body: T,
							bodyLineLimit: 1,
							headline: d.jsx(r("MWXText.react"), {
								isSemanticHeading: !1,
								type: "headline4",
								children: I
							}),
							level: 4,
							meta: k
						})
					})]
				}), d.jsx(r("MWXIcon_DEPRECATED.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					color: "primary",
					icon: r("FBNucleusCrossFilled12Icon.react"),
					onPress: function() {
						y.runInTransaction(async function(e) {
							var t, n;
							await e.e2ee_composer_draft_link_preview.put({
								data: (t = c.data) != null ? t : void 0,
								dataType: (n = c.dataType) != null ? n : void 0,
								draftId: c.draftId,
								status: (u || (u = o("I64"))).of_int32(r("E2EELinkPreviewXMADataStatus").DISABLED)
							});
						}, "readwrite", void 0, void 0, i.id + ":189");
					}
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
