__d("WAWebAfterReadDurationPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralityDurations",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebRadio.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.initialDuration, n = e.onDurationSelected, a = c(t), i = a[0], l = a[1], d = o("WAWebEphemeralityDurations").getAfterReadEphemeralityDurations("asc"), m = function(t) {
			o("WAWebModalManager").ModalManager.closeSupportOrModal(), n(t);
		}, p = function() {
			o("WAWebModalManager").ModalManager.closeSupportOrModal();
		};
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "after-read-duration-settings"
			},
			testid: "after_read_duration_popup",
			title: s._(
				/*BTDS*/
				""
			),
			okDisabled: i === 0,
			okText: r("WAWebFbtCommon")("OK"),
			onOK: function() {
				return m(i);
			},
			onCancel: p,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [u.jsxs(o("WAWebText.react").WAWebTextMuted, {
				margin: [
					0,
					0,
					8,
					0
				],
				children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			}), d.map(function(e) {
				var t = e.label, n = e.value;
				return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
					name: "after-read-duration",
					value: n,
					label: t,
					checked: n === i,
					onChange: function() {
						return l(n);
					},
					tabIndex: 0
				}, n);
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
