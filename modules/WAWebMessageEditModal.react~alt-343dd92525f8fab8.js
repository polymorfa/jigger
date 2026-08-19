__d("WAWebMessageEditModal.react", [
	"fbt",
	"WAWebChatThemeProvider.react",
	"WAWebComposeBoxHasUnsavedChangesInEditModal",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlexItem.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessageEditActionsModal.react",
	"WAWebMessageEditComposer.react",
	"WAWebMessageEditMsgPreview.react",
	"WAWebMessageEditUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebPaymentLink",
	"WAWebPollsGatingUtils",
	"WAWebPortalThemeWrapper.react",
	"WAWebStateUtils",
	"cr:6009",
	"gkx",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useRef, p = c.useState;
	function _() {
		return r("gkx")("4985");
	}
	var f = {
		previewContainer: {
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			position: "x1n2onr6",
			zIndex: "x1ja2u2z",
			minHeight: "x2lwn1j",
			maxHeight: "xchkpuk",
			$$css: !0
		},
		drawer: {
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function g(e) {
		var t, a, i, l = e.ref, c = e.msg, g = e.onCancel, v = e.onConfirm, S = c.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION, R = S ? (t = (a = o("WAWebFrontendMsgGetters").getAsPollCreation(c)) == null ? void 0 : a.pollName) != null ? t : "" : (i = o("WAWebFrontendMsgGetters").getText(c)) != null ? i : "", L = p(R), E = L[0], k = L[1], I = d(function() {
			return S ? null : b(c);
		}, [S, c]), T = p(I), D = T[0], x = T[1], $ = m({}), P = C(E, I, D), N = p(!1), M = N[0], w = N[1], A = p(!1), F = A[0], O = A[1];
		o("WAWebComposeBoxHasUnsavedChangesInEditModal").setHasUnsavedChangesInEditModal(P), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, ["close_modal"], function() {
			o("WAWebComposeBoxHasUnsavedChangesInEditModal").setHasUnsavedChangesInEditModal(!1);
		});
		var B = function(t) {
			var e, n;
			k(t.text);
			var r = t.text.trim().length === 0;
			O(r && (S || !_())), $.current.mentionedJidList = (e = t.data.mentionedJidList) != null ? e : [], $.current.groupMentions = (n = t.data.groupMentions) != null ? n : [];
		}, W = r("useWAWebStableCallback")(function(e) {
			$.current.linkPreview = e, x(e);
		}), q = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(c),
				msgList: [c.unsafe()].map(o("WAWebStateUtils").unproxy),
				onEnd: function() {
					return o("WAWebModalManager").ModalManager.close();
				}
			}));
		}, U = function() {
			if (E.trim().length === 0) {
				!S && _() && q();
				return;
			}
			if (!P) {
				o("WAWebModalManager").ModalManager.close();
				return;
			}
			if (n("cr:6009") != null && n("cr:6009").messageEditRestrictionEnabled() && !o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
				parentTsInSeconds: c.t,
				msgKey: c.id
			})) {
				w(!0), O(!0);
				return;
			}
			v(E, babelHelpers.extends({}, $.current));
		}, V = function() {
			P || o("WAWebModalManager").ModalManager.close();
		}, H = M ? u.jsx(r("WAWebMessageEditActionsModal.react"), {
			type: o("WAWebModal.react").ModalTheme.MessageActionsModal,
			titleText: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOk: function() {
				w(!1);
			},
			modalText: s._(
				/*BTDS*/
				""
			)
		}) : null;
		return u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.MessageEdit,
			ref: l,
			tsNavigationData: {
				surface: "message-edit",
				viewName: "message-edit"
			},
			onOverlayClick: V,
			children: u.jsxs(r("WAWebDrawer.react"), {
				testid: "edit-message-modal",
				xstyle: f.drawer,
				disableNavigationLogging: !0,
				children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: h(c, S),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
					onCancel: g
				}), u.jsx(r("WAWebChatThemeProvider.react"), {
					chat: o("WAWebFrontendMsgGetters").getChat(c),
					children: u.jsx(r("WAWebPortalThemeWrapper.react"), { children: u.jsxs(r("WAWebDrawerBody.react"), {
						className: "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli",
						children: [u.jsx(r("WAWebFlexItem.react"), {
							grow: 0,
							shrink: 1,
							basis: "content",
							xstyle: f.previewContainer,
							children: u.jsx(r("WAWebMessageEditMsgPreview.react"), {
								msg: c,
								linkPreviewVisible: !!D
							})
						}), u.jsx(o("WAWebMessageEditComposer.react").MessageEditComposer, {
							msg: c,
							initialLinkPreview: I,
							initialText: S ? R : null,
							enableMentions: !S,
							enableTextFormatting: !S,
							maxLength: S ? o("WAWebPollsGatingUtils").getMaxPollNameLength() : void 0,
							placeholderOverride: S ? y() : null,
							onInputChange: B,
							onLinkPreviewChange: W,
							onConfirm: U,
							disableConfirmButton: F
						})]
					}) })
				})]
			}, "edit-message-modal")
		}), H] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		return t ? s._(
			/*BTDS*/
			""
		) : o("WAWebMsgGetters").getIsNewsletterMsg(e) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e, t, n) {
		var r = e.trim(), o = m(r), a = r.length > 0 && (r !== o.current || (n == null ? void 0 : n.matchedText) !== (t == null ? void 0 : t.matchedText));
		return a;
	}
	function b(e) {
		var t = o("WAWebFrontendMsgGetters").getAsUrl(e.unsafe());
		if (!t) return null;
		var n = null;
		return o("WAWebPaymentLink").shouldDetectInComposer() && (n = o("WAWebPaymentLink").getPSP(t.matchedText)), {
			title: t.title,
			description: t.description,
			matchedText: t.matchedText,
			richPreviewType: t.richPreviewType,
			thumbnail: t.thumbnail,
			thumbnailHQ: t.thumbnailHQ,
			doNotPlayInline: !!t.doNotPlayInline,
			inviteGrpType: t.inviteGrpType,
			mediaKey: t.mediaKey,
			mediaKeyTimestamp: t.mediaKeyTimestamp,
			thumbnailDirectPath: t.thumbnailDirectPath,
			thumbnailSha256: t.thumbnailSha256,
			thumbnailEncSha256: t.thumbnailEncSha256,
			thumbnailHeight: t.thumbnailHeight,
			thumbnailWidth: t.thumbnailWidth,
			psp: n,
			isLoading: !1
		};
	}
	l.default = g;
}), 226);
