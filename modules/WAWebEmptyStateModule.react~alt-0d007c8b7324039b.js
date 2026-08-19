__d("WAWebEmptyStateModule.react", [
	"WAWebABProps",
	"WAWebFilePicker.react",
	"WAWebQuickActionLogging",
	"WAWebTabOrder",
	"WDSActionTile.react",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSText.react",
	"WDSTextLayout.react",
	"react",
	"stylex",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef, d = {
		wrapper: {
			backgroundColor: "xs1q97v",
			width: "xh8yej3",
			height: "x5yr21d",
			textAlign: "x2b8uid",
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		titleCardWrapper: {
			maxWidth: "x1rjt51p",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			marginTop: "x98l61r",
			marginInlineEnd: "xviac27",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			boxSizing: "x9f619",
			height: "xg7h5cd",
			$$css: !0
		},
		titleCardWrapperLegacy: {
			rowGap: "x1j3ira4",
			columnGap: "xrdqr27",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.titleCard, a;
		return n.Illustration ? a = u.jsx(n.Illustration, {
			height: 88,
			width: 132
		}) : n.animation && (a = n.animation), o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? u.jsx("div", {
			"data-testid": "intro_panel_v2_title_card",
			className: "x1rjt51p x1280gxy x1g83kfv x3qq2k7 x2x8art x1qor8vf xl7twdi xyo0t3i xvg22vi xb0esv5 x98l61r xviac27 x1ua1l7f xlese2p x9f619 xg7h5cd",
			children: u.jsx(r("WDSTextLayout.react"), {
				illustration: a,
				headline: n.title,
				body: n.description,
				actionsWidth: "hug",
				primaryAction: {
					label: n.actionButtonLabel,
					onPress: n.actionButtonClickHandler,
					variant: "tonal",
					size: "small",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE
				}
			})
		}) : u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.titleCardWrapper, d.titleCardWrapperLegacy, o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.alignCenter), { children: [
			a,
			u.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.gapSingle), { children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Headline2",
				robotoPropValue: 3,
				children: n.title
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: n.description
			})] })),
			u.jsx(r("WDSButton.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
				type: "default",
				variant: "tonal",
				size: "small",
				label: n.actionButtonLabel,
				onPress: n.actionButtonClickHandler
			})
		] }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.Icon, n = e.actionId, a = e.clickHandler, i = e.disabled, l = e.filePicker, s = e.numActionsVisible, d = e.slotPosition, m = e.surface, p = m === void 0 ? "chats" : m, _ = e.testid, f = e.title, g = c();
		function h() {
			if (n != null && d != null && s != null && o("WAWebQuickActionLogging").logQuickActionTap(p, n, d, s), l != null) {
				var e;
				(e = g.current) == null || e.open();
				return;
			}
			a == null || a();
		}
		return u.jsxs("div", { children: [u.jsx(r("WDSActionTile.react"), {
			Icon: t,
			disabled: i,
			label: f,
			onPress: h,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
			testid: _ != null ? _ : "intro-panel-empty-state-action-tile"
		}), l != null ? u.jsx(r("WAWebFilePicker.react"), babelHelpers.extends({ ref: g }, l)) : null] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.surface, n = t === void 0 ? "chats" : t, a = e.wdsActions, i = a.length, l = r("useVisibility")({ onVisible: function() {
			o("WAWebQuickActionLogging").logQuickActionSurfaceView(n, i), a.forEach(function(e, t) {
				e.actionId != null && o("WAWebQuickActionLogging").logQuickActionImpression({
					actionId: e.actionId,
					numActionsVisible: i,
					slotPosition: t,
					surface: n
				});
			});
		} }), s = l[0];
		return u.jsx("div", {
			ref: s,
			className: "x78zum5 xl56j7k x1f0uite xs2akgl x98l61r",
			"data-testid": "intro-panel-empty-state-action-tile-group",
			children: a.map(function(e, t) {
				return u.jsx(p, babelHelpers.extends({}, e, {
					surface: n,
					slotPosition: t,
					numActionsVisible: i
				}), e.title.toString());
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.banner, a = t.titleCard, i = t.wdsActions;
		return u.jsxs("section", babelHelpers.extends({ "data-testid": "intro-panel" }, (e || (e = r("stylex"))).props(d.wrapper, o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexColumn), { children: [
			n,
			a && u.jsx(m, { titleCard: a }),
			u.jsx(_, { wdsActions: i })
		] }));
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
