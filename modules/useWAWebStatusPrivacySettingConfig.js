__d("useWAWebStatusPrivacySettingConfig", [
	"WAWebCmd",
	"WAWebStatusPrivacySettingAction",
	"WAWebUserPrefsStatusType",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo, d = s.useState;
	function m() {
		var e = o("react-compiler-runtime").c(20), t = d(), r = t[0], a = t[1], i = d(null), l = i[0], s = i[1], c = d(!1), m = c[0], f = c[1], g, h;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function() {
			var e = new AbortController();
			return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = yield o("WAWebStatusPrivacySettingAction").getStatusPrivacySetting();
				e.signal.aborted || (a(t), s(t));
			})(), (function() {
				return e.abort();
			});
		}, h = [], e[0] = g, e[1] = h) : (g = e[0], h = e[1]), u(g, h);
		var y;
		e[2] !== (r == null ? void 0 : r.allowList) || e[3] !== (r == null ? void 0 : r.denyList) ? (y = function(t) {
			var e, n, i = t.setting, l = t.allowList, s = t.denyList, u = {
				setting: i,
				allowList: i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? l : (e = r == null ? void 0 : r.allowList) != null ? e : [],
				denyList: i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList ? s : (n = r == null ? void 0 : r.denyList) != null ? n : []
			};
			a(u);
		}, e[2] = r == null ? void 0 : r.allowList, e[3] = r == null ? void 0 : r.denyList, e[4] = y) : y = e[4], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_status_privacy_settings_from_bridge", y);
		var C;
		e: {
			if (l == null || r == null) {
				C = !1;
				break e;
			}
			var b = _, v = r.setting, S;
			e[5] !== v || e[6] !== l.allowList || e[7] !== r.allowList ? (S = v === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList && !b(r.allowList, l.allowList), e[5] = v, e[6] = l.allowList, e[7] = r.allowList, e[8] = S) : S = e[8];
			var R = S, L;
			e[9] !== v || e[10] !== l.denyList || e[11] !== r.denyList ? (L = v === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList && !b(r.denyList, l.denyList), e[9] = v, e[10] = l.denyList, e[11] = r.denyList, e[12] = L) : L = e[12];
			var E = L, k = v !== l.setting || R || E;
			C = k;
		}
		var I = C, T;
		e[13] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			f(!0);
		}, e[13] = T) : T = e[13];
		var D = T, x = p, $;
		e[14] !== m || e[15] !== I ? ($ = {
			statusAudienceSelectorClicked: m,
			statusAudienceSelectorUpdated: I
		}, e[14] = m, e[15] = I, e[16] = $) : $ = e[16];
		var P;
		return e[17] !== r || e[18] !== $ ? (P = {
			statusPostingPrivacyConfig: r,
			setStatusPostingPrivacyConfig: a,
			updateStatusPostingPrivacyConfig: x,
			audienceTracking: $,
			trackAudienceSelectorClicked: D
		}, e[17] = r, e[18] = $, e[19] = P) : P = e[19], P;
	}
	function p(e) {
		var t = e.allowList, n = e.denyList, r = e.setting;
		o("WAWebCmd").Cmd.updateStatusPrivacySettingsFromBridge({
			setting: r,
			allowList: t,
			denyList: n
		});
	}
	function _(e, t) {
		if (e.length !== t.length) return !1;
		var n = new Set(e.map(f));
		return t.every(function(e) {
			return n.has(e.toString());
		});
	}
	function f(e) {
		return e.toString();
	}
	l.useWAWebStatusPrivacySettingConfig = m;
}), 98);
