__d("WAWebTimeInput.react", [
	"WAWebL10N",
	"WAWebUA",
	"WAWebUnstyledButton.react",
	"WDSIconIcSchedule.react",
	"WDSText.react",
	"fbs",
	"react",
	"stylex",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useRef, d = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		marginInlineEnd9: {
			marginInlineEnd: "x19dbzi3",
			$$css: !0
		}
	}, m = {
		container: {
			flexGrow: "x1iyjqo2",
			flexBasis: "x1r8uery",
			display: "x78zum5",
			$$css: !0
		},
		eventBorder: {
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x1dby8ki",
			$$css: !0
		},
		aboutBorder: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingInlineStart: "x12w63v0",
			height: "x1vqgdyp",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		eventActiveBorder: {
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		aboutActiveBorder: {
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		labeledContainer: {
			position: "x1n2onr6",
			marginTop: "x1xmf6yo",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ariaLabel, a = t.label, i = t.min, l = t.name, s = t.onChange, p = t.testid, _ = t.theme, f = t.value, g = c(), h = r("useWAWebToggle")(!1), y = h[0], C = h[1], b = r("WAWebL10N").isRTL();
		function v(e) {
			var t = e.target.value;
			s(t);
		}
		function S() {
			var e;
			(e = g.current) == null || e.showPicker();
		}
		var R = _ === "about", L = a != null && R, E = [
			m.container,
			R ? m.aboutBorder : m.eventBorder,
			!R && d.marginBottom10,
			!R && d.paddingBlock5,
			y && (R ? m.aboutActiveBorder : m.eventActiveBorder),
			L && m.labeledContainer
		], k = !("showPicker" in HTMLInputElement.prototype), I = k || o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari;
		return u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(E), { children: [
			L && u.jsx("div", {
				className: "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
				children: u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: a
				})
			}),
			u.jsx("span", {
				className: "x1iyjqo2",
				children: u.jsx("input", babelHelpers.extends({ ref: g }, {
					0: { className: "xh8yej3 x5yr21d xrv4cvt xgcd1z6 x1heor9g x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xolhmmf x18tydcn x1a7k29d x15fb772 xx784q3 x1yc453h" },
					1: { className: "xh8yej3 x5yr21d xrv4cvt xgcd1z6 x1heor9g x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xolhmmf x18tydcn x1a7k29d x15fb772 xx784q3 xp4054r" }
				}[!!b << 0], {
					type: "time",
					name: l,
					value: f,
					"aria-label": n,
					"data-testid": p,
					min: i,
					onChange: v,
					onFocus: C,
					onBlur: C
				}))
			}),
			!I && u.jsx(r("WAWebUnstyledButton.react"), {
				onClick: S,
				xstyle: d.marginInlineEnd9,
				onFocus: C,
				onBlur: C,
				"aria-label": r("fbs")._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("WDSIconIcSchedule.react"), {
					height: 20,
					width: 20,
					xstyle: m.iconColor,
					testid: "schedule_time_picker_clock"
				})
			})
		] }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.TimeInput = p;
}), 226);
