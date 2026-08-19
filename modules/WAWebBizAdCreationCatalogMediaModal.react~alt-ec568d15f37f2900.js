__d("WAWebBizAdCreationCatalogMediaModal.react", [
	"WAWebBizAdCreationCatalogMediaItem",
	"WAWebBizAdCreationCatalogMediaStrings",
	"WAWebBizAdCreationMediaValidationUtils",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebMediaTypes",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcCheck.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"useWAWebBizAdCreationCatalogMedia",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState, p = 120;
	function _(e) {
		return e === "error" ? o("WAWebBizAdCreationCatalogMediaStrings").getCatalogLoadErrorText() : e === "no-catalog" ? o("WAWebBizAdCreationCatalogMediaStrings").getNoCatalogText() : o("WAWebBizAdCreationCatalogMediaStrings").getNoCatalogItemsText();
	}
	var f = {
		centeredState: {
			flexGrow: "x1iyjqo2",
			minHeight: "x9l5fec",
			$$css: !0
		},
		footer: {
			alignItems: "x6s0dn4",
			borderTopColor: "xnj1f2r",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			flexShrink: "x2lah0s",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		header: {
			flexShrink: "x2lah0s",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paginationSpinner: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			$$css: !0
		},
		root: {
			rowGap: "x1qvou4u",
			width: "x1czfd9k",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.onBack, n = e.onClose, a = e.onConfirm, i = r("useWAWebBizAdCreationCatalogMedia")(), l = i.canLoadMore, u = i.isLoadingMore, g = i.loadMore, y = i.loadState, C = i.sections, b = m(function() {
			return new Map();
		}), v = b[0], S = b[1], R = v.size >= o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT, L = function(t) {
			var e = o("WAWebBizAdCreationCatalogMediaItem").getCatalogMediaItemKey(t);
			S(function(n) {
				var r = new Map(n);
				return r.has(e) ? r.delete(e) : r.size < o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT && r.set(e, t), r;
			});
		}, E = function() {
			a(Array.from(v.values()));
		}, k = d(null), I = function(t) {
			var e = t.currentTarget, n = e.scrollHeight - e.clientHeight - e.scrollTop;
			l && !u && n < p && g();
		};
		c(function() {
			var e = k.current;
			e != null && l && !u && e.scrollHeight <= e.clientHeight && g();
		}, [
			l,
			u,
			g
		]);
		var T = C.some(function(e) {
			return e.tiles.length > 0;
		}), D;
		if (y === "loading") D = s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: f.centeredState,
			children: s.jsx(r("WDSSpinner.react"), {})
		});
		else if (T) D = s.jsx(h, {
			atCap: R,
			onToggle: L,
			sections: C,
			selectedItems: v
		});
		else {
			var x = _(y);
			D = s.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				testid: "biz_native_ads_catalog_media_empty_state",
				xstyle: f.centeredState,
				children: s.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body1",
					children: x
				})
			});
		}
		return s.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: n,
			testid: "biz_native_ads_catalog_media_modal",
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: f.root,
				children: [
					s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 12,
						xstyle: f.header,
						children: [s.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcArrowBack.react"),
							"aria-label": r("WAWebFbtCommon")("Back").toString(),
							onPress: t,
							size: "medium",
							testid: "biz_native_ads_catalog_media_back_button",
							variant: "borderless"
						}), s.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: o("WAWebBizAdCreationCatalogMediaStrings").getChooseCatalogMediaTitle()
						})]
					}),
					s.jsxs("div", {
						className: "x78zum5 xdt5ytf x1jcbksy x9l5fec x1odjw0f xdx6fka xvtqlqk x1f0uite",
						ref: k,
						"data-testid": "biz_native_ads_catalog_media_scroll_container",
						onScroll: I,
						children: [D, u && T ? s.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							testid: "biz_native_ads_catalog_media_pagination_spinner",
							xstyle: f.paginationSpinner,
							children: s.jsx(r("WDSSpinner.react"), {})
						}) : null]
					}),
					s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 8,
						xstyle: f.footer,
						children: [s.jsx("div", {
							className: "x1r8uery x1iyjqo2 xs83m0k",
							children: s.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: o("WAWebBizAdCreationCatalogMediaStrings").getCatalogFooterHint()
							})
						}), s.jsx(r("WDSButton.react"), {
							disabled: v.size === 0,
							label: r("WAWebFbtCommon")("Next"),
							onPress: E,
							size: "medium",
							testid: "biz_native_ads_catalog_media_next_button",
							variant: "filled"
						})]
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.atCap, n = e.onToggle, a = e.sections, i = e.selectedItems;
		return a.map(function(e) {
			return s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 8,
				children: [e.sectionTitle != null && e.sectionTitle !== "" ? s.jsx("div", {
					className: "x16ovd2e x12xbjc7",
					children: s.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: e.sectionTitle
					})
				}) : null, s.jsx("div", {
					className: "xrvj5dj x1qvou4u x1s70e7g xn8ku34 x1nhvcw1",
					children: e.tiles.map(function(e) {
						var r = o("WAWebBizAdCreationCatalogMediaItem").getCatalogMediaItemKey(e.item), a = i.has(r);
						return s.jsx(y, {
							isDisabled: t && !a,
							isSelected: a,
							onToggle: n,
							tile: e
						}, r);
					})
				})]
			}, e.sectionId);
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.isDisabled, n = e.isSelected, a = e.onToggle, i = e.tile, l = o("useWAWebModelValues").useModelValues(i.productImage.mediaData, ["mediaStage", "renderableUrl"]), u = l.mediaStage, c = l.renderableUrl, d = u === o("WAWebMediaTypes").MediaDataStage.RESOLVED;
		return s.jsxs("button", babelHelpers.extends({
			"aria-label": o("WAWebBizAdCreationCatalogMediaStrings").getCatalogImageTileLabel().toString(),
			"aria-pressed": n,
			disabled: t,
			onClick: function() {
				return a(i.item);
			},
			type: "button"
		}, {
			0: { className: "x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1ypdohk x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6" },
			2: { className: "x1280gxy x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 x1ypdohk x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6 xlze6vy x47fsot x1rrvw3c x18djku1 xamhcws x1alpsbp xlxy82 xyumdvf" },
			1: { className: "x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6 xt0e3qv xti2d7y" },
			3: { className: "x1280gxy x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6 xlze6vy x47fsot x1rrvw3c x18djku1 xamhcws x1alpsbp xlxy82 xyumdvf xt0e3qv xti2d7y" }
		}[!!n << 1 | !!t << 0], {
			"data-testid": "biz_native_ads_catalog_media_tile_" + o("WAWebBizAdCreationCatalogMediaItem").getCatalogMediaItemKey(i.item),
			children: [d && c != null ? s.jsx("img", {
				alt: "",
				src: c,
				className: "x5yr21d x1o0tod xl1xv1r x10l6tqk x13vifvy xh8yej3"
			}) : null, s.jsx("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x9f619 x78zum5 x1qx5ct2 x4brfc7 xl56j7k x10l6tqk xugynej xw4jnvo" },
				1: { className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x9f619 x78zum5 x1qx5ct2 x4brfc7 xl56j7k x10l6tqk xugynej xw4jnvo xfn3atn xlze6vy x47fsot x1rrvw3c x18djku1" }
			}[!!n << 0], { children: n ? s.jsx(r("WDSIconIcCheck.react"), {
				colorName: "contentOnAccent",
				height: 14,
				width: 14
			}) : null }))]
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = g;
}), 98);
