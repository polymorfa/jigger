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
		var t = e.children, n = e.tag, o = n === "h1" ? "LargeTitle1" : n === "h2" ? "LargeTitle2" : n === "h3" ? "Headline1" : n === "h4" ? "Headline2" : n === "h5" ? "Body1Emphasized" : n === "h6" ? "Body1" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		})();
		return c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: o,
			children: t
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = 9 / 16, R = o("WAWebMessageCropping").IMAGINE_UR_WIDTH - 6;
	function L(t) {
		var n = t.mediaUrl, a = g(null), i = a[0], l = a[1], s = {
			videoUrl: n,
			previewUrl: ""
		}, u = i != null ? i : S, d = R / u;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.imagineContainer, h.imagineContainerHeight(d)), { children: c.jsx(o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer, {
			type: o("WAWebPipConst").PlayerType.OG_INLINE_PLAYER,
			ogVideoInfo: s,
			startTime: null,
			autoPlay: !1,
			noPip: !0,
			onAspectRatio: l
		}) }));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.imagineType, n = e.mediaUrl, a = e.msgId, i = String(t) === "ANIMATE";
		return n == null || n === "" ? i ? c.jsx(r("WAWebImagineVideoGenerating.react"), { msgId: a }) : c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.container,
			children: s._(
				/*BTDS*/
				""
			)
		}) : i ? c.jsx(L, { mediaUrl: n }) : c.jsx(r("WAWebImagineURImage.react"), { mediaUrl: n });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		return c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.container,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = new Set([
		o("WAWebBotTypes").BotMsgEditType.FIRST,
		o("WAWebBotTypes").BotMsgEditType.INNER,
		o("WAWebBotTypes").BotMsgEditType.LAST
	]);
	function T(e) {
		var t = e.displayAuthor, n = e.displayType, a = e.errorFallback, i = e.msg, l = e.unifiedResponse, u = i.unsafe();
		o("WAWebUseBotMessageUpdateScrolling").useBotMessageUpdateScrolling(u);
		var d = o("WAWebThemeContext").useIsDarkTheme(), g = o("WAWebFrontendMsgGetters").getDir(i), h = o("WAWebUnifiedResponseUtils").isQuotaUpsellResponse(l) && o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled(), y = f(null);
		if (y.current == null) {
			var S = new (o("WAWebUnifiedResponseUtils")).UnifiedResponseQPLLogger();
			S.markerStart({ string: { component_name: "WAWebUnifiedResponseBubble" } }), y.current = S;
		}
		p(function() {
			var e;
			(e = y.current) == null || e.markerEnd(2);
		}, []);
		var R = {
			nextButton: function(t) {
				return c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
					buttonType: o("WAWebChevronButton.react").ButtonType.Next,
					displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel,
					onButtonClick: t
				});
			},
			prevButton: function(t) {
				return c.jsx(o("WAWebCarouselNavigationButton").CarouselNavigationButton, {
					buttonType: o("WAWebChevronButton.react").ButtonType.Prev,
					displayType: o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel,
					onButtonClick: t
				});
			}
		}, L = m(function(e) {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebUnifiedResponseContentDrawerLoadable").WAWebUnifiedResponseContentDrawerLoadable, { contentView: e }));
		}, []), T = babelHelpers.extends({}, o("WAWebUnifiedResponseCitationRenderers.react").getUnifiedResponseCitationRenderers(), {
			focusRingXStyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
			headingNodeRenderer: function(t) {
				var e = t.children, n = t.tag;
				return c.jsx(v, {
					tag: n,
					children: e
				});
			},
			hScrollRenderers: R,
			imagineNodeRenderer: function(t) {
				var e = t.imagineType, n = t.mediaUrl;
				return c.jsx(E, {
					imagineType: e,
					mediaUrl: n,
					msgId: u.id
				});
			},
			contentViewRenderer: {
				contentTriggerTextValues: { citations: s._(
					/*BTDS*/
					""
				) },
				renderer: L
			},
			postNodeRenderer: function(t) {
				return c.jsx(r("WAWebBotPostCard.react"), babelHelpers.extends({}, t));
			},
			productItemCardNodeRenderer: function(t) {
				return c.jsx(r("WAWebBotShoppingItemCard.react"), babelHelpers.extends({}, t));
			},
			quotaUpsellNodeRenderer: h ? function(e) {
				return c.jsx(r("WAWebQuotaUpsellBubble.react"), babelHelpers.extends({}, e, {
					benefitType: o("WAWebUnifiedResponseUtils").getQuotaUpsellBenefitType(l),
					msgId: u.id.toString(),
					metaSlot: c.jsx(o("WAWebMessageMeta.react").Meta, {
						msg: i,
						displayType: n
					})
				}));
			} : void 0,
			foABloksNodeRenderer: o("WAWebBotUnifiedResponseGating").isFoABloksNodeRendererEnabled() ? function(e) {
				var t = e.data, n = e.type, r = e.uuid;
				return c.jsx(o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable, {
					componentData: t,
					componentType: n,
					theme: d ? "dark" : "light",
					uuid: r
				});
			} : void 0,
			reelNodeRenderer: function(t) {
				var e = t.avatarUrl, n = t.creator, r = t.reelsUrl, a = t.thumbnailUrl;
				return c.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN,
					msg: u,
					reelItem: {
						profileIconUrl: e,
						thumbnailUrl: a,
						title: n,
						videoUrl: r
					},
					theme: "bot_plugin_link"
				});
			},
			progressStatusRenderer: {
				shimmerColor: "color-mix(in srgb, " + o("WDSVars.stylex").WDSVars["--WDS-content-default"] + " 15%, transparent)",
				textColor: o("WDSVars.stylex").WDSVars["--WDS-content-default"]
			},
			tableOverflowConfig: {
				overflowCellCount: 4,
				overflowCellSize: 150
			},
			unsupportedTypeNodeRenderer: function() {
				return c.jsx(k, {});
			}
		}), D = _(function() {
			return {
				plugins: { strong: o("MarkedMobileFlavorPlugin").strong },
				rules: { inline: { del: o("WAWebUnifiedResponseStrikethroughRule").GFM_STRIKETHROUGH_DEL_RULE } }
			};
		}, []), x = _(function() {
			return o("WAWebUnifiedResponseUtils").stripEmbeddedScreens(l);
		}, [l]), $ = u.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST || u.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER, P = u.botEditType && I.has(u.botEditType) ? "STREAMING" : null;
		return c.jsx(r("WAWebMessageTextBubble.react"), {
			msg: i,
			displayAuthor: t,
			displayType: n,
			hideMeta: h,
			children: c.jsx(r("WAWebMessageSpacerText.react"), {
				msg: u,
				spacer: !h,
				children: c.jsx("div", {
					className: o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
					dir: g != null ? g : "auto",
					children: c.jsx(o("WAWebCometComposedTextV2URParserLoadable").CometComposedTextV2URParserLoadable, {
						displayMode: d ? "dark" : "light",
						errorFallback: a,
						isStreaming: $,
						logging: { searchResultSourceMismatch: !0 },
						markedTokenizeOptions: D,
						xmsgGenAiUnifiedResponse: x,
						themeOverrides: {
							light: C,
							dark: b
						},
						streamingState: P,
						renderers: T
					})
				})
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.WAWebUnifiedResponseBubble = T;
}), 226);
