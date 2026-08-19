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
	"asyncToGeneratorRuntime",
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
		var a = t.chat, i = t.elevatedPushNamesEnabled, l = t.source, u = o("LexicalComposerContext").useLexicalComposerContext(), d = u[0], R = a.groupMetadata, k = p(!1), I = k[0], T = k[1], D = v(R), x = S(R), $ = o("useWAWebLexicalTypeAhead").useTypeAhead(d, o("WAWebRichTextInputConst").AT_SYMBOL, {
			enabled: D || x,
			maxQueryLength: C,
			boundary: !0
		}), P = $.leadOffset, N = $.omitQuery, M = $.query, w = $.replaceQuery, A = function(t) {
			w(function() {
				return new (o("Lexical")).TextNode(o("WAWebMentionSuggestionsUtils").formatMention(t));
			}, { trailingSpace: !0 });
		}, F = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(a, 1), w(function() {
					return new (o("WAWebNonJidMentionNode")).NonJidMentionNode({ text: "@all" });
				}, { trailingSpace: !0 }), o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(a, o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), O = function(t) {
			return t.type === "group" || t.type === "contact" || t.type === "mention_all";
		}, B = function(t) {
			if (t.type === "mention_all") {
				F();
				return;
			}
			if (t.type === "contact" || t.type === "group") if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(a, [t.id])) o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(a);
			else {
				A(t.id);
				var e = t.type === "contact" ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
				o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(a, e);
			}
		}, W = function(t) {
			if (!(t.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)) && O(t)) {
				if (t.type === "mention_all") {
					B(t);
					return;
				}
				if (t.type !== "contact" && t.type !== "group") return;
				var e = t, n = e.id.isBot();
				n ? o("WAWebBotDisclaimerManager").enterBotTosFlow({
					noticeId: String(o("WAWebBotTosIds").getApplicableBotNoticeId(o("WAWebBotLogging").BotEntryPointType.Invoke)),
					botEntryPoint: o("WAWebBotLogging").BotEntryPointType.Invoke,
					chat: a,
					wamEntryPoint: R != null ? o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP : o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1
				}).then(function() {
					B(e);
				}).catch(r("WAWebNoop")) : B(e);
			}
		}, q = function() {
			N();
		}, U = function(n, l) {
			switch (n.type) {
				case "contact": {
					var t = n, u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id), m = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(a, [t.id]), p = u || m;
					return t.id.isBot() && !o("WAWebBotTos").hasSeenMasterBotTos() && !o("WAWebBotTos").hasSeenInvokeTos() && !p ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: l }) : c.jsx(o("WAWebMentionsPluginResult.react").UserResult, {
						contact: t.contact,
						term: t.query,
						theme: null,
						selected: l,
						disabled: p,
						disabledCTA: L(u, m),
						elevatedPushNamesEnabled: i
					}, t.contact.id.toString());
				}
				case "group": {
					var f = n;
					return c.jsx(o("WAWebMentionsPluginResult.react").GroupResult, {
						groupMetadata: f.groupMetadata,
						term: f.query,
						theme: null,
						selected: l
					}, f.groupMetadata.id.toString());
				}
				case "mention_all": return c.jsx(o("WAWebMentionsPluginResult.react").MentionAllResult, { selected: l });
				case "non_participant_contact": {
					var g = n;
					return c.jsx(o("WAWebMentionsPluginResult.react").NonParticipantUserResult, {
						contact: g.contact,
						chat: a,
						term: g.query,
						theme: null,
						selected: l,
						elevatedPushNamesEnabled: i,
						onAddConfirmed: function(t) {
							T(!1), A(t.id), o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(a, o("WAWebWamEnumMentionType").MENTION_TYPE.NON_GROUP_USER, !0);
						},
						onAddCancelled: function() {
							T(!1), d.focus();
						},
						onAddDialogShown: function() {
							T(!0);
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
		}, V = m(function() {
			var e = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g;
			if (M == null || R == null) return null;
			var t = d.getEditorState().read(function() {
				var e = o("WAWebLexicalUtils").$getRangeSelection();
				if (!e) return !1;
				var t = e.anchor.getNode();
				return t instanceof o("WAWebMentionNode").MentionNode;
			});
			if (t) return null;
			var n = [], r = D && x;
			if ((R == null ? void 0 : R.id) != null && E({
				groupMetadata: R,
				query: M,
				source: l
			}) && n.push({
				type: "mention_all",
				selectable: !0,
				index: n.length,
				itemKey: "mention-all",
				height: e,
				contentKey: M,
				id: R.id,
				query: M
			}), D) {
				var a = o("WAWebMentionsPluginUtil").getUserResults(M, R);
				if (a.length !== 0) {
					r && n.push({
						index: n.length,
						itemKey: "section-contacts",
						type: "contact_header",
						selectable: !1,
						height: f
					});
					var i = a.map(function(t, r) {
						return {
							type: "contact",
							selectable: !0,
							contact: t,
							id: t.id,
							height: e,
							itemKey: t.id.toString(),
							contentKey: M,
							index: r + n.length,
							query: M
						};
					});
					n.push.apply(n, i);
				}
			}
			if (x && R != null) {
				var s = o("WAWebMentionsPluginUtil").getSubgroupResults(M, R);
				if (s.length !== 0) {
					r && n.push({
						index: n.length,
						itemKey: "section-groups",
						type: "group_header",
						selectable: !1,
						height: f
					});
					var u = s.map(function(t, r) {
						return {
							type: "group",
							selectable: !0,
							groupMetadata: t,
							id: t.id,
							height: e,
							itemKey: t.id.toString(),
							contentKey: M,
							index: r + n.length,
							query: M
						};
					});
					n.push.apply(n, u);
				}
			}
			return n.length ? n.slice(0, 15) : null;
		}, [
			M,
			R,
			d,
			D,
			x,
			l
		]), H = m(function() {
			if (!o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_non_group_members_enabled") || R == null || l !== "chat-composer" || R.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || !R.participants.canAdd()) return !1;
			var e = R.parentGroup;
			if (e != null && !R.participants.iAmAdmin()) {
				var t = r("WAWebGroupMetadataCollection").get(e), n = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(t);
				if (n != null && n.memberAddMode !== o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD) return !1;
			}
			return !0;
		}, [R, l]), G = m(function() {
			if (M == null || !H) return !1;
			var e = r("countWhere")(V != null ? V : [], function(e) {
				return e.selectable;
			});
			if (e > 0) return !1;
			var t = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
			if (t <= 0) return !1;
			var n = o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_min_mention_char_count");
			return !(n > 0 && M.length < n);
		}, [
			M,
			H,
			V
		]), z = m(function() {
			return !G || R == null ? null : o("WAWebMentionsPluginUtil").getNonParticipantCandidates(R);
		}, [G, R]), j = m(function() {
			if (M == null || z == null) return null;
			var e = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
			if (e <= 0) return null;
			var t = o("WAWebMentionsPluginUtil").filterContactsByQuery(M, z);
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
					contentKey: M,
					index: t + 1,
					query: M
				};
			});
			return r.push.apply(r, a), r;
		}, [M, z]), K = m(function() {
			if (V == null && j == null) return null;
			var e = [];
			if (V != null && e.push.apply(e, V), j != null) {
				var t = j.filter(function(e) {
					return e.type !== "non_participant_separator";
				});
				e.push.apply(e, t);
			}
			return e.length > 0 ? e : null;
		}, [V, j]), Q = I ? [] : (K != null ? K : []).map(function(e) {
			return {
				renderFn: function(n) {
					return U(e, n);
				},
				onSelect: function() {
					return W(e);
				},
				width: 360,
				height: r("nullthrows")(e.height),
				skipKeyboardNav: e.type === "contact_header" || e.type === "group_header" || e.type === "non_participant_separator" || e.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
			};
		}), X = Q.findIndex(function(e) {
			return e.skipKeyboardNav === !1;
		});
		return c.jsx(r("WAWebLexicalTypeAheadList.react"), {
			leadOffset: P,
			items: Q,
			onCancel: q,
			startingIndex: X
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
