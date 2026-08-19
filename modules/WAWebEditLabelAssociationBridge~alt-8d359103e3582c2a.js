__d("WAWebEditLabelAssociationBridge", [
	"WALogger",
	"WAWebContactManagerGating",
	"WAWebDBLabelAssociationDatabaseApi",
	"WAWebDBLabelSublistDatabaseApi",
	"WAWebLabelJidSync",
	"WAWebLabelSublistSync",
	"WAWebLeadListConstants",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebSchemaLabel",
	"WAWebSchemaLabelAssociation",
	"WAWebSchemaLabelSublist",
	"WAWebSyncdCoreApi",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	function c(e, t) {
		var n = d(e, t.map(function(e) {
			return {
				labelAssociationType: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
				modelId: e.id.toString(),
				mutationIndexSegments: [e.id.toString({ legacy: !0 })]
			};
		}));
		return n;
	}
	async function d(t, n) {
		if (!(o("WAWebListsLabelGatingUtils").canEditLabelAssociation() || o("WAWebListsGatingUtils").isListsEnabled())) return Promise.reject(r("err")("editLabelAssociation is not supported"));
		var a = await r("WAWebLabelJidSync").createLabelAssociationMutations(t, n), i = o("WAWebContactManagerGating").contactManagerEnabled() ? await m(t, n) : {
			sublistLocalRemoves: [],
			sublistMutations: []
		}, l = i.sublistLocalRemoves, s = i.sublistMutations, u = s.length > 0 ? [
			"label-association",
			"chat",
			"label_sublist"
		] : ["label-association", "chat"];
		return o("WAWebSyncdCoreApi").lockForSync(u, [].concat(a, s), async function() {
			await p(t, n), await Promise.all(l.map(function(t) {
				return o("WAWebDBLabelSublistDatabaseApi").removeLabelSublist(t).catch(function(t) {
					throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["removeLabelSublist: clear lead sub-list on Lead removal failed"]))).verbose().sendLogs("edit-label-association-remove-lead-sublist-failed"), r("err")("removeLabelSublist for lead sub-list cleanup failed");
				});
			}));
		});
	}
	async function m(e, t) {
		var n = [], a = [], i = await Promise.all(e.map(function(e) {
			var t = e.id;
			return o("WAWebSchemaLabel").getLabelTable().get(t);
		}));
		e.forEach(function(e, l) {
			var s, u = e.type;
			if (((s = i[l]) == null ? void 0 : s.predefinedId) === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID && u === "remove") for (var c of t) {
				var d = c.modelId;
				a.push(r("WAWebLabelSublistSync").getLabelSublistRemoveMutation({
					predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
					chatJid: d
				})), n.push(o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
					predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
					chatJid: d
				}));
			}
		});
		var l = await Promise.all(a);
		return {
			sublistLocalRemoves: n,
			sublistMutations: l
		};
	}
	async function p(e, t) {
		var n = [], a = [];
		e.forEach(function(e) {
			var r = e.id, i = e.type;
			t.map(function(e) {
				var t = e.labelAssociationType, l = e.modelId;
				i === "add" ? n.push({
					labelId: r,
					associationId: l,
					type: t
				}) : a.push(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey({
					labelId: r,
					associationId: l,
					type: t
				}));
			});
		}), await Promise.all([o("WAWebDBLabelAssociationDatabaseApi").addOrEditLabelAssociations(n).catch(function(e) {
			throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["addOrEditLabelAssociations: label assoc table failed"]))).verbose().sendLogs("editLocalLabelAssociationMD-add-or-edit-label-associations-failed"), r("err")("addOrEditLabelAssociations into label association table failed");
		}), o("WAWebDBLabelAssociationDatabaseApi").removeLabelAssociations(a).catch(function(e) {
			throw o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["removeLabelAssociations from label association table failed"]))).verbose().sendLogs("editLocalLabelAssociationMD-remove-label-associations-failed"), r("err")("removeLabelAssociations form label association table failed");
		})]);
	}
	l.editLabelAssociation = c, l.editLocalLabelAssociationMD = p;
}), 98);
