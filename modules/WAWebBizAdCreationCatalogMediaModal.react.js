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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(9), n = e.atCap, a = e.onToggle, i = e.sections, l = e.selectedItems, u;
		if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l) {
			var c;
			t[5] !== n || t[6] !== a || t[7] !== l ? (c = function(t) {
				return s.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					gap: 8,
					children: [t.sectionTitle != null && t.sectionTitle !== "" ? s.jsx("div", {
						className: "x16ovd2e x12xbjc7",
						children: s.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: t.sectionTitle
						})
					}) : null, s.jsx("div", {
						className: "xrvj5dj x1qvou4u x1s70e7g xn8ku34 x1nhvcw1",
						children: t.tiles.map(function(e) {
							var t = o("WAWebBizAdCreationCatalogMediaItem").getCatalogMediaItemKey(e.item), r = l.has(t);
							return s.jsx(y, {
								isDisabled: n && !r,
								isSelected: r,
								onToggle: a,
								tile: e
							}, t);
						})
					})]
				}, t.sectionId);
			}, t[5] = n, t[6] = a, t[7] = l, t[8] = c) : c = t[8], u = i.map(c), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u;
		} else u = t[4];
		return u;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(28), n = e.isDisabled, a = e.isSelected, i = e.onToggle, l = e.tile, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = ["mediaStage", "renderableUrl"], t[0] = u) : u = t[0];
		var c = o("useWAWebModelValues").useModelValues(l.productImage.mediaData, u), d = c.mediaStage, m = c.renderableUrl, p = d === o("WAWebMediaTypes").MediaDataStage.RESOLVED, _;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebBizAdCreationCatalogMediaStrings").getCatalogImageTileLabel().toString(), t[1] = _) : _ = t[1];
		var f;
		t[2] !== i || t[3] !== l.item ? (f = function() {
			return i(l.item);
		}, t[2] = i, t[3] = l.item, t[4] = f) : f = t[4];
		var g;
		t[5] !== n || t[6] !== a ? (g = {
			0: { className: "x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1ypdohk x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6" },
			2: { className: "x1280gxy x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 x1ypdohk x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6 xlze6vy x47fsot x1rrvw3c x18djku1 xamhcws x1alpsbp xlxy82 xyumdvf" },
			1: { className: "x1280gxy xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6 xt0e3qv xti2d7y" },
			3: { className: "x1280gxy x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 x1nbnut7 x6ikm8r x10wlt62 xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x2pejg6 xlze6vy x47fsot x1rrvw3c x18djku1 xamhcws x1alpsbp xlxy82 xyumdvf xt0e3qv xti2d7y" }
		}[!!a << 1 | !!n << 0], t[5] = n, t[6] = a, t[7] = g) : g = t[7];
		var h;
		t[8] !== l.item ? (h = o("WAWebBizAdCreationCatalogMediaItem").getCatalogMediaItemKey(l.item), t[8] = l.item, t[9] = h) : h = t[9];
		var y = "biz_native_ads_catalog_media_tile_" + h, C;
		t[10] !== p || t[11] !== m ? (C = p && m != null ? s.jsx("img", {
			alt: "",
			src: m,
			className: "x5yr21d x1o0tod xl1xv1r x10l6tqk x13vifvy xh8yej3"
		}) : null, t[10] = p, t[11] = m, t[12] = C) : C = t[12];
		var b;
		t[13] !== a ? (b = {
			0: { className: "x6s0dn4 x1zfx7y x1gj3efs x151wx5t xea0m3l xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x9f619 x78zum5 x1qx5ct2 x4brfc7 xl56j7k x10l6tqk xugynej xw4jnvo" },
			1: { className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x9f619 x78zum5 x1qx5ct2 x4brfc7 xl56j7k x10l6tqk xugynej xw4jnvo xfn3atn xlze6vy x47fsot x1rrvw3c x18djku1" }
		}[!!a << 0], t[13] = a, t[14] = b) : b = t[14];
		var v;
		t[15] !== a ? (v = a ? s.jsx(r("WDSIconIcCheck.react"), {
			colorName: "contentOnAccent",
			height: 14,
			width: 14
		}) : null, t[15] = a, t[16] = v) : v = t[16];
		var S;
		t[17] !== b || t[18] !== v ? (S = s.jsx("div", babelHelpers.extends({}, b, { children: v })), t[17] = b, t[18] = v, t[19] = S) : S = t[19];
		var R;
		return t[20] !== n || t[21] !== a || t[22] !== S || t[23] !== f || t[24] !== g || t[25] !== y || t[26] !== C ? (R = s.jsxs("button", babelHelpers.extends({
			"aria-label": _,
			"aria-pressed": a,
			disabled: n,
			onClick: f,
			type: "button"
		}, g, {
			"data-testid": y,
			children: [C, S]
		})), t[20] = n, t[21] = a, t[22] = S, t[23] = f, t[24] = g, t[25] = y, t[26] = C, t[27] = R) : R = t[27], R;
	}
	l.default = g;
}), 98);
