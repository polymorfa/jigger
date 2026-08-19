__d("WAWebVoipActionWriteCallLogImpl", [
	"WALogger",
	"WAResolvable",
	"WAWebABProps",
	"WAWebCallLogMsgData.flow",
	"WAWebChatGetExistingBridge",
	"WAWebCmd",
	"WAWebDBGetByParentMsgKey",
	"WAWebDBMsgUtils",
	"WAWebDBStoreMessageOrphans",
	"WAWebFindChatAction",
	"WAWebGetMessageCache",
	"WAWebHandleMsgTypes.flow",
	"WAWebHandleSingleMsgWorkerCompatible",
	"WAWebMessageQueue",
	"WAWebMsgCollection",
	"WAWebMsgType",
	"WAWebReleaseToEventLoop",
	"WAWebSendMsgChatAction",
	"WAWebUpdateMessageUIAction",
	"WAWebViewMode.flow",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallLogAnrGating",
	"WAWebVoipCallLogPlaceholderTracker",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipPendingCallLogOutcome",
	"WAWebVoipPhaseTracker",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R = new Set(), L = 100, E = new Map();
	function k(e) {
		if (!R.has(e)) {
			if (R.size >= L) {
				var t = R.values().next().value;
				t != null && R.delete(t);
			}
			R.add(e);
		}
	}
	function I(e) {
		return R.has(e);
	}
	async function T(t, n, a, i) {
		var l = o("WAWebVoipPhaseTracker").beginPostCallWork(), p = Date.now();
		o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG);
		try {
			await o("WAWebMessageQueue").onMessageQueue({
				chatWid: t,
				isOffline: !1,
				msgCategory: null,
				skipOfflineWait: i != null || o("WAWebABProps").getABPropConfigValue("enable_web_voip_anr_optimizations"),
				action: async function() {
					var l, _, f = Date.now() - p;
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log outcome update dequeued after ", "ms"])), f), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED);
					var g = o("WAWebMsgCollection").MsgCollection.get(n), h = (l = g == null ? void 0 : g.toJSON()) != null ? l : await o("WAWebDBMsgUtils").getMsgByMsgKey(n);
					if (h == null) {
						if (i != null) {
							o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip] deferred call log outcome skipped; row still missing for ", ""])), n.id), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
							return;
						}
						o("WAWebVoipPendingCallLogOutcome").rememberPendingCallLogOutcome(n, a) ? o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log outcome deferred; no row for ", ""])), n.id) : o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log outcome update skipped; no row for ", ""])), n.id), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
						return;
					}
					if (g == null ? h.kind !== "callLog" : g.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
						o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log outcome update skipped; row is not a call log for ", ""])), n.id), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
						return;
					}
					var y = o("WAWebVoipPendingCallLogOutcome").prepareCallLogOutcomeUpdate(n, (_ = g == null ? void 0 : g.callOutcome) != null ? _ : h.kind === "callLog" ? h.callOutcome : null, a, i);
					if (y.type === "skip") {
						y.reason === "consumed" && o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[voip] deferred call log outcome skipped; token was consumed for ", ""])), n.id), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
						return;
					}
					var C = babelHelpers.extends({}, h, {
						kind: "callLog",
						callOutcome: y.callOutcome
					});
					g != null ? await Promise.all([g.applyUpdate(C), o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
						chatId: t,
						newMsg: C,
						handleSingleMsgOrigin: "voipNotification",
						messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
					})]) : await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
						chatId: t,
						newMsg: C,
						handleSingleMsgOrigin: "voipNotification",
						messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
					}), o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(n, y.pendingOutcome), r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", g), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE);
				}
			});
		} finally {
			o("WAWebVoipPhaseTracker").endPostCallWork(l);
		}
	}
	async function D(e, t, n, a, i) {
		a === void 0 && (a = !1), i === void 0 && (i = !1);
		var l = P(t), s = o("WAWebVoipPhaseTracker").beginPostCallWork();
		try {
			var u, c = await o("WAWebChatGetExistingBridge").getExisting(e);
			if (c && c.ephemeralDuration != null ? u = babelHelpers.extends({}, t, { ephemeralDuration: c.ephemeralDuration }) : u = t, o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG), l != null && await l.waitForPrevious, await M(u)) return null;
			if (l == null || l.release(), a && !n) {
				var d = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(u), m = d.callLogMessage, h = d.pendingOutcome, y = o("WAWebMsgCollection").MsgCollection.get(m.id);
				if (!y) {
					var C = o("WAWebMsgCollection").MsgCollection.add(babelHelpers.extends({}, m))[0];
					if (C) return o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(m.id, h), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log in-mem, async IDB persist scheduled"]))), N({
						callLogMessage: m,
						chatId: e,
						msg: C
					}), C;
				}
			}
			var b = new (o("WAResolvable")).Resolvable(), v = Date.now();
			return o("WAWebMessageQueue").onMessageQueue({
				chatWid: e,
				isOffline: n,
				msgCategory: null,
				skipOfflineWait: o("WAWebABProps").getABPropConfigValue("enable_web_voip_anr_optimizations"),
				action: async function() {
					var e = Date.now() - v;
					o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log dequeued after ", "ms queue wait"])), e), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED);
					var t = S(u).then(function(t) {
						var n = Date.now() - v, r = n - e;
						o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
							"[voip] call log done: queue=",
							"ms write=",
							"ms total=",
							"ms"
						])), e, r, n), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE), b.resolve(t);
					}).catch(function(e) {
						o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log write failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-callog-write-failed"), b.resolve(null);
					});
					return n ? Promise.resolve() : t;
				}
			}), await b.promise;
		} finally {
			l == null || l.release(), o("WAWebVoipPhaseTracker").endPostCallWork(s);
		}
		async function S(t) {
			!n && o("WAWebVoipCallLogAnrGating").isWebVoipCallLogAnrOptimizationEnabled() && await o("WAWebReleaseToEventLoop").releaseToEventLoop();
			var a = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(t), l = a.callLogMessage, s = a.pendingOutcome;
			if (n) return await x(e, l, s), r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", null), null;
			var u = await $({
				callLogMessage: l,
				chatId: e,
				pendingOutcome: s,
				skipIdbPersistForUpdate: i
			});
			return r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", u), u;
		}
	}
	async function x(e, t, n) {
		o("WAWebCmd").Cmd.isMainStreamReadyMd && o("WAWebUpdateMessageUIAction").updateUI({
			chatId: e,
			msg: t
		});
		var r = o("WAWebGetMessageCache").getMessageCache();
		await r.addMessages([{ msg: t }], !1), o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, n);
		var a = t.id;
		if (a != null) {
			var i = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(t), l = i.callLogMessage, s = i.pendingOutcome;
			if (s != null) {
				if (l !== t) {
					await T(e, a, s.callOutcome, s);
					return;
				}
				o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(a, s);
			}
		}
	}
	async function $(e) {
		var t = e.callLogMessage, n = e.chatId, r = e.pendingOutcome, a = e.skipIdbPersistForUpdate, i = o("WAWebMsgCollection").MsgCollection.get(t.id);
		if (i == null) {
			var l = await o("WAWebSendMsgChatAction").addVoipCallLogMsgToChat(n, t);
			return l != null && o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, r), l;
		}
		var s = i.viewMode === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME || i.viewMode === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED;
		s && t.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE && o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
			"[writeVoipCallLogMessageImpl] placeholder ",
			" -> non-VISIBLE ",
			""
		])), i.viewMode, t.viewMode).sendLogs("voip-callog-promote-non-visible");
		var u = s && t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE ? babelHelpers.extends({}, t, { viewMode: o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED }) : t, c = w(i.callOutcome, u);
		return a ? await i.applyUpdate(c) : await Promise.all([i.applyUpdate(c), await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
			chatId: n,
			newMsg: c,
			handleSingleMsgOrigin: "voipNotification",
			messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
		})]), o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(t.id, r), i;
	}
	function P(e) {
		var t, n;
		if (!o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled()) return null;
		var r = (t = e.id) == null ? void 0 : t.id;
		if (r == null) return null;
		var a = (n = E.get(r)) != null ? n : Promise.resolve(), i = new (o("WAResolvable")).Resolvable(), l = a.then(function() {
			return i.promise;
		});
		E.set(r, l);
		var s = !1;
		return {
			waitForPrevious: a,
			release: function() {
				s || (s = !0, i.resolve(), l.then(function() {
					E.get(r) === l && E.delete(r);
				}));
			}
		};
	}
	async function N(e) {
		var t = e.callLogMessage, n = e.chatId, a = e.msg, i = Date.now();
		o("WAWebMessageQueue").onMessageQueue({
			chatWid: n,
			isOffline: !1,
			msgCategory: null,
			action: async function() {
				var e = Date.now() - i;
				o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log IDB persist dequeued after ", "ms"])), e), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_QUEUED), o("WAWebVoipCallLogAnrGating").isWebVoipCallLogAnrOptimizationEnabled() && await o("WAWebReleaseToEventLoop").releaseToEventLoop();
				try {
					var l = await o("WAWebFindChatAction").findOrCreateLatestChat(n, "voipCallLog"), s = l.chat;
					await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
						chatId: s.id,
						newMsg: t,
						handleSingleMsgOrigin: "voipNotification"
					}), s.msgs.add(a), o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log persisted to IDB successfully"])));
				} catch (e) {
					o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[voip] call log IDB persist failed"]))).catching(r("getErrorSafe")(e)).tags("voip").sendLogs("voip: persistCallLogAsync"), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_FAILED);
					return;
				}
				o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_WRITE_CALL_LOG_COMPLETE), r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", a);
			}
		});
	}
	async function M(e) {
		var t;
		if (!o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled()) return !1;
		var n = (t = e.id) == null ? void 0 : t.id;
		if (n == null || !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(n)) return !1;
		try {
			var a = null;
			if (e.kind === "callLog" && e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed) {
				var i = await o("WAWebDBGetByParentMsgKey").getMessageOrphansByParentMsgKey(e.id);
				for (var l of i) if (l.parsedMsgPayload.kind === "callLog") {
					a = l.parsedMsgPayload.callOutcome;
					break;
				}
			}
			var s = w(a, e), u = o("WAWebVoipPendingCallLogOutcome").mergePendingCallLogOutcome(s), c = u.callLogMessage, d = u.pendingOutcome;
			await o("WAWebDBStoreMessageOrphans").storeMessageOrphans([c], function(e) {
				return e.id;
			}), o("WAWebVoipPendingCallLogOutcome").clearPendingCallLogOutcome(c.id, d), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[voip] orphaned for placeholder callId=", ""])), n);
		} catch (e) {
			o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[voip] storeMessageOrphans failed for callId=", ""])), n).catching(r("getErrorSafe")(e)).sendLogs("voip-orphan-store-fail");
		}
		return !0;
	}
	function w(e, t) {
		return e === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere && t.kind === "callLog" && t.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed ? babelHelpers.extends({}, t, { callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere }) : t;
	}
	l.markCallIdProcessed = k, l.isCallIdAlreadyProcessed = I, l.updateVoipCallLogOutcomeImpl = T, l.writeVoipCallLogMessageImpl = D;
}), 98);
