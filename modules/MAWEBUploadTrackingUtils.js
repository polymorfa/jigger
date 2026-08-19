__d("MAWEBUploadTrackingUtils", [
	"MAWEBSwitch",
	"MAWMsgType",
	"MWEBODSEntityKey.enum",
	"MWEBODSEntityName.enum",
	"MWEBODSUtils",
	"ODS",
	"QPLUserFlow",
	"WACommsConnectionState",
	"WAExceededStorageQuota",
	"WAGlobals",
	"justknobx",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		ERROR_FETCHING_DB_MESSAGE: "error_fetching_db_message",
		FAILED_TO_ACK_MESSAGE: "failed_to_ack_message",
		FAILED_TO_CONSTRUCT_ECHO_MESSAGE: "failed_to_construct_echo_message",
		MESSAGE_UPLOAD_TIMEOUT: "message_upload_timeout",
		RUNTIME_ERROR: "runtime_error"
	};
	function u(t, n, a, i, l, s, u, c, d, p) {
		var _;
		if (s === void 0 && (s = !1), u === void 0 && (u = !1), d === void 0 && (d = "unknown"), p === void 0 && (p = 0), !!r("MAWEBSwitch").isEnabled()) {
			r("QPLUserFlow").start(r("qpl")._(521481602, "829"), {
				annotations: {
					bool: {
						eb_switch: r("MAWEBSwitch").isEnabled(),
						eb_upload_queue: !0,
						fromUploadQueue: s,
						is_retroactive_upload: u,
						is_unified_attachment_upload: !0,
						middleware_init: !1
					},
					int: {
						attachmentsSize: (_ = c == null ? void 0 : c.attachmentInfos.length) != null ? _ : 0,
						instanceKey: l,
						retryCount: p
					},
					string: {
						comms_status: o("WACommsConnectionState").WACommsConnectionState.isConnected() === !0 ? "connected" : "disconnected",
						externalId: t,
						msgType: a,
						payloadType: d,
						threadId: n,
						triggerType: i,
						userJid: o("WAGlobals").getMyUserJid()
					},
					string_array: {
						attachment_trace_ids: c == null ? void 0 : c.attachmentInfos.map(function(e) {
							var t;
							return (t = e.attachmentTraceId) != null ? t : "null";
						}),
						media_types: c == null ? void 0 : c.attachmentInfos.map(function(e) {
							return e.mediaType;
						})
					}
				},
				instanceKey: l,
				timeoutInMs: r("justknobx")._("1405")
			}), m(l, "upload_tracking_started"), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_TRACKING, r("MWEBODSEntityKey.enum").START), o("MWEBODSUtils").markODSForEB(r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_COUNTER, "upload." + (a != null ? a : "unknown"));
			var f = o("MAWMsgType").isMAWSupportedMediaType(a != null ? a : "Text") ? "media" : "non-media";
			o("MWEBODSUtils").markODSForEB(r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_COUNTER, "upload." + f);
		}
	}
	function c(e) {
		return e == null ? { string: { comms_status_on_failure: o("WACommsConnectionState").WACommsConnectionState.isConnected() === !0 ? "connected" : "disconnected" } } : babelHelpers.extends({}, e, { string: babelHelpers.extends({}, e.string, { comms_status_on_failure: o("WACommsConnectionState").WACommsConnectionState.isConnected() === !0 ? "connected" : "disconnected" }) });
	}
	function d(e, t, n, r) {
		switch (e) {
			case "success":
				g(t, n, r);
				break;
			case "fail":
				f(t, n, r);
				break;
			case "point":
				m(t, n, r);
				break;
		}
	}
	function m(e, t, n) {
		n && r("QPLUserFlow").addAnnotations(r("qpl")._(521481602, "829"), n, { instanceKey: e }), r("QPLUserFlow").addPoint(r("qpl")._(521481602, "829"), t, { instanceKey: e });
	}
	function p(e, t) {
		r("QPLUserFlow").addAnnotations(r("qpl")._(521481602, "829"), t, { instanceKey: e });
	}
	function _(t, n) {
		var a;
		r("QPLUserFlow").addAnnotations(r("qpl")._(521481602, "829"), c(n), { instanceKey: t }), r("QPLUserFlow").endCancel(r("qpl")._(521481602, "829"), {
			annotations: {
				bool: {
					exceededStorageQuota: o("WAExceededStorageQuota").getExceededStorageQuota(),
					isRelaxedDurability: !0
				},
				string: { threadID: n == null || (a = n.string) == null ? void 0 : a.jid }
			},
			instanceKey: t
		}), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_TRACKING, r("MWEBODSEntityKey.enum").CANCEL);
	}
	function f(t, n, a) {
		var i;
		r("QPLUserFlow").addAnnotations(r("qpl")._(521481602, "829"), c(a), { instanceKey: t }), r("QPLUserFlow").endFailure(r("qpl")._(521481602, "829"), n, {
			annotations: {
				bool: {
					exceededStorageQuota: o("WAExceededStorageQuota").getExceededStorageQuota(),
					isRelaxedDurability: !0
				},
				string: { threadID: a == null || (i = a.string) == null ? void 0 : i.jid }
			},
			instanceKey: t
		}), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_TRACKING, r("MWEBODSEntityKey.enum").FAIL);
	}
	function g(e, t, n) {
		m(e, t), h(e, n);
	}
	function h(t, n) {
		n && r("QPLUserFlow").addAnnotations(r("qpl")._(521481602, "829"), n, { instanceKey: t }), r("QPLUserFlow").endSuccess(r("qpl")._(521481602, "829"), {
			annotations: { bool: {
				exceededStorageQuota: o("WAExceededStorageQuota").getExceededStorageQuota(),
				isRelaxedDurability: !0
			} },
			instanceKey: t
		}), (e || (e = o("ODS"))).bumpEntityKey(7319, r("MWEBODSEntityName.enum").MAW_EB_UPLOAD_TRACKING, r("MWEBODSEntityKey.enum").SUCCESS);
	}
	function y(e) {
		return {
			addAnnotations: function(n) {
				p(e, n);
			},
			addPoint: function(n, r) {
				m(e, n, r);
			},
			endCancel: function(n, r) {
				_(e, r);
			},
			endFail: function(n, r) {
				f(e, n, r);
			},
			endSuccess: function(n) {
				h(e, n);
			},
			getQPLAttrs: function() {
				return { instanceKey: e };
			},
			isActive: function() {
				return !0;
			},
			start: function() {}
		};
	}
	l.EBUploadTrackingWorkerFailurePoints = s, l.startUploadTracking = u, l.handleBridgeEbUploadTrackingQPL = d, l.addPointWorkerOnly = m, l.addAnnotationsWorkerOnly = p, l.endCancelWorkerOnly = _, l.endFailWorkerOnly = f, l.endSuccessWorkerOnly = g, l.makeEBWorkerQplFlowFromInstanceKey = y;
}), 98);
