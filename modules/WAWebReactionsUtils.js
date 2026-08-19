__d("WAWebReactionsUtils", [
	"fbt",
	"Promise",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebAddOnBubbleType",
	"WAWebBizCtwaAGMUtils",
	"WAWebBotGating",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebCmd",
	"WAWebCommonNewsletterEnums",
	"WAWebDBMsgUtils",
	"WAWebDefaultReactions",
	"WAWebEmoji",
	"WAWebEnvironment",
	"WAWebFbtIntlList",
	"WAWebFrontendMsgGetters",
	"WAWebKeepInChatMsgUtils",
	"WAWebMiscGatingUtils",
	"WAWebMsgActionCapability",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgModelUtils",
	"WAWebMsgReply",
	"WAWebMsgType",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebReactionsBEUtils",
	"WAWebRecentReactionsCollection",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"sumBy"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = 4, d = 30 * o("WATimeUtils").DAY_MILLISECONDS;
	function m(e) {
		var t = new Map();
		e.forEach(function(e) {
			var n = null;
			if (e.reactionByMe) {
				var r = e.reactionByMe.reactionText;
				n = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(r);
				var a = t.get(n);
				if (a) {
					var i, l, s = ((i = a.reactionByMe) == null ? void 0 : i.timestamp) || 0, u = ((l = e.reactionByMe) == null ? void 0 : l.timestamp) || 0;
					(a.reactionByMe && s < u || !a.reactionByMe) && (a.reactionByMe = e.reactionByMe);
				}
			}
			e.reactions.forEach(function(n) {
				var r = n.aggregateEmoji, o = n.senders.toArray(), a = t.get(r);
				if (a) {
					var i = a.reactionSenders.concat(o);
					a.reactionSenders = i, t.set(r, a);
				} else {
					var l = n.hasReactionByMe ? e.reactionByMe : null, s = {
						reactionByMe: l,
						reactionSenders: o,
						reactionAggregate: r
					};
					t.set(r, s);
				}
			});
		});
		var n = Array.from(t.values()).map(function(e) {
			var t = e.reactionSenders.sort(function(e, t) {
				return o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) && !o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid) ? -1 : o("WAWebUserPrefsMeUser").isSerializedWidMe(t.senderUserJid) && !o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) ? 1 : t.timestamp - e.timestamp;
			});
			return babelHelpers.extends({}, e, { reactionSenders: t });
		}), r = n.sort(function(e, t) {
			return e.reactionByMe && t.reactionByMe ? t.reactionSenders.length === e.reactionSenders.length ? t.reactionByMe.timestamp - e.reactionByMe.timestamp : t.reactionSenders.length - e.reactionSenders.length : e.reactionByMe ? -1 : t.reactionByMe ? 1 : t.reactionSenders.length === e.reactionSenders.length ? t.reactionSenders[0].timestamp - e.reactionSenders[0].timestamp : t.reactionSenders.length - e.reactionSenders.length;
		});
		return r;
	}
	function p(e) {
		var t = [], n = 0;
		if (e.length === 0) return {
			numberOfSenderReactions: n,
			reactionArrayEmojis: t
		};
		if (e.length === 1) {
			var r = e[0], o = c, a = r.reactions.slice(0, o);
			t = a.map(function(e) {
				e.hasReactionByMe && r.reactionByMe;
				var t = e.hasReactionByMe ? r.reactionByMe : null, n = {
					reactionByMe: t,
					reactionAggregate: e.aggregateEmoji,
					reactionSenders: e.senders.toArray()
				};
				return n;
			}), n = r.reactions.sumBy(function(e) {
				return e.senders.length;
			});
		} else return _(e);
		return {
			numberOfSenderReactions: n,
			reactionArrayEmojis: t
		};
	}
	function _(e) {
		var t = [], n = 0, o = m(e), a = P(), i = o.slice(0, a);
		return t = i.map(function(e) {
			return e;
		}), n = r("sumBy")(o, function(e) {
			return e.reactionSenders.length;
		}), {
			numberOfSenderReactions: n,
			reactionArrayEmojis: t
		};
	}
	function f(e) {
		e.forEach(function(e) {
			var t = o("WAWebMsgCollection").MsgCollection.get(e);
			t != null && o("WAWebMsgModelUtils").isLastMsg(t) && o("WAWebCmd").Cmd.reactionChangeLastMessage();
		});
	}
	function g(e, t) {
		var n = t.map(function(e) {
			return e.reactionByMe ? e.reactionByMe.reactionText : e.reactionAggregate;
		}), o = r("WAWebFbtIntlList")(n, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
		return e === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("reactions_content", o)]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(e, "num_sender_reactions"), s._param("reactions_content", o)]
		);
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("name", e), s._param("reactionContent", t)]
		);
	}
	function y(e) {
		return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.id.remote.isNewsletter();
	}
	function C(e, t) {
		if (y(e)) return !0;
		if (!o("WAWebReactionsBEUtils").canHaveReactions(e) || t === o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER && e.type === o("WAWebMsgType").MSG_TYPE.STICKER) return !1;
		var n = o("WAWebFrontendMsgGetters").getChat(e), r = n.groupMetadata;
		return r != null && r.isCag ? e.messageSecret != null : !0;
	}
	function b(e, t) {
		var n, r = (n = t.newsletterMetadata) == null ? void 0 : n.reactionCodesSetting;
		return r === void 0 || e === "" || r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All ? !0 : r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic ? (function() {
			var t = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e);
			return o("WAWebDefaultReactions").DEFAULT_REACTIONS.some(function(n) {
				return e === n || t === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n);
			});
		})() : r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Blocklist ? !0 : r === o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None ? !1 : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + r);
		})();
	}
	function v(e) {
		return Date.now() - e.t * 1e3 < d;
	}
	function S(e, t) {
		var n;
		return o("WAWebMsgActionCapability").isNewsletterMsgOnServer(e) && o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled() && v(e) && ((n = t.newsletterMetadata) == null ? void 0 : n.reactionCodesSetting) !== o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None;
	}
	function R(e) {
		var t, n;
		if (!o("WAWebReactionsBEUtils").canHaveReactions(e) || e.isCarouselCard) return !1;
		var r = o("WAWebFrontendMsgGetters").getChat(e);
		if (r.id.isAiHub() || o("WAWebChatGetters").getIsBroadcast(r)) return !1;
		if (o("WAWebChatGetters").getIsNewsletter(r)) return S(e, r);
		if (o("WAWebKeepInChatMsgUtils").isExpiredAndNotKept(e) || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
			isAGMShown: (t = e.ctwaContext) == null ? void 0 : t.automatedGreetingMessageShown,
			msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
			msgSubtype: e.subtype,
			msgType: e.type
		})) return !1;
		var a = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
		if (a != null) return o("WAWebBotGating").shouldRenderStructuredRichResponseMsg(a);
		var i = r.groupMetadata;
		if (i != null && i.announce) {
			if (i.isCag) {
				var l = o("WAWebChatGroupUtils").getGroupParticipantsCount(i);
				return o("WAWebMiscGatingUtils").cagReactionsSend(l) && e.messageSecret != null;
			}
			return o("WAWebMsgReply").replyChecks(e);
		}
		return o("WAWebMsgReply").canReplyMsg(e);
	}
	function L(e) {
		var t = e.id, n = e.parentMsgKey, o = e.reactionText, a = e.senderUserJid, i = {
			parentMsgKey: r("WAWebMsgKey").fromString(n),
			msgKey: t,
			reactionText: o,
			senderUserJid: a
		};
		return i;
	}
	function E(e) {
		var t, n, r, a;
		e.reactionSenders.length;
		var i = (t = (n = e.reactionByMe) == null ? void 0 : n.reactionText) != null ? t : (r = e.reactionSenders[0]) == null ? void 0 : r.reactionText;
		return i == null ? "" : (a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(i)) != null ? a : i;
	}
	function k(e, t) {
		if (!(e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT || e === "")) {
			var n = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e);
			o("WAWebRecentReactionsCollection").RecentReactionsCollection.add({
				id: n,
				reactionText: e,
				timestamp: t
			}, { merge: !0 });
		}
	}
	function I(e) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a, i = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t.reactionParentKey), l = r("nullthrows")((a = t.author) != null ? a : t.from);
			if (i && !o("WAWebReactionsBEUtils").canHaveReactions(i)) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[createReactionsRow] reactions not allowed for msgType ", ""])), i.type), (u || (u = n("Promise"))).resolve();
			var s = o("WAWebWidFactory").asUserWidOrThrow(l), c = {
				msgKey: t.id.toString(),
				parentMsgKey: t.reactionParentKey.toString(),
				senderUserJid: s.toString(),
				reactionText: t.reactionText,
				timestamp: t.reactionTimestamp,
				orphan: 0,
				orphanReason: void 0,
				read: !1
			};
			return c;
		}), T.apply(this, arguments);
	}
	function D(e, t) {
		var n = [], r = e.map(function(e) {
			return o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e);
		}), a = t != null ? o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t) : null;
		return r.forEach(function(r, i) {
			var l = o("WAWebRecentReactionsCollection").RecentReactionsCollection.get(r);
			t != null && r === a ? n.push(t) : l != null ? n.push(l.reactionText) : n.push(e[i]);
		}), t != null && (a == null || !r.includes(a)) && n.push(t), n;
	}
	function x(e, t) {
		if (t == null) return null;
		var n = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t), r = e.findIndex(function(e) {
			return o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e) === n;
		});
		return r !== -1 ? r : null;
	}
	function $(e) {
		var t;
		return !!((t = e.groupMetadata) != null && t.isCag);
	}
	function P() {
		return c;
	}
	function N(e, t) {
		return e == null || t == null ? e === t : o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e) === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t);
	}
	function M() {
		return r("WAWebEnvironment").isWindows === !0 || o("WAWebABProps").getABPropConfigValue("wa_web_hybrid_context_menu_reactions_enabled") === !0;
	}
	l.getReactionAggregates = m, l.getReactionEmojisAndSum = p, l.lastMessageReactionChange = f, l.reactionBubbleAriaLabelString = g, l.reactionBubbleAriaLabelOneReaction = h, l.shouldShowReactionBubble = C, l.isNewsletterReactionAllowed = b, l.canReactToMessage = R, l.reactionSenderToReactionUpdate = L, l.getReactionForDisplay = E, l.updateRecentReaction = k, l.createReactionsRow = I, l.getReactionsForTray = D, l.getHoverBarSelectedIndex = x, l.isReactionsEnabledInCAG = $, l.getMaxReactionsInBubble = P, l.isSameReactionAggregate = N, l.isContextMenuReactiondEnabled = M;
}), 226);
