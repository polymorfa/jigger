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
		var a = o("react-compiler-runtime").c(66), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var c = i, m = c.downloadErrorShouldThrow, y = c.onDownload, b = c.selected, v = c.theme, S = v === void 0 ? "stickerPanel" : v, R = o("WAWebAppContext.react").useAppContext(), L = R.rightDrawerOpen, E;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (E = [
			"id",
			"filehash",
			"mediaData",
			"isPlaceholder",
			"isCreateButton",
			"mimetype"
		], a[3] = E) : E = a[3];
		var k = o("useWAWebModelValues").useModelValues(i.sticker, E), I;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (I = [
			"stickerPremiumStatus",
			"emojis",
			"accessibilityLabel"
		], a[4] = I) : I = a[4];
		var T = o("useWAWebModelValues").useModelValues(k.mediaData, I), D;
		a[5] !== T.accessibilityLabel || a[6] !== T.emojis ? (D = C(T.accessibilityLabel, T.emojis), a[5] = T.accessibilityLabel, a[6] = T.emojis, a[7] = D) : D = a[7];
		var x = D, $ = f(null), P;
		a[8] !== m || a[9] !== y || a[10] !== k ? (P = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield k.downloadMedia(m), y == null || y(k.id);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[8] = m, a[9] = y, a[10] = k, a[11] = P) : P = a[11];
		var N = r("useWAWebCallbackOnce")(P), M = g(), w = M[0], A = M[1], F;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (F = function() {
			return $.current ? $.current === document.activeElement : !1;
		}, a[12] = F) : F = a[12];
		var O = F, B;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			$.current && (O() || r("WAWebFocusTracer").focus($.current));
		}, a[13] = B) : B = a[13];
		var W = B, q;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			return $.current ? $.current.offsetTop : 0;
		}, a[14] = q) : q = a[14];
		var U = q, V;
		a[15] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			return {
				hasFocus: O,
				focus: W,
				getOffsetTop: U
			};
		}, a[15] = V) : V = a[15], _(l, V);
		var H;
		a[16] !== i.onClick || a[17] !== k ? (H = i.onClick ? function(e) {
			var t = i.onClick;
			t && t(o("WAWebStateUtils").unproxy(k), e);
		} : void 0, a[16] = i.onClick, a[17] = k, a[18] = H) : H = a[18];
		var G = H, z;
		a[19] !== i.onEnter || a[20] !== k ? (z = function(t) {
			if (!k.isCreateButton) {
				t.preventDefault();
				var e = i.onEnter;
				e && e(o("WAWebStateUtils").unproxy(k), t);
			}
		}, a[19] = i.onEnter, a[20] = k, a[21] = z) : z = a[21];
		var j = z, K;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (K = {
			root: null,
			rootMargin: "10px",
			threshold: 0
		}, a[22] = K) : K = a[22];
		var Q = r("useWAWebIntersection")(K), X = Q[0], Y = Q[1], J = Y.isIntersecting, Z, ee;
		a[23] !== N || a[24] !== J ? (Z = function() {
			J && N();
		}, ee = [J, N], a[23] = N, a[24] = J, a[25] = Z, a[26] = ee) : (Z = a[25], ee = a[26]), p(Z, ee);
		var te = r("useMergeRefs")($, X), ne, re;
		if (S !== "stickerDetails") {
			var oe;
			if (a[27] !== i || a[28] !== k.filehash || a[29] !== k.isCreateButton || a[30] !== k.isPlaceholder || a[31] !== k.mediaData || a[32] !== k.mimetype ? (oe = function(t) {
				var e = [];
				if (!(k.isPlaceholder || k.isCreateButton)) {
					t.preventDefault(), t.stopPropagation(), o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(k.filehash) && i.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES ? e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-remove-favorite-sticker",
						action: function() {
							o("WAWebFavoriteStickerAction").removeStickerFromFavorites(i.sticker);
						},
						icon: d.jsx(o("WAWebUnfavoriteRefreshedIcon.react").UnfavoriteRefreshedIcon, {}),
						children: s._(
							/*BTDS*/
							""
						)
					}, "remove-favorite-sticker")) : !o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(k.filehash) && r("WAWebAuraGating").canUsePremiumSticker(k.mediaData.stickerPremiumStatus) && e.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
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
					if (o("WAWebStickerUtils").getStickerFileType(k.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
						var a = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(k.filehash);
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
					var l = k.mediaData, u = l.isFirstParty, c = l.stickerPackId, m = i, p = m.dontShowViewPack, _ = p === void 0 ? !1 : p;
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
							o("WAWebMediaStickerUtils").requestStickerReupload([i.sticker]);
						},
						icon: d.jsx(r("WAWebUploadRefreshedIcon"), {}),
						children: "[INTERNAL] Request Sticker Reupload"
					}, "request-sticker-reupload")), A({
						menu: e,
						event: t
					});
				}
			}, a[27] = i, a[28] = k.filehash, a[29] = k.isCreateButton, a[30] = k.isPlaceholder, a[31] = k.mediaData, a[32] = k.mimetype, a[33] = oe) : oe = a[33], ne = oe, w) {
				var ae;
				a[34] === Symbol.for("react.memo_cache_sentinel") ? (ae = function() {
					return A(null);
				}, a[34] = ae) : ae = a[34];
				var ie;
				a[35] !== w ? (ie = d.jsx(o("WAWebUimUie.react").UIE, {
					displayName: "ChatContextMenu",
					escapable: !0,
					popable: !0,
					dismissOnWindowResize: !0,
					requestDismiss: ae,
					children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: w })
				}), a[35] = w, a[36] = ie) : ie = a[36], re = ie;
			}
		}
		var le = k.isCreateButton ? void 0 : "button", se = k.isCreateButton ? void 0 : x, ue = k.isCreateButton ? void 0 : 0, ce = k.isCreateButton ? void 0 : G, de;
		a[37] !== L || a[38] !== b || a[39] !== S ? (de = (u || (u = r("stylex")))({
			"x-default-marker": "x-default-marker",
			$$css: !0
		}, h.container, S === "stickerPanel" && h.stickerPanel, S === "stickerPanel" && (L ? h.stickerPanelSizingThree : h.stickerPanelSizing), S === "stickerExpressionsPanel" && h.stickerExpressionsPanel, S === "stickerExpressionsPanel" && h.moreSticker, b === !0 && h.selected), a[37] = L, a[38] = b, a[39] = S, a[40] = de) : de = a[40];
		var me = ne, pe;
		a[41] !== j ? (pe = {
			enter: j,
			space: j
		}, a[41] = j, a[42] = pe) : pe = a[42];
		var _e;
		a[43] !== S ? (_e = {
			0: {},
			1: { className: "xw7cn0a xbjj16p x1bgewkw x1wy33pe xtt62yn" }
		}[(S === "stickerPanel" || S === "stickerExpressionsPanel") << 0], a[43] = S, a[44] = _e) : _e = a[44];
		var fe;
		a[45] !== N || a[46] !== G || a[47] !== J || a[48] !== k.isCreateButton || a[49] !== k.mediaData || a[50] !== S ? (fe = J && d.jsx(r("WAWebSticker.react"), {
			mediaData: k.mediaData,
			onClick: k.isCreateButton ? G : void 0,
			theme: S,
			loopAnimation: !0,
			downloadMedia: N,
			isCreateButton: k.isCreateButton
		}), a[45] = N, a[46] = G, a[47] = J, a[48] = k.isCreateButton, a[49] = k.mediaData, a[50] = S, a[51] = fe) : fe = a[51];
		var ge;
		a[52] !== _e || a[53] !== fe ? (ge = d.jsx("div", babelHelpers.extends({}, _e, {
			"data-testid": "sticker-item",
			children: fe
		})), a[52] = _e, a[53] = fe, a[54] = ge) : ge = a[54];
		var he;
		return a[55] !== ne || a[56] !== te || a[57] !== le || a[58] !== se || a[59] !== ue || a[60] !== ce || a[61] !== de || a[62] !== pe || a[63] !== ge || a[64] !== re ? (he = d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			role: le,
			"aria-label": se,
			ref: te,
			tabIndex: ue,
			onClick: ce,
			className: de,
			"data-id": "sticker-item",
			onContextMenu: me,
			handlers: pe,
			children: [ge, re]
		}), a[55] = ne, a[56] = te, a[57] = le, a[58] = se, a[59] = ue, a[60] = ce, a[61] = de, a[62] = pe, a[63] = ge, a[64] = re, a[65] = he) : he = a[65], he;
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
