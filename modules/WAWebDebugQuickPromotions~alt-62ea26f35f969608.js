__d("WAWebDebugQuickPromotions", [
	"WASmaxInAppCommsEventRPC",
	"WATimeUtils",
	"WAWebConsumerQuickPromotionActionMutation",
	"WAWebFetchQuickPromotions",
	"WAWebJobUserExposureToQuickPromotion",
	"WAWebMobilePlatforms",
	"WAWebModelStorageUtils",
	"WAWebQuickPromotionActionMutation",
	"WAWebQuickPromotionValidatorUtils",
	"WAWebSchemaQuickPromotions"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "whatsapp_gk_enabled";
	function s() {
		return o("WAWebModelStorageUtils").getStorage().lock(["quick-promotions"], function(e) {
			var t = e[0];
			return t.clear();
		});
	}
	s.doc = "delete the Quick Promotion local cache", s.paramsToExecute = [];
	function u() {
		return o("WAWebFetchQuickPromotions").fetchQuickPromotions().then(function(e) {}).catch(function(e) {});
	}
	u.doc = "Fetch quick promotions", u.paramsToExecute = [];
	function c() {
		return o("WAWebSchemaQuickPromotions").getQuickPromotionsTable().all().then(function(e) {
			return e;
		});
	}
	c.doc = "Get the Quick Promotion local cache", c.paramsToExecute = [];
	function d(e) {
		e !== "" && o("WAWebJobUserExposureToQuickPromotion").reportViaFalco(e);
	}
	d.doc = "Log a QP qp_exposure Falco event for a given promotion id (the whatsapp_gk_enabled exposure path). Fire-and-forget — verify server-side.", d.paramsToExecute = [""];
	async function m(t) {
		var n;
		if (t === "") return "no-id";
		var r = await o("WAWebSchemaQuickPromotions").getQuickPromotionsTable().get(t);
		if (r == null) return "not-found";
		var a = o("WAWebQuickPromotionValidatorUtils").getQuickPromotionContentAttribute(r.data, e) === "true";
		if (a) return o("WAWebJobUserExposureToQuickPromotion").reportViaFalco(t), "falco";
		var i = await o("WASmaxInAppCommsEventRPC").sendEventRPC({
			eventType: "exposure",
			eventPromotionId: t,
			eventTimestampSec: o("WATimeUtils").unixTime(),
			eventLogdata: (n = r.data.qpConfigExperimentKey) != null ? n : ""
		});
		return i.name;
	}
	m.doc = "Log a QP exposure: Falco for whatsapp_gk_enabled promotions, otherwise the traditional IQ comms event. Returns the path taken / server result.", m.paramsToExecute = [""];
	function p(e) {
		return o("WAWebSchemaQuickPromotions").getQuickPromotionsTable().get(e).then(function(e) {
			var t;
			if (e == null) return null;
			var n = (t = e.data.qpConfigInstanceLogData) == null ? void 0 : t.elementValue, r = "";
			if (n != null) for (var o of n) r += String.fromCharCode(o);
			return {
				surfaceId: e.surfaceId,
				instanceLogData: r
			};
		});
	}
	async function _(e) {
		if (e === "") return "no-id";
		var t = await p(e);
		if (t == null) return "not-found";
		var n = o("WATimeUtils").unixTime(), r = o("WAWebMobilePlatforms").isSMB() ? await o("WAWebQuickPromotionActionMutation").executeQuickPromotionActionMutation({
			event: "VIEW",
			promotion_id: e,
			surface_nux_id: t.surfaceId,
			promotion_logging_data: t.instanceLogData,
			client_time: n
		}) : await o("WAWebConsumerQuickPromotionActionMutation").executeConsumerQuickPromotionActionMutation({
			event: "VIEW",
			promotion_id: e,
			surface_nux_id: t.surfaceId,
			promotion_logging_data: "",
			client_time: n
		});
		return r.type;
	}
	_.doc = "Log a QP VIEW (impression) via the GraphQL action mutation; returns the server result type.", _.paramsToExecute = [""];
	async function f(e) {
		if (e === "") return "no-id";
		var t = await p(e);
		if (t == null) return "not-found";
		var n = o("WATimeUtils").unixTime(), r = o("WAWebMobilePlatforms").isSMB() ? await o("WAWebQuickPromotionActionMutation").executeQuickPromotionActionMutation({
			event: "ACTION",
			action: "PRIMARY",
			promotion_id: e,
			surface_nux_id: t.surfaceId,
			promotion_logging_data: t.instanceLogData,
			client_time: n
		}) : await o("WAWebConsumerQuickPromotionActionMutation").executeConsumerQuickPromotionActionMutation({
			event: "ACTION",
			action: "PRIMARY",
			promotion_id: e,
			surface_nux_id: t.surfaceId,
			promotion_logging_data: "",
			client_time: n
		});
		return r.type;
	}
	f.doc = "Log a QP primary action click via the GraphQL action mutation; returns the server result type.", f.paramsToExecute = [""];
	async function g(e) {
		if (e === "") return "no-id";
		var t = await p(e);
		if (t == null) return "not-found";
		var n = o("WATimeUtils").unixTime(), r = o("WAWebMobilePlatforms").isSMB() ? await o("WAWebQuickPromotionActionMutation").executeQuickPromotionActionMutation({
			event: "ACTION",
			action: "DISMISS",
			promotion_id: e,
			surface_nux_id: t.surfaceId,
			promotion_logging_data: t.instanceLogData,
			client_time: n
		}) : await o("WAWebConsumerQuickPromotionActionMutation").executeConsumerQuickPromotionActionMutation({
			event: "ACTION",
			action: "DISMISS",
			promotion_id: e,
			surface_nux_id: t.surfaceId,
			promotion_logging_data: "",
			client_time: n
		});
		return r.type;
	}
	g.doc = "Log a QP dismiss via the GraphQL action mutation; returns the server result type.", g.paramsToExecute = [""];
	function h(e) {
		return o("WAWebQuickPromotionActionMutation").executeQuickPromotionActionMutation(e).then(function(e) {}).catch(function(e) {});
	}
	var y = {
		deleteAllQPPromotions: s,
		fetchQuickPromotions: u,
		getAllQPPromotions: c,
		logQpExposureViaFalco: d,
		logQpExposure: m,
		logQpImpression: _,
		logQpPrimaryClick: f,
		logQpDismiss: g,
		executeQuickPromotionActionMutation: h
	};
	l.default = y;
}), 98);
