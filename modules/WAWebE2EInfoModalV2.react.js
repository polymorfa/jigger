__d("WAWebE2EInfoModalV2.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebDailyAggregatedStats",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebLimitSharingGatingUtils",
	"WAWebLottieAnimationLoadable",
	"WAWebModalManager",
	"WAWebPrivacyCheckupAnimationData",
	"WAWebPrivacyHighlightDailyUtils",
	"WAWebPrivacyNarrativeE2ESummary.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		containerE2eInfoModal: {
			marginTop: "x1anpbxc",
			marginInlineEnd: "x1wcu8vx",
			marginBottom: "xyorhqc",
			marginInlineStart: "x1ult018",
			$$css: !0
		},
		textAlignCenter: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		animation: {
			height: "x1wkxgih",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.children, n = e.highlightSurface, a = e.url;
		c(function() {
			n != null && o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(n, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_APPEAR);
		}, []);
		var i = function() {
			o("WAWebExternalLink.react").openExternalLink(a), n != null && o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(n, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_SELECT), o("WAWebModalManager").ModalManager.close();
		}, l = r("WAWebFbtCommon")("OK"), d = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "e2e-info-v2"
			},
			testid: "highlight-e2e-message-modal",
			onOK: o("WAWebModalManager").closeModalManager,
			okText: l,
			onCancel: i,
			cancelText: d,
			children: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = o("react-compiler-runtime").c(6), n = e.highlightSurface, r = e.url, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var c = l, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
			xstyle: d.containerE2eInfoModal,
			icon: u.jsx(f, {}),
			title: i,
			subTitle: c,
			textAlignment: d.textAlignCenter
		}), t[2] = p) : p = t[2];
		var _;
		return t[3] !== n || t[4] !== r ? (_ = u.jsx(m, {
			url: r,
			highlightSurface: n,
			children: p
		}), t[3] = n, t[4] = r, t[5] = _) : _ = t[5], _;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(17), n = e.chat, r = e.highlightSurface, a = e.url, i;
		t[0] !== n ? (i = n != null && o("WAWebContactGetters").getIsMe(n.contact), t[0] = n, t[1] = i) : i = t[1];
		var l = i, c;
		if (l) {
			var p;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
				/*BTDS*/
				""
			), t[2] = p) : p = t[2], c = p;
		} else {
			var _;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
				/*BTDS*/
				""
			), t[3] = _) : _ = t[3], c = _;
		}
		var g;
		if (o("WAWebLimitSharingGatingUtils").isRenderUpdatedDisclosureGatingEnabled()) {
			var h;
			t[4] !== l ? (h = l ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[4] = l, t[5] = h) : h = t[5], g = h;
		} else {
			var y;
			t[6] !== l ? (y = l ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[6] = l, t[7] = y) : y = t[7], g = y;
		}
		var C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(f, {}), t[8] = C) : C = t[8];
		var b;
		t[9] !== l || t[10] !== g || t[11] !== c ? (b = u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
			icon: C,
			xstyle: d.containerE2eInfoModal,
			title: c,
			subTitle: g,
			textAlignment: d.textAlignCenter,
			isMessageYourselfChat: l
		}), t[9] = l, t[10] = g, t[11] = c, t[12] = b) : b = t[12];
		var v;
		return t[13] !== r || t[14] !== b || t[15] !== a ? (v = u.jsx(m, {
			url: a,
			highlightSurface: r,
			children: b
		}), t[13] = r, t[14] = b, t[15] = a, t[16] = v) : v = t[16], v;
	}
	function f() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			loop: !1,
			autoplay: !0,
			data: r("WAWebPrivacyCheckupAnimationData"),
			xstyle: d.animation
		}), e[0] = t) : t = e[0], t;
	}
	l.E2eInfoModalStatus = p, l.E2eInfoModalV2 = _;
}), 226);
