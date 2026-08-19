__d("WAWebStickerPanelContentStickerItem.react", [
	"fbt",
	"WAWebAppContext.react",
	"WAWebAuraGating",
	"WAWebCmd",
	"WAWebCopyStickerToClipboard",
	"WAWebCopyToClipboard",
	"WAWebDropdownItem.react",
	"WAWebEmojiPickerConstants",
	"WAWebFavoriteStickerAction",
	"WAWebFocusTracer",
	"WAWebInMemoryLottieStickerCache",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaStickerUtils",
	"WAWebMiscGatingUtils",
	"WAWebRecentStickerAction",
	"WAWebStateUtils",
	"WAWebSticker.react",
	"WAWebStickerUtils",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnfavoriteRefreshedIcon.react",
	"WAWebUploadRefreshedIcon",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDoNotDisturbOn.react",
	"WDSIconIcFavorite.react",
	"WDSIconWdsIcSticker.react",
	"asyncToGeneratorRuntime",
	"gkx",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebCallbackOnce",
	"useWAWebIntersection",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useRef, g = m.useState, h = {
		container: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		stickerPanel: {
			flexGrow: "x1c4vz4f",
			flexShrink: "xs83m0k",
			height: "xnfxvih",
			$$css: !0
		},
		stickerPanelSizing: {
			flexBasis: "xve2v0a x1ot3tw xrtcgwr x11iwktt x1p2aluo",
			minWidth: "x1i9suas",
			$$css: !0
		},
		stickerPanelSizingThree: {
			flexBasis: "xhnlq4v x1ediwgi xqrdzbz x11iwktt x1p2aluo",
			minWidth: "x1i9suas x13n58ee",
			$$css: !0
		},
		stickerExpressionsPanel: {
			flexGrow: "x1c4vz4f",
			flexShrink: "xs83m0k",
			flexBasis: "xhnlq4v",
			minWidth: "xxsxjwm",
			height: "x14baz6b",
			$$css: !0
		},
		moreSticker: {
			flexBasis: "x15foiic",
			minWidth: "x17y4j5z",
			height: "xwc1p85",
			$$css: !0
		},
		selected: {
			borderStartStartRadius: "xr9e8f9",
			borderStartEndRadius: "x1e4oeot",
			borderEndEndRadius: "x1ui04y5",
			borderEndStartRadius: "x6en5u8",
			boxShadow: "x18fk9y3",
			$$css: !0
		}
	};
	function y(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.downloadErrorShouldThrow, c = i.onDownload, m = i.selected, y = i.theme, b = y === void 0 ? "stickerPanel" : y, v = o("WAWebAppContext.react").useAppContext(), S = v.rightDrawerOpen, R = o("useWAWebModelValues").useModelValues(i.sticker, [
			"id",
			"filehash",
			"mediaData",
			"isPlaceholder",
			"isCreateButton",
			"mimetype"
		]), L = o("useWAWebModelValues").useModelValues(R.mediaData, [
			"stickerPremiumStatus",
			"emojis",
			"accessibilityLabel"
		]), E = C(L.accessibilityLabel, L.emojis), k = f(null), I = r("useWAWebCallbackOnce")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield R.downloadMedia(l), c == null || c(R.id);
		})), T = g(), D = T[0], x = T[1], $ = function() {
			return k.current ? k.current === document.activeElement : !1;
		}, P = function() {
			k.current && ($() || r("WAWebFocusTracer").focus(k.current));
		}, N = function() {
			return k.current ? k.current.offsetTop : 0;
		};
		_(a, function() {
			return {
				hasFocus: $,
				focus: P,
				getOffsetTop: N
			};
		});
		var M = i.onClick ? function(e) {
			var t = i.onClick;
			t && t(o("WAWebStateUtils").unproxy(R), e);
		} : void 0, w = function(t) {
			if (!R.isCreateButton) {
				t.preventDefault();
				var e = i.onEnter;
				e && e(o("WAWebStateUtils").unproxy(R), t);
			}
		}, A = r("useWAWebIntersection")({
			root: null,
			rootMargin: "10px",
			threshold: 0
		}), F = A[0], O = A[1].isIntersecting;
		p(function() {
			O && I();
		}, [O, I]);
		var B = r("useMergeRefs")(k, F), W, q;
		return b !== "stickerDetails" && (W = function(t) {
			var e = [];
			if (!(R.isPlaceholder || R.isCreateButton)) {
				t.preventDefault(), t.stopPropagation(), o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(R.filehash) && i.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES ? e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-remove-favorite-sticker",
					action: function() {
						o("WAWebFavoriteStickerAction").removeStickerFromFavorites(i.sticker);
					},
					icon: d.jsx(o("WAWebUnfavoriteRefreshedIcon.react").UnfavoriteRefreshedIcon, {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "remove-favorite-sticker")) : !o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(R.filehash) && r("WAWebAuraGating").canUsePremiumSticker(R.mediaData.stickerPremiumStatus) && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-add-favorite-sticker",
					action: function() {
						o("WAWebFavoriteStickerAction").addStickerToFavorites(i.sticker);
					},
					icon: d.jsx(r("WDSIconIcFavorite.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "add-favorite-sticker")));
				var n = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(i.sticker.filehash);
				if (o("WAWebStickerUtils").getStickerFileType(R.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
					var a = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(R.filehash);
					a != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-copy-favorite-sticker",
						action: function() {
							o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(a);
						},
						icon: d.jsx(r("WDSIconIcContentCopy.react"), {}),
						children: s._(
							/*BTDS*/
							""
						)
					}, "copy-favorite-sticker"));
				} else n != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-copy-favorite-sticker",
					action: function() {
						o("WAWebCopyToClipboard").copyImageToClipboard(n);
					},
					icon: d.jsx(r("WDSIconIcContentCopy.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "copy-favorite-sticker"));
				o("WAWebMiscGatingUtils").isRecentStickersMDEnabled() && i.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS && o("WAWebRecentStickerAction").isStickerIdInRecent(i.sticker) && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-remove-recent-sticker",
					action: function() {
						o("WAWebRecentStickerAction").removeStickerFromRecent(i.sticker);
					},
					icon: d.jsx(r("WDSIconIcDoNotDisturbOn.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "remove-recent-sticker"));
				var l = R.mediaData, u = l.isFirstParty, c = l.stickerPackId, m = i.dontShowViewPack, p = m === void 0 ? !1 : m;
				p === !1 && c && u === !0 && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-open-sticker-pack",
					action: function() {
						return o("WAWebCmd").Cmd.openStickerPack(c);
					},
					icon: d.jsx(r("WDSIconWdsIcSticker.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "open-sticker-pack")), r("gkx")("26258") || e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-request-sticker-reupload",
					action: function() {
						o("WAWebMediaStickerUtils").requestStickerReupload([i.sticker]);
					},
					icon: d.jsx(r("WAWebUploadRefreshedIcon"), {}),
					children: "[INTERNAL] Request Sticker Reupload"
				}, "request-sticker-reupload")), x({
					menu: e,
					event: t
				});
			}
		}, D && (q = d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				return x(null);
			},
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: D })
		}))), d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: R.isCreateButton ? void 0 : "button",
			"aria-label": R.isCreateButton ? void 0 : E,
			ref: B,
			tabIndex: R.isCreateButton ? void 0 : 0,
			onClick: R.isCreateButton ? void 0 : M,
			className: (u || (u = r("stylex")))({
				"x-default-marker": "x-default-marker",
				$$css: !0
			}, h.container, b === "stickerPanel" && h.stickerPanel, b === "stickerPanel" && (S ? h.stickerPanelSizingThree : h.stickerPanelSizing), b === "stickerExpressionsPanel" && h.stickerExpressionsPanel, b === "stickerExpressionsPanel" && h.moreSticker, m === !0 && h.selected),
			"data-id": "sticker-item",
			onContextMenu: W,
			handlers: {
				enter: w,
				space: w
			},
			children: [d.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "xw7cn0a xbjj16p x1bgewkw x1wy33pe xtt62yn" }
			}[(b === "stickerPanel" || b === "stickerExpressionsPanel") << 0], {
				"data-testid": "sticker-item",
				children: O && d.jsx(r("WAWebSticker.react"), {
					mediaData: R.mediaData,
					onClick: R.isCreateButton ? M : void 0,
					theme: b,
					loopAnimation: !0,
					downloadMedia: I,
					isCreateButton: R.isCreateButton
				})
			})), q]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t) {
		var n = null, r = e == null ? void 0 : e.trim();
		return r != null && r !== "" ? n = r : t != null && t.length > 0 && (n = t.join(" ")), n != null ? s._(
			/*BTDS*/
			"",
			[s._param("sticker_name", n)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
