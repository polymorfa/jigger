__d("MAWDbEditMsgHistoryTxns", [
	"MAWAckLevel",
	"MAWDbEditMsgHistory",
	"MAWDexieTable",
	"MAWVault",
	"MWFBLogger",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWLogger().tags([
		"maw_db",
		"txn",
		"MAWDbEditMsgHistoryTxns"
	]);
	function m(t, n) {
		var r = [];
		if (n.length === 0) return o("MAWDexieTable").dexieResolve(r);
		var a = n.filter(function(e) {
			return e.editCount != null && e.editCount > 0;
		}), i = a.map(function(e) {
			return [e.externalId, e.threadJid];
		});
		if (i.length === 0) return o("MAWDexieTable").dexieResolve([]);
		var l = a.reduce(function(e, t) {
			return t.msgId != null && e.set(t.externalId, t.msgId), e;
		}, new Map()), u = a.reduce(function(e, t) {
			return t.msgId != null && e.set(t.externalId, t), e;
		}, new Map());
		return p(t, i).then(function(t) {
			if (t.length === 0) return d.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["No edit history found for the messages despite there being an editCount greater than 0"]))), [];
			for (var n of t) {
				var a = l.get(n.originalMsgExternalId);
				a != null && r.push(babelHelpers.extends({}, n, {
					editMsgHistoryId: o("MAWDbEditMsgHistory").convertToEditMsgHistoryId64(n.editMsgHistoryId),
					originalMsgId: a
				}));
				var i = u.get(n.originalMsgExternalId);
				i != null && n.threadJid !== i.threadJid && d.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Edit history threadJid does not match original message threadJid"])));
			}
			return r;
		});
	}
	function p(e, t) {
		return e.editMsgHistory.where(["originalMsgExternalId", "threadJid"]).anyOf(t).toArray();
	}
	function _(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.editMsgHistory.get({ editMsgHistoryId: t });
	}
	function f(e, t, n) {
		return e.editMsgHistory.where("originalMsgExternalId").equals(n).filter(function(e) {
			return e.editExternalId === t.externalId && e.author === t.author && e.threadJid === t.chat;
		}).toArray().then(function(e) {
			if (e.length > 1) {
				var t = e.map(function(e) {
					return "" + e.editTs.toString();
				}), n = new Set(t).size === 1;
				n ? d.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[getEditHistoryMsgByEditedProtocolMsgId] Suspected multiple instances of same message!"]))) : d.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[getEditHistoryMsgByEditedProtocolMsgId] Can't have ", " messages with the same editExternalId!"])), e.length);
			}
			return e[0];
		});
	}
	function g(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve([]) : e.editMsgHistory.where("originalMsgExternalId").equals(t.externalId).filter(function(e) {
			return e.author === t.author && e.threadJid === t.chat;
		}).toArray().then(function(e) {
			var t = [];
			return e.forEach(function(e) {
				e != null && t.push(e);
			}), t;
		});
	}
	function h(e, t) {
		return e.editMsgHistory.bulkGet(t);
	}
	function y(e, t) {
		return e.editMsgHistory.bulkAdd(t, { allKeys: !0 }).then(function(e) {
			return o("MAWDexieTable").dexieResolve(e);
		});
	}
	function C(e, t, n, r) {
		return r.then(function(r) {
			return b(e, t, n, r);
		});
	}
	function b(e, t, n, r) {
		var a = [];
		return e.editMsgHistory.where("originalMsgExternalId").equals(t).filter(function(e) {
			return e.threadJid === r && e.author === n && (e.sendStatus == null || e.sendStatus >= o("MAWAckLevel").ACK.sent);
		}).toArray().then(function(e) {
			return e.forEach(function(e) {
				a.push({
					messageId: e.editExternalId,
					originalMessageId: e.originalMsgExternalId,
					text: o("MAWVault").unvault(e.msgContent.content),
					timestamp: e.editTs
				});
			}), a;
		});
	}
	function v(e, t, n, o) {
		return e.editMsgHistory.where("originalMsgExternalId").equals(t).filter(function(e) {
			return e.threadJid === o && e.author === n;
		}).delete().then(r("emptyFunction"));
	}
	var S = function(t, n) {
		return t.editMsgHistory.where(["originalMsgExternalId", "threadJid"]).anyOf(n).delete().then(function() {
			return o("MAWDexieTable").dexieResolve(n.length);
		});
	};
	function R(e, t, n) {
		return e.editMsgHistory.put(babelHelpers.extends({}, t, { msgContent: n.msgContent })).then(function() {});
	}
	l.loadEditMsgHistory = m, l.getEditHistoryByOriginalMsgExternalIdAndThreadJid = p, l.maybeGetEditMsgHistoryFromEditMsgHistoryId = _, l.getEditHistoryMsgByEditedProtocolMsgId = f, l.maybeGetEditMsgHistoryFromProtocolMsgId = g, l.bulkGetEditMsgHistorys = h, l.bulkAddEditMsgHistory = y, l.getEditHistoryAsEchoWithJidPromise = C, l.getEditHistoryAsEcho = b, l.bulkRemoveEditHistory = v, l.deleteExpiredEditMsgHistory = S, l.updateEditMsgHistoryWithNewIncomingMsg = R;
}), 98);
