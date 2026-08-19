__d("MAWCreateOneToOneThread", [
	"I64",
	"LSAuthorityLevel",
	"LSFactory",
	"LSIntEnum",
	"MAWBridgeSendAndReceive",
	"MAWHandleActThread",
	"MAWJids",
	"MAWMiActMappingTableAPI",
	"MAWThreadLoadingState",
	"MAWThreadMappingQPL",
	"MAWVerifyThreadExistsUtils",
	"QPLUserFlow",
	"WMIWABridgeApi",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["instanceKey"], s, u;
	function c(e, t, n, r) {
		if (t != null) return t;
		var a = n != null ? (s || (s = o("I64"))).of_string(n) : void 0, i = o("MAWThreadMappingQPL").getInstanceKeyForThreadKey(a != null ? a : (s || (s = o("I64"))).zero);
		return o("MAWThreadMappingQPL").start({
			instanceKey: i,
			jid: e,
			threadKey: a,
			trigger: "MAWCreateOneToOneThread_" + r
		}), i;
	}
	async function d(e, t, n) {
		var a = await o("MAWVerifyThreadExistsUtils").runVerifyThreadExistsSproc(r("LSFactory")(e), {
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
			threadType: u.ofNumber(15)
		}, "MAWCreateOneToOneThread"), i = a[0], l = await h(e, t);
		return l === !0 && (o("MAWThreadMappingQPL").addPoint("insert_placeholder_mapping_row", n), await o("MAWThreadLoadingState").markActThreadLoadingAsInProgress(e, i, o("MAWJids").convertChatJidToIntJid(t))), (s || (s = o("I64"))).to_string(i);
	}
	async function m(e) {
		var t = e.db, n = e.description, r = e.existingInstanceKey, a = e.jid, l = e.optimisticThreadKey, s = await _(t.tables, a);
		if (s != null) return { skippedOrFailedResult: babelHelpers.extends({}, s, { jid: a }) };
		var u = c(a, r, l, n), m = t.runInTransaction(function(e) {
			return d(e, a, u);
		}, "readwrite", void 0, void 0, i.id + ":141"), p = await (l != null ? Promise.resolve(l) : o("MAWThreadMappingQPL").measurePerformance("running_verify_thread_exists", u, function() {
			return m;
		}));
		return {
			instanceKey: u,
			passedOptimisticThreadKey: p
		};
	}
	async function p(e, t, n, a, i, l) {
		var u = o("MAWJids").convertIntJidToOneToOneChatJid(t), c = {
			db: e,
			description: a,
			existingInstanceKey: l,
			jid: u,
			optimisticThreadKey: n
		}, d = await m(c);
		if (d.skippedOrFailedResult != null) return d.skippedOrFailedResult;
		var p = d.instanceKey, _ = d.passedOptimisticThreadKey, f = (s || (s = o("I64"))).to_string(t), h = function(n) {
			i != null && r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "verify-e2ee-metadata-thread-exists-end", { instanceKey: i });
			var t = {
				contactFbid: f,
				description: a,
				instanceKey: p,
				s2sInstanceKey: i,
				threadKey: n
			}, l = g(e, u, a, t);
			return Promise.all([l, r("WMIWABridgeApi").getDevices({
				ignoreDhash: !1,
				reason: "creating-1-1-thread: " + a,
				users: new Set().add(o("MAWJids").toUserJid(f))
			})]).then(function(e) {
				var t = e[0].isCreated;
				return t;
			});
		};
		return h(_).then(function(e) {
			return {
				isCreated: e,
				jid: u
			};
		});
	}
	async function _(e, t) {
		var n = await o("MAWThreadLoadingState").genLoadingStateFromJid(e, t);
		if (n.miState !== o("MAWThreadLoadingState").MiState.MISSING) return { isCreated: !1 };
	}
	function f(e, t, n) {
		return o("MAWMiActMappingTableAPI").getMappingRowForChatJid(e, n).then(function(r) {
			return r != null && o("MAWThreadLoadingState").markActThreadLoadingAsCompletedForJid(e, {
				jid: n,
				threadKey: (s || (s = o("I64"))).of_string(t)
			});
		});
	}
	function g(t, n, r, a) {
		var l = a.instanceKey, s = babelHelpers.objectWithoutPropertiesLoose(a, e);
		return o("MAWThreadMappingQPL").measurePerformance("maw_create_thread", l, function() {
			return o("MAWBridgeSendAndReceive").sendAndReceive("backend", "createOrUpdateThread", s);
		}).then(function(e) {
			var a = e.created;
			return t.runInTransaction(function(e) {
				return o("MAWHandleActThread").handleActThreadWhenOptimisticInMI(e, {
					description: r,
					instanceKey: l,
					jid: n,
					optimisticThreadKey: s.threadKey
				}).then(function() {
					return f(e, s.threadKey, n).then(function() {
						return { isCreated: a };
					});
				});
			}, "readwrite", void 0, void 0, i.id + ":275");
		});
	}
	async function h(e, t) {
		var n = await o("MAWMiActMappingTableAPI").getMappingRowForChatJid(e, t);
		return n == null;
	}
	l.call = p;
}), 98);
