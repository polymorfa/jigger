__d("WAWebDefaultProfilePicture.react", [
	"WAWebDefaultPersonIcon.react",
	"WAWebShapeIcon.react",
	"WDSIconIcGroup.react",
	"WDSIconIcGroupAddFilled.react",
	"WDSIconIcPersonAddFilled.react",
	"WDSIconWdsIcBroadcastMessageFill.react",
	"WDSIconWdsIcCommunitiesFilled.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		defaultBackgroundStyle: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		defaultForegroundStyle: {
			color: "xhslqc4",
			$$css: !0
		},
		oneOneIconStyles: {
			width: "xg0jo4d",
			height: "xuv0xuj",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.backgroundStyles, n = e.directional, a = e.foregroundStyles, i = e.shape, l = i === void 0 ? "circle" : i, c = e.size, d = e.type, m = r("WDSIconIcGroup.react"), p, _;
		switch (d) {
			case "1-1":
				m = o("WAWebDefaultPersonIcon.react").DefaultPersonIcon, p = { align: "end" }, _ = u.oneOneIconStyles;
				break;
			case "group":
				m = r("WDSIconIcGroupAddFilled.react");
				break;
			case "community":
				m = r("WDSIconWdsIcCommunitiesFilled.react");
				break;
			case "contact":
				m = r("WDSIconIcPersonAddFilled.react");
				break;
			case "business-broadcast":
				m = r("WDSIconWdsIcBroadcastMessageFill.react");
				break;
		}
		return s.jsx(o("WAWebShapeIcon.react").ShapeIcon, babelHelpers.extends({
			theme: o("WAWebShapeIcon.react").ShapeIconTheme.Muted,
			backgroundStyles: [u.defaultBackgroundStyle, t],
			size: c,
			shape: l
		}, p, {
			Icon: m,
			iconStyles: [
				u.defaultForegroundStyle,
				a,
				_
			],
			directional: n
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
