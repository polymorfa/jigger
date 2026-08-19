__d("WAFlowsNativeWAMLogger", [
	"invariant",
	"WAFlowsBridgeEvents",
	"WAFlowsWAMExtensionsScreenProgressObjectBuilder",
	"WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder",
	"WAFlowsWAMFlowsScreenActionObjectbuilder",
	"WAFlowsWAMLoggerTypes",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = 1, u = 1, c = 1, d = function(t) {
		return o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventBusinessPlatformType[(t != null ? t : c).toString()];
	}, m = function(t) {
		return t != null ? o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventEntryPointConversationInitiatedType[t.toString()] : null;
	}, p = function(t) {
		return t != null ? o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventFlowEntryPointType[t.toString()] : null;
	}, _ = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield n;
			r != null || s(0, 72522);
			var a = r.logging.wamLogging;
			a != null || s(0, 76722), e.sequence_number = u++;
			var i = o("WAFlowsWAMFlowsScreenActionObjectbuilder").buildWAMFlowsScreenActionObject({
				bizPlatform: d(a.biz_platform),
				businessOwnerJid: r.environment.biz_jid,
				currentFlowId: r.environment.flow_id,
				flowsMessageId: a.wam_message_id,
				flowsSessionId: a.wam_session_id,
				flowsCurrentScreen: e.flows_current_screen,
				flowsCurrentScreenLayoutType: e == null ? void 0 : e.flows_current_screen_layout_type,
				flowsNextScreen: e == null ? void 0 : e.flows_next_screen,
				flowsNextScreenLayoutType: e == null ? void 0 : e.flows_next_screen_layout_type,
				currentSessionSequenceNumber: e.sequence_number,
				isTerminalScreen: e.is_terminal_screen ? o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.TRUE : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
				clickType: e == null ? void 0 : e.click_type,
				clickName: e == null ? void 0 : e.click_name,
				flowScreenData: e == null ? void 0 : e.flow_screen_data
			});
			t.invoke({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAMLogger,
				payload: i,
				hasCallback: !0,
				fallBackDataForWeb: null
			});
		});
		return function(n, r, o) {
			return e.apply(this, arguments);
		};
	})(), f = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			e.sequence_number !== void 0 && (e.sequence_number += 1), yield t({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsNavigate,
				hasCallback: !1,
				fallBackDataForWeb: null,
				payload: e
			});
		});
		return function(n, r) {
			return e.apply(this, arguments);
		};
	})(), g = function(r) {
		var t = r.getFlowInitData();
		return {
			logWAMNavigateEvent: (function() {
				var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, a) {
					var i;
					a === void 0 && (a = !1);
					var l = yield t;
					l != null || s(0, 72522);
					var u = l.logging.wamLogging;
					u != null || s(0, 76722), n.sequence_number = e++;
					var c = o("WAFlowsWAMExtensionsScreenProgressObjectBuilder").buildWAMExtensionsScreenProgressObject({
						bizPlatform: d(u.biz_platform),
						businessOwnerJid: l.environment.biz_jid,
						extensionScreenLength: (i = n.extension_screen_length) != null ? i : 0,
						extensionsFlowId: l.environment.flow_id,
						extensionsMessageId: u.wam_message_id,
						extensionSessionId: u.wam_session_id,
						screenProgress: n.screen_progress,
						sequenceNumber: n.sequence_number,
						extensionRestoredFromCache: n.is_restored === !0 ? o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.TRUE : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
						extensionStatus: l.environment.flow_status,
						hsmTag: u.hsm_tag,
						isTemplate: u.is_template ? o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.TRUE : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
						flowStatusExit: a ? o("WAFlowsWAMLoggerTypes").WAFlowsWAMExtensionsScreenProgressFlowStatusTypes.FLOW_ERROR : null,
						entryPointConversionSource: u.entry_point_conversion_source,
						entryPointConversionApp: u.entry_point_conversion_app,
						entryPointConversationInitiated: m(u.entry_point_conversation_initiated),
						flowEntryPoint: p(u.flow_entry_point),
						clickSequenceNumber: u.click_sequence_number,
						layoutType: n.layout_type,
						shoppingCartItemsCount: n.shopping_cart_items_count
					});
					return r.invoke({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAMLogger,
						payload: c,
						hasCallback: !0,
						fallBackDataForWeb: null
					}), f(n, r.invoke);
				});
				function i(e, t) {
					return a.apply(this, arguments);
				}
				return i;
			})(),
			logWAMFlowError: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = yield t;
					n != null || s(0, 72522);
					var a = n.logging.wamLogging;
					a != null || s(0, 76722);
					var i = {
						cta: "galaxy_message",
						flow_id: n.environment.flow_id,
						extension_status: n.environment.flow_status,
						extensions_message_id: a.wam_message_id,
						session_id: a.wam_session_id,
						error_type: e,
						click_sequence_number: a.click_sequence_number
					}, l = o("WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder").buildWAMExtensionsStructuredMessageInteractionObject({
						bizPlatform: d(a.biz_platform),
						businessOwnerJid: n.environment.biz_jid,
						messageClass: "4|button_nfm",
						messageClassAttributes: JSON.stringify(i),
						messageInteraction: "3|flow_error",
						messageMediaType: "1|none",
						entryPointConversionSource: a.entry_point_conversion_source,
						entryPointConversionApp: a.entry_point_conversion_app,
						entryPointConversationInitiated: m(a.entry_point_conversation_initiated),
						flowEntryPoint: p(a.flow_entry_point)
					});
					return r.invoke({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAMLogger,
						payload: l,
						hasCallback: !0,
						fallBackDataForWeb: null
					}), f({ is_terminal_error: !0 }, r.invoke);
				});
				function a(t) {
					return e.apply(this, arguments);
				}
				return a;
			})(),
			logWAMScreenActionEvent: function(n) {
				return _(n, r, t);
			},
			logWAMFlowSuccess: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield t;
					e != null || s(0, 72522);
					var n = e.logging.wamLogging;
					n != null || s(0, 76722);
					var a = {
						cta: "galaxy_message",
						flow_id: e.environment.flow_id,
						extension_status: e.environment.flow_status,
						extensions_message_id: n.wam_message_id,
						session_id: n.wam_session_id,
						click_sequence_number: n.click_sequence_number
					}, i = o("WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder").buildWAMExtensionsStructuredMessageInteractionObject({
						bizPlatform: d(n.biz_platform),
						businessOwnerJid: e.environment.biz_jid,
						messageClass: "4|button_nfm",
						messageClassAttributes: JSON.stringify(a),
						messageInteraction: "2|flow_success",
						messageMediaType: "1|none",
						entryPointConversionSource: n.entry_point_conversion_source,
						entryPointConversionApp: n.entry_point_conversion_app,
						entryPointConversationInitiated: m(n.entry_point_conversation_initiated),
						flowEntryPoint: p(n.flow_entry_point)
					});
					return r.invoke({
						eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAMLogger,
						payload: i,
						hasCallback: !0,
						fallBackDataForWeb: null
					}), f({ is_terminal_success: !0 }, r.invoke);
				});
				function a() {
					return e.apply(this, arguments);
				}
				return a;
			})()
		};
	}, h = g;
	l.default = h;
}), 98);
