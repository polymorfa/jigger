/** <iq type="set" xmlns="w:g2">. Replies with one of: NewGroupSuggestionSuccess, ExistingGroupsSuggestionSuccess, ClientError, ServerError. */
export function buildGroupsCreateSubGroupSuggestion(to: string, to: string): BinaryNode {
  return { tag: 'iq', attrs: { to: to, xmlns: 'w:g2', type: 'set' }, content: [
      { tag: 'sub_group_suggestion', attrs: {  } },
    ] }
}