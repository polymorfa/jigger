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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(16), n = e.active, a = e.model, i = e.onEditStatusAudience, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var u = l, c = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), m = c.statusPostingPrivacyConfig, p = c.updateStatusPostingPrivacyConfig, _;
		t[1] !== m ? (_ = m ? o("WAWebStatusPostingUtils").formatStatusSetting(m) : null, t[1] = m, t[2] = _) : _ = t[2];
		var f = _, h = g(null), y = o("useWAWebHover").useWAWebHover(h), b;
		if (t[3] !== i || t[4] !== m || t[5] !== p) {
			var v = function(t) {
				if (t.stopPropagation(), i != null) {
					i();
					return;
				}
				o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
					statusPostingPrivacyConfig: m,
					setStatusPostingPrivacyConfig: p,
					surface: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.STATUS_PRIVACY_SETTINGS
				}));
			};
			b = d.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcMoreHoriz.react"),
				onPress: v,
				variant: "borderless",
				testid: "status-privacy-config-button"
			}), t[3] = i, t[4] = m, t[5] = p, t[6] = b;
		} else b = t[6];
		var S = b, R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = d.jsx(o("WAWebRound.react").Round, {
			xstyle: C.myStatus,
			theme: o("WAWebRound.react").RoundTheme.NoShadow,
			children: d.jsx(r("WDSIconWdsIcAddToStatus.react"), { directional: !0 })
		}), t[7] = R) : R = t[7];
		var L = R, E;
		if (t[8] !== n || t[9] !== y || t[10] !== a) {
			var k;
			E = y || ((k = n.value) == null ? void 0 : k.id.equals(a.id)), t[8] = n, t[9] = y, t[10] = a, t[11] = E;
		} else E = t[11];
		var I;
		return t[12] !== f || t[13] !== S || t[14] !== E ? (I = d.jsx(r("WAWebCellFrame.react"), {
			ref: h,
			active: E,
			focusable: !0,
			image: L,
			primary: u,
			secondary: f,
			testid: "my-status-row",
			theme: "chat-checkbox",
			onClick: r("WAWebNoop"),
			detail: S
		}), t[12] = f, t[13] = S, t[14] = E, t[15] = I) : I = t[15], I;
	}
	function v(e) {
		var t, n = o("react-compiler-runtime").c(15), r = e.active, a = e.chat, i = e.customSecondaryText, l = e.disabled, u = e.ephemeralIcon, c = e.hasFrequentlyForwarded, m = e.isMaxGroupsSelected, p = e.isMaxNewslettersSelected, _ = e.onEditStatusAudience, f = e.selected, g = l, h;
		n[0] !== a || n[1] !== i || n[2] !== l ? (h = i == null ? void 0 : i(a, l), n[0] = a, n[1] = i, n[2] = l, n[3] = h) : h = n[3];
		var y = h, C = !!((t = a.groupMetadata) != null && t.noFrequentlyForwarded);
		if (c && C) {
			g = !0;
			var v;
			n[4] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
				/*BTDS*/
				""
			), n[4] = v) : v = n[4], y = v;
		} else (m && !f || p && !f && o("WAWebChatGetters").getIsNewsletter(a)) && (g = !0);
		var S = g ? "chat-checkbox-disabled" : "chat-checkbox";
		if (a.id.isStatus()) {
			var R;
			return n[5] !== r || n[6] !== a || n[7] !== _ ? (R = d.jsx(b, {
				active: r,
				model: a,
				onEditStatusAudience: _
			}), n[5] = r, n[6] = a, n[7] = _, n[8] = R) : R = n[8], R;
		}
		var L;
		return n[9] !== r || n[10] !== a || n[11] !== u || n[12] !== y || n[13] !== S ? (L = d.jsx(o("WAWebChat.react").ChatOrContact, {
			theme: S,
			active: r,
			chat: a,
			mode: o("WAWebChat.react").Mode.INFO,
			noContext: !0,
			secondary: y,
			ephemeralIcon: u
		}), n[9] = r, n[10] = a, n[11] = u, n[12] = y, n[13] = S, n[14] = L) : L = n[14], L;
	}
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
		var t = o("react-compiler-runtime").c(12), n = e.active, a = e.contact, i = e.customSecondaryText, l = e.disabled, s = e.ephemeralIcon, u = e.isMetaAiBot, c = e.isSearchResult, m = u === void 0 ? !1 : u, p;
		t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== m || t[4] !== c ? (p = S({
			contact: a,
			customSecondaryText: i,
			disabled: l,
			isMetaAiBot: m,
			isSearchResult: c
		}), t[0] = a, t[1] = i, t[2] = l, t[3] = m, t[4] = c, t[5] = p) : p = t[5];
		var _ = p, f;
		return t[6] !== n || t[7] !== a || t[8] !== l || t[9] !== s || t[10] !== _ ? (f = d.jsx(r("WAWebChatUnblockableContactWrapper.react"), {
			contact: a,
			onSelect: r("WAWebNoop"),
			active: n,
			customSecondaryText: _,
			ephemeralIcon: s,
			disabled: l,
			theme: "multi-select-chat-list"
		}), t[6] = n, t[7] = a, t[8] = l, t[9] = s, t[10] = _, t[11] = f) : f = t[11], f;
	}
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
		var t = o("react-compiler-runtime").c(48), n = e.active, a = e.customSecondaryText, i = e.data, l = e.ephemeralIcon, c = e.hasFrequentlyForwarded, m = e.isDisabled, p = e.isMaxChatsSelected, _ = e.isMaxGroupsSelected, f = e.isMaxNewslettersSelected, g = e.isSearchResult, h = e.onChatClick, C = e.onEditStatusAudience, b = e.selections;
		switch (i.type) {
			case y.REACHOUT_TIMELOCK_BANNER: {
				var S;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (S = d.jsx(o("WAWebReachoutTimelockButterBarLoadable.react").ReachoutTimelockButterBarLoadable, {}), t[0] = S) : S = t[0], S;
			}
			case y.SEC_CHATS: {
				var E;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (E = d.jsx(r("WAWebSectionHeader.react"), {
					header: s._(
						/*BTDS*/
						""
					),
					uppercase: !1
				}), t[1] = E) : E = t[1], E;
			}
			case y.SEC_MY_NEWSLETTERS: {
				if (i.type === y.SEC_MY_NEWSLETTERS) {
					var k;
					return t[2] === Symbol.for("react.memo_cache_sentinel") ? (k = d.jsx(r("WAWebSectionHeader.react"), {
						header: s._(
							/*BTDS*/
							""
						),
						uppercase: !1
					}), t[2] = k) : k = t[2], k;
				}
				var I;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (I = d.jsx(r("WAWebSectionHeader.react"), {
					header: s._(
						/*BTDS*/
						""
					),
					uppercase: !1
				}), t[3] = I) : I = t[3], I;
			}
			case y.SEC_CONTACTS: {
				var T;
				return t[4] === Symbol.for("react.memo_cache_sentinel") ? (T = d.jsx(r("WAWebSectionHeader.react"), {
					header: s._(
						/*BTDS*/
						""
					),
					uppercase: !1
				}), t[4] = T) : T = t[4], T;
			}
			case y.SEC_NON_CONTACT_PUSHNAME: {
				var D;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (D = d.jsx(r("WAWebSectionHeader.react"), {
					header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader(),
					uppercase: !1
				}), t[5] = D) : D = t[5], D;
			}
			case o("WAWebMultiSelectChatListTypes").Row.ROW_CHATS: {
				var x = i.data, $;
				t[6] !== x || t[7] !== b ? ($ = b.isSelected(x), t[6] = x, t[7] = b, t[8] = $) : $ = t[8];
				var P = $, N;
				t[9] !== n || t[10] !== x || t[11] !== a || t[12] !== l || t[13] !== c || t[14] !== _ || t[15] !== f || t[16] !== g || t[17] !== C || t[18] !== P ? (N = function(t) {
					return o("WAWebChatGetters").getIsUser(x) ? d.jsx(R, {
						active: n,
						contact: x.contact,
						customSecondaryText: a,
						disabled: t,
						ephemeralIcon: l,
						isSearchResult: g
					}) : d.jsx(v, {
						active: n,
						chat: x,
						customSecondaryText: a,
						disabled: t,
						ephemeralIcon: l,
						hasFrequentlyForwarded: c,
						isMaxGroupsSelected: _,
						isMaxNewslettersSelected: f,
						onEditStatusAudience: C,
						selected: P
					});
				}, t[9] = n, t[10] = x, t[11] = a, t[12] = l, t[13] = c, t[14] = _, t[15] = f, t[16] = g, t[17] = C, t[18] = P, t[19] = N) : N = t[19];
				var M;
				return t[20] !== n || t[21] !== x || t[22] !== m || t[23] !== p || t[24] !== h || t[25] !== P || t[26] !== b || t[27] !== N ? (M = d.jsx(L, {
					isMaxChatsSelected: p,
					onClick: h,
					active: n,
					model: x,
					selections: b,
					selected: P,
					isDisabled: m,
					children: N
				}), t[20] = n, t[21] = x, t[22] = m, t[23] = p, t[24] = h, t[25] = P, t[26] = b, t[27] = N, t[28] = M) : M = t[28], M;
			}
			case o("WAWebMultiSelectChatListTypes").Row.ROW_CONTACTS: {
				var w = i.data, A;
				t[29] !== w || t[30] !== b ? (A = b.isSelected(w), t[29] = w, t[30] = b, t[31] = A) : A = t[31];
				var F = A, O;
				t[32] !== n || t[33] !== w.id || t[34] !== a || t[35] !== i.data || t[36] !== l || t[37] !== g ? (O = function(t) {
					return d.jsx(R, {
						active: n,
						contact: i.data,
						customSecondaryText: a,
						disabled: t,
						ephemeralIcon: l,
						isSearchResult: g,
						isMetaAiBot: o("WAWebBotUtils").isMetaAiBot(w.id)
					});
				}, t[32] = n, t[33] = w.id, t[34] = a, t[35] = i.data, t[36] = l, t[37] = g, t[38] = O) : O = t[38];
				var B;
				return t[39] !== n || t[40] !== w || t[41] !== m || t[42] !== p || t[43] !== h || t[44] !== F || t[45] !== b || t[46] !== O ? (B = d.jsx(L, {
					isMaxChatsSelected: p,
					onClick: h,
					active: n,
					model: w,
					selections: b,
					selected: F,
					isDisabled: m,
					children: O
				}), t[39] = n, t[40] = w, t[41] = m, t[42] = p, t[43] = h, t[44] = F, t[45] = b, t[46] = O, t[47] = B) : B = t[47], B;
			}
			default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebMultiSelectChatList"]))), new (o("WAWebFlatList.react")).UnknownDataError(i);
		}
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(2), n = e.flatList, r = e.isEmpty, a = e.searchText;
		if (r) {
			if (a) {
				var i;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = d.jsx(o("WAWebEmptyState.react").Search, {}), t[0] = i) : i = t[0], i;
			}
			var l;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = d.jsx(o("WAWebEmptyState.react").ListChats, {}), t[1] = l) : l = t[1], l;
		}
		return n;
	}
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
