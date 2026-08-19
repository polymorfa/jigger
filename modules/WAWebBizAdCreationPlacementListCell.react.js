__d("WAWebBizAdCreationPlacementListCell.react", [
	"FBLogger",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPlacementReducer",
	"WAWebBizAdLogger",
	"WAWebBizCheckbox.react",
	"react",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext;
	function m(e) {
		var t = e.isSelected, n = e.label, o = e.platformType, a = e.selectedPublisherPlatforms, i = e.adAccountID, l = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationPlacementReducer")]), u = d(r("WAWebBizAdCreationLoggerContext")), m = c(function() {
			try {
				if (l({
					publisherPlatform: o,
					type: "placement_reducer.toggle_publisher_platform"
				}), u != null) {
					var e = a.includes(o) ? a.filter(function(e) {
						return e !== o;
					}) : [].concat(a, [o]);
					r("WAWebBizAdLogger").logCritical({
						adAccountID: i,
						event: "placements_options_change",
						extra: { selected_platforms: e.join(", ") },
						loggerContext: u
					}), r("WAWebBizAdLogger").log({
						adAccountID: i,
						event: "toggle_publisher_platform",
						extra: { value: o },
						loggerContext: u
					});
				}
			} catch (e) {
				u != null && r("WAWebBizAdLogger").logCritical({
					adAccountID: i,
					event: "placements_flow_action_error",
					extra: {
						error_message: e instanceof Error ? e.message : "Unknown error",
						platform_type: o
					},
					loggerContext: u
				});
			}
		}, [
			i,
			l,
			u,
			o,
			a
		]);
		return n == null ? (r("FBLogger")("wa_ctwa_web").mustfix("PlacementListCell rendered with null label for platform: " + o), null) : s.jsx(r("WAWebBizCheckbox.react"), {
			isDisabled: a.length < 2 && t,
			label: n,
			onChange: m,
			testid: "biz_native_ads_placement_" + String(o).toLowerCase(),
			value: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = r("withWAWebBizAdCreationSpecContext")(m, function(e) {
		var t;
		return { adAccountID: (t = e.adAccountData) == null ? void 0 : t.legacyAccountID };
	});
	l.default = p;
}), 98);
