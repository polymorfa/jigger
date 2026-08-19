__d("WAWebBizAdCreationAudienceRadioGroup.react", [
	"fbt",
	"WAWebBizAdCreationAudienceDetails.react",
	"WAWebBizAdCreationAudienceReducer",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebFlex.react",
	"WAWebRadio.react",
	"react",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["onPress"], u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useLayoutEffect;
	function _(t) {
		var n = t.audienceMap, a = t.adAccountID, i = t.audienceData, l = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationAudienceReducer")]), u = m(r("WAWebBizAdCreationLoggerContext"));
		p(function() {
			if (n.get(i.audienceID) == null) {
				var e = n.values().next().value;
				e != null && l({
					audienceData: e,
					type: "audience_reducer.select_audience"
				});
			}
		}, [n, l]), p(function() {
			var e = n.get(i.audienceID);
			i.audienceOption !== "SAVED_AUDIENCE" && e != null && l({
				audienceData: e,
				type: "audience_reducer.select_audience"
			});
		}, []);
		var d = Array.from(n.values()), _ = d.map(function(e) {
			return babelHelpers.extends({}, e, { onPress: function() {
				e.audienceID !== i.audienceID && u != null && r("WAWebBizAdLogger").log({
					adAccountID: a,
					endingValue: e.audienceID,
					event: "change_audience",
					extra: { audience_type: e.audienceOption },
					loggerContext: u,
					startingValue: i.audienceID
				}), l({
					audienceData: e,
					type: "audience_reducer.select_audience"
				});
			} });
		});
		return c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: c.jsx(o("WAWebFlex.react").FlexColumn, {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				gap: 4,
				role: "radiogroup",
				children: _.map(function(t, n) {
					var a = t.audienceID === i.audienceID, l = t.onPress, u = babelHelpers.objectWithoutPropertiesLoose(t, e);
					return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebRadio.react").RadioWithLabel, {
						checked: a,
						label: t.name,
						name: "audience-selection",
						onChange: l,
						secondaryLabel: t.audienceOption === "NCPP" ? s._(
							/*BTDS*/
							""
						) : void 0,
						theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
						value: t.name
					}, n), a ? c.jsx(r("WAWebBizAdCreationAudienceDetails.react"), { currentAudienceData: u }) : null] }, t.audienceID);
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			audienceData: e.audienceData
		};
	});
	l.default = f;
}), 226);
