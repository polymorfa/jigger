__d("WAWebMessageAlbumWrapperGroupedSticker.react", [
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebMessageGroupedSticker.react",
	"WAWebMessageGroupedStickerCheckbox.react",
	"WAWebMessageUiUtils",
	"WAWebMsgSendFailIcon.react",
	"WAWebReactionsListeners.react",
	"WAWebReactionsUtils",
	"WAWebStateUtils",
	"WAWebStopEvent",
	"WAWebVelocityTransitionGroup",
	"WAWebWrapperListeners.react",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t, n, a = e.albumId, i = e.albumWrapperClass, l = e.albumWrapperRef, c = e.author, d = e.containerClass, m = e.displayType, p = e.focusedMsgIndex, _ = e.groupProfilePicture, f = e.handleModalClosed, g = e.handleOpenDeleteFlow, h = e.handleOpenForwardFlow, y = e.handleReactionChange, C = e.handleSelectChange, b = e.handleSelectClick, v = e.isAlbumWrapperKeyboardFocused, S = e.isFocusedAlbum, R = e.isWide, L = e.leftStickerBubbleRef, E = e.menuTransition, k = e.msgs, I = e.rightStickerBubbleRef, T = e.scrollMsg, D = e.selectable, x = e.selected, $ = e.selectedMessages, P = e.setIsFocused, N = e.tail, M = u(null), w = u(null), A = k[0], F = k[1], O = k.map(function(e) {
			return s.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
				parent: { onSelectChange: C },
				msgId: e.id.toString(),
				selectedMessages: $
			}, e.id.toString());
		}), B = A.type === "sticker" ? o("WAWebMessageUiUtils").getStickerCustomLabel(A.mediaData.accessibilityLabel, (t = A.mediaData.emojis) == null ? void 0 : t.join(" ")) : null, W = F.type === "sticker" ? o("WAWebMessageUiUtils").getStickerCustomLabel(F.mediaData.accessibilityLabel, (n = F.mediaData.emojis) == null ? void 0 : n.join(" ")) : null, q = D ? s.jsx(r("WAWebMessageGroupedStickerCheckbox.react"), {
			checked: $.isSelected(o("WAWebStateUtils").unproxy(A.unsafe())),
			onClick: function(t) {
				b({ selectedMsg: A.unsafe() });
			},
			ariaLabel: B
		}) : null, U = D ? s.jsx(r("WAWebMessageGroupedStickerCheckbox.react"), {
			checked: $.isSelected(o("WAWebStateUtils").unproxy(F.unsafe())),
			onClick: function(t) {
				b({ selectedMsg: F.unsafe() });
			},
			ariaLabel: W
		}) : null, V = k.some(function(e) {
			return o("WAWebReactionsUtils").canReactToMessage(e.unsafe());
		}) ? s.jsx(o("WAWebMsgSendFailIcon.react").MsgSendFailIcon, {
			msgs: k,
			showForMessages: !1,
			showForAddOns: !0,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
		}) : null, H = {
			0: "x78zum5 x1q0g3np x1a02dak",
			1: "x78zum5 x1q0g3np x1a02dak xl56j7k"
		}[!!R << 0], G = s.jsxs("div", {
			className: i,
			"data-id": a,
			ref: l,
			onFocus: function() {
				P(!0);
			},
			onBlur: function() {
				P(!1);
			},
			tabIndex: -1,
			children: [
				s.jsx(r("WAWebVelocityTransitionGroup"), {
					transitionName: "delay-leave",
					children: x
				}),
				s.jsxs("div", {
					className: d,
					role: "group",
					onContextMenu: o("WAWebStopEvent").stopPropagation,
					children: [
						N,
						_,
						c,
						s.jsxs("div", {
							className: H,
							children: [
								s.jsxs("div", {
									onMouseEnter: function() {
										var e;
										return (e = M.current) == null ? void 0 : e.startAnimation();
									},
									role: "img",
									className: "x1n2onr6",
									ref: L,
									children: [s.jsx(r("WAWebVelocityTransitionGroup"), {
										transitionName: "delay-leave",
										children: q
									}), s.jsx(r("WAWebMessageGroupedSticker.react"), {
										msg: r("nullthrows")(o("WAWebFrontendMsgGetters").getAsGroupedSticker(A.unsafe())),
										menuTransition: E,
										onOpenForwardFlow: h,
										onOpenDeleteFlow: g,
										scrollMsg: T,
										isFocused: S && p === 0,
										forwardRef: M,
										displayType: m,
										rowIsKeyboardFocused: v,
										onModalClosed: f
									})]
								}),
								s.jsxs("div", {
									onMouseEnter: function() {
										var e;
										return (e = w.current) == null ? void 0 : e.startAnimation();
									},
									role: "img",
									className: "x1n2onr6",
									ref: I,
									children: [s.jsx(r("WAWebVelocityTransitionGroup"), {
										transitionName: "delay-leave",
										children: U
									}), s.jsx(r("WAWebMessageGroupedSticker.react"), {
										msg: r("nullthrows")(o("WAWebFrontendMsgGetters").getAsGroupedSticker(F.unsafe())),
										menuTransition: E,
										onOpenForwardFlow: h,
										onOpenDeleteFlow: g,
										scrollMsg: T,
										isFocused: S && p === 1,
										forwardRef: w,
										displayType: m,
										rowIsKeyboardFocused: v,
										onModalClosed: f
									})]
								}),
								s.jsx(r("WAWebReactionsListeners.react"), {
									msgIds: k.map(function(e) {
										return e.id.toString();
									}),
									onReactionChange: y
								})
							]
						}),
						V
					]
				}),
				O
			]
		});
		return s.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
			role: "row",
			children: G
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
