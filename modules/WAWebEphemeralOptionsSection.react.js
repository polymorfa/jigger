__d("WAWebEphemeralOptionsSection.react", [
	"fbt",
	"WAWebAfterReadUtils",
	"WAWebConfirmPopup.react",
	"WAWebEphemeralityDurations",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebRadio.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { afterReadingWithSubLabel: {
		alignItems: "x1cy8zhl",
		paddingTop: "x1xrf6ya",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.initialDuration, a = e.onAfterReadingClick, i = e.onChange, l = e.options, s;
		t[0] !== i ? (s = function(t) {
			i(t);
		}, t[0] = i, t[1] = s) : s = t[1];
		var c = s, m = p, _;
		if (t[2] !== n || t[3] !== c || t[4] !== a || t[5] !== l) {
			var f;
			t[7] !== n || t[8] !== c || t[9] !== a ? (f = function(t) {
				if (t.type === "after_reading") {
					var e = n != null && o("WAWebAfterReadUtils").isAfterReadDuration(n), i = t.disabled === !0;
					return i && !e ? null : u.jsx(o("WAWebRadio.react").RadioWithLabel, {
						testid: "ephemerality-duration-after-reading",
						theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
						name: "duration",
						value: t.value,
						label: t.label,
						secondaryLabel: e ? o("WAWebEphemeralityDurations").durationToLabel(n) : void 0,
						checked: e,
						onChange: i ? r("WAWebNoop") : a != null ? a : r("WAWebNoop"),
						disabled: i,
						onDisabledClick: i ? m : void 0,
						tabIndex: 0,
						xstyle: e ? d.afterReadingWithSubLabel : void 0
					}, t.value);
				}
				return u.jsx(o("WAWebRadio.react").RadioWithLabel, {
					testid: "ephemerality-duration-" + t.value,
					theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
					name: "duration",
					value: t.value,
					label: t.label,
					checked: t.value === n,
					onChange: function() {
						return c(t.value);
					},
					tabIndex: 0
				}, t.value);
			}, t[7] = n, t[8] = c, t[9] = a, t[10] = f) : f = t[10], _ = l.map(f), t[2] = n, t[3] = c, t[4] = a, t[5] = l, t[6] = _;
		} else _ = t[6];
		var g = _, h;
		return t[11] !== g ? (h = u.jsx("div", { children: g }), t[11] = g, t[12] = h) : h = t[12], h;
	}
	function p() {
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
	}
	l.default = m;
}), 226);
