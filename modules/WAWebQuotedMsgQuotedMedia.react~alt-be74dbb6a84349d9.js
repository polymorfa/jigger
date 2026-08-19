__d("WAWebQuotedMsgQuotedMedia.react", [
	"WAWebMessagePluginQuotedMsgThumbnailIcon",
	"WAWebMsgCollection",
	"WAWebMsgType",
	"WAWebQuotedMsgQuotedMedia.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["msg", "rootMsg"], s, u, c = u || (u = o("react"));
	function d(e) {
		var t = e.source;
		return c.jsx("div", {
			"data-testid": "msgImage",
			style: { backgroundImage: "url(data:image/jpeg;base64," + t + ")" },
			className: "xh8yej3 x5yr21d x1xsqp64 x18d0r48"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(t) {
		var n = t.msg, r = t.rootMsg, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = t.msg;
		if (r != null && r.selectedCarouselCardIndex != null && n.carouselCards != null) {
			var l = n.carouselCards.at(r.selectedCarouselCardIndex);
			l != null && (i = l.unsafe());
		}
		return o("WAWebMsgCollection").MsgCollection.get(i.id) == null ? null : c.jsx(p, babelHelpers.extends({ msg: i }, a));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.msg, n = e.theme;
		if (t.isViewOnce) return null;
		var a = o("WAWebMessagePluginQuotedMsgThumbnailIcon").quotedMsgThumbailIconComponent(t), i = n === "composeBox", l = n === "status", u = t.type === o("WAWebMsgType").MSG_TYPE.PAYMENT;
		return a ? c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WAWebQuotedMsgQuotedMedia.stylex").styles.imageWrapper, t.type === o("WAWebMsgType").MSG_TYPE.PTV && o("WAWebQuotedMsgQuotedMedia.stylex").styles.imageWrapperPtvMsg), { children: c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImage, i && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImageComposeBox, l && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImageStatus, u && o("WAWebQuotedMsgQuotedMedia.stylex").styles.msgImagePayment), { children: c.jsx(a, {
			msg: t,
			theme: n
		}) })) })) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.Base64BackgroundImage = d, l.QuotedMediaUnsafe = m;
}), 98);
