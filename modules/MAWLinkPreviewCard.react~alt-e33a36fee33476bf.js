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
	"asyncToGeneratorRuntime",
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
		var a, l = t.draftID, c = t.isReplying, m = t.linkPreview, g = t.threadType, h = t.xmaData, y = o("MWMediaComposerLinkPreviewXMARenderQpl").useMediaComposerLinkPreviewXMARenderQpl(l, h.url, m.dataType, g), C = (e || (e = r("useReStore")))(), b = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext() === "ChatTab", v = o("MAWLinkPreviewDataTypeUtils").linkPreviewDataTypeIsOfType(m.dataType, r("E2EELinkPreviewXMADataType").FALLBACK), S = h.author_name, R = h.iframeMediaURL, L = h.title, E = h.url, k = E != null ? (a = o("ConstUriUtils").getUri(E)) == null ? void 0 : a.getDomain() : "", I = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: b,
			position: "subtext",
			text: v ? E : k
		}), T = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: b,
			position: "headline",
			text: v ? void 0 : L
		}), D = o("MWXLinkPreviewTruncateText").truncateText({
			isChatTab: b,
			position: "body",
			text: v ? L : S
		}), x = o("MAWLinkPreviewDataStatusUtils").linkPreviewDataStatusIsOfType(m == null ? void 0 : m.status, r("E2EELinkPreviewXMADataStatus").LOADING);
		_(function() {
			!R && !x ? y == null || y.endSuccessAfterDelay({ bool: { has_media_preview_url: !1 } }) : y == null || y.addPoint("link-preview-card-render");
		}, [
			R,
			x,
			y
		]);
		var $ = p(function() {
			y == null || y.endFailAfterDelay("load-image-error");
		}, [y]), P = p(function() {
			y == null || y.endSuccessAfterDelay({ bool: { has_media_preview_url: !0 } });
		}, [y]);
		return x ? (y == null || y.addPoint("render_preview_loading_indicator"), d.jsx(r("BaseView.react"), {
			xstyle: [f.outerContainer, c && f.isReplying],
			children: d.jsx(r("BaseView.react"), {
				xstyle: f.container,
				children: d.jsx(r("MWXLinkPreviewLoadingIndicator.react"), { title: h.title })
			})
		})) : d.jsx(r("BaseView.react"), {
			xstyle: [f.outerContainer, c && f.isReplying],
			children: d.jsxs(r("BaseView.react"), {
				xstyle: f.container,
				children: [d.jsxs(r("BaseView.react"), {
					xstyle: f.content,
					children: [R != null && d.jsx(r("MWXImage.react"), {
						onError: $,
						onLoad: P,
						src: R,
						xstyle: f.image
					}), d.jsx(r("BaseView.react"), {
						xstyle: f.textSection,
						children: d.jsx(r("MWXTextPairing.react"), {
							body: D,
							bodyLineLimit: 1,
							headline: d.jsx(r("MWXText.react"), {
								isSemanticHeading: !1,
								type: "headline4",
								children: T
							}),
							level: 4,
							meta: I
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
						C.runInTransaction((function() {
							var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
								var t, n;
								yield e.e2ee_composer_draft_link_preview.put({
									data: (t = m.data) != null ? t : void 0,
									dataType: (n = m.dataType) != null ? n : void 0,
									draftId: m.draftId,
									status: (u || (u = o("I64"))).of_int32(r("E2EELinkPreviewXMADataStatus").DISABLED)
								});
							});
							return function(t) {
								return e.apply(this, arguments);
							};
						})(), "readwrite", void 0, void 0, i.id + ":189");
					}
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
