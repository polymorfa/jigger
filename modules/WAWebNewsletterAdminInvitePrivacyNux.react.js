__d("WAWebNewsletterAdminInvitePrivacyNux.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNewsletterModalsUtils.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useEffect;
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.viewNux;
		return d(function() {
			i();
		}, [i]), c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: n,
			title: _.modalTitle(),
			onOK: a.onOk,
			okText: _.invite(),
			onCancel: p,
			cancelText: r("WAWebFbtCommon")("Learn more"),
			children: c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				children: c.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: f })
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2()), o("WAWebModalManager").ModalManager.close();
	}
	var _ = {
		modalTitle: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		invite: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	}, f = [].concat(o("WAWebNewsletterModalsUtils.react").MinimalBullets, [o("WAWebNewsletterModalsUtils.react").VisibilityBullet]);
	l.default = m;
}), 226);
