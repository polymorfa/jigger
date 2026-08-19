__d("MAWMarkThreadAsRead", [
	"FBLogger",
	"MAWGetUnreadMsgsApi",
	"MAWMarkReadReceiptsSentUpToApi",
	"MAWMarkThreadAsReadUpToApi",
	"MAWMessageRequestUtils",
	"MAWODSProxy",
	"Promise",
	"WADeprecatedSendIq",
	"WAJids",
	"WALRUMap",
	"WALogger",
	"WAOdsEnums",
	"WAPromiseQueue",
	"WATimeUtils",
	"WAWaitForComms",
	"WAWap",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = 256, m = new (o("WAPromiseQueue")).PromiseQueueMap(), p = new (o("WALRUMap")).LRUMap({ max: 500 });
	function _(e) {
		return !!p.has(e);
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.chatJid, i = t.isReadReceiptsDisabled, l = i === void 0 ? !1 : i, c = t.relationship;
			yield o("WAWaitForComms").waitForComms();
			var f = o("WATimeUtils").unixTime();
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.SEND_READ_RECEIPTS,
				key: "markThreadAsRead"
			});
			var g = yield o("MAWMarkThreadAsReadUpToApi").markThreadAsReadUpTo(a);
			if (c != null && o("MAWMessageRequestUtils").isInboxRequest(g.folder, c)) {
				o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsRead skips sending receipts for ", ""])), a);
				return;
			}
			if (g.type === "missing") {
				o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsRead skips sending receipts for ", ""])), a);
				return;
			}
			if (!g.isReadReceiptExpectedToBeSent) {
				o("WALogger").DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["markThreadAsRead skips sending receipts for ", ""])), a);
				return;
			}
			return g.type, m.enqueue(String(a), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				for (var e = !0; e;) {
					var t = yield o("MAWGetUnreadMsgsApi").getUnreadMsgs(a, d, l, g.readUpToMs);
					if (t.type !== "found") {
						t.type;
						break;
					}
					var n = t.loadedUpTo, i = t.unreadMsgs, s = i.filter(function(e) {
						var t = "read-" + e.chat + "-" + e.externalId, n = _(t);
						return n && r("FBLogger")("ArmadilloReadReceipts").info("armadillo duplicated read receipt"), !n;
					});
					r("gkx")("1371") === !1 && (yield h(s, f)), s.forEach(function(e) {
						var t = "read-" + e.chat + "-" + e.externalId;
						p.set(t, !0);
					}), yield o("MAWMarkReadReceiptsSentUpToApi").markReadReceiptsSentUpTo(a, n), e = t.maybeMore;
				}
			}));
		}), g.apply(this, arguments);
	}
	function h(e, t) {
		if (e.length === 0) return (c || (c = n("Promise"))).resolve();
		var a = e[0].chat;
		return o("WAJids").switchOnChatJidType(a, {
			group: function(i) {
				var r = o("WAWap").GROUP_JID(i), l = new Map();
				e.forEach(function(e) {
					var t = e.author, n = l.get(t) || [];
					n.push(e.externalId), l.set(t, n);
				});
				var s = [];
				return l.forEach(function(e, n) {
					s.push(y(r, a, e, n, t));
				}), (c || (c = n("Promise"))).all(s);
			},
			interopUser: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("InteropUserJid is not supported yet");
			},
			lidUser: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("LidUserJid is not supported yet");
			},
			msgrUser: function(r) {
				var n = o("WAWap").USER_JID(r), i = e.map(function(e) {
					return e.externalId;
				});
				return y(n, a, i, null, t);
			},
			phoneUser: function(t) {
				throw r("FBLogger")("messenger_web").mustfixThrow("PhoneUserJid is not supported yet");
			}
		}).then(r("emptyFunction"));
	}
	function y(e, t, n, r, a) {
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
	l.markThreadAsReadImpl = f;
}), 98);
