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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(64), a = t.chat, i = t.elevatedPushNamesEnabled, l = t.source, u = o("LexicalComposerContext").useLexicalComposerContext(), d = u[0], m = a.groupMetadata, R = p(!1), P = R[0], N = R[1], M;
		n[0] !== m ? (M = v(m), n[0] = m, n[1] = M) : M = n[1];
		var w = M, A;
		n[2] !== m ? (A = S(m), n[2] = m, n[3] = A) : A = n[3];
		var F = A, O = w || F, B;
		n[4] !== O ? (B = {
			enabled: O,
			maxQueryLength: C,
			boundary: !0
		}, n[4] = O, n[5] = B) : B = n[5];
		var W = o("useWAWebLexicalTypeAhead").useTypeAhead(d, o("WAWebRichTextInputConst").AT_SYMBOL, B), q = W.leadOffset, U = W.omitQuery, V = W.query, H = W.replaceQuery, G;
		n[6] !== H ? (G = function(t) {
			H(function() {
				return new (o("Lexical")).TextNode(o("WAWebMentionSuggestionsUtils").formatMention(t));
			}, { trailingSpace: !0 });
		}, n[6] = H, n[7] = G) : G = n[7];
		var z = G, j;
		n[8] !== a || n[9] !== H ? (j = async function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.setNonJidMentions(a, 1), H(D, { trailingSpace: !0 }), o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(a, o("WAWebWamEnumMentionType").MENTION_TYPE.EVERYONE);
		}, n[8] = a, n[9] = H, n[10] = j) : j = n[10];
		var K = j, Q = T, X;
		n[11] !== a || n[12] !== z || n[13] !== K ? (X = function(t) {
			if (t.type === "mention_all") {
				K();
				return;
			}
			if (t.type === "contact" || t.type === "group") if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(a, [t.id])) o("WAWebLimitSharingUIUtils").showLimitSharingInvokeBlockedPopup(a);
			else {
				z(t.id);
				var e = t.type === "contact" ? o("WAWebWamEnumMentionType").MENTION_TYPE.REGULAR_USER : o("WAWebWamEnumMentionType").MENTION_TYPE.GROUP;
				o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(a, e);
			}
		}, n[11] = a, n[12] = z, n[13] = K, n[14] = X) : X = n[14];
		var Y = X, J;
		n[15] !== a || n[16] !== m || n[17] !== Y ? (J = function(t) {
			if (!(t.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)) && Q(t)) {
				if (t.type === "mention_all") {
					Y(t);
					return;
				}
				if (t.type !== "contact" && t.type !== "group") return;
				var e = t, n = e.id.isBot();
				n ? o("WAWebBotDisclaimerManager").enterBotTosFlow({
					noticeId: String(o("WAWebBotTosIds").getApplicableBotNoticeId(o("WAWebBotLogging").BotEntryPointType.Invoke)),
					botEntryPoint: o("WAWebBotLogging").BotEntryPointType.Invoke,
					chat: a,
					wamEntryPoint: m != null ? o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP : o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1
				}).then(function() {
					Y(e);
				}).catch(r("WAWebNoop")) : Y(e);
			}
		}, n[15] = a, n[16] = m, n[17] = Y, n[18] = J) : J = n[18];
		var Z = J, ee;
		n[19] !== U ? (ee = function() {
			U();
		}, n[19] = U, n[20] = ee) : ee = n[20];
		var te = ee, ne;
		n[21] !== a || n[22] !== d || n[23] !== i || n[24] !== z ? (ne = function(n, l) {
			switch (n.type) {
				case "contact": {
					var t = n, u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id), m = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForUsers(a, [t.id]), p = u || m;
					return t.id.isBot() && !o("WAWebBotTos").hasSeenMasterBotTos() && !o("WAWebBotTos").hasSeenInvokeTos() && !p ? c.jsx(r("WAWebBotInvokeUpsellRow.react"), { selected: l }) : c.jsx(o("WAWebMentionsPluginResult.react").UserResult, {
						contact: t.contact,
						term: t.query,
						theme: null,
						selected: l,
						disabled: p,
						disabledCTA: x(u, m),
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
							N(!1), z(t.id), o("WAWebMentionPickerActionLoggingUtils").logMentionPickerAction(a, o("WAWebWamEnumMentionType").MENTION_TYPE.NON_GROUP_USER, !0);
						},
						onAddCancelled: function() {
							N(!1), d.focus();
						},
						onAddDialogShown: function() {
							N(!0);
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
		}, n[21] = a, n[22] = d, n[23] = i, n[24] = z, n[25] = ne) : ne = n[25];
		var re = ne, oe;
		e: {
			var ae = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g;
			if (V == null) {
				oe = null;
				break e;
			}
			if (m == null) {
				oe = null;
				break e;
			}
			var ie = d.getEditorState().read(I);
			if (ie) {
				oe = null;
				break e;
			}
			var le;
			if (n[26] !== F || n[27] !== m || n[28] !== V || n[29] !== l || n[30] !== w) {
				var se = [], ue = w && F;
				if ((m == null ? void 0 : m.id) != null && $({
					groupMetadata: m,
					query: V,
					source: l
				})) {
					var ce;
					n[32] !== m.id || n[33] !== se.length || n[34] !== V ? (ce = {
						type: "mention_all",
						selectable: !0,
						index: se.length,
						itemKey: "mention-all",
						height: ae,
						contentKey: V,
						id: m.id,
						query: V
					}, n[32] = m.id, n[33] = se.length, n[34] = V, n[35] = ce) : ce = n[35], se.push(ce);
				}
				if (w) {
					var de = o("WAWebMentionsPluginUtil").getUserResults(V, m);
					if (de.length !== 0) {
						if (ue) {
							var me;
							n[36] !== se.length ? (me = {
								index: se.length,
								itemKey: "section-contacts",
								type: "contact_header",
								selectable: !1,
								height: f
							}, n[36] = se.length, n[37] = me) : me = n[37], se.push(me);
						}
						var pe = de.map(function(e, t) {
							return {
								type: "contact",
								selectable: !0,
								contact: e,
								id: e.id,
								height: ae,
								itemKey: e.id.toString(),
								contentKey: V,
								index: t + se.length,
								query: V
							};
						});
						se.push.apply(se, pe);
					}
				}
				if (F && m != null) {
					var _e = o("WAWebMentionsPluginUtil").getSubgroupResults(V, m);
					if (_e.length !== 0) {
						if (ue) {
							var fe;
							n[38] !== se.length ? (fe = {
								index: se.length,
								itemKey: "section-groups",
								type: "group_header",
								selectable: !1,
								height: f
							}, n[38] = se.length, n[39] = fe) : fe = n[39], se.push(fe);
						}
						var ge = _e.map(function(e, t) {
							return {
								type: "group",
								selectable: !0,
								groupMetadata: e,
								id: e.id,
								height: ae,
								itemKey: e.id.toString(),
								contentKey: V,
								index: t + se.length,
								query: V
							};
						});
						se.push.apply(se, ge);
					}
				}
				le = se.length ? se.slice(0, 15) : null, n[26] = F, n[27] = m, n[28] = V, n[29] = l, n[30] = w, n[31] = le;
			} else le = n[31];
			oe = le;
		}
		var he = oe, ye;
		e: {
			if (!o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_non_group_members_enabled")) {
				ye = !1;
				break e;
			}
			if (m == null) {
				ye = !1;
				break e;
			}
			if (l !== "chat-composer") {
				ye = !1;
				break e;
			}
			if (m.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
				ye = !1;
				break e;
			}
			if (!m.participants.canAdd()) {
				ye = !1;
				break e;
			}
			var Ce = m.parentGroup;
			if (Ce != null && !m.participants.iAmAdmin()) {
				var be = r("WAWebGroupMetadataCollection").get(Ce), ve = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(be);
				if (ve != null && ve.memberAddMode !== o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD) {
					ye = !1;
					break e;
				}
			}
			ye = !0;
		}
		var Se = ye, Re;
		e: {
			if (V == null || !Se) {
				Re = !1;
				break e;
			}
			var Le = r("countWhere")(he != null ? he : [], k);
			if (Le > 0) {
				Re = !1;
				break e;
			}
			var Ee = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
			if (Ee <= 0) {
				Re = !1;
				break e;
			}
			var ke = o("WAWebABProps").getABPropConfigValue("enhanced_mention_suggestions_min_mention_char_count");
			if (ke > 0 && V.length < ke) {
				Re = !1;
				break e;
			}
			Re = !0;
		}
		var Ie = Re, Te;
		e: {
			if (!Ie || m == null) {
				Te = null;
				break e;
			}
			var De;
			n[40] !== m ? (De = o("WAWebMentionsPluginUtil").getNonParticipantCandidates(m), n[40] = m, n[41] = De) : De = n[41], Te = De;
		}
		var xe = Te, $e;
		if (n[42] !== xe || n[43] !== V) {
			e: {
				if (V == null || xe == null) {
					$e = null;
					break e;
				}
				var Pe = o("WAWebABProps").getABPropConfigValue("enhanced_mention_limit");
				if (Pe <= 0) {
					$e = null;
					break e;
				}
				var Ne = o("WAWebMentionsPluginUtil").filterContactsByQuery(V, xe);
				if (Ne.length === 0) {
					$e = null;
					break e;
				}
				var Me = o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? h : g, we = [], Ae;
				n[45] === Symbol.for("react.memo_cache_sentinel") ? (Ae = {
					index: 0,
					itemKey: "section-non-participants-separator",
					type: "non_participant_separator",
					selectable: !1,
					height: y
				}, n[45] = Ae) : Ae = n[45], we.push(Ae);
				var Fe;
				n[46] !== V ? (Fe = function(t, n) {
					return {
						type: "non_participant_contact",
						selectable: !0,
						contact: t,
						id: t.id,
						height: Me,
						itemKey: "non-participant-" + t.id.toString(),
						contentKey: V,
						index: n + 1,
						query: V
					};
				}, n[46] = V, n[47] = Fe) : Fe = n[47];
				var Oe = Ne.slice(0, Pe).map(Fe);
				we.push.apply(we, Oe), $e = we;
			}
			n[42] = xe, n[43] = V, n[44] = $e;
		} else $e = n[44];
		var Be = $e, We;
		e: {
			if (he == null && Be == null) {
				We = null;
				break e;
			}
			var qe;
			if (n[48] !== Be || n[49] !== he) {
				if (qe = [], he != null) {
					var Ue;
					(Ue = qe).push.apply(Ue, he);
				}
				if (Be != null) {
					var Ve, He;
					n[51] !== Be ? (He = Be.filter(E), n[51] = Be, n[52] = He) : He = n[52];
					var Ge = He;
					(Ve = qe).push.apply(Ve, Ge);
				}
				n[48] = Be, n[49] = he, n[50] = qe;
			} else qe = n[50];
			We = qe.length > 0 ? qe : null;
		}
		var ze = We, je, Ke;
		n[53] !== ze || n[54] !== re || n[55] !== Z || n[56] !== P ? (je = P ? [] : (ze != null ? ze : []).map(function(e) {
			return {
				renderFn: function(n) {
					return re(e, n);
				},
				onSelect: function() {
					return Z(e);
				},
				width: 360,
				height: r("nullthrows")(e.height),
				skipKeyboardNav: e.type === "contact_header" || e.type === "group_header" || e.type === "non_participant_separator" || e.type === "contact" && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
			};
		}), Ke = je.findIndex(L), n[53] = ze, n[54] = re, n[55] = Z, n[56] = P, n[57] = je, n[58] = Ke) : (je = n[57], Ke = n[58]);
		var Qe = Ke, Xe;
		return n[59] !== Qe || n[60] !== te || n[61] !== je || n[62] !== q ? (Xe = c.jsx(r("WAWebLexicalTypeAheadList.react"), {
			leadOffset: q,
			items: je,
			onCancel: te,
			startingIndex: Qe
		}), n[59] = Qe, n[60] = te, n[61] = je, n[62] = q, n[63] = Xe) : Xe = n[63], Xe;
	}
	function L(e) {
		return e.skipKeyboardNav === !1;
	}
	function E(e) {
		return e.type !== "non_participant_separator";
	}
	function k(e) {
		return e.selectable;
	}
	function I() {
		var e = o("WAWebLexicalUtils").$getRangeSelection();
		if (!e) return !1;
		var t = e.anchor.getNode();
		return t instanceof o("WAWebMentionNode").MentionNode;
	}
	function T(e) {
		return e.type === "group" || e.type === "contact" || e.type === "mention_all";
	}
	function D() {
		return new (o("WAWebNonJidMentionNode")).NonJidMentionNode({ text: "@all" });
	}
	function x(e, t) {
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
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t, n, r = e.groupMetadata, a = e.query, i = e.source;
		if (i === "message_edit" || !"all".startsWith(a)) return !1;
		var l = o("WAWebABProps").getABPropConfigValue("admin_only_mention_everyone_group_size"), s = (t = r.participants.iAmAdmin()) != null ? t : !1, u = (n = r.participants.length) != null ? n : 0, c = u < l || s;
		return c && o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_sender_web");
	}
	l.default = R;
}), 226);
