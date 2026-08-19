__d("WAWebCometLiteCallActions.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WDSButton.react",
	"WDSIconIcCall.react",
	"WDSIconIcVideocam.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		callActions: {
			columnGap: "xrdqr27",
			$$css: !0
		},
		callAction: {
			rowGap: "x8a3fw1",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(21), n = e.wid, a;
		t[0] !== n ? (a = function(t) {
			o("WAWebVoipStartCall").startWAWebVoipCall(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== i ? (l = function() {
			return i(!1);
		}, t[2] = i, t[3] = l) : l = t[3];
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[4] = d) : d = t[4];
		var m;
		t[5] !== l ? (m = u.jsx(r("WDSButton.react"), {
			size: "large",
			variant: "outline",
			type: "media",
			Icon: r("WDSIconIcCall.react"),
			onPress: l,
			testid: "wa-web-lite-contact-detail-voice",
			"aria-label": d
		}), t[5] = l, t[6] = m) : m = t[6];
		var p;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			selectable: !1,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[7] = p) : p = t[7];
		var _;
		t[8] !== m ? (_ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: c.callAction,
			children: [m, p]
		}), t[8] = m, t[9] = _) : _ = t[9];
		var f;
		t[10] !== i ? (f = function() {
			return i(!0);
		}, t[10] = i, t[11] = f) : f = t[11];
		var g;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[12] = g) : g = t[12];
		var h;
		t[13] !== f ? (h = u.jsx(r("WDSButton.react"), {
			size: "large",
			variant: "outline",
			type: "media",
			Icon: r("WDSIconIcVideocam.react"),
			onPress: f,
			testid: "wa-web-lite-contact-detail-video",
			"aria-label": g
		}), t[13] = f, t[14] = h) : h = t[14];
		var y;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			selectable: !1,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[15] = y) : y = t[15];
		var C;
		t[16] !== h ? (C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: c.callAction,
			children: [h, y]
		}), t[16] = h, t[17] = C) : C = t[17];
		var b;
		return t[18] !== C || t[19] !== _ ? (b = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			xstyle: c.callActions,
			children: [_, C]
		}), t[18] = C, t[19] = _, t[20] = b) : b = t[20], b;
	}
	l.default = d;
}), 226);
