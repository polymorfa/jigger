__d("WAWebStickerPackInfoDetailsDrawerModal.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebForwardMessageFlowLoadable",
	"WAWebL10nFilesize",
	"WAWebModalManager",
	"WAWebStateUtils",
	"WAWebStickerPackDrawerButton.react",
	"WAWebStickerPanelContentStickerItem.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		title: {
			flexGrow: "x1c4vz4f",
			$$css: !0
		},
		titleContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.msg, n = e.onClose, a = e.onStickerClick, i = e.ref, l = e.stickers, d = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
				msgs: [o("WAWebStateUtils").unproxy(t.unsafe())],
				onClose: o("WAWebModalManager").closeModalManager
			}), { transition: "modal-flow" });
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "sticker-store",
			ref: i,
			tsNavigationData: {
				surface: "unknown",
				viewName: "sticker-pack-info"
			},
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onCancel: n,
					focusBackOrCancel: !0
				}),
				u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
					animation: !1,
					theme: "padding-no-margin",
					children: [
						u.jsx(o("WAWebText.react").WAWebTextTitle, {
							xstyle: [c.titleContainer, c.marginBottom8],
							children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
								xstyle: c.title,
								text: t.filename,
								ellipsify: !0,
								titlify: !0
							})
						}),
						t.description != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
							marginBottom: 16,
							children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.description })
						}),
						t.stickerPackPublisher != null && u.jsxs(o("WAWebText.react").WAWebTextMuted, {
							marginBottom: 16,
							children: [
								u.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
									/*BTDS*/
									"",
									[s._param("name", t.stickerPackPublisher)]
								) }),
								" ∙ ",
								u.jsx("span", {
									dir: "ltr",
									children: o("WAWebL10nFilesize").getL10nFilesize(t.stickerPackSize)
								})
							]
						}),
						t.description != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
							marginBottom: 16,
							children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.description })
						}),
						u.jsx("div", {
							className: "xrvj5dj x1xfd4i4 x40hh3e xi32cqo x1qughib xh8yej3 x5yr21d",
							children: l.map(function(e) {
								return u.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
									sticker: e,
									theme: "stickerStore",
									dontShowViewPack: !0,
									onClick: a,
									onEnter: a
								}, e.id);
							})
						})
					]
				}) }),
				u.jsx("div", {
					className: "x1280gxy x1ey2m1c x78zum5 xl56j7k x7wzq59 xh8yej3 x16ovd2e x12xbjc7",
					children: u.jsx(r("WAWebStickerPackDrawerButton.react"), { handleClick: d })
				})
			]
		}, "sticker-pack-details-modal");
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StickerPackInfoDetailsDrawerModal = d;
}), 226);
