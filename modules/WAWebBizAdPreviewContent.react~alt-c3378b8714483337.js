__d("WAWebBizAdPreviewContent.react", [
	"fbt",
	"WAWebBizAdCreationFBPreview.react",
	"WAWebBizAdCreationIGPreview.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizAdPreviewLoggingUtils",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WAWebTabs.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = {
		header: {
			alignItems: "x6s0dn4",
			columnGap: "xs2akgl",
			flexShrink: "x2lah0s",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		root: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			rowGap: "x1f0uite",
			$$css: !0
		},
		tabs: {
			backgroundColor: "x1280gxy",
			flexShrink: "x2lah0s",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, h = {
		facebook: "facebook",
		instagram: "instagram"
	};
	function y(e) {
		var t = e.adAccountID, n = e.loggerContext, a = e.onClose, i = e.previewData, l = e.xstyle, c = f(h.instagram), y = c[0], C = c[1], b = m(r("WAWebBizAdCreationLoggerContext")), v = n != null ? n : b, S = _(null);
		p(function() {
			if (t != null && v != null) {
				var e, n, a = (e = (n = i.medias) == null ? void 0 : n.length) != null ? e : 0, l = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(i.medias), s = S.current, u = s == null, c = u || (s == null ? void 0 : s.count) !== a || (s == null ? void 0 : s.type) !== l;
				c && (S.current = {
					count: a,
					type: l
				}, r("WAWebBizAdLogger").logCritical({
					adAccountID: t,
					event: "ad_preview_modal_impression",
					extra: {
						initial_load: u,
						media_count: a,
						media_type: l
					},
					loggerContext: v
				}));
			}
		}, [
			t,
			v,
			i.medias
		]);
		var R = d(function() {
			t != null && v != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "ad_preview_modal_close_click",
				loggerContext: v
			}), a();
		}, [
			t,
			v,
			a
		]), L = d(function(e) {
			if (t != null && v != null) {
				var n, a, l = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(i.medias);
				r("WAWebBizAdLogger").log({
					adAccountID: t,
					event: "previews_tab_click",
					extra: {
						after: e,
						before: y,
						media_count: (n = (a = i.medias) == null ? void 0 : a.length) != null ? n : 0,
						media_type: l
					},
					loggerContext: v
				});
			}
			C(e);
		}, [
			t,
			v,
			i.medias,
			y
		]), E = u.jsx(r("WAWebTabs.react"), {
			onSelect: L,
			selectedId: y,
			tabConfigs: [{
				id: h.instagram,
				title: s._(
					/*BTDS*/
					""
				)
			}, {
				id: h.facebook,
				title: s._(
					/*BTDS*/
					""
				)
			}],
			testIdPrefix: "biz-ad-creation-preview-tab",
			xstyle: g.tabs
		});
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_preview_modal_content",
			xstyle: [g.root, l],
			children: [
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: g.header,
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcArrowBack.react"),
						onPress: R,
						size: "medium",
						variant: "borderless"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				E,
				u.jsx("div", {
					className: "x98rzlu x2lwn1j x1odjw0f",
					children: u.jsxs("div", {
						className: "xb0esv5 xyo0t3i",
						children: [
							u.jsx("div", {
								className: "x6s0dn4 x78zum5 xdt5ytf xl56j7k x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
								children: y === h.instagram ? u.jsx("div", {
									"data-testid": "biz_native_ads_see_all_ig_preview",
									children: u.jsx(r("WAWebBizAdCreationIGPreview.react"), babelHelpers.extends({}, i))
								}) : u.jsx("div", {
									"data-testid": "biz_native_ads_see_all_fb_preview",
									children: u.jsx(r("WAWebBizAdCreationFBPreview.react"), babelHelpers.extends({}, i))
								})
							}),
							u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
							u.jsx("div", {
								className: "x16ovd2e x12xbjc7 x2b8uid",
								children: u.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body2",
									children: y === h.instagram ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									)
								})
							})
						]
					})
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
