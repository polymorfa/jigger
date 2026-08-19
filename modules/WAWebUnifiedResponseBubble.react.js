__d("WAWebUnifiedResponseBubble.react", [
	"fbt",
	"MarkedMobileFlavorPlugin",
	"WAWebBloksEntryPointLoadable",
	"WAWebBotBaseGating",
	"WAWebBotPostCard.react",
	"WAWebBotShoppingItemCard.react",
	"WAWebBotTypes",
	"WAWebBotUnifiedResponseGating",
	"WAWebCarouselNavigationButton",
	"WAWebChevronButton.react",
	"WAWebCometComposedTextV2URParserLoadable",
	"WAWebCopyPasteSelectable.react",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebImagineURImage.react",
	"WAWebImagineVideoGenerating.react",
	"WAWebMediaLinkPreviewContainer.react",
	"WAWebMessageCropping",
	"WAWebMessageMeta.react",
	"WAWebMessageSpacerText.react",
	"WAWebMessageTextBubble.react",
	"WAWebPipConst",
	"WAWebPipSharedVideoPlayer.react",
	"WAWebQuotaUpsellBubble.react",
	"WAWebThemeContext",
	"WAWebUnifiedResponseCitationRenderers.react",
	"WAWebUnifiedResponseContentDrawerLoadable",
	"WAWebUnifiedResponseStrikethroughRule",
	"WAWebUnifiedResponseUtils",
	"WAWebUseBotMessageUpdateScrolling",
	"WDSFocusStateStyles",
	"WDSInteractionTokens.stylex",
	"WDSText.react",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useLayoutEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = {
		container: {
			borderStartStartRadius: "xbjudin",
			borderStartEndRadius: "xnlwouz",
			borderEndEndRadius: "xpp8er5",
			borderEndStartRadius: "xs9wviy",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			color: "xhslqc4",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		imagineContainer: {
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			width: "xh8yej3",
			$$css: !0
		},
		imagineContainerHeight: function(t) {
			return [{
				height: t != null ? "x16ye13r" : t,
				$$css: !0
			}, { "--x-height": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		}
	}, y = {
		citationBackgroundColor: o("WDSVars.stylex").WDSColors["--WDS-surface-elevated-emphasized"],
		citationLinkListHoverBackgroundColor: "rgba(" + o("WDSVars.stylex").WDSColors["--WDS-surface-highlight-RGB"] + ", " + o("WDSInteractionTokens.stylex").WDSInteractionTokens.hoveredStateLayerOpacity + ")",
		citationListLinkBorderRadius: o("WDSVars.stylex").WDSVars.spacingSingle,
		citationListLinkPadding: o("WDSVars.stylex").WDSVars.spacingDouble,
		dividerColor: o("WDSVars.stylex").WDSColors["--WDS-lines-divider"],
		tableBorderColor: o("WDSVars.stylex").WDSVars["--WDS-lines-divider"],
		tableCellPaddingBottom: o("WDSVars.stylex").WDSVars.spacingSingle,
		tableCellPaddingInlineEnd: o("WDSVars.stylex").WDSVars.spacingSingle,
		tableCellPaddingInlineStart: o("WDSVars.stylex").WDSVars.spacingSingle,
		tableCellPaddingTop: o("WDSVars.stylex").WDSVars.spacingSingle,
		tableContainerBorderRadius: o("WDSVars.stylex").WDSVars.borderRadiusSingle,
		tableHeaderBackgroundColor: o("WDSVars.stylex").WDSVars["--WDS-surface-emphasized"],
		tableHeaderPaddingBottom: o("WDSVars.stylex").WDSVars.spacingSinglePlus,
		tableHeaderPaddingInlineEnd: o("WDSVars.stylex").WDSVars.spacingSingle,
		tableHeaderPaddingInlineStart: o("WDSVars.stylex").WDSVars.spacingSingle,
		tableHeaderPaddingTop: o("WDSVars.stylex").WDSVars.spacingSinglePlus
	}, C = {
		x73z65k: "x1lii0bd x73z65k",
		$$css: !0
	}, b = {
		x73z65k: "x1lii0bd x73z65k",
		$$css: !0
	};
	function v(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, a = e.tag, i;
		t[0] !== a ? (i = a === "h1" ? "LargeTitle1" : a === "h2" ? "LargeTitle2" : a === "h3" ? "Headline1" : a === "h4" ? "Headline2" : a === "h5" ? "Body1Emphasized" : a === "h6" ? "Body1" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + a);
		})(), t[0] = a, t[1] = i) : i = t[1];
		var l = i, s;
		return t[2] !== n || t[3] !== l ? (s = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: l,
			children: n
		}), t[2] = n, t[3] = l, t[4] = s) : s = t[4], s;
	}
	var S = 9 / 16, R = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6;
	function L(t) {
		var n = o("react-compiler-runtime").c(9), a = t.mediaUrl, i = g(null), l = i[0], s = i[1], u;
		n[0] !== a ? (u = {
			videoUrl: a,
			previewUrl: ""
		}, n[0] = a, n[1] = u) : u = n[1];
		var d = u, m = l != null ? l : S, p = R / m, _;
		n[2] !== p ? (_ = (e || (e = r("stylex"))).props(h.imagineContainer, h.imagineContainerHeight(p)), n[2] = p, n[3] = _) : _ = n[3];
		var f;
		n[4] !== d ? (f = c.jsx(o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer, {
			type: o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER,
			ogVideoInfo: d,
			startTime: null,
			autoPlay: !1,
			noPip: !0,
			onAspectRatio: s
		}), n[4] = d, n[5] = f) : f = n[5];
		var y;
		return n[6] !== _ || n[7] !== f ? (y = c.jsx("div", babelHelpers.extends({}, _, { children: f })), n[6] = _, n[7] = f, n[8] = y) : y = n[8], y;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(7), n = e.imagineType, a = e.mediaUrl, i = e.msgId, l = String(n) === "ANIMATE";
		if (a == null || a === "") {
			if (l) {
				var u;
				return t[0] !== i ? (u = c.jsx(r("WAWebImagineVideoGenerating.react"), { msgId: i }), t[0] = i, t[1] = u) : u = t[1], u;
			}
			var d;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.container,
				children: s._(
					/*BTDS*/
					""
				)
			}), t[2] = d) : d = t[2], d;
		}
		if (l) {
			var m;
			return t[3] !== a ? (m = c.jsx(L, { mediaUrl: a }), t[3] = a, t[4] = m) : m = t[4], m;
		}
		var p;
		return t[5] !== a ? (p = c.jsx(r("WAWebImagineURImage.react"), { mediaUrl: a }), t[5] = a, t[6] = p) : p = t[6], p;
	}
	function k() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.container,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[0] = t) : t = e[0], t;
	}
	var I = new Set([
		o("WAWebBotTypes").BotMsgEditType.FIRST,
		o("WAWebBotTypes").BotMsgEditType.INNER,
		o("WAWebBotTypes").BotMsgEditType.LAST
	]);
	function T(e) {
		var t = o("react-compiler-runtime").c(56), n = e.displayAuthor, a = e.displayType, i = e.errorFallback, l = e.msg, u = e.unifiedResponse, d;
		t[0] !== l ? (d = l.unsafe(), t[0] = l, t[1] = d) : d = t[1];
		var m = d;
		o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(m);
		var _ = o("WAWebThemeContext").useIsDarkTheme(), g;
		t[2] !== l ? (g = o("WAWebFrontendMsgGetters").getDir(l), t[2] = l, t[3] = g) : g = t[3];
		var h = g, y;
		t[4] !== u ? (y = o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(u) && o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled(), t[4] = u, t[5] = y) : y = t[5];
		var v = y, S = f(null);
		if (S.current == null) {
			var R;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (R = new (o("WAWebUnifiedResponseUtils")).UnifiedResponseQPLLogger(), R.markerStart({ string: { component_name: "WAWebUnifiedResponseBubble" } }), t[6] = R) : R = t[6], S.current = R;
		}
		var L, k;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			var e;
			(e = S.current) == null || e.markerEnd(2);
		}, k = [], t[7] = L, t[8] = k) : (L = t[7], k = t[8]), p(L, k);
		var T;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			nextButton: w,
			prevButton: M
		}, t[9] = T) : T = t[9];
		var A = T, F = N, O;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (O = o("WAWebUnifiedResponseCitationRenderers.react").getUnifiedResponseCitationRenderers(), t[10] = O) : O = t[10];
		var B;
		t[11] !== m.id ? (B = function(t) {
			var e = t.imagineType, n = t.mediaUrl;
			return c.jsx(E, {
				imagineType: e,
				mediaUrl: n,
				msgId: m.id
			});
		}, t[11] = m.id, t[12] = B) : B = t[12];
		var W;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (W = {
			contentTriggerTextValues: { citations: s._(
				/*BTDS*/
				""
			) },
			renderer: F
		}, t[13] = W) : W = t[13];
		var q;
		t[14] !== a || t[15] !== v || t[16] !== l || t[17] !== m.id || t[18] !== u ? (q = v ? function(e) {
			return c.jsx(r("WAWebQuotaUpsellBubble.react"), babelHelpers.extends({}, e, {
				benefitType: o("WAWebUnifiedResponseUtils").getQuotaUpsellBenefitType(u),
				msgId: m.id.toString(),
				metaSlot: c.jsx(o("WAWebMessageMeta.react").Meta, {
					msg: l,
					displayType: a
				})
			}));
		} : void 0, t[14] = a, t[15] = v, t[16] = l, t[17] = m.id, t[18] = u, t[19] = q) : q = t[19];
		var U;
		t[20] !== _ ? (U = o("WAWebBotUnifiedResponseGating").isFoABloksNodeRendererEnabled() ? function(e) {
			var t = e.data, n = e.type, r = e.uuid;
			return c.jsx(o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable, {
				componentData: t,
				componentType: n,
				theme: _ ? "dark" : "light",
				uuid: r
			});
		} : void 0, t[20] = _, t[21] = U) : U = t[21];
		var V;
		t[22] !== m ? (V = function(t) {
			var e = t.avatarUrl, n = t.creator, r = t.reelsUrl, a = t.thumbnailUrl;
			return c.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
				displayType: o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
				msg: m,
				reelItem: {
					profileIconUrl: e,
					thumbnailUrl: a,
					title: n,
					videoUrl: r
				},
				theme: "bot_plugin_link"
			});
		}, t[22] = m, t[23] = V) : V = t[23];
		var H, G;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (H = {
			shimmerColor: "color-mix(in srgb, " + o("WDSVars.stylex").WDSVars["--WDS-content-default"] + " 15%, transparent)",
			textColor: o("WDSVars.stylex").WDSVars["--WDS-content-default"]
		}, G = {
			overflowCellCount: 4,
			overflowCellSize: 150
		}, t[24] = H, t[25] = G) : (H = t[24], G = t[25]);
		var z;
		t[26] !== q || t[27] !== U || t[28] !== V || t[29] !== B ? (z = babelHelpers.extends({}, O, {
			focusRingXStyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
			headingNodeRenderer: P,
			hScrollRenderers: A,
			imagineNodeRenderer: B,
			contentViewRenderer: W,
			postNodeRenderer: $,
			productItemCardNodeRenderer: x,
			quotaUpsellNodeRenderer: q,
			foABloksNodeRenderer: U,
			reelNodeRenderer: V,
			progressStatusRenderer: H,
			tableOverflowConfig: G,
			unsupportedTypeNodeRenderer: D
		}), t[26] = q, t[27] = U, t[28] = V, t[29] = B, t[30] = z) : z = t[30];
		var j = z, K;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (K = {
			plugins: { strong: o("MarkedMobileFlavorPlugin").strong },
			rules: { inline: { del: o("WAWebUnifiedResponseStrikethroughRule").GFM_STRIKETHROUGH_DEL_RULE } }
		}, t[31] = K) : K = t[31];
		var Q = K, X;
		t[32] !== u ? (X = o("WAWebUnifiedResponseUtils").stripEmbeddedScreens(u), t[32] = u, t[33] = X) : X = t[33];
		var Y = X, J = m.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST || m.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER, Z = m.botEditType && I.has(m.botEditType) ? "STREAMING" : null, ee = !v, te = h != null ? h : "auto", ne = _ ? "dark" : "light", re;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (re = { searchResultSourceMismatch: !0 }, t[34] = re) : re = t[34];
		var oe;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (oe = {
			light: C,
			dark: b
		}, t[35] = oe) : oe = t[35];
		var ae;
		t[36] !== i || t[37] !== J || t[38] !== j || t[39] !== Z || t[40] !== ne || t[41] !== Y ? (ae = c.jsx(o("WAWebCometComposedTextV2URParserLoadable").CometComposedTextV2URParserLoadable, {
			displayMode: ne,
			errorFallback: i,
			isStreaming: J,
			logging: re,
			markedTokenizeOptions: Q,
			xmsgGenAiUnifiedResponse: Y,
			themeOverrides: oe,
			streamingState: Z,
			renderers: j
		}), t[36] = i, t[37] = J, t[38] = j, t[39] = Z, t[40] = ne, t[41] = Y, t[42] = ae) : ae = t[42];
		var ie;
		t[43] !== te || t[44] !== ae ? (ie = c.jsx("div", {
			className: o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
			dir: te,
			children: ae
		}), t[43] = te, t[44] = ae, t[45] = ie) : ie = t[45];
		var le;
		t[46] !== m || t[47] !== ee || t[48] !== ie ? (le = c.jsx(r("WAWebMessageSpacerText.react"), {
			msg: m,
			spacer: ee,
			children: ie
		}), t[46] = m, t[47] = ee, t[48] = ie, t[49] = le) : le = t[49];
		var se;
		return t[50] !== n || t[51] !== a || t[52] !== v || t[53] !== l || t[54] !== le ? (se = c.jsx(r("WAWebMessageTextBubble.react"), {
			msg: l,
			displayAuthor: n,
			displayType: a,
			hideMeta: v,
			children: le
		}), t[50] = n, t[51] = a, t[52] = v, t[53] = l, t[54] = le, t[55] = se) : se = t[55], se;
	}
	function D() {
		return c.jsx(k, {});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		return c.jsx(r("WAWebBotShoppingItemCard.react"), babelHelpers.extends({}, e));
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		return c.jsx(r("WAWebBotPostCard.react"), babelHelpers.extends({}, e));
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P(e) {
		var t = e.children, n = e.tag;
		return c.jsx(v, {
			tag: n,
			children: t
		});
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebUnifiedResponseContentDrawerLoadable").WAWebUnifiedResponseContentDrawerLoadable, { contentView: e }));
	}
	function M(e) {
		return c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
			displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel,
			onButtonClick: e
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(e) {
		return c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
			buttonType: o("WAWebChevronButton.react").ButtonType.Next,
			displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel,
			onButtonClick: e
		});
	}
	w.displayName = w.name + " [from " + i.id + "]", l.WAWebUnifiedResponseBubble = T;
}), 226);
