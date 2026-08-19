__d("WAWebBizBroadcastPerformanceExplainedModal.react", [
	"WAWebBizBroadcastsHomeStrings",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WDSIconIcCheck.react",
	"WDSIconIcLink.react",
	"WDSIconIcReply.react",
	"WDSIconWdsIcRead.react",
	"WDSText.react",
	"react"
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
		var t, n = e.onClose;
		return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: (t = o("WAWebBizBroadcastsHomeStrings")).getPerformanceExplainedTitle(),
			onOK: n,
			okText: t.getOkButtonLabel(),
			okButtonType: "primary",
			buttonGroupStyle: u.buttonGroupStyle,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.container,
				children: [
					s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: t.getPerformanceExplainedDescription()
					}),
					s.jsx(d, {
						icon: s.jsx(r("WDSIconIcCheck.react"), {}),
						label: t.getDeliveredMetricLabel(),
						description: t.getDeliveredMetricDescription()
					}),
					s.jsx(d, {
						icon: s.jsx(r("WDSIconWdsIcRead.react"), {}),
						label: t.getReadRateMetricLabel(),
						description: t.getReadRateMetricDescription()
					}),
					s.jsx(d, {
						icon: s.jsx(r("WDSIconWdsIcRead.react"), {}),
						label: t.getReadsMetricLabel(),
						description: t.getReadsMetricDescription()
					}),
					s.jsx(d, {
						icon: s.jsx(r("WDSIconIcReply.react"), {}),
						label: t.getReplyRateMetricLabel(),
						description: t.getReplyRateMetricDescription()
					}),
					s.jsx(d, {
						icon: s.jsx(r("WDSIconIcReply.react"), {}),
						label: t.getRepliesMetricLabel(),
						description: t.getRepliesMetricDescription()
					}),
					s.jsx(d, {
						icon: s.jsx(r("WDSIconIcLink.react"), {}),
						label: t.getUniqueClicksMetricLabel(),
						description: t.getUniqueClicksMetricDescription()
					})
				]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.description, n = e.icon, a = e.label;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			xstyle: u.metricRow,
			children: [s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.metricIcon,
				children: n
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.metricContent,
				children: [s.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "contentDefault",
					children: a
				}), s.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: t
				})]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
