__d("WAWebBlockContactAction", [
	"fbt",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebBackendErrors",
	"WAWebBlockUserJob",
	"WAWebBlocklistCollection",
	"WAWebBlocklistMigration",
	"WAWebBlocklistUtils",
	"WAWebChatCollection",
	"WAWebFrontendContactGetters",
	"WAWebMmSignalSharingLoggingEvents",
	"WAWebNoop",
	"WAWebSmb1pdConversionSignalAction",
	"WAWebStateUtils",
	"WAWebToastManager",
	"WAWebUpdateBlocklistDbJob",
	"WAWebWamBlockEventReporter",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react"));
	function p(e) {
		var t = e.bizOptOutArgs, n = e.blockEntryPoint, a = e.contact, i = e.skipCtwa1pdNbfSignal, l = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(n);
		o("WAWebWamBlockEventReporter").logBlockEvent({
			contact: a,
			blockEntryPoint: l,
			isBlock: !0
		});
		var s = o("WAWebChatCollection").ChatCollection.get(a.id);
		o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingBlockVerificationEvent({
			blockEntryPoint: n,
			chat: s,
			reason: t == null ? void 0 : t.reason,
			blockEntryPointMetric: l
		}), o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserBlockWithReasonEvent({
			chat: s,
			reason: t == null ? void 0 : t.reason,
			blockEntryPointMetric: l
		});
		var u = g(o("WAWebStateUtils").unproxy(a), !0, n, t);
		return i !== !0 && s != null && u.then(function() {
			return o("WAWebSmb1pdConversionSignalAction").log1pdBlockConversionSignal(s);
		}).catch(r("WAWebNoop")), u;
	}
	function _(e, t) {
		var n = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(t);
		return o("WAWebWamBlockEventReporter").logBlockEvent({
			contact: e,
			blockEntryPoint: n,
			isBlock: !1
		}), g(o("WAWebStateUtils").unproxy(e), !1, t);
	}
	async function f(e) {
		var t = await o("WAWebUpdateBlocklistDbJob").updateBlockingStatusForPSAUser(e), n = e;
		t ? o("WAWebBlocklistCollection").BlocklistCollection.add({ id: n }) : o("WAWebBlocklistCollection").BlocklistCollection.remove(n);
	}
	function g(e, t, n, r, a) {
		var i = e.isContactBlocked, l = t && i, s = !t && !i;
		if (l || s) return Promise.resolve();
		var u = y(e, t ? "block" : "unblock", n, r).then(async function(e) {
			if (e && e.errorCode != null) throw new (o("WAWebBackendErrors")).ServerStatusCodeError(e.errorCode, e.errorText);
			var n = e.targetWid;
			await o("WAWebUpdateBlocklistDbJob").updateBlocklistDbJob(n, t), t ? o("WAWebBlocklistCollection").BlocklistCollection.add({ id: n }) : o("WAWebBlocklistCollection").BlocklistCollection.remove(n);
		}), c = function() {
			return g(e, !t, n, r, a);
		}, d = function() {
			return g(e, t, n, r, a);
		};
		return h({
			action: u,
			block: t,
			contact: e,
			redo: d,
			toastId: a,
			undo: c
		}), u;
	}
	function h(t) {
		var n = t.action, r = t.block, a = t.contact, i = t.redo, l = t.toastId, u = l === void 0 ? o("WAWebActionToast.react").genId() : l, c = t.undo, d = o("WAWebFrontendContactGetters").getFormattedName(a), p = r ? new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._param("member", d)]
		)) : new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._param("member", d)]
		)), _ = n.then(function() {
			var e = r ? s._(
				/*BTDS*/
				"",
				[s._param("member", d)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("member", d)]
			);
			return new (o("WAWebActionToast.react")).ActionType(e, {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: c
			});
		}).catch(function(t) {
			if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
				if (t.statusCode >= 400) throw r ? new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._param("member", d)]
				)) : new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					"",
					[s._param("member", d)]
				));
			} else {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["action:setBlock dropped"])));
				var n = r ? s._(
					/*BTDS*/
					"",
					[s._param("member", d)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("member", d)]
				);
				throw new (o("WAWebActionToast.react")).ActionType(n, {
					actionText: s._(
						/*BTDS*/
						""
					),
					actionHandler: i
				});
			}
		});
		o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebActionToast.react").ActionToast, {
			id: u,
			initialAction: p,
			pendingAction: _
		}));
	}
	async function y(e, t, n, r) {
		if (e.id.isPSA()) {
			var a = await o("WAWebBlockUserJob").blockUnblockPSAUser(t);
			return a != null && a.errorCode ? a : { targetWid: e.id };
		}
		if (o("WAWebBlocklistMigration").isBlocklistMigrated()) {
			var i = C(e, n), l = await o("WAWebBlockUserJob").blockUnblockUser({
				lid: i,
				action: t,
				bizOptOutArgs: r
			});
			return l != null && l.errorCode ? l : { targetWid: i };
		}
		var s = e.id, u = e.phoneNumber, c = t === "block" && s.isLid(), d = c && u != null ? u : s, m = await o("WAWebBlockUserJob").blockUnblockUser({
			wid: d,
			action: t,
			bizOptOutArgs: r
		});
		return m != null && m.errorCode ? m : { targetWid: d };
	}
	function C(e, t) {
		var n = e.id;
		if (n.isLid()) return n;
		var r = o("WAWebChatCollection").ChatCollection.get(n);
		if (r) {
			if (r.accountLid) return r.accountLid;
			var a = "[blocklist] no accountLid for chat: " + r.id.toLogString() + ", entryPoint: " + (t != null ? t : "null");
			throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])), a).sendLogs("blocklist-no-accountlid-chat"), a;
		}
		var i = "[blocklist] trying to block a pn contact (id: " + n.toLogString() + ") without a chat,  entryPoint: " + (t != null ? t : "null");
		throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])), i).sendLogs("blocklist-pn-contact-without-chat"), i;
	}
	l.blockContact = p, l.unblockContact = _, l.updatePSAUserBlockingStatus = f;
}), 226);
