__d("WAWebConsumerSharePixSentDialog.react", [
	"WAWebConfirmPopup.react",
	"WAWebConsumerPixStrings",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSIconIcCheckCircle.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 24, c = {
		checkIcon: {
			color: "x14ug900",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		titleColumn: {
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(18), n = e.hasAmount, a = e.onDone, i = e.onViewInChat, l = e.recipientName, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
			surface: "unknown",
			viewName: "consumer-share-pix-sent"
		}, t[0] = d) : d = t[0];
		var m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(r("WDSIconIcCheckCircle.react"), {
			height: u,
			width: u,
			iconXstyle: c.checkIcon
		}), t[1] = m) : m = t[1];
		var p;
		t[2] !== n ? (p = o("WAWebConsumerPixStrings").getConsumerSharePixSentTitle(n), t[2] = n, t[3] = p) : p = t[3];
		var _;
		t[4] !== p ? (_ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: c.titleColumn,
			children: [m, s.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				children: p
			})]
		}), t[4] = p, t[5] = _) : _ = t[5];
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebConsumerPixStrings").getConsumerSharePixViewInChat(), t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebConsumerPixStrings").getConsumerSharePixDone(), t[7] = g) : g = t[7];
		var h;
		t[8] !== n || t[9] !== l ? (h = o("WAWebConsumerPixStrings").getConsumerSharePixSentBody(l, n), t[8] = n, t[9] = l, t[10] = h) : h = t[10];
		var y;
		t[11] !== h ? (y = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: h
		}), t[11] = h, t[12] = y) : y = t[12];
		var C;
		return t[13] !== a || t[14] !== i || t[15] !== _ || t[16] !== y ? (C = s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: d,
			testid: "consumer-share-pix-sent-dialog",
			type: o("WAWebModal.react").ModalTheme.PaymentsConfirmDialog,
			title: _,
			cancelText: f,
			onCancel: i,
			okText: g,
			onOK: a,
			children: y
		}), t[13] = a, t[14] = i, t[15] = _, t[16] = y, t[17] = C) : C = t[17], C;
	}
	l.default = d;
}), 98);
