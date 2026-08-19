__d("WAWebBizBroadcastsUpsertAudienceHeader.react", [
	"fbt",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = { header: {
		backgroundColor: "x1280gxy",
		height: "x1peatla",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(17), n = e.entryPoint, a = e.isEdit, i = e.onBack, l = e.testid, c;
		t[0] !== n || t[1] !== i ? (c = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceBackClicked(n), i();
		}, t[0] = n, t[1] = i, t[2] = c) : c = t[2];
		var m = c, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[3] = p) : p = t[3];
		var _;
		t[4] !== m ? (_ = u.jsx(r("WDSButton.react"), {
			"aria-label": p,
			Icon: r("WDSIconIcArrowBack.react"),
			directional: !0,
			onPress: m,
			size: "medium",
			variant: "borderless"
		}), t[4] = m, t[5] = _) : _ = t[5];
		var f;
		t[6] !== a ? (f = a ? o("WAWebBizBroadcastsAudienceSelectionStrings").getEditAudienceTitle() : o("WAWebBizBroadcastsAudienceSelectionStrings").getNewAudienceTitle(), t[6] = a, t[7] = f) : f = t[7];
		var g;
		t[8] !== f ? (g = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			testid: "biz-broadcasts-upsert-audience-header-title",
			children: f
		}), t[8] = f, t[9] = g) : g = t[9];
		var h;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			testid: "biz-broadcasts-upsert-audience-header-subtitle",
			children: o("WAWebBizBroadcastsAudienceSelectionStrings").getNewAudienceSubtitle()
		}), t[10] = h) : h = t[10];
		var y;
		t[11] !== g ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [g, h] }), t[11] = g, t[12] = y) : y = t[12];
		var C;
		return t[13] !== _ || t[14] !== y || t[15] !== l ? (C = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.header,
			align: "center",
			gap: 12,
			testid: l,
			children: [_, y]
		}), t[13] = _, t[14] = y, t[15] = l, t[16] = C) : C = t[16], C;
	}
	l.default = m;
}), 226);
