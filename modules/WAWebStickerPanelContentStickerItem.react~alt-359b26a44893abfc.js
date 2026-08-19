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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(66), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, c = l.downloadErrorShouldThrow, m = l.onDownload, y = l.selected, b = l.theme, v = b === void 0 ? "stickerPanel" : b, S = o("WAWebAppContext.react").useAppContext(), R = S.rightDrawerOpen, L;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (L = [
			"id",
			"filehash",
			"mediaData",
			"isPlaceholder",
			"isCreateButton",
			"mimetype"
		], n[3] = L) : L = n[3];
		var E = o("useWAWebModelValues").useModelValues(a.sticker, L), k;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (k = [
			"stickerPremiumStatus",
			"emojis",
			"accessibilityLabel"
		], n[4] = k) : k = n[4];
		var I = o("useWAWebModelValues").useModelValues(E.mediaData, k), T;
		n[5] !== I.accessibilityLabel || n[6] !== I.emojis ? (T = C(I.accessibilityLabel, I.emojis), n[5] = I.accessibilityLabel, n[6] = I.emojis, n[7] = T) : T = n[7];
		var D = T, x = f(null), $;
		n[8] !== c || n[9] !== m || n[10] !== E ? ($ = async function() {
			await E.downloadMedia(c), m == null || m(E.id);
		}, n[8] = c, n[9] = m, n[10] = E, n[11] = $) : $ = n[11];
		var P = r("useWAWebCallbackOnce")($), N = g(), M = N[0], w = N[1], A;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			return x.current ? x.current === document.activeElement : !1;
		}, n[12] = A) : A = n[12];
		var F = A, O;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (O = function() {
			x.current && (F() || r("WAWebFocusTracer").focus(x.current));
		}, n[13] = O) : O = n[13];
		var B = O, W;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (W = function() {
			return x.current ? x.current.offsetTop : 0;
		}, n[14] = W) : W = n[14];
		var q = W, U;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (U = function() {
			return {
				hasFocus: F,
				focus: B,
				getOffsetTop: q
			};
		}, n[15] = U) : U = n[15], _(i, U);
		var V;
		n[16] !== a.onClick || n[17] !== E ? (V = a.onClick ? function(e) {
			var t = a.onClick;
			t && t(o("WAWebStateUtils").unproxy(E), e);
		} : void 0, n[16] = a.onClick, n[17] = E, n[18] = V) : V = n[18];
		var H = V, G;
		n[19] !== a.onEnter || n[20] !== E ? (G = function(t) {
			if (!E.isCreateButton) {
				t.preventDefault();
				var e = a.onEnter;
				e && e(o("WAWebStateUtils").unproxy(E), t);
			}
		}, n[19] = a.onEnter, n[20] = E, n[21] = G) : G = n[21];
		var z = G, j;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (j = {
			root: null,
			rootMargin: "10px",
			threshold: 0
		}, n[22] = j) : j = n[22];
		var K = r("useWAWebIntersection")(j), Q = K[0], X = K[1], Y = X.isIntersecting, J, Z;
		n[23] !== P || n[24] !== Y ? (J = function() {
			Y && P();
		}, Z = [Y, P], n[23] = P, n[24] = Y, n[25] = J, n[26] = Z) : (J = n[25], Z = n[26]), p(J, Z);
		var ee = r("useMergeRefs")(x, Q), te, ne;
		if (v !== "stickerDetails") {
			var re;
			if (n[27] !== a || n[28] !== E.filehash || n[29] !== E.isCreateButton || n[30] !== E.isPlaceholder || n[31] !== E.mediaData || n[32] !== E.mimetype ? (re = function(t) {
				var e = [];
				if (!(E.isPlaceholder || E.isCreateButton)) {
					t.preventDefault(), t.stopPropagation(), o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(E.filehash) && a.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES ? e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-remove-favorite-sticker",
						action: function() {
							o("WAWebFavoriteStickerAction").removeStickerFromFavorites(a.sticker);
						},
						icon: d.jsx(o("WAWebUnfavoriteRefreshedIcon.react").UnfavoriteRefreshedIcon, {}),
						children: s._(
							/*BTDS*/
							""
						)
					}, "remove-favorite-sticker")) : !o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(E.filehash) && r("WAWebAuraGating").canUsePremiumSticker(E.mediaData.stickerPremiumStatus) && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
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
					if (o("WAWebStickerUtils").getStickerFileType(E.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
						var i = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(E.filehash);
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
					var l = E.mediaData, u = l.isFirstParty, c = l.stickerPackId, m = a, p = m.dontShowViewPack, _ = p === void 0 ? !1 : p;
					_ === !1 && c && u === !0 && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
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
					}, "request-sticker-reupload")), w({
						menu: e,
						event: t
					});
				}
			}, n[27] = a, n[28] = E.filehash, n[29] = E.isCreateButton, n[30] = E.isPlaceholder, n[31] = E.mediaData, n[32] = E.mimetype, n[33] = re) : re = n[33], te = re, M) {
				var oe;
				n[34] === Symbol.for("react.memo_cache_sentinel") ? (oe = function() {
					return w(null);
				}, n[34] = oe) : oe = n[34];
				var ae;
				n[35] !== M ? (ae = d.jsx(o("WAWebUimUie.react").UIE, {
					displayName: "ChatContextMenu",
					escapable: !0,
					popable: !0,
					dismissOnWindowResize: !0,
					requestDismiss: oe,
					children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: M })
				}), n[35] = M, n[36] = ae) : ae = n[36], ne = ae;
			}
		}
		var ie = E.isCreateButton ? void 0 : "button", le = E.isCreateButton ? void 0 : D, se = E.isCreateButton ? void 0 : 0, ue = E.isCreateButton ? void 0 : H, ce;
		n[37] !== R || n[38] !== y || n[39] !== v ? (ce = (u || (u = r("stylex")))({
			"x-default-marker": "x-default-marker",
			$$css: !0
		}, h.container, v === "stickerPanel" && h.stickerPanel, v === "stickerPanel" && (R ? h.stickerPanelSizingThree : h.stickerPanelSizing), v === "stickerExpressionsPanel" && h.stickerExpressionsPanel, v === "stickerExpressionsPanel" && h.moreSticker, y === !0 && h.selected), n[37] = R, n[38] = y, n[39] = v, n[40] = ce) : ce = n[40];
		var de = te, me;
		n[41] !== z ? (me = {
			enter: z,
			space: z
		}, n[41] = z, n[42] = me) : me = n[42];
		var pe;
		n[43] !== v ? (pe = {
			0: {},
			1: { className: "xw7cn0a xbjj16p x1bgewkw x1wy33pe xtt62yn" }
		}[(v === "stickerPanel" || v === "stickerExpressionsPanel") << 0], n[43] = v, n[44] = pe) : pe = n[44];
		var _e;
		n[45] !== P || n[46] !== H || n[47] !== Y || n[48] !== E.isCreateButton || n[49] !== E.mediaData || n[50] !== v ? (_e = Y && d.jsx(r("WAWebSticker.react"), {
			mediaData: E.mediaData,
			onClick: E.isCreateButton ? H : void 0,
			theme: v,
			loopAnimation: !0,
			downloadMedia: P,
			isCreateButton: E.isCreateButton
		}), n[45] = P, n[46] = H, n[47] = Y, n[48] = E.isCreateButton, n[49] = E.mediaData, n[50] = v, n[51] = _e) : _e = n[51];
		var fe;
		n[52] !== pe || n[53] !== _e ? (fe = d.jsx("div", babelHelpers.extends({}, pe, {
			"data-testid": "sticker-item",
			children: _e
		})), n[52] = pe, n[53] = _e, n[54] = fe) : fe = n[54];
		var ge;
		return n[55] !== te || n[56] !== ee || n[57] !== ie || n[58] !== le || n[59] !== se || n[60] !== ue || n[61] !== ce || n[62] !== me || n[63] !== fe || n[64] !== ne ? (ge = d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: ie,
			"aria-label": le,
			ref: ee,
			tabIndex: se,
			onClick: ue,
			className: ce,
			"data-id": "sticker-item",
			onContextMenu: de,
			handlers: me,
			children: [fe, ne]
		}), n[55] = te, n[56] = ee, n[57] = ie, n[58] = le, n[59] = se, n[60] = ue, n[61] = ce, n[62] = me, n[63] = fe, n[64] = ne, n[65] = ge) : ge = n[65], ge;
	}
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
