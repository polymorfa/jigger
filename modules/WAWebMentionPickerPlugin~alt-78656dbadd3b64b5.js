__d("WAWebMentionPickerPlugin", [
	"fbt",
	"Lexical",
	"LexicalComposerContext",
	"WAWebABProps",
	"WAWebBotDisclaimerManager",
	"WAWebBotInvokeUpsellRow.react",
	"WAWebBotLogging",
	"WAWebBotTos",
	"WAWebBotTosIds",
	"WAWebBotUtils",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebComposeBoxActions",
	"WAWebFbtCommon",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebLexicalTypeAheadList.react",
	"WAWebLexicalUtils",
	"WAWebLimitSharingUIUtils",
	"WAWebMentionNode",
	"WAWebMentionPickerActionLoggingUtils",
	"WAWebMentionSuggestionsUtils",
	"WAWebMentionsPluginResult.react",
	"WAWebMentionsPluginUtil",
	"WAWebNonJidMentionNode",
	"WAWebNoop",
	"WAWebPushnameConstants",
	"WAWebRichTextInputConst",
	"WAWebSchemaGroupMetadata",
	"WAWebTextStatusGatingUtils",
	"WAWebWamEnumBotEntryPointType",
	"WAWebWamEnumMentionType",
	"WDSMargins.stylex",
	"countWhere",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebLexicalTypeAhead"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState, _ = { marginInline1: {
		marginInlineStart: "xm2jcoa",
		marginInlineEnd: "x1mpyi22",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, f = 42, g = 52, h = 60, y = 9, C = o("WAWebPushnameConstants").MAX_PUSHNAME_LENGTH * 2, b = { separator: {
		borderInlineEndStyle: "x18oe1m7",
		borderBottomStyle: "x1sy0etr",
		borderInlineStartStyle: "xstzfhl",
		borderTopStyle: "x13fuv20",
		borderTopWidth: "x178xt8z",
		borderTopColor: "xx42vgk",
		$$css: !0
	} };
	function v(e) {
		return !(e == null || (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP);
	}
	function S(e) {
		return (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && e != null && e.participants.iAmAdmin() ? !0 : (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || (e == null ? void 0 : e.groupType) === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP;
	}
	function R(t) {
		var n = t.chat, a = t.elevatedPushNamesEnabled, i = t.source, l = o("LexicalComposerContext").useLexicalComposerContext(), u = l[0], d = n.groupMetadata, R = p(!1), k = R[0], I = R[1], T = v(d), D = S(d), x = o("useWAWebLexicalTypeAhead").useTypeAhead(u, o("WAWebRichTextInputConst").AT_SYMBOL, {
			enabled: T || D,
			maxQueryLength: C,
			boundary: !0
		}), $ = x.leadOffset, P = x.omitQuery, N = x.query, M = x.replaceQuery, w = function(t) {
			M(function() {
				return new (o("Lexical")).TextNode(o("WAWebMentionSuggestionsUtils").formatMention(t));
			}, { trailingSpace: !0 });
		}, A = async function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(n, 1), M(function() {
				return new (o("WAWebNonJidMentionNode")).NonJidMentionNode({ text: "@all" });
			}, { trailingSpace: !0 }), o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(n, o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE);
		}, F = function(t) {
			return t.type === "group" || t.type === "contact" || t.type === "mention_all";
		}, O = function(t) {
			if (t.type === "mention_all") {
				A();
				return;
			}
			if (t.type === "contact" || t.type === "group") if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(n, [t.id])) o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(n);
			else {
				w(t.id);
				var e = t.type === "contact" ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
				o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(n, e);
			}
		}, B = function(t) {
			if (!(t.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)) && F(t)) {
				if (t.type === "mention_all") {
					O(t);
					return;
				}
				if (t.type !== "contact" && t.type !== "group") return;
				var e = t, a = e.id.isBot();
				a ? o("WAWebBotDisclaimerManager").enterBotTosFlow({
					noticeId: String(o("WAWebBotTosIds").getApplicableBotNoticeId(o("WAWebBotLogging").BotEntryPointType.Invoke)),
					botEntryPoint: o("WAWebBotLogging").BotEntryPointType.Invoke,
					chat: n,
					wamEntryPoint: d != null ? o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP : o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1
				}).then(function() {
					O(e);
				}).catch(r("WAWebNoop")) : O(e);
			}
		}, W = function() {
			P();
		}, q = function(i, l) {
			switch (i.type) {
				case "contact": {
					var t = i, d = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id), m = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(n, [t.id]), p = d || m;
					return t.id.isBot() && !o("WAWebBotTos").hasSeenMasterBotTos() && !o("WAWebBotTos").hasSeenInvokeTos() && !p ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: l }) : c.jsx(o("WAWebMentionsPluginResult.react").UserResult, {
						contact: t.contact,
						term: t.query,
						theme: null,
						selected: l,
						disabled: p,
						disabledCTA: L(d, m),
						elevatedPushNamesEnabled: a
					}, t.contact.id.toString());
				}
				case "group": {
					var f = i;
					return c.jsx(o("WAWebMentionsPluginResult.react").GroupResult, {
						groupMetadata: f.groupMetadata,
						term: f.query,
						theme: null,
						selected: l
					}, f.groupMetadata.id.toString());
				}
				case "mention_all": return c.jsx(o("WAWebMentionsPluginResult.react").MentionAllResult, { selected: l });
				case "non_participant_contact": {
					var g = i;
					return c.jsx(o("WAWebMentionsPluginResult.react").NonParticipantUserResult, {
						contact: g.contact,
						chat: n,
						term: g.query,
						theme: null,
						selected: l,
						elevatedPushNamesEnabled: a,
						onAddConfirmed: function(t) {
							I(!1), w(t.id), o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(n, o("WAWebWamEnumMentionType").MENTION_TYPE.NON_GROUP_USER, !0);
						},
						onAddCancelled: function() {
							I(!1), u.focus();
						},
						onAddDialogShown: function() {
							I(!0);
						}
					}, g.contact.id.toString());
				}
				case "contact_header": return c.jsx("div", {
					className: "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
					children: s._(
						/*BTDS*/
						""
					)
				});
				case "group_header": return c.jsx("div", {
					className: "x1v5yvga x1f6kntn x1yc453h xo1l8bm x5kalc8 x78zum5 x6s0dn4 xvmahel x1onr9mi",
					children: s._(
						/*BTDS*/
						""
					)
				});
				case "non_participant_separator": return c.jsx("hr", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
					b.separator,
					o("WDSMargins.stylex").wdsMargins.marginVer4,
					_.marginInline1
				])));
			}
		}, U = m(function() {
			var e = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g;
			if (N == null || d == null) return null;
			var t = u.getEditorState().read(function() {
				var e = o("WAWebLexicalUtils").$getRangeSelection();
				if (!e) return !1;
				var t = e.anchor.getNode();
				return t instanceof o("WAWebMentionNode").MentionNode;
			});
			if (t) return null;
			var n = [], r = T && D;
			if ((d == null ? void 0 : d.id) != null && E({
				groupMetadata: d,
				query: N,
				source: i
			}) && n.push({
				type: "mention_all",
				selectable: !0,
				index: n.length,
				itemKey: "mention-all",
				height: e,
				contentKey: N,
				id: d.id,
				query: N
			}), T) {
				var a = o("WAWebMentionsPluginUtil").getUserResults(N, d);
				if (a.length !== 0) {
					r && n.push({
						index: n.length,
						itemKey: "section-contacts",
						type: "contact_header",
						selectable: !1,
						height: f
					});
					var l = a.map(function(t, r) {
						return {
							type: "contact",
							selectable: !0,
							contact: t,
							id: t.id,
							height: e,
							itemKey: t.id.toString(),
							contentKey: N,
							index: r + n.length,
							query: N
						};
					});
					n.push.apply(n, l);
				}
			}
			if (D && d != null) {
				var s = o("WAWebMentionsPluginUtil").getSubgroupResults(N, d);
				if (s.length !== 0) {
					r && n.push({
						index: n.length,
						itemKey: "section-groups",
						type: "group_header",
						selectable: !1,
						height: f
					});
					var c = s.map(function(t, r) {
						return {
							type: "group",
							selectable: !0,
							groupMetadata: t,
							id: t.id,
							height: e,
							itemKey: t.id.toString(),
							contentKey: N,
							index: r + n.length,
							query: N
						};
					});
					n.push.apply(n, c);
				}
			}
			return n.length ? n.slice(0, 15) : null;
		}, [
			N,
			d,
			u,
			T,
			D,
			i
		]), V = m(function() {
			if (!o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_non_group_members_enabled") || d == null || i !== "chat-composer" || d.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || !d.participants.canAdd()) return !1;
			var e = d.parentGroup;
			if (e != null && !d.participants.iAmAdmin()) {
				var t = r("WAWebGroupMetadataCollection").get(e), n = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(t);
				if (n != null && n.memberAddMode !== o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD) return !1;
			}
			return !0;
		}, [d, i]), H = m(function() {
			if (N == null || !V) return !1;
			var e = r("countWhere")(U != null ? U : [], function(e) {
				return e.selectable;
			});
			if (e > 0) return !1;
			var t = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
			if (t <= 0) return !1;
			var n = o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_min_mention_char_count");
			return !(n > 0 && N.length < n);
		}, [
			N,
			V,
			U
		]), G = m(function() {
			return !H || d == null ? null : o("WAWebMentionsPluginUtil").getNonParticipantCandidates(d);
		}, [H, d]), z = m(function() {
			if (N == null || G == null) return null;
			var e = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
			if (e <= 0) return null;
			var t = o("WAWebMentionsPluginUtil").filterContactsByQuery(N, G);
			if (t.length === 0) return null;
			var n = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g, r = [];
			r.push({
				index: 0,
				itemKey: "section-non-participants-separator",
				type: "non_participant_separator",
				selectable: !1,
				height: y
			});
			var a = t.slice(0, e).map(function(e, t) {
				return {
					type: "non_participant_contact",
					selectable: !0,
					contact: e,
					id: e.id,
					height: n,
					itemKey: "non-participant-" + e.id.toString(),
					contentKey: N,
					index: t + 1,
					query: N
				};
			});
			return r.push.apply(r, a), r;
		}, [N, G]), j = m(function() {
			if (U == null && z == null) return null;
			var e = [];
			if (U != null && e.push.apply(e, U), z != null) {
				var t = z.filter(function(e) {
					return e.type !== "non_participant_separator";
				});
				e.push.apply(e, t);
			}
			return e.length > 0 ? e : null;
		}, [U, z]), K = k ? [] : (j != null ? j : []).map(function(e) {
			return {
				renderFn: function(n) {
					return q(e, n);
				},
				onSelect: function() {
					return B(e);
				},
				width: 360,
				height: r("nullthrows")(e.height),
				skipKeyboardNav: e.type === "contact_header" || e.type === "group_header" || e.type === "non_participant_separator" || e.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
			};
		}), Q = K.findIndex(function(e) {
			return e.skipKeyboardNav === !1;
		});
		return c.jsx(r("WAWebLexicalTypeAheadList.react"), {
			leadOffset: $,
			items: K,
			onCancel: W,
			startingIndex: Q
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e, t) {
		return e ? c.jsx("div", {
			className: "xhslqc4",
			children: s._(
				/*BTDS*/
				""
			)
		}) : t ? c.jsx("div", {
			className: "xo1mcw5",
			children: r("WAWebFbtCommon")("Learn more")
		}) : null;
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t, n, r = e.groupMetadata, a = e.query, i = e.source;
		if (i === "message_edit" || !"all".startsWith(a)) return !1;
		var l = o("WAWebABProps").getABPropConfigValue("admin_only_mention_everyone_group_size"), s = (t = r.participants.iAmAdmin()) != null ? t : !1, u = (n = r.participants.length) != null ? n : 0, c = u < l || s;
		return c && o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_sender_web");
	}
	l.default = R;
}), 226);
