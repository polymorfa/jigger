__d("WAWebEphemeralOptionsSection.react", [
	"fbt",
	"WAWebAfterReadUtils",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralityDurations",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebRadio.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { afterReadingWithSubLabel: {
		alignItems: "x1cy8zhl",
		paddingTop: "x1xrf6ya",
		$$css: !0
	} };
	function m(e) {
		var t = e.initialDuration, n = e.onAfterReadingClick, a = e.onChange, i = e.options, l = function(t) {
			a(t);
		}, m = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				onOK: o("WAWebModalManager").closeModalManager,
				okText: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, []), p = i.map(function(e) {
			if (e.type === "after_reading") {
				var a = t != null && o("WAWebAfterReadUtils").isAfterReadDuration(t), i = e.disabled === !0;
				return i && !a ? null : u.jsx(o("WAWebRadio.react").RadioWithLabel, {
					testid: "ephemerality-duration-after-reading",
					theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
					name: "duration",
					value: e.value,
					label: e.label,
					secondaryLabel: a ? o("WAWebEphemeralityDurations").durationToLabel(t) : void 0,
					checked: a,
					onChange: i ? r("WAWebNoop") : n != null ? n : r("WAWebNoop"),
					disabled: i,
					onDisabledClick: i ? m : void 0,
					tabIndex: 0,
					xstyle: a ? d.afterReadingWithSubLabel : void 0
				}, e.value);
			}
			return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
				testid: "ephemerality-duration-" + e.value,
				theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
				name: "duration",
				value: e.value,
				label: e.label,
				checked: e.value === t,
				onChange: function() {
					return l(e.value);
				},
				tabIndex: 0
			}, e.value);
		});
		return u.jsx("div", { children: p });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
