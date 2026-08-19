__d("WAWebMediaHubListMsg.react", [
	"WAWebCheckBox.react",
	"WAWebClickable.react",
	"WAWebClock",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebFormatConfiguration",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebMediaHubContextProvider",
	"WAWebMediaHubLogger",
	"WAWebMediaHubMessageActionHandlers",
	"WAWebMediaHubMessageDropdownMenu.react",
	"WAWebMessageTooltip.react",
	"WAWebMsgGetters",
	"WAWebMsgMentionMap",
	"WAWebNoop",
	"WAWebPrivacyBlurWrapper.react",
	"WAWebPrivacyModeBlurConfig",
	"WAWebStarFilledIcon.react",
	"WAWebTabOrder",
	"WAWebWamEnumActionCode",
	"WDSFocusStateStyles",
	"WDSIconIcBookmark.react",
	"WDSText.react",
	"fbs",
	"react",
	"useHoverState",
	"useMergeRefs",
	"useWAWebListener",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef, p = {
		rowRoot: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			borderBottomColor: "x120ee7l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "x1co6499",
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		rowRootFocused: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		row: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		rightContent: {
			minWidth: "x1hxoosp",
			$$css: !0
		},
		checkbox: {
			minWidth: "xnei2rj",
			$$css: !0
		},
		star: {
			color: "xhslqc4",
			$$css: !0
		},
		actionButtons: {
			minWidth: "xktpd3l",
			$$css: !0
		},
		clickablePart: {
			display: "x78zum5",
			flex: "x98rzlu",
			width: "xh8yej3",
			$$css: !0
		}
	}, _ = s.createContext({ isHovered: !1 });
	function f(e) {
		var t, n, a = e.collection, i = e.endAction, l = e.link, u = e.msg, f = e.msgContent, g = e.onContentClick, y = e.ref, C = e.rightContent, b = e.searchType, v = e.shouldShowMsgBody, S = v === void 0 ? !0 : v, R = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), L = R.getMultiSelection, E = R.isSelectMode, k = R.onMessageSelect, I = R.searchQuery, T = R.setContextMenuMsg;
		o("useWAWebListener").useListener(u, "revoked", function() {
			a.remove(u);
		});
		var D = o("useWAWebMsgValues").useMsgValues(u.id, [o("WAWebFrontendMsgGetters").getRtl]), x = D[0], $ = L(), P = function(t) {
			k(u, t), t.stopPropagation(), t.preventDefault();
		}, N = r("useHoverState")(), M = N.isHovered, w = N.onMouseEnter, A = N.onMouseLeave, F = N.setIsHovered, O = d(function() {
			return { isHovered: M };
		}, [M]), B = m(null), W = m(null), q = r("useMergeRefs")(y, B);
		c(function() {
			var e = B.current;
			if (e != null) {
				var t = function() {
					for (var t of e.querySelectorAll("[tabindex=\"0\"], a[href], button")) t.tabIndex = -1;
					for (var n of (r = (o = W.current) == null ? void 0 : o.querySelectorAll("button")) != null ? r : []) {
						var r, o;
						n.setAttribute("data-focusid", "media-hub-row-item");
					}
				};
				t();
				var n = new MutationObserver(t);
				n.observe(e, {
					childList: !0,
					subtree: !0
				});
				var r = W.current, o = function(t) {
					(t.key === "Enter" || t.key === " ") && t.stopPropagation();
				};
				return r == null || r.addEventListener("keydown", o), function() {
					n.disconnect(), r == null || r.removeEventListener("keydown", o);
				};
			}
		}, []);
		var U = ((t = (n = u.caption) != null ? n : o("WAWebFrontendMsgGetters").getText(u)) != null ? t : "").trim(), V = o("WAWebFormatConfiguration").Search({
			terms: [I],
			mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(u),
			groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(u)
		}), H = E ? void 0 : function() {
			o("WAWebMediaHubMessageActionHandlers").goToMessageFromModal(u), o("WAWebMediaHubLogger").logMediaHubAction({ action: o("WAWebWamEnumActionCode").ACTION_CODE.GO_TO_MESSAGE });
		};
		return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "media-hub-list-msg",
			children: s.jsx(_.Provider, {
				value: O,
				children: s.jsx(r("WAWebPrivacyBlurWrapper.react"), {
					containerRef: B,
					category: o("WAWebPrivacyModeBlurConfig").BlurCategory.General,
					children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
						ref: q,
						onMouseEnter: w,
						onMouseLeave: A,
						onFocus: function() {
							return F(!0);
						},
						onBlur: function() {
							return F(!1);
						},
						onContextMenu: function(t) {
							t.preventDefault(), T({
								msg: u,
								searchType: b,
								event: t
							});
						},
						children: s.jsx(o("WAWebClickable.react").Clickable, {
							tabIndex: -1,
							onClick: E ? P : H,
							children: s.jsxs(o("WAWebFlex.react").FlexRow, {
								gap: 40,
								grow: 1,
								tabIndex: -1,
								"data-tab": o("WAWebTabOrder").TAB_ORDER.TAB_HEADER,
								xstyle: [
									p.row,
									p.rowRoot,
									M && p.rowRootFocused,
									o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
								],
								"data-focusid": "media-hub-row-item",
								testid: "media-hub-list-row",
								align: "center",
								children: [
									s.jsx(o("WAWebFlex.react").FlexRow, {
										gap: 8,
										grow: 3,
										shrink: 0,
										basis: 0,
										xstyle: p.row,
										children: s.jsxs(o("WAWebClickable.react").Clickable, {
											tabIndex: -1,
											xstyle: [p.clickablePart, p.row],
											onClick: g,
											children: [E && s.jsx(o("WAWebFlex.react").FlexRow, {
												xstyle: p.checkbox,
												marginEnd: 8,
												children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
													checked: $.isSelected(u),
													onChange: r("WAWebNoop"),
													tabIndex: -1
												})
											}), f]
										})
									}),
									s.jsxs(o("WAWebFlex.react").FlexRow, {
										grow: 2,
										shrink: 0,
										basis: 0,
										children: [s.jsx(o("WAWebFlex.react").FlexRow, {
											grow: 1,
											shrink: 1,
											align: "center",
											children: s.jsx(r("WAWebMessageTooltip.react"), {
												isEnabled: !0,
												msg: u,
												children: s.jsx(r("WDSText.react"), {
													type: "Body3",
													colorName: U === "" || !S ? "contentDisabled" : "contentDeemphasized",
													maxLines: 2,
													children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
														direction: "auto",
														dirMismatch: x !== r("WAWebL10N").isRTL(),
														text: U === "" || !S ? r("fbs")._(
															/*BTDS*/
															""
														) : "\"" + U + "\"",
														formatters: V
													})
												})
											})
										}), C != null && s.jsx(o("WAWebFlex.react").FlexRow, {
											xstyle: [p.row, p.rightContent],
											gap: 8,
											justify: "end",
											children: C
										})]
									}),
									s.jsxs(o("WAWebFlex.react").FlexRow, {
										align: "center",
										grow: 2,
										shrink: 1,
										basis: 0,
										children: [s.jsx(o("WAWebFlex.react").FlexItem, {
											grow: 1,
											shrink: 1,
											children: s.jsx(h, { msg: u.safe() })
										}), s.jsx(o("WAWebFlex.react").FlexRow, {
											ref: W,
											basis: 72,
											gap: 8,
											justify: "end",
											align: "center",
											shrink: 0,
											xstyle: p.actionButtons,
											children: !E && s.jsxs(s.Fragment, { children: [i, s.jsx(o("WAWebMediaHubMessageDropdownMenu.react").WAWebMediaHubMessageDropdownMenu, {
												isHover: !0,
												msg: u,
												link: l,
												searchType: b
											})] })
										})]
									})
								]
							})
						})
					})
				})
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = { emojiSize: {
		zoom: "x1bn1iv9",
		verticalAlign: "xw8z9w8",
		$$css: !0
	} };
	function h(e) {
		var t = e.msg, n = o("WAWebFrontendContactGetters").getFormattedName(t.senderObj), a = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebMsgGetters").getStar, o("WAWebMsgGetters").getIsKept]), i = a[0], l = a[1], u = o("WAWebFrontendMsgGetters").getChat(t.unsafe()), c = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(), d = c.searchQuery, m = u.groupMetadata != null ? n + " • " + o("WAWebFrontendContactGetters").getFormattedName(o("WAWebFrontendMsgGetters").getChat(t.unsafe()).contact) : n, _ = o("WAWebFormatConfiguration").SearchName({
			terms: [d],
			emojiXstyle: g.emojiSize
		});
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			align: "center",
			children: [s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: t.senderObj.id,
				size: 28,
				theme: "media_hub"
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				grow: 1,
				shrink: 1,
				basis: 0,
				children: [s.jsx(r("WDSText.react"), {
					type: "Body2",
					maxLines: 1,
					colorName: "contentDefault",
					children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: m,
						direction: "auto",
						titlify: !0,
						emojiXstyle: g.emojiSize,
						formatters: _
					})
				}), s.jsx(r("WDSText.react"), {
					type: "Body3",
					maxLines: 1,
					colorName: "contentDeemphasized",
					children: s.jsxs(o("WAWebFlex.react").FlexRow, {
						gap: 4,
						align: "center",
						children: [
							i ? s.jsx(o("WAWebStarFilledIcon.react").StarFilledIcon, {
								xstyle: p.star,
								width: 10,
								height: 10
							}) : null,
							l ? s.jsx(r("WDSIconIcBookmark.react"), {
								xstyle: p.star,
								width: 10,
								height: 10
							}) : null,
							o("WAWebClock").Clock.relativeDateAndTimeStr(t.t)
						]
					})
				})]
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	var y = 72;
	function C(e, t) {
		return (function(e) {
			if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !0) return y + 64;
			if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !1) return y + 84;
			if (Array.isArray(e) && e.length === 2) return y;
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})([e, t]);
	}
	l.WAWebMediaHubListMsg = f, l.MEDIA_HUB_LIST_ROW_BASE_HEIGHT = y, l.getMediaHubListRowHeight = C;
}), 226);
