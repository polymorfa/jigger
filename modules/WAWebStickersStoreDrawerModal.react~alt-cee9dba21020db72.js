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
		var e = r("useWAWebEventTargetValue")(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "add remove reset", function() {
			return o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.filter(function(e) {
				return e.index != null;
			});
		});
		return e;
	}
	function m() {
		return r("useWAWebEventTargetValue")(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "change:fetchState", function() {
			return o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchState === o("WAWebStickerPackCollectionMd").FetchState.SUCCESS;
		});
	}
	function p(e) {
		var t = e.onClose, n = e.onStickerPackDetails, a = e.ref, i = d(), l = m(), p = r("countWhere")(i, function(e) {
			return e.premium > 0;
		});
		r("useWAWebWaPlusBenefitJourneyViewOnMount")({
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_STORE,
			enabled: l,
			customFields: { premium_packs_fetched_count: p }
		});
		var _;
		return i.length === 0 && (_ = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			xstyle: c.spinner,
			children: u.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4
			})
		})), u.jsxs(r("WAWebDrawer.react"), {
			theme: "sticker-store",
			ref: a,
			testid: "sticker-drawer-sticker-store",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onCancel: t
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "no-padding",
				children: [_, u.jsx(r("WAWebStickerStoreStickerPackList.react"), {
					stickerPacks: i,
					onStickerPackDetails: n
				})]
			}) })]
		}, "sticker-store-modal");
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
