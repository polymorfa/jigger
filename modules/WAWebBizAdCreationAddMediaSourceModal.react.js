__d("WAWebBizAdCreationAddMediaSourceModal.react", [
	"fbt",
	"WAWebBizAdCreationCatalogMediaStrings",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcGridOn.react",
	"WDSIconIcPermMedia.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationHasCatalogMedia"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		content: {
			paddingTop: "x16ovd2e",
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
		optionBody: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			$$css: !0
		},
		optionText: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			$$css: !0
		},
		root: {
			rowGap: "x1qvou4u",
			width: "x1czfd9k",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.initialSource, n = t === void 0 ? "upload" : t, a = e.onClose, i = e.onNext, l = c(n), m = l[0], _ = l[1], f = r("useWAWebBizAdCreationHasCatalogMedia")(), g = f.hasCatalogMedia, h = f.isLoading, y = !h && !g, C = y && m === "catalog" ? "upload" : m, b = u.jsx(r("WDSTextualLink.react"), {
			href: "https://faq.whatsapp.com/434854355461483?lang=en",
			testid: "biz_native_ads_add_media_source_learn_more_link",
			textConfig: "Body3",
			children: r("WAWebFbtCommon")("Learn more")
		});
		return u.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: a,
			testid: "biz_native_ads_add_media_source_modal",
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: d.root,
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 12,
						xstyle: d.header,
						children: [u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							"aria-label": r("WAWebFbtCommon")("Close").toString(),
							onPress: a,
							size: "medium",
							testid: "biz_native_ads_add_media_source_close_button",
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
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						xstyle: d.content,
						children: [u.jsx(p, {
							description: s._(
								/*BTDS*/
								""
							),
							icon: u.jsx(r("WDSIconIcPermMedia.react"), {
								colorName: "contentDefault",
								height: 24,
								width: 24
							}),
							label: s._(
								/*BTDS*/
								""
							),
							onSelect: _,
							selectedSource: C,
							testid: "biz_native_ads_add_media_source_upload_option",
							value: "upload"
						}), u.jsx(p, {
							description: s._(
								/*BTDS*/
								""
							),
							disabled: y,
							icon: u.jsx(r("WDSIconIcGridOn.react"), {
								colorName: "contentDefault",
								height: 24,
								width: 24
							}),
							label: s._(
								/*BTDS*/
								""
							),
							onSelect: _,
							selectedSource: C,
							testid: "biz_native_ads_add_media_source_catalog_option",
							value: "catalog"
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 8,
						xstyle: d.footer,
						children: [u.jsx("div", {
							className: "x1r8uery x1iyjqo2 xs83m0k",
							children: u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body3",
								children: o("WAWebBizAdCreationCatalogMediaStrings").getSharingDisclosure(b)
							})
						}), u.jsx(r("WDSButton.react"), {
							label: r("WAWebFbtCommon")("Next"),
							onPress: function() {
								return i(C);
							},
							size: "medium",
							testid: "biz_native_ads_add_media_source_next_button",
							variant: "filled"
						})]
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = o("react-compiler-runtime").c(36), n = e.description, a = e.disabled, i = e.icon, l = e.label, s = e.onSelect, c = e.selectedSource, m = e.testid, p = e.value, _ = a === void 0 ? !1 : a, f = c === p, g = "biz_native_ads_add_media_source_" + p, h = g + "_description", y;
		t[0] !== _ ? (y = {
			0: { className: "x6s0dn4 x1ypdohk x78zum5 x1j3ira4 xrdqr27 x1p57kb1 xvpt6g3 xdx6fka xvtqlqk" },
			1: { className: "x6s0dn4 x78zum5 x1j3ira4 xrdqr27 x1p57kb1 xvpt6g3 xdx6fka xvtqlqk xt0e3qv xti2d7y" }
		}[!!_ << 0], t[0] = _, t[1] = y) : y = t[1];
		var C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x78zum5 x2lah0s x16ovd2e x1nzty39 x12xbjc7 x12w63v0" }, t[2] = C) : C = t[2];
		var b;
		t[3] !== i ? (b = u.jsx("div", babelHelpers.extends({}, C, { children: i })), t[3] = i, t[4] = b) : b = t[4];
		var v;
		t[5] !== l ? (v = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: l
		}), t[5] = l, t[6] = v) : v = t[6];
		var S;
		t[7] !== n || t[8] !== h ? (S = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			id: h,
			type: "Body2",
			children: n
		}), t[7] = n, t[8] = h, t[9] = S) : S = t[9];
		var R;
		t[10] !== v || t[11] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			gap: 2,
			xstyle: d.optionText,
			children: [v, S]
		}), t[10] = v, t[11] = S, t[12] = R) : R = t[12];
		var L;
		t[13] !== l ? (L = l.toString(), t[13] = l, t[14] = L) : L = t[14];
		var E;
		t[15] !== _ || t[16] !== s || t[17] !== p ? (E = function() {
			_ || s(p);
		}, t[15] = _, t[16] = s, t[17] = p, t[18] = E) : E = t[18];
		var k;
		t[19] !== h || t[20] !== _ || t[21] !== f || t[22] !== g || t[23] !== L || t[24] !== E || t[25] !== m || t[26] !== p ? (k = u.jsx(r("WDSBaseRadio.react"), {
			"aria-describedby": h,
			"aria-label": L,
			checked: f,
			disabled: _,
			id: g,
			name: "biz_native_ads_add_media_source",
			onChange: E,
			testid: m,
			value: p
		}), t[19] = h, t[20] = _, t[21] = f, t[22] = g, t[23] = L, t[24] = E, t[25] = m, t[26] = p, t[27] = k) : k = t[27];
		var I;
		t[28] !== k || t[29] !== R ? (I = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 16,
			xstyle: d.optionBody,
			children: [R, k]
		}), t[28] = k, t[29] = R, t[30] = I) : I = t[30];
		var T;
		return t[31] !== g || t[32] !== I || t[33] !== y || t[34] !== b ? (T = u.jsxs("label", babelHelpers.extends({ htmlFor: g }, y, { children: [b, I] })), t[31] = g, t[32] = I, t[33] = y, t[34] = b, t[35] = T) : T = t[35], T;
	}
	l.default = m;
}), 226);
