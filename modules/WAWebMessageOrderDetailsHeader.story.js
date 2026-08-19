__d("WAWebMessageOrderDetailsHeader.story", [
	"WAWebNativeFlowOrderDetailsHeader",
	"WAWebShowroomUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = "data:image/jpeg;base64,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", c = {
		orderId: "1",
		amount: "$200",
		quantity: 1
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
			background: "var(--outgoing-background)",
			padding: 4
		}, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = s.jsx("div", {
			style: r,
			children: n
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
			background: "var(--incoming-background)",
			padding: 4
		}, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = s.jsx("div", {
			style: r,
			children: n
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	var p = {
		storyName: "WAWebMessageOrderDetailsHeader",
		component: r("WAWebNativeFlowOrderDetailsHeader"),
		description: "\n    Display payment request header for incoming and outgoing messages\n  ",
		examples: [
			{
				templateStyle: o("WAWebShowroomUtils").widePreview,
				example: s.jsx(m, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
					isSentByMe: !1,
					text: "Recharge Plan for xxx-xxx"
				})) }),
				title: "Default incoming"
			},
			{
				templateStyle: o("WAWebShowroomUtils").widePreview,
				example: s.jsx(d, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
					isSentByMe: !0,
					text: "Recharge Plan for xxx-xxx"
				})) }),
				title: "Default outgoing"
			},
			{
				templateStyle: o("WAWebShowroomUtils").mediumPreview,
				example: s.jsx(m, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
					isSentByMe: !1,
					text: "Recharge Plan for xxx-xxx-xxx-xxx-xxx"
				})) }),
				title: "Large text incoming"
			},
			{
				templateStyle: o("WAWebShowroomUtils").mediumPreview,
				example: s.jsx(d, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
					isSentByMe: !0,
					text: "Recharge Plan for xxx-xxx-xxx-xxx-xxx"
				})) }),
				title: "Large text outgoing"
			},
			{
				templateStyle: o("WAWebShowroomUtils").widePreview,
				example: s.jsx(m, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
					isSentByMe: !1,
					text: "Recharge Plan for xxx-xxx",
					thumbnail: u
				})) }),
				title: "Header with thumbnail incoming"
			},
			{
				templateStyle: o("WAWebShowroomUtils").widePreview,
				example: s.jsx(d, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
					isSentByMe: !0,
					text: "Recharge Plan for xxx-xxx",
					thumbnail: u
				})) }),
				title: "Header with thumbnail outgoing"
			},
			{
				templateStyle: o("WAWebShowroomUtils").widePreview,
				example: s.jsx("div", {
					dir: "RTL",
					children: s.jsx(m, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
						isSentByMe: !1,
						text: "عليك الانتقال إلى مكالمة",
						thumbnail: u
					})) })
				}),
				title: "Header with thumbnail (RTL) incoming"
			},
			{
				templateStyle: o("WAWebShowroomUtils").widePreview,
				example: s.jsx("div", {
					dir: "RTL",
					children: s.jsx(d, { children: s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), babelHelpers.extends({}, c, {
						isSentByMe: !0,
						text: "عليك الانتقال إلى مكالمة",
						thumbnail: u
					})) })
				}),
				title: "Outgoing with thumbnail (RTL) outgoing"
			}
		]
	};
	l.default = p;
}), 98);
