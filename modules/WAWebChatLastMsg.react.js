__d("WAWebChatLastMsg.react", [
	"fbt",
	"WALogger",
	"WAReplaceRepeatingWhitespace",
	"WAWebABProps",
	"WAWebBroadcastNotification.react",
	"WAWebChatMsgAck.react",
	"WAWebChatMsgSymbol.react",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFormatConfiguration",
	"WAWebFormatMsgText",
	"WAWebFrontendMsgGetters",
	"WAWebGalaxyFlowResponseLastMsg.react",
	"WAWebGroupType",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebL10N",
	"WAWebMessageGroupNotification.react",
	"WAWebMessageNewsletterNotification.react",
	"WAWebMsgGetters",
	"WAWebMsgMentionMap",
	"WAWebMsgModelPropUtils",
	"WAWebMsgReply",
	"WAWebMsgType",
	"WAWebName.react",
	"WAWebProtobufsE2E.pb",
	"WAWebReactionEmoji.react",
	"WAWebServerPropConstants",
	"WAWebSpoilerGating",
	"WAWebSpoilerNotificationMask",
	"WAWebStateUtils",
	"WAWebViewMode.flow",
	"WAWebWamEnumWebcRmrReasonCode",
	"WAWebWidFactory",
	"WDSIconIcHelp.react",
	"WDSIconWdsIcStatus.react",
	"react",
	"useWAWebAssociatedMessages",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		center: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		marginEnd2: {
			marginInlineEnd: "x16q7b9a",
			$$css: !0
		},
		statusIcon: {
			verticalAlign: "x16dsc37",
			$$css: !0
		}
	};
	function m(t) {
		"use no forget";
		var n, a, i, l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(a = o("WAWebMsgGetters")).getAck,
			(i = o("WAWebFrontendMsgGetters")).getAsBroadcastNotification,
			i.getAsGroupNotification,
			i.getAsProduct,
			i.getAsRevoked,
			i.getDir,
			a.getIsGroupMsg,
			a.getIsMetaBotInvokeResponse,
			a.getIsNotification,
			a.getIsSentByMe,
			a.getItemCount,
			a.getLatestEditMsgKey,
			i.getRtl,
			a.getSender,
			a.getSize,
			a.getType,
			i.getMediaData,
			a.getMessage,
			a.getIsSpoiler,
			a.getIsVcardOverMmsDocument,
			a.getSmbClientCampaignId,
			a.getIsQuestion,
			a.getNewsletterAdminProfile
		]), u = l[0], m = l[1], p = l[2], _ = l[3], f = l[4], g = l[5], h = l[6], y = l[7], C = l[8], b = l[9], v = l[10], S = l[11], R = l[12], L = l[13], E = l[14], k = l[15], I = l[16], T = l[17], D = l[18], x = l[19], $ = l[20], P = l[21], N = l[22], M = t.msg, w = t.searchQuery, A = w === void 0 ? [] : w, F = t.msgType, O = t.lastAddOnPreview, B = t.elevatedPushNamesEnabled, W = B === void 0 ? !1 : B, q = t.fromCommunity, U = q === void 0 ? !1 : q, V = (n = N == null ? void 0 : N.name) != null ? n : t.author, H = (O == null ? void 0 : O.type) === o("WAWebMsgType").MSG_TYPE.COMMENT || (O == null ? void 0 : O.type) === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE, G = F === "AddOnParentMsg" && !H, z = "\"", j = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		k === o("WAWebMsgType").MSG_TYPE.DOCUMENT && x && (!I || !I.mediaBlob) && o("WAWebMsgModelPropUtils").isTrusted(M.unsafe()) && E <= o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024 && M.downloadMedia({
			downloadEvenIfExpensive: !0,
			rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
			isUserInitiated: !1
		}), o("useWAWebListener").useListener($ != null ? M : null, "change:body change:caption", j), o("useWAWebListener").useListener(k === o("WAWebMsgType").MSG_TYPE.DOCUMENT && I && x ? I : null, "change:parsedVcards", j), o("useWAWebListener").useListener(k === o("WAWebMsgType").MSG_TYPE.REVOKED ? o("WAWebContactCollection").ContactCollection : null, [
			"add",
			"remove",
			"change:name"
		], j);
		var K = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(M.unsafe(), o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST), Q = [], X = b && !f && !U && M.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG;
		X && F !== "AddOnParentMsg" && Q.push(c.jsx(r("WAWebChatMsgAck.react"), {
			msg: M.unsafe(),
			associatedMessages: K
		}, "symbol")), M.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE && M.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW && Q.push(c.jsx(r("WAWebGalaxyFlowResponseLastMsg.react"), { msg: M.unsafe() }, "galaxy-flow-response"));
		var Y = F !== "Search" && (h || y || N != null) && !C && !U && M.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG, J = V != null && V !== "" && F === "Search";
		if (h && U) {
			var Z, ee = o("WAWebFrontendMsgGetters").getChat(M.unsafe()), te = ((Z = ee.groupMetadata) == null ? void 0 : Z.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
				/*BTDS*/
				""
			) : ee.title();
			Q.push(c.jsx("span", {
				className: "x78zum5 xeq5yr9 x16q51m2",
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: te,
					direction: "auto",
					ellipsify: !0
				}, "group-name")
			})), Q.push(c.createElement("span", babelHelpers.extends({}, {
				0: {},
				1: { className: "xpk2tj9" }
			}[!!r("WAWebL10N").isRTL() << 0], { key: "group-divider" }), "\xA0▶\xA0"));
		}
		if (M.type === o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION && Q.push(c.jsx(r("WAWebMessageNewsletterNotification.react"), { msg: M }, "newsletter-notification")), F === "AddOnParentMsg" && O != null) {
			var ne = o("WAWebContactCollection").ContactCollection.gadd(o("WAWebWidFactory").createUserWidOrThrow(O.sender));
			if (o("WAWebContactGetters").getIsMe(ne)) switch (O.type) {
				case "poll_vote":
					Q.push(c.jsxs("span", { children: [s._(
						/*BTDS*/
						""
					), " "] }, "poll_vote_preview_string"));
					break;
				case "reaction":
					Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("emoji", c.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, { reaction: O.reactionText }))]
					) }, "reaction_preview_string"));
					break;
				case "comment":
					Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						""
					) }, "comment_preview_string"));
					break;
				case o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE: {
					var re = O.eventResponse;
					re === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", c.jsx(r("WAWebChatMsgSymbol.react"), {
							msg: M.unsafe(),
							children: s._(
								/*BTDS*/
								""
							)
						}, "msg-symbol"))]
					) }, "event_response_going")) : re === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING ? Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", c.jsx(r("WAWebChatMsgSymbol.react"), {
							msg: M.unsafe(),
							children: s._(
								/*BTDS*/
								""
							)
						}, "msg-symbol"))]
					) }, "event_response_cant_go")) : re === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE && Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", c.jsx(r("WAWebChatMsgSymbol.react"), {
							msg: M.unsafe(),
							children: s._(
								/*BTDS*/
								""
							)
						}, "msg-symbol"))]
					) }, "event_response_maybe"));
				}
			}
			else if (h) switch (O.type) {
				case "poll_vote":
					O.pollHideVoterNames === !0 ? Q.push(c.jsxs("span", { children: [s._(
						/*BTDS*/
						""
					), " "] }, "poll_vote_preview_string")) : Q.push(c.jsxs("span", { children: [s._(
						/*BTDS*/
						"",
						[s._param("user-name", c.jsx(o("WAWebName.react").Name, {
							contact: ne,
							useShortName: !0,
							showNotifyName: W,
							elevatedPushNamesEnabled: W
						}, "author"))]
					), " "] }, "poll_vote_preview_string"));
					break;
				case "reaction":
					Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("user-name", c.jsx(o("WAWebName.react").Name, {
							contact: ne,
							useShortName: !0,
							showNotifyName: W,
							elevatedPushNamesEnabled: W
						}, "author")), s._param("emoji", c.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, { reaction: O.reactionText }))]
					) }, "reaction_preview_string"));
					break;
				case "comment":
					Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("user-name", c.jsx(o("WAWebName.react").Name, {
							contact: ne,
							showNotifyName: W,
							elevatedPushNamesEnabled: W
						}, "author"))]
					) }, "comment_preview_string"));
					break;
				case "event_response": {
					var oe = O.eventResponse;
					oe === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("user-name", c.jsx(o("WAWebName.react").Name, {
							contact: ne,
							showNotifyName: W,
							elevatedPushNamesEnabled: W
						}, "author")), s._implicitParam("=m2", c.jsx(r("WAWebChatMsgSymbol.react"), {
							msg: M.unsafe(),
							children: s._(
								/*BTDS*/
								""
							)
						}, "msg-symbol"))]
					) }, "event_response_going")) : oe === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING ? Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("user-name", c.jsx(o("WAWebName.react").Name, {
							contact: ne,
							showNotifyName: W,
							elevatedPushNamesEnabled: W
						}, "author")), s._implicitParam("=m2", c.jsx(r("WAWebChatMsgSymbol.react"), {
							msg: M.unsafe(),
							children: s._(
								/*BTDS*/
								""
							)
						}, "msg-symbol"))]
					) }, "event_response_cant_go")) : oe === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE && Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("user-name", c.jsx(o("WAWebName.react").Name, {
							contact: ne,
							showNotifyName: W,
							elevatedPushNamesEnabled: W
						}, "author")), s._implicitParam("=m2", c.jsx(r("WAWebChatMsgSymbol.react"), {
							msg: M.unsafe(),
							children: s._(
								/*BTDS*/
								""
							)
						}, "msg-symbol"))]
					) }, "event_response_maybe"));
				}
			}
			else switch (O.type) {
				case "poll_vote":
					Q.push(c.jsxs("span", { children: [s._(
						/*BTDS*/
						""
					), " "] }, "poll_vote_preview_string"));
					break;
				case "reaction":
					Q.push(c.jsx("span", { children: s._(
						/*BTDS*/
						"",
						[s._param("emoji", c.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, { reaction: O.reactionText }))]
					) }, "reaction_preview_string"));
					break;
				case "event_response": {
					var ae = O.eventResponse;
					ae === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? Q.push(c.jsxs("span", { children: [c.jsx(r("WAWebChatMsgSymbol.react"), { msg: M.unsafe() }, "msg-symbol"), s._(
						/*BTDS*/
						""
					)] }, "event_response_going")) : ae === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING ? Q.push(c.jsxs("span", { children: [c.jsx(r("WAWebChatMsgSymbol.react"), { msg: M.unsafe() }, "msg-symbol"), s._(
						/*BTDS*/
						""
					)] }, "event_response_cant_go")) : ae === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE && Q.push(c.jsxs("span", { children: [c.jsx(r("WAWebChatMsgSymbol.react"), { msg: M.unsafe() }, "msg-symbol"), s._(
						/*BTDS*/
						""
					)] }, "event_response_maybe"));
				}
			}
			Q.push(c.jsx("span", { children: "\xA0" }, "add_on_space_after_preview"));
		}
		var ie = L ? o("WAWebContactCollection").ContactCollection.get(L) : null;
		if ((Y || J) && F !== "AddOnParentMsg" && (Y ? N ? Q.push(c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: V,
			direction: "auto"
		}, "author-text")) : ie ? Q.push(c.jsx(o("WAWebName.react").Name, {
			contact: ie,
			useShortName: !0,
			showNotifyName: W,
			elevatedPushNamesEnabled: W
		}, "author-name")) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[chat-last-msg] sender null msgId=",
			" getSender=",
			""
		])), t.msg.id, L == null ? void 0 : L.toLogString()).tags("messaging").sendLogs("chat-last-message-missing-sender") : J && Q.push(c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: V,
			direction: "auto"
		}, "author-text")), (Y && (ie || N) || J) && Q.push(c.jsx("span", { children: ":\xA0" }, "divider"))), G && Q.push(z), o("WAWebMsgReply").isStatusReplyMsg(M.unsafe()) && Q.push(c.jsx(r("WDSIconWdsIcStatus.react"), {
			height: 16,
			width: 16,
			displayInline: !0,
			xstyle: [
				d.center,
				d.marginEnd2,
				d.statusIcon
			]
		}, "status-reply")), P && Q.push(c.jsx(r("WAWebChatMsgSymbol.react"), {
			msg: M.unsafe(),
			overrideIcon: c.jsx(r("WDSIconIcHelp.react"), {
				width: 18,
				height: 20
			})
		}, "question-symbol")), o("WAWebMsgModelPropUtils").hasSymbol(M.unsafe()) && !H && Q.push(c.jsx(r("WAWebChatMsgSymbol.react"), { msg: M.unsafe() }, "msg-symbol")), k === "order" && v != null && Q.push(c.jsxs("div", { children: [s._(
			/*BTDS*/
			"",
			[s._plural(v || 0, "count")]
		), T ? c.jsx("span", { children: ":\xA0" }, "item-divider") : null] }, "item-count")), p != null) Q.push(c.jsx(r("WAWebMessageGroupNotification.react"), {
			msg: p,
			clickable: !1,
			isLastMsg: !0
		}, "status-group-notification"));
		else if (m != null) Q.push(c.jsx(r("WAWebBroadcastNotification.react"), {
			msg: m,
			clickable: !1
		}, "broadcast_notification"));
		else if ((O == null ? void 0 : O.type) !== "comment") {
			var le = f, se = {
				0: "",
				1: "x1k4tb9n"
			}[(le != null) << 0], ue = F === "AddOnParentMsg" ? "LastMessage" : F, ce = o("WAWebABProps").getABPropConfigValue("enable_clear_formatted_preview"), de = r("WAWebFormatMsgText")({
				msg: o("WAWebStateUtils").unproxy(M.unsafe()),
				associatedMessages: K,
				options: {
					unformat: ce,
					formatAsLastMsg: O == null,
					formatAsSearchResult: F === "Search",
					searchQuery: A
				}
			}).toString();
			G && (de = R !== r("WAWebL10N").isRTL() && !o("WAWebMsgModelPropUtils").hasSymbol(M.unsafe()) ? "" + z + de : "" + de + z);
			var me = {
				className: se,
				direction: g,
				text: r("WAReplaceRepeatingWhitespace")(de, !0),
				dirMismatch: R !== r("WAWebL10N").isRTL(),
				formatters: o("WAWebFormatConfiguration")[ue]({
					mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(M),
					groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(M),
					terms: A,
					selectable: !1,
					messageHasSpoiler: D
				}),
				inlineblock: !0,
				ellipsify: !0
			};
			Q.push(c.createElement(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, me, { key: "status-text" })));
		}
		var pe = r("WAWebFormatMsgText")({
			msg: o("WAWebStateUtils").unproxy(M.unsafe()),
			associatedMessages: K,
			options: {
				unformat: !0,
				formatAsSearchResult: F === "Search"
			}
		}).toString() || "", _e = r("WAWebL10N").embedDir(D && o("WAWebSpoilerGating").isSpoilerReceiverEnabled() ? o("WAWebSpoilerNotificationMask").maskSpoilersForNotification(pe) : pe, R);
		return c.jsx("span", {
			className: "x78zum5 x1cy8zhl",
			title: _e,
			"data-testid": "last-msg-status",
			children: Q
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
