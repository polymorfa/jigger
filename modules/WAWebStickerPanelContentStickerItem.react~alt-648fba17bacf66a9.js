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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.downloadErrorShouldThrow, l = a.onDownload, c = a.selected, m = a.theme, y = m === void 0 ? "stickerPanel" : m, b = o("WAWebAppContext.react").useAppContext(), v = b.rightDrawerOpen, S = o("useWAWebModelValues").useModelValues(a.sticker, [
			"id",
			"filehash",
			"mediaData",
			"isPlaceholder",
			"isCreateButton",
			"mimetype"
		]), R = o("useWAWebModelValues").useModelValues(S.mediaData, [
			"stickerPremiumStatus",
			"emojis",
			"accessibilityLabel"
		]), L = C(R.accessibilityLabel, R.emojis), E = f(null), k = r("useWAWebCallbackOnce")(async function() {
			await S.downloadMedia(i), l == null || l(S.id);
		}), I = g(), T = I[0], D = I[1], x = function() {
			return E.current ? E.current === document.activeElement : !1;
		}, $ = function() {
			E.current && (x() || r("WAWebFocusTracer").focus(E.current));
		}, P = function() {
			return E.current ? E.current.offsetTop : 0;
		};
		_(n, function() {
			return {
				hasFocus: x,
				focus: $,
				getOffsetTop: P
			};
		});
		var N = a.onClick ? function(e) {
			var t = a.onClick;
			t && t(o("WAWebStateUtils").unproxy(S), e);
		} : void 0, M = function(t) {
			if (!S.isCreateButton) {
				t.preventDefault();
				var e = a.onEnter;
				e && e(o("WAWebStateUtils").unproxy(S), t);
			}
		}, w = r("useWAWebIntersection")({
			root: null,
			rootMargin: "10px",
			threshold: 0
		}), A = w[0], F = w[1].isIntersecting;
		p(function() {
			F && k();
		}, [F, k]);
		var O = r("useMergeRefs")(E, A), B, W;
		return y !== "stickerDetails" && (B = function(t) {
			var e = [];
			if (!(S.isPlaceholder || S.isCreateButton)) {
				t.preventDefault(), t.stopPropagation(), o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(S.filehash) && a.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES ? e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-remove-favorite-sticker",
					action: function() {
						o("WAWebFavoriteStickerAction").removeStickerFromFavorites(a.sticker);
					},
					icon: d.jsx(o("WAWebUnfavoriteRefreshedIcon.react").UnfavoriteRefreshedIcon, {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "remove-favorite-sticker")) : !o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(S.filehash) && r("WAWebAuraGating").canUsePremiumSticker(S.mediaData.stickerPremiumStatus) && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-add-favorite-sticker",
					action: function() {
						o("WAWebFavoriteStickerAction").addStickerToFavorites(a.sticker);
					},
					icon: d.jsx(r("WDSIconIcFavorite.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "add-favorite-sticker")));
				var n = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(a.sticker.filehash);
				if (o("WAWebStickerUtils").getStickerFileType(S.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
					var i = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(S.filehash);
					i != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-copy-favorite-sticker",
						action: function() {
							o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(i);
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
				o("WAWebMiscGatingUtils").isRecentStickersMDEnabled() && a.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS && o("WAWebRecentStickerAction").isStickerIdInRecent(a.sticker) && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-remove-recent-sticker",
					action: function() {
						o("WAWebRecentStickerAction").removeStickerFromRecent(a.sticker);
					},
					icon: d.jsx(r("WDSIconIcDoNotDisturbOn.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "remove-recent-sticker"));
				var l = S.mediaData, u = l.isFirstParty, c = l.stickerPackId, m = a.dontShowViewPack, p = m === void 0 ? !1 : m;
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
						o("WAWebMediaStickerUtils").requestStickerReupload([a.sticker]);
					},
					icon: d.jsx(r("WAWebUploadRefreshedIcon"), {}),
					children: "[INTERNAL] Request Sticker Reupload"
				}, "request-sticker-reupload")), D({
					menu: e,
					event: t
				});
			}
		}, T && (W = d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				return D(null);
			},
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: T })
		}))), d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: S.isCreateButton ? void 0 : "button",
			"aria-label": S.isCreateButton ? void 0 : L,
			ref: O,
			tabIndex: S.isCreateButton ? void 0 : 0,
			onClick: S.isCreateButton ? void 0 : N,
			className: (u || (u = r("stylex")))({
				"x-default-marker": "x-default-marker",
				$$css: !0
			}, h.container, y === "stickerPanel" && h.stickerPanel, y === "stickerPanel" && (v ? h.stickerPanelSizingThree : h.stickerPanelSizing), y === "stickerExpressionsPanel" && h.stickerExpressionsPanel, y === "stickerExpressionsPanel" && h.moreSticker, c === !0 && h.selected),
			"data-id": "sticker-item",
			onContextMenu: B,
			handlers: {
				enter: M,
				space: M
			},
			children: [d.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "xw7cn0a xbjj16p x1bgewkw x1wy33pe xtt62yn" }
			}[(y === "stickerPanel" || y === "stickerExpressionsPanel") << 0], {
				"data-testid": "sticker-item",
				children: F && d.jsx(r("WAWebSticker.react"), {
					mediaData: S.mediaData,
					onClick: S.isCreateButton ? N : void 0,
					theme: y,
					loopAnimation: !0,
					downloadMedia: k,
					isCreateButton: S.isCreateButton
				})
			})), W]
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
