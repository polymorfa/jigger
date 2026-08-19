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
		var t = e.audienceExpression, n = e.broadcastJid, a = e.broadcastListName, i = e.contacts, l = e.isBBCreationFlow, d = l === void 0 ? !1 : l, m = e.isDisabled, p = e.loggingContext, _ = e.onCreateAudienceSuccess, f = e.onSendBroadcast, g = e.onUpdateAudienceSuccess, h = e.originalAudienceName, y = e.originalRecipientContactData, C = p == null ? void 0 : p.suggestedAudienceCardId, b = (p == null ? void 0 : p.isImport) === !0, v = p == null ? void 0 : p.entryPoint, S = p == null ? void 0 : p.importLoggingContext, R = u(async function() {
			o("WAWebBroadcastODS").logAudienceSave();
			var e = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceLoggingExtraAttributes(S), r = o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(S, {
				audienceCount: 1,
				importedRowCount: i.length
			});
			try {
				if (n != null) return await o("WAWebBroadcastListAction").editBroadcastListAction(n, i, a, t), o("WAWebBroadcastODS").logAudienceSaveSuccess(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveClicked(n, i.length, !0, C, v), b ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(i.length, "success", void 0, v, r) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(n, i.length, !0, "success", void 0, v), {
					audienceExpression: t != null ? t : o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: n,
					lastBroadcastTimestamp: null,
					name: a,
					recipientCount: i.length
				};
				var l = await o("WAWebBroadcastListAction").createBroadcastListAction({
					audienceExpression: t,
					broadcastListName: a,
					contacts: i
				});
				return o("WAWebBroadcastODS").logAudienceSaveSuccess(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveClicked(l, i.length, !1, C, v), b ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(i.length, "success", void 0, v, r) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(l, i.length, !1, "success", void 0, v), {
					audienceExpression: t != null ? t : o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: l,
					lastBroadcastTimestamp: null,
					name: a,
					recipientCount: i.length
				};
			} catch (t) {
				o("WAWebBroadcastODS").logAudienceSaveError();
				var s = t instanceof Error ? t.message : "unknown";
				throw b ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(i.length, "failure", s, v, e) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(n != null ? n : "", i.length, n != null, "failure", s, v), t;
			}
		}, [
			n,
			i,
			a,
			t,
			C,
			b,
			v,
			S
		]), L = u(function() {
			b && v != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(babelHelpers.extends({}, o("WAWebBizBroadcastsImportLoggingUtils").getImportAudienceSuccessLoggingExtraAttributes(S, {
				audienceCount: 1,
				importedRowCount: i.length
			}), {
				num_error_contacts: 0,
				num_total_contacts: i.length
			}), v), R().then(function(e) {
				n != null && g != null && h != null && y != null ? g({
					audienceList: e,
					originalBroadcastName: h,
					originalRecipientContactData: y
				}) : _(e);
			}).catch(r("WAWebNoop"));
		}, [
			R,
			n,
			g,
			h,
			y,
			_,
			b,
			v,
			S,
			i
		]), E = u(function() {
			v != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastChooseAudienceClicked(C, v), R().then(f).catch(r("WAWebNoop"));
		}, [
			C,
			v,
			f,
			R
		]);
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "end",
				justify: "end",
				xstyle: [c.button, c.buttonRow],
				children: [s.jsx(r("WDSButton.react"), {
					disabled: m,
					label: o("WAWebBizBroadcastsAudienceSelectionStrings").getSaveAudienceButtonLabel(),
					onPress: L,
					testid: "biz-broadcasts-upsert-audience-save-button",
					variant: f != null && !d ? "tonal" : "filled"
				}), !d && n == null && s.jsx(r("WDSButton.react"), {
					disabled: m,
					label: o("WAWebBizBroadcastsAudienceSelectionStrings").getSendBroadcastButtonLabel(),
					onPress: E,
					testid: "biz-broadcasts-upsert-audience-send-broadcast-button",
					variant: "filled"
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
