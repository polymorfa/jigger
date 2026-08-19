__d("useWAWebCampaignMedia", [
	"WAWebBizBroadcastCampaignDataLayer",
	"WAWebBizBroadcastCampaignMsgKeyUtils",
	"WAWebBroadcastConsts",
	"WAWebCmd",
	"WAWebMsgCollection",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef, d = s.useState, m = {
		attachment: null,
		ctaButtonData: null,
		messageBody: null,
		thumbnailUrl: null
	};
	function p(e) {
		var t, a, i = o("react-compiler-runtime").c(38), l;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"id",
			"adGroupId",
			"adId",
			"broadcastJid",
			"campaignName",
			"createdTimestamp",
			"deviceId",
			"msgId",
			"pendingBroadcastMessageId",
			"reservedQuota",
			"scheduledTimestamp",
			"status"
		], i[0] = l) : l = i[0];
		var s = o("useWAWebModelValues").useModelValues(e, l), p = s.adGroupId, g = s.adId, h = s.broadcastJid, y = s.campaignName, C = s.createdTimestamp, b = s.deviceId, v = s.id, S = s.msgId, R = s.pendingBroadcastMessageId, L = s.reservedQuota, E = s.scheduledTimestamp, k = s.status, I = d(0), T = I[0], D = I[1], x;
		i[1] !== p || i[2] !== g || i[3] !== h || i[4] !== y || i[5] !== C || i[6] !== b || i[7] !== v || i[8] !== S || i[9] !== R || i[10] !== L || i[11] !== E || i[12] !== k ? (x = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				return o("WAWebBizBroadcastCampaignDataLayer").fetchCampaignMediaContext({
					adGroupId: p,
					adId: g,
					broadcastJid: h,
					campaignId: v,
					campaignName: y,
					createdTimestamp: C,
					deviceId: b,
					msgId: S,
					pendingBroadcastMessageId: R,
					reservedQuota: L,
					scheduledTimestamp: E,
					status: k
				}, e);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), i[1] = p, i[2] = g, i[3] = h, i[4] = y, i[5] = C, i[6] = b, i[7] = v, i[8] = S, i[9] = R, i[10] = L, i[11] = E, i[12] = k, i[13] = x) : x = i[13];
		var $;
		i[14] !== p || i[15] !== h || i[16] !== T || i[17] !== S || i[18] !== R || i[19] !== L || i[20] !== E ? ($ = [
			S,
			R,
			h,
			p,
			L,
			E,
			T
		], i[14] = p, i[15] = h, i[16] = T, i[17] = S, i[18] = R, i[19] = L, i[20] = E, i[21] = $) : $ = i[21];
		var P = r("useWAWebAsync")(x, $), N = P.loading === !1 && P.value != null && (P.value.messageBody != null && P.value.messageBody !== "" || P.value.attachment != null || P.value.ctaButtonData != null), M;
		i[22] === Symbol.for("react.memo_cache_sentinel") ? (M = ["add", "change"], i[22] = M) : M = i[22];
		var w;
		i[23] !== N || i[24] !== S ? (w = function(t) {
			S == null || N || t.id.id === o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(S) && t.id.fromMe === !0 && D(f);
		}, i[23] = N, i[24] = S, i[25] = w) : w = i[25], o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, M, w);
		var A;
		i[26] !== N || i[27] !== S ? (A = function() {
			S != null && !N && D(_);
		}, i[26] = N, i[27] = S, i[28] = A) : A = i[28], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, A);
		var F = c(null), O = P.loading === !1 ? (t = P.value) == null ? void 0 : t.thumbnailUrl : null, B, W;
		if (i[29] !== O ? (B = function() {
			var e = O != null && O.startsWith("blob:") ? O : null;
			return F.current = e, (function() {
				var e = F.current;
				e != null && (URL.revokeObjectURL(e), F.current = null);
			});
		}, W = [O], i[29] = O, i[30] = B, i[31] = W) : (B = i[30], W = i[31]), u(B, W), P.loading) {
			var q;
			return i[32] === Symbol.for("react.memo_cache_sentinel") ? (q = babelHelpers.extends({ loading: !0 }, m), i[32] = q) : q = i[32], q;
		}
		var U = (a = P.value) != null ? a : m, V;
		return i[33] !== U.attachment || i[34] !== U.ctaButtonData || i[35] !== U.messageBody || i[36] !== U.thumbnailUrl ? (V = {
			attachment: U.attachment,
			ctaButtonData: U.ctaButtonData,
			loading: !1,
			messageBody: U.messageBody,
			thumbnailUrl: U.thumbnailUrl
		}, i[33] = U.attachment, i[34] = U.ctaButtonData, i[35] = U.messageBody, i[36] = U.thumbnailUrl, i[37] = V) : V = i[37], V;
	}
	function _(e) {
		return e + 1;
	}
	function f(e) {
		return e + 1;
	}
	l.default = p;
}), 98);
