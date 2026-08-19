__d("useIssueXMAReceiverFetchTask", [
	"FBLogger",
	"Int64Hooks",
	"LSAnonymizedMsgrWebE2EEXmaReceiverFetchDispatchStoredProcedure",
	"LSFactory",
	"LSHandleReceiverFetchXMADataclass.nop",
	"LSIntEnum",
	"LSXmaContentType",
	"MAWBackendReceiverFetchPrefetchExperiment",
	"MAWBridgeSendAndReceive",
	"MAWReceiverFetchQPLLogger",
	"Promise",
	"QuickPerformanceLogger",
	"Random",
	"gkx",
	"promiseDone",
	"qpl",
	"react",
	"useAsyncReStore",
	"useXMAPreviewsDisabledSetting"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c || (c = o("react"))).useRef;
	function m(e, t, a) {
		if (a == null) return o("MAWReceiverFetchQPLLogger").logFailure(t, "RECEIVER_FECH_PARAMS_IS_NULL", "xmaReceiverFetchParams is null"), (s || (s = n("Promise"))).resolve();
		o("MAWReceiverFetchQPLLogger").logPreviewFetchStart(t);
		var l = r("gkx")("8698");
		return e.runInTransaction(function(e) {
			return r("LSAnonymizedMsgrWebE2EEXmaReceiverFetchDispatchStoredProcedure")(r("LSFactory")(e), {
				contentRef: a,
				messageId: t,
				videoPsProductHoldout2024h2Launch: l
			});
		}, "readwrite", void 0, void 0, i.id + ":55");
	}
	function p(e, t, a, l) {
		return a == null ? (o("MAWReceiverFetchQPLLogger").logFailure(t, "RECEIVER_FECH_PARAMS_IS_NULL", "xmaReceiverFetchParams is null"), (s || (s = n("Promise"))).resolve()) : (o("MAWReceiverFetchQPLLogger").logPreviewFetchStart(t), o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getReceiverFetchInfo", {
			qplInstanceKey: l,
			receiverFetchId: a,
			receiverFetchType: "xma"
		}).then(function(n) {
			var o = n == null ? void 0 : n.xmaDataclass;
			if (o != null) return e.runInTransaction(function(e) {
				return r("LSHandleReceiverFetchXMADataclass.nop")(e, 0, t, o);
			}, "readwrite", void 0, void 0, i.id + ":92");
		}));
	}
	function _(t, n, a, l, s, c) {
		var _ = r("useAsyncReStore")(), f = r("useXMAPreviewsDisabledSetting")(), g = d(!1);
		o("Int64Hooks").useEffectInt64(function() {
			var d, h;
			if (!(s == null || (u || (u = o("LSIntEnum"))).toNumber(s) !== r("LSXmaContentType").MSG_RECEIVER_FETCH || f || g.current || (n == null ? void 0 : n.xmaDataclass) != null && n.xmaDataclass !== "")) {
				var y;
				try {
					y = l != null ? JSON.parse(l) : null;
				} catch (e) {
					y = null, r("FBLogger")("messenger_web_sharing").mustfix("Failed to parse contentRef as XmsgMsgrXmaContentRefDataclass");
				}
				var C = JSON.stringify((d = y) == null ? void 0 : d.fetch_params);
				if (C == null) {
					c == null || c.addPoint("missing_message_or_receiver_fetch_params"), r("promiseDone")(_, function(e) {
						if (n == null) {
							c == null || c.endFailAfterDelay("missing_attachment");
							return;
						}
						e.runInTransaction(function(e) {
							return e.attachments.upsert([
								a,
								t,
								n.attachmentFbid
							], babelHelpers.extends({}, n, {
								hasXmaPreview: !1,
								xmaContentType: (u || (u = o("LSIntEnum"))).ofNumber(r("LSXmaContentType").MSG_RECEIVER_FETCH_FALLBACK)
							}));
						}, "readwrite", void 0, void 0, i.id + ":149").then(function() {
							c == null || c.addPoint("upsert_rf_fallback_xma_success");
						}).catch(function() {
							c == null || c.endFailAfterDelay("upsert_rf_fallback_xma_failed");
						});
					});
					return;
				}
				var b = r("qpl")._(1056839724, "1570"), v = (h = c == null ? void 0 : c.getInstanceKey()) != null ? h : o("Random").uint32();
				(e || (e = r("QuickPerformanceLogger"))).markerStart(b, v);
				var S = o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled() ? "prefetch" : "lightspeed";
				e.markerAnnotate(b, { string: { fetch_backend: S } }, { instanceKey: v }), c == null || c.addPoint("xma_receiver_fetch_task_start"), g.current = !0, o("MAWReceiverFetchQPLLogger").logReceiverFetchXMAStartQPL(t);
				var R = function(a) {
					g.current = !1, c == null || c.endFailAfterDelay("xma_receiver_fetch_task_fail"), o("MAWReceiverFetchQPLLogger").logFailure(t, "RECEIVER_FETCH_TASK_FAILURE", String(a)), (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(b, { string: { error_message: String(a) } }, { instanceKey: v }), e.markerEnd(b, 3, v), r("FBLogger")("messenger_web_sharing").warn("Failed to issue receiver fetch task on mount: %s", String(a));
				};
				r("promiseDone")(_, function(n) {
					var o;
					return S === "prefetch" ? o = p(n, t, C, v) : o = m(n, t, C), o.then(function() {
						return (e || (e = r("QuickPerformanceLogger"))).markerEnd(b, 2, v);
					}, R).finally(function() {
						g.current = !1;
					});
				}, R);
			}
		}, [
			_,
			t,
			l,
			f,
			s,
			c,
			n,
			a
		]);
	}
	l.default = _;
}), 98);
