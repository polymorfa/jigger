__d("WAWebQuotedMsgQuotedMedia.react", [
	"WAWebMessagePluginQuotedMsgThumbnailIcon",
	"WAWebMsgCollection",
	"WAWebMsgType",
	"WAWebQuotedMsgQuotedMedia.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["msg", "rootMsg"], s, u, c = u || (u = o("react"));
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.source, r = "url(data:image/jpeg;base64," + n + ")", a;
		t[0] !== r ? (a = { backgroundImage: r }, t[0] = r, t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = "xh8yej3 x5yr21d x1xsqp64 x18d0r48", t[2] = i) : i = t[2];
		var l;
		return t[3] !== a ? (l = c.jsx("div", {
			"data-testid": "msgImage",
			style: a,
			className: i
		}), t[3] = a, t[4] = l) : l = t[4], l;
	}
	function m(t) {
		var n = o("react-compiler-runtime").c(10), r, a, i;
		n[0] !== t ? (r = t.msg, i = t.rootMsg, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a, n[3] = i) : (r = n[1], a = n[2], i = n[3]);
		var l = t.msg;
		if (i != null && i.selectedCarouselCardIndex != null && r.carouselCards != null) if (n[4] !== r.carouselCards || n[5] !== i.selectedCarouselCardIndex) {
			var s = r.carouselCards.at(i.selectedCarouselCardIndex);
			s != null && (l = s.unsafe()), n[4] = r.carouselCards, n[5] = i.selectedCarouselCardIndex, n[6] = l;
		} else l = n[6];
		if (o("WAWebMsgCollection").MsgCollection.get(l.id) == null) return null;
		var u;
		return n[7] !== a || n[8] !== l ? (u = c.jsx(p, babelHelpers.extends({ msg: l }, a)), n[7] = a, n[8] = l, n[9] = u) : u = n[9], u;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(9), n = e.msg, a = e.theme;
		if (n.isViewOnce) return null;
		var i;
		t[0] !== n ? (i = o("WAWebMessagePluginQuotedMsgThumbnailIcon").quotedMsgThumbailIconComponent(n), t[0] = n, t[1] = i) : i = t[1];
		var l = i, u = a === "composeBox", d = a === "status", m = n.type === o("WAWebMsgType").MSG_TYPE.PAYMENT, p;
		return t[2] !== l || t[3] !== u || t[4] !== m || t[5] !== d || t[6] !== n || t[7] !== a ? (p = l ? c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WAWebQuotedMsgQuotedMedia.stylex").styles.imageWrapper, n.type === o("WAWebMsgType").MSG_TYPE.PTV && o("WAWebQuotedMsgQuotedMedia.stylex").styles.imageWrapperPtvMsg), { children: c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImage, u && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImageComposeBox, d && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImageStatus, m && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImagePayment), { children: c.jsx(l, {
			msg: n,
			theme: a
		}) })) })) : null, t[2] = l, t[3] = u, t[4] = m, t[5] = d, t[6] = n, t[7] = a, t[8] = p) : p = t[8], p;
	}
	l.Base64BackgroundImage = d, l.QuotedMediaUnsafe = m;
}), 98);
