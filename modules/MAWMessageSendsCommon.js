__d("MAWMessageSendsCommon", [
	"MAWMarkMsgDroppedApi",
	"MAWMessageSendScheduler",
	"MAWQplProxy",
	"MWFBLogger",
	"TaskSchedulerPriority",
	"WAPromiseDelays",
	"WAResultOrError",
	"WATimeUtils",
	"WAWaitForComms",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"getSafeQplErrorMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 1e3, c = o("MWFBLogger").MWLogger().tags(["MessageSend"]);
	function d(e, t, n, r, o) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a, i, l) {
			var m;
			o("MAWQplProxy").sendQplPointThroughBridge(t, "backend_reached", {
				annotations: { bool: { backendSetupReadyFromWorker: !o("WAWaitForComms").isStillWaitingForComms() } },
				instanceKey: n
			});
			var p;
			try {
				if (o("MAWQplProxy").sendQplPointThroughBridge(t, "wait_for_comms_start", {
					annotations: {},
					instanceKey: n
				}), yield o("WAWaitForComms").waitForComms(), o("MAWQplProxy").sendQplPointThroughBridge(t, "wait_for_comms_end", {
					annotations: {},
					instanceKey: n
				}), o("MAWQplProxy").sendQplPointThroughBridge(t, "message_send_start", { instanceKey: n }), p = yield o("MAWMessageSendScheduler").messageSendScheduler().run(function() {
					return a(o("WATimeUtils").unixTime());
				}, {
					metrics: { customFlags: { runtimeReliability: !0 } },
					name: i,
					priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
				}).promise, p.success === !0) o("MAWQplProxy").sendQplPointThroughBridge(t, "message_send_end", { instanceKey: n });
				else {
					var _, f;
					o("MAWQplProxy").sendQplPointThroughBridge(t, "message_send_fail", {
						annotations: { string: { errorType: (_ = (f = p.error) == null ? void 0 : f.type) != null ? _ : "unknown-error" } },
						instanceKey: n
					});
				}
			} catch (a) {
				var g = r("getErrorSafe")(a);
				throw c.catching(g).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Message send fail. Error: ", ""])), o("getSafeQplErrorMessage").getSafeQPLErrorMessage(g)), o("MAWQplProxy").sendQplPointThroughBridge(t, "message_send_fail", {
					annotations: { string: {
						errorDescription: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(g),
						errorType: "runtime-error",
						sendFailureError: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(g)
					} },
					instanceKey: n
				}), l != null && (yield o("MAWMarkMsgDroppedApi").markMsgDropped(l, void 0, {
					qplEventType: t,
					qplInstanceKey: n
				})), g;
			}
			if (!p) {
				var h = "null-response-from-message-send";
				return c.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Guard: should not happen, result is null"]))), o("MAWQplProxy").sendQplPointThroughBridge(t, "message_send_fail", { instanceKey: n }), o("WAResultOrError").makeError({
					applicationErrorCode: null,
					details: h,
					isRetriable: !0,
					type: "unexpected-message-codepath"
				});
			}
			if (p.success === !0) return p;
			if (p.success, l != null && (yield o("MAWMarkMsgDroppedApi").markMsgDropped(l, p.error, {
				qplEventType: t,
				qplInstanceKey: n
			})), ((m = p.error) == null ? void 0 : m.type) === "retryable-error") {
				var y, C = (y = p.error.backoff) != null ? y : u;
				return yield o("WAPromiseDelays").delayMs(C), d(t, n, a, i, l);
			} else return p;
		}), m.apply(this, arguments);
	}
	l.messageSendLogger = c, l.messageSendObserver = d;
}), 98);
