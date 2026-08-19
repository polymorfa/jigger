__d("WAWebBizLabelEditingAction", [
	"invariant",
	"WALogger",
	"WATimeUtils",
	"WAWebDBLabelAssociationDatabaseApi",
	"WAWebDBLabelDatabaseApi",
	"WAWebLabelCollection",
	"WAWebLabelConstants",
	"WAWebLabelJidSync",
	"WAWebLabelSync",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebSchemaLabel",
	"WAWebSchemaLabelAssociation",
	"WAWebSyncdCoreApi"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = 0;
	async function p(t, n) {
		o("WAWebListsLabelGatingUtils").labelsEditingEnabled() || s(0, 75240);
		var a;
		try {
			a = await o("WAWebDBLabelDatabaseApi").getNextLabelId();
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["labelAddAction: failed to generate next label id with error ", ""])), t).sendLogs("labelAddAction-failed");
			return;
		}
		var i = o("WATimeUtils").unixTime(), l = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t), c, d;
		o("WAWebListsGatingUtils").isListsEnabled() && (c = !0, d = o("WAWebSchemaLabel").ListType.CUSTOM);
		var m = r("WAWebLabelSync").getLabelMutation({
			color: n,
			deleted: !1,
			id: String(a),
			isActive: c,
			name: t,
			predefinedId: l,
			timestamp: i,
			type: d
		});
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[Label] labelAddAction: id ", ", mutation generated"])), a);
		var p = {
			id: String(a),
			name: t,
			colorIndex: n,
			predefinedId: l,
			isActive: c,
			type: d
		};
		return await o("WAWebSyncdCoreApi").lockForSync(["label"], [m], async function() {
			await o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
		}), o("WAWebLabelCollection").LabelCollection.add(babelHelpers.extends({}, p)), a;
	}
	async function _(e, t, n, a, i, l) {
		o("WAWebListsLabelGatingUtils").labelsEditingEnabled() || s(0, 75241);
		var u = o("WATimeUtils").unixTime(), d = r("WAWebLabelSync").getLabelMutation({
			color: a,
			deleted: !1,
			id: e,
			isActive: i,
			name: t,
			predefinedId: n != null ? n : m,
			timestamp: u,
			type: l
		});
		o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[Label] labelEditAction: id ", ", mutation generated"])), e);
		var p = {
			id: e,
			name: t,
			colorIndex: a,
			predefinedId: n != null ? n : null,
			isActive: i != null ? i : void 0,
			type: l != null ? l : void 0
		};
		await o("WAWebSyncdCoreApi").lockForSync(["label"], [d], async function() {
			await o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
		}), o("WAWebLabelCollection").LabelCollection.add(babelHelpers.extends({}, p), { merge: !0 });
	}
	async function f(e) {
		var t = e.color, n = e.labelId, a = e.name;
		o("WAWebListsLabelGatingUtils").labelsEditingEnabled() || s(0, 75242);
		var i = await o("WAWebDBLabelAssociationDatabaseApi").queryLabelAssociationsForLabelIds([n]), l = o("WATimeUtils").unixTime(), u = r("WAWebLabelSync").getLabelMutation({
			color: t,
			deleted: !0,
			id: n,
			isActive: void 0,
			name: a,
			predefinedId: m,
			timestamp: l,
			type: void 0
		}), c = [], p = i.filter(function(e) {
			return e.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid;
		});
		p.length > 0 && (c = await r("WAWebLabelJidSync").createLabelAssociationMutations([{
			id: n,
			type: "remove"
		}], p.map(function(e) {
			return {
				labelAssociationType: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
				modelId: e.associationId,
				mutationIndexSegments: [e.associationId]
			};
		}))), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[Label] labelDeleteAction: id ", ", mutation generated"])), n), await o("WAWebSyncdCoreApi").lockForSync([
			"label",
			"label-association",
			"chat"
		], [u].concat(c), async function() {
			await o("WAWebDBLabelDatabaseApi").removeLabel(n), i.length > 0 && await o("WAWebDBLabelAssociationDatabaseApi").removeLabelAssociations(i.map(function(e) {
				return o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey(e);
			}));
		}), o("WAWebLabelCollection").LabelCollection.remove(n);
	}
	l.labelAddAction = p, l.labelEditAction = _, l.labelDeleteAction = f;
}), 98);
