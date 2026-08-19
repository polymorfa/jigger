__d("WAWebBizBroadcastPerformanceExplainedModal.react", [
	"WAWebBizBroadcastsHomeStrings",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WDSIconIcCheck.react",
	"WDSIconIcLink.react",
	"WDSIconIcReply.react",
	"WDSIconWdsIcRead.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		buttonGroupStyle: {
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		container: {
			rowGap: "x1f0uite",
			width: "x3p9ev8",
			$$css: !0
		},
		metricContent: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		metricIcon: {
			flexShrink: "x2lah0s",
			width: "xw4jnvo",
			$$css: !0
		},
		metricRow: {
			columnGap: "x1s70e7g",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onClose, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebBizBroadcastsHomeStrings").getPerformanceExplainedTitle(), t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebBizBroadcastsHomeStrings").getOkButtonLabel(), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: o("WAWebBizBroadcastsHomeStrings").getPerformanceExplainedDescription()
		}), t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(d, {
			icon: s.jsx(r("WDSIconIcCheck.react"), {}),
			label: o("WAWebBizBroadcastsHomeStrings").getDeliveredMetricLabel(),
			description: o("WAWebBizBroadcastsHomeStrings").getDeliveredMetricDescription()
		}), t[3] = c) : c = t[3];
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(d, {
			icon: s.jsx(r("WDSIconWdsIcRead.react"), {}),
			label: o("WAWebBizBroadcastsHomeStrings").getReadRateMetricLabel(),
			description: o("WAWebBizBroadcastsHomeStrings").getReadRateMetricDescription()
		}), t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(d, {
			icon: s.jsx(r("WDSIconWdsIcRead.react"), {}),
			label: o("WAWebBizBroadcastsHomeStrings").getReadsMetricLabel(),
			description: o("WAWebBizBroadcastsHomeStrings").getReadsMetricDescription()
		}), t[5] = p) : p = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(d, {
			icon: s.jsx(r("WDSIconIcReply.react"), {}),
			label: o("WAWebBizBroadcastsHomeStrings").getReplyRateMetricLabel(),
			description: o("WAWebBizBroadcastsHomeStrings").getReplyRateMetricDescription()
		}), t[6] = _) : _ = t[6];
		var f;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(d, {
			icon: s.jsx(r("WDSIconIcReply.react"), {}),
			label: o("WAWebBizBroadcastsHomeStrings").getRepliesMetricLabel(),
			description: o("WAWebBizBroadcastsHomeStrings").getRepliesMetricDescription()
		}), t[7] = f) : f = t[7];
		var g;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.container,
			children: [
				l,
				c,
				m,
				p,
				_,
				f,
				s.jsx(d, {
					icon: s.jsx(r("WDSIconIcLink.react"), {}),
					label: o("WAWebBizBroadcastsHomeStrings").getUniqueClicksMetricLabel(),
					description: o("WAWebBizBroadcastsHomeStrings").getUniqueClicksMetricDescription()
				})
			]
		}), t[8] = g) : g = t[8];
		var h;
		return t[9] !== n ? (h = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: a,
			onOK: n,
			okText: i,
			okButtonType: "primary",
			buttonGroupStyle: u.buttonGroupStyle,
			children: g
		}), t[9] = n, t[10] = h) : h = t[10], h;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.description, a = e.icon, i = e.label, l;
		t[0] !== a ? (l = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.metricIcon,
			children: a
		}), t[0] = a, t[1] = l) : l = t[1];
		var c;
		t[2] !== i ? (c = s.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: i
		}), t[2] = i, t[3] = c) : c = t[3];
		var d;
		t[4] !== n ? (d = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: n
		}), t[4] = n, t[5] = d) : d = t[5];
		var m;
		t[6] !== c || t[7] !== d ? (m = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.metricContent,
			children: [c, d]
		}), t[6] = c, t[7] = d, t[8] = m) : m = t[8];
		var p;
		return t[9] !== l || t[10] !== m ? (p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			xstyle: u.metricRow,
			children: [l, m]
		}), t[9] = l, t[10] = m, t[11] = p) : p = t[11], p;
	}
	l.default = c;
}), 98);
