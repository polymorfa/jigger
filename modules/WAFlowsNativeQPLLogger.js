__d("WAFlowsNativeQPLLogger", [
	"invariant",
	"WAFlowsBridgeEvents",
	"WAFlowsLoggingUtils",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = function(t, n, r) {
		var e = {}, o = {};
		return t != null && (e.error_type = t), n != null && (e.error_message = n), r === !0 && (o.is_resumed = r), {
			stringAnnotations: e,
			boolAnnotations: o
		};
	}, u = function(t) {
		var e = t > 0 ? t + "_" : "";
		return {
			EncryptionStart: "encryption_" + e + "start",
			EncryptionEnd: "encryption_" + e + "end",
			DecryptionStart: "decryption_" + e + "start",
			DecryptionEnd: "decryption_" + e + "end",
			ForwardNetworkStart: "forward_network_" + e + "start",
			ForwardNetworkEnd: "forward_network_" + e + "end"
		};
	}, c = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r, a, i) {
			var l = i.destinationScreen, u = i.flowErrorMessage, c = i.flowErrorType, m = i.is_restored, p = m === void 0 ? !1 : m, _ = i.isDataChannelNavigation, f = _ === void 0 ? !0 : _, g = i.mediaMimeType, h = g === void 0 ? "" : g, y = i.mediaSizeBytes, C = y === void 0 ? "" : y;
			if (yield d(t)) {
				var b = yield n;
				b != null || s(0, 72522);
				var v = e(c, u, p), S = v.boolAnnotations, R = v.stringAnnotations;
				l != null && l !== "" && (R.destination_screen_id = l), yield r({
					event: 200750681,
					intAnnotations: {},
					stringAnnotations: babelHelpers.extends({}, R, {
						extension_status: b.environment.flow_status,
						media_mime_type: h,
						media_size_bytes: C,
						controller_type: o("WAFlowsLoggingUtils").getFlowsControllerType()
					}),
					boolAnnotations: babelHelpers.extends({}, S, { data_channel_navigation: f })
				}), yield a(200750681, c == null ? 2 : 3);
			}
		});
		return function(n, r, o, a, i) {
			return t.apply(this, arguments);
		};
	})(), d = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n, r, a = o("WAFlowsWebNativeBridgeClientABPropsContext.react").clientABPropsHandler(e), i = a.getABProps, l = yield i();
			return (l == null || (t = l.ios_wae_qpl_enabled) == null ? void 0 : t.boolValue) === !0 || (l == null || (n = l.android_wae_qpl_enabled) == null ? void 0 : n.boolValue) === !0 || (l == null || (r = l.wa_web_wae_qpl_enabled) == null ? void 0 : r.boolValue) === !0;
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), m = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			(yield d(e)) && (yield t());
		});
		return function(n, r) {
			return e.apply(this, arguments);
		};
	})(), p = function(r) {
		var t = r.getFlowInitData(), a = function(t) {
			var e = { event: t };
			return r.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAQPLLoggerStart,
				payload: e,
				hasCallback: !1,
				fallBackDataForWeb: null
			});
		}, i = function(t) {
			return r.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAQPLLoggerAnnotate,
				hasCallback: !1,
				fallBackDataForWeb: null,
				payload: t
			});
		}, l = function(t) {
			return r.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAQPLLoggerPoint,
				hasCallback: !1,
				fallBackDataForWeb: null,
				payload: t
			});
		}, p = function(t, n) {
			var e = {
				event: t,
				action: n
			};
			return r.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAQPLLoggerEnd,
				payload: e,
				hasCallback: !1,
				fallBackDataForWeb: null
			});
		}, _ = function(t) {
			var e = { event: t };
			return r.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAQPLLoggerDrop,
				payload: e,
				hasCallback: !1,
				fallBackDataForWeb: null
			});
		}, f = function(t, n, a) {
			var e = {
				event: t,
				name: n,
				instanceKey: a
			};
			return r.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAQPLLoggerSubspanStart,
				payload: e,
				hasCallback: !1,
				fallBackDataForWeb: null
			});
		};
		return {
			getWAFlowsQPLNavigationPoints: u,
			qplScreenNavigationStart: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (e === void 0 && (e = ""), !!(yield d(r.invoke))) {
						var n = yield t;
						n != null || s(0, 72522), yield a(200750681);
						var o = n.logging.qplLogging;
						o != null || s(0, 76750);
						var l = babelHelpers.extends({
							biz_jid: n.environment.biz_jid,
							extension_id: n.environment.flow_id,
							extension_message_id: o.qpl_message_id,
							session_id: o.qpl_session_id
						}, e === "" ? {} : { source_screen_id: e }, { perf_origin: "bloks_screen_cta" });
						yield i({
							event: 200750681,
							stringAnnotations: l,
							intAnnotations: {},
							boolAnnotations: {}
						});
					}
				});
				function o(t) {
					return e.apply(this, arguments);
				}
				return o;
			})(),
			qplScreenNavigationPoint: function(t) {
				return m(r.invoke, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield l({
						event: 200750681,
						name: t
					});
				}));
			},
			qplScreenNavigationDrop: function() {
				return m(r.invoke, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield _(200750681);
				}));
			},
			qplInitPhoenixFlowDrop: function() {
				return m(r.invoke, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield _(200739086);
				}));
			},
			qplScreenNavigationAnnotate: function(t) {
				var e = t.stringAnnotations, o = e === void 0 ? {} : e, a = t.boolAnnotations, l = a === void 0 ? {} : a, s = t.intAnnotations, u = s === void 0 ? {} : s;
				return m(r.invoke, n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield i({
						event: 200750681,
						stringAnnotations: o,
						boolAnnotations: l,
						intAnnotations: u
					});
				}));
			},
			qplScreenNavigationEnd: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield c(r.invoke, t, i, p, e);
				});
				function o(t) {
					return e.apply(this, arguments);
				}
				return o;
			})(),
			qplInitPhoenixScreenNavigationEnd: (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n = t.flowErrorMessage, o = t.flowErrorType, a = t.is_restored;
					if (yield d(r.invoke)) {
						var l = e(o, n, a), s = l.boolAnnotations, u = l.stringAnnotations;
						s.is_resumed = a != null ? a : !1, yield i({
							event: 200739086,
							intAnnotations: {},
							stringAnnotations: u,
							boolAnnotations: s
						}), yield p(200739086, 3);
					}
				});
				function o(e) {
					return t.apply(this, arguments);
				}
				return o;
			})(),
			qplScreenNavigationSubspanStart: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					var n = o("WAFlowsWebNativeBridgeClientABPropsContext.react").clientABPropsHandler(r.invoke), a = n.getABProps, i = yield a();
					i != null && i.flows_response_message_sli_qpl_enabled && (yield d(r.invoke)) && (yield f(200750681, e, t));
				});
				function t(t, n) {
					return e.apply(this, arguments);
				}
				return t;
			})()
		};
	}, _ = p;
	l.default = _;
}), 98);
