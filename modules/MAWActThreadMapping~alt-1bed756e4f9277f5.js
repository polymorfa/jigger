__d("MAWActThreadMapping", [
	"FBLogger",
	"I64",
	"JSResourceForInteraction",
	"MAWBridgeGroupInviteLoadedHandler",
	"MAWBridgeOneToOneMessageRequestLoadedHandler",
	"MAWBridgeParticipantsUpdatedHandler",
	"MAWBridgeSendAndReceive",
	"MAWFolderTypes",
	"MAWFolderUtils",
	"MAWHandleActThread",
	"MAWJids",
	"MAWMiActMappingTableAPI",
	"MAWMiActOnActThreadReadyQueue",
	"MAWRemoveCorruptedParticipantsFromOneToOneChat",
	"MAWThreadMappingQPL",
	"MAWUserJidWrapper",
	"MWFBLogger",
	"ReQL",
	"WAArrayZip",
	"WAJids",
	"emptyFunction",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("JSResourceForInteraction")("MAWSyncThreadDescriptionAdminMsg").__setRef("MAWActThreadMapping"), d = new Map(), m = null;
	function p(e, t, n, a) {
		var l = a.then(function(a) {
			r("promiseDone")(e.runInTransaction(function(e) {
				return y(e, f(a), n);
			}, "readwrite", void 0, void 0, i.id + ":81").catch(function(e) {
				t.forEach(function(e) {
					return d.delete(e);
				}), o("MWFBLogger").MWLogger().warn("MAWActThreadMapping", "Post processing transaction not committed due to error " + e.message);
			}));
			for (var l of a) l.status === "rejected" && d.delete(l.jid);
			return a;
		}, function(e) {
			return t.forEach(function(e) {
				return d.delete(e);
			}), t.map(function(t) {
				return {
					jid: t,
					reason: r("getErrorSafe")(e).message,
					status: "rejected"
				};
			});
		});
		t.forEach(function(e) {
			return d.set(e, l.then(function(t) {
				var n = t.find(function(t) {
					var n;
					return ((n = t.value) == null ? void 0 : n.chatJid) === e || t.jid === e;
				});
				if (n == null) throw o("MWFBLogger").MWLogger().tags(["MiActMapping", "Occam"]).mustfixThrow("Should have thread creation result for every thread");
				return n;
			}));
		});
	}
	function _(e) {
		var t = new Map(), n = [];
		return e.threads.forEach(function(e) {
			var r = d.get(e.chatJid), a = e.instanceKey;
			r != null ? (a != null && (o("MAWThreadMappingQPL").addPoint("reuse_existing_promise_for_act_mapping", a), o("MAWThreadMappingQPL").endCancel("act_mapping_is_already_in_progress", a)), n.push(r)) : t.set(e.chatJid, e);
		}), {
			cachedPromises: n,
			threadsToVerifyByJid: t
		};
	}
	function f(e) {
		var t = new Map();
		return e.forEach(function(e) {
			if (e.status === "fulfilled") {
				var n;
				t.set(e.value.chatJid, babelHelpers.extends({}, e.value, { adminMsgParams: (n = e.value.adminMsgParams) != null ? n : null }));
			}
		}), t;
	}
	function g(t, n) {
		r("FBLogger")("wmi").tags(["ThreadMapping"]).INFO(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"MaybeCreateOrUpdateThread: ",
			"; ",
			""
		])), n.reason, n.threads.map(function(e) {
			return "JID: " + e.chatJid + ", key: " + e.authoritativeThreadKey + ";";
		}).join(" ")), m == null && (m = C(t));
		var a = _(n), i = a.cachedPromises, l = a.threadsToVerifyByJid;
		if (l.size === 0) return Promise.all(i);
		var s = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "bulkMaybeCreateOrUpdateThread", babelHelpers.extends({}, n, { threads: Array.from(l.values()) }));
		return p(t, Array.from(l.keys()), n, s), Promise.all([s].concat(i)).then(function(e) {
			return e.flat(1);
		});
	}
	function h(e) {
		var t = e.authoritativeThreadKey, n = e.description, a = e.instanceKey, i = e.jid, l = e.optimisticThreadKey;
		a != null && o("MAWMiActOnActThreadReadyQueue").logOnFlushQueue(l, t, a, n), l != null && r("promiseDone")(o("MAWMiActOnActThreadReadyQueue").processQueueOnActThreadReady((u || (u = o("I64"))).of_string(l), i, n, "clientThreadKey")), t != null && r("promiseDone")(o("MAWMiActOnActThreadReadyQueue").processQueueOnActThreadReady((u || (u = o("I64"))).of_string(t), i, n, "authoritativeThreadKey"));
	}
	async function y(e, t, n) {
		if (n.threads.length !== 0) {
			var a = [], i = o("WAJids").extractUserId(o("MAWUserJidWrapper").getMyUserJid());
			await Promise.all(n.threads.map(function(l) {
				var d = l.authoritativeThreadKey, m = l.chatJid, p = l.instanceKey, _ = t.get(m);
				if (_ == null) return Promise.resolve();
				var f = [], g = _.adminMsgParams, h = _.clientThreadKey, y = _.folder, C = _.isCreated, b = _.participants;
				r("FBLogger")("wmi").tags(["ThreadMapping"]).INFO(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"runPostProcessing: JID: ",
					", clientThreadKey ",
					", folder: ",
					", isCreated: ",
					", participants: ",
					""
				])), _.chatJid, h, y, C, b.length), b.forEach(function(e) {
					a.push(babelHelpers.extends({}, e, { chatJid: m }));
				});
				var S = o("WAJids").switchOnMsgrChatJidType(m, {
					group: function(t) {
						return !0;
					},
					user: function(t) {
						return !1;
					}
				});
				f.push(S ? o("MAWBridgeGroupInviteLoadedHandler").callFromMainThread(e, m, i) : o("MAWBridgeOneToOneMessageRequestLoadedHandler").callFromMainThread(e, m));
				var R = o("WAJids").interpretAsUserJid(m);
				return R != null && f.push(r("MAWRemoveCorruptedParticipantsFromOneToOneChat")(e, (u || (u = o("I64"))).of_string(d), R, i)), C || f.push(v(e, d, y != null ? y : o("MAWFolderTypes").FOLDER_ID.INBOX)), g != null && f.push(c.load().then(function(t) {
					return t(e, m, d, g);
				})), Promise.all(f).then(function() {
					var t;
					return o("MAWHandleActThread").handleActThreadWhenAuthoritativeInMI(e, {
						authoritativeThreadKey: d,
						description: (t = n.reason) != null ? t : "bulkCreateThreadWithoutAfterTxn",
						instanceKey: p,
						jid: m,
						optimisticThreadKey: h
					});
				});
			})), await o("MAWBridgeParticipantsUpdatedHandler").callFromMainThread(e, a);
		}
	}
	function C(e) {
		return o("MAWMiActMappingTableAPI").subscribeToMappingDeletion(e, function(e, t) {
			var n = o("MAWJids").convertIntJidToOneToOneChatJid(e);
			d.has(n) && d.delete(n);
			var r = o("MAWJids").convertIntJidToGroupJid(e);
			d.has(r) && d.delete(r);
		});
	}
	function b(e, t) {
		d.clear(), o("WAArrayZip").zip(e, t).forEach(function(e) {
			var t = e[0], n = e[1];
			return d.set(t, new Promise(function(e, t) {
				return e(n);
			}));
		});
	}
	function v(e, t, n) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange((u || (u = o("I64"))).of_string(t))).then(function(t) {
			if (t != null) {
				var r = o("MAWFolderUtils").getMessagingFolderTag(n), a = r === "inbox" ? void 0 : t.cannotReplyReason;
				return e.threads.put(babelHelpers.extends({}, t, { cannotReplyReason: a }));
			}
		}).then(r("emptyFunction"));
	}
	l.bulkVerifyThreadExistsInWorker = g, l.executePromisesBlockedOnActThreadMapping = h, l.setCache_TEST_ONLY = b;
}), 98);
