__d("MAWChatOpenTabForUser", [
	"I64",
	"LSDatabaseSingleton",
	"LSIntEnum",
	"MAWCreateOneToOneThread",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWMiActThreadLifecycleState__DO_NOT_USE",
	"MAWUpdateSecureThreadAttributionForContact",
	"MWChatInteraction",
	"MWChatStateActions",
	"MWChatStateV2Types",
	"dispatchOpenChatTabTraceLogging",
	"isOfflineThreadingId"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t) {
		if (t.type === o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE || t.type === o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY) {
			var n = t.serverThreadKey;
			return r("isOfflineThreadingId")(n) ? {
				existingThreadKey: n,
				reason: "otid",
				type: "continue"
			} : (e || (e = o("I64"))).le(n, (e || (e = o("I64"))).zero) ? {
				reason: "negative",
				type: "continue"
			} : {
				existingThreadKey: n,
				type: "skipped"
			};
		}
		return {
			existingThreadKey: t.serverThreadKey,
			type: "continue"
		};
	}
	async function d(t, n, r) {
		var a = await (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
		r == null || r.addMarkerPoint("create_one_to_one_secure_thread_start", "AppTiming");
		var l = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJid(a.tables, (e || (e = o("I64"))).of_string(t), n), u = l.type;
		u != null && (r == null || r.addAnnotation("mi_act_thread_state_type_before", u));
		var d = await c(l);
		if (d.type === "skipped") return r == null || r.addMarkerPoint("create_one_to_one_secure_thread_end", "AppTiming"), {
			dispatchEntrypoint: "MAWChatOpenTabForUser_skipped_create_thread",
			threadKey: d.existingThreadKey
		};
		d.reason != null && (r == null || r.addAnnotation("invalid_server_thread_key_in_mawchatopentabforuser_check", d.reason));
		var m = await o("MAWCreateOneToOneThread").call(a, e.of_string(t), void 0, "MAWChatOpenTabForUser: " + n), p = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJid(a.tables, e.of_string(t), n), _ = p.type;
		_ != null && (r == null || r.addAnnotation("mi_act_thread_state_type_after", _)), r == null || r.addMarkerPoint("create_one_to_one_secure_thread_end", "AppTiming");
		var f = await a.runInTransaction(function(e) {
			return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJid__DO_NOT_USE(e, m.jid, "MAWChatOpenTabForUser", function(e, t) {
				return Promise.resolve(t);
			});
		}, "readonly", void 0, void 0, i.id + ":147");
		return {
			clientThreadKey: f,
			threadKey: f
		};
	}
	function m(t, n, a, i, l) {
		var s = function(s) {
			var i = s.clientThreadKey, c = s.dispatchEntrypoint, d = s.threadKey;
			o("MWChatInteraction").set((e || (e = o("I64"))).to_string(d), l.getTraceId()), o("MAWUpdateSecureThreadAttributionForContact").maybeUpdateSecureThreadAttributionForContact(e.of_string(t), d);
			var m = {
				clientThreadKey: i,
				threadKey: d,
				threadType: (u || (u = o("LSIntEnum"))).ofNumber(15)
			};
			r("dispatchOpenChatTabTraceLogging")(l, m, c), a(o("MWChatStateActions").openTab(Date.now(), { shouldFocus: !n }, {
				threadKeyDescriptor: m,
				type: o("MWChatStateV2Types").MWChatStateTabType.ChatTab
			}));
		};
		l.addMarkerPoint("MAWChatOpenTabForUser_getThreadKeyByContactId_start", "AppTiming"), d(t, i, l).then(function(e) {
			var t = e.clientThreadKey, n = e.dispatchEntrypoint, r = e.threadKey;
			l.addMarkerPoint("MAWChatOpenTabForUser_getThreadKeyByContactId_end", "AppTiming"), s({
				clientThreadKey: t,
				dispatchEntrypoint: n != null ? n : "MAWChatOpenTabForUser",
				threadKey: r
			});
		});
	}
	l.getThreadKeyByContactId = d, l.openChatTab = m;
}), 98);
