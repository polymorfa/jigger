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
	"react"
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
		var t = e.highlightSurface, n = e.url, r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		);
		return u.jsx(m, {
			url: n,
			highlightSurface: t,
			children: u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
				xstyle: d.containerE2eInfoModal,
				icon: u.jsx(f, {}),
				title: r,
				subTitle: a,
				textAlignment: d.textAlignCenter
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chat, n = e.highlightSurface, r = e.url, a = t != null && o("WAWebContactGetters").getIsMe(t.contact), i;
		a ? i = s._(
			/*BTDS*/
			""
		) : i = s._(
			/*BTDS*/
			""
		);
		var l;
		return o("WAWebLimitSharingGatingUtils").isRenderUpdatedDisclosureGatingEnabled() ? l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), u.jsx(m, {
			url: r,
			highlightSurface: n,
			children: u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
				icon: u.jsx(f, {}),
				xstyle: d.containerE2eInfoModal,
				title: i,
				subTitle: l,
				textAlignment: d.textAlignCenter,
				isMessageYourselfChat: a
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			loop: !1,
			autoplay: !0,
			data: r("WAWebPrivacyCheckupAnimationData"),
			xstyle: d.animation
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.E2eInfoModalStatus = p, l.E2eInfoModalV2 = _;
}), 226);
