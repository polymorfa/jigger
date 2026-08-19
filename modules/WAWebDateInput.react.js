__d("WAWebDateInput.react", [
	"WAWeb-moment",
	"WAWebL10N",
	"WAWebUA",
	"WAWebUnstyledButton.react",
	"WDSIconIcCalendarMonth.react",
	"WDSText.react",
	"fbs",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useMemo, m = c.useRef, p = c.useState, _ = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		marginInlineEnd5: {
			marginInlineEnd: "xf6vk7d",
			$$css: !0
		}
	}, f = {
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
	function g(t) {
		var n = t.ariaLabel, a = t.displayFormat, i = t.getDateBoundaries, l = t.label, s = t.name, c = t.onChange, g = t.testid, h = t.theme, y = t.value, C = m(), b = p(!1), v = b[0], S = b[1], R = r("WAWebL10N").isRTL(), L = d(function() {
			return i();
		}, [i]), E = L[0], k = L[1], I = function(t) {
			var e = t.target.value;
			c(e);
		}, T = function() {
			var e;
			return (e = C.current) == null ? void 0 : e.showPicker();
		}, D = function() {
			return S(!1);
		}, x = function() {
			return S(!0);
		}, $ = h === "about", P = l != null && $, N = [
			f.container,
			$ ? f.aboutBorder : f.eventBorder,
			!$ && _.marginBottom10,
			!$ && _.paddingBlock5,
			v && ($ ? f.aboutActiveBorder : f.eventActiveBorder),
			P && f.labeledContainer
		], M = !("showPicker" in HTMLInputElement.prototype), w = (M || o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari) && v, A = r("WAWeb-moment")(y), F = a != null || !A.isValid() ? A.format(a != null ? a : "LL") : Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
			day: "numeric",
			month: "long",
			year: "numeric"
		}).format(A.toDate());
		return u.jsxs("section", babelHelpers.extends({}, (e || (e = r("stylex"))).props(N), { children: [P && u.jsx("div", {
			className: "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
			children: u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: l
			})
		}), u.jsxs("span", {
			className: "x1iyjqo2 x78zum5",
			role: "textbox",
			tabIndex: v ? -1 : 0,
			onFocus: x,
			children: [u.jsx("span", {
				className: "x1iyjqo2",
				children: v ? u.jsx("input", babelHelpers.extends({ ref: C }, {
					0: { className: "xgcd1z6 x1heor9g xh8yej3 xrv4cvt x5yr21d x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xolhmmf xk5dnk7 x1ti3vn2 x1jsrl1z x1yc453h" },
					1: { className: "xgcd1z6 x1heor9g xh8yej3 xrv4cvt x5yr21d x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xolhmmf xk5dnk7 x1ti3vn2 x1jsrl1z xp4054r" }
				}[!!R << 0], {
					type: "date",
					name: s,
					value: y,
					"aria-label": n,
					"data-testid": g,
					onChange: I,
					min: E,
					max: k,
					autoFocus: !0,
					onBlur: D
				})) : u.jsx("span", {
					className: "xh8yej3 xrv4cvt x5yr21d",
					children: F
				})
			}), !w && u.jsx(r("WAWebUnstyledButton.react"), {
				onClick: T,
				xstyle: _.marginInlineEnd5,
				"aria-label": r("fbs")._(
					/*BTDS*/
					""
				),
				onBlur: D,
				children: u.jsx(r("WDSIconIcCalendarMonth.react"), {
					height: 16,
					width: 16,
					xstyle: f.iconColor
				})
			})]
		})] }));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.DateInput = g;
}), 226);
