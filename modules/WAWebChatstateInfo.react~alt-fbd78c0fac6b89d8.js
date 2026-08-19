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
		var t, n = e.chat, a = e.fromCommunity, i = a === void 0 ? !1 : a, l = o("useWAWebChatValues").useChatValues(n.id, [
			o("WAWebFrontendChatGetters").getDerivedLastAddOnPreview,
			o("WAWebChatGetters").getIsGroup,
			o("WAWebFrontendChatGetters").getGroupMetadata,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebFrontendChatGetters").getNewsletterMetadata,
			o("WAWebChatGetters").getPreviewT,
			o("WAWebFrontendChatGetters").getIsCAG
		]), u = l[0], d = l[1], m = l[2], _ = l[3], h = l[4], v = l[5], S = o("useWAWebChatPreviewState").useChatPreviewState(n), R = S[0], L = S[1], E = f(), k = E[0], I = E[1], T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		p(function() {
			var e = !0;
			async function t() {
				if (I(null), (u == null ? void 0 : u.parentMsgKey) != null) {
					var t, n = u.parentMsgKey, r = o("WAWebMsgCollection").MsgCollection.get(n);
					if (!r) {
						var a, i = await o("WAWebMsgCollection").MsgCollection.getMessagesById([n]);
						r = (a = i.messages[0]) != null ? a : null;
					}
					if (!e || ((t = r) == null ? void 0 : t.isGroupStatus) === !0) return;
					I(r);
				}
			}
			return t(), function() {
				e = !1;
			};
		}, [u == null ? void 0 : u.parentMsgKey]), o("useWAWebListener").useListener(R, "change:msgKey", function() {
			T();
		}), o("useWAWebModelValues").useModelValues(n.presence.chatstate, ["id", "type"]);
		var D = o("useWAWebModelValues").useModelValues(n.presence, o("WAWebABProps").getABPropConfigValue("web_memlab_fixes") ? [
			"hasData",
			"withholdDisplayStage",
			"chatstate"
		] : [
			"chatstate",
			"hasData",
			"withholdDisplayStage"
		], { isStrong: !1 }), x = r("useWAWebEventTargetValue")(h, ["change:suspended"], function() {
			return _ && (h == null ? void 0 : h.suspended) === !0;
		}), $ = r("useWAWebEventTargetValue")(h, ["change:geosuspended"], function() {
			return _ && (h == null ? void 0 : h.geosuspended) === !0;
		}), P = r("useWAWebEventTargetValue")(m, ["change:suspended"], function() {
			return o("WAWebChatGroupUtils").isSuspendedGroup(n) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n);
		}), N = r("useWAWebEventTargetValue")(m, ["change:suspended"], function() {
			return o("WAWebChatCommunityUtils").isSuspendedCommunity(n) || o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(n);
		}), M = r("useWAWebEventTargetValue")(m, ["change:groupSafetyCheck", "change:trusted"], function() {
			return o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(n);
		}), w = y(n), A = C(n, R);
		if (x) return c.jsx(r("WAWebNewsletterSuspendedMessagePreview.react"), { isGeosuspended: $ });
		if (N) return c.jsx(r("WAWebCommunitySuspendedMessagePreview.react"), {});
		if (P && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) return c.jsx(r("WAWebChatGroupSuspendedMessagePreview.react"), {});
		if (M) return c.jsx(r("WAWebChatGroupSafetyCheckedMessagePreview.react"), {});
		var F = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n);
		if (!i && b(D)) {
			var O = D.getFormattedString({ elevatedPushNamesEnabled: F }) || {}, B = O.ariaLabel, W = O.text;
			if (W) return c.jsx(o("WAWebEmojiText.react").EmojiText, {
				xstyle: g.chatstateTyping,
				direction: "inherit",
				ellipsify: !0,
				titlify: !0,
				text: W,
				ariaLabel: B
			});
		}
		if ((R == null ? void 0 : R.subtype) === "newsletter_admin_context_card") return c.jsx(r("WAWebNewsletterCreatedMessagePreview.react"), { chat: n });
		if (L) return c.jsx(o("WAWebEmojiText.react").EmojiText, {
			xstyle: g.loadingIndicator,
			direction: "inherit",
			titlify: !0,
			ellipsify: !0,
			text: s._(
				/*BTDS*/
				""
			)
		});
		if (R == null) return w || null;
		if (w) return w;
		if (A != null) return A;
		var q = k && u != null ? c.jsx(r("WAWebChatLastMsg.react"), {
			msg: k.safe(),
			msgType: "AddOnParentMsg",
			lastAddOnPreview: u,
			elevatedPushNamesEnabled: F,
			fromCommunity: i
		}) : null, U = R.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? (t = R.revokeTimestamp) != null ? t : 0 : R.t, V = (u == null ? void 0 : u.timestamp) && (u == null ? void 0 : u.timestamp) / 1e3;
		return V != null && V > U && q != null ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-last-addon-msg",
			children: q
		}) : c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-last-msg",
			children: c.jsx(r("WAWebChatLastMsg.react"), {
				msg: R.safe(),
				msgType: "LastMessage",
				elevatedPushNamesEnabled: F,
				fromCommunity: i
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
	function C(t, n) {
		var a, i, l = (n == null ? void 0 : n.subtype) === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated, u = l ? n == null || (a = n.id) == null ? void 0 : a.toString() : null, d = f(null), h = d[0], y = d[1], C = _(null), b = m(function() {
			if (C.current == null || C.current(), u != null) {
				var n = !1;
				C.current = function() {
					n = !0;
				}, (async function() {
					try {
						var r = await o("WAWebScheduledMsgStore").getScheduledMessagesForChat(o("WAWebWidToJid").widToChatJid(t.id)), a = null;
						for (var i of r) (a == null || i.createdAt > a.createdAt) && (a = i);
						var l = a != null ? await o("WAWebScheduledMsgStore").decryptScheduledMsgPreview(a) : {
							body: null,
							isImage: !1,
							mentionedJidList: null
						};
						if (n) return;
						y({
							body: l.body,
							isImage: l.isImage,
							mentionedJidList: l.mentionedJidList,
							msgId: u
						});
					} catch (t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useScheduledPreview] failed to resolve preview ", ""])), t).sendLogs("scheduled-preview-resolve-failed");
					}
				})();
			}
		}, [t.id, u]);
		if (p(function() {
			return b(), function() {
				C.current == null || C.current();
			};
		}, [b]), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", b), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", b), !l) return null;
		var v = h != null && h.msgId === u ? h : null, S = (i = v == null ? void 0 : v.body) != null ? i : null, R = S != null && S !== "", L = {}, E = v == null ? void 0 : v.mentionedJidList;
		if (E != null) for (var k of E) {
			var I;
			L["@" + ((I = r("WAWebWid").user(k)) != null ? I : "")] = o("WAWebContactCollection").ContactCollection.gadd(k);
		}
		var T;
		(v == null ? void 0 : v.isImage) === !0 ? T = R ? "📷 " + r("WAReplaceRepeatingWhitespace")(S != null ? S : "", !0) : s._(
			/*BTDS*/
			""
		) : T = R ? r("WAReplaceRepeatingWhitespace")(S != null ? S : "", !0) : s._(
			/*BTDS*/
			""
		);
		var D = R ? o("WABidi").bidiDir(S != null ? S : "") : void 0, x = R && D === "rtl" !== r("WAWebL10N").isRTL();
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
				text: T,
				direction: R ? D : "inherit",
				dirMismatch: x,
				formatters: o("WAWebFormatConfiguration").LastMessage({
					mentions: L,
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
