__d("WAWebOpenCoexSystemMessageModal.react", [
	"WAWebCoexSystemMessageModalContent.react",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.faqUrl, n = e.lid, a = e.shouldHideVerificationButton, i = a === void 0 ? !1 : a, l = e.text, u = e.textLast, c = e.wid;
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebCoexSystemMessageModalContent.react"), {
			text: l,
			textLast: u,
			faqUrl: t,
			wid: c,
			lid: n,
			shouldHideVerificationButton: i
		}));
	}
	l.openCoexSecurityVerifySystemMessageModal = u;
}), 98);
