__d("WAWebContactManagerPipelineView.react", [
	"fbt",
	"WAJids",
	"WALogger",
	"WAWebContactManagerCustomerProfileUpsertMutation",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebContactManagerSearchEmptyState.react",
	"WAWebContactManagerSearchUtils",
	"WAWebCustomerDataCollection",
	"WAWebLeadStage",
	"WAWebPipelineColumn.react",
	"WAWebPipelineDragAndDrop.react",
	"react",
	"useWAWebServerCustomerDataByLeadStage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useEffectEvent, f = d.useMemo, g = {
		query: "",
		leadStages: [],
		labelId: null,
		acquisitionSource: null,
		lastMessageRange: null
	};
	function h(t) {
		var n = t.onCustomerClick, a = t.searchOptions, i = r("useWAWebServerCustomerDataByLeadStage")(), l = i.groupedData, u = i.moveCustomer, d = f(function() {
			var e = a != null ? a : g;
			if (!o("WAWebContactManagerSearchUtils").hasActiveFilter(e)) return l;
			var t = new Map();
			for (var n of l) {
				var r = n[0], i = n[1];
				t.set(r, o("WAWebCustomerDataCollection").CustomerDataCollection.filterCustomers(i, e));
			}
			return t;
		}, [l, a]), h = f(function() {
			var e = 0;
			for (var t of d) {
				var n = t[1];
				e += n.length;
			}
			return e;
		}, [d]), y = m(function(t, n, r) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.editPipelineCardDrag(n, r), u(t, n, r), o("WAWebContactManagerCustomerProfileUpsertMutation").upsertCustomerProfileToServer(o("WAJids").unsafeCoerceToChatJid(t), { leadStage: r }).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] Failed to persist pipeline stage change: ", ""])), String(t)).sendLogs("customer_manager_pipeline_stage_server_upsert_failed");
			});
		}, [u]), C = _(function() {
			var e = {};
			for (var t of d) {
				var n = t[0], r = t[1];
				e[String(n)] = r.length;
			}
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewPipeline(e);
		});
		p(function() {
			C();
		}, []);
		var b = m(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickPipelineCustomerCard(e.leadStage), n(e);
		}, [n]), v = a != null ? a : g;
		return h === 0 && o("WAWebContactManagerSearchUtils").hasActiveFilter(v) ? c.jsx(r("WAWebContactManagerSearchEmptyState.react"), { testid: "customer-manager-pipeline-search-empty" }) : c.jsx(o("WAWebPipelineDragAndDrop.react").PipelineDragAndDropWrapper, { children: c.jsx("div", {
			className: "x5yr21d xdx6fka xvtqlqk x9f619",
			role: "region",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsx("div", {
				className: "x78zum5 x1q0g3np xs2akgl x5yr21d xw2csxc x1p57kb1 xvpt6g3 x9f619",
				"data-testid": "customer-manager-pipeline-view",
				children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function(e) {
					var t;
					return c.jsx(r("WAWebPipelineColumn.react"), {
						customers: (t = d.get(e)) != null ? t : [],
						onCustomerClick: b,
						stage: e,
						onCardDrop: y
					}, e);
				})
			})
		}) });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
