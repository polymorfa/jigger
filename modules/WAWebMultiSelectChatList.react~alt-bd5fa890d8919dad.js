__d("WAWebMultiSelectChatList.react", [
	"fbt",
	"WALogger",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebCellFrame.react",
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebChatComparator",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatModel",
	"WAWebChatUnblockableContactWrapper.react",
	"WAWebCheckBox.react",
	"WAWebCheckboxSelectableWrapper.react",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactGetters",
	"WAWebContactModel",
	"WAWebEmptyState.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlatList.react",
	"WAWebFrontendChatGetters",
	"WAWebGroupMetadataCollection",
	"WAWebL10NAccentFold",
	"WAWebLidMigrationUtils",
	"WAWebLogStatusPrivacySettings",
	"WAWebModalManager",
	"WAWebMultiSelectChatListTypes",
	"WAWebMultiSelectListHotKeys.react",
	"WAWebNewsletterCollection",
	"WAWebNonContactPushNameSearchModel",
	"WAWebNoop",
	"WAWebPhoneNumberSearch",
	"WAWebReachoutTimelockActions",
	"WAWebReachoutTimelockButterBarLoadable.react",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebRound.react",
	"WAWebSectionHeader.react",
	"WAWebStatusJidUtils",
	"WAWebStatusPostingUtils",
	"WAWebStatusPrivacySettingsFlowLoadable",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTosCountryGating",
	"WAWebTosGating",
	"WAWebUserPrefsMeUser",
	"WDSButton.react",
	"WDSIconIcMoreHoriz.react",
	"WDSIconWdsIcAddToStatus.react",
	"compactMap",
	"countWhere",
	"react",
	"useWAWebHover",
	"useWAWebListener",
	"useWAWebPrevious",
	"useWAWebStableCallback",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useMemo, g = m.useRef, h = m.useState, y = {
		SEC_CHATS: "SEC_CHATS",
		SEC_MY_NEWSLETTERS: "SEC_MY_NEWSLETTERS",
		SEC_CONTACTS: "SEC_CONTACTS",
		SEC_NON_CONTACT_PUSHNAME: "SEC_NON_CONTACT_PUSHNAME",
		REACHOUT_TIMELOCK_BANNER: "REACHOUT_TIMELOCK_BANNER"
	}, C = {
		myStatus: {
			color: "x1pse0pq",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		emptyStateFill: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			minHeight: "x2lwn1j",
			$$css: !0
		}
	};
	function b(e) {
		var t, n = e.active, a = e.model, i = e.onEditStatusAudience, l = s._(
			/*BTDS*/
			""
		), u = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), c = u.statusPostingPrivacyConfig, m = u.updateStatusPostingPrivacyConfig, p = c ? o("WAWebStatusPostingUtils").formatStatusSetting(c) : null, _ = g(null), f = o("useWAWebHover").useWAWebHover(_), h = function(t) {
			if (t.stopPropagation(), i != null) {
				i();
				return;
			}
			o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
				statusPostingPrivacyConfig: c,
				setStatusPostingPrivacyConfig: m,
				surface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS
			}));
		}, y = d.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcMoreHoriz.react"),
			onPress: h,
			variant: "borderless",
			testid: "status-privacy-config-button"
		}), b = d.jsx(o("WAWebRound.react").Round, {
			xstyle: C.myStatus,
			theme: o("WAWebRound.react").RoundTheme.NoShadow,
			children: d.jsx(r("WDSIconWdsIcAddToStatus.react"), { directional: !0 })
		});
		return d.jsx(r("WAWebCellFrame.react"), {
			ref: _,
			active: f || ((t = n.value) == null ? void 0 : t.id.equals(a.id)),
			focusable: !0,
			image: b,
			primary: l,
			secondary: p,
			testid: "my-status-row",
			theme: "chat-checkbox",
			onClick: r("WAWebNoop"),
			detail: y
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t, n = e.active, r = e.chat, a = e.customSecondaryText, i = e.disabled, l = e.ephemeralIcon, u = e.hasFrequentlyForwarded, c = e.isMaxGroupsSelected, m = e.isMaxNewslettersSelected, p = e.onEditStatusAudience, _ = e.selected, f = i, g = a == null ? void 0 : a(r, i), h = !!((t = r.groupMetadata) != null && t.noFrequentlyForwarded);
		u && h ? (f = !0, g = s._(
			/*BTDS*/
			""
		)) : (c && !_ || m && !_ && o("WAWebChatGetters").getIsNewsletter(r)) && (f = !0);
		var y = f ? "chat-checkbox-disabled" : "chat-checkbox";
		return r.id.isStatus() ? d.jsx(b, {
			active: n,
			model: r,
			onEditStatusAudience: p
		}) : d.jsx(o("WAWebChat.react").ChatOrContact, {
			theme: y,
			active: n,
			chat: r,
			mode: o("WAWebChat.react").Mode.INFO,
			noContext: !0,
			secondary: g,
			ephemeralIcon: l
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.contact, n = e.customSecondaryText, r = e.disabled, a = e.isMetaAiBot, i = e.isSearchResult, l = n == null ? void 0 : n(t, r);
		return r && l != null ? l : a ? s._(
			/*BTDS*/
			""
		) : !i && o("WAWebContactGetters").getIsMe(t) ? s._(
			/*BTDS*/
			""
		) : null;
	}
	function R(e) {
		var t = e.active, n = e.contact, o = e.customSecondaryText, a = e.disabled, i = e.ephemeralIcon, l = e.isMetaAiBot, s = l === void 0 ? !1 : l, u = e.isSearchResult, c = S({
			contact: n,
			customSecondaryText: o,
			disabled: a,
			isMetaAiBot: s,
			isSearchResult: u
		});
		return d.jsx(r("WAWebChatUnblockableContactWrapper.react"), {
			contact: n,
			onSelect: r("WAWebNoop"),
			active: t,
			customSecondaryText: c,
			ephemeralIcon: i,
			disabled: a,
			theme: "multi-select-chat-list"
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.active, n = e.children, a = e.isDisabled, i = e.isMaxChatsSelected, l = e.model, s = e.onClick, u = e.selected, c = e.selections, m = c.isSelected(l), p = i && !m, _;
		a && (_ = a(l), p || (p = _));
		var f = function() {
			_ || s(l);
		};
		return d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
			onClick: f,
			active: t,
			wrapperTestid: "checkbox-selectable-wrapper",
			model: l,
			selections: c,
			disabled: p,
			checkboxTheme: o("WAWebCheckBox.react").CheckboxTheme.OUTLINE,
			children: n(p)
		}, l.id.toString());
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.active, n = e.customSecondaryText, a = e.data, i = e.ephemeralIcon, l = e.hasFrequentlyForwarded, c = e.isDisabled, m = e.isMaxChatsSelected, p = e.isMaxGroupsSelected, _ = e.isMaxNewslettersSelected, f = e.isSearchResult, g = e.onChatClick, h = e.onEditStatusAudience, C = e.selections;
		switch (a.type) {
			case y.REACHOUT_TIMELOCK_BANNER: return d.jsx(o("WAWebReachoutTimelockButterBarLoadable.react").ReachoutTimelockButterBarLoadable, {});
			case y.SEC_CHATS: return d.jsx(r("WAWebSectionHeader.react"), {
				header: s._(
					/*BTDS*/
					""
				),
				uppercase: !1
			});
			case y.SEC_MY_NEWSLETTERS: return a.type === y.SEC_MY_NEWSLETTERS ? d.jsx(r("WAWebSectionHeader.react"), {
				header: s._(
					/*BTDS*/
					""
				),
				uppercase: !1
			}) : d.jsx(r("WAWebSectionHeader.react"), {
				header: s._(
					/*BTDS*/
					""
				),
				uppercase: !1
			});
			case y.SEC_CONTACTS: return d.jsx(r("WAWebSectionHeader.react"), {
				header: s._(
					/*BTDS*/
					""
				),
				uppercase: !1
			});
			case y.SEC_NON_CONTACT_PUSHNAME: return d.jsx(r("WAWebSectionHeader.react"), {
				header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader(),
				uppercase: !1
			});
			case o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS: {
				var b = a.data, S = C.isSelected(b);
				return d.jsx(L, {
					isMaxChatsSelected: m,
					onClick: g,
					active: t,
					model: b,
					selections: C,
					selected: S,
					isDisabled: c,
					children: function(r) {
						return o("WAWebChatGetters").getIsUser(b) ? d.jsx(R, {
							active: t,
							contact: b.contact,
							customSecondaryText: n,
							disabled: r,
							ephemeralIcon: i,
							isSearchResult: f
						}) : d.jsx(v, {
							active: t,
							chat: b,
							customSecondaryText: n,
							disabled: r,
							ephemeralIcon: i,
							hasFrequentlyForwarded: l,
							isMaxGroupsSelected: p,
							isMaxNewslettersSelected: _,
							onEditStatusAudience: h,
							selected: S
						});
					}
				});
			}
			case o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS: {
				var E = a.data, k = C.isSelected(E);
				return d.jsx(L, {
					isMaxChatsSelected: m,
					onClick: g,
					active: t,
					model: E,
					selections: C,
					selected: k,
					isDisabled: c,
					children: function(r) {
						return d.jsx(R, {
							active: t,
							contact: a.data,
							customSecondaryText: n,
							disabled: r,
							ephemeralIcon: i,
							isSearchResult: f,
							isMetaAiBot: o("WAWebBotUtils").isMetaAiBot(E.id)
						});
					}
				});
			}
			default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebMultiSelectChatList"]))), new (o("WAWebFlatList.react")).UnknownDataError(a);
		}
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.flatList, n = e.isEmpty, r = e.searchText;
		return n ? r ? d.jsx(o("WAWebEmptyState.react").Search, {}) : d.jsx(o("WAWebEmptyState.react").ListChats, {}) : t;
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.active, l = a.customItemSecondaryText, u = a.ephemeralIcon, c = a.excludeChat, m = a.excludeContacts, b = m === void 0 ? !1 : m, v = a.flatListController, S = a.getInitialItems, R = a.hasForwarded, L = R === void 0 ? !1 : R, I = a.hasFrequentlyForwarded, T = I === void 0 ? !1 : I, D = a.includeNewsletters, x = D === void 0 ? !1 : D, $ = a.isCommunityExistingGroupsDrawer, P = $ === void 0 ? !1 : $, N = a.isDisabled, M = a.maxChats, w = a.onChatsLoaded, A = a.onEditStatusAudience, F = a.onSelectionChanged, O = a.searchText, B = a.selections, W = r("useWAWebPrevious")(O), q = o("WAWebStatusJidUtils").getStatusChat(), U = function(t) {
			return t.filter(function(e) {
				return !o("WAWebTosGating").shouldBlockByTos(e) && !o("WAWebTosCountryGating").shouldBlockByCountry(e);
			});
		}, V = function(t, n) {
			var e = n;
			if (e) {
				e = o("WAWebL10NAccentFold").accentFold(e);
				var a = o("WAWebPhoneNumberSearch").numberSearch(e);
				return t.filter(function(t) {
					return t.canSend && o("WAWebFrontendChatGetters").getShouldAppearInList(t) && t.contact.searchMatchExact(e, a);
				});
			}
			return t.filter(function(e) {
				return e.canSend && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			}).sort(r("WAWebChatComparator"));
		}, H = function(t) {
			var e = t, n = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: !0 });
			if (a.includeMetaAi === !0) {
				var r = o("WAWebBotFrontendUtils").getMetaAiContact();
				r && n.push(r);
			}
			if (a.includeHatch === !0) {
				var i = o("WAWebBotFrontendUtils").getHatchContact();
				i && n.push(i);
			}
			if (!e) return n;
			e = o("WAWebL10NAccentFold").accentFold(e);
			var l = o("WAWebPhoneNumberSearch").numberSearch(e);
			return n.filter(function(t) {
				return t.searchMatchExact(e, l);
			});
		}, G = r("useWAWebStableCallback")(function(e) {
			var t = {}, n = V(o("WAWebChatCollection").ChatCollection, e), i = x ? V(r("WAWebNewsletterCollection"), e) : [], l = r("compactMap")(n, function(e) {
				if (o("WAWebChatGetters").getIsBroadcast(e) || o("WAWebChatGroupUtils").isSuspendedGroup(e) || a.includeMetaAi !== !0 && o("WAWebBotUtils").isMetaAiBot(e.id) || a.includeHatch !== !0 && o("WAWebBotUtils").isHatchBot(e.id) || a.chatFilter && !a.chatFilter(e)) return null;
				var n = o("WAWebLidMigrationUtils").toPn(e.id);
				return n && (t[n] = !0), e;
			}), s = [];
			if (!b) {
				var u = U(H(e)), c = l.some(function(e) {
					return o("WAWebBotUtils").isMetaAiBot(e.id);
				}), d = l.some(function(e) {
					return o("WAWebBotUtils").isHatchBot(e.id);
				});
				s = r("compactMap")(u, function(e) {
					if (c && o("WAWebBotUtils").isMetaAiBot(e.id) || d && o("WAWebBotUtils").isHatchBot(e.id)) return null;
					var n = o("WAWebLidMigrationUtils").toPn(e.id);
					return n && t[n] || a.contactFilter && !a.contactFilter(e) ? null : e;
				}), o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(s);
			}
			if (!e) {
				var m = function(t, n) {
					return o("WAWebUserPrefsMeUser").isMeAccount(t.id) ? -1 : o("WAWebUserPrefsMeUser").isMeAccount(n.id) ? 1 : 0;
				};
				l.sort(m), s.sort(m);
			}
			return P && l.sort(function(e, t) {
				if (N) {
					var n = r("WAWebGroupMetadataCollection").get(e.id.toString()), o = (n == null ? void 0 : n.isUnnamed) === !0;
					if (N(e) && !o) return 1;
					if (N(t)) return -1;
				}
				return 1;
			}), {
				statusChat: q,
				chats: l,
				contacts: s,
				newsletters: i
			};
		}), z = h(function() {
			return G(O);
		}), j = z[0], K = z[1], Q = g(null), X = g(null), Y = f(function() {
			if (b) return o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
			var e = U(o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(O));
			if (a.contactFilter != null && (e = e.filter(a.contactFilter)), c != null) {
				var t = o("WAWebUserPrefsMeUser").isMeAccount(c.id);
				e = e.filter(function(e) {
					return t ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id) : !c.id.equals(e.id);
				});
			}
			return o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(e), e.length === 0 ? o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES : e;
		}, [
			c,
			b,
			a.contactFilter,
			O
		]), J = f(function() {
			return o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(Y, j.chats, j.contacts);
		}, [
			Y,
			j.chats,
			j.contacts
		]), Z = r("useWAWebStableCallback")(function(e) {
			var t = e.chats, n = e.contacts, r = e.newsletters, i = e.statusChat, l = i != null && a.includeMyStatus === !0 ? [i] : [];
			return l.concat(t, n, r, o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(Y, t, n));
		});
		p(function() {
			var e = Z(j);
			i.init(e), S && S().forEach(function(e) {
				return B.setVal(e, !0);
			}), w && w(e);
		}, []);
		var ee = h(!1), te = ee[0], ne = ee[1], re = h(!1), oe = re[0], ae = re[1], ie = h(!1), le = ie[0], se = ie[1];
		o("useWAWebListener").useListener(B, "all", function() {
			ne(r("countWhere")(B.getSelected(), function(e) {
				return e instanceof r("WAWebContactModel") || !o("WAWebChatGetters").getIsNewsletter(e);
			}) === M), ae(L && B.getSelected().some(function(e) {
				return e instanceof o("WAWebChatModel").Chat ? o("WAWebChatGetters").getIsGroup(e) : o("WAWebContactGetters").getIsGroup(e);
			})), se(B.getSelected().some(function(e) {
				return e instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsNewsletter(e);
			}));
		});
		var ue = function(t) {
			var e = t.chat, n = t.focus, r = t.willBeSelected;
			if (r) {
				var l, u;
				if (typeof M == "number" && B.getSelected().length >= M) if (P && F) {
					F(e, r);
					return;
				} else if (T) l = s._(
					/*BTDS*/
					"",
					[s._plural(M, "count")]
				), u = {
					actionText: s._(
						/*BTDS*/
						""
					),
					onAction: function() {
						return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl());
					}
				};
				else {
					var c;
					l = (c = a.maxChatsExceedErrorMsg) != null ? c : s._(
						/*BTDS*/
						"",
						[s._plural(M, "count")]
					);
				}
				else oe && (e instanceof o("WAWebChatModel").Chat ? o("WAWebChatGetters").getIsGroup(e) : o("WAWebContactGetters").getIsGroup(e)) ? (l = s._(
					/*BTDS*/
					""
				), u = {
					actionText: s._(
						/*BTDS*/
						""
					),
					onAction: function() {
						return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl());
					}
				}) : le && e instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsNewsletter(e) && (l = s._(
					/*BTDS*/
					""
				));
				if (l != null) {
					o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
						msg: l,
						action: u
					}), o("WAWebToastManager").ToastPosition.CENTER);
					return;
				}
			}
			B.setVal(e, r, n), i.setVal(e, n), F && F(e, r);
		}, ce = function(t) {
			var e;
			(e = X.current) == null || e.scrollIntoViewIfNeeded(t);
		}, de = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndHidden()) {
				if (t instanceof o("WAWebChatModel").Chat && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
					chat: t,
					contact: t.contact
				})) {
					o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				if (t instanceof r("WAWebContactModel")) {
					var e = t, n = e.id, a = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(n);
					if (!o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
						chat: a,
						contact: e
					})) {
						o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
						return;
					}
				}
			}
			var i = B.isSelected(t);
			ue({
				chat: t,
				focus: !1,
				willBeSelected: !i
			});
		};
		p(function() {
			if (O !== W) {
				var e = G(O);
				K(e), i.init(Z(e));
			}
		}, [
			i,
			G,
			W,
			O,
			Z
		]);
		var me = function() {
			var e = j.chats, t = j.contacts, n = j.newsletters;
			return !e.length && !t.length && !n.length && !J.length;
		}, pe = function() {
			var e = [], t = j.chats, n = j.contacts, r = j.newsletters, i = c != null && o("WAWebUserPrefsMeUser").isMeAccount(c.id), l = c ? t.filter(function(e) {
				return i ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id) : !c.id.equals(e.id);
			}) : t, s = c ? n.filter(function(e) {
				return i ? !o("WAWebUserPrefsMeUser").isMeAccount(e.id) : !c.id.equals(e.id);
			}) : n;
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && e.push({
				itemKey: y.REACHOUT_TIMELOCK_BANNER,
				type: y.REACHOUT_TIMELOCK_BANNER,
				height: 110
			}), a.includeMetaAi === !0) {
				var u = o("WAWebBotFrontendUtils").maybeGetTopMetaAiRow(l, s);
				u && !o("WAWebBotGating").isAiAsContactEnabled() && (e.push(u), l = l.filter(function(e) {
					return !o("WAWebBotUtils").isMetaAiBot(e.id);
				}), s = s.filter(function(e) {
					return !o("WAWebBotUtils").isMetaAiBot(e.id);
				}));
			}
			return a.includeMyStatus === !0 && e.push({
				itemKey: q.id.toString(),
				type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
				data: q
			}), l.length && (b !== !0 && e.push({
				itemKey: y.SEC_CHATS,
				type: y.SEC_CHATS
			}), e.push.apply(e, l.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
					data: e
				};
			}))), r.length && (e.push({
				itemKey: y.SEC_MY_NEWSLETTERS,
				type: y.SEC_MY_NEWSLETTERS
			}), e.push.apply(e, r.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS,
					data: e
				};
			}))), s.length && (e.push({
				itemKey: y.SEC_CONTACTS,
				type: y.SEC_CONTACTS
			}), e.push.apply(e, s.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
					data: e
				};
			}))), J.length && (e.push({
				itemKey: y.SEC_NON_CONTACT_PUSHNAME,
				type: y.SEC_NON_CONTACT_PUSHNAME
			}), e.push.apply(e, J.map(function(e) {
				return {
					itemKey: "non-contact-pushname-" + e.id.toString(),
					type: o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS,
					data: e
				};
			}))), e;
		}, _e = function(t) {
			var e = j.chats, n = j.contacts, r;
			if (e.length) r = e[0];
			else if (n.length) r = n[0];
			else if (J.length) r = J[0];
			else return;
			var o = !B.isSelected(r);
			ue({
				chat: r,
				focus: t,
				willBeSelected: o
			});
		};
		return _(n, function() {
			return { toggleFirst: _e };
		}), d.jsx(r("WAWebMultiSelectListHotKeys.react"), {
			active: a.active,
			onLeave: a.onLeaveList,
			ref: Q,
			onIndexChange: ce,
			xstyle: me() ? C.emptyStateFill : void 0,
			children: d.jsx(k, {
				flatList: d.jsx(o("WAWebFlatList.react").FlatList, {
					ref: X,
					flatListController: v,
					direction: "vertical",
					forceConsistentRenderCount: !1,
					data: pe(),
					renderItem: function(t) {
						return d.jsx(E, {
							data: t,
							active: i,
							isSearchResult: !!O,
							selections: B,
							hasFrequentlyForwarded: T,
							ephemeralIcon: u,
							onChatClick: de,
							isMaxChatsSelected: te,
							isMaxGroupsSelected: oe,
							isMaxNewslettersSelected: le,
							isDisabled: N,
							customSecondaryText: l,
							onEditStatusAudience: A
						});
					}
				}),
				searchText: O,
				isEmpty: me()
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]", l.default = I;
}), 226);
