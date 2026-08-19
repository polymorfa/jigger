/** <iq type="get" xmlns="abt">. Replies with one of: Success, ErrorNoRetry, ErrorRetry. */
export function buildAbPropsGetExperimentConfig(hash?: string, refreshId?: number): BinaryNode {
  return { tag: 'iq', attrs: { xmlns: 'abt', to: 's.whatsapp.net', type: 'get' }, content: [
      { tag: 'props', attrs: { protocol: '1', hash: hash, refresh_id: refreshId } },
    ] }
}