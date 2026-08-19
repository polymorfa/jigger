__d("WAWebBizBroadcastsUpsertAudienceSaveButton.react", [
	"WAWebAudienceExpressionTypes",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBizBroadcastsImportLoggingUtils",
	"WAWebBroadcastListAction",
	"WAWebBroadcastODS",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WAWebNoop",
	"WDSButton.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback, c = {
		button: {
			marginTop: "x98l61r",
			marginInlineEnd: "xviac27",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			maxWidth: "x1mvdoyg",
			width: "xh8yej3",
			$$css: !0
		},
		buttonRow: {
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.audienceExpression, a = e.broadcastJid, i = e.broadcastListName, l = e.contacts, d = e.isBBCreationFlow, m = d === void 0 ? !1 : d, p = e.isDisabled, _ = e.loggingContext, f = e.onCreateAudienceSuccess, g = e.onSendBroadcast, h = e.onUpdateAudienceSuccess, y = e.originalAudienceName, C = e.originalRecipientContactData, b = _ == null ? void 0 : _.suggestedAudienceCardId, v = (_ == null ? void 0 : _.isImport) === !0, S = _ == null ? void 0 : _.entryPoint, R = _ == null ? void 0 : _.importLoggingContext, L = u(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WAWebBroadcastODS").logAudienceSave();
			var e = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(R), n = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(R, {
				audienceCount: 1,
				importedRowCount: l.length
			});
			try {
				if (a != null) return yield o("WAWebBroadcastListAction").editBroadcastListAction(a, l, i, t), o("WAWebBroadcastODS").logAudienceSaveSuccess(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveClicked(a, l.length, !0, b, S), v ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(l.length, "success", void 0, S, n) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(a, l.length, !0, "success", void 0, S), {
					audienceExpression: t != null ? t : o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: a,
					lastBroadcastTimestamp: null,
					name: i,
					recipientCount: l.length
				};
				var r = yield o("WAWebBroadcastListAction").createBroadcastListAction({
					audienceExpression: t,
					broadcastListName: i,
					contacts: l
				});
				return o("WAWebBroadcastODS").logAudienceSaveSuccess(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveClicked(r, l.length, !1, b, S), v ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(l.length, "success", void 0, S, n) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(r, l.length, !1, "success", void 0, S), {
					audienceExpression: t != null ? t : o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: r,
					lastBroadcastTimestamp: null,
					name: i,
					recipientCount: l.length
				};
			} catch (t) {
				o("WAWebBroadcastODS").logAudienceSaveError();
				var s = t instanceof Error ? t.message : "unknown";
				throw v ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(l.length, "failure", s, S, e) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(a != null ? a : "", l.length, a != null, "failure", s, S), t;
			}
		}), [
			a,
			l,
			i,
			t,
			b,
			v,
			S,
			R
		]), E = u(function() {
			v && S != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(R, {
				audienceCount: 1,
				importedRowCount: l.length
			}), {
				num_error_contacts: 0,
				num_total_contacts: l.length
			}), S), L().then(function(e) {
				a != null && h != null && y != null && C != null ? h({
					audienceList: e,
					originalBroadcastName: y,
					originalRecipientContactData: C
				}) : f(e);
			}).catch(r("WAWebNoop"));
		}, [
			L,
			a,
			h,
			y,
			C,
			f,
			v,
			S,
			R,
			l
		]), k = u(function() {
			S != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastChooseAudienceClicked(b, S), L().then(g).catch(r("WAWebNoop"));
		}, [
			b,
			S,
			g,
			L
		]);
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "end",
				justify: "end",
				xstyle: [c.button, c.buttonRow],
				children: [s.jsx(r("WDSButton.react"), {
					disabled: p,
					label: o("WAWebBizBroadcastsAudienceSelectionStrings").getSaveAudienceButtonLabel(),
					onPress: E,
					testid: "biz-broadcasts-upsert-audience-save-button",
					variant: g != null && !m ? "tonal" : "filled"
				}), !m && a == null && s.jsx(r("WDSButton.react"), {
					disabled: p,
					label: o("WAWebBizBroadcastsAudienceSelectionStrings").getSendBroadcastButtonLabel(),
					onPress: k,
					testid: "biz-broadcasts-upsert-audience-send-broadcast-button",
					variant: "filled"
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
