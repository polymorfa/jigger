__d("WAWebLinkDeviceApiCmdTooltip.react", [
	"fbt",
	"WAWebApi",
	"WAWebFbtAppName",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingBlock15: {
		paddingTop: "xqy66fx",
		paddingBottom: "xr1496l",
		$$css: !0
	} }, m = { tooltip: {
		borderStartStartRadius: "x16qb05n",
		borderStartEndRadius: "xi7iut8",
		borderEndEndRadius: "x1dm3dyd",
		borderEndStartRadius: "x1pv694p",
		display: "x1rg5ohu",
		position: "x1n2onr6",
		zIndex: "x1vjfegm",
		top: "xu5yr9u",
		maxWidth: "x65f84u",
		textWrap: "xk4td0m",
		backgroundColor: "x1c2u55m",
		color: "x10e1pyi",
		fontSize: "x1f6kntn",
		textAlign: "x2b8uid",
		"::before_position": "x1hmns74",
		"::before_display": "x1fgarty",
		"::before_width": "xk9ib7f",
		"::before_height": "x1943h6x",
		"::before_content": "x1cpjm7i",
		"::before_borderInlineStartWidth": "x1c3l08f",
		"::before_borderInlineEndWidth": "xb1m30w",
		"::before_borderInlineStartStyle": "x1rovbrg",
		"::before_borderInlineEndStyle": "x1v3rft4",
		"::before_borderInlineStartColor": "x16dwbfg",
		"::before_borderInlineEndColor": "x18ylnmp",
		"::before_borderBottomWidth": "x1bsu2cp",
		"::before_borderBottomStyle": "x1opv7go",
		"::before_borderBottomColor": "x1vfcpi8",
		"::before_top": "x9cv1sk",
		"::before_bottom": "x1ncvqdy",
		"::before_insetInlineStart": "xfbisj7",
		"::before_marginInlineStart": "x1gtk6dz",
		"::before_transform": "x1p0xrc1",
		$$css: !0
	} };
	function p(t) {
		return c.jsx("div", {
			className: "x10l6tqk x10w3d4m xbudbmw xvue9z xo5owp6 x1plvlek xryxfnj x2b8uid",
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.tooltip, d.paddingBlock15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: t.tip }))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.apiCmd;
		if (t) switch (t.resultType) {
			case o("WAWebApi").APICmd.GROUP_INVITE: return c.jsx(p, { tip: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", c.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
					/*BTDS*/
					""
				) }))]
			) });
			case o("WAWebApi").APICmd.MSG_SEND: return c.jsx(p, { tip: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", c.jsx(o("WAWebFbtAppName").WAWebAppShortName, { children: s._(
					/*BTDS*/
					""
				) }))]
			) });
		}
		return c.jsx(c.Fragment, {});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
