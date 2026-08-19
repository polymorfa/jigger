__d("WAWebEditForm.react", [
	"fbt",
	"WALogger",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileEdit",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebButton.react",
	"WAWebDrawerSection.react",
	"WAWebEditFormEditFieldsForm.react",
	"WAWebEditFormLogEvents",
	"WAWebEditFormTypes",
	"WAWebEditFormUiErrorUtils",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebSpinner.react",
	"WAWebUserPrefsMeUser",
	"WAWebUtilsLogQplEvents",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"fbs",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useState, g = {
		loadingSpinner: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		retryButton: {
			height: "xc9qbxq",
			$$css: !0
		}
	}, h = async function() {
		var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
		t && t.markStale();
		var n = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e);
		return n.serialize();
	}, y = async function() {
		var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.update(e), n = Array.isArray(t) ? t[0] : t;
		return n.serialize();
	};
	function C(t) {
		var n = t.entryPoint, a = t.isRefreshed, i = f(o("WAWebEditFormTypes").LoadType.PENDING), l = i[0], c = i[1], m = f(), C = m[0], b = m[1], v = _(function() {
			return Math.floor(2147483648 * Math.random()).toString();
		}, []), S = function() {
			c(o("WAWebEditFormTypes").LoadType.PENDING), h().then(function(e) {
				b(e), c(o("WAWebEditFormTypes").LoadType.DONE), o("WAWebEditFormLogEvents").logProfileOpen(e, v), o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.viewProfile(n);
			}).catch(function() {
				c(o("WAWebEditFormTypes").LoadType.ERROR);
			});
		};
		return p(function() {
			S();
		}, []), l === o("WAWebEditFormTypes").LoadType.PENDING ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.loadingSpinner, o("WDSPaddings.stylex").wdsPaddings.padding0), { children: d.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 24,
			stroke: 6
		}) })) : l === o("WAWebEditFormTypes").LoadType.ERROR ? d.jsx(r("WAWebDrawerSection.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			theme: "refresh",
			animation: !1,
			children: d.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: [d.jsx(r("WAWebFlexItem.react"), { children: s._(
					/*BTDS*/
					""
				) }), d.jsx(r("WAWebFlexItem.react"), {
					xstyle: [g.retryButton, o("WDSMargins.stylex").wdsMargins.marginStart16],
					children: d.jsx(o("WAWebButton.react").Button, {
						onClick: S,
						type: "simplified",
						children: s._(
							/*BTDS*/
							""
						)
					})
				})]
			})
		}) : l === o("WAWebEditFormTypes").LoadType.DONE && C ? d.jsx(r("WAWebEditFormEditFieldsForm.react"), {
			isRefreshed: a,
			sessionId: v,
			businessProfile: C,
			saveBusinessProfile: async function(n) {
				try {
					await o("WAWebBusinessProfileEdit").editBusinessProfile(n);
				} catch (t) {
					throw o("WAWebEditFormUiErrorUtils").showError(r("fbs")._(
						/*BTDS*/
						""
					).toString()), o("WAWebUtilsLogQplEvents").qplEndProfileSave(3), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["business_profile:edit_form save failed"]))).sendLogs("businessProfile edit handled server error - " + t.status), t;
				}
				try {
					var t = await y();
					return b(t), o("WAWebUtilsLogQplEvents").qplEndProfileSave(2), t;
				} catch (e) {
					throw o("WAWebEditFormUiErrorUtils").showError(r("fbs")._(
						/*BTDS*/
						""
					).toString()), o("WAWebUtilsLogQplEvents").qplEndProfileSave(3), e;
				}
			}
		}) : null;
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
