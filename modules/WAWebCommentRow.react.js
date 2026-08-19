__d("WAWebCommentRow.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebChatCollection",
	"WAWebChatGroupUtils",
	"WAWebCiphertext.react",
	"WAWebCommentAuthor.react",
	"WAWebCommentBody.react",
	"WAWebCommentSendFailIcon.react",
	"WAWebCommentTimestamp.react",
	"WAWebCommentToCommentMsgData",
	"WAWebContactCollection",
	"WAWebCopyToClipboard",
	"WAWebDebugGatingUtils",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDevOnlyBadge.react",
	"WAWebDropdownItem.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatRevokedMsg",
	"WAWebGroupChatProfilePicture.react",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgKeyUtils",
	"WAWebMsgModel",
	"WAWebMsgType",
	"WAWebProcessBaseMsgInfo",
	"WAWebReactionCellDetailThumb.react",
	"WAWebRecalledIcon.react",
	"WAWebReportMsgPopup.react",
	"WAWebSpamConstants",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebWidFactory",
	"WDSIconIcChevronDown.react",
	"WDSIconIcThumbDown.react",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"useHoverState",
	"useWAWebEventTargetValue",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
		marginInlineEnd5: {
			marginInlineEnd: "xf6vk7d",
			$$css: !0
		},
		marginInlineEnd3: {
			marginInlineEnd: "x1p8j9ns",
			$$css: !0
		}
	}, _ = {
		icon: {
			display: "x1rg5ohu",
			color: "x181wc8j",
			minWidth: "xnei2rj",
			marginInlineStart: "xe9ewy2",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		placeholder: {
			fontStyle: "x1k4tb9n",
			color: "xhslqc4",
			$$css: !0
		},
		row: {
			position: "x1n2onr6",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		context: {
			position: "x10l6tqk",
			insetInlineEnd: "xdg88n9",
			left: null,
			right: null,
			$$css: !0
		},
		thumbnail: {
			position: "x10l6tqk",
			insetInlineEnd: "x1g9hn12",
			left: null,
			right: null,
			$$css: !0
		}
	};
	function f(e) {
		var t = e.comment, n = e.isAlbumMsg, a = r("useHoverState")(), i = a.isHovered, l = a.onMouseEnter, c = a.onMouseLeave, f = o("useWAWebModelValues").useModelValues(t, [
			"id",
			"author",
			"parentMsgKey",
			"body",
			"t",
			"id",
			"ack",
			"read",
			"subtype",
			"revokeSender",
			"links",
			"linksIndexParsed",
			"phoneNumbers",
			"phoneNumbersIndexParsed",
			"protocolMessageKey",
			"isFailed",
			"type",
			"messageSecret"
		]), g = o("WAWebMsgCollection").MsgCollection.get(f.parentMsgKey), h = m(!1), y = h[0], C = h[1], b = d(null), v = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(f.parentMsgKey.remote)), S = f.author;
		if (f.protocolMessageKey != null) {
			var R = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(f.protocolMessageKey, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
			R.author != null && (S = o("WAWebWidFactory").asUserWidOrThrow(R.author));
		}
		var L = r("nullthrows")(o("WAWebContactCollection").ContactCollection.get(S)), E;
		if (y) {
			var k = function() {
				var e = o("WAWebCommentToCommentMsgData").commentToCommentMsgData(f), t = new (o("WAWebMsgModel")).Msg(babelHelpers.extends({}, o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e), {
					type: o("WAWebMsgType").MSG_TYPE.CHAT,
					body: f.body
				}));
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportMsgPopup.react"), {
					msg: t,
					spamFlow: o("WAWebSpamConstants").SpamFlow.CommentActions
				}));
			}, I = function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
					chat: v,
					commentList: [o("WAWebCommentToCommentMsgData").commentToCommentMsgData(f)],
					msgList: []
				}));
			}, T = [u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: I,
				icon: u.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
				testid: "mi-msg-delete",
				theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
				children: s._(
					/*BTDS*/
					""
				)
			}, "delete")];
			f.id.fromMe || T.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: k,
				icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
				testid: "mi-msg-report",
				children: s._(
					/*BTDS*/
					""
				)
			}, "mi-report")), o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() && (T.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})), T.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: function() {
					o("WAWebCopyToClipboard").copyTextToClipboard(f.id.toString());
				},
				addSpacing: !0,
				testid: "mi-msg-copy-id",
				children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: "Copy Msg ID" })
			}, "copy-id")));
			var D = {
				menu: T,
				anchor: b.current
			};
			E = u.jsx(o("WAWebUimUie.react").UIE, {
				dismissOnWindowResize: !0,
				displayName: "CommentContextMenu",
				escapable: !0,
				popable: !0,
				requestDismiss: function() {
					return C(!1);
				},
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: D })
			});
		}
		var x = r("useWAWebEventTargetValue")(o("WAWebContactCollection").ContactCollection, [
			"add",
			"remove",
			"change:name"
		], function() {
			return o("WAWebFormatRevokedMsg").formatRevokedComment(f);
		}), $ = u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsx(r("WAWebFlexItem.react"), {
			xstyle: [_.icon, p.marginInlineEnd5],
			children: u.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {})
		}), u.jsx(r("WAWebFlexItem.react"), {
			xstyle: [
				_.placeholder,
				o("WDSMargins.stylex").wdsMargins.marginTop2,
				o("WDSMargins.stylex").wdsMargins.marginBottom2
			],
			children: x
		})] }), P = function() {
			return f.subtype === "admin" || f.subtype === "sender" ? $ : f.body != null ? u.jsx(r("WAWebCommentBody.react"), { comment: f }) : u.jsx(r("WAWebCiphertext.react"), { subtype: f.subtype != null ? f.subtype : "" });
		};
		return u.jsxs(r("WAWebBox.react"), {
			flex: !0,
			onMouseEnter: l,
			onMouseLeave: c,
			testid: "comment-row",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom12, _.row],
			children: [
				u.jsx(r("WAWebFlexItem.react"), {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd12, o("WDSMargins.stylex").wdsMargins.marginTop2],
					children: u.jsx(r("WAWebGroupChatProfilePicture.react"), {
						chatWid: v.id,
						disableClick: !0,
						usePicInBubbleLayout: !0,
						userContact: L
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					className: "x1h4wwuj",
					grow: 1,
					children: [u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsx(r("WAWebFlexItem.react"), {
						xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8,
						children: u.jsx(r("WAWebCommentAuthor.react"), {
							chat: v,
							contact: L
						})
					}), u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WAWebCommentTimestamp.react"), { t: f.t }) })] }), P()]
				}) }),
				u.jsx(r("WAWebCommentSendFailIcon.react"), { comment: f }),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: _.thumbnail,
					children: g && n && u.jsx(o("WAWebReactionCellDetailThumb.react").ReactionCellDetailThumb, {
						msg: g,
						onCloseDetailsPane: o("WAWebModalManager").closeModalManager,
						reactionText: "",
						showReactionText: !1
					})
				}),
				o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(v) ? null : u.jsx(r("WAWebFlexItem.react"), {
					xstyle: [
						o("WDSMargins.stylex").wdsMargins.marginStart12,
						p.marginInlineEnd3,
						o("WDSMargins.stylex").wdsMargins.marginTop2,
						_.context
					],
					children: i || E != null ? u.jsxs(r("WAWebUnstyledButton.react"), {
						"aria-label": r("WAWebFbtCommon")("Context menu"),
						onClick: function() {
							return C(!0);
						},
						ref: b,
						children: [u.jsx(r("WDSIconIcChevronDown.react"), {
							height: 24,
							width: 24,
							iconXstyle: _.secondaryColor
						}), E]
					}) : null
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
