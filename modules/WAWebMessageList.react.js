__d("WAWebMessageList.react", [
	"WAArraysShallowEqual",
	"WALogger",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebFrontendConstants",
	"WAWebKeyboardListHotKeys.react",
	"WAWebListenerHoc_DEPRECATED",
	"WAWebMessageAssociation.flow",
	"WAWebMessageAssociationUIUtils",
	"WAWebMessageHandlers",
	"WAWebMessageListGenerateMsgListRows",
	"WAWebMessageListRowRenderers",
	"WAWebMessagePosition",
	"WAWebMsgActionCapability",
	"WAWebMsgCollection",
	"WAWebPrivacyModeGating",
	"WAWebReplyToMsgChatAction",
	"WAWebTabOrder",
	"WAWebTypingIndicator.react",
	"WAWebTypingIndicatorGatingUtils",
	"WAWebViewMode.flow",
	"WAWebViewModeUtils",
	"WAWebWamEnumQuotedMessageUserJourneyEntryPoint",
	"WDSMargins.stylex",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"shallowEqual",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s = ["msgs"], u = ["msgs"], c, d, m = d || (d = o("react")), p = d, _ = p.Component, f = p.createRef, g = {
		messageList: {
			flex: "x3psx0u",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1c1uobl",
			transition: "x1yjeaew",
			$$css: !0
		},
		maxWidth: {
			width: "xh8yej3",
			maxWidth: "xquzyny",
			$$css: !0
		},
		messageListSelectable: {
			paddingInlineStart: "x1tvauco",
			transition: "x18314t",
			$$css: !0
		},
		wrapper: {
			position: "x1n2onr6",
			$$css: !0
		}
	}, h = (function(t) {
		function a(e) {
			var a;
			a = t.call(this, e) || this, a.$1 = {}, a.$2 = {}, a.$3 = {}, a.$4 = {}, a.$5 = {}, a.$8 = f(), a.$9 = function() {
				return a.$8.current;
			}, a.$10 = function(e) {
				var t = a.$8.current;
				if (t) {
					var n;
					return (n = e.find(function(e) {
						var n = t.compareDocumentPosition(e);
						return n === 4 || n === 20;
					})) != null ? n : null;
				}
				return null;
			}, a.$11 = function(e) {
				a.$7 = e;
			}, a.state = { isTypingIndicatorVisible: !1 }, a.$15 = function() {
				var e = a.$7;
				e != null && o("WAWebMessageHandlers").handleMessageReply(a.props.chat, e, o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint").QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.KEYBOARD_SHORTCUT);
			}, a.$16 = function() {
				var e = a.$7;
				e != null && r("WAWebReplyToMsgChatAction")(e);
			}, a.$17 = function() {
				var e = a.$7;
				e != null && o("WAWebMsgActionCapability").canForwardMsg(e) && o("WAWebMessageHandlers").handleOpenForwardFlow({
					msg: e,
					multiSelect: !1
				});
			}, a.$18 = function() {
				var e = a.$7, t = a.props.chat;
				e != null && o("WAWebMsgActionCapability").canStarMsg(e) && o("WAWebCmd").Cmd.sendStarMsgs(t, [e]);
			}, a.$13 = function() {
				a.forceUpdate();
			}, a.$14 = function(e) {
				var t = null;
				e.parentMsgKey && (e == null ? void 0 : e.associationType) === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM && !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e == null ? void 0 : e.viewMode) && (t = o("WAWebMsgCollection").MsgCollection.get(r("nullthrows")(e.parentMsgKey)));
				var n = a.$5[e.id.toString()];
				if (!(!n && !t)) {
					var i = !t && n.isGroupedSticker();
					if (!i) {
						var l = t ? o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(t.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT) : n.props.msgs, s = new Set(l.map(function(e) {
							return e.id.toString();
						})), u = function() {
							var r = t ? a.getMsgWrapperRef(t.id.toString()) : n.refAlbumComponents[e.id.toString()];
							return r == null ? void 0 : r.getContainerElement();
						};
						(t || a.$5[e.id.toString()]) && o("WAWebCmd").Cmd.mediaViewerModal({
							msg: e,
							getZoomNode: u,
							highlightedMsgIds: s
						});
					}
				}
			}, a.$12 = function(e) {
				var t = e.newKey, n = e.oldKey, r = t.toString(), o = n.toString(), i = a.$1[o];
				i && (delete a.$1[o], a.$1[r] = i);
			}, a.$19 = function(e) {
				a.setState({ isTypingIndicatorVisible: e });
			}, a.$20 = function(e, t) {
				e ? a.$1[t] = e : delete a.$1[t];
			}, a.$22 = function(e) {
				var t = e.albumId, n = e.msgs, r = e.ref;
				if (r) {
					a.$3[t] = r, n.forEach(function(e) {
						a.$5[e.id.toString()] = r;
					});
					return;
				}
				delete a.$3[t], n.forEach(function(e) {
					delete a.$5[e.id.toString()];
				});
			}, a.$27 = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield o("WAWebCmd").Cmd.openChatBottom({
					chat: a.props.chat,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatScrollBoundary
				});
			});
			var i = e.msgs;
			return a.$6 = i.length > 0 ? i[i.length - 1] : null, a;
		}
		babelHelpers.inheritsLoose(a, t);
		var i = a.prototype;
		return i.shouldComponentUpdate = function(t, n) {
			var e = t.msgs, o = babelHelpers.objectWithoutPropertiesLoose(t, s), a = this.props, i = a.msgs, l = babelHelpers.objectWithoutPropertiesLoose(a, u);
			return n.isTypingIndicatorVisible !== this.state.isTypingIndicatorVisible ? !0 : !r("shallowEqual")(o, l) || !r("WAArraysShallowEqual")(e, i);
		}, i.getSnapshotBeforeUpdate = function(t) {
			var e = this, n, o = this.props.getScrollContainer(), a = this.props.msgs.find(function(t) {
				return Object.prototype.hasOwnProperty.call(e.$1, t.id);
			});
			if (a == null) return null;
			var i = a.id.toString(), l = r("nullthrows")((n = this.getMsgWrapperRef(i)) == null ? void 0 : n.getContainerElement());
			return {
				commonMessageId: i,
				commonMessageTop: this.getMsgElementOffsetTop(l) - o.scrollTop
			};
		}, i.componentDidMount = function() {
			var e;
			this.props.listeners.add(o("WAWebMsgCollection").MsgCollection, "change:msgKey", this.$12), this.props.listeners.add((e = o("WAWebCmd")).Cmd, "refresh_messages", this.$13), this.props.listeners.add(e.Cmd, "open_media_viewer_for_album_media", this.$14), this.props.listeners.add(e.Cmd, "reply_current_message_keyboard_shortcut", this.$15), this.props.listeners.add(e.Cmd, "reply_current_message_private", this.$16), this.props.listeners.add(e.Cmd, "forward_current_message", this.$17), this.props.listeners.add(e.Cmd, "star_current_message", this.$18), this.props.listeners.add(e.Cmd, "typing_indicator_visibility_change", this.$19);
		}, i.componentDidUpdate = function(t, n, o) {
			var e = this.props.getScrollContainer();
			if (o != null) {
				var a, i = o.commonMessageId, l = o.commonMessageTop, s = r("nullthrows")((a = this.getMsgWrapperRef(i)) == null ? void 0 : a.getContainerElement());
				e.scrollTop = this.getMsgElementOffsetTop(s) - l;
			}
		}, i.getMsgElementOffsetTop = function(t) {
			if (o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
				for (var e = this.props.getScrollContainer(), n = t.offsetTop, r = t.offsetParent; r instanceof HTMLElement && r !== e;) n += r.offsetTop, r = r.offsetParent;
				return n;
			}
			var a = t.offsetParent;
			return a instanceof HTMLElement ? a.offsetTop + t.offsetTop : t.offsetTop;
		}, i.getMsgVisibility = function(n) {
			var t = this.props.getScrollContainer(), r = t.scrollTop, a = r + t.clientHeight, i = n == null ? void 0 : n.getContainerElement();
			if (!i) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getMsgVisibility on invalid ref: ", ""])), n), {
				visibility: o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE,
				offset: 0
			};
			var l = this.getMsgElementOffsetTop(i);
			return l + i.clientHeight <= r ? {
				visibility: o("WAWebMessagePosition").MSG_VISIBILITY.ABOVE,
				offset: l - r
			} : l >= a ? {
				visibility: o("WAWebMessagePosition").MSG_VISIBILITY.BELOW,
				offset: l - r
			} : {
				visibility: o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE,
				offset: l - r
			};
		}, i.getMsgWrapperRef = function(t) {
			return this.$1[t] || this.$5[t] || this.$4[t];
		}, i.getMsgComponentRef = function(t) {
			if (this.$1[t]) return this.$1[t].getMsgComponentRef();
			if (this.$5[t]) return this.$5[t].refAlbumComponents[t] && this.$5[t].refAlbumComponents[t].getRef();
		}, i.getDateMarkerRef = function(t) {
			return this.$2[t];
		}, i.$21 = function(t, n) {
			n ? this.$2[t] = n : delete this.$2[t];
		}, i.getRenderedDateMarkers = function() {
			return this.$2;
		}, i.$23 = function(t, n) {
			var e = this;
			if (t) {
				n.forEach(function(n) {
					e.$4[n.id.toString()] = t;
				});
				return;
			}
			n.forEach(function(t) {
				delete e.$4[t.id.toString()];
			});
		}, i.$24 = function() {
			return this.props.selectedMessages;
		}, i.$25 = function() {
			return this.props.onMessageSelect;
		}, i.$26 = function() {
			var e = this;
			return {
				msgs: this.props.msgs,
				selectable: this.props.selectable,
				isMsgVisible: this.props.isMsgVisible,
				unreadCount: this.props.unreadCount,
				refUnread: this.$8,
				handleMsgRendered: this.$20,
				handleDateMarkerRendered: function(n, r) {
					return e.$21(n, r);
				},
				handleAlbumRendered: this.$22,
				handleBotPluginCarouselRendered: function(n, r) {
					return e.$23(n, r);
				},
				getMsgWrapperRef: function(n) {
					return e.getMsgWrapperRef(n);
				},
				selectedMessages: this.$24(),
				onMessageSelect: this.$25(),
				setFocusedMessage: this.$11,
				chat: this.props.chat
			};
		}, i.render = function() {
			var e, t, n = this, a = this.props, i = a.focusedMsgCtx, l = a.msgs, s = a.unreadCount, u = o("WAWebTypingIndicatorGatingUtils").shouldShowMessageListTypingIndicator(this.props.chat.id, this.props.threadId), d, p;
			i && (d = i.msg, i.isUnreadDivider === !0 && s > 0 && (p = i.msg));
			var _ = m.jsxs(m.Fragment, { children: [m.jsxs(o("WAWebKeyboardListHotKeys.react").ListHotKeys, {
				dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST,
				className: (c || (c = r("stylex")))(g.messageList, this.props.selectable && g.messageListSelectable, [g.maxWidth, o("WDSMargins.stylex").wdsMargins.marginHorAuto]),
				getPriorityFocusItem: this.$9,
				getDefaultFocusItem: this.$10,
				onBeforeEnd: this.$27,
				handlers: null,
				removeTabIndexFocusInside: !0,
				"aria-label": null,
				children: [r("WAWebMessageListGenerateMsgListRows")(r("WAWebMessageListRowRenderers")(this.$26()), l, (e = d) == null ? void 0 : e.safe(), (t = p) == null ? void 0 : t.safe(), s, this.$6), u && m.jsx("div", babelHelpers.extends({ onAnimationStart: function() {
					!n.props.isNearBottom || !n.state.isTypingIndicatorVisible || o("WAWebCmd").Cmd.scrollChatHeight(o("WAWebFrontendConstants").SCROLL_FUDGE);
				} }, {
					0: { className: "xqtp20y x252dbw" },
					1: { className: "x252dbw xxk0z11 x1mibc2w x2mfxb xu90me3" }
				}[!!this.state.isTypingIndicatorVisible << 0]))]
			}), u && m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(g.wrapper, g.maxWidth, o("WDSMargins.stylex").wdsMargins.marginHorAuto), { children: m.jsx(r("WAWebTypingIndicator.react"), { chat: this.props.chat }) }))] });
			return _;
		}, a;
	})(_), y = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(h), C = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.getDateMarkerRef = function(t) {
			return this.getComponent().getDateMarkerRef(t);
		}, n.getMsgComponentRef = function(t) {
			return this.getComponent().getMsgComponentRef(t);
		}, n.getMsgWrapperRef = function(t) {
			return this.getComponent().getMsgWrapperRef(t);
		}, n.getMsgVisibility = function(t) {
			return this.getComponent().getMsgVisibility(t);
		}, n.getRenderedDateMarkers = function() {
			return this.getComponent().getRenderedDateMarkers();
		}, t;
	})(y);
	l.default = C;
}), 98);
