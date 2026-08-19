__d("MAWThreadMappingUtils", [
	"FBLogger",
	"LSMessagingThreadTypeUtil",
	"MAWJids",
	"MAWMiActOnActThreadReadyInstrumentation",
	"ReQL",
	"ReQLSubscribe",
	"err",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 3e4;
	async function s(e, t) {
		var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
		return n == null ? (r("FBLogger")("messenger_web").mustfix("[onActThreadReady] Thread is not ready to be used."), null) : o("LSMessagingThreadTypeUtil").isGroup(n.threadType);
	}
	function u(e, t) {
		return Promise.all([s(e, t), o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(t))]).then(function(e) {
			var t = e[0], n = e[1];
			return n == null || t == null ? (r("FBLogger")("messenger_web").mustfix("[onActThreadReady] Thread is not ready to be used."), null) : o("MAWJids").convertIntJidToChatJid(n.jid, t);
		});
	}
	function c(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(t)).then(function(e) {
			return e == null ? (r("FBLogger")("messenger_web").mustfix("[onActThreadReady] Thread is not ready to be used."), null) : e.jid;
		});
	}
	async function d(t, n, a) {
		var i, l = null, c = (i = o("MAWMiActOnActThreadReadyInstrumentation")).getOnActThreadReadyInstanceKey(a);
		i.startQPL(c, a, n, "getChatJidOnceInThreadMappingTable"), i.addPointQPL(c, "get_existing_int_jid_from_mapping_table_start");
		var d = await u(t.tables, n);
		if (i.addPointQPL(c, "get_existing_int_jid_from_mapping_table_end"), d != null) return o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(c), Promise.resolve(d);
		var m = await s(t.tables, n);
		if (m == null) throw o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(c, "thread_not_ready_to_be_used"), r("FBLogger")("messenger_web").mustfixThrow("Thread is not ready to be used.");
		return o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(c, "subscribe_to_mapping_table_start"), new Promise(function(a, i) {
			var s = o("ReQL").fromTableDescending(t.tables.mi_act_mapping_table).getKeyRange(n), u = o("ReQLSubscribe").subscribeToFirst(s, function(e) {
				e != null && (l != null && window.clearTimeout(l), u(), o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(c, "subscribe_to_mapping_table_end"), o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(c), a(o("MAWJids").convertIntJidToChatJid(e.jid, m)));
			});
			l = r("setTimeout")(function() {
				u(), o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(c, "subscribe_to_mapping_table_timeout"), i(r("err")("Timeout waiting for int jid to be populated in mapping table."));
			}, e);
		});
	}
	async function m(t, n, a) {
		var i, l = null, s = (i = o("MAWMiActOnActThreadReadyInstrumentation")).getOnActThreadReadyInstanceKey(a);
		i.startQPL(s, a, n, "getIntJidOnceInThreadMappingTable"), i.addPointQPL(s, "get_existing_int_jid_from_mapping_table_start");
		var u = await c(t.tables, n);
		return i.addPointQPL(s, "get_existing_int_jid_from_mapping_table_end"), u != null ? (o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(s), Promise.resolve(u)) : (o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(s, "subscribe_to_mapping_table_start"), new Promise(function(a, i) {
			var u = o("ReQL").fromTableDescending(t.tables.mi_act_mapping_table).getKeyRange(n), c = o("ReQLSubscribe").subscribeToFirst(u, function(e) {
				e != null && (l != null && window.clearTimeout(l), c(), o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(s, "subscribe_to_mapping_table_end"), o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(s), a(e.jid));
			});
			l = r("setTimeout")(function() {
				c(), o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(s, "subscribe_to_mapping_table_timeout"), i(r("err")("Timeout waiting for int jid to be populated in mapping table."));
			}, e);
		}));
	}
	l.isThreadGroup = s, l.getChatJidFromMappingTable = u, l.getIntJidFromMappingTable = c, l.getChatJidOnceInThreadMappingTable = d, l.getIntJidOnceInThreadMappingTable = m;
}), 98);
