__d("WAWebBusinessCategoryField.react", [
	"fbt",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessCategoryModal.react",
	"WAWebBusinessProfileLabels",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WDSButton.react",
	"WDSChip.react",
	"WDSIconIcAdd.react",
	"WDSIconIcCategory.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		editButton: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		fieldContainer: {
			alignSelf: "xkh2ocl",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		fieldContainerHover: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			":hover_backgroundColor": "x1n67ipk",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = o("react-compiler-runtime").c(30), a = e.categories, i = e.locked, l = e.onLockedClick, d = e.saveBusinessProfile, _ = e.saveBusinessProfileGraphQL, f;
		n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== d || n[4] !== _ ? (f = function() {
			if (o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.clickCategory(), i === !0) {
				l != null && l();
				return;
			}
			d != null && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBusinessCategoryModal.react"), {
				initialCategories: a != null ? a : [],
				saveBusinessProfile: d,
				saveBusinessProfileGraphQL: _,
				onCancel: p,
				onSaveSuccess: r("WAWebNoop")
			}));
		}, n[0] = a, n[1] = i, n[2] = l, n[3] = d, n[4] = _, n[5] = f) : f = n[5];
		var g = f, h = (t = a == null ? void 0 : a.length) != null ? t : 0, y = r(h === 3 ? "WDSIconIcEdit.react" : "WDSIconIcAdd.react"), C;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebBizProfileGatingUtils").businessProfileRefreshV2Enabled(), n[6] = C) : C = n[6];
		var b = C, v = d != null || i === !0 || l != null, S = b && h > 0 && v, R;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (R = [c.fieldContainer, b && c.fieldContainerHover], n[7] = R) : R = n[7];
		var L;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			justify: "center",
			xstyle: c.iconContainer,
			children: u.jsx(r("WDSIconIcCategory.react"), {})
		}), n[8] = L) : L = n[8];
		var E = S ? 1 : 0, k;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: o("WAWebBusinessProfileLabels").getCategoryLabel()
		}), n[9] = k) : k = n[9];
		var I;
		n[10] !== a ? (I = a != null && a.map(m), n[10] = a, n[11] = I) : I = n[11];
		var T;
		n[12] !== y || n[13] !== v || n[14] !== a || n[15] !== g || n[16] !== S ? (T = v && !S && u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			Icon: y,
			onPress: g,
			testid: "biz_profile_category_edit_button",
			"aria-label": a != null && a.length > 0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), n[12] = y, n[13] = v, n[14] = a, n[15] = g, n[16] = S, n[17] = T) : T = n[17];
		var D;
		n[18] !== I || n[19] !== T ? (D = u.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			children: [I, T]
		}), n[18] = I, n[19] = T, n[20] = D) : D = n[20];
		var x;
		n[21] !== E || n[22] !== D ? (x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			gap: 8,
			grow: E,
			children: [k, D]
		}), n[21] = E, n[22] = D, n[23] = x) : x = n[23];
		var $;
		n[24] !== g || n[25] !== S ? ($ = S && u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			label: s._(
				/*BTDS*/
				""
			),
			xstyle: c.editButton,
			onPress: g,
			testid: "biz_profile_category_edit_button"
		}), n[24] = g, n[25] = S, n[26] = $) : $ = n[26];
		var P;
		return n[27] !== x || n[28] !== $ ? (P = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: R,
			children: [
				L,
				x,
				$
			]
		}), n[27] = x, n[28] = $, n[29] = P) : P = n[29], P;
	}
	function m(e) {
		return u.jsx(r("WDSChip.react"), {
			label: e.localized_display_name,
			isNeutral: !0,
			testid: "biz_profile_category_chip"
		}, e.id);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveCategory(o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.UNCHANGED);
	}
	l.WAWebBusinessCategoryField = d;
}), 226);
