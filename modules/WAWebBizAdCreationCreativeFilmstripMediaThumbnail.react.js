__d("WAWebBizAdCreationCreativeFilmstripMediaThumbnail.react", [
	"fbt",
	"WAWebBizAdCreationCreativeThumbnail.react",
	"WAWebStateUtils",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSSpinner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = o("react-compiler-runtime").c(32), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.attachMedia, m = l.disabled, p = l.loading, _ = l.onDeleteClick, f = l.onEditClick, g = l.uploading, h = g === void 0 ? !1 : g, y = d(!1), C = y[0], b = y[1], v;
		n[3] !== u || n[4] !== m || n[5] !== f ? (v = function(t) {
			m || f(o("WAWebStateUtils").unproxy(u), t);
		}, n[3] = u, n[4] = m, n[5] = f, n[6] = v) : v = n[6];
		var S = v, R;
		n[7] !== u || n[8] !== m || n[9] !== _ ? (R = function(t) {
			m || _(o("WAWebStateUtils").unproxy(u), t);
		}, n[7] = u, n[8] = m, n[9] = _, n[10] = R) : R = n[10];
		var L = R, E;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1rg5ohu x2lah0s x6ikm8r x10wlt62 x1n2onr6 xxymvpz x1vjfegm" }, n[11] = E) : E = n[11];
		var k;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), n[12] = k) : k = n[12];
		var I, T;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return b(!0);
		}, T = function() {
			return b(!1);
		}, n[13] = I, n[14] = T) : (I = n[13], T = n[14]);
		var D;
		n[15] !== u ? (D = c.jsx(r("WAWebBizAdCreationCreativeThumbnail.react"), {
			attachMediaProp: u,
			variant: "Creative"
		}), n[15] = u, n[16] = D) : D = n[16];
		var x;
		n[17] !== h ? (x = h ? c.jsx("div", {
			className: "x6s0dn4 xng5x3b x78zum5 x13vifvy xtijo5x x1ey2m1c x1o0tod xl56j7k x10l6tqk xa9119d",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "biz_native_ads_media_uploading_spinner",
			role: "status",
			children: c.jsx(r("WDSSpinner.react"), { size: 28 })
		}) : null, n[17] = h, n[18] = x) : x = n[18];
		var $;
		n[19] !== m || n[20] !== L || n[21] !== S || n[22] !== C || n[23] !== p || n[24] !== h ? ($ = h ? null : c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1trrmfo x78zum5 x1ngp85i xe9xzdg xg01cxk x10l6tqk x1g2r6go x19991ni x9lcvmn x11uqc5h" },
			1: { className: "x1trrmfo x78zum5 x1ngp85i xe9xzdg x10l6tqk x1g2r6go x19991ni x9lcvmn x11uqc5h x1hc1fzr" }
		}[!!C << 0], { children: [c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcEdit.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			disabled: !p && m,
			loading: p,
			onPress: S,
			size: "small",
			testid: "biz_native_ads_media_thumbnail_edit_button",
			type: "media",
			variant: "tonal"
		}), c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			disabled: m,
			onPress: L,
			size: "small",
			type: "media",
			variant: "tonal"
		})] })), n[19] = m, n[20] = L, n[21] = S, n[22] = C, n[23] = p, n[24] = h, n[25] = $) : $ = n[25];
		var P;
		return n[26] !== i || n[27] !== $ || n[28] !== D || n[29] !== x || n[30] !== h ? (P = c.jsxs("div", babelHelpers.extends({}, E, {
			ref: i,
			"aria-busy": h,
			"aria-label": k,
			"data-testid": "biz_native_ads_media_thumbnail",
			onMouseEnter: I,
			onMouseLeave: T,
			children: [
				D,
				x,
				$
			]
		})), n[26] = i, n[27] = $, n[28] = D, n[29] = x, n[30] = h, n[31] = P) : P = n[31], P;
	}
	l.default = m;
}), 226);
