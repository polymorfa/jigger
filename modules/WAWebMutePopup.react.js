__d("WAWebMutePopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebModalManager",
	"WAWebMuteExpirations",
	"WAWebRadio.react",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(29), n = e.children, r = e.onMute, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			"id",
			"expiration",
			"callExpiration"
		], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(e.mute, a), l = m(null), c = l[0], p = l[1], _;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = function(t) {
			p(t);
		}, t[1] = _) : _ = t[1];
		var f = _, g;
		t[2] !== c ? (g = function() {
			return c != null && c !== 0 ? c : o("WAWebUserPrefsGeneral").getLastChatMuteDuration() || o("WAWebMuteExpirations").getDefaultMuteDuration();
		}, t[2] = c, t[3] = g) : g = t[3];
		var h = g, y;
		t[4] !== h || t[5] !== r || t[6] !== e.entryPoint ? (y = function() {
			o("WAWebModalManager").ModalManager.close();
			var t = h();
			o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t), r(o("WAWebMuteExpirations").calculateMuteExpiration(t), t, e.entryPoint == null ? 0 : e.entryPoint);
		}, t[4] = h, t[5] = r, t[6] = e.entryPoint, t[7] = y) : y = t[7];
		var C = y, b, v;
		t[8] !== i.callExpiration || t[9] !== i.expiration ? (b = function() {
			i.expiration != null && i.expiration !== 0 && i.callExpiration != null && i.callExpiration !== 0 && o("WAWebModalManager").closeModalManager();
		}, v = [i.callExpiration, i.expiration], t[8] = i.callExpiration, t[9] = i.expiration, t[10] = b, t[11] = v) : (b = t[10], v = t[11]), d(b, v);
		var S = e.onCancel || o("WAWebModalManager").closeModalManager, R;
		t[12] !== h ? (R = h(), t[12] = h, t[13] = R) : R = t[13];
		var L = R, E;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(function(e) {
			var t = e.duration, n = e.getLabel, r = e.radioId;
			return {
				value: t,
				label: n(),
				testid: r,
				onChange: function() {
					return f(t);
				}
			};
		}), t[14] = E) : E = t[14];
		var k;
		t[15] !== L ? (k = u.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "ractionMuteDuration",
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
			checkedValue: L,
			options: E
		}), t[15] = L, t[16] = k) : k = t[16];
		var I = k, T;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			surface: "unknown",
			viewName: "mute-chat"
		}, t[17] = T) : T = t[17];
		var D;
		t[18] !== e.title ? (D = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e.title }), t[18] = e.title, t[19] = D) : D = t[19];
		var x;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[20] = x) : x = t[20];
		var $;
		t[21] !== n ? ($ = n != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
			paddingBottom: 12,
			children: n
		}), t[21] = n, t[22] = $) : $ = t[22];
		var P;
		return t[23] !== C || t[24] !== S || t[25] !== I || t[26] !== D || t[27] !== $ ? (P = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: T,
			title: D,
			okText: x,
			onOK: C,
			onCancel: S,
			testid: "mute-popup",
			children: [$, I]
		}), t[23] = C, t[24] = S, t[25] = I, t[26] = D, t[27] = $, t[28] = P) : P = t[28], P;
	}
	l.default = p;
}), 226);
