__d("WAWebGalaxyFlowsData", [
	"WAWebDBUpdateMessageTable",
	"WAWebGalaxyFlowQPLLoggerUtils",
	"WAWebGalaxyFlowsDrawerGetFlowDataQuery",
	"WAWebGalaxyFlowsDrawerUtils",
	"WAWebGalaxyFlowsError",
	"WAWebGalaxyFlowsMetadataUtils",
	"WAWebGalaxyFlowsSessionsCache",
	"WAWebGalaxyFlowsUtils",
	"WAWebWamEnumFlowEntryPoint"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t, n, a) {
		try {
			var i, l, u;
			if (e.flowJSON != null || a != null && a.aborted) return e;
			var c = t.unsafe(), d = c.galaxyFlowWAMMessageId == null || c.galaxyFlowQPLMessageId == null, m = d ? await o("WAWebGalaxyFlowsUtils").computeMessageIds(c.id) : null;
			m && s(c, m.flowWAMMessageId, m.flowQPLMessageId);
			var p = c.galaxyFlowQPLMessageId != null ? c.galaxyFlowQPLMessageId : m == null ? void 0 : m.flowQPLMessageId;
			if (p != null) {
				var _ = o("WAWebGalaxyFlowsSessionsCache").createFlowSession(c.id.id.toString(), p);
				e.flowQPLSessionId = "qpl_" + _, e.flowWAMSessionId = "wam_" + _;
			}
			o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(o("WAWebGalaxyFlowQPLLoggerUtils").getWaeScreenNavigationAnnotations(t, e)), o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_START);
			var f = o("WAWebGalaxyFlowsMetadataUtils").skipIfStaleMedatadataOrNullDataApiVersion(e) || !!e.isResponseFlow, g = await Promise.all([o("WAWebGalaxyFlowsUtils").fetchFlowJSON(e.flowId, a), f ? Promise.resolve(null) : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")(e, t, n, a)]), h = g[0], y = g[1];
			return o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_END), babelHelpers.extends({}, e, {
				flowJSON: h,
				flowWAMMessageId: (i = m == null ? void 0 : m.flowWAMMessageId) != null ? i : c.galaxyFlowWAMMessageId,
				flowQPLMessageId: (l = m == null ? void 0 : m.flowQPLMessageId) != null ? l : c.galaxyFlowQPLMessageId,
				hsmTag: c.hsmTag,
				categories: (u = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(e.flowId, e.flowFetchedMetadata)) == null ? void 0 : u.categories,
				flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT.MESSAGE_CTA,
				mode: String(o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(e, y)),
				isTemplate: c.templateId != null ? 1 : 0,
				flowFetchedMetadata: y
			});
		} catch (e) {
			if (a != null && a.aborted) throw e;
			if (!navigator.onLine) o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({ string: { error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.NO_NETWORK_ERROR } });
			else {
				var C = o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.cast(e instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError ? e.name : "");
				e: {
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.SANCTIONED) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationDrop(), o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataDrop();
						break e;
					}
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_EMPTY_RESPONSE) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
						break e;
					}
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_INVALID_EXTENSIONS_ID) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
						break e;
					}
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_INVALID_PUBLIC_KEY) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
						break e;
					}
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({ string: { error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION } }), o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
						break e;
					}
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.MISSING_IDENTITY_KEY) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({ string: { error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_PUBLIC_KEY_MISSING_IDENTITY_KEY_ERROR } }), o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
						break e;
					}
					if (C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR) {
						o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({ string: { error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR } }), o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
						break e;
					}
					{
						var b;
						(b = o("WAWebGalaxyFlowQPLLoggerUtils")).qplWaeMetadataAnnotate({ string: { error_type: b.WaeMetadataQPLErrorTypes.EXTENSIONS_METADATA_RESPONSE_ERROR } }), b.qplWaeMetadataAnnotate({ bool: { endpoint_public_key_received: !1 } }), b.qplWaeMetadataEnd(3);
						break e;
					}
				}
				o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({ string: { error_type: C === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR ? o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR : o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.EXTENSION_METADATA_RESPONSE_ERROR } });
			}
			throw o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationEnd(3), e;
		}
	}
	function s(e, t, n) {
		return e.galaxyFlowWAMMessageId = t, e.galaxyFlowQPLMessageId = n, o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
			galaxyFlowWAMMessageId: t,
			galaxyFlowQPLMessageId: n
		});
	}
	l.default = e;
}), 98);
