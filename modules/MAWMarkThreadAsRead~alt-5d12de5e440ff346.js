__d("MAWMarkThreadAsRead", [
	"FBLogger",
	"MAWGetUnreadMsgsApi",
	"MAWMarkReadReceiptsSentUpToApi",
	"MAWMarkThreadAsReadUpToApi",
	"MAWMessageRequestUtils",
	"MAWODSProxy",
	"WADeprecatedSendIq",
	"WAJids",
	"WALRUMap",
	"WALogger",
	"WAOdsEnums",
	"WAPromiseQueue",
	"WATimeUtils",
	"WAWaitForComms",
	"WAWap",
	"emptyFunction",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = 256, d = new (o("WAPromiseQueue")).PromiseQueueMap(), m = new (o("WALRUMap")).LRUMap({ max: 500 });
	function p(e) {
		return !!m.has(e);
	}
	async function _(t) {
		var n = t.chatJid, a = t.isReadReceiptsDisabled, i = a === void 0 ? !1 : a, l = t.relationship;
		await o("WAWaitForComms").waitForComms();
		var _ = o("WATimeUtils").unixTime();
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.SEND_READ_RECEIPTS,
			key: "markThreadAsRead"
		});
		var g = await o("MAWMarkThreadAsReadUpToApi").markThreadAsReadUpTo(n);
		if (l != null && o("MAWMessageRequestUtils").isInboxRequest(g.folder, l)) {
			o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsRead skips sending receipts for ", ""])), n);
			return;
		}
		if (g.type === "missing") {
			o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsRead skips sending receipts for ", ""])), n);
			return;
		}
		if (!g.isReadReceiptExpectedToBeSent) {
			o("WALogger").DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsRead skips sending receipts for ", ""])), n);
			return;
		}
		return g.type, d.enqueue(String(n), async function() {
			for (var e = !0; e;) {
				var t = await o("MAWGetUnreadMsgsApi").getUnreadMsgs(n, c, i, g.readUpToMs);
				if (t.type !== "found") {
					t.type;
					break;
				}
				var a = t.loadedUpTo, l = t.unreadMsgs, s = l.filter(function(e) {
					var t = "read-" + e.chat + "-" + e.externalId, n = p(t);
					return n && r("FBLogger")("ArmadilloReadReceipts").info("armadillo duplicated read receipt"), !n;
				});
				r("gkx")("1371") === !1 && await f(s, _), s.forEach(function(e) {
					var t = "read-" + e.chat + "-" + e.externalId;
					m.set(t, !0);
				}), await o("MAWMarkReadReceiptsSentUpToApi").markReadReceiptsSentUpTo(n, a), e = t.maybeMore;
			}
		});
	}
	function f(e, t) {
		if (e.length === 0) return Promise.resolve();
		var n = e[0].chat;
		return o("WAJids").switchOnChatJidType(n, {
			group: function(a) {
				var r = o("WAWap").GROUP_JID(a), i = new Map();
				e.forEach(function(e) {
					var t = e.author, n = i.get(t) || [];
					n.push(e.externalId), i.set(t, n);
				});
				var l = [];
				return i.forEach(function(e, o) {
					l.push(g(r, n, e, o, t));
				}), Promise.all(l);
			},
			interopUser: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("InteropUserJid is not supported yet");
			},
			lidUser: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("LidUserJid is not supported yet");
			},
			msgrUser: function(a) {
				var r = o("WAWap").USER_JID(a), i = e.map(function(e) {
					return e.externalId;
				});
				return g(r, n, i, null, t);
			},
			phoneUser: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("PhoneUserJid is not supported yet");
			}
		}).then(r("emptyFunction"));
	}
	function g(e, t, n, r, a) {
		var i = null;
		n.length > 1 && (i = o("WAWap").wap("list", null, n.slice(1).map(function(e) {
			return o("WAWap").wap("item", { id: o("WAWap").CUSTOM_STRING(e) });
		})));
		var l = n[0], s = o("WAWap").wap("receipt", {
			id: o("WAWap").CUSTOM_STRING(l),
			participant: r != null ? o("WAWap").USER_JID(r) : o("WAWap").DROP_ATTR,
			t: o("WAWap").CUSTOM_STRING(String(a)),
			to: e,
			type: "read"
		}, i);
		return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(s, {
			class: "receipt",
			from: t,
			id: l,
			participant: r != null ? o("WAJids").defaultDeviceJidForUser(r) : null,
			type: "read"
		});
	}
	l.markThreadAsReadImpl = _;
}), 98);
