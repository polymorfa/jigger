const WamCadminDemote = 3426 // channel: regular

type CadminDemoteEvent struct {
	CadminDemoteOrigin CADMINDEMOTEORIGINTYPE `wam:"cadmin_demote_origin"` // field 1
	CadminDemoteResult CADMINDEMOTERESULTTYPE `wam:"cadmin_demote_result"` // field 2
	IsLastCadminOrCreator bool `wam:"is_last_cadmin_or_creator"` // field 4
}