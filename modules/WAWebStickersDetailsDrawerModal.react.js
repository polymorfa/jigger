__d("WAWebStickersDetailsDrawerModal.react", [
	"fbt",
	"WAWebChatInfoActionButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlatListController",
	"WAWebInMemoryLottieStickerCache",
	"WAWebNewsletterCollection",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterWamoSubMessageType",
	"WAWebNewsletterWamoSubMessageTypePopup.react",
	"WAWebNewsletterWamoSubUtils",
	"WAWebStickerDetailsStickerPackInfo.react",
	"WAWebStickerOverlayAnimation.react",
	"WAWebStickerPanelContentStickerItem.react",
	"WAWebStickerPremiumStatus",
	"WAWebStickerUtils",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"WAWebWdsIcSendFilledIcon.react",
	"react",
	"useLazyRef",
	"useWAWebWaPlusBenefitJourneyViewOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = { controlsButton: {
		marginInlineStart: "xyqm7xq",
		marginInlineEnd: "x1ys307a",
		$$css: !0
	} };
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), l = a.onBack, u = a.onSend, d = a.sticker, g = a.stickerPack, h = g.premium > 0;
		r("useWAWebWaPlusBenefitJourneyViewOnMount")({
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_STORE,
			enabled: h,
			actionTarget: "sticker_preview"
		});
		var y = d.mediaData, C = y.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM, b = o("WAWebStickerUtils").getStickerFileType(y.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE, v = o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(y.filehash, y.mimetype, y.stickerPremiumStatus), S = _(b && C), R = S[0], L = S[1], E = m(function(e, t) {
			v && L(!0);
		}, [v]), k = m(function() {
			L(!1);
		}, []), I = _(null), T = I[0], D = I[1], x = p(), $ = function(t, n) {
			u(t, n === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
		}, P = function() {
			var e = r("WAWebNewsletterCollection").getActive();
			if (e != null) {
				var t = e.newsletterMetadata;
				if (o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(t) && x.current && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
					var n = function(t) {
						$(d, t);
					};
					D({
						popupAnchorEl: x.current,
						handleSelect: n
					});
					return;
				}
			}
			$(d);
		};
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "sticker-store",
			ref: n,
			testid: "sticker-drawer-sticker-details",
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l,
				focusBackOrCancel: !0
			}), c.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [i.current],
				children: c.jsxs(r("WAWebDrawerSection.react"), {
					animation: !1,
					theme: "padding-no-margin",
					children: [
						c.jsxs("div", {
							className: "x78zum5 xl56j7k x1plvlek xryxfnj x1vjgj0v xya0cws x1c436fg xh8yej3",
							children: [c.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
								sticker: d,
								theme: "stickerDetails",
								onClick: E
							}, d.id), R && c.jsx(r("WAWebStickerOverlayAnimation.react"), {
								mediaData: y,
								onClose: k
							})]
						}),
						c.jsx(o("WAWebStickerDetailsStickerPackInfo.react").StickerDetailsStickerPackInfo, {
							isPremium: g.premium > 0,
							name: g.name,
							publisher: g.publisher,
							theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme.StickerStore
						}),
						c.jsx("div", {
							className: "x78zum5 xl56j7k x14ler8",
							children: c.jsx(r("WAWebChatInfoActionButton.react"), {
								ref: x,
								Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
								label: s._(
									/*BTDS*/
									""
								),
								testid: "sticker-action send-button",
								xstyle: f.controlsButton,
								onClick: P
							})
						}),
						T != null && c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
							handleSelect: T.handleSelect,
							popupAnchorEl: T.popupAnchorEl,
							onDismiss: function() {
								return D(null);
							}
						})
					]
				})
			})]
		}, "sticker-details-modal");
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
