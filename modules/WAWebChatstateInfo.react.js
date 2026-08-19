__d("WAWebChatstateInfo.react", [
	"fbt",
	"WABidi",
	"WALogger",
	"WAReplaceRepeatingWhitespace",
	"WAWebABProps",
	"WAWebChatCommunityUtils",
	"WAWebChatGetters",
	"WAWebChatGroupSafetyCheckedMessagePreview.react",
	"WAWebChatGroupSuspendedMessagePreview.react",
	"WAWebChatGroupUtils",
	"WAWebChatLastMsg.react",
	"WAWebCmd",
	"WAWebCommonMsgSubtypeTypes",
	"WAWebCommunitySuspendedMessagePreview.react",
	"WAWebContactCollection",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebFormatConfiguration",
	"WAWebFrontendChatGetters",
	"WAWebGroupSafetyCheckUtils",
	"WAWebL10N",
	"WAWebMiscGatingUtils",
	"WAWebMsgCollection",
	"WAWebMsgType",
	"WAWebNewsletterCreatedMessagePreview.react",
	"WAWebNewsletterSuspendedMessagePreview.react",
	"WAWebScheduledMsgStore",
	"WAWebWid",
	"WAWebWidToJid",
	"WDSIconIcDescription.react",
	"WDSIconIcGif.react",
	"WDSIconIcHeadphones.react",
	"WDSIconIcImage.react",
	"WDSIconIcVideocamFilled.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebChatPreviewState",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = {
		chatstateTyping: {
			display: "x1lliihq",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontWeight: "xk50ysn",
			color: "x1v5yvga",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		loadingIndicator: {
			fontStyle: "x1k4tb9n",
			color: "xhslqc4",
			$$css: !0
		},
		draftLabel: {
			flexShrink: "x2lah0s",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function h(e) {
		"use no forget";
		var t, a = e.chat, i = e.fromCommunity, l = i === void 0 ? !1 : i, u = o("useWAWebChatValues").useChatValues(a.id, [
			o("WAWebFrontendChatGetters").getDerivedLastAddOnPreview,
			o("WAWebChatGetters").getIsGroup,
			o("WAWebFrontendChatGetters").getGroupMetadata,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebChatGetters").getPreviewT,
			o("WAWebFrontendChatGetters").getIsCAG
		]), d = u[0], m = u[1], _ = u[2], h = u[3], v = u[4], S = u[5], R = o("useWAWebChatPreviewState").useChatPreviewState(a), L = R[0], E = R[1], k = f(), I = k[0], T = k[1], D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		p(function() {
			var e = !0;
			function t() {
				return r.apply(this, arguments);
			}
			function r() {
				return r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (T(null), (d == null ? void 0 : d.parentMsgKey) != null) {
						var t, n = d.parentMsgKey, r = o("WAWebMsgCollection").MsgCollection.get(n);
						if (!r) {
							var a, i = yield o("WAWebMsgCollection").MsgCollection.getMessagesById([n]);
							r = (a = i.messages[0]) != null ? a : null;
						}
						if (!e || ((t = r) == null ? void 0 : t.isGroupStatus) === !0) return;
						T(r);
					}
				}), r.apply(this, arguments);
			}
			return t(), function() {
				e = !1;
			};
		}, [d == null ? void 0 : d.parentMsgKey]), o("useWAWebListener").useListener(L, "change:msgKey", function() {
			D();
		}), o("useWAWebModelValues").useModelValues(a.presence.chatstate, ["id", "type"]);
		var x = o("useWAWebModelValues").useModelValues(a.presence, o("WAWebABProps").getABPropConfigValue("web_memlab_fixes") ? [
			"hasData",
			"withholdDisplayStage",
			"chatstate"
		] : [
			"chatstate",
			"hasData",
			"withholdDisplayStage"
		], { isStrong: !1 }), $ = r("useWAWebEventTargetValue")(v, ["change:suspended"], function() {
			return h && (v == null ? void 0 : v.suspended) === !0;
		}), P = r("useWAWebEventTargetValue")(v, ["change:geosuspended"], function() {
			return h && (v == null ? void 0 : v.geosuspended) === !0;
		}), N = r("useWAWebEventTargetValue")(_, ["change:suspended"], function() {
			return o("WAWebChatGroupUtils").isSuspendedGroup(a) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a);
		}), M = r("useWAWebEventTargetValue")(_, ["change:suspended"], function() {
			return o("WAWebChatCommunityUtils").isSuspendedCommunity(a) || o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(a);
		}), w = r("useWAWebEventTargetValue")(_, ["change:groupSafetyCheck", "change:trusted"], function() {
			return o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(a);
		}), A = y(a), F = C(a, L);
		if ($) return c.jsx(r("WAWebNewsletterSuspendedMessagePreview.react"), { isGeosuspended: P });
		if (M) return c.jsx(r("WAWebCommunitySuspendedMessagePreview.react"), {});
		if (N && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) return c.jsx(r("WAWebChatGroupSuspendedMessagePreview.react"), {});
		if (w) return c.jsx(r("WAWebChatGroupSafetyCheckedMessagePreview.react"), {});
		var O = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(a);
		if (!l && b(x)) {
			var B = x.getFormattedString({ elevatedPushNamesEnabled: O }) || {}, W = B.ariaLabel, q = B.text;
			if (q) return c.jsx(o("WAWebEmojiText.react").EmojiText, {
				xstyle: g.chatstateTyping,
				direction: "inherit",
				ellipsify: !0,
				titlify: !0,
				text: q,
				ariaLabel: W
			});
		}
		if ((L == null ? void 0 : L.subtype) === "newsletter_admin_context_card") return c.jsx(r("WAWebNewsletterCreatedMessagePreview.react"), { chat: a });
		if (E) return c.jsx(o("WAWebEmojiText.react").EmojiText, {
			xstyle: g.loadingIndicator,
			direction: "inherit",
			titlify: !0,
			ellipsify: !0,
			text: s._(
				/*BTDS*/
				""
			)
		});
		if (L == null) return A || null;
		if (A) return A;
		if (F != null) return F;
		var U = I && d != null ? c.jsx(r("WAWebChatLastMsg.react"), {
			msg: I.safe(),
			msgType: "AddOnParentMsg",
			lastAddOnPreview: d,
			elevatedPushNamesEnabled: O,
			fromCommunity: l
		}) : null, V = L.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? (t = L.revokeTimestamp) != null ? t : 0 : L.t, H = (d == null ? void 0 : d.timestamp) && (d == null ? void 0 : d.timestamp) / 1e3;
		return H != null && H > V && U != null ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-last-addon-msg",
			children: U
		}) : c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-last-msg",
			children: c.jsx(r("WAWebChatLastMsg.react"), {
				msg: L.safe(),
				msgType: "LastMessage",
				elevatedPushNamesEnabled: O,
				fromCommunity: l
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = o("useWAWebChatValues").useChatValues(e.id, [
			o("WAWebChatGetters").getDraftMessage,
			o("WAWebFrontendChatGetters").getHasDraftMessage,
			o("WAWebFrontendChatGetters").getActive,
			o("WAWebChatGetters").getHasUnread,
			o("WAWebFrontendChatGetters").getAttachMediaContents
		]), n = t[0], a = t[1], i = t[2], l = t[3], u = t[4];
		if (!(a !== !0 || i || l)) {
			if (u) {
				var d = u.getPreviewableMedias()[0], m = d != null ? v(d) : null;
				return c.jsxs(o("WAWebFlex.react").FlexRow, { children: [c.jsxs(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "accent",
					xstyle: g.draftLabel,
					children: [s._(
						/*BTDS*/
						""
					), ":\xA0"]
				}), m] });
			}
			var p = n == null ? void 0 : n.text;
			return p != null ? c.jsxs(o("WAWebFlex.react").FlexRow, { children: [c.jsxs(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "accent",
				xstyle: g.draftLabel,
				children: [s._(
					/*BTDS*/
					""
				), ":\xA0"]
			}), c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: r("WAReplaceRepeatingWhitespace")(p, !0),
				formatters: o("WAWebFormatConfiguration").LastMessage({
					isDraftMessage: !0,
					mentions: {},
					groupMentions: {},
					selectable: !1
				}),
				ellipsify: !0,
				inlineblock: !0
			}, "draft")] }) : null;
		}
	}
	function C(t, a) {
		var i, l, u = (a == null ? void 0 : a.subtype) === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated, d = u ? a == null || (i = a.id) == null ? void 0 : i.toString() : null, h = f(null), y = h[0], C = h[1], b = _(null), v = m(function() {
			if (b.current == null || b.current(), d != null) {
				var r = !1;
				b.current = function() {
					r = !0;
				}, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var n = yield o("WAWebScheduledMsgStore").getScheduledMessagesForChat(o("WAWebWidToJid").widToChatJid(t.id)), a = null;
						for (var i of n) (a == null || i.createdAt > a.createdAt) && (a = i);
						var l = a != null ? yield o("WAWebScheduledMsgStore").decryptScheduledMsgPreview(a) : {
							body: null,
							isImage: !1,
							mentionedJidList: null
						};
						if (r) return;
						C({
							body: l.body,
							isImage: l.isImage,
							mentionedJidList: l.mentionedJidList,
							msgId: d
						});
					} catch (t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useScheduledPreview] failed to resolve preview ", ""])), t).sendLogs("scheduled-preview-resolve-failed");
					}
				})();
			}
		}, [t.id, d]);
		if (p(function() {
			return v(), function() {
				b.current == null || b.current();
			};
		}, [v]), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", v), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", v), !u) return null;
		var S = y != null && y.msgId === d ? y : null, R = (l = S == null ? void 0 : S.body) != null ? l : null, L = R != null && R !== "", E = {}, k = S == null ? void 0 : S.mentionedJidList;
		if (k != null) for (var I of k) {
			var T;
			E["@" + ((T = r("WAWebWid").user(I)) != null ? T : "")] = o("WAWebContactCollection").ContactCollection.gadd(I);
		}
		var D;
		(S == null ? void 0 : S.isImage) === !0 ? D = L ? "📷 " + r("WAReplaceRepeatingWhitespace")(R != null ? R : "", !0) : s._(
			/*BTDS*/
			""
		) : D = L ? r("WAReplaceRepeatingWhitespace")(R != null ? R : "", !0) : s._(
			/*BTDS*/
			""
		);
		var x = L ? o("WABidi").bidiDir(R != null ? R : "") : void 0, $ = L && x === "rtl" !== r("WAWebL10N").isRTL();
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "chat_list_scheduled_message_preview",
			children: [c.jsxs(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "accent",
				xstyle: g.draftLabel,
				children: [s._(
					/*BTDS*/
					""
				), ":\xA0"]
			}), c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: D,
				direction: L ? x : "inherit",
				dirMismatch: $,
				formatters: o("WAWebFormatConfiguration").LastMessage({
					mentions: E,
					groupMentions: {}
				}),
				ellipsify: !0,
				inlineblock: !0
			}, "scheduled")]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.chatstate.type;
		return e.hasData && (t === "typing" || t === "recording_audio");
	}
	function v(e) {
		var t = e.type, n = e.isGif;
		return n ? c.jsx(r("WDSIconIcGif.react"), {
			height: 18,
			width: 18
		}) : t === o("WAWebMsgType").MSG_TYPE.IMAGE ? c.jsxs(c.Fragment, { children: [
			c.jsx(r("WDSIconIcImage.react"), {
				height: 18,
				width: 18
			}),
			"\xA0",
			s._(
				/*BTDS*/
				""
			)
		] }) : t === o("WAWebMsgType").MSG_TYPE.VIDEO ? c.jsxs(c.Fragment, { children: [
			c.jsx(r("WDSIconIcVideocamFilled.react"), {
				height: 18,
				width: 18
			}),
			"\xA0",
			s._(
				/*BTDS*/
				""
			)
		] }) : t === o("WAWebMsgType").MSG_TYPE.AUDIO ? c.jsxs(c.Fragment, { children: [
			c.jsx(r("WDSIconIcHeadphones.react"), {
				height: 18,
				width: 18
			}),
			"\xA0",
			s._(
				/*BTDS*/
				""
			)
		] }) : t === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? c.jsxs(c.Fragment, { children: [
			c.jsx(r("WDSIconIcDescription.react"), {
				height: 18,
				width: 18
			}),
			"\xA0",
			s._(
				/*BTDS*/
				""
			)
		] }) : s._(
			/*BTDS*/
			""
		);
	}
	l.default = h;
}), 226);
