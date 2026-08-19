__d("WAWebDBMessageRange", [
	"WALogger",
	"WALongInt",
	"WATimeUtils",
	"WAWebDBDeleteAssociatedMsgsByMsgKey",
	"WAWebDBMessageStoreUtils",
	"WAWebDBMessageUtils",
	"WAWebLidMigrationUtils",
	"WAWebMessageAssociationGatingUtils",
	"WAWebModelStorageUtils",
	"WAWebMsgKey",
	"WAWebMsgType",
	"WAWebProtobufMsgKeyUtils",
	"WAWebSchemaMessage",
	"WAWebViewMode.flow",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = 1e3;
	function d(e) {
		return o("WAWebSchemaMessage").getMessageTable().between(["messageRangeIndex"], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, o("WAWebDBMessageUtils").MessagePropertyType.IncomingChatMessage), o("WAWebDBMessageStoreUtils").endOfMessageRange(e, o("WAWebDBMessageUtils").MessagePropertyType.IncomingChatMessage), {
			lowerInclusive: !0,
			reverse: !0,
			limit: 1,
			shouldDecrypt: !1
		}).then(function(e) {
			var t;
			return o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex((t = e[0]) == null ? void 0 : t.messageRangeIndex);
		});
	}
	function m(e) {
		return o("WAWebSchemaMessage").getMessageTable().between(["messageRangeIndex"], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage), o("WAWebDBMessageStoreUtils").endOfMessageRange(e, o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage), {
			lowerInclusive: !0,
			reverse: !0,
			limit: 1,
			shouldDecrypt: !1
		}).then(function(e) {
			var t;
			return o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex((t = e[0]) == null ? void 0 : t.messageRangeIndex);
		});
	}
	function p(e) {
		return o("WAWebSchemaMessage").getMessageTable().between(["messageRangeIndex"], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage), o("WAWebDBMessageStoreUtils").endOfMessageRange(e, o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage), {
			lowerInclusive: !0,
			reverse: !1,
			limit: 1,
			shouldDecrypt: !1
		}).then(function(e) {
			var t;
			return o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex((t = e[0]) == null ? void 0 : t.messageRangeIndex);
		});
	}
	async function _(e, t) {
		var n, a, i = o("WAWebSchemaMessage").getMessageTable().between(["messageRangeIndex"], (n = o("WAWebDBMessageStoreUtils")).beginningOfMessageRange(e, (a = o("WAWebDBMessageUtils")).MessagePropertyType.Outgoing, t), n.endOfMessageRange(e, a.MessagePropertyType.Outgoing), {
			reverse: !0,
			shouldDecrypt: !1
		}), l = o("WAWebSchemaMessage").getMessageTable().anyOf(["messageRangeIndex"], [
			n.beginningOfMessageRange(e, a.MessagePropertyType.IncomingChatMessage, t),
			n.beginningOfMessageRange(e, a.MessagePropertyType.Outgoing, t),
			n.beginningOfMessageRange(e, a.MessagePropertyType.Outgoing)
		], {
			reverse: !0,
			shouldDecrypt: !1
		}), s = await Promise.all([i, l]).then(function(e) {
			var t = e[0], n = e[1], a = function(t) {
				return !(t.ack === -1 && t.isSendFailure === !0 || t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE);
			}, i = t.concat(n).filter(a), l = function(t) {
				var e, n = r("WAWebMsgKey").fromString(t.id), a = (e = o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex(t.messageRangeIndex)) != null ? e : void 0, i = {
					key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(n),
					timestamp: a
				};
				return i;
			};
			return i.map(l);
		}), u = f(s, c), d = u.messages, m = u.newLastMessageTimestamp;
		return {
			messages: d,
			newLastMessageTimestamp: m
		};
	}
	function f(e, t) {
		var n = [], a = [];
		if (e.forEach(function(e) {
			e.timestamp != null ? n.push(e) : a.push(e);
		}), n.length < t) return { messages: e };
		var i = n.sort(g).slice(0, t), l = i[i.length - 1];
		return S(l.timestamp, "smallestTimestampMessage"), {
			messages: i.concat(a),
			newLastMessageTimestamp: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(l.timestamp))
		};
	}
	function g(e, t) {
		var n = [e, t].map(function(e) {
			return o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(e.timestamp));
		}), a = n[0], i = n[1];
		return i - a;
	}
	async function h(e, t, n, r) {
		var a = await o("WAWebSchemaMessage").getMessageTable().between(["messageRangeIndex"], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, n), o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, n, o("WALongInt").numberOrThrowIfTooLarge(t)), {
			lowerInclusive: !0,
			upperInclusive: !0,
			shouldDecrypt: !1
		});
		if (n === o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage && (a = a.filter(function(e) {
			return !o("WAWebDBMessageStoreUtils").isInitialEncryptionMessage(e);
		})), (r == null ? void 0 : r.forceDeleteAllMessagesExceptInitialEncryption) === !0) return a.map(function(e) {
			return e.id;
		});
		if (n === o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage && (r == null ? void 0 : r.skipRecentSystemMessages) !== !1 && (a = a.filter(function(e) {
			return !(o("WAWebDBMessageStoreUtils").isSecuritySensitiveMessage(e) && e.t > o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS);
		})), (r == null ? void 0 : r.skipStarred) !== !1 && (a = a.filter(function(e) {
			return e.isStarred === void 0;
		})), (r == null ? void 0 : r.skipScheduledMessages) === !0 && (a = a.filter(function(e) {
			return e.viewMode !== o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE;
		})), n === o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage) {
			for (var i, l = a.length - 1; l >= 0; l--) if (o("WAWebDBMessageStoreUtils").isBizBotDisclosureMessage(a[l])) {
				i = a[l].id;
				break;
			}
			i != null && (a = a.filter(function(e) {
				return e.id !== i;
			}));
		}
		return a.map(function(e) {
			return e.id;
		});
	}
	async function y(e) {
		var t = o("WAWebDBMessageUtils").beginningOfChat(e), n = o("WAWebDBMessageUtils").endOfChat(e), r = await o("WAWebSchemaMessage").getMessageTable().between(["messageRangeIndex"], t, n, {
			lowerInclusive: !0,
			shouldDecrypt: !1
		});
		return r.filter(function(e) {
			return e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE;
		}).map(function(e) {
			return e.id;
		});
	}
	async function C(e) {
		var t = e.chatId, n = e.messages, a = e.options, i = n.map(function(e) {
			return o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(r("nullthrows")(e.key)).toString();
		}), l = [];
		t.isGroup() && i.forEach(function(e) {
			var t = r("WAWebMsgKey").fromString(e);
			if (t.fromMe) {
				var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
				n && l.push(n.toString());
			}
		});
		var s = await o("WAWebSchemaMessage").getMessageTable().bulkGet(i.concat(l)), u = [];
		return s.forEach(function(e) {
			if (e != null) {
				if ((a == null ? void 0 : a.skipStarred) !== !1 && e.isStarred != null || (a == null ? void 0 : a.skipScheduledMessages) === !0 && e.viewMode === o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE) return;
				u.push(e.id);
			}
		}), u;
	}
	function b(e) {
		var t = e.chatId, n = e.options, r = e.range, a = r.lastMessageTimestamp, i = r.lastSystemMessageTimestamp, l = r.messages;
		return o("WAWebModelStorageUtils").getStorage().lock(["message", "message-association"], async function(e) {
			var r, s = e[0], u = [], c = [];
			a != null && (c.push(h(t, a, o("WAWebDBMessageUtils").MessagePropertyType.IncomingChatMessage, n)), c.push(h(t, a, o("WAWebDBMessageUtils").MessagePropertyType.Outgoing, n)));
			var d = i != null ? i : a;
			d != null && c.push(h(t, d, o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage, n)), c.push(C({
				chatId: t,
				messages: l,
				options: n
			})), (n == null ? void 0 : n.deleteAutomatedGreetingMessages) === !0 && c.push(y(t));
			var m = await Promise.all(c);
			u = (r = u).concat.apply(r, m);
			var p = n == null ? void 0 : n.skipMessages;
			p && (u = u.filter(function(e) {
				return !p.has(e);
			}));
			var _ = [s.bulkRemove(u)];
			return o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled() && _.push(o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys(u)), await Promise.all(_), u;
		});
	}
	function v(t) {
		var n, r, a = t.messages, i = {
			messages: a,
			lastMessageTimestamp: t.lastMessageTimestamp
		};
		if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["syncd: additionalMessages length: ", ""])), a.length), a.length > c) {
			var l = f(a, c), s = l.messages, u = l.newLastMessageTimestamp;
			u != null && (i.lastMessageTimestamp = u, S(i.lastMessageTimestamp, "resultantRange")), i.messages = s;
		}
		return o("WALongInt").numberOrThrowIfTooLarge((n = t.lastSystemMessageTimestamp) != null ? n : 0) > o("WALongInt").numberOrThrowIfTooLarge((r = i.lastMessageTimestamp) != null ? r : 0) && (i.lastSystemMessageTimestamp = t.lastSystemMessageTimestamp), i;
	}
	function S(e, t) {
		try {
			o("WALongInt").numberOrThrowIfTooLarge(e != null ? e : 0) / o("WATimeUtils").unixTime() > 10 && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"syncd: large timestamp: ",
				" returned a large timestamp: ",
				""
			])), t, e).sendLogs("syncd: " + t + " returned a large timestamp");
		} catch (t) {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"syncd: error reporting logMaybeMillisecondTimestamp for ",
				": ",
				""
			])), e, t);
		}
	}
	var R = { limitAdditionalMessages: f };
	l.getLastMessageTimestamp = d, l.getLastSystemMessageTimestamp = m, l.getFirstSystemMessageTimestamp = p, l.getAdditionalMessages = _, l.timestampComparison = g, l.deleteMessagesInMessageRange = b, l.fixMessageRange = v, l.logMaybeMillisecondTimestamp = S, l._test = R;
}), 98);
