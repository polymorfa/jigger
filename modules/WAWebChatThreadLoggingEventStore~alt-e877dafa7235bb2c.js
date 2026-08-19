__d("WAWebChatThreadLoggingEventStore", [
	"WALogger",
	"WAShiftTimer",
	"WAWebAfterReadUtils",
	"WAWebApiBulkGetChats",
	"WAWebApiChatThreadLoggingPendingEvents",
	"WAWebApiContact",
	"WAWebBotTypes",
	"WAWebChatThreadLoggingBoolFlagFields",
	"WAWebChatThreadLoggingCountFields",
	"WAWebChatThreadLoggingUtils",
	"WAWebDBBulkGetIsContactABusiness",
	"WAWebDBGetStarredMessagesForChat",
	"WAWebDBGroupsGroupMetadata",
	"WAWebGetBizCatalogType",
	"WAWebGroupType",
	"WAWebLidAwareContactsDB",
	"WAWebLidMigrationUtils",
	"WAWebSchemaBusinessProfile",
	"WAWebSchemaParticipant",
	"WAWebSchemaProfilePicThumb",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameTypes",
	"WAWebWamEnumChatOriginsType",
	"WAWebWid",
	"WAWebWidFactory",
	"WAWebWidToJid"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m = 5, p = (function() {
		function t(t, n) {
			var r = this;
			this.metadataStore = t, this.$1 = new Map(), this.$2 = n != null ? n : m, this.$3 = new (o("WAShiftTimer")).ShiftTimer(function() {
				r.$4().catch(function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ChatThreadLoggingEventStoreImpl: flush error"])));
				});
			});
		}
		var n = t.prototype;
		return n.handleMessages = async function(t) {
			var e = this, n = await this.metadataStore.getOffset();
			if (n == null) {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[ChatThreadLoggingEventStoreImpl] handleMessages: no offset"])));
				return;
			}
			var r = await this.metadataStore.getLastUploadedStartTs();
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["ChatThreadLoggingEventStoreImpl: lastUploadedStartTs=", ""])), r);
			var a = [], i = 0;
			t.forEach(function(t) {
				if (o("WAWebChatThreadLoggingUtils").shouldUpdateChatEvent(n, t.ts, r)) {
					var l = o("WAWebChatThreadLoggingUtils").computeStartTs(n, t.ts), s = t.chatId.toString({ legacy: !0 }), u = s + "_" + String(l), c = e.$1.get(u), d = c != null ? c : babelHelpers.extends({}, o("WAWebChatThreadLoggingCountFields").COUNT_FIELDS, o("WAWebChatThreadLoggingBoolFlagFields").FLAG_FIELDS, {
						startTs: l,
						chatId: s,
						addMsgsSent: 0,
						addMsgsReceived: 0,
						addMsgsRead: 0,
						addViewOnceMsgsSent: 0,
						addViewOnceMsgsReceived: 0,
						addViewOnceMsgsOpened: 0,
						addCallOffersSent: 0,
						addCallOffersReceived: 0,
						addTotalCallDuration: 0,
						addCommerceMsgsSent: 0,
						addCommerceMsgsReceived: 0,
						addPdpInquiriesSent: 0,
						addReactionsSent: 0,
						addReactionsReceived: 0,
						addForwardMessagesSent: 0,
						addForwardMessagesReceived: 0,
						addEditedMsgsSent: 0,
						addBotMessagesSent: 0,
						addBotMessagesReceived: 0,
						addBotMessagesEdited: 0,
						addEventCreationMessagesSent: 0,
						addEventCreationMessagesReceived: 0,
						addEventResponseMessagesSent: 0,
						addEventResponseMessagesReceived: 0,
						addEventGroupStatusReplyOthersToOwn: 0,
						addEventGroupStatusReplyOthersToOthers: 0,
						addEventGroupStatusReplyOwnToOwn: 0,
						addEventGroupStatusReplyOwnToOthers: 0,
						addEventGroupStatusLikeOthersToOthers: 0,
						addEventGroupStatusLikeOthersToOwn: 0
					});
					c == null && e.$1.set(u, d);
					var m = o("WAWebChatThreadLoggingCountFields").toMaybeCountActionType(t.activityType), p = o("WAWebChatThreadLoggingBoolFlagFields").toMaybeBoolFlagActionType(t.activityType);
					if (m != null) d[m] += 1;
					else if (p != null) d[p] = t.boolValue === void 0 ? !0 : t.boolValue;
					else switch (t.activityType) {
						case "msgSend":
							d.addMsgsSent += 1, t.isViewOnce && (d.addViewOnceMsgsSent += 1), t.isCommerceMessage === !0 && (d.addCommerceMsgsSent += 1), t.isPdpInquiry === !0 && (d.addPdpInquiriesSent += 1), t.isReply && (d.repliesSent += 1), t.isReaction && (d.addReactionsSent += 1), t.isForwarded && (d.addForwardMessagesSent += 1), t.isEdit && (d.addEditedMsgsSent += 1), t.isBot && (d.addBotMessagesSent += 1), t.isEventCreation && (d.addEventCreationMessagesSent += 1), t.isEventResponse && (d.addEventResponseMessagesSent += 1), t.isAfterRead === !0 && (d.afterReadMessagesSent += 1), _(d, t.isAfterRead);
							break;
						case "msgReceive":
							d.addMsgsReceived += 1, t.isViewOnce && (d.addViewOnceMsgsReceived += 1), t.isCommerceMessage === !0 && (d.addCommerceMsgsReceived += 1), t.isReaction && (d.addReactionsReceived += 1), t.isForwarded && (d.addForwardMessagesReceived += 1), t.isBot && (t.isEdit ? d.addBotMessagesEdited += 1 : d.addBotMessagesReceived += 1), t.isEventCreation && (d.addEventCreationMessagesReceived += 1), t.isEventResponse && (d.addEventResponseMessagesReceived += 1), t.isAfterRead === !0 && (d.afterReadMessagesReceived += 1), _(d, t.isAfterRead);
							break;
						case "msgRead":
							d.addMsgsRead += t.readCount;
							break;
						case "afterReadMsgExpired":
							d.afterReadMessagesExpired += 1, t.wasUnread && (d.afterReadMessagesUnreadExpired += 1);
							break;
						case "groupStatusMsgReceive":
							d.addMsgsReceived += 1, t.isGroupStatusReplyOthersToOwn && (d.addEventGroupStatusReplyOthersToOwn += 1), t.isGroupStatusReplyOthersToOthers && (d.addEventGroupStatusReplyOthersToOthers += 1), t.isGroupStatusLikeOthersToOthers && (d.addEventGroupStatusLikeOthersToOthers += 1), t.isGroupStatusLikeOthersToOwn && (d.addEventGroupStatusLikeOthersToOwn += 1);
							break;
						case "groupStatusMsgSend":
							d.addMsgsSent += 1, t.isGroupStatusReplyOwnToOwn && (d.addEventGroupStatusReplyOwnToOwn += 1), t.isGroupStatusReplyOwnToOthers && (d.addEventGroupStatusReplyOwnToOthers += 1);
							break;
						case "viewOnceOpen":
							d.addViewOnceMsgsOpened += 1;
							break;
						case "voipCall":
							t.outgoing ? d.addCallOffersSent += 1 : d.addCallOffersReceived += 1, d.addTotalCallDuration += t.durationInSeconds;
							break;
						default: i++, a.length < 3 && a.push(t.activityType);
					}
				}
			}), i > 0 && o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" invalid event store info types => ",
				""
			])), i, a), await this.$5();
		}, n.$5 = function() {
			this.$3.onOrBefore(this.$2 * 1e3);
		}, n.$4 = async function() {
			var e = Array.from(this.$1.values());
			this.$1.clear(), await o("WAWebApiChatThreadLoggingPendingEvents").createOrUpdateChatEvents(e);
		}, n.$6 = async function(t) {
			var e = o("WAWebApiBulkGetChats").bulkGetChats(t.map(function(e) {
				return o("WAWebWidFactory").createWid(e.chatId);
			})), n = e.then(function(e) {
				return $(e);
			}), a = e.then(function(e) {
				return P(e);
			}), i = e.then(function(e) {
				return N(e);
			}), l = e.then(function(e) {
				return w(e);
			}), s = e.then(function(e) {
				return A(e);
			}), u = e.then(M), c = e.then(function(e) {
				return F(e);
			}), m = e.then(function(e) {
				return O(e);
			}), p = await Promise.all([
				e,
				n,
				a,
				i,
				u,
				l,
				s,
				c,
				m
			]), _ = p[0], f = p[1], g = p[2], h = p[3], y = p[4], C = p[5], b = p[6], v = p[7], S = p[8], R = await Promise.all([o("WAWebChatThreadLoggingUtils").getMeHasUsername(), o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin()]), L = R[0], E = R[1], k = t.length, I = {
				chatRows: _.length,
				starredCounts: f.length,
				isABusiness: g.length,
				groupMetadataRows: h.length,
				groupParticipantsRows: y.length,
				businessProfileRows: C.length,
				contactFromChatRows: b.length,
				profilePicThumbRows: v.length
			};
			for (var T of Object.entries(I)) {
				var D = T[0], x = T[1];
				x !== k && o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"[ChatThreadLoggingEventStore] len mismatch ",
					" exp=",
					" got=",
					""
				])), D, k, x).sendLogs("chatThreadLoggingEventStore-array-length-mismatch-" + D);
			}
			return Promise.all(t.map(async function(e, t) {
				var n, a, i, l, s, u, c, d, m = _[t], p = o("WAWebWidFactory").createWid(e.chatId), R = p.isGroup(), k = h[t], I = o("WAWebBotTypes").BizBotAutomatedType.cast((n = C[t]) == null ? void 0 : n.automatedType), T = R ? {
					isAGroup: R,
					groupSize: (a = (i = y[t]) == null || (i = i.participants) == null ? void 0 : i.length) != null ? a : 1,
					groupType: k == null ? o("WAWebGroupType").GroupType.DEFAULT : o("WAWebGroupType").getGroupTypeFromGroupMetadata(k)
				} : {
					isAGroup: R,
					isAContact: p.isUserNotPSA() ? await o("WAWebApiContact").isAddressBookContact(o("WAWebWidToJid").widToUserJid(p)) : !1,
					automatedType: I
				}, D = ((l = m == null ? void 0 : m.pin) != null ? l : 0) > 0, x = (s = m == null ? void 0 : m.archive) != null ? s : !1, $ = f[t], P = (u = m == null ? void 0 : m.unreadCount) != null ? u : 0, N = ((c = m == null ? void 0 : m.muteExpiration) != null ? c : 0) !== 0, M = g[t] ? await o("WAWebGetBizCatalogType").getBizCatalogType(p) : null, w = r("WAWebWid").isStringLid(e.chatId) || (k == null ? void 0 : k.defaultSubgroup) === !0, A = o("WAWebUserPrefsMeUser").isMeAccount(p), F = p.isBot(), O = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeInitiatedByMe(m == null ? void 0 : m.disappearingModeInitiatedByMe), B = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeTrigger(m == null ? void 0 : m.disappearingModeTrigger);
				r("WAWebWid").isGroup(m == null ? void 0 : m.id) && (O = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeInitiatedByMe(k == null ? void 0 : k.disappearingModeInitiatedByMe), B = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeTriggerGroups(k == null ? void 0 : k.disappearingModeTrigger));
				var W = L, q = E, U = null, V = !1, H = b[t];
				if (H != null) {
					var G = o("WAWebWidFactory").createWid(H.id);
					U = o("WAWebChatThreadLoggingUtils").getOppositeVisibleIdentificationType(H, G.isLid() ? "lid" : "pn");
					var z = o("WAWebLidMigrationUtils").toPn(G) != null, j = o("WAWebUsernameTypes").isPresentUsername(H.username);
					V = !z && j;
				}
				var K = null, Q = null, X = null;
				if (!R && p.isRegularUser()) {
					var Y, J;
					K = e.msgsSent > 0, Q = ((Y = v[t]) == null ? void 0 : Y.eurl) != null || ((J = v[t]) == null ? void 0 : J.previewEurl) != null, X = m != null && S.has(m.id);
				}
				var Z = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
				if (p.isLid() && (Z = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA), m != null && m.lidOriginType) switch (m == null ? void 0 : m.lidOriginType) {
					case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
						Z = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
						break;
					case o("WAWebUsernameTypes").LidOriginType.GENERAL:
						Z = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
						break;
				}
				return babelHelpers.extends({}, e, {
					isPinned: D,
					isArchived: x,
					contactInfo: T,
					messagesStarred: $,
					messagesUnread: P,
					isMuted: N,
					bizCatalogType: M,
					isPnhEnabledChat: w,
					isMessageYourself: A,
					isUserAgent: F,
					ephemeralityInitiator: O,
					ephemeralityTriggerAction: B,
					isUsernameThread: V,
					hasUsername: W,
					hasUsernamePin: q,
					oppositeVisibleIdentification: U,
					isUsernameThreadAtCreation: (d = m == null ? void 0 : m.isUsernameThreadAtCreation) != null ? d : void 0,
					hasReplied1On1: K != null ? K : void 0,
					sharesCommonGroup: X != null ? X : void 0,
					oppositePartyHasProfilePhoto: Q != null ? Q : void 0,
					chatOrigins: Z,
					afterReadDuration: (m == null ? void 0 : m.afterReadDuration) != null && o("WAWebAfterReadUtils").isAfterReadEnabled() ? m.afterReadDuration : void 0
				});
			}));
			function $(e) {
				return Promise.all(e.map(async function(e) {
					return e == null ? 0 : (await o("WAWebDBGetStarredMessagesForChat").getStarredMessagesForChat(o("WAWebWidFactory").createWid(e.id), Number.MAX_SAFE_INTEGER)).length;
				}));
			}
			function P(e) {
				return o("WAWebDBBulkGetIsContactABusiness").bulkGetIsContactABusiness(e.map(function(e) {
					return e == null ? null : o("WAWebWidFactory").createWid(e.id);
				}));
			}
			function N(e) {
				return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(e.map(function(e) {
					return e == null ? null : o("WAWebWidFactory").createWid(e.id);
				}));
			}
			function M(e) {
				return o("WAWebSchemaParticipant").getParticipantTable().bulkGet(e.map(function(e) {
					return e == null ? "" : o("WAWebWidFactory").createWid(e.id).toString();
				}));
			}
			function w(e) {
				return o("WAWebSchemaBusinessProfile").getBusinessProfileTable().bulkGet(e.map(function(e) {
					return e == null ? "" : o("WAWebWidFactory").createWid(e.id).toString();
				}));
			}
			function A(e) {
				return r("WAWebLidAwareContactsDB").bulkGet(e.map(function(e) {
					if (e == null) return "";
					var t = o("WAWebWidFactory").createWid(e.id);
					if (!t.isRegularUser()) return "";
					if (!t.isLid()) return t.toJid();
					var n = o("WAWebApiContact").getPhoneNumber(t);
					return n == null ? t.toJid() : "";
				}));
			}
			function F(e) {
				return o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().bulkGet(e.map(function(e) {
					return e == null ? "" : o("WAWebWidFactory").createWid(e.id).toString();
				}));
			}
			async function O(e) {
				var t = new Map();
				for (var n of e) if (n != null) {
					var a = o("WAWebWidFactory").createWid(n.id);
					if (!(!a.isRegularUser() || r("WAWebWid").isGroup(n.id))) {
						t.set(n.id, n.id);
						var i = n.id.replace("@c.us", "@s.whatsapp.net");
						i !== n.id && t.set(i, n.id);
						var l = o("WAWebApiContact").getAlternateUserWid(a);
						l != null && t.set(l.toString(), n.id);
					}
				}
				if (t.size === 0) return new Set();
				var s = await o("WAWebSchemaParticipant").getParticipantTable().anyOf(["participants"], Array.from(t.keys())), u = new Set();
				for (var c of s) {
					var d, m = (d = c.participants) != null ? d : [];
					if (m.some(function(e) {
						return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e));
					})) for (var p of m) {
						var _ = t.get(p);
						_ != null && u.add(_);
					}
				}
				return u;
			}
		}, n.getEvent = async function(t, n) {
			this.$1.size > 0 && await this.$4();
			var e = await o("WAWebApiChatThreadLoggingPendingEvents").getChatEvent(t, n);
			return e == null ? null : (await this.$6([e]))[0];
		}, n.getBeforeInclusive = async function(t) {
			return this.$1.size > 0 && await this.$4(), this.$6(await o("WAWebApiChatThreadLoggingPendingEvents").getBeforeInclusive(t));
		}, n.deleteBeforeInclusive = async function(t) {
			return this.$1.size > 0 && await this.$4(), o("WAWebApiChatThreadLoggingPendingEvents").deleteBeforeInclusive(t);
		}, t;
	})();
	function _(e, t) {
		t === !0 ? e.afterReadTurnedOn = !0 : e.afterReadTurnedOff = !0;
	}
	l.ChatThreadLoggingEventStoreImpl = p;
}), 98);
