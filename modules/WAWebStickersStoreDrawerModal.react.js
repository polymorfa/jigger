__d("WAWebStickersStoreDrawerModal.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebSpinner.react",
	"WAWebStickerPackCollectionMd",
	"WAWebStickerStoreStickerPackList.react",
	"WAWebText_DONOTUSE.react",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"countWhere",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebWaPlusBenefitJourneyViewOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { spinner: {
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		minHeight: "xvv2zd5",
		$$css: !0
	} };
	function d() {
		var e = r("useWAWebEventTargetValue")(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "add remove reset", m);
		return e;
	}
	function m() {
		return o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.filter(p);
	}
	function p(e) {
		return e.index != null;
	}
	function _() {
		return r("useWAWebEventTargetValue")(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "change:fetchState", f);
	}
	function f() {
		return o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchState === o("WAWebStickerPackCollectionMd").FetchState.SUCCESS;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(21), n = e.onClose, a = e.onStickerPackDetails, i = e.ref, l = d(), m = _(), p;
		t[0] !== l ? (p = r("countWhere")(l, h), t[0] = l, t[1] = p) : p = t[1];
		var f = p, g;
		t[2] !== f ? (g = { premium_packs_fetched_count: f }, t[2] = f, t[3] = g) : g = t[3];
		var y;
		t[4] !== m || t[5] !== g ? (y = {
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_STORE,
			enabled: m,
			customFields: g
		}, t[4] = m, t[5] = g, t[6] = y) : y = t[6], r("useWAWebWaPlusBenefitJourneyViewOnMount")(y);
		var C;
		if (l.length === 0) {
			var b;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				theme: "plain",
				xstyle: c.spinner,
				children: u.jsx(o("WAWebSpinner.react").Spinner, {
					size: 50,
					stroke: 4
				})
			}), t[7] = b) : b = t[7], C = b;
		}
		var v;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[8] = v) : v = t[8];
		var S;
		t[9] !== n ? (S = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: v,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onCancel: n
		}), t[9] = n, t[10] = S) : S = t[10];
		var R;
		t[11] !== a || t[12] !== l ? (R = u.jsx(r("WAWebStickerStoreStickerPackList.react"), {
			stickerPacks: l,
			onStickerPackDetails: a
		}), t[11] = a, t[12] = l, t[13] = R) : R = t[13];
		var L;
		t[14] !== C || t[15] !== R ? (L = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "no-padding",
			children: [C, R]
		}) }), t[14] = C, t[15] = R, t[16] = L) : L = t[16];
		var E;
		return t[17] !== i || t[18] !== S || t[19] !== L ? (E = u.jsxs(r("WAWebDrawer.react"), {
			theme: "sticker-store",
			ref: i,
			testid: "sticker-drawer-sticker-store",
			children: [S, L]
		}, "sticker-store-modal"), t[17] = i, t[18] = S, t[19] = L, t[20] = E) : E = t[20], E;
	}
	function h(e) {
		return e.premium > 0;
	}
	l.default = g;
}), 226);
