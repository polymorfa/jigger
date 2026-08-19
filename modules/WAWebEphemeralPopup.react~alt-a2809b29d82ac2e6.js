__d("WAWebEphemeralPopup.react", [
	"fbt",
	"WAWebAfterReadDurationPopup.react",
	"WAWebAfterReadUtils",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralNux.react",
	"WAWebEphemeralityDurations",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebRadio.react",
	"WAWebText_DONOTUSE.react",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		explanation: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		afterReadingWithSubLabel: {
			alignItems: "x1cy8zhl",
			paddingTop: "x1xrf6ya",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.initialDuration, n = e.onDurationSelected, a = c(t), i = a[0], l = a[1], m = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), p = m[0], _ = m[1], f = function(t) {
			l(t);
		}, g = function() {
			_();
		}, h = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
		}, y = function() {
			n(i), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, C = function() {
			o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, b;
		return p ? b = u.jsx(r("WAWebEphemeralNux.react"), { fromMe: !0 }) : b = u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
			xstyle: d.explanation,
			children: s._(
				/*BTDS*/
				""
			)
		}), o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations().map(function(e) {
			var t = e.label, n = e.type, a = e.value;
			if (n === "after_reading") {
				var s = o("WAWebAfterReadUtils").isAfterReadDuration(i);
				return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
					name: "duration",
					value: a,
					label: t,
					secondaryLabel: s ? o("WAWebEphemeralityDurations").durationToLabel(i) : void 0,
					checked: s,
					xstyle: s ? d.afterReadingWithSubLabel : void 0,
					theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
					onChange: function() {
						o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebAfterReadDurationPopup.react"), {
							initialDuration: o("WAWebAfterReadUtils").isAfterReadDuration(i) ? i : 0,
							onDurationSelected: l
						}));
					}
				}, a);
			}
			return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
				name: "duration",
				value: a,
				label: t,
				checked: a === i,
				onChange: function() {
					return f(a);
				}
			}, a);
		})] }), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "ephemeral-settings"
			},
			testid: "ephemeral_popup",
			title: p ? void 0 : s._(
				/*BTDS*/
				""
			),
			onOK: p ? g : y,
			onCancel: p ? h : C,
			cancelText: p ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			children: b
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
