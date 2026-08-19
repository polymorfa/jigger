__d("WAWebHandleMsgReceiptCommon", [
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebActiveMessageRanges",
	"WAWebApiActiveMessageRanges",
	"WAWebApiChat",
	"WAWebApiOrphanReceipt",
	"WAWebBackendApi",
	"WAWebBotUtils",
	"WAWebChatThreadLogging",
	"WAWebDBBulkGetRootMsgs",
	"WAWebDBMessageSerialization",
	"WAWebDBMessageUtils",
	"WAWebGetChatRecordByAccountLid",
	"WAWebMarkAddOnsAsReadJob",
	"WAWebMsgKey",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebNewsletterDBUtils",
	"WAWebPromiseQueue",
	"WAWebSchemaMessage",
	"WAWebThreadId",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h = new (o("WAWebPromiseQueue")).PromiseQueue();
	function y(e) {
		var t = null;
		for (var n of e) n.pendingReadReceipt != null && n.rowId != null && (t == null || n.rowId > t) && (t = n.rowId);
		return t;
	}
	async function C(e) {
		var t = Array.from(new Set(e.map(String))), n = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t, !1), r = [], a = [];
		return n.forEach(function(e, n) {
			e != null ? r.push(e) : a.push(t[n]);
		}), {
			maybeOrphans: a,
			msgs: r
		};
	}
	async function b(t, n) {
		if (t.length > 0) {
			var a = r("WAWebMsgKey").fromString(t[0].id).remote;
			return n.isLid() !== a.isLid() && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"receipt-actualremote: branch=matched-msg receiptRemote=",
				" receiptIsLid=",
				" resolved=",
				" resolvedIsLid=",
				""
			])), n.toLogString(), n.isLid(), a.toLogString(), a.isLid()), a;
		}
		if (n.isLid()) {
			var i = await o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(n);
			if (i.length > 0) {
				var l = o("WAWebWidFactory").createWid(i[0].id);
				return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"receipt-actualremote: branch=account-lid receiptRemote=",
					" receiptIsLid=true resolved=",
					" resolvedIsLid=",
					""
				])), n.toLogString(), l.toLogString(), l.isLid()), l;
			}
		}
		return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"receipt-actualremote: branch=fallback-raw receiptRemote=",
			" receiptIsLid=",
			""
		])), n.toLogString(), n.isLid()), n;
	}
	async function v(e) {
		if (e.length === 0) return new Set();
		var t = await o("WAWebMarkAddOnsAsReadJob").markUnclassifiedAddOnsAsReadJob(e.map(function(e) {
			return r("WAWebMsgKey").from(e);
		})), n = t.updatedAddOns, a = t.updatedOrphans;
		return new Set([].concat(a, Array.from(n.values()).flat()).map(String));
	}
	async function S(e) {
		e.length > 0 && o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["updateChatPeerRead: maybeOrphans ", ""])), e.length);
		var t = await v(e), n = e.filter(function(e) {
			return !t.has(e);
		});
		h.enqueue(function() {
			return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["updateChatPeerRead: storing ", " orphan acks"])), n.length), o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(o("WAWebAck").ACK_STRING.READ, 0, n);
		});
	}
	function R(e) {
		var t = new Map(), n = [];
		for (var r of e) {
			var a = o("WAWebDBMessageUtils").getThreadIdsFromMessage(r);
			if (a.length > 0) for (var i of a) {
				var l, s = i.toString(), u = (l = t.get(s)) != null ? l : [];
				u.push(r), t.set(s, u);
			}
			else n.push(r);
		}
		return {
			msgsByThreadId: t,
			msgsWithoutThread: n
		};
	}
	async function L(e, t) {
		t.length > 0 && await o("WAWebBackendApi").frontendSendAndReceive("resetAiThreadUnreadCounts", {
			chatId: e,
			threadIds: [].concat(t)
		});
	}
	async function E(e) {
		if (e.isNewsletter()) {
			o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && await o("WAWebBackendApi").frontendSendAndReceive("updateNewsletterUnreadMsgCount", { id: e });
			return;
		}
		await o("WAWebBackendApi").frontendSendAndReceive("updateChatUnreadMsgCountAndClearMentions", { remote: e });
	}
	async function k(e, t) {
		var n = await o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e), a = n.filter(function(e) {
			return e.action === "markChatAsRead" && e.actionValue.read === !1 && e.actionValue.messageRange != null;
		});
		if (a.length === 0) return !0;
		var i = a[0], l = t.some(function(e) {
			return !o("WAWebActiveMessageRanges").rangeContainsMessage(i.actionValue.messageRange, {
				id: r("WAWebMsgKey").fromString(e.id),
				t: e.t
			});
		});
		return l;
	}
	async function I(e) {
		var t = e.chatId, n = e.msgKeys, a = e.msgs, i = e.readAt, l = e.threadId, s = t.toString(), u = y(a), c = await k(s, a), d = await Promise.all([o("WAWebApiChat").markMessageAndChatAsRead({
			lastReadRowId: u,
			chatId: s,
			keepChatUnread: !c,
			readAt: i,
			threadId: l
		}), o("WAWebApiChat").markEditedMessageAndChatAsRead({
			chatId: t,
			readMsgKeys: n,
			threadId: l
		})]), m = d[0], p = d[1], _ = new Set([].concat(m.fullyReadThreadIds.map(function(e) {
			return e.toString();
		}), p.fullyReadThreadIds.map(function(e) {
			return e.toString();
		})));
		return Array.from(_, function(e) {
			return r("WAWebThreadId").from(e);
		});
	}
	async function T(e, t, n) {
		o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["updateChatPeerRead"])));
		var a = await C(t), i = a.maybeOrphans, l = a.msgs;
		await S(i);
		var s = await b(l, e), u, c = o("WAWebBotUtils").isMetaAiBot(s), d = c ? R(l) : {
			msgsByThreadId: new Map(),
			msgsWithoutThread: l
		}, p = d.msgsByThreadId, _ = d.msgsWithoutThread;
		if (c && _.length === 0 && p.size > 0) {
			var f = await Promise.all(Array.from(p.entries()).map(async function(e) {
				var o = e[0], a = e[1], i = r("WAWebThreadId").from(o);
				return I({
					chatId: s,
					msgs: a,
					msgKeys: t,
					readAt: n,
					threadId: i
				});
			})), g = new Set();
			for (var h of f) for (var y of h) g.add(y.toString());
			u = Array.from(g, function(e) {
				return r("WAWebThreadId").from(e);
			});
		} else u = await I({
			chatId: s,
			msgs: _,
			msgKeys: t,
			readAt: n
		});
		t.length > 0 && await o("WAWebApiChat").tightenAfterReadExpirationFromPeerReceipt({
			msgKeys: t,
			readAt: n
		}), await L(s, u), await E(s);
	}
	async function D(e, t) {
		var n = e.map(function(e) {
			return o("WAWebDBMessageUtils").craftInternalId({
				chatId: t.toJid(),
				inChatMsgId: e
			});
		}), a = await o("WAWebSchemaMessage").getMessageTable().anyOf(["internalId"], n), i = a.map(function(e) {
			return r("WAWebMsgKey").fromString(e.id);
		});
		return await o("WAWebNewsletterDBUtils").updateMsgViewReceipt(i), o("WAWebBackendApi").frontendFireAndForget("updateMsgsViewed", { ids: i });
	}
	function x(e, t, n) {
		h.enqueue(function() {
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["updateMsgAcks: store ", " orphan acks"])), e.length);
			var r = null;
			if (t === o("WAWebAck").ACK.PLAYED ? r = o("WAWebAck").ACK_STRING.PLAYED : t === o("WAWebAck").ACK.READ && (r = o("WAWebAck").ACK_STRING.READ), r) return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(r, n, e.map(String));
		});
	}
	function $(e) {
		return h.enqueue(async function() {
			var t = await o("WAWebApiOrphanReceipt").getOrphanReceipt(e);
			if (t == null) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["processOrphanPeerReceipt: no orphan ack found for incoming ", ""])), e);
				return;
			}
			t[o("WAWebAck").ACK_STRING.PLAYED] != null && (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["processOrphanPeerReceipt: orphan played ack for ", ""])), e), await o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
				msgKeys: [e],
				ack: o("WAWebAck").ACK.PLAYED,
				t: t[o("WAWebAck").ACK_STRING.PLAYED]
			})), t[o("WAWebAck").ACK_STRING.READ] != null && (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["processOrphanPeerReceipt: orphan read ack for ", ""])), e), T(e.remote, [e], t[o("WAWebAck").ACK_STRING.READ])), await o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey);
		});
	}
	async function P(e) {
		var t = e.map(String), n = await o("WAWebSchemaMessage").getMessageTable().bulkGet(t, !1);
		o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(n.filter(Boolean).map(function(e) {
			return o("WAWebDBMessageSerialization").messageFromDbRow(e);
		}).filter(function(e) {
			return e.isViewOnce;
		}).map(function(e) {
			var t;
			return {
				activityType: "viewOnceOpen",
				ts: (t = e.t) != null ? t : o("WATimeUtils").unixTime(),
				chatId: e.id.remote
			};
		}));
	}
	l.updateChatPeerRead = T, l.updateMsgViewed = D, l.updateOrphanPeerReceipt = x, l.processOrphanPeerReceipt = $, l.handleViewOnceOpenedIfNecessary = P;
}), 98);
