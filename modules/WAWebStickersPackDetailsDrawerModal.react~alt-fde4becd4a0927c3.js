__d("WAWebStickersPackDetailsDrawerModal.react", [
	"fbt",
	"WALogger",
	"WAWebChatCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFlatListController",
	"WAWebFlexBox.react",
	"WAWebForwardMessageFlowLoadable",
	"WAWebFrontendStickerPackModelMdGetters",
	"WAWebL10nFilesize",
	"WAWebLinkPreviewChatAction",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebRoundPlayIcon.react",
	"WAWebSendTextMsgChatAction",
	"WAWebSpinner.react",
	"WAWebStateUtils",
	"WAWebStickerPackCollectionMd",
	"WAWebStickerPackDrawerButton.react",
	"WAWebStickerPanelContentStickerItem.react",
	"WAWebText.react",
	"WDSFlex.stylex",
	"WDSIconWdsIcAuraFill.react",
	"bx",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebEventTargetValue",
	"useWAWebStickerPackValues",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d, m = d || (d = o("react")), p = d.useEffect, _ = r("bx").getURL(r("bx")("9560")), f = {
		auraIcon: {
			marginInlineEnd: "x7g7pl8",
			$$css: !0
		},
		titleContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			marginBottom: "x1e56ztr",
			$$css: !0
		},
		title: {
			flexGrow: "x1c4vz4f",
			$$css: !0
		},
		spinner: {
			minHeight: "xvv2zd5",
			$$css: !0
		},
		animatedIcon: {
			marginInlineStart: "xdzw4kq",
			color: "xct68jv",
			$$css: !0
		},
		emptyText: {
			textAlign: "x2b8uid",
			marginBottom: "x14ler8",
			$$css: !0
		}
	};
	function g(e, t) {
		var n = r("useWAWebEventTargetValue")(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "add remove reset", function() {
			return e || (t ? o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.get(t) : null);
		});
		if (n) return n;
		if (t == null) return null;
		o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchStickerPack(t);
	}
	function h(e) {
		var t = r("useWAWebEventTargetValue")(e, "add remove reset", function() {
			var t;
			return (t = e == null ? void 0 : e.toArray()) != null ? t : [];
		}), n = r("useWAWebUiIdle")();
		return p(function() {
			n(function() {
				e == null || e.fetch();
			});
		}, [e, n]), t;
	}
	function y(e) {
		var t = r("useWAWebEventTargetValue")(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "change:packFetchState", function() {
			return r("isStringNullOrEmpty")(e) ? null : o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.packFetchState.get(e);
		});
		return t;
	}
	function C(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), d = i.msg, p = i.onBack, C = i.onClose, v = i.onStickerClick, S = i.onStickerEnter, R = i.stickerPack, L = i.stickerPackId, E = g(R, L), k = (n = o("useWAWebStickerPackValues").useOptionalStickerPackValues(E == null ? void 0 : E.id, [o("WAWebFrontendStickerPackModelMdGetters").getStickers])) != null ? n : [], I = k[0], T = h(I), D = y(L), x = function(t, n) {
			E && v(t, E, n);
		}, $ = function(t, n) {
			E && S(t, E, n);
		}, P = async function(n, r, a) {
			var t = await o("WAWebLinkPreviewChatAction").getLinkPreview(n, r), i = t == null ? void 0 : t.data;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendTextMsgToChat inside WAWebStickersPackDetailsDrawerModal"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, a, { linkPreview: i });
		}, N = function() {
			if (d != null) {
				o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
					msgs: [o("WAWebStateUtils").unproxy(d)],
					onClose: o("WAWebModalManager").closeModalManager
				}));
				return;
			}
			var e = o("WAWebChatCollection").ChatCollection.getActive(), t = "";
			if (E != null) t = b(E.id);
			else if (L != null) t = b(L);
			else return;
			if (e != null && t != null) {
				var n = o("WAWebLinkify").findLink({ text: t });
				n != null && P(n, e, t).then(o("WAWebDrawerManager").closeDrawerRight);
			}
		}, M;
		return (L && D === o("WAWebStickerPackCollectionMd").FetchState.PENDING || (T == null ? void 0 : T.length) === 0) && (M = m.jsx(o("WAWebFlexBox.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: f.spinner,
			children: m.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4
			})
		})), m.jsxs(r("WAWebDrawer.react"), {
			theme: "sticker-store",
			ref: a,
			testid: "sticker-drawer-sticker-pack-details",
			children: [
				m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: p,
					onCancel: C,
					focusBackOrCancel: !0
				}),
				m.jsx(r("WAWebDrawerBody.react"), {
					flatListControllers: [l.current],
					children: m.jsxs(r("WAWebDrawerSection.react"), {
						animation: !1,
						theme: "padding-no-margin",
						children: [
							E ? m.jsxs(m.Fragment, { children: [
								m.jsx(o("WAWebText.react").WAWebTextTitle, {
									xstyle: f.titleContainer,
									children: m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexAlignCenter), { children: [
										E.premium > 0 && m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexAlignCenter, f.auraIcon), { children: m.jsx(r("WDSIconWdsIcAuraFill.react"), {
											height: 16,
											width: 16
										}) })),
										m.jsx(o("WAWebEmojiText.react").EmojiText, {
											xstyle: f.title,
											text: E.name,
											ellipsify: !0,
											titlify: !0
										}),
										E.animated ? m.jsx(o("WAWebRoundPlayIcon.react").RoundPlayIcon, {
											xstyle: f.animatedIcon,
											width: 16,
											height: 16
										}) : null
									] }))
								}),
								E.publisher && m.jsxs(o("WAWebText.react").WAWebTextMuted, {
									marginBottom: 16,
									children: [
										m.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
											/*BTDS*/
											"",
											[s._param("name", E.publisher)]
										) }),
										" ∙ ",
										m.jsx("span", {
											dir: "ltr",
											children: o("WAWebL10nFilesize").getL10nFilesize(E.fileSize)
										})
									]
								}),
								E.description && m.jsx(o("WAWebText.react").WAWebTextMuted, {
									marginBottom: 16,
									children: m.jsx(o("WAWebEmojiText.react").EmojiText, { text: E.description })
								}),
								M,
								m.jsx("div", {
									className: "xrvj5dj x1xfd4i4 x40hh3e xi32cqo x1qughib xh8yej3 x5yr21d",
									children: T == null ? void 0 : T.map(function(e) {
										return m.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
											sticker: e,
											theme: "stickerStore",
											onClick: x,
											onEnter: $,
											dontShowViewPack: !0
										}, e.id);
									})
								})
							] }) : null,
							!E && L && D === o("WAWebStickerPackCollectionMd").FetchState.PENDING ? M : null,
							!E && (!L || D !== o("WAWebStickerPackCollectionMd").FetchState.PENDING) ? m.jsxs(m.Fragment, { children: [m.jsx("div", {
								className: "x78zum5 xl56j7k xya0cws x1c436fg xh8yej3",
								children: m.jsx("div", {
									className: "x12f94cn xfhbamq x1yztbdb xiy17q3 x1tbiz1a",
									style: { backgroundImage: "url(" + _ + ")" }
								})
							}), m.jsx(o("WAWebText.react").WAWebTextMuted, {
								marginBottom: 16,
								xstyle: f.emptyText,
								children: m.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
									/*BTDS*/
									""
								) })
							})] }) : null
						]
					})
				}),
				m.jsx("div", {
					className: "x1280gxy x1ey2m1c x78zum5 xl56j7k x1a8lsjc x7wzq59 xh8yej3",
					children: m.jsx(r("WAWebStickerPackDrawerButton.react"), { handleClick: N })
				})
			]
		}, "sticker-pack-details-modal");
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		return "https://wa.me/stickerpack/" + e;
	}
	l.default = C;
}), 226);
