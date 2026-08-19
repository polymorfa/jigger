__d("WAWebMediaGalleryDrawer.react", [
	"fbt",
	"$InternalEnum",
	"WAWebABProps",
	"WAWebActionToast.react",
	"WAWebChatProductMsgsCollection",
	"WAWebDocGallery.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebLinkGallery.react",
	"WAWebMediaGallery.react",
	"WAWebMultiSelectBar.react",
	"WAWebMultiSelection",
	"WAWebProductGallery.react",
	"WAWebTabs.react",
	"WAWebUimUie.react",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebDebouncedSearch"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = d.useState, g = {
		tabs: {
			backgroundColor: "x1c7u0tx",
			borderBottomWidth: "x1co6499",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "xkveyfu",
			$$css: !0
		},
		tabXStyle: {
			borderBottomColor: "x16stqrj",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xv7zg05",
			$$css: !0
		},
		tabHovered: {
			borderBottomColor: "xhl97hz",
			$$css: !0
		},
		tabSelected: {
			borderBottomColor: "x1rrvw3c",
			paddingTop: "xexx8yu",
			$$css: !0
		}
	}, h = { surface: "media-drawer" }, y = n("$InternalEnum")({
		MEDIA: "media",
		DOCS: "docs",
		LINKS: "links",
		PRODUCTS: "products"
	}), C = [y.MEDIA, y.DOCS];
	function b(e) {
		var t = o("react-compiler-runtime").c(44);
		switch (e.selectedTab) {
			case y.MEDIA: {
				var n = e.chat, a;
				t[0] !== e.chat ? (a = e.chat.getMediaMsgs(), t[0] = e.chat, t[1] = a) : a = t[1];
				var i;
				return t[2] !== e.chat || t[3] !== e.filterText || t[4] !== e.isFilterEnabled || t[5] !== e.onMessageSelect || t[6] !== e.selectable || t[7] !== e.selectedMessages || t[8] !== e.threadId || t[9] !== a ? (i = c.jsx(r("WAWebMediaGallery.react"), {
					chat: n,
					mediaMsgs: a,
					selectable: e.selectable,
					onMessageSelect: e.onMessageSelect,
					selectedMessages: e.selectedMessages,
					fullCollection: !0,
					isFilterEnabled: e.isFilterEnabled,
					filterText: e.filterText,
					threadId: e.threadId
				}), t[2] = e.chat, t[3] = e.filterText, t[4] = e.isFilterEnabled, t[5] = e.onMessageSelect, t[6] = e.selectable, t[7] = e.selectedMessages, t[8] = e.threadId, t[9] = a, t[10] = i) : i = t[10], i;
			}
			case y.LINKS: {
				var l = e.chat, s;
				t[11] !== e.chat ? (s = e.chat.getLinkMsgs(), t[11] = e.chat, t[12] = s) : s = t[12];
				var u;
				return t[13] !== e.chat || t[14] !== e.filterText || t[15] !== e.isFilterEnabled || t[16] !== e.onMessageSelect || t[17] !== e.selectable || t[18] !== e.selectedMessages || t[19] !== e.threadId || t[20] !== s ? (u = c.jsx(r("WAWebLinkGallery.react"), {
					chat: l,
					linkMsgs: s,
					selectable: e.selectable,
					onMessageSelect: e.onMessageSelect,
					selectedMessages: e.selectedMessages,
					isFilterEnabled: e.isFilterEnabled,
					filterText: e.filterText,
					threadId: e.threadId
				}), t[13] = e.chat, t[14] = e.filterText, t[15] = e.isFilterEnabled, t[16] = e.onMessageSelect, t[17] = e.selectable, t[18] = e.selectedMessages, t[19] = e.threadId, t[20] = s, t[21] = u) : u = t[21], u;
			}
			case y.DOCS: {
				var d = e.chat, m;
				t[22] !== e.chat ? (m = e.chat.getDocMsgs(), t[22] = e.chat, t[23] = m) : m = t[23];
				var p;
				return t[24] !== e.chat || t[25] !== e.filterText || t[26] !== e.isFilterEnabled || t[27] !== e.onMessageSelect || t[28] !== e.selectable || t[29] !== e.selectedMessages || t[30] !== e.threadId || t[31] !== m ? (p = c.jsx(r("WAWebDocGallery.react"), {
					chat: d,
					docMsgs: m,
					selectable: e.selectable,
					onMessageSelect: e.onMessageSelect,
					selectedMessages: e.selectedMessages,
					isFilterEnabled: e.isFilterEnabled,
					filterText: e.filterText,
					threadId: e.threadId
				}), t[24] = e.chat, t[25] = e.filterText, t[26] = e.isFilterEnabled, t[27] = e.onMessageSelect, t[28] = e.selectable, t[29] = e.selectedMessages, t[30] = e.threadId, t[31] = m, t[32] = p) : p = t[32], p;
			}
			case y.PRODUCTS: {
				var _ = e.chat, f;
				t[33] !== e.chat ? (f = R(e.chat), t[33] = e.chat, t[34] = f) : f = t[34];
				var g;
				return t[35] !== e.chat || t[36] !== e.onMessageSelect || t[37] !== e.onProductDetail || t[38] !== e.scrollOffset || t[39] !== e.selectable || t[40] !== e.selectedMessages || t[41] !== e.setScrollOffset || t[42] !== f ? (g = c.jsx(r("WAWebProductGallery.react"), {
					chat: _,
					productMsgs: f,
					selectable: e.selectable,
					onMessageSelect: e.onMessageSelect,
					selectedMessages: e.selectedMessages,
					onProductDetail: e.onProductDetail,
					setScrollOffset: e.setScrollOffset,
					scrollOffset: e.scrollOffset
				}), t[35] = e.chat, t[36] = e.onMessageSelect, t[37] = e.onProductDetail, t[38] = e.scrollOffset, t[39] = e.selectable, t[40] = e.selectedMessages, t[41] = e.setScrollOffset, t[42] = f, t[43] = g) : g = t[43], g;
			}
		}
	}
	function v(e) {
		switch (e) {
			case y.MEDIA: return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.MEDIA;
			case y.DOCS: return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.DOCS;
			case y.LINKS: return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.LINKS;
			case y.PRODUCTS: return o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.PRODUCTS;
		}
	}
	function S(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onProductDetail, u = a.setProductsScrollOffset, d = a.initialTab, S = d === void 0 ? y.MEDIA : d, L = a.productsScrollOffset, E = L === void 0 ? 0 : L, k = a.threadId, I = f(S), T = I[0], D = I[1], x = f(!1), $ = x[0], P = x[1], N = r("useWAWebDebouncedSearch")(), M = N[0], w = N[1], A = o("WAWebABProps").getABPropConfigValue("web_abprop_media_links_docs_search"), F = r("useLazyRef")(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}), O = _(null), B = function() {
			$ || P(!0);
		}, W = function() {
			$ && (F.current.unsetAll(), O.current = null, P(!1));
		}, q = m(function(e, t, n) {
			var r = T === y.MEDIA ? i.getMediaMsgs() : T === y.LINKS ? i.getLinkMsgs() : T === y.DOCS ? i.getDocMsgs() : T === y.PRODUCTS ? R(i) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + T);
			})(), o = r.indexOf(e), a = r.indexOf(t);
			if (!(o < 0 || a < 0)) for (var l = Math.min(o, a), s = Math.max(o, a), u = l; u <= s; u++) {
				var c = r.at(u);
				c != null && F.current.setVal(c, n);
			}
		}, [
			T,
			i,
			F
		]), U = function(t, n, r) {
			B();
			var e = O.current, o = (r == null ? void 0 : r.shiftKey) === !0;
			F.current.setVal(t, n), o && e != null && q(e, t, n), O.current = t, F.current.getSelected().length === 0 && W();
		}, V = m(function(e) {
			var t = y.cast(e);
			if (t != null) {
				var n = Array.from(y.members()), r = n.indexOf(T), o = n.indexOf(t);
				r !== o && F.current.unsetAll(), D(t), P(!1);
			}
		}, [F, T]), H = p(function() {
			var e = [
				{
					id: y.MEDIA,
					title: s._(
						/*BTDS*/
						""
					)
				},
				{
					id: y.DOCS,
					title: s._(
						/*BTDS*/
						""
					)
				},
				{
					id: y.LINKS,
					title: s._(
						/*BTDS*/
						""
					)
				}
			];
			return R(i).length > 0 && e.push({
				id: y.PRODUCTS,
				title: s._(
					/*BTDS*/
					""
				)
			}), c.jsx(r("WAWebTabs.react"), {
				tabConfigs: e,
				selectedId: T,
				onSelect: V,
				testIdPrefix: "gallery-tab",
				xstyle: g.tabs,
				tabXstyle: g.tabXStyle,
				hoveredXStyle: g.tabHovered,
				selectedXStyle: g.tabSelected,
				getTitleProps: function(t, n) {
					return {
						color: t || n ? "wdsContentDefault" : "wdsContentDeemphasized",
						weight: t || n ? "medium" : void 0
					};
				}
			});
		}, [
			T,
			V,
			i
		]), G = v(T), z = C.includes(T), j = $ ? c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MediaMultiSelect",
			escapable: !0,
			requestDismiss: W,
			children: c.jsx(o("WAWebMultiSelectBar.react").MultiSelectBar, {
				chat: i,
				noSortOnForward: !0,
				theme: "mediaGallery",
				toastPosition: o("WAWebActionToast.react").ToastPosition.RIGHT,
				downloadButton: z,
				selectedMessages: F.current,
				onCancel: W,
				entryPoint: G,
				mode: o("WAWebMultiSelectBar.react").MultiSelectMode.DEFAULT
			})
		}) : null;
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "gallery",
			testid: "media-gallery-drawer",
			tsNavigationData: h,
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: " ",
					onBack: a.onBack,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0
				}),
				j,
				H,
				c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("div", {
					className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x5yr21d",
					children: c.jsx(b, {
						chat: i,
						selectable: $,
						onMessageSelect: U,
						selectedMessages: F.current,
						fullCollection: !0,
						isFilterEnabled: A,
						filterText: M,
						onProductDetail: l,
						setScrollOffset: u,
						scrollOffset: E,
						selectedTab: T,
						mediaMsgs: i.getMediaMsgs(),
						linkMsgs: i.getLinkMsgs(),
						docMsgs: i.getDocMsgs(),
						productMsgs: R(i),
						threadId: k
					})
				}) })
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		return e.productMsgs || (e.productMsgs = new (r("WAWebChatProductMsgsCollection"))()), e.productMsgs;
	}
	l.GalleryDrawerTabs = y, l.MediaGalleryDrawer = S;
}), 226);
