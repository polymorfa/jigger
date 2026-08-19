__d("MAWLoadMsgsTxnsV2", [
	"I64",
	"MAWBridgeMsg",
	"MAWBridgeMsgCountdown",
	"MAWBridgeReceiverFetchInfo",
	"MAWBridgeTypesCreators",
	"MAWBridgeXMA",
	"MAWCurrentUser",
	"MAWDbChunkTxns",
	"MAWDbEditMsgHistoryTxns",
	"MAWDbMediaTxns",
	"MAWDbMsgTxns",
	"MAWDbPollTxns",
	"MAWDbReactionsTxns",
	"MAWDbReceiverFetchTxns",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWLoadMessagesRequest",
	"MAWLoadMsgsDedupper",
	"MAWLoadMsgsUtil",
	"MAWLoadReplyMediaTxns",
	"MAWLoggerUtils",
	"MAWMediaUtils",
	"MAWMessagesDirection",
	"MAWODSProxy",
	"MAWRavenUtils",
	"MAWXMAUtils",
	"MWFBLogger",
	"WAMsgType",
	"WAOdsEnums",
	"WATimeUtils",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m;
	function p(e, t, n, o, a, i) {
		switch (n) {
			case "before": return l();
			case "after": return s().then(function(e) {
				return e.reverse();
			});
		}
		function l() {
			var n = r("MAWLoadMsgsDedupper")();
			return e.messages.where(["threadJid", "sortOrderMs"]).between([t, 0], [t, o], !0, !0).reverse().filter(a).filter(n).filter(function(e) {
				return r("justknobx")._("3227") ? e.source !== "media_restore" : e != null;
			}).until(i, !0).toArray();
		}
		function s() {
			var n = r("MAWLoadMsgsDedupper")();
			return e.messages.where(["threadJid", "sortOrderMs"]).between([t, o], [t, Number.MAX_SAFE_INTEGER], !0, !0).filter(a).filter(n).filter(function(e) {
				return r("justknobx")._("3227") ? e.source !== "media_restore" : e != null;
			}).until(i, !0).toArray();
		}
	}
	function _(e, t) {
		return o("MAWDbReactionsTxns").getReactionsFromMessages(e, t).then(function(e) {
			return e.map(function(e) {
				var t = e.author, n = e.reaction, r = e.reactToMsgId, a = e.threadJid, i = e.ts;
				if (r != null) return n == null ? {
					reaction: o("MAWBridgeTypesCreators").createBridgeDeleteReaction({
						author: t,
						chatJid: a,
						reactToMsgId: r
					}),
					type: "delete"
				} : {
					reaction: o("MAWBridgeTypesCreators").createBridgeUpsertReaction({
						author: t,
						chatJid: a,
						reaction: n || "",
						reactToMsgId: r,
						ts: i
					}),
					type: "upsert"
				};
			}).filter(Boolean);
		});
	}
	function f(e, t) {
		return o("MAWDbMediaTxns").getMsgMediaPairFromMsgs(e, t).then(function(t) {
			return o("MAWDexieTable").dexieAll(t.map(function(t) {
				var n = t[0], r = t[1];
				return o("MAWDbChunkTxns").hasMediaChunk(e, r.hashedPlaintextHash).then(function(t) {
					return g(e, n.threadJid, r).then(function(a) {
						var i = a.map(function(e) {
							return e.msgId;
						}), l = o("MAWMediaUtils").createHdTypesForBridgeMedia(a), s = n.ravenEphemeralType != null && n.ravenEphemeralMediaState != null ? o("MAWBridgeTypesCreators").createBridgeMedia({
							chatJid: n.threadJid,
							filteredMsgIds: i,
							hasMediaForUI: t,
							hdTypes: l,
							media: r,
							ravenSettings: o("MAWRavenUtils").deriveRavenSettings(n.ravenEphemeralType, n.ravenEphemeralMediaState),
							sortOrderMs: n.sortOrderMs
						}) : o("MAWBridgeTypesCreators").createBridgeMedia({
							chatJid: n.threadJid,
							filteredMsgIds: i,
							hasMediaForUI: t,
							hdTypes: l,
							media: r,
							sortOrderMs: n.sortOrderMs
						});
						return o("MAWMediaUtils").getBridgeMediaAnnotatedForDisplay(e, s, a);
					});
				});
			}));
		});
	}
	function g(e, t, n) {
		return e.messages.where("msgId").anyOf(n.msgIds).toArray().then(function(e) {
			return e.filter(function(e) {
				return e.threadJid === t;
			});
		});
	}
	function h(e, t) {
		return o("MAWDbXMATxns").getXMAFromMsgs(e, t).then(function(t) {
			return o("MAWDexieTable").dexieAll(t.map(function(t) {
				return o("MAWXMAUtils").isXMAStoryReply(t.targetType) ? o("MAWDexieTable").dexieResolve(null) : o("MAWDbMediaTxns").maybeGetMediaFromMediaId(e, t.defaultPreviewMediaId).then(function(n) {
					return n == null ? o("MAWBridgeXMA").createBridgeXMA(n, t, {
						hasMedia: !1,
						hasXmaFaviconMedia: !1,
						hasXmaHeaderMedia: !1
					}) : o("MAWDexieTable").dexieAll([n, o("MAWDbChunkTxns").hasMediaChunk(e, n == null ? void 0 : n.hashedPlaintextHash)]).then(function(e) {
						var n = e[0], r = e[1];
						return o("MAWBridgeXMA").createBridgeXMA(n, t, {
							hasMedia: r,
							hasXmaFaviconMedia: !1,
							hasXmaHeaderMedia: !1
						});
					});
				});
			}));
		}).then(function(e) {
			return e.filter(Boolean);
		});
	}
	function y(e, t) {
		return o("MAWDexieTable").dexieAll(t.map(function(t) {
			return t.receiverFetchId == null ? o("MAWDexieTable").dexieResolve(null) : o("MAWDbReceiverFetchTxns").maybeGetReceiverFetchInfoFromReceiverFetchId(e, t.receiverFetchId).then(function(e) {
				return e == null ? o("MAWDexieTable").dexieResolve(null) : o("MAWBridgeReceiverFetchInfo").createBridgeReceiverFetchInfoPayloadFromDbInfo(t.threadJid, t.msgId, t.sortOrderMs, t.ts, e);
			});
		})).then(function(e) {
			return e.filter(Boolean);
		});
	}
	function C(e, t) {
		var n = new Map();
		return o("MAWDexieTable").dexieAll(t.map(function(t) {
			if (t.type !== o("WAMsgType").MSG_TYPE.GROUP_POLL_CREATE && t.type !== o("WAMsgType").MSG_TYPE.GROUP_POLL_UPDATE) return null;
			var r = t.type === o("WAMsgType").MSG_TYPE.GROUP_POLL_CREATE ? t.externalId : t.pollStanzaId;
			if (r == null) return o("MWFBLogger").MWMediaLogger().tags(["GroupPollsE2EE"]).mustfix("pollStanzaId is null for poll msg in MLV2"), null;
			var a = n.get(r);
			if (a != null) {
				if (a.externalId === t.externalId) {
					var i;
					return b(e, t.threadJid, r, a.msgId, o("WATimeUtils").castToMillisTime((i = a == null ? void 0 : a.sortOrderMs) != null ? i : 0));
				}
				return null;
			}
			return o("MAWDbPollTxns").maybeGetLatestPollUpdateMsg(e, r, t.threadJid).then(function(a) {
				if (a == null) {
					var i;
					return b(e, t.threadJid, r, t.msgId, o("WATimeUtils").castToMillisTime((i = t.sortOrderMs) != null ? i : 0));
				}
				if (n.set(r, a), a.externalId === t.externalId) {
					var l;
					return b(e, t.threadJid, r, a.msgId, o("WATimeUtils").castToMillisTime((l = a == null ? void 0 : a.sortOrderMs) != null ? l : 0));
				} else return null;
			});
		})).then(function(e) {
			return e.filter(Boolean);
		}).finally(function() {
			n.clear();
		});
	}
	function b(e, t, n, r, a) {
		return e.poll.get([t, n]).then(function(e) {
			return e == null ? (o("MWFBLogger").MWMediaLogger().tags(["GroupPollsE2EE"]).mustfix("Poll is null in MLV2"), null) : {
				contactIdForCurrentUser: (m || (m = o("I64"))).of_string(o("MAWCurrentUser").getID()),
				dbPoll: e,
				latestUpdateMsgId: r,
				latestUpdateTimestampMs: a
			};
		});
	}
	function v(e, t, n) {
		var r = n.map(function(n) {
			var r;
			return n.quote == null ? null : o("MAWDbMsgTxns").maybeGetMsgByExternalId(e, n.quote.content.externalId, t, (r = n.quote) == null ? void 0 : r.content.author);
		}).filter(Boolean);
		return r.length <= 0 ? o("MAWDexieTable").dexieResolve([n, []]) : o("MAWDexieTable").dexieAll(r).then(function(e) {
			return [n, e.filter(Boolean)];
		});
	}
	function S(e, t, n, r, a, i, l) {
		l === void 0 && (l = function() {
			return !0;
		});
		var s = o("WATimeUtils").unixTime(), u = function(t) {
			return t.messageExpirationTs == null || t.messageExpirationTs > s;
		}, c = o("MAWLoadMsgsUtil").makeUntilWithRangeExtension(a, n, i);
		return p(e, t, r, a, function(e) {
			return l(e) && u(e);
		}, c).then(function(n) {
			return v(e, t, n);
		}).then(function(t) {
			var n = t[0], r = t[1];
			return o("MAWDexieTable").dexieAll([].concat(n, r).map(function(t) {
				return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t);
			})).then(function(e) {
				return {
					msgs: n,
					quoteMsgs: r,
					replyMediaInfo: e
				};
			});
		});
	}
	function R(e, t) {
		return e.messages.where("externalId").equals(t).toArray();
	}
	function L(e, t) {
		return R(e, t).then(function(n) {
			return n.length > 1 && o("MWFBLogger").MWLogger().tags(["Pinned"]).warn("duplicate MAW msg returned for externalId", t), o("MAWDexieTable").dexieAll(n.map(function(t) {
				return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(e, t);
			})).then(function(e) {
				return {
					msgs: n,
					replyMediaInfo: e
				};
			});
		});
	}
	function E(t) {
		var n = t.filter(function(e) {
			return e.ephemeralCounterStarted;
		});
		return n.length > 0 ? (o("MWFBLogger").MWLogger().tags([
			o("MAWLoggerUtils").Tag.Ephemeral,
			o("MAWLoggerUtils").Tag.Countdown,
			o("MAWLoggerUtils").Tag.OnLoad
		]).DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["EphemeralCounter: Showing UI counter for ", ""])), String(n.map(function(e) {
			return e.msgId;
		}))), o("MAWBridgeMsgCountdown").createBridgeMsgsStartCountdown(n).msgs) : [];
	}
	function k(e, t) {
		return e != null ? e : o("MAWMessagesDirection").switchOnMAWMessagesDirection(t, {
			after: Number.MIN_SAFE_INTEGER,
			before: Number.MAX_SAFE_INTEGER
		});
	}
	function I(e) {
		var t = e.chatJid, n = e.config, r = e.db, a = e.direction, i = e.range, l = o("WATimeUtils").unixTime(), u = function(t) {
			var e = t.messageExpirationTs != null && t.messageExpirationTs < l, r = t.type === o("WAMsgType").MSG_TYPE.ADMIN && !n.admin, a = t.isCollapsed === !0;
			return !e && !r && !a;
		}, c = i.includeLowerBoundMsg ? i.numMsgs : i.numMsgs + 1, d = o("MAWLoadMsgsUtil").makeUntilWithRangeExtensionBothDirections(c), m = k(i.lowerBoundSortOrderMs, a);
		return p(r, t, a, m, u, d).then(function(e) {
			return v(r, t, e);
		}).then(function(e) {
			var t = e[0], n = e[1], l = o("MAWLoadMessagesRequest").getMsgsForRange(t, i, a);
			return o("MAWDexieTable").dexieAll([].concat(l, n).map(function(e) {
				return o("MAWLoadReplyMediaTxns").getReplyMediaForMsgQuote(r, e);
			})).then(function(e) {
				return {
					msgsForRange: l,
					quotedMsgs: n,
					replyMediaInfo: e
				};
			});
		}).then(function(e) {
			var l = e.msgsForRange, u = e.quotedMsgs, c = e.replyMediaInfo;
			return o("MWFBLogger").MWLogger().tags(["MAWSecureLocalDBDataSource"]).DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"LoadMoreMsgs, chatJid: ",
				", range: ",
				".}"
			])), t, String(i)), D(r, l, u, c, a, i.numMsgs, n, t);
		});
	}
	function T(e, t, n, r, a, i, l, s) {
		var c = k(a, r);
		return S(e, t, n, r, c, l, function(e) {
			var t = e.isCollapsed === !0, n = !s.admin && e.type === o("WAMsgType").MSG_TYPE.ADMIN;
			return !(t || n);
		}).then(function(a) {
			var d = a.msgs, m = a.quoteMsgs, p = a.replyMediaInfo, _ = d;
			return i || (_ = _.filter(function(e) {
				return e.msgId !== l;
			}), _.length === d.length && d.length !== 0 && o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.LOAD_MORE_NO_ORIGINAL_MSG_IN_MAW,
				key: "mismatch"
			})), o("MWFBLogger").MWLogger().tags(["MAWSecureLocalDBDataSource"]).DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"LoadMoreMsgs: From:",
				" orignalMsgId:",
				", chatJid: ",
				""
			])), c, l, t), D(e, _, m, p, r, n, s, t);
		});
	}
	function D(e, t, n, r, a, i, l, s) {
		var u = t.length;
		if (u === 0) return o("MAWDexieTable").dexieResolve({
			editMsgHistory: [],
			expiringCountdown: [],
			hasMoreAfter: $(u, i, a),
			hasMoreBefore: x(u, i, a),
			medias: [],
			msgs: [],
			noteReplyCountdown: [],
			polls: [],
			quotedMsgs: [],
			reactions: [],
			receiverFetchInfoPayloads: [],
			xmaCountdown: [],
			xmas: []
		});
		var d = t.map(function(e, t) {
			if (!o("MAWXMAUtils").isXMAStoryReply(e.xmaMessageType)) return o("MAWBridgeMsg").createBridgeMsg(e, (r || [])[t]);
		}).filter(Boolean), m = E(t);
		return o("MWFBLogger").MWLogger().tags(["MAWSecureLocalDBDataSource"]).DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"LoadMoreMsgs, chatJid: ",
			", result: ",
			""
		])), s, String(d.map(function(e) {
			return e.msgId + ":" + e.sortOrderMs;
		}))), o("MAWDexieTable").dexieAll([
			l.reactions ? _(e, t) : o("MAWDexieTable").dexieResolve([]),
			l.media ? f(e, [].concat(t, n)) : o("MAWDexieTable").dexieResolve([]),
			l.xma ? h(e, t) : o("MAWDexieTable").dexieResolve([]),
			l.editMsgHistory ? o("MAWDbEditMsgHistoryTxns").loadEditMsgHistory(e, t) : o("MAWDexieTable").dexieResolve([]),
			l.receiverFetch ? y(e, t) : o("MAWDexieTable").dexieResolve([]),
			l.polls ? C(e, t) : o("MAWDexieTable").dexieResolve([])
		]).then(function(e) {
			var t = e[0], r = e[1], l = e[2], s = e[3], c = e[4], p = e[5];
			return {
				editMsgHistory: s,
				expiringCountdown: m,
				hasMoreAfter: $(u, i, a),
				hasMoreBefore: x(u, i, a),
				medias: r,
				msgs: d,
				noteReplyCountdown: [],
				polls: p,
				quotedMsgs: n.map(function(e) {
					return o("MAWBridgeMsg").createBridgeMsg(e, null, !0);
				}),
				reactions: t,
				receiverFetchInfoPayloads: c,
				xmaCountdown: [],
				xmas: l
			};
		});
	}
	function x(e, t, n) {
		switch (n) {
			case "before": return e >= t;
			default: return !0;
		}
	}
	function $(e, t, n) {
		switch (n) {
			case "after": return e >= t;
			default: return !0;
		}
	}
	function P(e, t, n) {
		return L(e, t).then(function(r) {
			var a = r.msgs, i = r.replyMediaInfo;
			if (a.length === 0) return {
				editMsgHistory: [],
				medias: [],
				msgs: [],
				polls: [],
				reactions: [],
				receiverFetchInfoPayloads: [],
				xmas: []
			};
			var l = a.map(function(e, t) {
				if (!o("MAWXMAUtils").isXMAStoryReply(e.xmaMessageType)) return o("MAWBridgeMsg").createBridgeMsg(e, (i || [])[t]);
			}).filter(Boolean);
			return o("MWFBLogger").MWLogger().tags(["MAWFetchMessageByPinnedExternalId"]).DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"LoadMsgsByExternalId: From: externalId:",
				". ",
				""
			])), t, String(l.map(function(e) {
				return "" + e.msgId;
			}))), o("MAWDexieTable").dexieAll([
				n.reactions ? _(e, a) : o("MAWDexieTable").dexieResolve([]),
				n.media ? f(e, a) : o("MAWDexieTable").dexieResolve([]),
				n.xma ? h(e, a) : o("MAWDexieTable").dexieResolve([]),
				n.editMsgHistory ? o("MAWDbEditMsgHistoryTxns").loadEditMsgHistory(e, a) : o("MAWDexieTable").dexieResolve([]),
				n.receiverFetch ? y(e, a) : o("MAWDexieTable").dexieResolve([]),
				n.polls ? C(e, a) : o("MAWDexieTable").dexieResolve([])
			]).then(function(e) {
				var t = e[0], n = e[1], r = e[2], o = e[3], a = e[4], i = e[5];
				return {
					editMsgHistory: o,
					medias: n,
					msgs: l,
					polls: i,
					reactions: t,
					receiverFetchInfoPayloads: a,
					xmas: r
				};
			});
		});
	}
	l.loadMoreMsgsAndMediaForRange = I, l.loadMoreMsgsAndMediaFromTs = T, l.loadMsgsAndMediaByExternalId = P;
}), 98);
