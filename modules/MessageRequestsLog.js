__d("MessageRequestsLog", [
	"I64",
	"coerceMessagingThreadTypeToLSThreadType",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s = r("requireDeferred"))("MessageRequestsBulkActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"), c = s("MessageRequestsBulkActionEditFalcoEvent").__setRef("MessageRequestsLog"), d = s("MessageRequestsBulkActionTappedFalcoEvent").__setRef("MessageRequestsLog"), m = s("MessageRequestsInfoBannerShownFalcoEvent").__setRef("MessageRequestsLog"), p = s("MessageRequestsThreadActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"), _ = s("MessageRequestsThreadActionTappedFalcoEvent").__setRef("MessageRequestsLog"), f = s("MessageRequestsThreadDenialOptionsTappedFalcoEvent").__setRef("MessageRequestsLog"), g = s("MessageRequestsViewThreadlistFalcoEvent").__setRef("MessageRequestsLog");
	function h(e) {
		switch (e.folderName) {
			case "pending": return -1;
			case "other": return -2;
			case "spam": return -3;
			case "inbox": return 0;
		}
	}
	function y(t, n, a) {
		m.onReady(function(i) {
			i.log(function() {
				return {
					action: 0,
					extra_data_map: void 0,
					group_thread_id: a,
					other_user_id: n,
					request_id: void 0,
					thread_folder: h(t),
					thread_id: a != null ? a : (e || (e = o("I64"))).to_string(t.threadKey),
					thread_type: r("coerceMessagingThreadTypeToLSThreadType")(t.threadType)
				};
			});
		});
	}
	function C(t, n) {
		f.onReady(function(a) {
			a.log(function() {
				return {
					action: 0,
					extra_data_map: void 0,
					group_thread_id: void 0,
					other_user_id: n,
					request_id: void 0,
					thread_folder: h(t),
					thread_id: (e || (e = o("I64"))).to_string(t.threadKey),
					thread_type: r("coerceMessagingThreadTypeToLSThreadType")(t.threadType)
				};
			});
		});
	}
	function b(t, n, a, i) {
		_.onReady(function(l) {
			l.log(function() {
				return {
					action: n,
					extra_data_map: void 0,
					group_thread_id: i,
					other_user_id: a,
					request_id: void 0,
					thread_folder: h(t),
					thread_id: i != null ? i : (e || (e = o("I64"))).to_string(t.threadKey),
					thread_type: r("coerceMessagingThreadTypeToLSThreadType")(t.threadType)
				};
			});
		});
	}
	function v(t, n, a, i) {
		p.onReady(function(l) {
			l.log(function() {
				return {
					action: n,
					extra_data_map: void 0,
					group_thread_id: i,
					other_user_id: a,
					request_id: void 0,
					thread_folder: h(t),
					thread_id: i != null ? i : (e || (e = o("I64"))).to_string(t.threadKey),
					thread_type: r("coerceMessagingThreadTypeToLSThreadType")(t.threadType)
				};
			});
		});
	}
	function S(e, t) {
		g.onReady(function(n) {
			n.log(function() {
				return {
					action: 0,
					actioned_thread_count: "0",
					actioned_thread_ids: void 0,
					actioned_unread_thread_count: "0",
					entry_point: e,
					folder: t,
					request_id: void 0
				};
			});
		});
	}
	function R(e, t, n, r, o) {
		d.onReady(function(a) {
			a.log(function() {
				return {
					action: r,
					actioned_thread_count: t.toString(),
					actioned_thread_ids: void 0,
					actioned_unread_thread_count: n.toString(),
					entry_point: e,
					folder: o,
					request_id: void 0
				};
			});
		});
	}
	function L(e, t, n, r, o) {
		u.onReady(function(a) {
			a.log(function() {
				return {
					action: r,
					actioned_thread_count: t.toString(),
					actioned_thread_ids: void 0,
					actioned_unread_thread_count: n.toString(),
					entry_point: e,
					folder: o,
					request_id: void 0
				};
			});
		});
	}
	function E(e, t, n) {
		c.onReady(function(r) {
			r.log(function() {
				return {
					action: t,
					actioned_thread_count: "0",
					actioned_thread_ids: void 0,
					actioned_unread_thread_count: "0",
					entry_point: e,
					folder: n,
					request_id: void 0
				};
			});
		});
	}
	l.logMessageRequestInfoShown = y, l.logDenialOptionsTapped = C, l.logActionTapped = b, l.logActionConfirmed = v, l.logMessageRequestsView = S, l.logMessageRequestsBulkActionTapped = R, l.logMessageRequestsBulkActionConfirmed = L, l.logMessageRequestsBulkActionEdit = E;
}), 98);
