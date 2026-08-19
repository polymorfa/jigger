__d("WAWebChat.react", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAWebABProps",
	"WAWebAccessibility.react",
	"WAWebBizAiAgentStatusUtils",
	"WAWebChatAssignmentCollection",
	"WAWebChatAssignmentGatingUtils",
	"WAWebChatAssignmentLogEvents.flow",
	"WAWebChatAssignmentUtils",
	"WAWebChatCell.react",
	"WAWebChatCellContextMenuV2.react",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatIcons.react",
	"WAWebChatModel",
	"WAWebChatSearchQuery",
	"WAWebChatTimestamp.react",
	"WAWebChatlistTertiaryPillsRow.react",
	"WAWebChatstateInfo.react",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebComposeBoxActions",
	"WAWebContactGetters",
	"WAWebConversationPreloadGatingUtils",
	"WAWebDataTransfer",
	"WAWebDetailImage.react",
	"WAWebDomScroll",
	"WAWebEnvironment",
	"WAWebEphemeralFbtKic",
	"WAWebErrorBoundary.react",
	"WAWebEventFiles",
	"WAWebFeatureFlagCollection",
	"WAWebFeatureFlagName",
	"WAWebFocusTracer",
	"WAWebFrontendChatGetters",
	"WAWebGroupChatImage.react",
	"WAWebGroupHistoryParticipantStateHydration",
	"WAWebGroupMetadataCollection",
	"WAWebGroupMetadataContext",
	"WAWebGroupType",
	"WAWebIdleTaskRunner",
	"WAWebKeyboardHotKeys.react",
	"WAWebListenerHoc_DEPRECATED",
	"WAWebListsLabelGatingUtils",
	"WAWebMediaLoadErrors",
	"WAWebMemberLabelCollection",
	"WAWebMultiSelectEntryPointConstants",
	"WAWebMuteCollection",
	"WAWebMuteGetters",
	"WAWebName.react",
	"WAWebNewsletterChatHeaderSubtitle.react",
	"WAWebParticipantsList.react",
	"WAWebPreloadChatMessagesAction",
	"WAWebStackedCirclesImage.react",
	"WAWebStateHoc_DEPRECATED.react",
	"WAWebStateUtils",
	"WAWebStatusChatlistRing.react",
	"WAWebTimerHoc_DEPRECATED.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserSubtitle.react",
	"WAWebWamEnumMediaPickerOriginType",
	"WAWebWamEnumStatusRowSection",
	"WAWebWid",
	"WAWebWidToJid",
	"WDSFocusStateStyles",
	"WDSFontTokenStyles",
	"gkx",
	"justknobx",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = [
		"chat",
		"doNotBoldUnread",
		"ephemeralIcon",
		"fakePin",
		"filterPreset",
		"firstCellInList",
		"forceActive",
		"hiddenSubgroupIcon",
		"hideArchivedIcon",
		"hideMuteIcon",
		"hidePin",
		"mode",
		"overrideCommunityAnnouncementGroupName",
		"skipCheckMark",
		"smallUnread",
		"testid",
		"theme"
	], u, c, d, m = d || (d = o("react")), p = d.PureComponent, _ = {
		LAST: "LAST",
		INFO: "INFO"
	}, f = "Files";
	function g(e, t) {
		return o("WAWebChatSearchQuery").isSearchResult(t) ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH : e.isNewsletter() ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_SUBSCRIBER_LIST : o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST;
	}
	var h = (function(t) {
		function n(e) {
			var n, a;
			return a = t.call(this, e) || this, a.$1 = 0, a.$3 = function(e) {
				a.$2 = e;
			}, a.$5 = function(e) {
				a.$4 = e;
			}, a.state = {
				active: !1,
				focused: !1,
				dragging: !1,
				searchText: "",
				contextMenu: null,
				wdsMenuOpen: !1,
				chatId: null,
				unreadCount: 0,
				isHovered: !1,
				chatAssignmentVisibleToUser: ((n = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT)) == null ? void 0 : n.enabled) === !0,
				assignedAgents: o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() ? o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(a.props.chat.id).toArray() : []
			}, a.$7 = function() {
				var e = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(a.props.chat);
				e !== a.state.unreadCount && a.setState({ unreadCount: e });
			}, a.$8 = function() {
				var e, t = a.props.chat;
				o("WAWebChatGetters").getIsGroup(t) && (e = t.groupMetadata) != null && e.stale && r("WAWebGroupMetadataCollection").find(t.id);
			}, a.$9 = function() {
				var e = a.props.chat;
				o("WAWebChatGetters").getIsGroup(e) && r("WAWebMemberLabelCollection").initializeLabelsForChat(o("WAWebWidToJid").widToGroupJid(e.id));
			}, a.$10 = function() {
				var e = a.props.chat;
				o("WAWebChatGetters").getIsGroup(e) && o("WAWebGroupHistoryParticipantStateHydration").initializeGroupHistoryStateForChat(e.id);
			}, a.$11 = function() {
				a.props.searchQuery ? a.setState({ searchText: a.props.searchQuery.trimmed() }) : o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Chat: prop searchQuery is undefined"])));
			}, a.$12 = function(e) {
				if (e === "focus") {
					var t = a.$4;
					t && (o("WAWebDomScroll").scrollIntoViewIfNeeded(t), r("WAWebFocusTracer").focus(t));
				}
				a.setState({ active: !!e });
			}, a.$13 = function() {
				if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
					var e = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(a.props.chat.id).toArray();
					a.setState({ assignedAgents: e });
				}
			}, a.contextEnabled = function() {
				var e = a.props.noContext;
				return !e;
			}, a.$14 = function(e) {
				a.contextEnabled() && (e.preventDefault(), e.stopPropagation(), a.$15 ? a.$15() : a.$16 && a.$16());
			}, a.assignChat = function() {
				var e = !!(a.props.searchQuery && !a.props.searchQuery.isEmptyQuery()), t = a.props.chat.archive;
				if (a.props.mode === _.INFO) {
					o("WAWebCmd").Cmd.assignChat(a.props.chat, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN);
					return;
				}
				if (e || t) {
					o("WAWebCmd").Cmd.assignChat(a.props.chat, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.MULTI_SELECT);
					return;
				}
				var n = a.props, r = n.multiSelection, i = n.onStartMultiSelect, l = n.selectableState;
				l && r && i && (l.setSelectable(!0), r.setVal(o("WAWebStateUtils").unproxy(a.props.chat)), i(o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatAssignment));
			}, a.$17 = function(e) {
				e.event && a.$16 ? a.$16(e.event) : e.anchor && a.$15 && a.$15();
			}, a.$16 = null, a.$15 = null, a.$18 = function(e) {
				a.$16 = e;
			}, a.$19 = function(e) {
				a.$15 = e;
			}, a.$20 = function(e) {
				a.setState({ wdsMenuOpen: e }), a.props.onContextMenuChange == null || a.props.onContextMenuChange(e);
			}, a.$21 = function() {
				a.setState({ contextMenu: null }), a.props.onContextMenuChange == null || a.props.onContextMenuChange(!1);
			}, a.$22 = function(e) {
				var t = a.props, n = t.chat, r = t.onClick;
				r && r(e, o("WAWebStateUtils").unproxy(n));
			}, a.$23 = function(e) {
				e.button === 0 && a.$22(e);
			}, a.$24 = function() {
				o("WAWebPreloadChatMessagesAction").preloadChatMessagesAction(o("WAWebStateUtils").unproxy(a.props.chat)), o("WAWebConversationPreloadGatingUtils").isConversationPreloadEnabled() && o("WAWebCmd").Cmd.trigger("warm_conversation", { chat: o("WAWebStateUtils").unproxy(a.props.chat) }), a.setState({ isHovered: !0 });
			}, a.$25 = function() {
				a.setState({ isHovered: !1 });
			}, a.$26 = function(e) {
				e.preventDefault(), e.stopPropagation(), a.$22(e);
			}, a.$27 = function(e) {
				if (a.props.chat.canSend) {
					var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
					t.hasType(f) && (a.$1 === 0 && a.setState({ dragging: !0 }), a.$1 += 1);
				}
			}, a.$28 = function(e) {
				if (a.props.chat.canSend) {
					var t = new (r("WAWebDataTransfer"))(e.dataTransfer);
					t.hasType(f) && (a.$1 -= 1, a.$1 === 0 && a.setState({ dragging: !1 }));
				}
			}, a.$29 = function(e) {
				var t = a.props.chat;
				if (t.canSend) {
					a.setState({ dragging: !1 });
					var n = new (r("WAWebDataTransfer"))(e.dataTransfer);
					n.hasType(f) && o("WAWebEventFiles").getFiles(e).then(function(e) {
						o("WAWebCmd").Cmd.openChatFromUnread({
							chat: t,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop
						}).then(function(n) {
							n && o("WAWebCmd").Cmd.attachMediaDrawer({
								chat: t,
								initCaption: t.getComposeContents(),
								attachments: e.map(function(e) {
									return { file: e };
								}),
								fileOrigin: o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY
							});
						});
					}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMediaLoadErrors").MediaDragDropError, function(e) {
						o("WAWebCmd").Cmd.openChatFromUnread({
							chat: t,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop
						}).then(function(n) {
							n && e.src && o("WAWebComposeBoxActions").ComposeBoxActions.paste(t, e.src);
						});
					}));
				}
			}, a.$30 = function(e) {
				a.setState({ focused: !0 });
			}, a.$31 = function() {
				a.setState({ focused: !1 });
			}, a.$32 = {
				enter: a.$26,
				space: a.$26,
				left: function() {
					return a.props.handleArrowKeyInChatItem == null ? void 0 : a.props.handleArrowKeyInChatItem(a.props.chat.id.toString());
				},
				right: function() {
					return a.props.handleArrowKeyInChatItem == null ? void 0 : a.props.handleArrowKeyInChatItem(a.props.chat.id.toString());
				}
			}, a.$6 = a.props.throttle(a.$7, 0, {
				leading: !1,
				trailing: !0
			}), a;
		}
		babelHelpers.inheritsLoose(n, t), n.getDerivedStateFromProps = function(t, n) {
			var e = {}, a = t.active, i = !1;
			if (a != null) {
				var l = a.value;
				l instanceof o("WAWebChatModel").Chat ? i = r("WAWebWid").equals(l.id, t.chat.id) : l instanceof r("WAWebWid") && r("WAWebWid").isGroup(l) && (i = r("WAWebWid").equals(l, t.chat.id));
			}
			n.active !== i && (e.active = !!i);
			var s = t.searchQuery ? t.searchQuery.trimmed() : "";
			n.searchText !== s && (e.searchText = s);
			var u = t.chat.id;
			return n.chatId !== u && (e.chatId = u, e.unreadCount = o("WAWebFrontendChatGetters").getOptimisticUnreadCount(t.chat)), e;
		};
		var a = n.prototype;
		return a.componentDidMount = function() {
			var e, t = this.props.chat;
			this.initListeners(this.props), o("WAWebChatGetters").getIsGroup(t) && (e = t.groupMetadata) != null && e.stale && o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$8), o("WAWebChatGetters").getIsGroup(t) && (o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$9), o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$10));
		}, a.componentDidUpdate = function(t) {
			var e = this.props.chat;
			if (e !== t.chat) {
				var n;
				o("WAWebChatGetters").getIsGroup(e) && (n = e.groupMetadata) != null && n.stale && o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$8), o("WAWebChatGetters").getIsGroup(e) && (o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$9), o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(this.$10));
			}
			o("WAWebFrontendChatGetters").getOptimisticUnreadCount(e) !== this.state.unreadCount && this.$6(), this.initListeners(this.props, t);
		}, a.initListeners = function(t, n) {
			var e = this, r = t.active, a = t.chat, i = t.listeners, l = t.searchQuery;
			n != null && n.searchQuery && n.searchQuery !== l && i.remove(n.searchQuery, o("WAWebChatSearchQuery").SEARCH_EVENT, this.$11), l && (!n || l !== n.searchQuery) && i.add(l, o("WAWebChatSearchQuery").SEARCH_EVENT, this.$11);
			var s = n == null ? void 0 : n.chat.id;
			if (!a.id.equals(s) && (n != null && n.active && i.remove(n.active, n.chat.id.toString(), this.$12), r)) {
				var u = a.id.toString();
				i.add(r, u, this.$12);
			}
			!n && o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() && i.add(o("WAWebFeatureFlagCollection").FeatureFlagCollection, "add remove change:enabled reset", function() {
				var t;
				e.setState({ chatAssignmentVisibleToUser: ((t = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT)) == null ? void 0 : t.enabled) === !0 });
			}), s && i.remove(o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(s), "add change remove", this.$13), i.add(o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(a.id), "add change remove", this.$13), o("WAWebABProps").getABPropConfigValue("web_anr_group_metadata_yield") ? n || i.add(o("WAWebChatCollection").ChatCollection, "change:isParentGroup", function(t) {
				var n;
				(t.id.equals(e.props.chat.id) || ((n = e.props.chat.groupMetadata) == null || (n = n.parentGroup) == null ? void 0 : n.equals(t.id)) === !0) && e.forceUpdate();
			}) : i.add(o("WAWebChatCollection").ChatCollection, "change:isParentGroup", function() {
				return e.forceUpdate();
			});
		}, a.render = function() {
			var t, n, a = this.props, i = a.chat, l = a.doNotBoldUnread, u = a.ephemeralIcon, d = a.fakePin, p = a.filterPreset, f = a.firstCellInList, h = a.forceActive, y = a.hiddenSubgroupIcon, C = a.hideArchivedIcon, b = a.hideMuteIcon, v = a.hidePin, S = a.mode, R = a.overrideCommunityAnnouncementGroupName, L = a.skipCheckMark, E = a.smallUnread, k = a.testid, I = a.theme, T = babelHelpers.objectWithoutPropertiesLoose(a, e), D = T.secondary, x = this.state, $ = x.active, P = x.assignedAgents, N = x.contextMenu, M = x.dragging, w = x.focused, A = x.isHovered, F = x.searchText, O = x.unreadCount, B = i.contact, W, q, U = null, V = o("WAWebChatAssignmentUtils").canAssignChat(i) && i.isAssignedToMe && i.unopenedByAssignedAgent, H = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(i), G = l !== !0 && (O !== 0 || V) && !H;
			switch (S) {
				case _.LAST:
					W = m.jsx(r("WAWebChatTimestamp.react"), {
						timestampColor: G ? "accent" : "contentDeemphasized",
						chat: i
					}), D == null && (D = m.jsx(r("WAWebChatstateInfo.react"), { chat: i }), q = m.jsx(o("WAWebChatIcons.react").Icons, {
						chat: i,
						mute: i.mute,
						unreadCount: O,
						hideArchivedIcon: C === !0,
						hideMuteIcon: b === !0,
						unreadMentionIcon: i.hasUnreadMention,
						smallUnread: E,
						hidePin: v,
						fakePin: d
					})), this.props.hideTertiaryRow !== !0 && o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(i, this.props.showCommunityInfo === !0) && (U = m.jsx(r("WAWebChatlistTertiaryPillsRow.react"), { chat: i }));
					break;
				case _.INFO:
					D == null && (o("WAWebChatGetters").getIsGroup(i) || o("WAWebChatGetters").getIsBroadcast(i) ? D = i.groupMetadata ? m.jsx(r("WAWebParticipantsList.react"), { groupMetadata: i.groupMetadata }) : null : o("WAWebChatGetters").getIsNewsletter(i) ? D = m.jsx(r("WAWebNewsletterChatHeaderSubtitle.react"), {
						newsletterMetadata: i.newsletterMetadata,
						location: "info"
					}) : B != null && (D = m.jsx(r("WAWebUserSubtitle.react"), { userSubtitle: {
						chatId: i.id,
						chatstate: i.presence.chatstate,
						contact: B,
						location: "list",
						presence: i.presence
					} })));
					break;
			}
			var z = this.props.photoSize;
			I === "chat-info" && (z = 49), (I === "subgroup" || I === "community-tab-subgroup") && (z = 40);
			var j = ((t = i.groupMetadata) == null ? void 0 : t.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, K = m.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: i.id,
				size: z,
				waitIdle: !r("WAWebEnvironment").isWindows,
				shape: j ? o("WAWebDetailImage.react").DetailImageShape.Squircle : null,
				ephemeralIcon: u,
				isHoveredOrActive: A || $,
				hiddenSubgroupIcon: y,
				showOutline: !1
			}), Q = this.props.showStatusRingAroundProfilePhoto === !0 && B != null ? m.jsx(r("WAWebStatusChatlistRing.react"), {
				contact: B,
				photoSize: z,
				waitIdle: !r("WAWebEnvironment").isWindows,
				rowSection: g(i.id, this.props.searchQuery),
				rowIndex: o("WAWebChatSearchQuery").isSearchResult(this.props.searchQuery) ? 0 : this.props.index || 0,
				isHoveredOrActive: A || $
			}) : K, X = this.props.showCommunityInfo, Y = X === void 0 ? !1 : X, J = o("WAWebChatGetters").getIsGroup(i) ? m.jsx(r("WAWebGroupChatImage.react"), {
				chat: i,
				regularChatImage: r("justknobx")._("550") ? Q : K,
				selection: this.props.active,
				showSpeakerForCag: this.props.showSpeakerForCag,
				showCommunityInfo: Y,
				isHovered: A,
				size: z,
				theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
			}) : null, Z = this.props.mouseDownAsClick, ee = r("gkx")("26258") ? !1 : o("WAWebMuteCollection").MuteCollection.getCollapseMuted() && !o("WAWebChatGetters").getIsNewsletter(i), te;
			N && (te = m.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ChatContextMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: this.$21,
				children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: N })
			}));
			var ne = o("WAWebChatAssignmentUtils").canAssignChat(i) && this.state.chatAssignmentVisibleToUser, re = this.props.searchMatch, oe = re == null || re.results.length === 0 ? F : re.results.map(function(e) {
				return re.match.substring(e.startIndex, e.startIndex + e.length);
			}).join(" "), ae = O !== 0 ? m.jsx("span", {
				className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
				children: O > 0 ? s._(
					/*BTDS*/
					"",
					[s._plural(O, "count")]
				) : s._(
					/*BTDS*/
					""
				)
			}) : null, ie = m.jsxs(m.Fragment, { children: [ae, m.jsx(o("WAWebName.react").Name, {
				chat: i,
				firstLabel: p == null ? void 0 : p.label,
				highlightText: oe,
				showBusinessCheckmark: B != null && o("WAWebContactGetters").getShowBusinessCheckmarkInChatlist(B),
				showLabelIcon: o("WAWebListsLabelGatingUtils").canDisplayLabel() && U == null,
				titlify: !0,
				ellipsify: !0,
				showChatAssignmentIcon: ne,
				assignedAgents: P,
				showMessageYourselfName: B != null && o("WAWebContactGetters").getIsMe(B),
				skipCheckMark: L,
				overrideCommunityAnnouncementGroupName: R,
				xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body1,
				truncateName: !0,
				unknownUserLogContext: "chat_list"
			})] }), le = null, se = o("WAWebChatEphemerality").getEphemeralSetting(i);
			se != null && se !== 0 && (le = m.jsx(o("WAWebAccessibility.react").InvisibleLabel, { children: o("WAWebEphemeralFbtKic").getDisappearingMessageExplanationStringKic(se) }));
			var ue, ce = this.props.showCommunityInfo === !0 && o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(i.groupMetadata);
			if (ce) {
				var de, me = (de = i.groupMetadata) == null ? void 0 : de.getParentGroupChat();
				me != null && (ue = m.jsx(o("WAWebName.react").Name, {
					chat: me,
					titlify: !0,
					ellipsify: !0
				}));
			}
			var pe = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "chat-cell-image",
				children: o("WAWebChatGetters").getIsGroup(i) && J != null ? J : Q
			}), _e = T.focused != null ? T.focused : w;
			return m.jsx(r("WAWebGroupMetadataContext").Provider, {
				value: i.groupMetadata,
				children: m.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
					ref: this.$5,
					handlers: this.$32,
					onFocus: this.$30,
					onBlur: this.$31,
					onContextMenu: this.$14,
					focusType: "keyboardOnly",
					onDragEnter: this.$27,
					onDragLeave: this.$28,
					onDrop: this.$29,
					"aria-selected": h != null ? h : $,
					"data-tab": this.props.tabOrder,
					tabIndex: $ || this.props.alwaysFocusable === !0 ? 0 : -1,
					children: [
						m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebChatCellContextMenuV2.react"), {
							chat: i,
							assignChat: this.assignChat,
							cellRef: this.$2,
							multiSelection: this.props.multiSelection,
							onStartMultiSelect: this.props.onStartMultiSelect,
							searchQuery: this.props.searchQuery,
							selectableState: this.props.selectableState,
							onContextMenuChange: this.$20,
							onContextMenuReady: this.$18,
							onChevronMenuReady: this.$19
						}), m.jsx(r("WAWebChatCell.react"), {
							id: i.id,
							ref: this.$3,
							theme: I,
							contextEnabled: this.contextEnabled,
							pendingAction: i.pendingAction,
							contextMenu: !!N || this.state.wdsMenuOpen,
							unreadStyle: G,
							active: h != null ? h : !!$,
							activeStyleType: this.props.activeStyleType,
							isMuted: ee && o("WAWebMuteGetters").getIsMuted(i.mute),
							dragging: !!M,
							image: pe,
							primary: ie,
							primaryDetail: W,
							secondary: D,
							secondaryDetail: q,
							onClick: Z ? void 0 : this.$22,
							onMouseDown: Z ? this.$23 : void 0,
							onContext: this.$17,
							onMouseEnter: this.$24,
							onMouseLeave: this.$25,
							testid: B != null && o("WAWebContactGetters").getIsMe(B) ? "message-yourself-row" : k,
							isNewsletter: o("WAWebChatGetters").getIsNewsletter(i),
							label: ue,
							tertiary: U,
							hideMeta: o("WAWebChatGetters").getIsNewsletter(i) && ((n = i.newsletterMetadata) == null ? void 0 : n.suspended),
							firstCellInList: f,
							className: (c || (c = r("stylex")))(_e && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent)
						})] }),
						le,
						te
					]
				})
			});
		}, n;
	})(p);
	h.CONCERNS = { chat: [
		"id",
		"isReadOnly",
		"pendingAction",
		"canSend",
		"contact",
		"presence",
		"groupMetadata",
		"newsletterMetadata",
		"mute",
		"pendingSeenCount",
		"unreadCount",
		"labels",
		"archive",
		"hasUnreadMention",
		"unopenedByAssignedAgent",
		"chatlistPreview",
		"lastReactionPreview",
		"isAssignedToMe",
		"msgs",
		"msgs",
		"msgsChanged",
		"pendingDeleteForMeCount",
		"isFavorite",
		"capiThreadControl",
		"isAiHandoff",
		"groupType",
		"active"
	] }, h.defaultProps = { mode: _.LAST };
	function y() {
		return r("WAWebTimerHoc_DEPRECATED.react")(o("WAWebListenerHoc_DEPRECATED").ListenerHOC(r("WAWebStateHoc_DEPRECATED.react")(h, h.CONCERNS)));
	}
	var C = y(), b = y();
	l.Mode = _, l.getChatlistRingRowSection = g, l.ChatFactory = y, l.Chat = C, l.ChatOrContact = b;
}), 226);
